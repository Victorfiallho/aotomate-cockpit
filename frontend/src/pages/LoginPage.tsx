import { useState } from 'react';

type Props = {
  onLogin: () => void;
};

export default function LoginPage({ onLogin }: Props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    if (!email || !password) {
      setError('Preencha e-mail e senha.');
      return;
    }
    setLoading(true);
    // TODO: supabase.auth.signInWithPassword({ email, password })
    await new Promise((r) => setTimeout(r, 800));
    setLoading(false);
    onLogin();
  };

  return (
    <div className="login-shell">

      {/* ── Painel esquerdo ── */}
      <div className="login-panel-left">
        <div className="login-panel-content">
          <div className="login-brand">
            <div className="login-logo">
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
            <span className="login-brand-name">Ao<span>T</span>omate</span>
          </div>

          <div className="login-hero">
            <h1>Atendimento inteligente,<br />gestão centralizada.</h1>
            <p>Automatize o WhatsApp do seu negócio com IA e acompanhe tudo em tempo real.</p>
          </div>

          <div className="login-features">
            <div className="login-feature">
              <span className="login-feature-dot green" />
              Agente IA humanizado no WhatsApp
            </div>
            <div className="login-feature">
              <span className="login-feature-dot green" />
              Tickets e atendimentos centralizados
            </div>
            <div className="login-feature">
              <span className="login-feature-dot green" />
              Relatórios automáticos de performance
            </div>
          </div>
        </div>

        <div className="login-panel-footer">
          <span>AoTomate Sistemas</span>
          <span>v0.1</span>
        </div>
      </div>

      {/* ── Painel direito ── */}
      <div className="login-panel-right">
        <div className="login-form-wrap">
          <div className="login-form-header">
            <h2>Entrar no cockpit</h2>
            <p>Acesso restrito à equipe AoTomate.</p>
          </div>

          <form className="login-form" onSubmit={handleSubmit}>
            <div className="login-field">
              <label htmlFor="email">E-mail</label>
              <input
                id="email"
                type="email"
                autoComplete="email"
                placeholder="seu@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="login-field">
              <label htmlFor="password">Senha</label>
              <input
                id="password"
                type="password"
                autoComplete="current-password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            {error && <div className="login-error">{error}</div>}

            <button type="submit" className="login-btn" disabled={loading}>
              {loading
                ? <><span className="login-spinner" /> Entrando...</>
                : 'Entrar'}
            </button>
          </form>
        </div>
      </div>

    </div>
  );
}
