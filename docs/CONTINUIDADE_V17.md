# CONTINUIDADE V17 — iGaming Master Flow

**Version**: 17  
**Last Updated**: 2026-03-20  
**Project**: iGaming Lead Generation Automation System  
**Status**: Active Development

---

## 1. Project Overview

The iGaming Master Flow is a fully automated lead generation and outreach system targeting iGaming (online casino and sports betting) affiliate channels on Telegram. The system uses a multi-AI pipeline to discover, qualify, segment, and contact potential affiliate partners.

### Core Objective
Automate the discovery and outreach to Telegram channels promoting iGaming content, converting channel owners into active affiliates generating FTD (First Time Deposits).

---

## 2. System Architecture

```
┌─────────────────────────────────────────────────────────────────┐
│                     iGaming Master Flow                         │
├─────────────────────────────────────────────────────────────────┤
│                                                                  │
│  [Telemetr API] → [n8n Orchestrator] → [MTProto Bot]           │
│        ↓                  ↓                   ↓                 │
│  Channel Discovery   Workflow Engine    Telegram Outreach       │
│                           ↓                                     │
│                    [Supabase DB]                                 │
│                           ↓                                     │
│              [Lead Segmentation Engine]                         │
│                    ↙           ↘                                │
│         [ChatGPT Agents]   [Gemini Analytics]                   │
│               ↓                    ↓                            │
│        Personalized Copy    Performance Insights                │
│                           ↓                                     │
│                    [Claude Orchestrator]                        │
│                     CI/CD via GitHub Actions                    │
└─────────────────────────────────────────────────────────────────┘
```

---

## 3. Pipeline Stages

### Stage 1: Discovery (Telemetr API)
- Query Telemetr API for Telegram channels by game category keywords
- Filter by minimum 1,000 subscribers and >3% engagement rate
- Store raw channel data in Supabase `raw_channels` table

### Stage 2: Outreach (MTProto)
- Use MTProto API to send initial contact messages
- Rate limit: max 50 messages/hour to avoid Telegram bans
- Message content selected by ChatGPT agent for each game category

### Stage 3: Storage (Supabase)
- All leads stored in `leads` table with full metadata
- Status workflow: `new` → `contacted` → `responded` → `negotiating` → `converted` | `rejected`
- Real-time webhooks trigger n8n on status changes

### Stage 4: Segmentation
- Tier classification: Hot (>100k subs), Warm (10k-100k), Cold (<10k)
- Game category tagging
- Engagement score calculation
- Geographic segmentation (PT-BR primary)

### Stage 5: AI Outreach (ChatGPT)
- 15 specialized agents (one per game category)
- A/B test rotation every 7 days
- Message personalization based on channel data
- Performance tracking per variant

### Stage 6: Analytics (Gemini)
- Daily KPI reports
- Trend detection
- Conversion funnel analysis
- Recommendation generation

---

## 4. Technology Stack

| Component | Technology | Purpose |
|-----------|-----------|---------|
| Workflow Engine | n8n (self-hosted) | Pipeline orchestration |
| Database | Supabase (PostgreSQL) | Lead storage & analytics |
| Telegram API | MTProto (Pyrogram) | Channel outreach |
| Channel Discovery | Telemetr API | Find target channels |
| Copy Generation | OpenAI GPT-4 | Message writing |
| Analytics | Google Gemini | Performance analysis |
| Orchestration | Claude Code | System oversight |
| CI/CD | GitHub Actions | Deployment & validation |

---

## 5. Environment Variables

```env
# Telemetr API
TELEMETR_API_KEY=

# Supabase
SUPABASE_URL=
SUPABASE_ANON_KEY=
SUPABASE_SERVICE_ROLE_KEY=

# Telegram / MTProto
MTPROTO_API_ID=
MTPROTO_API_HASH=
MTPROTO_PHONE=
MTPROTO_API_URL=

# OpenAI
OPENAI_API_KEY=

# Google Gemini
GEMINI_API_KEY=

# n8n
N8N_WEBHOOK_URL=
N8N_API_KEY=
```

---

## 6. Supabase Schema

### Table: leads
```sql
CREATE TABLE leads (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  channel_id TEXT UNIQUE NOT NULL,
  channel_name TEXT,
  subscribers INTEGER,
  engagement_rate DECIMAL(5,2),
  game_category TEXT,
  tier TEXT CHECK (tier IN ('hot', 'warm', 'cold')),
  status TEXT DEFAULT 'new',
  outreach_message TEXT,
  responded_at TIMESTAMPTZ,
  converted_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);
```

### Table: daily_reports
```sql
CREATE TABLE daily_reports (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  report_date DATE UNIQUE NOT NULL,
  data JSONB,
  created_at TIMESTAMPTZ DEFAULT NOW()
);
```

### Table: ab_test_results
```sql
CREATE TABLE ab_test_results (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  test_id TEXT NOT NULL,
  game TEXT NOT NULL,
  variant TEXT NOT NULL,
  sends INTEGER DEFAULT 0,
  clicks INTEGER DEFAULT 0,
  signups INTEGER DEFAULT 0,
  week_start DATE,
  created_at TIMESTAMPTZ DEFAULT NOW()
);
```

### Function: get_daily_kpi_summary
```sql
CREATE OR REPLACE FUNCTION get_daily_kpi_summary(from_ts TIMESTAMPTZ, to_ts TIMESTAMPTZ)
RETURNS TABLE (
  game_category TEXT,
  total_leads BIGINT,
  converted BIGINT,
  avg_engagement NUMERIC
)
LANGUAGE sql STABLE AS $$
  SELECT
    game_category,
    COUNT(*) AS total_leads,
    SUM(CASE WHEN status = 'converted' THEN 1 ELSE 0 END) AS converted,
    AVG(engagement_rate) AS avg_engagement
  FROM leads
  WHERE created_at >= from_ts AND created_at < to_ts
  GROUP BY game_category;
$$;
```

---

## 7. n8n Workflows

| Workflow | File | Schedule | Description |
|----------|------|----------|-------------|
| Main Pipeline | `workflows/main_pipeline.json` | Every 2h | Full lead generation cycle |
| Lead Segmentation | `workflows/lead_segmentation.json` | Every 30m | Classify and tier leads |
| Daily KPI Report | `workflows/daily_kpi_report.json` | 08:00 daily | Generate and save KPI report |

---

## 8. Agent Directory

### ChatGPT Copy Agents (`/agents/chatgpt/`)
| File | Game | Notes |
|------|------|-------|
| `aviator.md` | Aviator | FOMO + multiplier focus |
| `fortune_tiger.md` | Fortune Tiger | Asian luck theme |
| `gates_olympus.md` | Gates of Olympus | Epic/mythological |
| `sweet_bonanza.md` | Sweet Bonanza | Fun/candy theme |
| `spaceman.md` | Spaceman | Sci-fi crash |
| `mines.md` | Mines | Strategy focus |
| `roleta.md` | Roleta | Classic casino |
| `slots.md` | Slots | Variety + jackpot |
| `blaze_crash.md` | Blaze Crash | Fiery/intense |
| `futebol.md` | Futebol | Sports betting |
| `jet_x.md` | Jet X | Speed/aviation |
| `big_bass.md` | Big Bass Bonanza | Fishing theme |
| `football_studio.md` | Football Studio | Sports + live casino |
| `bac_bo.md` | Bac Bo | VIP/sophisticated |
| `cards.md` | Cards | Strategy/tournaments |

---

## 9. Changelog

### V17 (2026-03-20)
- Initial project scaffold created
- All 15 ChatGPT game agents defined
- 3 n8n workflows implemented
- Supabase schema defined
- CI/CD pipeline configured
- A/B test framework established

### V16 and earlier
- Pre-scaffold planning and requirements gathering

---

## 10. Known Issues & TODOs
- [ ] Configure MTProto rate limiting in n8n
- [ ] Set up Supabase Row Level Security (RLS) policies
- [ ] Add error alerting Telegram bot
- [ ] Implement webhook for real-time lead status updates
- [ ] Add proxy rotation for MTProto to prevent bans
- [ ] Build Gemini analytics dashboard
- [ ] Set up n8n self-hosted instance with credentials

---

## 11. Team & Contacts
- **Project Lead**: Configured in Supabase `team` table
- **n8n Instance**: Configure `N8N_WEBHOOK_URL` in environment
- **Admin Channel**: Configure in MTProto settings
