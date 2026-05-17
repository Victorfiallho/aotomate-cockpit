# Prompt de Contexto — AoTomate Sistemas

Cole esse prompt no início de qualquer novo chat para continuar de onde paramos.

---

## CONTEXTO

Estou construindo uma empresa chamada **AoTomate Sistemas** — automação de atendimento com IA para pequenos e médios negócios. O nome é um trocadilho brasileiro com "automate" + "tomate". Já tenho logo rascunhado (tomate orgânico com seta de automação circular, clean e minimalista, vermelho #E53935 e verde #2E7D32).

Sou técnico, já desenvolvi aplicações web do zero. Tenho domínio de React, Vite, deploy no Netlify, e já usei N8N com webhook + API de IA + output em planilha e Trello em produção no meu trabalho atual. Tenho renda atual, então não é urgência extrema — mas quanto mais rápido melhor.

---

## PRODUTO

### Core da solução
- Agente de IA humanizado no WhatsApp (delay proposital, tom personalizado, handoff humano)
- Painel de gestão de atendimentos (tickets abertos, em andamento, resolvidos)
- Integração: N8N + Evolution API + Claude (Haiku para perguntas simples, Sonnet para casos complexos)
- Memória de contexto via Supabase — resumo vivo do cliente, não histórico bruto
- Relatórios automáticos

### Parametrização por segmento
O mesmo core serve clínicas, pizzarias, secretariado remoto, imobiliárias — só muda o vocabulário. Não tenho nicho definido ainda, objetivo inicial é 3 clientes.

### Economia de tokens
- System prompt enxuto (~300 tokens fixos)
- Supabase guarda resumo vivo (~100 tokens)
- Haiku comprime histórico a cada 10 mensagens
- Custo por resposta: ~450 tokens

---

## STACK TÉCNICA

| Peça | Solução | Custo |
|---|---|---|
| WhatsApp API | Evolution API | Gratuito |
| Servidor | Oracle Cloud Free Tier | Gratuito |
| Orquestração | N8N self-hosted | Gratuito |
| Banco + auth + realtime | Supabase | Gratuito |
| IA | Claude Haiku / Sonnet | Pago por uso |
| Frontend | React + Vite | Gratuito |
| Hospedagem frontend | Netlify | Gratuito |
| Monitoramento | Uptime Kuma | Gratuito |
| Domínio | aotomate.com.br | ~R$ 40/ano |

### Fluxo do agente
```
Mensagem chega no WhatsApp
        ↓
N8N recebe pelo webhook
        ↓
Busca contexto resumido no Supabase
        ↓
Manda pra Claude: system prompt + contexto + mensagem
        ↓
N8N verifica: ESCALAR_HUMANO?
    Sim → cria card, notifica atendente
    Não → responde no WhatsApp
        ↓
Salva interação e atualiza resumo no Supabase
```

---

## COCKPIT AOTOMATE

Software proprietário meu em aotomate.com.br — painel central de gestão de todos os clientes.

### O que mostra
- Status em tempo real de cada cliente (online / lento / erro)
- MRR total e por cliente
- Alertas com diagnóstico do agente de IA
- Logs recentes

### Como funciona
- N8N pinga cada sistema cliente a cada 5 minutos
- Detecta problema → registra alerta no Supabase
- Agente lê log → tenta correção automática
- Se resolver → "resolvido pelo agente"
- Se não → alerta com diagnóstico pronto pra mim

### Stack do cockpit
- React + Vite (frontend)
- Supabase (banco, auth com roles, realtime)
- N8N (monitoramento background)
- Oracle Cloud (servidor)

### Tabelas principais do Supabase
```sql
clientes (id, nome, plano, status, mrr, criado_em)
sistemas (id, cliente_id, nome, url, status, ultimo_check)
alertas (id, cliente_id, sistema_id, tipo, mensagem, resolvido_por, criado_em)
logs (id, sistema_id, mensagem, nivel, criado_em)
perfis (id, role) -- admin, suporte, etc
```

---

## PRECIFICAÇÃO

### Implantação (uma vez)
| Nome | O que inclui | Valor |
|---|---|---|
| Ignição | WhatsApp + agente IA + painel básico | R$ 1.500 – R$ 2.500 |
| Ignição Pro | Ignição + integrações extras | R$ 3.000 – R$ 5.000 |
| Migração | Integra sistema existente | R$ 2.000 – R$ 3.500 |

### Planos mensais
| Nome | O que inclui | Valor |
|---|---|---|
| Semente | Agente + painel + suporte básico | R$ 350 – R$ 500 |
| Raiz | Semente + relatórios + múltiplos atendentes | R$ 600 – R$ 900 |
| Tronco | Raiz + agente autônomo + prioridade suporte | R$ 1.000 – R$ 1.500 |

### Avulsos
| Nome | O que é | Valor |
|---|---|---|
| Poda | Manutenção corretiva | R$ 150 – R$ 300/h |
| Broto | Nova funcionalidade | R$ 500 – R$ 2.000 |
| Relatório Raiz | Dashboard personalizado | R$ 400 – R$ 800 |

---

## PROJEÇÃO DE FATURAMENTO

| Período | Clientes | MRR | Faturamento no mês |
|---|---|---|---|
| Mês 1-2 | 1 | R$ 700 | R$ 2.700 (com implantação) |
| Mês 3 | 2 | R$ 1.400 | R$ 3.400 |
| Mês 4-6 | 3 | R$ 2.100 | R$ 2.100 |
| Mês 7-9 | 5 | R$ 3.500 | R$ 7.500 |
| Mês 10-12 | 8 | R$ 5.600 | R$ 9.600 |
| Ano 2 | 15+ | R$ 12.000+ | R$ 12.000+ |

Acima de 15 clientes → migrar pra modelo SaaS.

---

## CUSTOS FIXOS MENSAIS

| Item | Custo |
|---|---|
| Contador | R$ 150 |
| Endereço virtual | R$ 100 |
| Domínio + email | R$ 40 |
| Tokens Claude | R$ 50 – R$ 150 |
| Infra (Oracle + Supabase + Netlify) | R$ 0 |
| **Total** | **R$ 340 – R$ 440/mês** |

---

## JURÍDICO

- Tipo: ME — Microempresa
- Regime: Simples Nacional (~6% sobre faturamento)
- CNAE principal: 6209-1/00 — Suporte técnico em TI
- CNAE secundário: 6311-9/00 — Tratamento de dados
- Conta PJ: Nubank PJ, Inter PJ ou C6 (gratuitas)
- Endereço: virtual (~R$ 100/mês)
- LGPD: política de privacidade + contrato + RLS no Supabase

---

## PRIMEIRO CLIENTE

Mulher que vende serviços remotos de secretariado. Tem 12 clientes e 2 atendentes. Atende por WhatsApp, principal dor é tempo gasto respondendo mensagens repetitivas e gestão dos atendimentos. Usa Drive e ferramentas manuais. Conversei com ela hoje.

Proposta ideal: Ignição + plano Raiz → R$ 2.000 na entrada + R$ 700/mês.

---

## MARCA

- Nome: AoTomate Sistemas
- Logo: tomate orgânico clean com seta de automação circular, vermelho + verde
- Domínio: aotomate.com.br
- Instagram: @aotomate ou @aotomate.sistemas
- Bio: "Automação de atendimento com IA para pequenos negócios."
- Pitch: "Eu automatizo o atendimento do seu negócio no WhatsApp com IA. Você para de responder mensagem repetitiva e tem visibilidade de tudo que está aberto."

---

## ORDEM DE EXECUÇÃO

### Agora
- [ ] Conversar com a primeira cliente para entender o fluxo
- [ ] Abrir ME e conta PJ
- [ ] Registrar aotomate.com.br
- [ ] Criar Instagram

### Mês 1
- [ ] Fechar e entregar primeiro cliente
- [ ] Documentar aprendizados

### Mês 2-3
- [ ] Segundo e terceiro clientes via indicação
- [ ] Primeiro case no Instagram

### Mês 4-6
- [ ] Construir cockpit próprio
- [ ] Monitoramento automático
- [ ] Agente de suporte autônomo

### Ano 2
- [ ] 15+ clientes
- [ ] Iniciar desenvolvimento do SaaS

---

## HORAS DE TRABALHO ESTIMADAS

| Fase | Horas/semana |
|---|---|
| Primeiros 3 clientes | 25 – 35h |
| 5-8 clientes | 15 – 20h |
| 10-15 clientes | 8 – 12h |
| SaaS rodando | 5 – 8h |

---

*Contexto gerado em 17/05/2026*
*Continue daqui — todas as decisões e detalhes técnicos já foram pensados.*
