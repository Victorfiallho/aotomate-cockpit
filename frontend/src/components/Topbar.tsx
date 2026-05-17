import { useEffect, useState } from 'react';

type Props = {
  title: string;
  subtitle: string;
  actionLabel?: string;
  onAction?: () => void;
};

export default function Topbar({ title, subtitle, actionLabel, onAction }: Props) {
  const [time, setTime] = useState('');

  useEffect(() => {
    const update = () => {
      const now = new Date();
      setTime(
        `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`
      );
    };
    update();
    const timer = window.setInterval(update, 10000);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <header className="topbar">
      <div>
        <h1>{title}</h1>
        <p>{subtitle}</p>
      </div>
      <div className="topbar-right">
        <span className="topbar-time">{time}</span>
        {actionLabel && onAction && (
          <button className="primary" onClick={onAction} type="button">
            {actionLabel}
          </button>
        )}
      </div>
    </header>
  );
}
