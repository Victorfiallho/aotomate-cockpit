import { Alert } from '../types';

type Props = {
  alerts: Alert[];
};

export default function AlertsPage({ alerts }: Props) {
  if (alerts.length === 0) {
    return (
      <section className="content-page">
        <div className="empty-state">Nenhum alerta ativo.</div>
      </section>
    );
  }

  return (
    <section className="content-page">
      <div className="alert-grid">
        {alerts.map((alert) => (
          <article key={alert.id} className="alert-card">
            <div className="alert-meta">
              <strong>{alert.category}</strong>
              <span>{alert.status}</span>
            </div>
            <p>{alert.message}</p>
            <small>{alert.source} · {alert.created}</small>
          </article>
        ))}
      </div>
    </section>
  );
}
