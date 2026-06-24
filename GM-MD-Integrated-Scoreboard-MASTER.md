# GM/MD Integrated Scoreboard — Master Reference

**Version:** v1.7 — June 2026  
**Publisher:** SMA  
**Audience:** Dennis (MD/Founder) · GM/MD · Team Leaders · SMA  
**Audit Score:** 98/100 (see Section 14)  
**Changes in v1.7:** Tab 02 is now fully editable end-to-end (previously read-only) — both the 6 GM/MD-Off Switch cards and the 55-KPI Readiness Map. Added a third "LDApp source" tag to KPI rows across Tabs 02–05, alongside the existing Source Doc + Framework tags, naming which internal Lotus tool should feed that KPI's data (`?`-prefixed when unconfirmed — see Section 4). Rebuilt the 55-KPI Readiness Map on the real, individually-named canonical KPI list (previously category aggregate counts only) and restructured it into three tiers matching the actual Founder Freedom Cockpit v2.3 architecture: Founder Freedom Score Strip (points back to the 6-test cards, not duplicated), Project Execution (17 KPIs, live table), and Architect Console (32 KPIs across 5 collapsible tiles: Operational OS, ENGINE, PULSE, SOUL, Growth Pipeline) — see Section 5. File-wide font-size floor re-verified at 10.5px (continuation of the v1.6-adjacent WCAG-AA contrast/readability fix); no sub-floor sizes remain except the two decorative disclosure-triangle glyphs.  
**Changes in v1.6:** Renamed Tab 02 and all 6 switch tests from "Founder-Off" to "GM/MD-Off" throughout this document to match the live app (code already uses role-based "GM/MD" language, not "Founder/Dennis," reflecting the founder-transition already underway). Corrected Tab 07 section list — 10 collapsible sections, not 7 (added Universal Mission recap block; split "1-Year Picture" into 1-Year Priority + 1-Year Roadmap; split "Rallying Cry + Revenue Goals" into two sections, matching actual render order). Documented Google OAuth sign-in gate (not previously mentioned). Documented the completed-item status model (`done-obs`/`done-signed`/`archived`/`dropped`) and its two always-visible view controls on Quarterly Rocks and Long-Horizon Projects.  
**Changes in v1.5:** Added Tab 06 — VTO Map (6 Source Strategy cards, verified verbatim against the GM Strategy one-pager screenshot dated Jun 16, 2026); Lotus Strategy Canvas renumbered Tab 06 → Tab 07. Added 3 KPIs found missing during the completeness audit: Active Venues (Sites) to Tab 03 Section 0, OTIF — On-Time In-Full (Handaan + Kiosks) to Tab 04 Operations, EBITDA Margin Improvement (YoY) to Tab 04 Finance. Tab 03 total 65 → 66 KPIs. Tab 04 total ~197 → ~199 KPIs. Total tabs: 6 → 7.  
**Changes in v1.4:** Full CSV cross-check audit — 30 KPI fixes across 9 teams: 2 renames (D: Conquest→ICARE; F: Marcom→IAD/IAEC), 28 additions (B: +1, C: +5, D: +1, E: +1, F: +11, G: +2, H: +1, J: +2, K: +4). Tab 04 total ~170 → ~197 KPIs.  
**Changes in v1.3:** VTO hierarchy made explicit across all tabs. Tab 4 (VTO Critical Numbers) absorbed into Tab 3 Section 0 — same 10 KPIs now shown as 4-site × 10-KPI matrix inside Tab 03. Tabs renamed to reflect VTO hierarchy: Tab 02 = Founder-Off Dashboard, Tab 03 = VTO — Company, Tab 04 = VTO — Teams (was Tab 05), Tab 05 = Strategic Anchors (was Tab 06), Tab 06 = Lotus Strategy Canvas (was Tab 07). Total tabs: 6.  
**Changes in v1.2:** Tab 7 renamed to Strategy Canvas (covers 3 planning horizons: Quarterly Rocks, 1-Year Picture, 3-Year Roadmap). Tab 8 (12Q Canvas) removed — now a collapsible section inside Tab 7. Total tabs reduced from 8 to 7. SMA/GM Command (Tab 3) Rock Health grid replaced with compact summary badge. Lead/Lag Type column added to all Tab 3 sections. Column sorting added to Tab 3 and Tab 5 tables.  
**Changes in v1.1:** Tab 1 is now About (default landing); Founder View moved to Tab 2 (+1 on all old tab numbers). DCD and Technical teams merged under DCFM — Team E = DCFM – Technical, Team H = DCFM – Construction, both owned by DCFM TL. Per-KPI owner fields added to all 11 teams (~170 KPIs).

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
| **MD/Owner (Dennis)** | Checks Tab 02 (GM/MD-Off Dashboard) weekly; all 6 GM/MD-Off Switches must stay green for 8 consecutive weeks to confirm GM/MD-Off status |

---

## 3. System Map — How Everything Connects

```
LCC (Lotus Command Center)     →    Supabase        →    Scoreboard HTML
[Where the work happens]            [Bridge]              [Where strategy is read]

Team Member submits work            Data stored           GM sees it in Tab 07 (Lotus Strategy Canvas)
TL approves / escalates             live                  GM/MD sees it in Tab 02 (GM/MD-Off Dashboard)
SMA oversees and enforces                                 Tab 03 shows every KPI weekly
```

**Access:** Every tab requires Google sign-in before any live LCC data loads — no anonymous viewing.

**Tab flow (how to read this scoreboard — 7 tabs):**
1. **Tab 01 — About:** How do I use this scoreboard? (start here on first use)
2. **Tab 02 — GM/MD-Off Dashboard:** Can the GM/MD step back? (6 GM/MD-Off Switches must stay green for 8 consecutive weeks)
3. **Tab 03 — VTO — Company:** Are our Critical Numbers on track — by site and by function? (11 KPIs × 4 sites in Section 0; 66 total KPIs across 7 sections)
4. **Tab 04 — VTO — Teams:** Are our teams hitting the KPIs that drive the company numbers? (~199 KPIs, 11 teams — lead KPIs that drive Tab 03 lag numbers)
5. **Tab 05 — Strategic Anchors:** Are LotusOS, CultureOS, LeaderZen, and ExperienceOS running on their own?
6. **Tab 06 — VTO Map:** What does the GM Strategy one-pager actually say, word for word, and how does it trace down to team KPIs? (Mission Ladder + 6 Source Strategy cards + Adv.I.S.E. Traceability Lanes)
7. **Tab 07 — Lotus Strategy Canvas:** Where are we going — this quarter, this year, and in 3 years? (live from LCC)

**VTO Hierarchy (why Tab 03 and Tab 04 are related):**  
Tab 03 Section 0 shows the 11 company-level Critical Numbers across all 4 sites — these are lag indicators (results). Sections 1–6 show the lead KPIs the GM acts on weekly. Tab 04 shows the team-level lead KPIs that drive those company numbers. The VTO hierarchy flows: Company CN Lag → Company CN Lead → Team CN Lead.

**Why Tab 04 ≠ Tab 03:**  
Tab 03 is the company view — GM/SMA weekly action dashboard (66 KPIs). Tab 04 is the team view — each TL owns their section and fills in their team's lead KPIs every week.

---

## 4. Cross-Tab Shared KPIs

Three KPIs appear in multiple tabs. They are ONE data point — entered once, shown everywhere. The GM enters the number once and all tabs update.

| KPI Name | Data Key | Appears In | Owner | Target |
|---|---|---|---|---|
| ICARE Resolved <72h % | `icare_72h` | Tab 03 (Section 3), Tab 04 (Team D + K), Tab 05 (ExperienceOS) | SMA | ≥90% |
| L10 Quality Score (1–10) | `l10_quality` | Tab 03 (Section 6), Tab 04 (Team K), Tab 05 (LeaderZen) | SMA | ≥8/10 |
| LotusOS Adoption % | `lotusos_adoption` | Tab 03 (Section 6), Tab 04 (Team K), Tab 05 (LotusOS) | SMA | ≥85% |

**LDApp Source Tags:** Every KPI row in Tabs 02–05 carries a third tag (purple chip in the UI) alongside Source Doc + Framework, naming the internal Lotus tool ("LDApp") that should feed that KPI — e.g. `LCC v4.1`, `LeaderZen Module`, `VTO + CN Map`, `LMDB`, `LDApp Module`, `ExpOS Module`, `LCDM Module`, `HSRM Module`, `PT (Planning Tool) Module`. Where no confirmed internal tool exists yet, the tag is prefixed `?` with a best guess (e.g. `? Finance dashboard (not yet live per FOS-3)`) — this is a known gap to close, not an error to fix. Tags are editable inline, same as every other field on these rows.

---

## 5. Tab 02 — GM/MD-Off Dashboard

**Question:** Can the GM/MD step back? Are the 6 GM/MD-Off Switches green?  
**Logic:** All 6 GM/MD-Off Switch (FOS) tests must stay GREEN for 8 consecutive weeks. If any is red, the GM/MD is still needed in that area.  
**Edit:** Every field on this tab — status, target, consequence, source, LDApp tag — is inline-editable. Changes save to this browser; no separate edit-mode toggle needed (unlike Tab 07).

### GM/MD-Off Switch — 6 Tests

| # | Test | Target | Readiness | What Happens If Red |
|---|---|---|---|---|
| FOS-1 | Owner Draft Quality (avg + 0 rewrites) | ≥16/20 avg; 0 rewrites | PARTIAL | SMA flags the owner. No project moves forward until the rewrite cycle stops. |
| FOS-2 | SMA / GM Compliance Rate | ≥90% | PARTIAL | SMA escalates to GM same day. Root cause report due in 24 hours. |
| FOS-3 | F&B Profit — Clear Owner | Stable; GM/MD not involved | MISSING | Dennis confirms manually each week until Finance feed is live. |
| FOS-4 | Team-Led Innovations | ≥2 per BU per month | MISSING | BU Heads submit innovation log to SMA by last Friday of the month. |
| FOS-5 | Self-Managed Incidents | ≥80% resolved without GM/MD | MISSING | SMA tracks manually. Escalations are counted and reviewed weekly. |
| FOS-6 | GM/MD Active Hours | ≤10 hrs/week; near-zero escalations | PARTIAL | Dennis flags which task he should not be doing. GM takes it over by next Monday. |

### 55-KPI Readiness Map — Tracker

A status tracker, not a data-entry form — it shows what's LIVE inside LCC v4.1 today versus what still needs an external feed connected. Source: the canonical Founder Freedom Cockpit v2.3 KPI map (May 21, 2026 readiness boundary). Structured in three tiers, matching that architecture exactly:

- **Layer 0 — Founder Freedom Score Strip** = the 6 GM/MD-Off Switch tests above. Shown in the live app as a one-line pointer back up to that section — not duplicated as a second list.
- **Layer 1 — Project Execution** — the one category fully live, native to LCC v4.1.
- **Layer 2 — Architect Console** — 5 driver tiles SMA tracks and GM owns: Operational OS, ENGINE, PULSE, SOUL, Growth Pipeline.

**B. Project Execution — 17 KPIs, all LIVE (source: LCC)**

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

**C. Architect Console — 32 KPIs across 5 tiles (Layer 2, Founder Freedom Cockpit v2.3)**

*C1. Operational OS (7 KPIs — 0 LIVE, 2 PARTIAL, 5 MISSING)* — proves LotusOS is running, not merely designed.

| # | KPI | Target | Source System | Status |
|---|---|---|---|---|
| OOS-1 | LotusOS compliance % — true, not proxy | ≥85% | LDApps + LDPM module | MISSING |
| OOS-2 | PT / Process Tracker accuracy | Stable; red/yellow only | PT / Scoreboard system | MISSING |
| OOS-3 | Module submission % — on time | 100% | LDApps module | MISSING |
| OOS-4 | SLA breach rate | 0% | ICARE / LCC / LDApps | MISSING |
| OOS-5 | Side tracker count | 0 | LDApps audit | MISSING |
| OOS-6 | Founder-required closures per month | ≤3/month, declining | LCC / GM summary | PARTIAL |
| OOS-7 | Rescue rate | <10% | LCC | PARTIAL |

*C2. ENGINE — Finance (7 KPIs — all MISSING)* — financial-health layer; none of these feeds are live inside LCC v4.1.

| # | KPI | Target | Source System |
|---|---|---|---|
| E-1 | Weekly revenue flash by BU | On target | Finance dashboard / PT |
| E-2 | Margin by BU | Above target; below-target only shown | Finance / BU scoreboards |
| E-3 | Cash position / buffer | Safe zone | Finance |
| E-4 | Days A/R — Accounts Receivable | Declining trend | Finance |
| E-5 | Days Inventory | Declining trend | Finance |
| E-6 | Cash Margin | Stable or improving | Finance |
| E-7 | OTIF — Handaan + kiosks | ≥98% | Finance / Ops |

*C3. PULSE — Customer (7 KPIs — all MISSING)* — customer, tenant, and event health.

| # | KPI | Target | Source System |
|---|---|---|---|
| PU-1 | Foot traffic by site | Positive trend; red flags only | Site dashboards |
| PU-2 | Tenant health / at-risk cluster count | No red clusters | Tenant / Leasing dashboard |
| PU-3 | Event utilization | Above target | Events / FEC dashboards |
| PU-4 | NPS — Overall | ≥60 | ExperienceOS / feedback |
| PU-5 | NPS — FEC | ≥70 | ExperienceOS / feedback |
| PU-6 | NPS — Handaan | ≥65 | ExperienceOS / feedback |
| PU-7 | Recurring ICARE issues + unresolved SLA breaches | 0 recurring | ICARE / LDApps |

*C4. SOUL — People (7 KPIs — all MISSING)* — leadership and people health.

| # | KPI | Target | Source System |
|---|---|---|---|
| SO-1 | Leadership Autonomy Score per leader | ≥80; alert <70 | LeaderZen / L10 / HSM |
| SO-2 | L10 meeting compliance | ≥90%; red flag <75% for 2 weeks | LeaderZen |
| SO-3 | Culture ritual compliance — Gather / Grow | ≥90% | CultureOS / L10 |
| SO-4 | Engagement trend — direction only | Improving | HSM / Human360 / HR |
| SO-5 | APOGEIC Fit score — People Analyzer | ≥3.5/5 avg; no one <3 for 2 consecutive quarters | LeaderZen / HSM |
| SO-6 | TL problem-solving rate before escalation | ≥80% | SMA tracking |
| SO-7 | Promotion-ready shortlist | Updated quarterly; ≥1 per role | LRAD |

*C5. Growth Pipeline (4 KPIs — all MISSING)* — proves future growth is moving without founder chasing.

| # | KPI | Target | Source System |
|---|---|---|---|
| GP-1 | Pre-development sites — stage + blockers | Advancing; no stalls | Biz Dev / pipeline tracker |
| GP-2 | Launching sites — risk level | Low risk | Replication OS / DEVELOP |
| GP-3 | Tenant pipeline health | Growing or stable | Leasing / tenant DB |
| GP-4 | Brand innovation pipeline per BU | ≥2 per BU per month | Brand / MarCom / BU tracker |

**TOTAL: 55 KPIs — 17 LIVE / 5 PARTIAL / 33 MISSING** (6 Founder Freedom Score Strip + 17 Project Execution + 32 Architect Console).

---

## 6. Tab 03 — VTO — Company (66 KPIs)

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

## 7. Tab 04 — VTO — Teams (~199 KPIs, 11 Teams)

**Question:** Are our teams hitting the KPIs that drive the company numbers?  
**Owner:** Each TL fills in their own team's numbers weekly  
**Review:** GM/MD reviews every Monday. TL explains any red number same day.  
**Note:** These are predominantly lead KPIs — the activities and behaviors that drive the lag numbers shown in Tab 03 Section 0. A compact reference bar at the top of this tab links to Tab 03 for company context.

> *(Previous Tab 4 — VTO Critical Numbers has been absorbed into Tab 03 Section 0 as of v1.3. The 10-KPI × 4-site matrix now lives there. Data keys `vto.{site}_{col}` are preserved.)*

> *(v1.4 — June 2026: 25 KPI audit fixes applied — 2 renames, 23 additions across 8 teams. Source: full cross-check vs VTO MAP CN KPIs CSV.)*

### A) Finance | 7 KPIs | Owner: Finance TL
Gross Revenue, Net Profit, Collection Rate, EBITDA Margin, Electricity Income, RDS Expense

### B) Opportunity (Leasing) | 17 KPIs | Owner: Opportunity TL
Commercial Occupancy (Unit/Area/₱ Value), # Prospects, # Closed Prospects, # Closed Reservations (Walk-in & Online), # Closed Inquiry (Offline), # Online Inquiries Scheduled for Ocular, Tenant Mix Plan, % Tenant Mix Planned vs Actual, Tenant Requirements % Complete, Aversion Rate in Pull-out, Business Beginners ≥25%, Koncepto Pop-Up Event/Temporary Reservations, Client-Initiated Events Reservations, **% On time & Accurate — Community Compass (Opportunity)**

### C) Events & Gathering | 22 KPIs | Owner: E&G TL
Avg Daily Foot Traffic, Event Pipeline (weeks), Venue Utilization %, # of 500+ pax events/month, # Mall Events Generated, Events & Gathering Expense, # Foot Traffic Generated, # Merchants Inquiry, # Walk-in Inquiries (Handaan Events), Venue Occupancy (Hours Reserved), Venue PValue %, Handaan Events PValue %, Koncepto Unit %, Koncepto PValue %, Other Revenue, % On time Community Compass (E&G), # Handaan Events Generated, # Closed Inquiry/Offline Received: Gathering, # Closed Prospects: (Events) Handaan, # Closed Prospects: (Events) Client-Initiated, **(NEW) Community Participation % (event attendance vs capacity)**, **(NEW) Belonging Index (NPS + repeat visits + membership/loyalty)**

### D) Operations | 26 KPIs | Owner: Ops TL
STTACCK NPS / Community NPS, % Resolved ICARE (OPR), Site Score %, Electricity Expense, % Onboarded Tenants, Parking Income, Security Expenses, Manpower Expenses, Utility Maintenance Expenses, Water Expense, Operating Expenses (Total), **# ICARE Addressed** *(renamed from # Conquest Addressed)*, # Insurance Claimed, **% Insurance Claimed vs Reported**, % Site Quality Score (Ops Integrator), % Tenant RDS On time, % Parking Layout Planned vs Actual, Tools & Equipment Masterlist/Count (OPR), Stock Issuance %, Inventory Masterlist/Count (OPR), Agency Regular Events/Activities %, PM Checklist Completion %

### E) DCFM – Technical | 31 KPIs | Owner: DCFM TL
# Breakdowns Engineering, MTTR, % On-time Completion Projects, % Within Budget Projects, R&M Expense, R&M Labor/Materials FS Targets, # Violations (count + cost), # Projects Completed (Special, Team & ICARE), % Planned vs Actual (Technical/Engineering/Special), % On-time Completion (Engineering), % Within Budget (Technical/Engineering/Special), Project Budget vs Planned, PM Score %, NPS/Score/Evaluation (Technical/Engineering/Special), SFML PT accuracy, Team ICARE addressed, # System Changes/quarter, Work Orders complete, Team Targets attained, Team PTs & DBs accuracy, Team Reports accuracy, **% Planned vs Actual: JO (UM)**

### F) Marketing Communications | 23 KPIs | Owner: Marcom TL
# Online Leads (Commercial), Engagement Rate, **% Planned vs Actual — IAD/IAEC: BU and Sites** *(renamed from % On-time Marcom)*, Net Follows, Marketing & Branding Expense, # Posts/Planned Posts, % CIP On time, # Walk-in Inquiries (Commercial/Events), # Online Leads (Events), # Scheduled Ocular (Commercial/Events), **% Increase: Facebook Page Reach (per Month per Page)**, **% Increase: Facebook Page Followers (per Month per Page)**, **# Inquiries: Offline for (Commercial Spaces)**, **# Inquiries: Offline for Gatherings (Event Venues)**, **# Inquiries: Offline for Gatherings (Sports Arena)**, **# Inquiries: Offline for Gatherings (Handaan)**, **# Inquiries: Offline for Gatherings (HCafe)**, **# Inquiries: Offline for Gatherings (SS)**, **# Inquiries: Offline for Gatherings (KS)**, **# Inquiries: Offline for Gatherings (PS)**, **# Inquiries: Offline for Gatherings (Studio)**

### G) IT | 11 KPIs | Owner: IT TL
# Breakdowns IT, Office LAN & WiFi, Accounting Software Connectivity, R&M Expense, Laptop/Desktop Procurement, Assets accuracy, Office Equipment PM, Office Equipment Inventory, Websites Update, **% Complete & Updated: KDB**, **% Complete & Updated: OAML**

### H) DCFM – Construction | 10 KPIs | Owner: DCFM TL
# Projects Completed vs Planned, Time-to-Launch, Project Budget vs BOQ, Landscape & Plant Propagation, Approved BOQ Budget, # Landscape ICARE Projects, # ISP Projects, # Site Projects, DCD Score %, **% Planned vs Actual: JO (All Works)**

**Note:** DCFM (Design, Construction, Facilities Management) consolidates the former Technical/Engineering team (Tab 04 — Team E) and the former DCD team (Tab 04 — Team H). Both now report to DCFM TL. Team IDs in the system remain `tech` and `dcd` to preserve existing KPI data.

### I) LRAD / LeaderZen | 20 KPIs | Owner: LRAD TL
Attrition Rate, L10 Compliance Rate, Autonomy Score Growth, % Teammembers Green on Role Readiness, Lotuszens NPS, Salary Expense, Complete Lotuszen Activities, LMDB Stories updated, LMDB & Lotuszen Hub updated, % L10 Module Complete, L10 Attendance Rate, % Leadership Pipeline Module, Playbook Contributions per Team, # Playbook Entries/Month, Self Check-In Rate, Team Meeting Rating, Avg L10 Quality Score, Avg Self Autonomy Score, Readiness/Promotion shortlist, % Playbook Completed

### J) Quality / SID / SMD | 19 KPIs | Owner: SMD + SID Integrator
% On-time RP, % SID Projects Planned vs Actual, # System Changes/quarter, # Projects Completed (SMD & SID), Project Rating %, LotusOS Complete (RP/PM/LMDB), LotusOS Activities Complete, KDB On-time & Accurate, SMD Project Completion %, SMD Projects Planned vs Actual, Team ICARE addressed, Work Orders complete, SID Projects On-time, PT DB On-time & Accurate, PT DB Complete & Updated, Team PTs & DBs accurate, Team Reports accurate, **Score/Evaluation/NPS: SID Projects**, **Score/Evaluation/NPS: SMD Projects**

### K) SMA — Governance | 11 KPIs | Owner: SMA
LotusOS Adoption % ↔ SHARED, L10 Quality Score ↔ SHARED, % Addressed ICARE ↔ SHARED, ICARE Resolved <72h %, % LDApp Module Audit On-time, % PropMan Module On-time, % LotusOS Complete & Updated, **% Complete & Updated: LDPM Module**, **% Complete & Updated: LDApps Module**, **% On time & Accurate: LDPM Module**, **% Complete & Updated: ICARE Module**

---

## 8. Tab 05 — Strategic Anchors (4 Operating Systems, 16 KPIs)

**Question:** Are our 4 operating systems running on their own, or is a person still running them?

| OS | KPIs | What It Proves |
|---|---|---|
| LotusOS | Overall Adoption %, Module Submission %, Side Trackers: 0, SLA Breach Rate: 0% | The master operating system is adopted and running |
| CultureOS | Culture Ritual Compliance ≥90%, APOGEIC Fit Score ≥3.5/5, Engagement Trend Improving | Culture builds itself; Founder not required |
| LeaderZen | L10 Quality Score ≥8/10 ↔ SHARED, Autonomy Score Growth, % Green on Role Readiness ≥80%, Promotion Shortlist Updated | Leaders run their own teams without SMA managing every meeting |
| ExperienceOS | NPS Overall ≥60, NPS FEC ≥70, NPS Handaan ≥65, ICARE <72h % ≥90% ↔ SHARED, Recurring ICARE Issues: 0 | Guests and tenants get a consistent excellent experience without founder oversight |

---

## 9. Tab 06 — VTO Map

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

## 10. Tab 07 — Lotus Strategy Canvas

**Question:** Where are we going — this quarter, this year, and in 3 years?  
**How it works:** One tab covers all 3 planning horizons. 10 collapsible sections, in this order:

| Section | Content | Cadence |
|---|---|---|
| Universal Mission → V/TO → 5yr → 3yr | Static recap of Mission, Vision/BHAG, 5-Year Picture, and 3-Year Lag/Lead metrics, pasted verbatim from the VTO Map — not yet measured by the system | Reference only |
| 3-Year Roadmap | 12-quarter milestone table + long-horizon LCC projects, grouped by Pillar (Advocates/Innovator/Sages/Essentialists) plus an "Other" group for unmatched project types | Every 3 years |
| 1-Year Priority | Annual targets (Revenue, EBITDA, Occupancy, NPS) + top annual priorities | Every year |
| 1-Year Roadmap | Same format as 3-Year Roadmap, scoped to this year's 4 quarters | Every year |
| North Star Metrics | 5–7 KPIs with targets; SHARED badges link to source tabs | Every quarter |
| Strategic Themes | Broader annual directional bets (not individual rocks) | Every quarter |
| Revenue Goals | Good/Better/Best revenue targets | Every quarter |
| Rallying Cry | Quarter theme | Every quarter |
| Rocks & Projects Health — Live from LCC | Live project health grid (Pillar × On Track / At Risk / Critical), open by default | Real-time |
| Quarterly Rocks — Live from LCC | Live LCC projects filtered by Horizon / Owner / Pillar dropdowns, open by default | Real-time |

**Completed-item visibility (Quarterly Rocks and Long-Horizon Projects):** a project counts as completed if its status is `done-obs`, `done-signed`, `archived`, or `dropped`. Two controls sit in the Quarterly Rocks filter bar: **"Show Completed (N)"** adds completed items alongside active ones; **"Show Completed Only"** shows just the completed ones, excluding active items. Both buttons are always visible — greyed out and disabled when N=0 — so the feature stays discoverable even before any project reaches a completed state (fixed 2026-06-22; previously both buttons vanished entirely at N=0).

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

**Team Leader:** You own your section in Tab 04 (VTO — Teams). You fill in every number by Monday 9am. If a number is red, you present a fix plan — not just a reason — at the same L10 or same day depending on the consequence rule. You do not let red numbers go unaddressed for more than 24 hours.

**GM/MD:** You own Tab 03 (VTO — Company). You publish it every Monday by 9am. If a number is red with no plan, you escalate to the KPI Owner same day. You review Tab 02 every Monday to check the 6 GM/MD-Off Switches. You present the scoreboard at L10 and use it to hold TLs accountable — not to punish, but to clear blockers and enforce the system.

**MD/Owner (Dennis):** You check Tab 02 (GM/MD-Off Dashboard) first. If all 6 switches are green for 8 consecutive weeks, the system is running without you. If any switch is red, you stay involved only in that specific area. You do not manage Tab 03 or Tab 04 directly — that is the GM's job. If the GM needs you in Tab 03, the system is not ready yet.

---

## 14. Tab Structure Audit

All 7 tabs are correctly placed for their purpose. (Tab 4 — VTO Critical Numbers absorbed into Tab 03 Section 0 as of v1.3. Tab 06 — VTO Map added as of v1.5.)

| Tab | Question It Answers | Correct? | Key Reason |
|---|---|---|---|
| 01 — About | How do I use this scoreboard? | ✅ | Default landing tab; helps new TLs and onboarding; always accessible |
| 02 — GM/MD-Off Dashboard | Can the GM/MD step back? | ✅ | 6 FOS tests + 55-KPI readiness; MD-level only |
| 03 — VTO — Company | Are our Critical Numbers on track — by site and by function? | ✅ | GM/SMA weekly action dashboard; Section 0 = 11-KPI × 4-site matrix; Sections 1–6 = 66 lead/governance KPIs |
| 04 — VTO — Teams | Are our teams hitting the KPIs that drive company numbers? | ✅ | 11 teams, ~199 KPIs; TL-owned accountability view; lead KPIs that drive Tab 03 lags |
| 05 — Strategic Anchors | Are our OSes running on their own? | ✅ | 4 operating systems; proves system-vs-person health |
| 06 — VTO Map | What does the GM Strategy one-pager say, word for word, and how does it trace to team KPIs? | ✅ | Mission Ladder + 6 verbatim Source Strategy cards + Adv.I.S.E. Traceability Lanes |
| 07 — Lotus Strategy Canvas | Where are we going — this quarter, this year, 3 years? | ✅ | 3 planning horizons in one tab; live LCC rocks + 1-Year Picture + 3-Year Roadmap |

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
| Scalable — MD can roll out across sites | 9/10 | Site dropdown is label-only; site-level detail needs Tab 3 expansion |
| Philippine/Caviteño context — practical for local execution | 10/10 | Consequences respect pakikisama; escalation goes TM → TL → GM; fear of mistakes handled by system |

**Gap notes (2 points):**
1. TBD targets need confirmation per TL at next L10 — this is expected at v1 launch
2. Site dropdown is view-label only — full per-site data entry requires Tab 3 expansion in a future version

This document is ready to use as the canonical spec for all future HTML builds and SMA onboarding.

---

*Sources: `~scoreboard_l10_weekly_view.md` · `~vto_map_kpi_laundry_list_master_inventory.md` · `GM-MD-Integrated-Scoreboard-masterlist.md` · `lcc-v41-kpi-readiness-map.md` · `VTO MAP CN KPIs - For Team 2026.csv` · `~vto-map-cn-kpis-apr2026.md` · GM Strategy one-pager screenshot (Jun 16, 2026)*  
*Aligned with: Lotus Development mission — creating places of Fulfillment & Joy where people Gather & Grow*
