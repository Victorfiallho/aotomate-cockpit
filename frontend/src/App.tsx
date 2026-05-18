import { useState } from 'react';
import Sidebar from './components/Sidebar';
import Topbar from './components/Topbar';
import LoginPage from './pages/LoginPage';
import DashboardPage from './pages/DashboardPage';
import ClientsPage from './pages/ClientsPage';
import AlertsPage from './pages/AlertsPage';
import ReportsPage from './pages/ReportsPage';
import SettingsPage from './pages/SettingsPage';
import { Client, Alert } from './types';

const clients: Client[] = [];
const alerts: Alert[] = [];

const pageConfig: Record<string, { title: string; subtitle: string; action?: string }> = {
  dashboard: {
    title: 'Painel principal',
    subtitle: 'Estado do atendimento, faturamento e próximas ações.',
  },
  clients: {
    title: 'Clientes',
    subtitle: `${clients.length} cliente${clients.length !== 1 ? 's' : ''} cadastrado${clients.length !== 1 ? 's' : ''}`,
    action: 'Novo cliente',
  },
  alerts: {
    title: 'Alertas',
    subtitle: `${alerts.length} alerta${alerts.length !== 1 ? 's' : ''} ativo${alerts.length !== 1 ? 's' : ''}`,
  },
  reports: {
    title: 'Relatórios',
    subtitle: 'Indicadores de performance e saúde financeira.',
  },
  settings: {
    title: 'Configuração',
    subtitle: 'Integrações, preferências e dados do cliente.',
  },
};

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [activePage, setActivePage] = useState('dashboard');

  if (!loggedIn) return <LoginPage onLogin={() => setLoggedIn(true)} />;
  const config = pageConfig[activePage] ?? pageConfig.dashboard;

  const renderPage = () => {
    switch (activePage) {
      case 'clients':
        return <ClientsPage clients={clients} />;
      case 'alerts':
        return <AlertsPage alerts={alerts} />;
      case 'reports':
        return <ReportsPage />;
      case 'settings':
        return <SettingsPage />;
      default:
        return <DashboardPage />;
    }
  };

  return (
    <div className="app-shell">
      <Sidebar active={activePage} onChange={setActivePage} />
      <main className="content">
        <Topbar
          title={config.title}
          subtitle={config.subtitle}
          actionLabel={config.action}
          onAction={config.action ? () => setActivePage('clients') : undefined}
        />
        {renderPage()}
      </main>
    </div>
  );
}

export default App;
