import { OFFLINE_MESSAGE, SUPABASE_DOWN_MESSAGE } from '../lib/serviceMessages';
import { useOnlineStatus } from '../hooks/useOnlineStatus';
import { useSupabaseStatus } from '../hooks/useSupabaseStatus';

export function StatusBanner() {
  const online = useOnlineStatus();
  const { available: supabaseOk, checked } = useSupabaseStatus();

  if (!online) {
    return (
      <div className="status-banner status-banner--warn" role="status">
        {OFFLINE_MESSAGE}
      </div>
    );
  }

  if (checked && !supabaseOk) {
    return (
      <div className="status-banner status-banner--warn" role="status">
        {SUPABASE_DOWN_MESSAGE}
      </div>
    );
  }

  return null;
}
