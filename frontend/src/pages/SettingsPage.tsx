export default function SettingsPage() {
  return (
    <section className="content-page">
      <div className="settings-grid">
        <article className="setting-card">
          <h3>Supabase</h3>
          <div className="empty-state">URL e chave ainda não configuradas.</div>
        </article>
        <article className="setting-card">
          <h3>N8N</h3>
          <div className="empty-state">Webhook ainda não configurado.</div>
        </article>
        <article className="setting-card">
          <h3>Evolution API</h3>
          <div className="empty-state">Instância ainda não configurada.</div>
        </article>
        <article className="setting-card">
          <h3>Claude</h3>
          <div className="empty-state">Chave de API ainda não configurada.</div>
        </article>
      </div>
    </section>
  );
}
