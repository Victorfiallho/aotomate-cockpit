export type ClientStatus = 'Ativo' | 'Onboarding' | 'Pausado';

export type Client = {
  id: string;
  name: string;
  segment: string;
  plan: string;
  status: ClientStatus;
  mrr: string;
  ticketsOpen: number;
  lastContact: string;
};

export type Alert = {
  id: string;
  category: string;
  source: string;
  status: 'Ativo' | 'Resolvido';
  created: string;
  message: string;
};
