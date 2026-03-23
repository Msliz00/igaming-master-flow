const IGAMING_CONFIG = {
  supabase: {
    url: 'https://bunxyoekblzyblpqlodk.supabase.co',
    key: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJ1bnh5b2VrYmx6eWJscHFsb2RrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzM5NTE5NTYsImV4cCI6MjA4OTUyNzk1Nn0.4_zQpcl_X2EaeL_bR0_iHkeKgQzjOxV6Hgisp7p3Vts',
    tables: {
      rawGroups:   'raw_groups',
      validGroups: 'valid_groups',
      loteControl: 'lote_control',
      masterLeads: 'master_leads',
      kpiTracker:  'kpi_tracker',
    }
  },
  n8n: {
    url: 'https://bekas00.app.n8n.cloud',
    key: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJjODM4ZjI2OC02NjYxLTRiMjktYjlkMS00NzBjOTdjYWRkN2QiLCJpc3MiOiJuOG4iLCJhdWQiOiJwdWJsaWMtYXBpIiwianRpIjoiM2YzNDI2ZWQtMTk1NS00MzNlLTg4NmEtZjQ1NDMzZjVlZGQ4IiwiaWF0IjoxNzczOTYwNzk3LCJleHAiOjE3NzY0ODEyMDB9.1orOYxWosfiAx1HkW_6X_vZNHYMcih5pYt5ks2-Jfuo',
    webhooks: {
      scout:     '/webhook/scout-trigger',
      extrator:  '/webhook/extrator-trigger',
      validador: '/webhook/validador-trigger',
    }
  },
  claude: {
    model: 'claude-sonnet-4-20250514',
  },
  project: {
    name:        'IGAMING-MASTER-FLOW',
    version:     '1.0.0',
    totalAgents:  23,
    activeAgents: 1,
  },
  refreshInterval: 60,
};
