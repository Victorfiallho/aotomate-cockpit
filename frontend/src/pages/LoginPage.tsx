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
    // TODO: substituir por supabase.auth.signInWithPassword({ email, password })
    await new Promise((r) => setTimeout(r, 800));
    setLoading(false);
    onLogin();
  };

  return (
    <div className="login-shell">
      <div className="login-card">
        <div className="login-brand">
          <div className="login-logo">
            <svg width="40" height="40" viewBox="58 55 84 108" xmlns="http://www.w3.org/2000/svg">
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
          <div>
            <div className="login-title">Ao<span>T</span>omate</div>
            <div className="login-subtitle">Cockpit de gestão</div>
          </div>
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
            {loading ? 'Entrando...' : 'Entrar'}
          </button>
        </form>
      </div>
    </div>
  );
}
