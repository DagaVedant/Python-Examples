/**
 * Daily learning streaks (localStorage `streak-data`).
 * Shape: { lastDate: 'YYYY-MM-DD', count: number, best: number }
 */
(function () {
  const KEY = 'streak-data';

  function todayLocal() {
    const d = new Date();
    const y = d.getFullYear();
    const m = String(d.getMonth() + 1).padStart(2, '0');
    const day = String(d.getDate()).padStart(2, '0');
    return `${y}-${m}-${day}`;
  }

  function parseLocalDay(iso) {
    const [y, m, d] = iso.split('-').map(Number);
    return new Date(y, m - 1, d);
  }

  function dayDiff(fromIso, toIso) {
    const a = parseLocalDay(fromIso);
    const b = parseLocalDay(toIso);
    return Math.round((b - a) / 86400000);
  }

  function getStreak() {
    try {
      const raw = JSON.parse(localStorage.getItem(KEY));
      if (raw && typeof raw === 'object') {
        return {
          lastDate: raw.lastDate || null,
          count: Number(raw.count) || 0,
          best: Number(raw.best) || 0,
        };
      }
    } catch (_) {}
    return { lastDate: null, count: 0, best: 0 };
  }

  /**
   * Record activity for the local calendar day.
   * - today already counted → no change
   * - lastDate was yesterday → count++
   * - gap > 1 day (or first) → reset to 1
   * - best = max(best, count)
   */
  function recordActivity() {
    const today = todayLocal();
    const data = getStreak();

    if (data.lastDate === today) return data;

    let count = 1;
    if (data.lastDate && dayDiff(data.lastDate, today) === 1) {
      count = data.count + 1;
    }

    const best = Math.max(data.best || 0, count);
    const next = { lastDate: today, count, best };
    localStorage.setItem(KEY, JSON.stringify(next));
    return next;
  }

  function renderStreak(el) {
    if (!el) return;
    const data = getStreak();
    if (!data.count) {
      el.innerHTML = '';
      el.hidden = true;
      return;
    }

    el.hidden = false;
    const dayLabel = data.count === 1 ? '1-day streak' : `${data.count}-day streak`;
    const bestLabel = data.best > 0 ? ` · Best ${data.best}` : '';
    el.innerHTML =
      `<span class="streak-badge" title="Complete a lesson each day to keep your streak">` +
      `<span class="streak-flame" aria-hidden="true"></span>` +
      `<span class="streak-text">${dayLabel}${bestLabel}</span>` +
      `</span>`;
  }

  window.addEventListener('lesson-complete', () => {
    recordActivity();
    renderStreak(document.getElementById('streak-slot'));
  });

  /** Fallback: count once when `.complete-status.done` appears after a non-done state. */
  function observeCompleteOnce() {
    const slot = document.getElementById('complete-slot');
    if (!slot) return;

    let armed = false;
    const obs = new MutationObserver(() => {
      const status = slot.querySelector('.complete-status');
      if (!status) return;
      if (!status.classList.contains('done')) {
        armed = true;
        return;
      }
      if (!armed) return;
      obs.disconnect();
      recordActivity();
    });

    obs.observe(slot, {
      childList: true,
      subtree: true,
      attributes: true,
      attributeFilter: ['class'],
    });
  }

  function init() {
    const streakSlot = document.getElementById('streak-slot');
    if (streakSlot) renderStreak(streakSlot);
    observeCompleteOnce();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  window.Streaks = { getStreak, recordActivity, renderStreak, todayLocal };
})();
