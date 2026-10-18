import { useStreaks } from '../hooks/useStreaks';

type StreakBadgeProps = {
  className?: string;
};

export function StreakBadge({ className }: StreakBadgeProps) {
  const { streak } = useStreaks();

  if (!streak.count) {
    return null;
  }

  const dayLabel =
    streak.count === 1 ? '1-day streak' : `${streak.count}-day streak`;
  const bestLabel = streak.best > 0 ? ` · Best ${streak.best}` : '';

  return (
    <span
      className={['streak-badge', className].filter(Boolean).join(' ')}
      title="Complete a lesson each day to keep your streak"
    >
      <span className="streak-flame" aria-hidden="true" />
      <span className="streak-text">
        {dayLabel}
        {bestLabel}
      </span>
    </span>
  );
}
