// ============================================================
// IGAMING-MASTER-FLOW — Configurações Centrais
// Atualizado: 23/03/2026
// ============================================================

const CONFIG = {

  // --- SUPABASE ---
  supabase: {
    url: "https://bunxyoekblzyblpqlodk.supabase.co",
    anonKey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJ1bnh5b2VrYmx6eWJscHFsb2RrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzM5NTE5NTYsImV4cCI6MjA4OTUyNzk1Nn0.4_zQpcl_X2EaeL_bR0_iHkeKgQzjOxV6Hgisp7p3Vts"
  },

  // --- N8N WEBHOOKS (CORS resolvido ✅) ---
  n8n: {
    baseUrl: "https://bekas00.app.n8n.cloud",
    webhooks: {
      scout:     "https://bekas00.app.n8n.cloud/webhook/igaming-scout",
      outreach:  "https://bekas00.app.n8n.cloud/webhook/igaming-outreach",
      relatorio: "https://bekas00.app.n8n.cloud/webhook/igaming-relatorio"
    }
  },

  // --- CLAUDE API ---
  claude: {
    model: "claude-sonnet-4-20250514",
    apiKey: "" // Adicionar API key aqui para ativar o Chat Central
  }

};
