const AGENTS_DATA = [
  { name: 'AGENTE SISTEMA',      level: 'L0', desc: 'Dashboard e memória central',     status: 'active'   },
  { name: 'AGENTE ORQUESTRADOR', level: 'L0', desc: 'Orquestração geral do pipeline',  status: 'inactive' },
  { name: 'AGENTE SCOUT',        level: 'L1', desc: 'Descoberta de grupos iGaming',    status: 'inactive' },
  { name: 'AGENTE SCHEDULER',    level: 'L1', desc: 'Agendamento de tarefas',          status: 'inactive' },
  { name: 'AGENTE VALIDADOR',    level: 'L2', desc: 'Validação e segmentação',         status: 'inactive' },
  { name: 'AGENTE EXTRATOR',     level: 'L2', desc: 'Extração de leads',               status: 'inactive' },
  { name: 'AGENTE CLASSIFIER',   level: 'L2', desc: 'Classificação de leads',          status: 'inactive' },
  { name: 'AGENTE SCORER',       level: 'L2', desc: 'Score de leads',                  status: 'inactive' },
  { name: 'AGENTE MONITOR-TG',   level: 'L2', desc: 'Monitor Telegram',                status: 'inactive' },
  { name: 'AGENTE MONITOR-DC',   level: 'L2', desc: 'Monitor Discord',                 status: 'inactive' },
  { name: 'AGENTE MONITOR-RD',   level: 'L2', desc: 'Monitor Reddit',                  status: 'inactive' },
  { name: 'AGENTE KPI-TRACKER',  level: 'L2', desc: 'Rastreamento de KPIs',            status: 'inactive' },
  { name: 'AGENTE RELATORIO',    level: 'L2', desc: 'Geração de relatórios',           status: 'inactive' },
  { name: 'AGENTE DATA-MANAGER', level: 'L3', desc: 'Persistência de dados',           status: 'inactive' },
  { name: 'AGENTE COPY-SLOTS',   level: 'L3', desc: 'Copy para slots',                 status: 'pending'  },
  { name: 'AGENTE COPY-CASINO',  level: 'L3', desc: 'Copy para casino',                status: 'pending'  },
  { name: 'AGENTE COPY-AVIATOR', level: 'L3', desc: 'Copy para aviator/crash',         status: 'pending'  },
  { name: 'AGENTE COPY-SPORTS',  level: 'L3', desc: 'Copy para sports betting',        status: 'pending'  },
  { name: 'AGENTE COPY-POKER',   level: 'L3', desc: 'Copy para poker',                 status: 'pending'  },
  { name: 'AGENTE COPY-MINES',   level: 'L3', desc: 'Copy para mines',                 status: 'pending'  },
  { name: 'AGENTE OUTREACH-1',   level: 'L3', desc: 'Outreach canal 1',                status: 'inactive' },
  { name: 'AGENTE OUTREACH-2',   level: 'L3', desc: 'Outreach canal 2',                status: 'inactive' },
  { name: 'AGENTE CLEANUP',      level: 'L3', desc: 'Limpeza de dados duplicados',     status: 'inactive' },
];

const CHATS_DATA = [
  {
    name: 'CHAT · WORKFLOW', color: '#00ff88', status: 'active', time: 'Hoje', progress: 65,
    summary: 'Workflow principal com 105+ nós no n8n. Agentes configurados com Structured Output Parser. Merge node em Append mode.',
    tags: ['n8n', '105 nós', 'Multi-Agent', 'GPT-4o'],
  },
  {
    name: 'CHAT · SISTEMA', color: '#00ff88', status: 'active', time: 'Agora', progress: 80,
    summary: 'Dashboard central construído. Chat Claude API ativo. 4 painéis operacionais. GitHub + Supabase integrados.',
    tags: ['Dashboard', 'Supabase', 'GitHub Pages', 'Claude API'],
  },
  {
    name: 'CHAT · AGENTES', color: '#ffcc00', status: 'pending', time: 'Ontem', progress: 30,
    summary: '23 agentes documentados. Nenhum ativo ainda. Discord token pendente. TGStat API integração pendente.',
    tags: ['23 Agentes', 'Discord Pendente', 'TGStat API'],
  },
  {
    name: 'CHAT · COPY', color: '#4488ff', status: 'inactive', time: 'Pendente', progress: 10,
    summary: 'Copy por vertical: Slots, Casino, Aviator, Sports, Poker, Mines. Aguardando leads para personalização.',
    tags: ['6 Verticals', 'Copy AI', 'Outreach'],
  },
];
