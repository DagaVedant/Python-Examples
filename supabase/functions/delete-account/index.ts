import { createClient } from "npm:@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

function json(body: unknown, status = 200): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: { ...corsHeaders, "Content-Type": "application/json" },
  });
}

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response("ok", { headers: corsHeaders });
  if (req.method !== "POST") return json({ error: "method_not_allowed" }, 405);

  try {
    const supabase = createClient(
      Deno.env.get("SUPABASE_URL")!,
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!,
    );

    const token = (req.headers.get("Authorization") ?? "").replace("Bearer ", "");
    if (!token) return json({ error: "unauthorized" }, 401);

    const { data: userData, error: userError } = await supabase.auth.getUser(token);
    if (userError || !userData?.user) return json({ error: "unauthorized" }, 401);

    const userId = userData.user.id;

    const { error: completionsError } = await supabase
      .from("completions")
      .delete()
      .eq("user_id", userId);
    if (completionsError) {
      console.error(`completions delete failed: ${completionsError.message}`);
      return json({ error: "delete_failed" }, 500);
    }

    const { error: gradeError } = await supabase
      .from("grade_log")
      .delete()
      .eq("user_id", userId);
    if (gradeError) {
      // Table may not exist in older projects; log and continue if missing.
      console.error(`grade_log delete: ${gradeError.message}`);
    }

    const { error: deleteUserError } = await supabase.auth.admin.deleteUser(userId);
    if (deleteUserError) {
      console.error(`auth delete failed: ${deleteUserError.message}`);
      return json({ error: "delete_failed" }, 500);
    }

    return json({ ok: true });
  } catch (err) {
    console.error(`Unhandled: ${err}`);
    return json({ error: "delete_failed" }, 500);
  }
});
