const icons: Record<string, JSX.Element> = {
  dashboard: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/>
      <rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/>
    </svg>
  ),
  clients: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
      <circle cx="9" cy="7" r="4"/>
      <path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
    </svg>
  ),
  alerts: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/>
      <path d="M13.73 21a2 2 0 0 1-3.46 0"/>
    </svg>
  ),
  reports: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/>
      <line x1="6" y1="20" x2="6" y2="14"/>
    </svg>
  ),
  settings: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="3"/>
      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/>
    </svg>
  ),
};

const items = [
  { key: 'dashboard', label: 'Resumo' },
  { key: 'clients',   label: 'Clientes' },
  { key: 'alerts',    label: 'Alertas' },
  { key: 'reports',   label: 'Relatórios' },
  { key: 'settings',  label: 'Configuração' },
];

type Props = {
  active: string;
  onChange: (key: string) => void;
};

export default function Sidebar({ active, onChange }: Props) {
  return (
    <aside className="sidebar">
      <div className="brand">
        <div className="brand-logo" aria-hidden="true">
          <svg width="36" height="36" viewBox="58 55 84 108" xmlns="http://www.w3.org/2000/svg">
            <g transform="translate(100, 110)">
              <circle cx="0" cy="10" r="36" fill="#E53935"/>
              <circle cx="-10" cy="-2" r="10" fill="#EF5350" opacity="0.5"/>
              <path d="M0 -26 Q2 -40 0 -48" fill="none" stroke="#2E7D32" strokeWidth="3.5" strokeLinecap="round"/>
              <path d="M0 -32 Q-8 -36 -12 -40" fill="none" stroke="#388E3C" strokeWidth="2.5" strokeLinecap="round"/>
              <path d="M-22 20 Q-36 0 -18 -16 Q0 -30 18 -16 Q36 0 22 20" fill="none" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" opacity="0.85"/>
              <path d="M22 20 L16 26 M22 20 L28 24" fill="none" stroke="#fff" strokeWidth="2.2" strokeLinecap="round"/>
            </g>
          </svg>
        </div>
        <div className="brand-content">
          <span className="brand-title">Ao<span>T</span>omate</span>
          <small className="brand-subtitle">Sistemas</small>
        </div>
      </div>

      <nav>
        {items.map((item) => (
          <button
            key={item.key}
            className={item.key === active ? 'nav-link active' : 'nav-link'}
            onClick={() => onChange(item.key)}
            type="button"
          >
            <span className="nav-icon">{icons[item.key]}</span>
            {item.label}
          </button>
        ))}
      </nav>

      <div className="sidebar-footer">
        <span className="status-dot offline" />
        <span className="sidebar-footer-text">Sem conexão</span>
        <span className="sidebar-version">v0.1</span>
      </div>
    </aside>
  );
}
