import { useState } from 'react';

const css = `
* { margin: 0; padding: 0; box-sizing: border-box; }

html, body {
  width: 100%; height: 100%; background: #0f0f0f;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

#root { width: 100%; height: 100%; }

.login-shell {
  display: flex; width: 100%; height: 100vh;
  align-items: center; justify-content: center;
  background: linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%);
  padding: 20px;
}

.login-panel-left {
  flex: 1; max-width: 460px;
  background: linear-gradient(135deg, #ffffff 0%, #f8f8f8 100%);
  border-radius: 28px 0 0 28px; padding: 60px 50px;
  display: flex; flex-direction: column; justify-content: space-between;
  box-shadow: -10px 20px 60px rgba(0,0,0,0.3);
  animation: slideInLeft 0.8s cubic-bezier(0.34, 1.56, 0.64, 1);
}

@keyframes slideInLeft {
  from { opacity: 0; transform: translateX(-40px); }
  to   { opacity: 1; transform: translateX(0); }
}

.login-panel-content { display: flex; flex-direction: column; gap: 48px; }

.login-brand { display: flex; align-items: center; gap: 14px; margin-bottom: 12px; }

.login-logo {
  width: 48px; height: 48px;
  background: linear-gradient(135deg, #E53935 0%, #c62828 100%);
  border-radius: 12px; display: flex; align-items: center; justify-content: center;
  flex-shrink: 0; box-shadow: 0 8px 20px rgba(229,57,53,0.3);
  animation: float 3s ease-in-out infinite;
}

@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50%       { transform: translateY(-8px); }
}

.login-logo svg { width: 32px; height: 32px; filter: drop-shadow(0 2px 4px rgba(0,0,0,0.1)); }

.login-brand-name {
  font-size: 22px; font-weight: 700; color: #1a1a1a;
  letter-spacing: -0.5px; text-transform: lowercase;
}
.login-brand-name span { color: #E53935; font-weight: 800; }

.login-hero { display: flex; flex-direction: column; gap: 16px; }
.login-hero h1 { font-size: 32px; font-weight: 800; line-height: 1.3; color: #1a1a1a; letter-spacing: -1px; }
.login-hero h1 br { display: none; }
.login-hero p { font-size: 15px; color: #666; line-height: 1.6; font-weight: 500; }

.login-features { display: flex; flex-direction: column; gap: 14px; }
.login-feature {
  display: flex; align-items: center; gap: 12px;
  font-size: 14px; color: #333; font-weight: 500;
  animation: slideInLeft 0.8s ease-out backwards;
}
.login-feature:nth-child(1) { animation-delay: 0.2s; }
.login-feature:nth-child(2) { animation-delay: 0.4s; }
.login-feature:nth-child(3) { animation-delay: 0.6s; }

.login-feature-dot { width: 8px; height: 8px; border-radius: 50%; flex-shrink: 0; }
.login-feature-dot.green { background: #2E7D32; box-shadow: 0 0 8px rgba(46,125,50,0.4); }

.login-panel-footer {
  display: flex; justify-content: space-between; align-items: center;
  padding-top: 24px; border-top: 1px solid #e0e0e0;
  font-size: 12px; color: #999; font-weight: 500;
}

.login-panel-right {
  flex: 1; max-width: 460px;
  background: linear-gradient(135deg, #E53935 0%, #c62828 100%);
  border-radius: 0 28px 28px 0; padding: 60px 50px;
  display: flex; align-items: center; justify-content: center;
  box-shadow: 10px 20px 60px rgba(229,57,53,0.35);
  position: relative; overflow: hidden;
  animation: slideInRight 0.8s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.login-panel-right::before {
  content: ''; position: absolute; top: -50%; right: -50%;
  width: 200%; height: 200%;
  background: radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%);
  animation: pulse 4s ease-in-out infinite; pointer-events: none;
}

@keyframes pulse {
  0%, 100% { transform: scale(1); opacity: 0.5; }
  50%       { transform: scale(1.1); opacity: 0.8; }
}

@keyframes slideInRight {
  from { opacity: 0; transform: translateX(40px); }
  to   { opacity: 1; transform: translateX(0); }
}

.login-form-wrap { width: 100%; z-index: 1; animation: fadeInUp 0.8s ease-out 0.2s backwards; }

@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(20px); }
  to   { opacity: 1; transform: translateY(0); }
}

.login-form-header { margin-bottom: 40px; text-align: center; color: white; }
.login-form-header h2 { font-size: 28px; font-weight: 800; margin-bottom: 8px; letter-spacing: -0.5px; }
.login-form-header p { font-size: 14px; opacity: 0.95; font-weight: 500; letter-spacing: 0.3px; }

.login-form { display: flex; flex-direction: column; gap: 20px; }
.login-field { display: flex; flex-direction: column; gap: 8px; }
.login-field label { font-size: 13px; font-weight: 600; color: rgba(255,255,255,0.95); text-transform: uppercase; letter-spacing: 0.5px; }
.login-field input {
  padding: 14px 16px; border: 2px solid rgba(255,255,255,0.3); border-radius: 10px;
  background: rgba(255,255,255,0.12); color: white; font-size: 15px; font-weight: 500;
  transition: all 0.3s cubic-bezier(0.4,0,0.2,1); backdrop-filter: blur(4px);
}
.login-field input::placeholder { color: rgba(255,255,255,0.6); font-weight: 500; }
.login-field input:focus {
  outline: none; border-color: rgba(255,255,255,0.8);
  background: rgba(255,255,255,0.18); box-shadow: 0 0 0 3px rgba(255,255,255,0.15);
}
.login-field input:hover { border-color: rgba(255,255,255,0.5); background: rgba(255,255,255,0.15); }

.login-error {
  padding: 12px 14px; background: rgba(255,255,255,0.15); border: 1px solid rgba(255,255,255,0.3);
  border-radius: 8px; color: rgba(255,255,255,0.95); font-size: 13px; font-weight: 600;
  text-align: center; animation: shake 0.4s cubic-bezier(0.36,0,0.66,-0.56);
}
@keyframes shake {
  0%, 100% { transform: translateX(0); }
  25%       { transform: translateX(-8px); }
  75%       { transform: translateX(8px); }
}

.login-btn {
  padding: 14px 24px; background: rgba(255,255,255,0.95); color: #E53935;
  border: none; border-radius: 10px; font-size: 14px; font-weight: 700;
  text-transform: uppercase; letter-spacing: 0.8px; cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4,0,0.2,1);
  display: flex; align-items: center; justify-content: center; gap: 8px;
  margin-top: 8px; box-shadow: 0 8px 24px rgba(0,0,0,0.25);
}
.login-btn:hover:not(:disabled) { background: white; box-shadow: 0 12px 32px rgba(0,0,0,0.35); transform: translateY(-2px); }
.login-btn:active:not(:disabled) { transform: translateY(0); box-shadow: 0 4px 12px rgba(0,0,0,0.25); }
.login-btn:disabled { opacity: 0.7; cursor: not-allowed; }

.login-spinner {
  display: inline-block; width: 14px; height: 14px;
  border: 2.5px solid rgba(229,57,53,0.2); border-top-color: #E53935;
  border-radius: 50%; animation: spin 0.8s linear infinite;
}
@keyframes spin { to { transform: rotate(360deg); } }

@media (max-width: 1024px) {
  .login-shell { padding: 20px 10px; }
  .login-panel-left, .login-panel-right { max-width: 100%; padding: 50px 40px; }
  .login-hero h1 { font-size: 26px; }
  .login-hero p { font-size: 14px; }
}

@media (max-width: 768px) {
  .login-shell { flex-direction: column; gap: 0; padding: 0; }
  .login-panel-left { max-width: 100%; border-radius: 0; padding: 40px 30px; flex: 0; }
  .login-panel-right { max-width: 100%; border-radius: 0; padding: 40px 30px; min-height: 60vh; }
  .login-panel-left, .login-panel-right { box-shadow: none; }
  .login-hero h1 { font-size: 24px; }
  .login-form-header h2 { font-size: 24px; }
  .login-features { gap: 12px; }
  .login-feature { font-size: 13px; }
}

@media (max-width: 480px) {
  .login-panel-left, .login-panel-right { padding: 30px 20px; }
  .login-panel-content { gap: 32px; }
  .login-hero h1 { font-size: 20px; }
  .login-hero p { font-size: 13px; }
  .login-form-header h2 { font-size: 20px; }
  .login-brand-name { font-size: 18px; }
  .login-btn { font-size: 13px; padding: 12px 20px; }
}
`;

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
    <>
      <style>{css}</style>
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
    </>
  );
}
