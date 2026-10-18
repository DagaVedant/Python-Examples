import { useCallback, useEffect, useState } from 'react';
import type { Session, User } from '@supabase/supabase-js';
import { emailConfirmRedirect, passwordResetRedirect } from '../lib/authRedirect';
import { supabase } from '../lib/supabase';

export function useAuth() {
  const [session, setSession] = useState<Session | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;

    supabase.auth.getSession().then(({ data: { session: s } }) => {
      if (mounted) {
        setSession(s);
        setLoading(false);
      }
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, s) => {
      setSession(s);
      setLoading(false);
    });

    return () => {
      mounted = false;
      subscription.unsubscribe();
    };
  }, []);

  const signInWithPassword = useCallback(async (email: string, password: string) => {
    return supabase.auth.signInWithPassword({ email, password });
  }, []);

  const signUp = useCallback(async (email: string, password: string) => {
    return supabase.auth.signUp({
      email,
      password,
      options: { emailRedirectTo: emailConfirmRedirect() },
    });
  }, []);

  const signOut = useCallback(async () => {
    return supabase.auth.signOut();
  }, []);

  const resetPasswordForEmail = useCallback(async (email: string) => {
    return supabase.auth.resetPasswordForEmail(email, {
      redirectTo: passwordResetRedirect(),
    });
  }, []);

  const updatePassword = useCallback(async (password: string) => {
    return supabase.auth.updateUser({ password });
  }, []);

  const deleteAccount = useCallback(async () => {
    const { data: { session: s } } = await supabase.auth.getSession();
    if (!s?.access_token) {
      return { error: new Error('Not signed in') };
    }

    const { data, error } = await supabase.functions.invoke('delete-account', {
      headers: { Authorization: `Bearer ${s.access_token}` },
    });

    if (error) {
      return { error: new Error(error.message || 'Could not delete account') };
    }
    if (data && typeof data === 'object' && 'error' in data && data.error) {
      return { error: new Error(String(data.error)) };
    }

    await supabase.auth.signOut();
    return { error: null };
  }, []);

  const user: User | null = session?.user ?? null;

  return {
    session,
    user,
    loading,
    signInWithPassword,
    signUp,
    signOut,
    resetPasswordForEmail,
    updatePassword,
    deleteAccount,
  };
}
