// ============================================================
// IGAMING-MASTER-FLOW — Configurações Centrais
// Atualizado: 23/03/2026
// ============================================================

const CONFIG = {

  // --- SUPABASE ---
  supabase: {
    url: "https://oaenyqkiheipyaiculza.supabase.co",
    anonKey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9hZW55cWtpaGVpcHlhaWN1bHphIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzU3NDU5NTUsImV4cCI6MjA5MTMyMTk1NX0.U-IQPAuXTPR6MsBqi3J6wT1sr2Ad1s5ngKj5SUej1EI"
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
