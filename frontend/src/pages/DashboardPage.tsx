const metricCards = [
  {
    label: 'Clientes ativos',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
        <circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    ),
  },
  {
    label: 'Tickets abertos',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
      </svg>
    ),
  },
  {
    label: 'Faturamento',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="12" y1="1" x2="12" y2="23"/>
        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
      </svg>
    ),
  },
  {
    label: 'Última atividade',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/>
        <polyline points="12 6 12 12 16 14"/>
      </svg>
    ),
  },
];

export default function DashboardPage() {
  return (
    <div className="cockpit">
      <div className="metrics-grid">
        {metricCards.map((card) => (
          <div key={card.label} className="metric-card">
            <div className="metric-header">
              <div className="metric-label">{card.label}</div>
              <div className="metric-icon">{card.icon}</div>
            </div>
            <div className="metric-value">—</div>
            <div className="metric-trend">Aguardando integração</div>
          </div>
        ))}
      </div>

      <div className="section">
        <div className="section-title">Status da operação</div>
        <div className="empty-state">Nenhum sistema monitorado.</div>
      </div>

      <div className="section">
        <div className="section-title">Tickets recentes</div>
        <div className="empty-state">Nenhum ticket registrado.</div>
      </div>

      <div className="section split-grid">
        <div>
          <div className="section-title">Performance do atendimento</div>
          <div className="empty-state">Sem dados de performance.</div>
        </div>
        <div>
          <div className="section-title">Atividades recentes</div>
          <div className="empty-state">Nenhuma atividade registrada.</div>
        </div>
      </div>
    </div>
  );
}
