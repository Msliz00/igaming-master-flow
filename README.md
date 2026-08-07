# igaming-master-flow

Sistema automatizado de extração de leads iGaming — n8n + Supabase + Multi-IA

---

## Pipeline Overview

```
Telemetr API → n8n → MTProto → Supabase → Lead Segmentation → ChatGPT Outreach
```

1. **Telemetr API** — Discovers Telegram channels by iGaming game category (subscribers, engagement, niche)
2. **n8n** — Orchestrates the entire pipeline via automated workflows
3. **MTProto** — Sends personalized outreach messages directly to Telegram channel owners
4. **Supabase** — Stores all lead data, tracks status, and powers analytics
5. **Lead Segmentation** — Classifies leads by tier (Hot/Warm/Cold), game category, and engagement score
6. **ChatGPT Outreach** — Generates personalized copy for each game using specialized AI agents

---

## Repository Structure

```
igaming-master-flow/
├── workflows/                    # n8n workflow JSON files
│   ├── main_pipeline.json        # Full lead generation cycle (every 2h)
│   ├── lead_segmentation.json    # Lead tier classification (every 30m)
│   └── daily_kpi_report.json     # Daily KPI report generation (08:00)
│
├── agents/
│   ├── claude/
│   │   └── orchestrator.md       # Claude Code master orchestrator prompt
│   ├── chatgpt/                  # ChatGPT copy agents (one per game)
│   │   ├── aviator.md
│   │   ├── fortune_tiger.md
│   │   ├── gates_olympus.md
│   │   ├── sweet_bonanza.md
│   │   ├── spaceman.md
│   │   ├── mines.md
│   │   ├── roleta.md
│   │   ├── slots.md
│   │   ├── blaze_crash.md
│   │   ├── futebol.md
│   │   ├── jet_x.md
│   │   ├── big_bass.md
│   │   ├── football_studio.md
│   │   ├── bac_bo.md
│   │   └── cards.md
│   ├── gemini/
│   │   └── analytics_agent.md    # Gemini analytics agent prompt
│   └── github/
│       └── ci_cd.yml             # GitHub Actions CI/CD config
│
├── prompts/
│   └── ab_tests/                 # A/B test copy variants per game
│       ├── aviator_ab.md
│       ├── fortune_tiger_ab.md
│       ├── gates_olympus_ab.md
│       ├── sweet_bonanza_ab.md
│       ├── spaceman_ab.md
│       ├── mines_ab.md
│       └── other_games_ab.md
│
├── reports/
│   └── daily_kpi_template.md     # Daily KPI report template
│
└── docs/
    └── CONTINUIDADE_V17.md       # Full project continuity document
```

---

## Supported Games

| Game | Category | Agent |
|------|----------|-------|
| Aviator | Crash | `agents/chatgpt/aviator.md` |
| Fortune Tiger | Slot | `agents/chatgpt/fortune_tiger.md` |
| Gates of Olympus | Slot | `agents/chatgpt/gates_olympus.md` |
| Sweet Bonanza | Slot | `agents/chatgpt/sweet_bonanza.md` |
| Spaceman | Crash | `agents/chatgpt/spaceman.md` |
| Mines | Strategy | `agents/chatgpt/mines.md` |
| Roleta | Table | `agents/chatgpt/roleta.md` |
| Slots | Slot | `agents/chatgpt/slots.md` |
| Blaze Crash | Crash | `agents/chatgpt/blaze_crash.md` |
| Futebol | Sports | `agents/chatgpt/futebol.md` |
| Jet X | Crash | `agents/chatgpt/jet_x.md` |
| Big Bass Bonanza | Slot | `agents/chatgpt/big_bass.md` |
| Football Studio | Live Table | `agents/chatgpt/football_studio.md` |
| Bac Bo | Live Table | `agents/chatgpt/bac_bo.md` |
| Cards | Table | `agents/chatgpt/cards.md` |

---

## Environment Variables

Copy `.env.example` (when provided) and configure:

```env
TELEMETR_API_KEY=        # Telemetr channel discovery API
SUPABASE_URL=            # Supabase project URL
SUPABASE_ANON_KEY=       # Supabase anonymous key
SUPABASE_SERVICE_ROLE_KEY= # Supabase service role key
MTPROTO_API_ID=          # Telegram API ID
MTPROTO_API_HASH=        # Telegram API Hash
MTPROTO_API_URL=         # MTProto service endpoint
OPENAI_API_KEY=          # OpenAI GPT-4 key
GEMINI_API_KEY=          # Google Gemini key
N8N_WEBHOOK_URL=         # n8n instance webhook URL
N8N_API_KEY=             # n8n API key
```

---

## Quick Start

1. Import `workflows/*.json` into your n8n instance
2. Configure environment variables in n8n credentials
3. Enable workflows in the following order:
   - `lead_segmentation` (every 30 min)
   - `main_pipeline` (every 2 hours)
   - `daily_kpi_report` (daily at 08:00)
4. Monitor leads in Supabase dashboard

---

## Documentation

See [`docs/CONTINUIDADE_V17.md`](docs/CONTINUIDADE_V17.md) for full project continuity documentation including architecture diagrams, Supabase schema, and changelog.
