# Tab 7 Strategy Canvas Updates — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add editable 5-Year KPI cards to the Universal Mission section, add a new editable 3-Year Priority (Adv.I.S.E.) section, and convert the 1-Year Priority table's Due/Status columns to dropdowns in edit mode — all persisted via localStorage.

**Architecture:** All changes are in a single self-contained HTML file. Data objects (Y5, Y3) follow the same pattern as existing Q, Y1, Q12 objects: initialized as JS constants, loaded from localStorage via `loadConfig()`, read from DOM in `saveEdits()`, and rendered via template literals in `renderTabSP()`.

**Tech Stack:** Vanilla JS, HTML/CSS — no build toolchain. All edits are in one file: `GM Strat and Scoreboard/index.html`.

## Global Constraints

- All new editable fields must use the existing `ed(id, val, extraStyle)` function — no new edit mechanisms.
- All new `<select>` dropdowns must use the existing `.ssel` CSS class for styling.
- All new data persists to `lotus_gmd_v4_config` in localStorage — same key as existing data.
- Never break existing saveEdits() DOM reads — all new saves are appended, not replacing.
- No new CSS classes unless strictly necessary; reuse `.q12-targets`, `.q12-card`, `.vto-mission-row`, `.sp-details`, `.sp-sum`, `.sp-sec-sub`.

---

## File Map

| File | Change |
|------|--------|
| `GM Strat and Scoreboard/index.html` line ~1140 | Add `Y5` and `Y3` constants after `Y1` |
| `GM Strat and Scoreboard/index.html` line ~1175 | Extend `loadConfig()` with y5/y3 loading |
| `GM Strat and Scoreboard/index.html` line ~1241 | Extend `saveEdits()` with Y1 status, Y3, Y5 saves |
| `GM Strat and Scoreboard/index.html` line ~1259 | Extend `localStorage.setItem` call |
| `GM Strat and Scoreboard/index.html` line ~1558 | Replace `y1PriHTML` with dropdown-aware version |
| `GM Strat and Scoreboard/index.html` line ~1568 | Update Universal Mission section: title + remove 3yr rows + add 5yr KPI cards |
| `GM Strat and Scoreboard/index.html` line ~1581 | Insert new 3-Year Priority `<details>` block |

---

## Task 1: Add Y5 and Y3 Data Objects

**Files:**
- Modify: `GM Strat and Scoreboard/index.html` — after line 1140 (after the closing `};` of the `Y1` object and the `/* ── END QUARTERLY EDIT ZONE ── */` comment)

- [ ] **Step 1: Insert Y5 and Y3 after `/* ── END QUARTERLY EDIT ZONE ── */` (line 1141)**

Find this exact text:
```javascript
};
/* ── END QUARTERLY EDIT ZONE ── */
```

Replace with:
```javascript
};
const Y5 = {
  kpis: [
    { title: '100+ Sites Operated',       desc: '100+ sites operated as Boutique LIVE·WORK·PLAY projects',                         tags: 'Scalable · Expansion'       },
    { title: 'Business Beginners Focus',  desc: '≥30% Business Beginners with ≥70% weekly utilization',                            tags: 'Inclusive · Supportive'     },
    { title: 'Internal Leadership',       desc: '≥70% Internal Managers with ≥80% Founder/Architect/Creative roles',               tags: 'Empowering · Innovative'    },
    { title: 'Proven Marketing Strategy', desc: 'Proven Marketing Strategy across Community, Target, and LotusDŌ platforms',        tags: 'Strategic'                  },
  ],
};
const Y3 = {
  priorities: [
    { pillar: 'Advocates',     tag: 'We Make Dreams Happen', identity: 'Loved Brand — boutique LIVE-WORK-PLAY opportunity platform loved by families, top-of-mind for business beginners and local talents.',  metrics: 'Beginners >25% / site · Waitlists thriving · Partner success stories · People love Lotus.' },
    { pillar: 'Innovators',    tag: 'We Make Things Unique', identity: 'Living Centers — distinct concepts and experiences make our places the natural home of community life.',                                metrics: '18–22 active sites · Utilization >65% · Calendars 8–12 weeks · Our projects are the place to be.' },
    { pillar: 'Sages',         tag: 'We Make People Great',  identity: 'Co-Elevating Team — a culture that creates legends and changemakers; leaders who grow leaders.',                                         metrics: 'Internal Managers >70% · L10 >8/10 · eNPS strong · We create legends and changemakers.' },
    { pillar: 'Essentialists', tag: 'We Make Things Easy',   identity: 'Empowering System — LotusOS and LeaderZen become the way: organize, simplify, and set the standard.',                                   metrics: 'LotusOS >85% · OTIF >98% · MTTR down · EBITDA +2–3 pts' },
  ],
};
/* ── END QUARTERLY EDIT ZONE ── */
```

- [ ] **Step 2: Verify in browser — no JS errors**

Open `index.html` in browser. Open DevTools console. Confirm no `ReferenceError` or `SyntaxError`. Type `Y5.kpis.length` → expect `4`. Type `Y3.priorities.length` → expect `4`.

---

## Task 2: Extend loadConfig() and saveEdits() + localStorage

**Files:**
- Modify: `GM Strat and Scoreboard/index.html` — three spots inside `loadConfig()` and `saveEdits()`

- [ ] **Step 1: Extend `loadConfig()` — add y5 and y3 loading**

Find this exact block (around line 1175):
```javascript
    const y1 = cfg.y1 || {};
    if (y1.year_label)   Y1.year_label    = y1.year_label;
    if (y1.targets)      Object.assign(Y1.targets, y1.targets);
    if (y1.priorities)   Y1.priorities    = y1.priorities;
  } catch(e) {}
}
```

Replace with:
```javascript
    const y1 = cfg.y1 || {};
    if (y1.year_label)   Y1.year_label    = y1.year_label;
    if (y1.targets)      Object.assign(Y1.targets, y1.targets);
    if (y1.priorities)   Y1.priorities    = y1.priorities;
    const y3 = cfg.y3 || {};
    if (y3.priorities)   Y3.priorities    = y3.priorities;
    const y5 = cfg.y5 || {};
    if (y5.kpis)         Y5.kpis          = y5.kpis;
  } catch(e) {}
}
```

- [ ] **Step 2: Extend `saveEdits()` — replace Y1 priorities loop + add Y3/Y5 saves**

Find this exact block (lines 1241–1248):
```javascript
  Y1.priorities.forEach((item, i) => {
    const pEl = document.getElementById(`ec-y1-p-${i}`);
    const oEl = document.getElementById(`ec-y1-o-${i}`);
    const dEl = document.getElementById(`ec-y1-d-${i}`);
    if (pEl) item.p     = pEl.textContent.trim() || item.p;
    if (oEl) item.owner = oEl.textContent.trim() || item.owner;
    if (dEl) item.due   = dEl.textContent.trim() || item.due;
  });
```

Replace with:
```javascript
  Y1.priorities.forEach((item, i) => {
    const pEl = document.getElementById(`ec-y1-p-${i}`);
    const oEl = document.getElementById(`ec-y1-o-${i}`);
    const dEl = document.getElementById(`ec-y1-d-${i}`);
    const sEl = document.getElementById(`ec-y1-s-${i}`);
    if (pEl) item.p      = pEl.textContent.trim() || item.p;
    if (oEl) item.owner  = oEl.textContent.trim() || item.owner;
    if (dEl) item.due    = (dEl.value || dEl.textContent.trim()) || item.due;
    if (sEl) item.status = sEl.value || item.status;
  });
  Y3.priorities.forEach((item, i) => {
    const tEl = document.getElementById(`ec-y3-tag-${i}`);
    const iEl = document.getElementById(`ec-y3-id-${i}`);
    const mEl = document.getElementById(`ec-y3-met-${i}`);
    if (tEl) item.tag      = tEl.textContent.trim() || item.tag;
    if (iEl) item.identity = iEl.textContent.trim() || item.identity;
    if (mEl) item.metrics  = mEl.textContent.trim() || item.metrics;
  });
  Y5.kpis.forEach((item, i) => {
    const titleEl = document.getElementById(`ec-y5-t-${i}`);
    const descEl  = document.getElementById(`ec-y5-d-${i}`);
    const tagsEl  = document.getElementById(`ec-y5-g-${i}`);
    if (titleEl) item.title = titleEl.textContent.trim() || item.title;
    if (descEl)  item.desc  = descEl.textContent.trim()  || item.desc;
    if (tagsEl)  item.tags  = tagsEl.textContent.trim()  || item.tags;
  });
```

- [ ] **Step 3: Extend `localStorage.setItem` call (line 1259)**

Find:
```javascript
  localStorage.setItem('lotus_gmd_v4_config', JSON.stringify({ q: Q, q12: Q12, y1: Y1 }));
```

Replace with:
```javascript
  localStorage.setItem('lotus_gmd_v4_config', JSON.stringify({ q: Q, q12: Q12, y1: Y1, y3: Y3, y5: Y5 }));
```

- [ ] **Step 4: Verify — no JS errors in console**

Open `index.html` in browser. Confirm no errors. The page should render identically to before (new sections not yet added to template).

---

## Task 3: Update 1-Year Priority Table (Dropdowns)

**Files:**
- Modify: `GM Strat and Scoreboard/index.html` — replace `y1PriHTML` rendering (lines 1558–1563) inside `renderTabSP()`

- [ ] **Step 1: Replace y1PriHTML build block**

Find this exact block (lines 1558–1563):
```javascript
  const y1PriHTML = Y1.priorities.map((p,i) => `<tr>
    <td class="kn">${ed(`ec-y1-p-${i}`,p.p)}</td>
    <td style="font-size:11px;color:var(--text-mid)">${ed(`ec-y1-o-${i}`,p.owner)}</td>
    <td style="font-size:11px;color:var(--text-dim)">${ed(`ec-y1-d-${i}`,p.due)}</td>
    <td><span class="dot ${hMap[p.status]||'ds'}">${hLabel[p.status]||p.status}</span></td>
  </tr>`).join('');
```

Replace with:
```javascript
  const y1QuarterOpts = Q12.milestones
    .filter(m => m.label.endsWith(Y1.year_label))
    .map(m => m.label);
  const y1PriHTML = Y1.priorities.map((p,i) => {
    const dueSel = editMode
      ? `<select id="ec-y1-d-${i}" class="ssel">${y1QuarterOpts.map(q=>`<option value="${q}"${p.due===q?' selected':''}>${q}</option>`).join('')}</select>`
      : `<span style="font-size:11px;color:var(--text-dim)">${p.due}</span>`;
    const statusSel = editMode
      ? `<select id="ec-y1-s-${i}" class="ssel">
           <option value="on-track"${p.status==='on-track'?' selected':''}>● On Track</option>
           <option value="at-risk"${p.status==='at-risk'?' selected':''}>⚠ At Risk</option>
           <option value="critical"${p.status==='critical'?' selected':''}>✕ Critical</option>
         </select>`
      : `<span class="dot ${hMap[p.status]||'ds'}">${hLabel[p.status]||p.status}</span>`;
    return `<tr>
      <td class="kn">${ed(`ec-y1-p-${i}`,p.p)}</td>
      <td style="font-size:11px;color:var(--text-mid)">${ed(`ec-y1-o-${i}`,p.owner)}</td>
      <td>${dueSel}</td>
      <td>${statusSel}</td>
    </tr>`;
  }).join('');
```

- [ ] **Step 2: Verify dropdowns in browser**

Open `index.html` → Tab 7 → click **Edit** in header. In the "1-Year Priority" section, confirm:
- `Due` column shows a `<select>` with options Q1 2026, Q2 2026, Q3 2026, Q4 2026 (pre-selected to current values)
- `Status` column shows a `<select>` with On Track / At Risk / Critical (pre-selected to current values)
- Click **Done** → values persist
- Reload page → values still match (loaded from localStorage)

---

## Task 4: Update Universal Mission Section (5-Year KPIs)

**Files:**
- Modify: `GM Strat and Scoreboard/index.html` — inside the `el.innerHTML = \`` template literal in `renderTabSP()` (around lines 1568–1580)

- [ ] **Step 1: Add y5KpiHTML build block before the template literal**

Immediately after the `y1PriHTML` block (after the `.join('');` line), add:
```javascript
  const y5KpiHTML = Y5.kpis.map((k,i) => `
    <div class="q12-card">
      <div class="q12-card-lbl">${ed('ec-y5-t-'+i, k.title)}</div>
      <div class="q12-card-val" style="font-size:12px;font-weight:500">${ed('ec-y5-d-'+i, k.desc)}</div>
      <div style="margin-top:5px;font-size:10.5px;color:var(--text-dim);font-family:var(--fd)">${ed('ec-y5-g-'+i, k.tags)}</div>
    </div>`).join('');
```

- [ ] **Step 2: Update Universal Mission section in the template literal**

Find this block (inside `el.innerHTML = \`` template, around line 1569):
```javascript
    <details class="sp-details">
      <summary class="sp-sum sh"><div class="shd"></div><h3>Universal Mission → V/TO → 5yr → 3yr</h3><div class="shl"></div></summary>
      <p class="sp-sec-sub">Lotus Dev's long-horizon identity, pasted as-is from the VTO Map — not yet measured by the system.</p>
      <div class="vto-mission">
        <div class="vto-mission-row"><div class="vto-mission-lbl">Universal Mission</div><div class="vto-mission-txt">To transform the community into a place of Fulfillment &amp; Joy by Empowering people to Gather &amp; Grow.</div></div>
        <div class="vto-mission-row"><div class="vto-mission-lbl">Vision / BHAG</div><div class="vto-mission-txt">By 2035, we will become a Boutique Community Developer and a Management Company that builds &amp; operates 100 LIVE‑WORK‑PLAY projects that Empower people to Gather &amp; Grow.</div></div>
        <div class="vto-mission-row"><div class="vto-mission-lbl">5-Year Picture (2030)</div><div class="vto-mission-txt">Become a Boutique Community Developer and Management Company that builds &amp; operates 100 LIVE‑WORK‑PLAY projects that Empower people to "Gather &amp; Grow," so our community transforms into a place of fulfillment and joy.</div></div>
        <div class="vto-mission-row"><div class="vto-mission-lbl">3-Year Metric (Lag, pasted)</div><div class="vto-mission-txt">18–22 active sites (6+ provinces) · 8+ Yspacio Creative Parks · 9–12 FEC sites · 12–18 Bakery by Handaan kiosks · 4–6 Handaan/H Café units · Beginner share ≥25%/site</div></div>
        <div class="vto-mission-row"><div class="vto-mission-lbl">3-Year Metric (Lead, pasted)</div><div class="vto-mission-txt">(NEW) Occupancy % (Area, mature sites) ≥92% · (NEW) Business Beginners ≥25% avg per site (GLA‑weighted) · Community NPS ≥60 / FEC ≥70 / Handaan ≥65</div></div>
      </div>
      <p style="margin-top:10px"><a href="javascript:void(0)" onclick="go('vm',document.querySelectorAll('.tb')[5])" style="font-family:var(--fd);font-size:11px;color:var(--lotus-tx);font-weight:600">→ Full 3-Year Identity by pillar in Tab 06 — VTO Map</a></p>
    </details>
```

Replace with:
```javascript
    <details class="sp-details">
      <summary class="sp-sum sh"><div class="shd"></div><h3>Universal Mission → VTO → 5yr</h3><div class="shl"></div></summary>
      <p class="sp-sec-sub">Lotus Dev's long-horizon identity — from Universal Mission to 5-Year targets.</p>
      <div class="vto-mission">
        <div class="vto-mission-row"><div class="vto-mission-lbl">Universal Mission</div><div class="vto-mission-txt">To transform the community into a place of Fulfillment &amp; Joy by Empowering people to Gather &amp; Grow.</div></div>
        <div class="vto-mission-row"><div class="vto-mission-lbl">Vision / BHAG</div><div class="vto-mission-txt">By 2035, we will become a Boutique Community Developer and a Management Company that builds &amp; operates 100 LIVE‑WORK‑PLAY projects that Empower people to Gather &amp; Grow.</div></div>
        <div class="vto-mission-row"><div class="vto-mission-lbl">5-Year Picture (2030)</div><div class="vto-mission-txt">Become a Boutique Community Developer and Management Company that builds &amp; operates 100 LIVE‑WORK‑PLAY projects that Empower people to "Gather &amp; Grow," so our community transforms into a place of fulfillment and joy.</div></div>
      </div>
      <p style="margin-top:12px;font-family:var(--fd);font-size:11px;color:var(--text-dim);font-weight:600;letter-spacing:.04em">5-YEAR KPIs</p>
      <div class="q12-targets" style="margin-top:6px">${y5KpiHTML}</div>
      <p style="margin-top:10px"><a href="javascript:void(0)" onclick="go('vm',document.querySelectorAll('.tb')[5])" style="font-family:var(--fd);font-size:11px;color:var(--lotus-tx);font-weight:600">→ Full 3-Year Identity by pillar in Tab 06 — VTO Map</a></p>
    </details>
```

- [ ] **Step 3: Verify in browser**

Tab 7 → "Universal Mission → VTO → 5yr" heading. Confirm 3 mission rows remain (no 3yr metric rows). Confirm 4 KPI cards appear below with title/desc/tags.
Click **Edit** → confirm card titles, descriptions, and tags all become contenteditable spans. Change one → **Done** → reload → persists.

---

## Task 5: Add 3-Year Priority Section

**Files:**
- Modify: `GM Strat and Scoreboard/index.html` — insert new `<details>` block immediately after the Universal Mission `</details>` and before the existing 3-Year Roadmap `<details>` (around line 1581)

- [ ] **Step 1: Add y3PriHTML build block** (place it right after `y5KpiHTML` definition from Task 4)

```javascript
  const y3PriHTML = Y3.priorities.map((p,i) => `
    <div class="vto-mission-row" style="align-items:flex-start">
      <div class="vto-mission-lbl" style="min-width:110px;padding-top:2px">
        <span style="font-family:var(--fd);font-weight:700;font-size:12px;color:var(--lotus)">${p.pillar}</span><br>
        <span style="font-family:var(--fd);font-size:10px;color:var(--text-dim);font-style:italic">${ed('ec-y3-tag-'+i, p.tag)}</span>
      </div>
      <div class="vto-mission-txt" style="flex:1">
        <div style="font-size:12px;color:var(--text-hi)">${ed('ec-y3-id-'+i, p.identity)}</div>
        <div style="margin-top:5px;font-size:10.5px;color:var(--text-dim)">${ed('ec-y3-met-'+i, p.metrics)}</div>
      </div>
    </div>`).join('');
```

- [ ] **Step 2: Insert the 3-Year Priority `<details>` section in the template literal**

Find this line in the template (the start of the 3-Year Roadmap section):
```javascript
    <details class="sp-details">
      <summary class="sp-sum sh"><div class="shd"></div><h3>3-Year Roadmap — ${ed('ec-plan-start',Q12.plan_start)} to ${ed('ec-plan-end',Q12.plan_end)}</h3><div class="shl"></div></summary>
```

Insert the following BEFORE that line:
```javascript
    <details class="sp-details">
      <summary class="sp-sum sh"><div class="shd"></div><h3>3-Year Priority — Adv.I.S.E. — ${Q12.plan_start} to ${Q12.plan_end}</h3><div class="shl"></div></summary>
      <p class="sp-sec-sub">Where are we going in 3 years? One strategic priority per Adv.I.S.E. pillar.</p>
      <div class="q12-targets">
        <div class="q12-card"><div class="q12-card-lbl">Revenue Target</div><div class="q12-card-val">${ed('ec-t-rev',Q12.targets_3yr.revenue)}</div></div>
        <div class="q12-card"><div class="q12-card-lbl">EBITDA Target</div><div class="q12-card-val">${ed('ec-t-eb',Q12.targets_3yr.ebitda_pct)}</div></div>
        <div class="q12-card"><div class="q12-card-lbl">Occupancy Target</div><div class="q12-card-val">${ed('ec-t-occ',Q12.targets_3yr.occupancy)}</div></div>
        <div class="q12-card"><div class="q12-card-lbl">NPS Target</div><div class="q12-card-val">${ed('ec-t-nps',Q12.targets_3yr.nps)}</div></div>
      </div>
      <div class="vto-mission" style="margin-top:14px">${y3PriHTML}</div>
    </details>
```

> **Note:** The 3-year metric card IDs (`ec-t-rev`, `ec-t-eb`, `ec-t-occ`, `ec-t-nps`) are the same IDs already used by the 3-Year Roadmap section's `render3YearSection()` call. This is intentional — they share the same data (`Q12.targets_3yr`) and the same edit IDs. Do NOT create new IDs for these cards.

- [ ] **Step 3: Verify in browser**

Tab 7 → confirm new "3-Year Priority — Adv.I.S.E." section appears between "Universal Mission → VTO → 5yr" and "3-Year Roadmap".

Confirm it shows 4 revenue/EBITDA/Occupancy/NPS cards at top, then 4 Adv.I.S.E. pillar rows (Advocates, Innovators, Sages, Essentialists) with tag, identity, metrics.

Click **Edit** → confirm tag, identity, and metrics fields for each pillar become contenteditable. Change one → **Done** → reload → persists.

- [ ] **Step 4: Verify final Tab 7 section order**

Sections should appear in this order:
1. Universal Mission → VTO → 5yr
2. 3-Year Priority — Adv.I.S.E.
3. 3-Year Roadmap
4. 1-Year Priority (with dropdown Due/Status)
5. 1-Year Roadmap
6. North Star Metrics
7. Strategic Themes
8. Revenue Goals
9. Rallying Cry
10. Rocks & Projects Health — Live from LCC
11. Quarterly Rocks — Live from LCC

---

## Self-Review

**Spec coverage:**
- ✅ Universal Mission section trimmed to 5yr, 3yr rows removed
- ✅ 5-Year KPI cards added (Y5, editable)
- ✅ 3-Year Priority section with Adv.I.S.E. narrative added (Y3, editable)
- ✅ 1-Year Priority Due = quarter dropdown, Status = health dropdown
- ✅ All new fields editable when edit toggle is on
- ✅ All new fields persist via localStorage

**Placeholder scan:** None found — all code blocks are complete.

**Type consistency:**
- `Y5.kpis[i]` → fields: `title`, `desc`, `tags` — consistent across Task 1 (definition), Task 2 (save loop IDs `ec-y5-t-`, `ec-y5-d-`, `ec-y5-g-`), Task 4 (render `ed('ec-y5-t-'+i, k.title)`)
- `Y3.priorities[i]` → fields: `pillar`, `tag`, `identity`, `metrics` — consistent across Task 1, Task 2 (save IDs `ec-y3-tag-`, `ec-y3-id-`, `ec-y3-met-`), Task 5 (render `ed('ec-y3-tag-'+i, ...)`)
- `ec-t-rev` / `ec-t-eb` / `ec-t-occ` / `ec-t-nps` IDs shared with existing 3-Year Roadmap — intentional (same data)
