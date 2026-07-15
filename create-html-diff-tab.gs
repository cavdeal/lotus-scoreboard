// ================================================================
// create-html-diff-tab.gs
// Run: createHtmlDiffTab()
//
// Creates "v1.6 — HTML Diff" tab from wip VTO Map 2026 Jan 13.
// Checks every KPI in HTML Tab 03 (VTO Company) + Tab 04 (VTO Teams)
// against all cell values in the wip VTO Map.
// Any HTML KPI not found in the wip → appended at the bottom in TEAL.
//
// NOTE: The comparison is exact-match, case-insensitive.
//   - Renamed items may appear as false positives (wip uses old name)
//   - Tab 03 CN names may appear as false positives if wip uses
//     column headers or abbreviated forms
//   Review the popup list and confirm which are real gaps.
// ================================================================

function createHtmlDiffTab() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();

  // 1. Delete existing diff tab
  var existing = ss.getSheetByName('v1.6 — HTML Diff');
  if (existing) ss.deleteSheet(existing);

  // 2. Copy wip source
  var src = ss.getSheetByName('wip VTO Map 2026 Jan 13');
  if (!src) {
    SpreadsheetApp.getUi().alert('"wip VTO Map 2026 Jan 13" not found!');
    return;
  }
  var sheet = src.copyTo(ss);
  sheet.setName('v1.6 — HTML Diff');
  ss.moveActiveSheet(ss.getNumSheets());

  // 3. Build lookup from ALL wip cell values (case-insensitive, trimmed)
  var wipData = src.getDataRange().getValues();
  var wipSet = {};
  for (var r = 0; r < wipData.length; r++) {
    for (var c = 0; c < wipData[r].length; c++) {
      var v = (wipData[r][c] || '').toString().trim();
      if (v) wipSet[v.toLowerCase()] = true;
    }
  }

  // 4. HTML Tab 03 VTO — Company (10 Critical Numbers)
  var TAB03 = [
    {team:'Company — VTO Critical Numbers', type:'Lag',  kpi:'Occupancy % (Area)'},
    {team:'Company — VTO Critical Numbers', type:'Lag',  kpi:'Occupancy % (Unit)'},
    {team:'Company — VTO Critical Numbers', type:'Lag',  kpi:'Occupancy % (₱ Value)'},
    {team:'Company — VTO Critical Numbers', type:'Lag',  kpi:'Collection Rate %'},
    {team:'Company — VTO Critical Numbers', type:'Lag',  kpi:'EBITDA Margin'},
    {team:'Company — VTO Critical Numbers', type:'Lag',  kpi:'Net Profit (₱)'},
    {team:'Company — VTO Critical Numbers', type:'Lead', kpi:'Avg Daily Foot Traffic'},
    {team:'Company — VTO Critical Numbers', type:'Lead', kpi:'Venue Utilization %'},
    {team:'Company — VTO Critical Numbers', type:'Lead', kpi:'Community NPS'},
    {team:'Company — VTO Critical Numbers', type:'Lag',  kpi:'Operating Expenses'},
  ];

  // 5. HTML Tab 04 VTO — Teams (all 11 teams, ~195 KPIs)
  var TAB04 = [
    // A) Finance
    {team:'Finance Team', type:'Lag',        kpi:'Gross Revenue (₱)'},
    {team:'Finance Team', type:'Lag',        kpi:'Net Profit (₱)'},
    {team:'Finance Team', type:'Lead',       kpi:'Collection Rate (%)'},
    {team:'Finance Team', type:'Lag',        kpi:'EBITDA Margin (site-level)'},
    {team:'Finance Team', type:'Lag',        kpi:'Electricity Income (₱)'},
    {team:'Finance Team', type:'Lag',        kpi:'RDS Expense (₱)'},
    // B) Opportunity
    {team:'Opportunity',  type:'Lag',        kpi:'Occupancy % – Commercial (Unit)'},
    {team:'Opportunity',  type:'Lag',        kpi:'Occupancy % – Commercial (Area)'},
    {team:'Opportunity',  type:'Lag',        kpi:'Occupancy % – Commercial (₱ Value)'},
    {team:'Opportunity',  type:'Lead',       kpi:'# Prospects / Priority Vacant'},
    {team:'Opportunity',  type:'Lead',       kpi:'# Closed Prospects'},
    {team:'Opportunity',  type:'Lag',        kpi:'Business Beginners ≥25% (GLA)'},
    {team:'Opportunity',  type:'Lead',       kpi:'# Closed Reservation (Walk-in and Online)'},
    {team:'Opportunity',  type:'Lead',       kpi:'# Closed Inquiry / Offline Inquiries Received (Commercial)'},
    {team:'Opportunity',  type:'Lead',       kpi:'# Online Inquiries Scheduled for Ocular Visit'},
    {team:'Opportunity',  type:'Lead',       kpi:'Tenant Mix (Plan / KPI)'},
    {team:'Opportunity',  type:'Lead',       kpi:'% Planned vs Actual – Tenant Mix Plan'},
    {team:'Opportunity',  type:'Governance', kpi:'Tenant Requirements – % Complete & Updated'},
    {team:'Opportunity',  type:'Lag',        kpi:'Aversion Rate in Pull-out'},
    {team:'Opportunity',  type:'Lead',       kpi:'Koncepto – # Reservations (Conversion %) Pop-Up Event / month'},
    {team:'Opportunity',  type:'Lead',       kpi:'Koncepto – # Reservations (Conversion %) Pop-Up Temporary / month'},
    {team:'Opportunity',  type:'Lead',       kpi:'Client-Initiated Events – # Reservations (Conversion %)'},
    {team:'Opportunity',  type:'Governance', kpi:'% On time & Accurate — Community Compass (Opportunity)'},
    // C) Events & Gathering
    {team:'Events and Gathering', type:'Lead',       kpi:'Avg Daily Foot Traffic'},
    {team:'Events and Gathering', type:'Lead',       kpi:'Event Pipeline (weeks)'},
    {team:'Events and Gathering', type:'Lead',       kpi:'Venue Utilization %'},
    {team:'Events and Gathering', type:'Lead',       kpi:'# of 500+ pax events / month'},
    {team:'Events and Gathering', type:'Lead',       kpi:'# Mall Events Generated'},
    {team:'Events and Gathering', type:'Lag',        kpi:'Events & Gathering Expense (₱)'},
    {team:'Events and Gathering', type:'Lead',       kpi:'# Foot Traffic Generated'},
    {team:'Events and Gathering', type:'Lead',       kpi:'# Merchants Inquiry'},
    {team:'Events and Gathering', type:'Lead',       kpi:'# of Inquiries – Walk-in (Handaan Events)'},
    {team:'Events and Gathering', type:'Lag',        kpi:'Occupancy %: Venue – Hours Reserved'},
    {team:'Events and Gathering', type:'Lag',        kpi:'Occupancy %: Venue – PValue (₱)'},
    {team:'Events and Gathering', type:'Lag',        kpi:'Occupancy %: Handaan Events – PValue (₱)'},
    {team:'Events and Gathering', type:'Lag',        kpi:'Occupancy %: Koncepto – Unit'},
    {team:'Events and Gathering', type:'Lag',        kpi:'Occupancy %: Koncepto – PValue (₱)'},
    {team:'Events and Gathering', type:'Lag',        kpi:'Other Revenue (₱)'},
    {team:'Events and Gathering', type:'Governance', kpi:'% On time & Accurate – Community Compass (E&G)'},
    {team:'Events and Gathering', type:'Lead',       kpi:'# Handaan Events Generated'},
    {team:'Events and Gathering', type:'Lead',       kpi:'# of Closed Inquiry / Offline Inquiries Received: Gathering'},
    {team:'Events and Gathering', type:'Lead',       kpi:'# of Closed Prospects/Target Prospects: (Events) Handaan'},
    {team:'Events and Gathering', type:'Lead',       kpi:'# of Closed Prospects/Target Prospects: (Events) Client-Initiated'},
    {team:'Events and Gathering', type:'Lead',       kpi:'(NEW) Community Participation % (event attendance vs capacity)'},
    {team:'Events and Gathering', type:'Lag',        kpi:'(NEW) Belonging Index (NPS + repeat visits + membership/loyalty)'},
    // D) Operations
    {team:'Operations',  type:'Lag',        kpi:'STTACCK NPS / Community NPS'},
    {team:'Operations',  type:'Governance', kpi:'% Resolved: ICARE (OPR)'},
    {team:'Operations',  type:'Lead',       kpi:'Site Score %'},
    {team:'Operations',  type:'Lag',        kpi:'Electricity Expense'},
    {team:'Operations',  type:'Lead',       kpi:'% Onboarded Tenants (New + Existing)'},
    {team:'Operations',  type:'Lag',        kpi:'Parking Income (₱)'},
    {team:'Operations',  type:'Lag',        kpi:'Security Expenses (Agency)'},
    {team:'Operations',  type:'Lag',        kpi:'Manpower Expenses (All Agencies)'},
    {team:'Operations',  type:'Lag',        kpi:'Utility Maintenance Expenses (Agency)'},
    {team:'Operations',  type:'Lag',        kpi:'Water Expense'},
    {team:'Operations',  type:'Lag',        kpi:'Operating Expenses (Total)'},
    {team:'Operations',  type:'Lead',       kpi:'# of ICARE Addressed'},
    {team:'Operations',  type:'Lead',       kpi:'# of Insurance Claimed'},
    {team:'Operations',  type:'Lead',       kpi:'% Insurance Claimed vs Reported'},
    {team:'Operations',  type:'Lead',       kpi:'% Site Quality Score (by Ops Integrator)'},
    {team:'Operations',  type:'Governance', kpi:'% On time & Accurate: Tenant RDS'},
    {team:'Operations',  type:'Lead',       kpi:'% Planned vs Actual: Parking Layout'},
    {team:'Operations',  type:'Governance', kpi:'% Accurate & Updated: Tools & Equipment Masterlist (OPR)'},
    {team:'Operations',  type:'Governance', kpi:'% Accurate & Updated: Tools & Equipment Count (OPR)'},
    {team:'Operations',  type:'Governance', kpi:'% On time & Accurate – Issuance: Stock (OPR)'},
    {team:'Operations',  type:'Governance', kpi:'% Accurate & Updated: Inventory Masterlist (OPR)'},
    {team:'Operations',  type:'Governance', kpi:'% Accurate & Updated – Count: Inventory (OPR)'},
    {team:'Operations',  type:'Governance', kpi:'% On time & Accurate: Agency Regular Events'},
    {team:'Operations',  type:'Governance', kpi:'% On time & Accurate: Agency Regular Activities'},
    {team:'Operations',  type:'Governance', kpi:'% On time Completion: PM Checklist (OPR)'},
    // E) DCFM – Technical
    {team:'Technical Team', type:'Lead',       kpi:'# of Breakdowns – Engineering'},
    {team:'Technical Team', type:'Lag',        kpi:'MTTR (hours)'},
    {team:'Technical Team', type:'Lead',       kpi:'% On-time Completion – Projects'},
    {team:'Technical Team', type:'Lag',        kpi:'% Within Budget – Projects'},
    {team:'Technical Team', type:'Lag',        kpi:'Repairs & Maintenance Expense'},
    {team:'Technical Team', type:'Lag',        kpi:'FS Target: R&M (Labor) Expense'},
    {team:'Technical Team', type:'Lag',        kpi:'FS Target: R&M (Materials) Expense'},
    {team:'Technical Team', type:'Lag',        kpi:'# of Violations'},
    {team:'Technical Team', type:'Lag',        kpi:'Cost of Violation (₱)'},
    {team:'Technical Team', type:'Lead',       kpi:'# Projects Completed vs Planned – Special Projects (Management)'},
    {team:'Technical Team', type:'Lead',       kpi:'# Projects Completed vs Planned – Team & ICARE Projects'},
    {team:'Technical Team', type:'Lead',       kpi:'% Planned vs Actual – Projects (Technical)'},
    {team:'Technical Team', type:'Lead',       kpi:'% Planned vs Actual – Projects (Engineering)'},
    {team:'Technical Team', type:'Lead',       kpi:'% Planned vs Actual – Projects (Special)'},
    {team:'Technical Team', type:'Lead',       kpi:'% On time Completion – Projects (Engineering)'},
    {team:'Technical Team', type:'Lag',        kpi:'% Within Budget – Projects (Technical)'},
    {team:'Technical Team', type:'Lag',        kpi:'% Within Budget – Projects (Engineering)'},
    {team:'Technical Team', type:'Lag',        kpi:'% Within Budget – Projects (Special)'},
    {team:'Technical Team', type:'Lag',        kpi:'Project Budget vs Planned (overall)'},
    {team:'Technical Team', type:'Lag',        kpi:'Proj. Score % – PM'},
    {team:'Technical Team', type:'Lag',        kpi:'Score / Evaluation / NPS – Projects (Technical)'},
    {team:'Technical Team', type:'Lag',        kpi:'Score / Evaluation / NPS – Projects (Engineering)'},
    {team:'Technical Team', type:'Lag',        kpi:'Score / Evaluation / NPS – Projects (Special)'},
    {team:'Technical Team', type:'Governance', kpi:'% Accurate & Updated: SFML PT'},
    {team:'Technical Team', type:'Governance', kpi:'% Addressed: Team/Section ICARE'},
    {team:'Technical Team', type:'Lead',       kpi:'# System Changes Introduced (per quarter)'},
    {team:'Technical Team', type:'Governance', kpi:'% Complete & Updated: Project/Work Orders'},
    {team:'Technical Team', type:'Lead',       kpi:'% Planned vs Actual: Team/Section Targets Attained'},
    {team:'Technical Team', type:'Governance', kpi:'% Accurate & Updated: Team/Section PTs & DBs'},
    {team:'Technical Team', type:'Governance', kpi:'% Accurate & Updated: Team/Section Reports'},
    {team:'Technical Team', type:'Lead',       kpi:'% Planned vs Actual: JO (UM)'},
    // F) Marketing Communications
    {team:'Marcom',  type:'Lead',       kpi:'# Inquiries – Online (Strong Leads)'},
    {team:'Marcom',  type:'Lead',       kpi:'Engagement Rate (Ave)'},
    {team:'Marcom',  type:'Governance', kpi:'% Planned vs Actual — IAD/IAEC: BU and Sites'},
    {team:'Marcom',  type:'Lead',       kpi:'Net Follows (Social Media)'},
    {team:'Marcom',  type:'Lag',        kpi:'Marketing & Branding Expense (₱)'},
    {team:'Marcom',  type:'Lead',       kpi:'# Posts / Planned Posts'},
    {team:'Marcom',  type:'Governance', kpi:'% On time & Accurate: CIP'},
    {team:'Marcom',  type:'Lead',       kpi:'# Inquiries – Walk-in (Commercial Spaces)'},
    {team:'Marcom',  type:'Lead',       kpi:'# Inquiries – Walk-in (Events)'},
    {team:'Marcom',  type:'Lead',       kpi:'# Inquiries – Online (Strong Leads for Events)'},
    {team:'Marcom',  type:'Lead',       kpi:'# Scheduled for Ocular (Commercial)'},
    {team:'Marcom',  type:'Lead',       kpi:'# Scheduled for Ocular (Events)'},
    {team:'Marcom',  type:'Lead',       kpi:'% Increase: Facebook Page Reach (per Month per Page)'},
    {team:'Marcom',  type:'Lead',       kpi:'% Increase: Facebook Page Followers (per Month per Page)'},
    {team:'Marcom',  type:'Lead',       kpi:'# of Inquiries: Offline for (Commercial Spaces)'},
    {team:'Marcom',  type:'Lead',       kpi:'# of Inquiries: Offline for Gatherings (Event Venues)'},
    {team:'Marcom',  type:'Lead',       kpi:'# of Inquiries: Offline for Gatherings (Sports Arena)'},
    {team:'Marcom',  type:'Lead',       kpi:'# of Inquiries: Offline for Gatherings (Handaan)'},
    {team:'Marcom',  type:'Lead',       kpi:'# of Inquiries: Offline for Gatherings (HCafe)'},
    {team:'Marcom',  type:'Lead',       kpi:'# of Inquiries: Offline for Gatherings (SS)'},
    {team:'Marcom',  type:'Lead',       kpi:'# of Inquiries: Offline for Gatherings (KS)'},
    {team:'Marcom',  type:'Lead',       kpi:'# of Inquiries: Offline for Gatherings (PS)'},
    {team:'Marcom',  type:'Lead',       kpi:'# of Inquiries: Offline for Gatherings (Studio)'},
    // G) IT
    {team:'IT Team', type:'Lead',       kpi:'# of Breakdowns – IT Dept'},
    {team:'IT Team', type:'Lead',       kpi:'Office LAN & WiFi Connectivity'},
    {team:'IT Team', type:'Lead',       kpi:'Accounting Software Connectivity'},
    {team:'IT Team', type:'Lag',        kpi:'Repairs & Maintenance Expenses (₱)'},
    {team:'IT Team', type:'Lag',        kpi:'Laptop / Desktop Procurement'},
    {team:'IT Team', type:'Governance', kpi:'Assets (Laptop / Desktop / Hard Drives / Printers)'},
    {team:'IT Team', type:'Governance', kpi:'Office Equipment Preventive Maintenance'},
    {team:'IT Team', type:'Governance', kpi:'Office Equipment Inventory'},
    {team:'IT Team', type:'Governance', kpi:'Websites Update (LotusDevt / LotuszenHub / Handaan / Playspacio)'},
    {team:'IT Team', type:'Governance', kpi:'% Complete & Updated: KDB'},
    {team:'IT Team', type:'Governance', kpi:'% Complete & Updated: OAML'},
    // H) DCFM – Construction
    {team:'Construction Team', type:'Lead', kpi:'# Projects Completed vs Planned'},
    {team:'Construction Team', type:'Lag',  kpi:'Time-to-Launch (months)'},
    {team:'Construction Team', type:'Lag',  kpi:'Project Budget vs Planned (BOQ)'},
    {team:'Construction Team', type:'Lag',  kpi:'Landscape & Plant Propagation'},
    {team:'Construction Team', type:'Lag',  kpi:'Project Budget vs Planned (overall DCD)'},
    {team:'Construction Team', type:'Lag',  kpi:'Approved BOQ Budget'},
    {team:'Construction Team', type:'Lead', kpi:'# Projects Completed vs Planned – Landscape ICARE (Site)'},
    {team:'Construction Team', type:'Lead', kpi:'# Projects Completed vs Planned – Innovation / Special Project (ISP)'},
    {team:'Construction Team', type:'Lag',  kpi:'Proj. Score % – DCD'},
    {team:'Construction Team', type:'Lead', kpi:'% Planned vs Actual: JO (All Works)'},
    // I) LRAD
    {team:'LRAD', type:'Lag',        kpi:'Attrition Rate'},
    {team:'LRAD', type:'Governance', kpi:'L10 Weekly Compliance Rate (All Teams)'},
    {team:'LRAD', type:'Lead',       kpi:'Autonomy Score Growth'},
    {team:'LRAD', type:'Lead',       kpi:'% Teammembers "Green" on Role Readiness'},
    {team:'LRAD', type:'Lag',        kpi:'Lotuszens NPS'},
    {team:'LRAD', type:'Lag',        kpi:'Salary Expense (₱)'},
    {team:'LRAD', type:'Lead',       kpi:'% Complete vs Planned: Lotuszen Activities'},
    {team:'LRAD', type:'Governance', kpi:'Updated & Accurate: LMDB Stories & Scores'},
    {team:'LRAD', type:'Governance', kpi:'Updated & Accurate: LMDB & Lotuszen Hub'},
    {team:'LRAD', type:'Governance', kpi:'% Complete & Updated: L10 Module'},
    {team:'LRAD', type:'Lead',       kpi:'L10 Attendance Rate'},
    {team:'LRAD', type:'Governance', kpi:'% Complete & Updated: Leadership Pipeline Module'},
    {team:'LRAD', type:'Lead',       kpi:'Playbook Contributions per Team (per month)'},
    {team:'LRAD', type:'Lead',       kpi:'# Playbook Entries / Month'},
    {team:'LRAD', type:'Lead',       kpi:'Self Check-In Rate'},
    {team:'LRAD', type:'Lag',        kpi:'Team Meeting Rating'},
    {team:'LRAD', type:'Lag',        kpi:'Avg L10 Quality Score'},
    {team:'LRAD', type:'Lag',        kpi:'Avg Self Autonomy Score'},
    {team:'LRAD', type:'Lead',       kpi:'Readiness / Promotion'},
    {team:'LRAD', type:'Governance', kpi:'% Playbook Completed'},
    // J) Quality / SID / SMD
    {team:'Quality Team', type:'Governance', kpi:'% On-time & Accurate: RP'},
    {team:'Quality Team', type:'Lead',       kpi:'% Planned vs Actual: SID Projects'},
    {team:'Quality Team', type:'Lead',       kpi:'# System Changes per Quarter'},
    {team:'Quality Team', type:'Lead',       kpi:'# Projects Completed vs Planned – SMD & SID'},
    {team:'Quality Team', type:'Lag',        kpi:'Project Rating % – FSC'},
    {team:'Quality Team', type:'Governance', kpi:'% Complete & Updated: LotusOS (RP / PM / LMDB)'},
    {team:'Quality Team', type:'Governance', kpi:'% Complete: LotusOS Activities (Business Planning / Mgmt Review / Internal Audit)'},
    {team:'Quality Team', type:'Governance', kpi:'% KDB On-time'},
    {team:'Quality Team', type:'Lead',       kpi:'% SMD Project Completion'},
    {team:'Quality Team', type:'Lead',       kpi:'% Planned vs Actual – SMD Projects'},
    {team:'Quality Team', type:'Governance', kpi:'% Addressed: Team ICARE'},
    {team:'Quality Team', type:'Governance', kpi:'% Complete & Updated: Work Orders'},
    {team:'Quality Team', type:'Lead',       kpi:'% SID Projects On-time'},
    {team:'Quality Team', type:'Governance', kpi:'% PT DB On-time'},
    {team:'Quality Team', type:'Governance', kpi:'% PT DB Complete'},
    {team:'Quality Team', type:'Governance', kpi:'% Accurate & Updated: Team/Section PTs & DBs'},
    {team:'Quality Team', type:'Governance', kpi:'% Accurate & Updated: Team/Section Reports'},
    {team:'Quality Team', type:'Lag',        kpi:'Score / Evaluation / NPS: SID Projects'},
    {team:'Quality Team', type:'Lag',        kpi:'Score / Evaluation / NPS: SMD Projects'},
    // K) SMA — Governance
    {team:'SMA', type:'Governance', kpi:'LotusOS Adoption %'},
    {team:'SMA', type:'Governance', kpi:'L10 Quality Score (1–10)'},
    {team:'SMA', type:'Governance', kpi:'% Addressed: ICARE'},
    {team:'SMA', type:'Governance', kpi:'ICARE Resolved <72 Hours %'},
    {team:'SMA', type:'Governance', kpi:'% On time & Accurate: LDApp Module Audit'},
    {team:'SMA', type:'Governance', kpi:'% On time & Accurate: PropMan Module'},
    {team:'SMA', type:'Governance', kpi:'% Complete & Updated: LotusOS (All LDApps)'},
    {team:'SMA', type:'Lead',       kpi:'% Complete & Updated: LDPM Module'},
    {team:'SMA', type:'Lead',       kpi:'% Complete & Updated: LDApps Module'},
    {team:'SMA', type:'Governance', kpi:'% On time & Accurate: LDPM Module'},
    {team:'SMA', type:'Lead',       kpi:'% Complete & Updated: ICARE Module'},
  ];

  // 6. Combine and find missing KPIs
  var allHtmlKpis = TAB03.concat(TAB04);
  var missing = [];

  for (var i = 0; i < allHtmlKpis.length; i++) {
    var item = allHtmlKpis[i];
    var key = item.kpi.toString().toLowerCase().trim();
    if (!wipSet[key]) {
      missing.push(item);
    }
  }

  // 7. Append missing items at the bottom of the new tab
  var DIFF_BG = '#006064';  // Dark teal — distinct from orange, green, magenta used elsewhere
  var DIFF_FG = '#FFFFFF';

  var lastRow = sheet.getLastRow();

  if (missing.length === 0) {
    SpreadsheetApp.getUi().alert(
      'No differences found!\n' +
      'All HTML Tab 03 + Tab 04 KPIs are present in the wip VTO Map.'
    );
    return;
  }

  // Section header
  lastRow += 2;
  var headerCell = sheet.getRange(lastRow, 16);
  headerCell.setValue('── HTML-ONLY KPIs: in HTML (Tab 03 + Tab 04) but NOT found in wip VTO Map ──');
  headerCell.setFontWeight('bold');
  headerCell.setFontColor('#B71C1C');
  headerCell.setFontSize(11);
  lastRow += 1;

  for (var j = 0; j < missing.length; j++) {
    var row = lastRow + j;
    sheet.getRange(row, 16).setValue(missing[j].team);
    sheet.getRange(row, 17).setValue(missing[j].type);
    sheet.getRange(row, 18).setValue(missing[j].kpi);
    var rng = sheet.getRange(row, 16, 1, 3);
    rng.setBackground(DIFF_BG);
    rng.setFontColor(DIFF_FG);
    rng.setFontWeight('bold');
    rng.setFontSize(11);
  }

  // 8. Summary popup (capped at 20 items to avoid truncation)
  var preview = missing.slice(0, 20).map(function(x) {
    return '  [' + x.team + '] ' + x.kpi;
  }).join('\n');

  var msg =
    'Done! "v1.6 — HTML Diff" created.\n\n' +
    missing.length + ' HTML KPI(s) not found in wip VTO Map:\n\n' +
    preview +
    (missing.length > 20 ? '\n  ... and ' + (missing.length - 20) + ' more (see sheet)' : '') +
    '\n\n' +
    'REVIEW: Some may be renames (wip uses old name) or\n' +
    'Tab 03 headers (wip stores as column labels, not cell values).';

  SpreadsheetApp.getUi().alert(msg);
}
