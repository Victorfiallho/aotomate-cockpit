import { Client } from '../types';

type Props = {
  clients: Client[];
};

export default function ClientsPage({ clients }: Props) {
  return (
    <section className="content-page">
      <table className="data-table">
        <thead>
          <tr>
            <th>Cliente</th>
            <th>Segmento</th>
            <th>Plano</th>
            <th>Status</th>
            <th>MRR</th>
            <th>Tickets</th>
            <th>Último contato</th>
          </tr>
        </thead>
        <tbody>
          {clients.length === 0 ? (
            <tr>
              <td colSpan={7} className="table-empty">Nenhum cliente cadastrado.</td>
            </tr>
          ) : (
            clients.map((client) => (
              <tr key={client.id}>
                <td>{client.name}</td>
                <td>{client.segment}</td>
                <td>{client.plan}</td>
                <td>{client.status}</td>
                <td>{client.mrr}</td>
                <td>{client.ticketsOpen}</td>
                <td>{client.lastContact}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </section>
  );
}
