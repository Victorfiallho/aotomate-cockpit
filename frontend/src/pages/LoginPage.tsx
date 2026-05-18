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

/* ── Painel esquerdo — FORM ── */
.login-panel-left {
  flex: 1; max-width: 480px;
  background: linear-gradient(150deg, #E53935 0%, #b71c1c 100%);
  border-radius: 28px 0 0 28px; padding: 64px 52px;
  display: flex; align-items: center; justify-content: center;
  box-shadow: -10px 20px 60px rgba(229,57,53,0.4);
  position: relative; overflow: hidden;
  animation: slideInLeft 0.7s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.login-panel-left::before {
  content: ''; position: absolute;
  top: -120px; right: -120px;
  width: 340px; height: 340px; border-radius: 50%;
  background: rgba(255,255,255,0.06); pointer-events: none;
}

.login-panel-left::after {
  content: ''; position: absolute;
  bottom: -80px; left: -80px;
  width: 220px; height: 220px; border-radius: 50%;
  background: rgba(255,255,255,0.04); pointer-events: none;
}

@keyframes slideInLeft {
  from { opacity: 0; transform: translateX(-40px); }
  to   { opacity: 1; transform: translateX(0); }
}

/* ── Painel direito — BRANDING ── */
.login-panel-right {
  flex: 1; max-width: 480px;
  background: #ffffff;
  border-radius: 0 28px 28px 0; padding: 64px 52px;
  display: flex; flex-direction: column; justify-content: space-between;
  box-shadow: 10px 20px 60px rgba(0,0,0,0.25);
  position: relative; overflow: hidden;
  animation: slideInRight 0.7s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.login-panel-right::before {
  content: ''; position: absolute;
  bottom: -100px; right: -100px;
  width: 320px; height: 320px; border-radius: 50%;
  background: rgba(229,57,53,0.05); pointer-events: none;
}

.login-panel-right::after {
  content: ''; position: absolute;
  top: -60px; left: -60px;
  width: 180px; height: 180px; border-radius: 50%;
  background: rgba(229,57,53,0.04); pointer-events: none;
}

@keyframes slideInRight {
  from { opacity: 0; transform: translateX(40px); }
  to   { opacity: 1; transform: translateX(0); }
}

.login-panel-content { display: flex; flex-direction: column; gap: 44px; position: relative; z-index: 1; }

/* ── Branding ── */
.login-brand { display: flex; align-items: center; gap: 14px; }

.login-logo {
  width: 56px; height: 56px;
  background: linear-gradient(135deg, #E53935 0%, #c62828 100%);
  border-radius: 14px; display: flex; align-items: center; justify-content: center;
  flex-shrink: 0; box-shadow: 0 8px 24px rgba(229,57,53,0.35);
}

.login-logo svg { width: 38px; height: 38px; filter: drop-shadow(0 2px 4px rgba(0,0,0,0.15)); }

.login-brand-name {
  font-size: 24px; font-weight: 700; color: #1a1a1a;
  letter-spacing: -0.5px; text-transform: lowercase;
}
.login-brand-name span { color: #E53935; font-weight: 800; }

/* ── Hero ── */
.login-hero { display: flex; flex-direction: column; gap: 14px; }
.login-hero h1 {
  font-size: 34px; font-weight: 800; line-height: 1.25;
  color: #1a1a1a; letter-spacing: -1.5px;
}
.login-hero h1 em { font-style: normal; color: #E53935; }
.login-hero p { font-size: 15px; color: #777; line-height: 1.65; font-weight: 400; }

/* ── Features ── */
.login-features { display: flex; flex-direction: column; gap: 12px; }
.login-feature {
  display: flex; align-items: center; gap: 12px;
  font-size: 14px; color: #444; font-weight: 500;
  animation: slideInRight 0.7s ease-out backwards;
}
.login-feature:nth-child(1) { animation-delay: 0.15s; }
.login-feature:nth-child(2) { animation-delay: 0.3s; }
.login-feature:nth-child(3) { animation-delay: 0.45s; }

.login-feature-check {
  width: 20px; height: 20px; border-radius: 50%; flex-shrink: 0;
  background: rgba(46,125,50,0.1); border: 1.5px solid #2E7D32;
  display: flex; align-items: center; justify-content: center;
  font-size: 11px; color: #2E7D32; font-weight: 800; line-height: 1;
}

/* ── Panel footer ── */
.login-panel-footer {
  display: flex; justify-content: space-between; align-items: center;
  padding-top: 20px; border-top: 1px solid #ebebeb;
  font-size: 12px; color: #bbb; font-weight: 500;
  position: relative; z-index: 1;
}

/* ── Form ── */
.login-form-wrap { width: 100%; z-index: 1; animation: fadeInUp 0.7s ease-out 0.15s backwards; }

@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(16px); }
  to   { opacity: 1; transform: translateY(0); }
}

.login-form-header { margin-bottom: 36px; color: white; }
.login-form-header h2 { font-size: 30px; font-weight: 800; margin-bottom: 6px; letter-spacing: -0.8px; }
.login-form-header p { font-size: 14px; color: rgba(255,255,255,0.85); font-weight: 400; }

.login-form { display: flex; flex-direction: column; gap: 18px; }
.login-field { display: flex; flex-direction: column; gap: 7px; }
.login-field label {
  font-size: 12px; font-weight: 600; color: white;
  text-transform: uppercase; letter-spacing: 0.6px;
}
.login-field input {
  padding: 13px 16px; border: 1.5px solid rgba(255,255,255,0.35); border-radius: 10px;
  background: rgba(255,255,255,0.15); color: white; font-size: 15px; font-weight: 400;
  transition: all 0.25s ease; backdrop-filter: blur(4px);
}
.login-field input::placeholder { color: rgba(255,255,255,0.55); }
.login-field input:focus {
  outline: none; border-color: white;
  background: rgba(255,255,255,0.22); box-shadow: 0 0 0 3px rgba(255,255,255,0.15);
}
.login-field input:hover:not(:focus) { border-color: rgba(255,255,255,0.55); background: rgba(255,255,255,0.18); }

.login-forgot { text-align: right; margin-top: -4px; }
.login-forgot a {
  font-size: 12px; color: rgba(255,255,255,0.75); font-weight: 500;
  text-decoration: none; transition: color 0.2s;
}
.login-forgot a:hover { color: white; }

.login-error {
  padding: 11px 14px; background: rgba(255,255,255,0.18); border: 1px solid rgba(255,255,255,0.35);
  border-radius: 8px; color: white; font-size: 13px; font-weight: 600;
  text-align: center; animation: shake 0.35s cubic-bezier(0.36,0,0.66,-0.56);
}
@keyframes shake {
  0%, 100% { transform: translateX(0); }
  25%       { transform: translateX(-7px); }
  75%       { transform: translateX(7px); }
}

.login-btn {
  width: 100%; padding: 14px 24px;
  background: white; color: #E53935;
  border: none; border-radius: 10px; font-size: 14px; font-weight: 700;
  text-transform: uppercase; letter-spacing: 1px; cursor: pointer;
  transition: all 0.25s ease;
  display: flex; align-items: center; justify-content: center; gap: 8px;
  margin-top: 4px; box-shadow: 0 8px 28px rgba(0,0,0,0.2);
}
.login-btn:hover:not(:disabled) { box-shadow: 0 12px 36px rgba(0,0,0,0.3); transform: translateY(-2px); }
.login-btn:active:not(:disabled) { transform: translateY(0); box-shadow: 0 4px 12px rgba(0,0,0,0.2); }
.login-btn:disabled { opacity: 0.65; cursor: not-allowed; }

.login-spinner {
  display: inline-block; width: 14px; height: 14px;
  border: 2.5px solid rgba(229,57,53,0.2); border-top-color: #E53935;
  border-radius: 50%; animation: spin 0.8s linear infinite;
}
@keyframes spin { to { transform: rotate(360deg); } }

/* ── Responsive ── */
@media (max-width: 1024px) {
  .login-shell { padding: 20px 10px; }
  .login-panel-left, .login-panel-right { max-width: 100%; padding: 52px 42px; }
  .login-hero h1 { font-size: 28px; }
}

@media (max-width: 768px) {
  .login-shell { flex-direction: column-reverse; gap: 0; padding: 0; }
  .login-panel-left { max-width: 100%; border-radius: 0; padding: 40px 28px; min-height: 55vh; }
  .login-panel-right { max-width: 100%; border-radius: 0; padding: 36px 28px; flex: 0; }
  .login-panel-left, .login-panel-right { box-shadow: none; }
  .login-hero h1 { font-size: 24px; }
  .login-form-header h2 { font-size: 26px; }
  .login-features { gap: 10px; }
}

@media (max-width: 480px) {
  .login-panel-left, .login-panel-right { padding: 28px 20px; }
  .login-panel-content { gap: 32px; }
  .login-hero h1 { font-size: 20px; }
  .login-hero p { font-size: 13px; }
  .login-form-header h2 { font-size: 22px; }
  .login-brand-name { font-size: 20px; }
  .login-btn { font-size: 13px; }
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

        {/* ── Painel esquerdo — Form ── */}
        <div className="login-panel-left">
          <div className="login-form-wrap">
            <div className="login-form-header">
              <h2>Bem-vindo de volta</h2>
              <p>Acesse o cockpit da AoTomate.</p>
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

              <div className="login-forgot">
                <a href="#">Esqueci minha senha</a>
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

        {/* ── Painel direito — Branding ── */}
        <div className="login-panel-right">
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
              <h1>Atendimento inteligente, <em>gestão centralizada.</em></h1>
              <p>Automatize o WhatsApp do seu negócio com IA e acompanhe tudo em tempo real.</p>
            </div>

            <div className="login-features">
              <div className="login-feature">
                <span className="login-feature-check">✓</span>
                Agente IA humanizado no WhatsApp
              </div>
              <div className="login-feature">
                <span className="login-feature-check">✓</span>
                Tickets e atendimentos centralizados
              </div>
              <div className="login-feature">
                <span className="login-feature-check">✓</span>
                Relatórios automáticos de performance
              </div>
            </div>
          </div>

          <div className="login-panel-footer">
            <span>AoTomate Sistemas</span>
            <span>v0.1</span>
          </div>
        </div>

      </div>
    </>
  );
}
