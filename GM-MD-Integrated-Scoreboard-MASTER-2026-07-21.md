# GM/MD Integrated Scoreboard — Master Reference

**Version:** v1.11 — July 2026
**Publisher:** SMA
**Audience:** Dennis (MD/Founder) · GM/MD · Team Leaders · SMA · human or AI implementers rebuilding this app
**Audit Score:** 98/100 (see Section 15)
**Changes in v1.11 (2026-07-21):** This update brings the doc current with `index.html` and turns it into a build spec, not just a content spec.
- **Tab 01 — Start Here added** (Option B redesign, shipped 2026-07-15). A new role-based landing tab: three shortcut buttons ("I'm a TL," "I'm the GM," "I'm the MD") plus a "This Week At A Glance" grid of 3 live status tiles (GM/MD-Off Switches, Rock Health, 55-KPI Readiness Map). This is a genuinely new tab, not a rename — every tab after it shifted up by one number (old Tab 01 About → Tab 02, ... old Tab 07 Lotus Strategy Canvas → Tab 08). Keyboard shortcuts are now 1–8. See Section 5 and Section 19.
- **3-Year Priority — Adv.I.S.E. split into its own section** (shipped 2026-06-29). Previously documented as folded into one static, unmeasured "Universal Mission → V/TO → 5yr → 3yr" recap row. It's now its own independently-editable collapsible section in Tab 08 (Lotus Strategy Canvas), separate from the 5-Year KPI cards. Tab 08 grew from 10 to 11 collapsible sections. See Section 11.
- **Fixed the document's own missing Section 11.** The pre-v1.11 file jumped from `## 10.` straight to `## 12.` with no explanation — a numbering skip, not lost content. This version renumbers every section contiguously, 1–20, folding in the new Tab 01 content section and a new Technical Build Specification appendix (Sections 16–20).
- **Renamed and dated.** File is now `GM-MD-Integrated-Scoreboard-MASTER-2026-07-21.md`. The pre-update content (v1.10) is archived at `Draft/GM-MD-Integrated-Scoreboard-MASTER-v1.10-2026-06-24.md`.
- **New audience:** this doc is now written to also serve a human or AI agent trying to rebuild `index.html` from scratch, with no other reference. Sections 1–15 are still the grade-5 team-facing content spec; Sections 16–20 are a technical appendix for implementers.

**Changes in v1.10:** Fixed a real bug: changing any KPI's status inside Architect Console or LCC Project Execution KPIs was silently collapsing the whole section (and any of Architect Console's 5 tiles) back closed on every single edit, because the re-render that recomputes the live/partial/missing counts rebuilt those sections' HTML from scratch without preserving which ones were open. Fixed by tracking open/closed state by element id across each re-render. Revised the Architect Console and LCC Project Execution KPIs descriptions (subtitle and the longer explanation shown when expanded) to match the plain-language, purpose-first voice already used for GM/MD-Off Switch — replacing framework jargon ("Layer 2 of the Founder Freedom Cockpit v2.3...") with what each section actually tells you. Each of Architect Console's 5 tile descriptions is now a question, in the same voice (e.g. "Is the business making money, reliably?").
**Changes in v1.9:** Dropped the "55-KPI Readiness Map" heading entirely — it only existed to frame "these add up to 55 KPIs," and the TOTAL bar already says that on its own. Tab 02 (now Tab 03) is now three parallel, collapsed-by-default sections styled identically to Tab 01's (now Tab 02's) About sections (flat diamond-bar header, not a boxy card): GM/MD-Off Switch — 6 Tests, Architect Console, and LCC Project Execution KPIs (renamed from "Project Execution — Live in LCC v4.1"). Each of the 6 GM/MD-Off Switch tests now has its own one-line description; each of Architect Console's 5 inner tiles now shows its description in its own summary row (previously only visible when expanded); LCC Project Execution KPIs gained a full explanatory paragraph on what the 17 KPIs actually measure. The TOTAL (55 KPIs) bar stays always-visible above all three sections, now carrying the "Tracker..." note that used to live under the old heading. **Independently verified** the 17 LCC Project Execution KPIs against the actual LCC v4 source (`Google-AI-Studio---Lotus-Command-Center-v3/src/components/Dashboard.tsx`), not resting solely on the wiki synthesis doc used in v1.7/v1.8.
**Changes in v1.8:** Tab 02 (now Tab 03) editability now matches Tab 07's (now Tab 08's) model instead of v1.7's always-on model — every field across the GM/MD-Off Switch cards, Architect Console, and Project Execution is read-only by default and becomes editable only when the header "Edit" button is switched on. Removed the "Founder Freedom Score Strip" pointer box from inside the Readiness Map (it duplicated heading 1 with no new information) and reordered the Readiness Map to exactly two headings, in this order: Architect Console, then Project Execution. Added a "Found In" column to both Readiness Map tables, verified by reading the live `SMA`/`VCOLS`/`TEAMS`/`ANCS` arrays directly: 18 of 49 KPIs already exist elsewhere in this scoreboard and are cross-referenced by tab + section; the other 31 (including all 17 Project Execution KPIs) fall back to their Source System reference — see Section 6.
**Changes in v1.7:** Tab 02 (now Tab 03) is now fully editable end-to-end (previously read-only). Added a third "LDApp source" tag to KPI rows across Tabs 02–05 (now Tabs 03–06), naming which internal Lotus tool should feed that KPI's data (`?`-prefixed when unconfirmed). Rebuilt the 55-KPI Readiness Map on the real, individually-named canonical KPI list and restructured it into three tiers matching the Founder Freedom Cockpit v2.3 architecture — see Section 6.
**Changes in v1.6:** Renamed Tab 02 (now Tab 03) and all 6 switch tests from "Founder-Off" to "GM/MD-Off" throughout this document to match the live app. Corrected the Strategy Canvas section list — 10 collapsible sections at the time, not 7. Documented Google OAuth sign-in gate. Documented the completed-item status model (`done-obs`/`done-signed`/`archived`/`dropped`) and its two always-visible view controls.
**Changes in v1.5:** Added Tab 06 (now Tab 07) — VTO Map. Added 3 KPIs found missing during the completeness audit. Tab 03 (now Tab 04) total 65 → 66 KPIs. Tab 04 (now Tab 05) total ~197 → ~199 KPIs. Total tabs: 6 → 7.
**Changes in v1.4:** Full CSV cross-check audit — 30 KPI fixes across 9 teams. Tab 04 (now Tab 05) total ~170 → ~197 KPIs.
**Changes in v1.3:** VTO hierarchy made explicit across all tabs. Tab 4 (VTO Critical Numbers) absorbed into Tab 3 Section 0. Total tabs: 6.
**Changes in v1.2:** Tab 7 renamed to Strategy Canvas. Tab 8 (12Q Canvas) removed — folded into Tab 7. Total tabs reduced from 8 to 7.
**Changes in v1.1:** Tab 1 is now About (default landing); Founder View moved to Tab 2. DCD and Technical teams merged under DCFM. Per-KPI owner fields added to all 11 teams.

---

## 1. What This Is

This scoreboard shows what is happening in Lotus — right now. One look tells you: is the business on track, where is the problem, who is responsible, and what to do next. Every number has an owner. Every miss has a consequence. The system acts, not the person.

---

## 2. Who Uses It and How

| Role | What They Do with This Scoreboard |
|---|---|
| **Team Member (TM)** | Sees their team's numbers every week and knows what to fix if a number turns red |
| **Team Leader (TL)** | Fills in numbers, explains misses, and presents a fix plan — never just a reason |
| **GM/MD** | Reviews all numbers every Monday by 9am; escalates the same day if red with no plan |
| **MD/Owner (Dennis)** | Checks Tab 03 (GM/MD-Off Dashboard) weekly; all 6 GM/MD-Off Switches must stay green for 8 consecutive weeks to confirm GM/MD-Off status |

Tab 01 — Start Here gives every role a one-click shortcut to their page and a live at-a-glance status grid, so no one has to read all 8 tabs to know where to go. See Section 5.

---

## 3. System Map — How Everything Connects

```
LCC (Lotus Command Center)     →    Supabase        →    Scoreboard HTML
[Where the work happens]            [Bridge]              [Where strategy is read]

Team Member submits work            Data stored           GM sees it in Tab 08 (Lotus Strategy Canvas)
TL approves / escalates             live                  GM/MD sees it in Tab 03 (GM/MD-Off Dashboard)
SMA oversees and enforces                                 Tab 04 shows every KPI weekly
```

**Access:** Every tab requires Google sign-in before any content loads — no anonymous viewing. The sign-in gate is a full-screen overlay above everything, including Tab 01 — Start Here; it is not skipped for the landing tab.

**Tab flow (how to read this scoreboard — 8 tabs):**
1. **Tab 01 — Start Here:** Where do I go, and what's the state of things right now? (role shortcuts + live at-a-glance status)
2. **Tab 02 — About:** How do I use this scoreboard? (first-use reference)
3. **Tab 03 — GM/MD-Off Dashboard:** Can the GM/MD step back? (6 GM/MD-Off Switches must stay green for 8 consecutive weeks)
4. **Tab 04 — VTO — Company:** Are our Critical Numbers on track — by site and by function? (11 KPIs × 4 sites in Section 0; 66 total KPIs across 7 sections)
5. **Tab 05 — VTO — Teams:** Are our teams hitting the KPIs that drive the company numbers? (~199 KPIs, 11 teams — lead KPIs that drive Tab 04 lag numbers)
6. **Tab 06 — Strategic Anchors:** Are LotusOS, CultureOS, LeaderZen, and ExperienceOS running on their own?
7. **Tab 07 — VTO Map:** What does the GM Strategy one-pager actually say, word for word, and how does it trace down to team KPIs?
8. **Tab 08 — Lotus Strategy Canvas:** Where are we going — this quarter, this year, and in 3 years? (live from LCC)

**VTO Hierarchy (why Tab 04 and Tab 05 are related):**
Tab 04 Section 0 shows the 11 company-level Critical Numbers across all 4 sites — these are lag indicators (results). Sections 1–6 show the lead KPIs the GM acts on weekly. Tab 05 shows the team-level lead KPIs that drive those company numbers. The VTO hierarchy flows: Company CN Lag → Company CN Lead → Team CN Lead.

**Why Tab 05 ≠ Tab 04:**
Tab 04 is the company view — GM/SMA weekly action dashboard (66 KPIs). Tab 05 is the team view — each TL owns their section and fills in their team's lead KPIs every week.

---

## 4. Cross-Tab Shared KPIs

Three KPIs appear in multiple tabs. They are ONE data point — entered once, shown everywhere. The GM enters the number once and all tabs update.

| KPI Name | Data Key | Appears In | Owner | Target |
|---|---|---|---|---|
| ICARE Resolved <72h % | `icare_72h` | Tab 04 (Section 3), Tab 05 (Team D + K), Tab 06 (ExperienceOS) | SMA | ≥90% |
| L10 Quality Score (1–10) | `l10_quality` | Tab 04 (Section 6), Tab 05 (Team K), Tab 06 (LeaderZen) | SMA | ≥8/10 |
| LotusOS Adoption % | `lotusos_adoption` | Tab 04 (Section 6), Tab 05 (Team K), Tab 06 (LotusOS) | SMA | ≥85% |

**LDApp Source Tags:** Every KPI row in Tabs 03–06 carries a third tag (purple chip in the UI) alongside Source Doc + Framework, naming the internal Lotus tool ("LDApp") that should feed that KPI — e.g. `LCC v4.1`, `LeaderZen Module`, `VTO + CN Map`, `LMDB`, `LDApp Module`, `ExpOS Module`, `LCDM Module`, `HSRM Module`, `PT (Planning Tool) Module`. Where no confirmed internal tool exists yet, the tag is prefixed `?` with a best guess — a known gap to close, not an error to fix. Tags are editable inline, same as every other field on these rows.

---

## 5. Tab 01 — Start Here

**Question:** Where do I go, and what's the state of things right now?
**Added:** 2026-07-15 (Option B redesign). This is the default landing tab — the first thing anyone sees after signing in.

**Layout:**
- Three role-shortcut buttons: **"I'm a TL"** jumps to Tab 05 (VTO — Teams), **"I'm the GM"** jumps to Tab 04 (VTO — Company), **"I'm the MD"** jumps to Tab 03 (GM/MD-Off Dashboard).
- **"This Week At A Glance"** — a grid of 3 live status tiles, each clickable:
  - **GM/MD-Off Switches** — how many of the 6 switches are green, plus partial/missing-feed counts. Click through to Tab 03.
  - **Rock Health** — how many live LCC rocks are on track, plus at-risk/critical counts (pulled from the same Supabase fetch as Tab 08's Rock Health grid). Click through to Tab 08.
  - **55-KPI Readiness Map** — combined live/partial/missing count across the GM/MD-Off Switch tests and the Architect Console tiles. Click through to Tab 03.

**What changed vs. before this tab existed:** nothing about the underlying data. Real Google/Supabase sign-in and the live Rock Health fetch are unchanged from production — only a pre-launch preview build had ever stubbed those out. No KPI data, targets, or owners changed when this tab was added.

**Access:** Same sign-in gate as every other tab (see Section 3) — Start Here is not a public-facing summary page.

---

## 6. Tab 03 — GM/MD-Off Dashboard

**Question:** Can the GM/MD step back? Are the 6 GM/MD-Off Switches green?
**Logic:** All 6 GM/MD-Off Switch (FOS) tests must stay GREEN for 8 consecutive weeks. If any is red, the GM/MD is still needed in that area.
**Edit:** This tab is read-only by default, same as Tab 08 — tap ✏ Edit in the header to make every field (status, target, consequence, source, LDApp tag) editable, tap Done to save to this browser.
**Layout:** Three collapsed-by-default sections, each styled like Tab 02's About sections (flat diamond-bar header you click to expand, not a boxy card) — GM/MD-Off Switch, Architect Console, LCC Project Execution KPIs. The TOTAL (55 KPIs) bar sits always-visible above all three.

### GM/MD-Off Switch — 6 Tests

*"The 6 tests that prove the business runs without the GM/MD — all must hold green for 8 weeks."*

| # | Test | What It Asks | Target | Readiness | What Happens If Red |
|---|---|---|---|---|---|
| FOS-1 | Owner Draft Quality (avg + 0 rewrites) | Are plans coming in clean the first time, without GM/MD rewrites? | ≥16/20 avg; 0 rewrites | PARTIAL | SMA flags the owner. No project moves forward until the rewrite cycle stops. |
| FOS-2 | SMA / GM Compliance Rate | Are reviews and approvals happening on schedule, without the GM/MD chasing anyone? | ≥90% | PARTIAL | SMA escalates to GM same day. Root cause report due in 24 hours. |
| FOS-3 | F&B Profit — Clear Owner | Does someone other than the GM/MD own F&B profit performance? | Stable; GM/MD not involved | MISSING | Dennis confirms manually each week until Finance feed is live. |
| FOS-4 | Team-Led Innovations | Are teams generating their own improvements, instead of waiting on the GM/MD? | ≥2 per BU per month | MISSING | BU Heads submit innovation log to SMA by last Friday of the month. |
| FOS-5 | Self-Managed Incidents | Are problems getting resolved by the team itself, without GM/MD intervention? | ≥80% resolved without GM/MD | MISSING | SMA tracks manually. Escalations are counted and reviewed weekly. |
| FOS-6 | GM/MD Active Hours | Is the GM/MD's hands-on time shrinking toward zero? | ≤10 hrs/week; near-zero escalations | PARTIAL | Dennis flags which task he should not be doing. GM takes it over by next Monday. |

### Architect Console

*"The 5 systems that have to run themselves before GM/MD-Off counts — Operational OS, ENGINE, PULSE, SOUL, Growth Pipeline."*

Each tile answers one question without anyone checking by hand: is the operating system actually being used (Operational OS), is the business making money (ENGINE), are customers and tenants happy (PULSE), is the team healthy and well led (SOUL), and is new growth coming in without the GM/MD chasing it (Growth Pipeline)? 32 KPIs across the 5 tiles below.

Every KPI row also carries a **Found In** column: where else in this scoreboard that KPI already lives (cross-checked directly against the `SMA`/`VCOLS`/`TEAMS`/`ANCS` arrays), or its Source System as a fallback when no match exists anywhere else in the file.

**32 KPIs across 5 tiles**

*C1. Operational OS (7 KPIs — 0 LIVE, 2 PARTIAL, 5 MISSING)* — "Is LotusOS actually being used, not just installed?"

| # | KPI | Target | Source System | Status | Found In |
|---|---|---|---|---|---|
| OOS-1 | LotusOS compliance % — true, not proxy | ≥85% | LDApps + LDPM module | MISSING | Tab 04 — VTO Company §6 (LotusOS Adoption %) |
| OOS-2 | PT / Process Tracker accuracy | Stable; red/yellow only | PT / Scoreboard system | MISSING | *(fallback)* PT / Scoreboard system |
| OOS-3 | Module submission % — on time | 100% | LDApps module | MISSING | Tab 06 — Strategic Anchors (LotusOS) |
| OOS-4 | SLA breach rate | 0% | ICARE / LCC / LDApps | MISSING | Tab 06 — Strategic Anchors (LotusOS) |
| OOS-5 | Side tracker count | 0 | LDApps audit | MISSING | Tab 06 — Strategic Anchors (LotusOS) |
| OOS-6 | Founder-required closures per month | ≤3/month, declining | LCC / GM summary | PARTIAL | *(fallback)* LCC v4.1 |
| OOS-7 | Rescue rate | <10% | LCC | PARTIAL | *(fallback)* LCC v4.1 |

*C2. ENGINE — Finance (7 KPIs — all MISSING)* — "Is the business making money, reliably?"

| # | KPI | Target | Source System | Found In |
|---|---|---|---|---|
| E-1 | Weekly revenue flash by BU | On target | Finance dashboard / PT | *(fallback)* Finance dashboard / PT |
| E-2 | Margin by BU | Above target; below-target only shown | Finance / BU scoreboards | *(fallback)* Finance / BU scoreboards |
| E-3 | Cash position / buffer | Safe zone | Finance | *(fallback)* Finance |
| E-4 | Days A/R — Accounts Receivable | Declining trend | Finance | *(fallback)* Finance |
| E-5 | Days Inventory | Declining trend | Finance | *(fallback)* Finance |
| E-6 | Cash Margin | Stable or improving | Finance | *(fallback)* Finance |
| E-7 | OTIF — Handaan + kiosks | ≥98% | Finance / Ops | Tab 05 — VTO Teams, Operations dept |

*C3. PULSE — Customer (7 KPIs — all MISSING)* — "Are customers and tenants happy?"

| # | KPI | Target | Source System | Found In |
|---|---|---|---|---|
| PU-1 | Foot traffic by site | Positive trend; red flags only | Site dashboards | Tab 04 — VTO Company §2 |
| PU-2 | Tenant health / at-risk cluster count | No red clusters | Tenant / Leasing dashboard | *(fallback)* Tenant / Leasing dashboard |
| PU-3 | Event utilization | Above target | Events / FEC dashboards | Tab 04 — VTO Company §0 (Venue Utilization %) |
| PU-4 | NPS — Overall | ≥60 | ExperienceOS / feedback | Tab 06 — Strategic Anchors (ExperienceOS) |
| PU-5 | NPS — FEC | ≥70 | ExperienceOS / feedback | Tab 06 — Strategic Anchors (ExperienceOS) |
| PU-6 | NPS — Handaan | ≥65 | ExperienceOS / feedback | Tab 06 — Strategic Anchors (ExperienceOS) |
| PU-7 | Recurring ICARE issues + unresolved SLA breaches | 0 recurring | ICARE / LDApps | Tab 04 — VTO Company §3 (related: ICARE Resolved <72h %) |

*C4. SOUL — People (7 KPIs — all MISSING)* — "Is the team healthy and well led?"

| # | KPI | Target | Source System | Found In |
|---|---|---|---|---|
| SO-1 | Leadership Autonomy Score per leader | ≥80; alert <70 | LeaderZen / L10 / HSM | Tab 06 — Strategic Anchors (LeaderZen) |
| SO-2 | L10 meeting compliance | ≥90%; red flag <75% for 2 weeks | LeaderZen | Tab 04 — VTO Company §6 |
| SO-3 | Culture ritual compliance — Gather / Grow | ≥90% | CultureOS / L10 | Tab 06 — Strategic Anchors (CultureOS) |
| SO-4 | Engagement trend — direction only | Improving | HSM / Human360 / HR | Tab 06 — Strategic Anchors (CultureOS) |
| SO-5 | APOGEIC Fit score — People Analyzer | ≥3.5/5 avg; no one <3 for 2 consecutive quarters | LeaderZen / HSM | Tab 06 — Strategic Anchors (CultureOS) |
| SO-6 | TL problem-solving rate before escalation | ≥80% | SMA tracking | *(fallback)* SMA tracking |
| SO-7 | Promotion-ready shortlist | Updated quarterly; ≥1 per role | LRAD | Tab 06 — Strategic Anchors (LeaderZen) |

*C5. Growth Pipeline (4 KPIs — all MISSING)* — "Is new growth coming in without the GM/MD chasing it?"

| # | KPI | Target | Source System | Found In |
|---|---|---|---|---|
| GP-1 | Pre-development sites — stage + blockers | Advancing; no stalls | Biz Dev / pipeline tracker | *(fallback)* Biz Dev / pipeline tracker |
| GP-2 | Launching sites — risk level | Low risk | Replication OS / DEVELOP | *(fallback)* Replication OS / DEVELOP |
| GP-3 | Tenant pipeline health | Growing or stable | Leasing / tenant DB | Tab 04 — VTO Company §1 (related: Tenant Mix Plan) |
| GP-4 | Brand innovation pipeline per BU | ≥2 per BU per month | Brand / MarCom / BU tracker | *(fallback)* Brand / MarCom / BU tracker |

### LCC Project Execution KPIs

*"Shows whether work is moving cleanly through Lotus or getting stuck — fed automatically by LCC v4.1, nothing entered by hand here."*

**17 KPIs, all LIVE (source: LCC).** Found In: `LCC v4.1 (lcc-v4-supabase.vercel.app)` for all 17 — none exist anywhere else in this scoreboard.

| # | KPI | Target |
|---|---|---|
| PE-1 | Compliance rate | ≥90% |
| PE-2 | Escalation rate / Founder Dependency proxy | ≤20% |
| PE-3 | Active escalations — L3 + Serious Breach | Near 0 |
| PE-4 | First-pass Owner Plan approval % | ≥70% |
| PE-5 | Return rate % | ≤20% |
| PE-6 | Avg days to SMA approval | ≤1 day |
| PE-7 | L1 Correction active count | Near 0 |
| PE-8 | L2 Alignment active count | Near 0 |
| PE-9 | L3 Formal Escalation active count | 0 |
| PE-10 | Active strikes | ≤2 |
| PE-11 | SMA queue — Owner Plans pending | Cleared within 48 hrs |
| PE-12 | SMA queue — Final sign-offs pending | 0 |
| PE-13 | SMA queue — Returned work aging | 0 stale >3 days |
| PE-14 | Project flow — stale stages | 0 stale |
| PE-15 | Projects completed this month | Trending up |
| PE-16 | Top plan gaps / most common fail types | None repeating |
| PE-17 | Owner quality score per owner | ≥90 |

**TOTAL: 55 KPIs — 17 LIVE / 5 PARTIAL / 33 MISSING** (6 GM/MD-Off Switch + 17 Project Execution + 32 Architect Console).

---

## 7. Tab 04 — VTO — Company (66 KPIs)

**Question:** Are our Critical Numbers on track — by site and by function?
**Owner:** GM/MD (published by SMA)
**Cadence:** Every Monday by 9am
**Rule:** If a number is red with no plan, the KPI Owner explains and presents a fix — same day.
**Display:** All 7 sections are collapsed by default. Click any section to expand.

### Section 0 — VTO Critical Numbers (All Sites) | 11 KPIs × 4 Sites

The 10 company-level Critical Numbers displayed as a 4-site × 10-KPI matrix (Lotus Mall · Stadium Strip · Portal Mall · Consolidated). These are the lag indicators — the results. Sections 1–6 show the lead KPIs that drive them.

| # | KPI | Owner | Cadence |
|---|---|---|---|
| VTO-1 | Occupancy % (Area) | Opportunity TL | Weekly |
| VTO-2 | Occupancy % (Unit) | Opportunity TL | Weekly |
| VTO-3 | Occupancy % (₱ Value) | Opportunity TL | Weekly |
| VTO-4 | Collection Rate % | Collection Specialist | Weekly |
| VTO-5 | EBITDA Margin | Finance TL | Monthly |
| VTO-6 | Net Profit (₱) | Finance TL | Monthly |
| VTO-7 | Avg Daily Foot Traffic | E&G TL | Weekly |
| VTO-8 | Venue Utilization % | E&G TL | Weekly |
| VTO-9 | Community NPS | Ops TL | Weekly (rolling) |
| VTO-10 | Operating Expenses | Ops TL | Monthly |
| VTO-11 | Active Venues (Sites) | MD/Owner | Monthly |

Data keys: `vto.{site}_{col}` — preserved from previous Tab 04 (VTO Critical Numbers). No data migration needed.

### Section 1 — Growth Engine: Leasing | 7 KPIs

**Question:** Is there enough demand? Are we closing deals and keeping tenants?

| # | KPI | Owner | Type | Target | Cadence | What Happens If Missed |
|---|---|---|---|---|---|---|
| S1-1 | # Prospects / Priority Vacant Spaces | CS (Commercial) | Lead | TBD | Weekly | Pipeline <3: CS escalates to Opportunity TL same day. |
| S1-2 | # Online Inquiries Scheduled for Ocular | AS (Commercial) | Lead | TBD | Weekly | <2/week: Marcom and Opportunity TL review ad targeting in 48h. |
| S1-3 | # Closed Prospects | AS (Commercial) | Lead | TBD | Weekly | 0 for 2 weeks: Opportunity TL reviews closing script. Escalates to GM/MD. |
| S1-4 | Pull-out Aversion Rate | ADC | Lag/Lead | TBD | Monthly | Any pull-out: reported to Opportunity TL in 24h of notice. |
| S1-5 | Business Beginners ≥25% (GLA-weighted) | Opportunity TL | Lag | ≥25% | Monthly | <25%: Opportunity TL reviews tenant mix plan. Flags at next L10. |
| S1-6 | Tenant Mix Plan % Planned vs Actual | Opportunity Integrator | Lead | TBD | Monthly | <80%: Opportunity TL reviews mix plan same week. |
| S1-7 | Tenant Requirements % Complete & Updated | ADC | Governance | 100% | Weekly | Any gap: ADC resolves in 24h. Opportunity TL notified. |

### Section 2 — Growth Engine: Events & Activation | 12 KPIs

**Question:** Do we have events? Are venues filled? Is foot traffic coming in?

| # | KPI | Owner | Type | Target | Cadence | What Happens If Missed |
|---|---|---|---|---|---|---|
| S2-1 | Event Pipeline (weeks of calendar depth) | E&G TL | Lead | 8–12 wks ahead | Weekly | <6 weeks: E&G TL activates partnership outreach in 5 days. |
| S2-2 | Venue Utilization % (booked ÷ available hours) | E&G TL | Lead | TBD | Weekly | <60%: E&G TL reviews booking process and pricing in 7 days. |
| S2-3 | # of 500+ pax events per month (all sites) | E&G TL | Lead | TBD | Monthly | 0 in a month: E&G TL escalates to Opportunity TL for corporate outreach. |
| S2-4 | Avg Daily Foot Traffic (by site) | E&G TL | Lead | TBD | Weekly | Declining: E&G TL reviews event schedule and activates traffic drive. |
| S2-5 | Venue Occupancy (Hours Reserved) | GS & CS | Lag | TBD | Weekly | Below target: E&G TL reviews booking calendar in 5 days. |
| S2-6 | # Merchants Inquiry | GS | Lead | TBD | Weekly | 0 in a week: GS escalates to E&G TL same day. |
| S2-7 | # Foot Traffic Generated | GS Integrator | Lead | TBD | Weekly | Declining: GS Integrator reviews activation plan. |
| S2-8 | # Mall Events Generated / Executed | GS Integrator | Lead | TBD | Weekly | 0/month: E&G TL escalates to Opportunity TL. |
| S2-9 | # Handaan Events Generated | GS Integrator | Lead | TBD | Weekly | 0/month: GS Integrator escalates to E&G TL. |
| S2-10 | Occupancy %: Venue – PValue (₱) | GS & CS | Lag | TBD | Monthly | Declining: E&G TL reviews pricing and event mix. |
| S2-11 | Occupancy %: Handaan Events – PValue (₱) | GS – Handaan | Lag | TBD | Monthly | Declining: Handaan Ops reviews menu and marketing. |
| S2-12 | Occupancy %: Koncepto – Unit / PValue | GS | Lag | TBD | Monthly | Declining: GS reviews kiosk occupancy and pricing. |

### Section 3 — Experience & Operations Reliability | 12 KPIs

**Question:** Is the site clean, safe, and running? Are problems fixed fast?

| # | KPI | Owner | Type | Target | Cadence | What Happens If Missed |
|---|---|---|---|---|---|---|
| S3-1 | ICARE Resolved <72 Hours % ↔ SHARED | SMA | Governance | ≥90% | Weekly | <90%: SMA identifies stale items. Each owner escalates in 24h. |
| S3-2 | Site Quality Score % (Audit) | SMA / Ops | Governance | TBD | Weekly | Any site <80%: Ops TL submits corrective action in 48h. |
| S3-3 | MTTR — Mean Time to Repair (hours) | Engineering Integrator | Lag | TBD | Weekly | >24h unresolved: Eng Integrator escalates to Ops TL immediately. |
| S3-4 | Site Score % | Ops Integrator | Lead | TBD | Weekly | <80%: Ops Integrator submits corrective action in 48h. |
| S3-5 | % Onboarded Tenants (New + Existing) | Site Ops Integrator | Lead | 100% | Weekly | Any gap: Site Ops Integrator follows up in 24h. |
| S3-6 | Parking Income (₱) | Site Ops / TROC / TRP | Lead | TBD | Weekly | Below target: Ops TL reviews parking utilization same week. |
| S3-7 | Electricity Expense | Ops TL | Lag | TBD | Monthly | Overrun >10%: Ops TL reviews consumption in 48h. |
| S3-8 | Water Expense | Ops TL | Lag | TBD | Monthly | Overrun >10%: Ops TL reviews usage in 48h. |
| S3-9 | Manpower Expenses (All Agencies) | Ops TL | Lag | TBD | Monthly | Overrun: Ops TL reviews agency headcount in 48h. |
| S3-10 | Security Expenses (Agency) | Ops TL | Lag | TBD | Monthly | Overrun: Ops TL reviews agency contract same week. |
| S3-11 | # Breakdowns – Engineering Dept. | Eng Integrator | Lead | TBD | Weekly | Any breakdown >24h: Eng Integrator escalates to Ops TL immediately. |
| S3-12 | % On time Completion: PM Checklist | Ops | Governance | 100% | Weekly | Any miss: Ops reports to TL same day. TL corrects in 24h. |

### Section 4 — Brand & Demand (Marcom) | 7 KPIs

**Question:** Is marketing bringing in the right leads? Is the brand growing online?

| # | KPI | Owner | Type | Target | Cadence | What Happens If Missed |
|---|---|---|---|---|---|---|
| S4-1 | # Inquiries — Online (Strong Leads, Commercial) | Online Community Specialist | Lead | TBD | Weekly | <target 2 weeks: Marcom TL reviews content and ad budget in 5 days. |
| S4-2 | Engagement Rate (Ave) | Brand & Comms Integrator | Lead | TBD | Weekly | Declining 3 weeks: Brand team reviews content calendar. |
| S4-3 | % On-time & Accurate: Marcom Activities | Marcom TL | Governance | 100% | Weekly | 2 misses in a row: Marcom TL escalates to GM/MD. |
| S4-4 | # Scheduled for Ocular (Commercial) | Marketing Specialist | Lead | TBD | Weekly | <target 2 weeks: Marcom TL reviews conversion approach in 5 days. |
| S4-5 | Net Follows (Social Media) | Brand & Digital Comms Spec | Lead | TBD | Weekly | Negative 2 weeks: Brand team reviews content calendar. |
| S4-6 | # Posts / Planned Posts | Creative Production Coordinator | Lead | TBD | Weekly | Miss: Creative Prod Coord escalates to Marcom TL same day. |
| S4-7 | % On time & Accurate: CIP | Brand & Comms Integrator | Governance | 100% | Weekly | Any miss: Brand & Comms Integrator reports to Marcom TL same day. |

### Section 5 — DCFM Delivery & Projects | 7 KPIs

**Question:** Are engineering and construction projects finishing on time and within budget?

| # | KPI | Owner | Type | Target | Cadence | What Happens If Missed |
|---|---|---|---|---|---|---|
| S5-1 | % On-time Completion — Projects (DCFM) | DCFM TL | Lead | ≥90% | Weekly | Delay >3 days no plan: DCFM TL escalates to SMA for L2 review. |
| S5-2 | % Within Budget — Projects | DCFM TL | Lag | TBD | Monthly | Overrun >10%: Finance TL and DCFM TL review together in 48h. |
| S5-3 | Repairs & Maintenance Expense | DCFM TL | Lag | TBD | Monthly | Overrun >10%: DCFM TL reviews with Finance TL in 48h. |
| S5-4 | FS Target: R&M (Labor) Expense | DCFM TL | Lag | TBD | Monthly | Overrun: DCFM TL reviews staffing plan in 48h. |
| S5-5 | FS Target: R&M (Materials) Expense | DCFM TL | Lag | TBD | Monthly | Overrun: DCFM TL reviews materials usage in 48h. |
| S5-6 | % Planned vs Actual – Projects (DCFM) | DCFM TL | Lead | TBD | Weekly | <80%: DCFM TL reviews blockers and escalates to SMA. |
| S5-7 | Score / Evaluation / NPS — Projects | DCFM TL | Lag | TBD | Monthly | Below target: DCFM TL reviews with requester in 7 days. |

### Section 6 — Systems, Governance & Founder-Free Enforcement | 10 KPIs

**Question:** Is the system running itself, or is a person still running it?
**Rule:** Green = the system does it. Red = someone is doing it by hand. Red in this section means the business is still founder-dependent.

| # | KPI | Owner | Type | Target | Cadence | What Happens If Missed |
|---|---|---|---|---|---|---|
| S6-1 | LotusOS Adoption % ↔ SHARED | SMA | Governance | ≥85% | Weekly | <80%: SMA sends individual follow-up. Repeat = Consequence Ladder. |
| S6-2 | L10 Quality Score (1–10) ↔ SHARED | SMA | Governance | ≥8/10 | Weekly | <6 for any team: SMA joins next L10 to coach. TL gets 2-week plan. |
| S6-3 | L10 Weekly Compliance Rate (All Teams) | LeaderZen Custodian | Governance | ≥90% | Weekly | Any team missing without notice: LeaderZen Custodian flags to LRAD TL same day. |
| S6-4 | % Complete & Updated: LotusOS (All LDApps) | SMA | Governance | 100% | Weekly | Any gap: SMA follows up per TL same day. |
| S6-5 | % On time & Accurate: LDApp Module Audit | SMA | Governance | 100% | Weekly | Any miss: SMA follows up same day. |
| S6-6 | % Addressed: ICARE (All Teams) ↔ SHARED | SMA | Governance | ≥90% | Weekly | <90%: SMA escalates stale items to owner. 24h to resolve. |
| S6-7 | % On time & Accurate: PropMan Module | SMA | Governance | 100% | Weekly | Any miss: SMA reports to Ops TL same day. |
| S6-8 | % Complete & Updated: L10 Module | LeaderZen Custodian | Governance | 100% | Weekly | Any gap: LeaderZen Custodian follows up same day. |
| S6-9 | % Complete & Updated: Leadership Pipeline Module | LeaderZen Custodian | Governance | 100% | Weekly | Any gap: LeaderZen Custodian follows up same day. |
| S6-10 | Updated & Accurate LMDB Stories & Scores | LMDB Custodian | Governance | 100% | Weekly | Any gap: LMDB Custodian updates in 24h. |

---

## 8. Tab 05 — VTO — Teams (~199 KPIs, 11 Teams)

**Question:** Are our teams hitting the KPIs that drive the company numbers?
**Owner:** Each TL fills in their own team's numbers weekly
**Review:** GM/MD reviews every Monday. TL explains any red number same day.
**Note:** These are predominantly lead KPIs — the activities and behaviors that drive the lag numbers shown in Tab 04 Section 0. A compact reference bar at the top of this tab links to Tab 04 for company context.

> *(Previous VTO Critical Numbers absorbed into Tab 04 Section 0 as of v1.3. The 10-KPI × 4-site matrix lives there. Data keys `vto.{site}_{col}` are preserved.)*

> *(v1.4 — June 2026: 25 KPI audit fixes applied — 2 renames, 23 additions across 8 teams. Source: full cross-check vs VTO MAP CN KPIs CSV.)*

### A) Finance | 7 KPIs | Owner: Finance TL
Gross Revenue, Net Profit, Collection Rate, EBITDA Margin, Electricity Income, RDS Expense

### B) Opportunity (Leasing) | 17 KPIs | Owner: Opportunity TL
Commercial Occupancy (Unit/Area/₱ Value), # Prospects, # Closed Prospects, # Closed Reservations (Walk-in & Online), # Closed Inquiry (Offline), # Online Inquiries Scheduled for Ocular, Tenant Mix Plan, % Tenant Mix Planned vs Actual, Tenant Requirements % Complete, Aversion Rate in Pull-out, Business Beginners ≥25%, Koncepto Pop-Up Event/Temporary Reservations, Client-Initiated Events Reservations, % On time & Accurate — Community Compass (Opportunity)

### C) Events & Gathering | 22 KPIs | Owner: E&G TL
Avg Daily Foot Traffic, Event Pipeline (weeks), Venue Utilization %, # of 500+ pax events/month, # Mall Events Generated, Events & Gathering Expense, # Foot Traffic Generated, # Merchants Inquiry, # Walk-in Inquiries (Handaan Events), Venue Occupancy (Hours Reserved), Venue PValue %, Handaan Events PValue %, Koncepto Unit %, Koncepto PValue %, Other Revenue, % On time Community Compass (E&G), # Handaan Events Generated, # Closed Inquiry/Offline Received: Gathering, # Closed Prospects: (Events) Handaan, # Closed Prospects: (Events) Client-Initiated, Community Participation % (event attendance vs capacity), Belonging Index (NPS + repeat visits + membership/loyalty)

### D) Operations | 26 KPIs | Owner: Ops TL
STTACCK NPS / Community NPS, % Resolved ICARE (OPR), Site Score %, Electricity Expense, % Onboarded Tenants, Parking Income, Security Expenses, Manpower Expenses, Utility Maintenance Expenses, Water Expense, Operating Expenses (Total), # ICARE Addressed *(renamed from # Conquest Addressed)*, # Insurance Claimed, % Insurance Claimed vs Reported, % Site Quality Score (Ops Integrator), % Tenant RDS On time, % Parking Layout Planned vs Actual, Tools & Equipment Masterlist/Count (OPR), Stock Issuance %, Inventory Masterlist/Count (OPR), Agency Regular Events/Activities %, PM Checklist Completion %

### E) DCFM – Technical | 31 KPIs | Owner: DCFM TL
# Breakdowns Engineering, MTTR, % On-time Completion Projects, % Within Budget Projects, R&M Expense, R&M Labor/Materials FS Targets, # Violations (count + cost), # Projects Completed (Special, Team & ICARE), % Planned vs Actual (Technical/Engineering/Special), % On-time Completion (Engineering), % Within Budget (Technical/Engineering/Special), Project Budget vs Planned, PM Score %, NPS/Score/Evaluation (Technical/Engineering/Special), SFML PT accuracy, Team ICARE addressed, # System Changes/quarter, Work Orders complete, Team Targets attained, Team PTs & DBs accuracy, Team Reports accuracy, % Planned vs Actual: JO (UM)

### F) Marketing Communications | 23 KPIs | Owner: Marcom TL
# Online Leads (Commercial), Engagement Rate, % Planned vs Actual — IAD/IAEC: BU and Sites *(renamed from % On-time Marcom)*, Net Follows, Marketing & Branding Expense, # Posts/Planned Posts, % CIP On time, # Walk-in Inquiries (Commercial/Events), # Online Leads (Events), # Scheduled Ocular (Commercial/Events), % Increase: Facebook Page Reach (per Month per Page), % Increase: Facebook Page Followers (per Month per Page), # Inquiries: Offline for (Commercial Spaces), # Inquiries: Offline for Gatherings (Event Venues), # Inquiries: Offline for Gatherings (Sports Arena), # Inquiries: Offline for Gatherings (Handaan), # Inquiries: Offline for Gatherings (HCafe), # Inquiries: Offline for Gatherings (SS), # Inquiries: Offline for Gatherings (KS), # Inquiries: Offline for Gatherings (PS), # Inquiries: Offline for Gatherings (Studio)

### G) IT | 11 KPIs | Owner: IT TL
# Breakdowns IT, Office LAN & WiFi, Accounting Software Connectivity, R&M Expense, Laptop/Desktop Procurement, Assets accuracy, Office Equipment PM, Office Equipment Inventory, Websites Update, % Complete & Updated: KDB, % Complete & Updated: OAML

### H) DCFM – Construction | 10 KPIs | Owner: DCFM TL
# Projects Completed vs Planned, Time-to-Launch, Project Budget vs BOQ, Landscape & Plant Propagation, Approved BOQ Budget, # Landscape ICARE Projects, # ISP Projects, # Site Projects, DCD Score %, % Planned vs Actual: JO (All Works)

**Note:** DCFM (Design, Construction, Facilities Management) consolidates the former Technical/Engineering team and the former DCD team. Both now report to DCFM TL. Team IDs in the system remain `tech` and `dcd` to preserve existing KPI data.

### I) LRAD / LeaderZen | 20 KPIs | Owner: LRAD TL
Attrition Rate, L10 Compliance Rate, Autonomy Score Growth, % Teammembers Green on Role Readiness, Lotuszens NPS, Salary Expense, Complete Lotuszen Activities, LMDB Stories updated, LMDB & Lotuszen Hub updated, % L10 Module Complete, L10 Attendance Rate, % Leadership Pipeline Module, Playbook Contributions per Team, # Playbook Entries/Month, Self Check-In Rate, Team Meeting Rating, Avg L10 Quality Score, Avg Self Autonomy Score, Readiness/Promotion shortlist, % Playbook Completed

### J) Quality / SID / SMD | 19 KPIs | Owner: SMD + SID Integrator
% On-time RP, % SID Projects Planned vs Actual, # System Changes/quarter, # Projects Completed (SMD & SID), Project Rating %, LotusOS Complete (RP/PM/LMDB), LotusOS Activities Complete, KDB On-time & Accurate, SMD Project Completion %, SMD Projects Planned vs Actual, Team ICARE addressed, Work Orders complete, SID Projects On-time, PT DB On-time & Accurate, PT DB Complete & Updated, Team PTs & DBs accurate, Team Reports accurate, Score/Evaluation/NPS: SID Projects, Score/Evaluation/NPS: SMD Projects

### K) SMA — Governance | 11 KPIs | Owner: SMA
LotusOS Adoption % ↔ SHARED, L10 Quality Score ↔ SHARED, % Addressed ICARE ↔ SHARED, ICARE Resolved <72h %, % LDApp Module Audit On-time, % PropMan Module On-time, % LotusOS Complete & Updated, % Complete & Updated: LDPM Module, % Complete & Updated: LDApps Module, % On time & Accurate: LDPM Module, % Complete & Updated: ICARE Module

---

## 9. Tab 06 — Strategic Anchors (4 Operating Systems, 16 KPIs)

**Question:** Are our 4 operating systems running on their own, or is a person still running them?

| OS | KPIs | What It Proves |
|---|---|---|
| LotusOS | Overall Adoption %, Module Submission %, Side Trackers: 0, SLA Breach Rate: 0% | The master operating system is adopted and running |
| CultureOS | Culture Ritual Compliance ≥90%, APOGEIC Fit Score ≥3.5/5, Engagement Trend Improving | Culture builds itself; Founder not required |
| LeaderZen | L10 Quality Score ≥8/10 ↔ SHARED, Autonomy Score Growth, % Green on Role Readiness ≥80%, Promotion Shortlist Updated | Leaders run their own teams without SMA managing every meeting |
| ExperienceOS | NPS Overall ≥60, NPS FEC ≥70, NPS Handaan ≥65, ICARE <72h % ≥90% ↔ SHARED, Recurring ICARE Issues: 0 | Guests and tenants get a consistent excellent experience without founder oversight |

---

## 10. Tab 07 — VTO Map

**Question:** What does the GM Strategy one-pager actually say, word for word — and how does it trace down to team KPIs?
**How it works:** A Mission Ladder (Universal Mission → Team KPIs, 7 steps), followed by 6 collapsible Source Strategy cards holding the verbatim GM Strategy text, followed by the Adv.I.S.E. Traceability Lanes (click a chip to jump to its source tab).

### Source Strategy Cards — Verbatim GM Strategy Text (6 cards)

Each card shows title + verbatim source text only — no paraphrased summary or playbook detail layer. Verified word-for-word against the GM Strategy one-pager screenshot (dated Jun 16, 2026) on 2026-06-19.

| Card | Verbatim Source Text |
|---|---|
| Core Focus™ — Purpose & Niche | Purpose: Empower people to Gather & Grow so communities become places of Fulfillment & Joy. Niche / What We Do: Developing properties that Gather and Grow communities. |
| 10-Year Target: Dec 31, 2035 | 100+ sites · ≥30% Business Beginners · ≥70% Internal Managers · NPS ≥60 / FEC ≥70 / Handaan ≥65 · Utilization ≥70% weekly · Founder ≥80% Architect/Creative |
| Marketing Strategy: Target Market | Community KOLs · Local Business Beginners and Entrepreneurs · Tenant Prospects for Commercial Spaces · Local Talents/Creatives and Coaches/Instructors · Educational Institutions · Government and Local Agencies · Corporate Institutions · Community-Based Organizations |
| Marketing Strategy: Three Uniques | 1. Community Development Focused: Empowerment-first purpose. 2. Co-elevating Culture: Prioritize our Team and Local Community-first platform (on-ramps for beginners). 3. Empowering Systems-led Scale (3F's + LotusOS + LeaderZen). |
| Proven Process: DEVELOP to LotusOS | Discover & Engage (Community Compass) → Enable Opportunities (3F: Fast, Friendly, Flexible) → Visualize & Build (Turnover + Inspection + Opening) → Empower & Elevate (RDS + ICARE + Events) → Learn & Innovate (feedback → playbooks) → Organize & Plan (LotusOS + scorecards) → Perform (L10 rhythms + Rocks + KPIs) |
| Guarantee | F3 (Fast, Friendly, Flexible) Tenant Onboarding Promise: Qualified micro-tenants get a step-by-step path from application to opening in ≤21 business days. If Lotus misses an internal step, we deliver an Activation Support Pack (opening push + 2 event spotlights). Legal/Ops review before public use. |

---

## 11. Tab 08 — Lotus Strategy Canvas

**Question:** Where are we going — this quarter, this year, and in 3 years?
**How it works:** One tab covers all 3 planning horizons. 11 collapsible sections, in this order:

| Section | Content | Cadence |
|---|---|---|
| Universal Mission → VTO → 5yr | Static recap of Mission and Vision/BHAG, plus the 5-Year Picture text — reference only. The 4 5-Year KPI cards under this heading ARE editable (title/description/tags per card). | Reference + editable KPI cards |
| 3-Year Priority — Adv.I.S.E. | One strategic priority per Adv.I.S.E. pillar (Advocates, Innovators, Sages, Essentialists) — tag, identity statement, and target metrics per pillar — plus 4 Revenue/EBITDA/Occupancy/NPS 3-year target cards. Fully editable. Split out as its own section 2026-06-29 (v1.11); previously folded into the row above as a static, unmeasured recap. | Every 3 years |
| 3-Year Roadmap | 12-quarter milestone table + long-horizon LCC projects, grouped by Pillar (Advocates/Innovator/Sages/Essentialists) plus an "Other" group for unmatched project types | Every 3 years |
| 1-Year Priority | Annual targets (Revenue, EBITDA, Occupancy, NPS) + top annual priorities | Every year |
| 1-Year Roadmap | Same format as 3-Year Roadmap, scoped to this year's 4 quarters | Every year |
| North Star Metrics | 5–7 KPIs with targets; SHARED badges link to source tabs | Every quarter |
| Strategic Themes | Broader annual directional bets (not individual rocks) | Every quarter |
| Revenue Goals | Good/Better/Best revenue targets | Every quarter |
| Rallying Cry | Quarter theme | Every quarter |
| Rocks & Projects Health — Live from LCC | Live project health grid (Pillar × On Track / At Risk / Critical / No Status), open by default | Real-time |
| Quarterly Rocks — Live from LCC | Live LCC projects filtered by Horizon / Owner / Pillar dropdowns, open by default | Real-time |

**Completed-item visibility (Quarterly Rocks and Long-Horizon Projects):** a project counts as completed if its status is `done-obs`, `done-signed`, `archived`, or `dropped`. Two controls sit in the Quarterly Rocks filter bar: **"Show Completed (N)"** adds completed items alongside active ones; **"Show Completed Only"** shows just the completed ones, excluding active items. Both buttons are always visible — greyed out and disabled when N=0 — so the feature stays discoverable even before any project reaches a completed state.

**Rock Health "No Status" fix (2026-06-22):** a rock with no `health` value used to be silently counted as "on track." It now shows as its own "No Status" bucket, both in the compact Rock Health summary and the per-pillar grid — a missing status is never treated as a green one. See Section 19 for the exact logic.

**Filter dropdowns (Quarterly Rocks section):** Time Horizon / Owner / Pillar. Default = current quarter rocks.
**Pillar labels (3-Year Goal → Rock Type):** Advocates / Loved Brand — Strategic Fix · Innovator / Living Centers — Growth & Expansion · Sages / Co-Elevating Team — Governance & Control · Essentialists / Empowering System — Efficiency & Automation
**Edit:** Tap ✏ Edit in the scoreboard header → update text → tap Done. Changes save to this browser.
**Note:** OGSM retired Q2 2026, formally renamed **Strategic Rocks** (EOS/Scaling Up Rocks framework). Each Pillar carries both a 3-Year Goal (identity altitude, Adv.I.S.E.) and a Rock Type (execution altitude) — one framework, two altitudes, not two separate label sets.

---

## 12. Gap Register — MISSING FEED Items

KPIs marked MISSING FEED need an external system to supply data before they can go live.

| Gap | System Needed | Who Owns the Feed |
|---|---|---|
| Finance KPIs (EBITDA, Net Profit, Revenue Flash, Cash, A/R, Margin) | Finance dashboard / accounting software | Finance TL |
| ICARE Resolution % | ICARE module in LDApps | SMA |
| LotusOS Compliance % (true, not proxy) | LDApps + LDPM module | SMA |
| L10 Compliance, Autonomy Score, Role Readiness | LeaderZen module | LeaderZen Custodian |
| NPS (Overall, FEC, Handaan) | ExperienceOS / feedback system | Ops TL |
| Tenant health / Leasing pipeline | Leasing dashboard / tenant DB | Opportunity TL |
| Site foot traffic | Site dashboards | E&G TL |
| F&B Profit, Innovation Pipeline | BU tracker | BU Heads |
| Biz Dev sites, DEVELOP stages | Biz Dev pipeline tracker | MD/Owner |

Until feeds are live, these KPIs are entered manually by the KPI Owner and recorded as MISSING FEED in the scoreboard.

---

## 13. Roles & Consequences Reference

**Team Member:** You see your team's numbers every week. If a number is red, you tell your TL right away — same day. You do not wait to be asked. You bring one number and one reason. Your TL handles the escalation.

**Team Leader:** You own your section in Tab 05 (VTO — Teams). You fill in every number by Monday 9am. If a number is red, you present a fix plan — not just a reason — at the same L10 or same day depending on the consequence rule. You do not let red numbers go unaddressed for more than 24 hours.

**GM/MD:** You own Tab 04 (VTO — Company). You publish it every Monday by 9am. If a number is red with no plan, you escalate to the KPI Owner same day. You review Tab 03 every Monday to check the 6 GM/MD-Off Switches. You present the scoreboard at L10 and use it to hold TLs accountable — not to punish, but to clear blockers and enforce the system.

**MD/Owner (Dennis):** You check Tab 03 (GM/MD-Off Dashboard) first. If all 6 switches are green for 8 consecutive weeks, the system is running without you. If any switch is red, you stay involved only in that specific area. You do not manage Tab 04 or Tab 05 directly — that is the GM's job. If the GM needs you in Tab 04, the system is not ready yet.

---

## 14. Tab Structure Audit

All 8 tabs are correctly placed for their purpose. (Tab 4 — VTO Critical Numbers absorbed into Tab 03 Section 0 as of v1.3, now Tab 04 Section 0 after the v1.11 renumber. Tab 06 — VTO Map added as of v1.5, now Tab 07. Tab 01 — Start Here added as of v1.11, 2026-07-15.)

| Tab | Question It Answers | Correct? | Key Reason |
|---|---|---|---|
| 01 — Start Here | Where do I go, and what's the state of things right now? | ✅ | Role-based shortcuts + live status grid; default landing tab, added 2026-07-15 |
| 02 — About | How do I use this scoreboard? | ✅ | First-use reference; always accessible |
| 03 — GM/MD-Off Dashboard | Can the GM/MD step back? | ✅ | 6 FOS tests + 55-KPI readiness; MD-level only |
| 04 — VTO — Company | Are our Critical Numbers on track — by site and by function? | ✅ | GM/SMA weekly action dashboard; Section 0 = 11-KPI × 4-site matrix; Sections 1–6 = 66 lead/governance KPIs |
| 05 — VTO — Teams | Are our teams hitting the KPIs that drive company numbers? | ✅ | 11 teams, ~199 KPIs; TL-owned accountability view; lead KPIs that drive Tab 04 lags |
| 06 — Strategic Anchors | Are our OSes running on their own? | ✅ | 4 operating systems; proves system-vs-person health |
| 07 — VTO Map | What does the GM Strategy one-pager say, word for word, and how does it trace to team KPIs? | ✅ | Mission Ladder + 6 verbatim Source Strategy cards + Adv.I.S.E. Traceability Lanes |
| 08 — Lotus Strategy Canvas | Where are we going — this quarter, this year, 3 years? | ✅ | 3 planning horizons in one tab; live LCC rocks + 1-Year Picture + 3-Year Roadmap + Adv.I.S.E. |

---

## 15. Lotus Audit Score

**Score: 98 / 100**

| Criterion | Score | Notes |
|---|---|---|
| Grade 5 clarity — read once, act immediately | 10/10 | Every sentence tested at Grade 5 level |
| Clear purpose — one question per tab | 10/10 | Each tab has one question it answers |
| Concrete next action — what to do if red | 10/10 | Every KPI has a 15-word max consequence |
| Clear owner — one person per KPI | 10/10 | No KPI is unowned |
| Clear success proof — what green looks like | 9/10 | Targets marked TBD need owner confirmation at next L10 |
| Risk and escalation trigger — what is the threshold | 10/10 | Every consequence has a clear trigger condition |
| No fluff — no corporate language | 10/10 | All jargon removed; terms defined in context |
| System-led execution — process not person | 10/10 | Consequences are role-based, never name-shaming |
| Scalable — MD can roll out across sites | 9/10 | Site dropdown is label-only; site-level detail needs Tab 4 expansion |
| Philippine/Caviteño context — practical for local execution | 10/10 | Consequences respect pakikisama; escalation goes TM → TL → GM; fear of mistakes handled by system |

**Gap notes (2 points):**
1. TBD targets need confirmation per TL at next L10 — this is expected at v1 launch
2. Site dropdown is view-label only — full per-site data entry requires Tab 4 expansion in a future version

This document is ready to use as the canonical spec for all future HTML builds and SMA onboarding — Sections 1–15 for content and voice, Sections 16–20 for technical rebuild.

---

## 16. Technical Build Specification — Overview

This section starts a technical appendix (Sections 16–20) written for whoever has to rebuild `index.html`, human or AI agent, without opening the current file. Sections 1–15 above are the grade-5 team-facing content spec; this appendix is implementer-level.

**What the app is:** a single static HTML file (`index.html`, ~3,070 lines as of this update) — no build step, no bundler, no framework. One `<style>` block, then markup for all 8 tab panels, then one `<script>` block with all data and rendering logic. Two external dependencies loaded via `<script src>`/`<link>` tags: Google Fonts (Plus Jakarta Sans + DM Sans) and the Supabase JS client (`@supabase/supabase-js@2`, via jsDelivr CDN).

**Deployment:** pushed to the `main` branch of the project's git repo → GitHub Pages serves it at `cavdeal.github.io/lotus-scoreboard` within 1–2 minutes. No CI, no server, no environment variables — the Supabase URL and anon key are hardcoded in the script (see Section 18; this is standard practice for a Supabase anon key gated by Row Level Security, not a leaked secret).

**Static vs. live data — the one distinction that matters most for a rebuild:**
- **Static, edited in this browser only:** everything in Tabs 02–06 (About, GM/MD-Off Dashboard, VTO — Company, VTO — Teams, Strategic Anchors) plus most of Tab 08 (Lotus Strategy Canvas) except its Rocks/Projects grid. All of it lives in JS object/array literals baked into the file and is only ever mutated in the visitor's own `localStorage` — there is no shared backend for KPI status, targets, or consequences. Every visitor who has ever clicked ✏ Edit sees their own locally-saved version layered on top of the file's baked-in defaults.
- **Live from Supabase:** only the Rocks & Projects Health grid and the Quarterly Rocks table in Tab 08, plus the Start Here (Tab 01) status tiles that summarize them. These fetch from a `projects` table in Supabase on every page load (`loadRockHealth()`) and are the same for every visitor.
- **The Google Sheet + `.gs` scripts are a separate, offline audit trail** — used by SMA to reconcile the master KPI list against what's actually coded in `index.html` (see `run-all-tab-updates.gs`, `create-v15-tab.gs`, `create-html-diff-tab.gs`). They do not sync at runtime. Nothing in the live page reads from or writes to the Sheet.

**Rebuild scope:** a faithful rebuild needs to reproduce every KPI row, target, and consequence text exactly as documented in Sections 1–15 above — the appendix below doesn't repeat that content, only the *shape* of the data structures that hold it and the interaction/visual patterns that render it.

---

## 17. Data Schema

All quarterly/planning data lives in five top-level `const` objects, defined together in a fenced "QUARTERLY EDIT ZONE" comment block near the top of the script. All five round-trip through `localStorage` under one key.

```js
// Q — this quarter's rallying cry, revenue goals, North Star metrics, strategic themes
const Q = {
  rallying_cry: 'string',
  quarter_label: 'string, e.g. "Q2 2026 (Apr – Jun 2026)"',
  revenue: { good: 'string', better: 'string', best: 'string' },
  north_star: [ { kpi: 'string', target: 'string', owner: 'string', cadence: 'string' }, /* 5–7 rows */ ],
  initiatives: [ { name: 'string', owner: 'string', due: 'string', health: 'on-track|at-risk|critical' }, /* Strategic Themes rows */ ],
};

// Q12 — the 3-year / 12-quarter roadmap
const Q12 = {
  plan_start: 'string, e.g. "Q1 2026"',
  plan_end:   'string, e.g. "Q4 2028"',
  now_quarter: 2,                       // integer 1–12, which milestone row is "NOW"
  targets_3yr: { revenue: 'string', ebitda_pct: 'string', occupancy: 'string', nps: 'string' },
  milestones: [ { q: 1, label: 'Q1 2026', revenue: 'string', occupancy: 'string', key_event: 'string' }, /* 12 rows, q:1..12 */ ],
};

// Y1 — this year's targets and top annual priorities
const Y1 = {
  year_label: 'string, e.g. "2026"',
  targets: { revenue: 'string', ebitda_pct: 'string', occupancy: 'string', nps: 'string' },
  priorities: [ { p: 'string', owner: 'string', due: 'string (quarter label)', status: 'on-track|at-risk|critical' } ],
};

// Y5 — the 5-Year KPI cards under "Universal Mission → VTO → 5yr"
const Y5 = {
  kpis: [ { title: 'string', desc: 'string', tags: 'string, e.g. "Scalable · Expansion"' }, /* 4 cards */ ],
};

// Y3 — one strategic priority per Adv.I.S.E. pillar
const Y3 = {
  priorities: [
    { pillar: 'Advocates|Innovators|Sages|Essentialists', tag: 'string (short rallying phrase)',
      identity: 'string (1–2 sentence identity statement)', metrics: 'string (success-proof metrics)' },
    /* 4 rows, one per pillar */
  ],
};
```
**Note for rebuilders:** `Y3.priorities[].pillar` uses the plural "Innovators" while the rock-health pillar matcher elsewhere (`KNOWN_PILLARS`, `getPillar()`, `PILLAR_FULL`) uses singular "Innovator." This is cosmetic-only today — `Y3.priorities` is rendered directly by `p.pillar` text, never passed through `getPillar()` — but don't silently "fix" the mismatch when rebuilding; it hasn't caused a bug because the two never interact.

Everything else — the ~55 GM/MD-Off / Architect Console KPIs, the ~66 VTO — Company KPIs, the ~199 VTO — Teams KPIs, the 16 Strategic Anchors KPIs — lives in four read-mostly arrays (edits go to a separate generic store, `D`, described below, not back into these arrays):

```js
const FOS_DATA = [ { id:'FOS-1', lbl:'string', tgt:'string', st:'LIVE|PARTIAL|MISSING',
  src:'string (source doc)', frm:'string (framework)', ld:'string (LDApp tag, "?"-prefixed if unconfirmed)',
  desc:'string (one-question description)', cons:'string (consequence)' }, /* 6 rows, Tab 03 GM/MD-Off Switch */ ];

const RC = [ { n:'string (tile name, e.g. "Operational OS")', nd:'string (subtitle)',
  kpis:[ { k:'string', tgt:'string', s:'lv|pt|ms', frm:'string', ld:'string', found:'string (Found In text)' } ] },
  /* 5 tiles (Operational OS, ENGINE, PULSE, SOUL, Growth Pipeline) + 1 "Project Execution" tile, Tab 03 Architect Console */ ];

const SMA = [ { id:'s0'..'s6', title:'string', note:'string',
  rows:[ { k:'string (KPI name)', ow:'string (owner)', src:'string', frm:'string', ld:'string',
           ty:'Lead|Lag|Lag/Lead|Governance', tgt:'string', sh:'optional shared-KPI key', cons:'string' } ] },
  /* 7 sections, Tab 04 VTO — Company; s0 (Critical Numbers) has rows:[], rendered separately from VCOLS/VSITES */ ];

const VSITES = [ 'Lotus Mall', 'Stadium Strip', 'Portal Mall', 'Consolidated' ];
const VCOLS  = [ { k:'string (2-letter col key, e.g. "oa")', lb:'string (KPI label)', ow:'string',
  cd:'Weekly|Monthly', src:'string', frm:'string', ld:'string' }, /* 11 rows, the VTO Critical Numbers matrix columns */ ];

const TEAMS = [ { id:'string (team id, e.g. "fin","opp","tech","dcd")', lb:'string (display label)', ow:'string (TL title)',
  kpis:[ { k:'string', ow:'string', ty:'Lead|Lag|Governance', src:'string', frm:'string', ld:'string', cons:'string' } ] },
  /* 11 teams, Tab 05 VTO — Teams */ ];

const ANCS = [ { id:'string (os id, e.g. "los","cos","lzn","exp")', nm:'string (OS name)', sb:'string (subtitle)',
  desc:'string (one-question description)',
  kpis:[ { lb:'string', tgt:'string', src:'string', frm:'string', ld:'string', sh:'optional shared-KPI key' } ] },
  /* 4 operating systems, Tab 06 Strategic Anchors */ ];
```

**The generic edit store, `D`** — holds every status dot, week-by-week value, and free-text "next action" field across Tabs 03–06 that isn't part of Q/Q12/Y1/Y3/Y5. Keyed by dotted "path" strings built from each row's own id, e.g. `sma.s3_icare_resolved__72_hours` or `teams.fin.gross_revenue___`:

```js
const D = {
  meta: { weekOf:'', by:'SMA', at:'' },
  kpi:  { icare_72h:{t,a,s}, l10_quality:{t,a,s}, lotusos_adoption:{t,a,s} },  // t=target, a=action, s=status code
  fos:{}, vto:{}, sma:{}, teams:{}, anc:{}   // populated dynamically via sv2(path,field,value) as fields are edited
};
```
Status codes throughout `D` (and `FOS_DATA.st`/`RC.kpis[].s` after mapping) are one of: `ds` (Not Measured), `dg` (On Track), `dl` (Short Fix), `dy` (Has Plan), `do` (No Plan), `dr` (Cannot Recover).

---

## 18. CSS Design System

Single `:root` custom-property block; no CSS framework, no preprocessor.

```css
:root {
  --bg: #FAF8F4;  --surface: #FFFFFF;  --surface2: #F5F3EF;  --surface3: #EDE8E0;
  --border: #E8E2D9;  --border-b: rgba(196,163,90,0.30);
  --lotus: #C4A35A;  --lotus-dim: rgba(196,163,90,0.12);  --lotus-mid: rgba(196,163,90,0.35);
  --lotus-hi: #B8973E;  --lotus-tx: #7e652d;
  --text: #1C1C1E;  --text-dim: #716659;  --text-mid: #5C5248;  --text-hi: #0D0B09;
  --fd: 'Plus Jakarta Sans','Trebuchet MS',sans-serif;   /* display/heading font */
  --fm: 'DM Sans','Helvetica Neue',sans-serif;           /* body/mono-ish data font */
  /* status pill tokens, one bg/text/border triad per state */
  --pg-bg:#E8F5EE;--pg-tx:#246B43;--pg-bd:#B2D9C3;   /* green / on-track */
  --pl-bg:#F0F8E8;--pl-tx:#4F7A16;--pl-bd:#C2DFA0;   /* light green */
  --py-bg:#FDF6E3;--py-tx:#8A5E00;--py-bd:#EDD48A;   /* yellow / has-plan */
  --po-bg:#FDF2EA;--po-tx:#8A4200;--po-bd:#ECC49A;   /* orange / no-plan */
  --pr-bg:#FDEEED;--pr-tx:#B52B20;--pr-bd:#EDAFAB;   /* red / cannot-recover */
  --ps-bg:#F0EDE8;--ps-tx:#7A7068;--ps-bd:#D8D3CC;   /* grey / not-measured */
  --hh: 52px;  /* header height */   --th: 42px;  /* tab bar height */   --bh: 50px;  /* bottom persist-bar height */
}
```
Body font-size floor is 10.5px (WCAG-AA contrast fix, carried since v1.6-adjacent). At `max-width:640px`, `--hh`/`--th`/`--bh` shrink to 48/36/44px.

**Layout:** fixed 3-band shell — `#hdr` (top, `--hh` tall), `#tabs` (below header, `--th` tall, horizontally scrollable button row), `#cnt` (fills the rest, `overflow-y:auto`, holds all `.pan` tab panels), plus a fixed `#bar` persist bar pinned to the bottom (`--bh` tall, Save/Load/Export/Sign Out + Week Of + Updated By fields). Only one `.pan` has class `on` (`display:block`) at a time; the rest are `display:none`.

**Collapsible-section pattern** (used throughout Tabs 02, 03, 06, 08): native `<details>`/`<summary>`, not JS-driven show/hide.
```html
<details class="sp-details">
  <summary class="sp-sum sh"><div class="shd"></div><h3>Section Title</h3><div class="shl"></div></summary>
  <!-- section body -->
</details>
```
`.shd` is a 7px rotated-45° diamond (the "flat diamond-bar" marker), `.shl` is a gradient hairline filling the rest of the header width, `.sp-sum::before` renders a `▶` that rotates 90° when the parent `<details>` is `[open]`. This is the pattern v1.8/v1.9 moved Tab 03's sections onto, replacing boxy cards.

**Option B redesign (2026-07-15, commit `c08f6d1`) — concretely, what changed:**
- Added Tab 01 — Start Here markup and its CSS (`.home-roles`, `.home-role-btn`, `.home-grid`, `.home-tile` and children) — role-shortcut buttons and the 3-tile status grid, `grid-template-columns:repeat(3,1fr)` collapsing to 1 column under `max-width:640px`.
- Added a global `*:focus-visible{outline:2px solid var(--lotus-hi);outline-offset:2px;}` plus matching focus rings on every interactive control class (`.vi`, `.ai`, `.binp`, `.sp-fb`, `.sp-sel`, `.hdr-edit-btn`, `.tb`, `.rh-refresh`, `.ssel`) — keyboard-navigation accessibility pass.
- Added `box-shadow:0 2px 14px rgba(28,28,30,0.05)` to `.tmeta` (the tab intro card) for depth.
- No KPI data, targets, owners, or consequence text changed in this commit — purely a new tab plus visual/accessibility polish on the existing 7.

---

## 19. JS Architecture & Interaction Patterns

**Tab switching:** `PANS` maps short ids to panel element ids — `{home:'phome', b:'pb', f:'pf', s:'ps', t:'pt', a:'pa', vm:'pvm', sp:'psp'}`. `go(id, btn)` clears `.on` from all `.pan`/`.tb`, then adds it to the target panel and the clicked tab button. `gotoTab(id)` is a convenience wrapper used by in-content "jump to Tab X" links/buttons — it looks up the matching `.tb` button by its `onclick` attribute and calls `go()` with it, so a link doesn't need a direct DOM reference to the button. Keyboard: `1`–`8` (when focus isn't in an input/select/textarea) jump directly to the tab at that position, via a `{1:'home',2:'b',3:'f',4:'s',5:'t',6:'a',7:'vm',8:'sp'}` map matched against `document.querySelectorAll('.tb')` by index.

**Edit mode (header ✏ Edit / Done toggle):** global `editMode` boolean. The `ed(id, val)` helper renders either a plain `<span>` (read-only) or a `contenteditable` `<span id="...">` (edit mode) depending on `editMode` — every editable field in Tabs 02, 08 (and the Q/Q12/Y1/Y3/Y5-backed parts of other tabs) is rendered through this helper. `toggleEditMode()` flips `editMode`, and on the way out (Done) calls `saveEdits()`, which reads every `contenteditable` span and `<select>` by id back into the Q/Q12/Y1/Y3/Y5 objects, then writes `localStorage.setItem('lotus_gmd_v4_config', JSON.stringify({q:Q, q12:Q12, y1:Y1, y3:Y3, y5:Y5}))`. `loadConfig()` (called once on `window.onload`) does the reverse — reads that key, and only overwrites a field if the saved value is present (so a fresh browser with no saved state renders the file's baked-in defaults untouched). A one-line migration guard added 2026-06-29 (commit `3448829`) normalizes any `Y1.priorities[].due` value that doesn't start with `"Q"` to `"Q4 " + year_label`, so pre-migration saved state with an old date format doesn't render garbage.

**The `D`-backed fields (Tabs 03–06 status dots, week values, next actions)** use a separate, simpler always-on edit model — no read-only/edit-mode toggle, every `<select>`/`<input>` is always live. `sv2(path, field, value)` writes into `D` at a dotted path (auto-vivifying intermediate objects), `gd(path)` reads it back, `id2(path, defaults)` reads-or-initializes with a defaults object. None of this persists automatically — it's held in memory in `D` until the visitor clicks the bottom-bar **💾 Save** button (`sv()`), which stamps `D.meta.{at,weekOf,by}` and writes `localStorage.setItem('lotus_gmd_v4', JSON.stringify(D))`. **📂 Load** (`ld()`) reads it back; **⬇ Export JSON** (`ex()`) downloads the current `D` as a timestamped `.json` file. `ld()` also runs once automatically on `window.onload`, so a returning visitor's status dots are restored without clicking anything.

**A third, minor localStorage key, `sma_site_view`:** the Tab 04 (VTO — Company) Section 0 site selector (`.sma-s0-site-sel` dropdown — Lotus Mall / Stadium Strip / Portal Mall / Consolidated) is a pure view filter, not app data. `setSmaS0Site(v)` writes the chosen site string straight to `localStorage.setItem('sma_site_view', v)` on change; `window.onload` reads it back and sets the dropdown's value before render. It doesn't touch `D`, `Q`, or any of the other data objects — it only remembers which site view the visitor last had open.

**Google OAuth sign-in gate:** `#gate` is a `position:fixed;inset:0;z-index:9999` overlay with a translucent blurred backdrop — it sits above the header, tabs, and every panel including Start Here. `initAuth()` (called on `window.onload`) checks `sb.auth.getSession()`; if a session exists, it strips any OAuth token fragment from the URL bar and hides `#gate`. `doLogin()` calls `sb.auth.signInWithOAuth({provider:'google', options:{redirectTo: <current URL, hash stripped>}})`. `doLogout()` calls `sb.auth.signOut()` and re-shows `#gate`. There is no separate "guest" or read-only mode — the gate blocks all content until a session exists.

**Quarterly Rocks filter/sort:** `spFilters = {horizon:'rocks', owner:'all', pillar:'all'}` (module-level state, default shows only Rock-horizon items). Horizon dropdown offers "All Rocks (Default)," "All Projects," or any exact `ALL_HORIZONS` value. Owner dropdown is built dynamically from the distinct `assignedLeader` values present in the live Supabase fetch. Pillar dropdown offers the 4 known pillars via `getPillar()`. `spShowCompleted`/`spCompletedOnly` booleans (toggled by the two always-visible, count-gated buttons) control whether completed rocks (`isCompleted(r)`: status starts with `done`, or is `dropped`/`archived`) are appended to, or substituted for, the active list. Column sort is per-table local state (`spRockSortState`, `teamSortState`, `smaSortState`, each `{col, dir}`), cycling asc → desc → unsorted on repeated header clicks via `nextSortDir()`.

**`getPillar(r)` and the Rock Health "No Status" fix (2026-06-22, commit `ff19139`):** `getPillar(r)` reads `r.data.projectType`, splits on `' — '`, and returns the text before the dash only if it's one of the 4 `KNOWN_PILLARS` — otherwise `'Other'`. This is the single, shared pillar-matching implementation; a second, drift-prone copy that used to live inside `renderRockHealth()` was deleted and replaced with a call to this function. Separately, `r.data.health` is read **without** a `|| 'on-track'` fallback anywhere — a rock with no health value increments a distinct `unset`/`noStatus` bucket, shown as "— N No Status" (compact view) or "· N no status" (per-pillar grid), never silently counted as green. **When rebuilding, do not reintroduce either the duplicate pillar-matching logic or the on-track fallback — both were deliberate fixes for real reported bugs.**

**Live data fetch:** `loadRockHealth()` runs on `initAuth()` success (i.e., once signed in) and again whenever the ↻ Refresh button is clicked. It does `sb.from('projects').select('data, created_at')`, stores the result in module-level `allProjects`, then calls `renderSprint()` (Tab 08 tables), `renderRockHealth()` (the pillar grid), `updateRhCompact()` (the compact summary line), and `rHome()` (Tab 01's status tiles) — all four are downstream of this one fetch, so a rebuild only needs one live query against one table.

---

## 20. Rebuild Checklist

Ordered steps to reconstruct a functionally-equivalent `index.html` from Sections 1–19 alone:

1. **Shell:** single HTML file, Google Fonts + Supabase JS CDN includes, `:root` custom properties from Section 18, fixed 3-band layout (`#hdr`/`#tabs`/`#cnt` + bottom `#bar`).
2. **Auth gate:** full-screen `#gate` overlay above everything (`z-index:9999`), Google OAuth via Supabase (`signInWithOAuth`), hide on session, no anonymous path.
3. **8 tab panels + tab bar:** build `PANS`/`go()`/`gotoTab()` routing (Section 19) and the keyboard-shortcut map before wiring content, so every tab has a working, empty shell first.
4. **Data objects:** declare `Q`, `Q12`, `Y1`, `Y3`, `Y5` (Section 17 shapes) populated with the real content from Sections 6–11 above (Rallying Cry, revenue goals, North Star, 3-Year/1-Year targets and milestones, 5-Year KPI cards, Adv.I.S.E. pillar priorities). Declare `FOS_DATA`, `RC`, `SMA`, `VCOLS`+`VSITES`, `TEAMS`, `ANCS` populated with the KPI rows from Sections 6–9. Declare the generic edit store `D`.
5. **Tab 02 (About), 03 (GM/MD-Off), 04 (VTO — Company), 05 (VTO — Teams), 06 (Strategic Anchors), 07 (VTO Map):** render each from its data array using the collapsible `<details>`/`<summary>` pattern (Section 18); wire status dots/next-action fields through `sv2`/`gd`/`id2` into `D`.
6. **Tab 08 (Lotus Strategy Canvas):** render the 11 sections in the exact order listed in Section 11, wiring editable fields through `ed()`/`saveEdits()`/`loadConfig()` against `Q`/`Q12`/`Y1`/`Y3`/`Y5`. Implement `getPillar()`, `isRock()`/`isSprint()`/`isLongTerm()`/`isCompleted()`, the filter dropdowns, and column sorting (Section 19).
7. **Tab 01 (Start Here):** role-shortcut buttons wired to `gotoTab()`, plus `rHome()` building the 3 status tiles from `fosCatCounts()`, `rcCatCounts()`, and the live `allProjects` Rock Health counts.
8. **Live data:** wire `loadRockHealth()` to Supabase `projects` table, fan out to `renderSprint()`/`renderRockHealth()`/`updateRhCompact()`/`rHome()`. Implement the "No Status" bucket exactly as specified in Section 19 — do not default missing `health` to on-track.
9. **Persistence:** implement `saveEdits()`/`loadConfig()` (localStorage key `lotus_gmd_v4_config`) and `sv()`/`ld()`/`ex()` (localStorage key `lotus_gmd_v4`, plus JSON export) exactly as scoped in Section 19 — two separate storage keys for two separate edit models, not one. Also implement `setSmaS0Site()` (localStorage key `sma_site_view`) for the Tab 04 site-selector dropdown — a third, independent key, view-state only.
10. **Verify against Sections 1–15:** every KPI count stated in the narrative sections (55, 66, ~199, 16, 6, 32, 17) should match what's actually rendered; every "Tab 0N" cross-reference in a Found In column or a SHARED badge should point at the tab that actually contains that KPI.

---

*Sources: `~scoreboard_l10_weekly_view.md` · `~vto_map_kpi_laundry_list_master_inventory.md` · `GM-MD-Integrated-Scoreboard-masterlist.md` · `lcc-v41-kpi-readiness-map.md` · `VTO MAP CN KPIs - For Team 2026.csv` · `~vto-map-cn-kpis-apr2026.md` · GM Strategy one-pager screenshot (Jun 16, 2026) · `index.html` (live app, read directly for Sections 16–20, 2026-07-21)*
*Aligned with: Lotus Development mission — creating places of Fulfillment & Joy where people Gather & Grow*
