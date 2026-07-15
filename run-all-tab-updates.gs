// =============================================================
// RUN THIS ONCE — updates all 3 tabs in VTO MAP CN KPIs sheet
//
// Function: runAllTabUpdates()
//
// What it does:
//   TAB 1 "VTO Map v1.4 — Scoreboard Updates"
//     → Orange bold = 4 cells renamed in scoreboard
//     → Green bold  = 28 cells added to scoreboard
//
//   TAB 2 "v1.5" (created fresh from wip VTO Map 2026 Jan 13)
//     → Deep magenta = all ~195 scoreboard KPIs
//     → Cols 7-15 cleared (company-level data removed)
//     → Finance + LRAD rows kept (they ARE scoreboard KPIs)
//     → JO (UM) added to Technical Team
// =============================================================

function runAllTabUpdates() {
  highlightV14();
  createV15();
  SpreadsheetApp.getUi().alert(
    'All done!\n\n' +
    '"VTO Map v1.4 — Scoreboard Updates"\n' +
    '  Orange = 4 renamed cells\n' +
    '  Green  = 28 newly added cells\n\n' +
    '"v1.5" tab (new)\n' +
    '  Magenta = all scoreboard KPIs\n' +
    '  Non-scoreboard company data removed'
  );
}


// ─────────────────────────────────────────────
// PART 1 — Highlight v1.4 tab
// ─────────────────────────────────────────────

function highlightV14() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName('VTO Map v1.4 — Scoreboard Updates');
  if (!sheet) return;

  var ORANGE    = '#BF4500';
  var ORANGE_BG = '#FFF3E0';
  var GREEN     = '#1A6B2A';
  var GREEN_BG  = '#E8F5E9';

  var renames = [
    '# of ICARE Addressed',
    '% Planned vs Actual - IAD : BU and Sites',
    '% Planned vs Actual - IAEC : BU and Sites',
    '% On time & Accurate : IAEC : BU and Sites'
  ];

  var additions = [
    '% On time & Accurate - Community Compass (Opportunity)',
    '# of Closed Inquiry/Offline Inquiries Received : Gathering',
    '# of Closed Prospects/Target Prospects : (Events) Handaan',
    '# of Closed Prospects/Target Prospects : (Events) Client-Initiated',
    '(NEW) Community Participation % (event attendance vs capacity).',
    '(NEW) Belonging Index (a composite of NPS + repeat visits + membership/loyalty).',
    '% Insurance Claimed vs Reported',
    '% Increase : Facebook Page Reach (per Month per Page)',
    '% Increase : Facebook Page Followers (per Month per Page)',
    '# of Inquiries : Offline for (Commercial Spaces)',
    '# of Inquiries : Offline for Gatherings (Event Venues)',
    '# of Inquiries : Offline for Gatherings (Sports Arena)',
    '# of Inquiries : Offline for Gatherings (Handaan)',
    '# of Inquiries : Offline for Gatherings (HCafe)',
    '# of Inquiries : Offline for Gatherings (SS)',
    '# of Inquiries : Offline for Gatherings (KS)',
    '# of Inquiries : Offline for Gatherings (PS)',
    '# of Inquiries : Offline for Gatherings (Studio)',
    'OAML',
    'KDB',
    '% Planned vs Actual : JO (MST)',
    '% Planned vs Actual : JO (E&D Fab)',
    'Score/Evaluation/NPS : SMD Projects',
    'Score/Evaluation/NPS : SID Projects',
    '% Complete & Updated : LDPM Module',
    '% Complete & Updated : LDApps Module',
    '% Complete & Updated : ICARE Module',
    '% On time & Accurate : LDPM Module'
  ];

  var data = sheet.getDataRange().getValues();
  var numRows = data.length;
  var numCols = data[0].length;

  var orangeList = [];
  var greenList  = [];

  for (var r = 0; r < numRows; r++) {
    for (var c = 0; c < numCols; c++) {
      if (!data[r][c]) continue;
      var val = data[r][c].toString().trim();

      var isRename = false;
      for (var i = 0; i < renames.length; i++) {
        if (val === renames[i]) { isRename = true; break; }
      }
      if (isRename) { orangeList.push(toA1(r+1, c+1)); continue; }

      for (var j = 0; j < additions.length; j++) {
        if (val === additions[j]) { greenList.push(toA1(r+1, c+1)); break; }
      }
    }
  }

  applyBatch(orangeList, function(batch) {
    var rl = sheet.getRangeList(batch);
    rl.setFontColor(ORANGE);
    rl.setFontWeight('bold');
    rl.setFontSize(11);
    rl.setBackground(ORANGE_BG);
  });

  applyBatch(greenList, function(batch) {
    var rl = sheet.getRangeList(batch);
    rl.setFontColor(GREEN);
    rl.setFontWeight('bold');
    rl.setFontSize(11);
    rl.setBackground(GREEN_BG);
  });
}


// ─────────────────────────────────────────────
// PART 2 — Create v1.5 tab
// ─────────────────────────────────────────────

function createV15() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();

  var existing = ss.getSheetByName('v1.5');
  if (existing) ss.deleteSheet(existing);

  var src = ss.getSheetByName('wip VTO Map 2026 Jan 13');
  if (!src) return;

  var sheet = src.copyTo(ss);
  sheet.setName('v1.5');
  ss.moveActiveSheet(ss.getNumSheets());

  var POP_BG = '#AD1457';
  var POP_FG = '#FFFFFF';

  var data = sheet.getDataRange().getValues();
  var numRows = data.length;

  var clearList = [];
  var colorList = [];

  for (var r = 0; r < numRows; r++) {
    var isSpecialTeam = false;
    for (var c = 6; c <= 14; c++) {
      var v = (data[r][c] || '').toString().trim();
      if (v === 'Finance Team' || v === 'LRAD') {
        isSpecialTeam = true;
        break;
      }
    }

    for (var c = 0; c < Math.min(data[r].length, 21); c++) {
      if (!data[r][c]) continue;
      var cellVal = (data[r][c] || '').toString().trim();
      if (!cellVal) continue;
      var a1 = toA1(r + 1, c + 1);

      if (c >= 6 && c <= 14) {
        if (isSpecialTeam) {
          if (!isTypeLabel(cellVal)) colorList.push(a1);
        } else {
          clearList.push(a1);
        }
      } else if (c >= 15 && c <= 20) {
        colorList.push(a1);
      }
    }
  }

  applyBatch(clearList, function(batch) {
    sheet.getRangeList(batch).clearContent();
  });

  applyBatch(colorList, function(batch) {
    var rl = sheet.getRangeList(batch);
    rl.setBackground(POP_BG);
    rl.setFontColor(POP_FG);
    rl.setFontWeight('bold');
    rl.setFontSize(11);
  });

  // Add JO (UM) for Technical Team
  var lastTechRow = -1;
  for (var r = 0; r < numRows; r++) {
    if ((data[r][15] || '').toString().trim() === 'Technical Team') {
      lastTechRow = r;
    }
  }
  if (lastTechRow >= 0) {
    var insertAt = lastTechRow + 2;
    sheet.insertRowBefore(insertAt);
    sheet.getRange(insertAt, 16).setValue('Technical Team');
    sheet.getRange(insertAt, 17).setValue('Lead');
    sheet.getRange(insertAt, 18).setValue('% Planned vs Actual: JO (UM)');
    var nr = sheet.getRange(insertAt, 16, 1, 3);
    nr.setBackground(POP_BG);
    nr.setFontColor(POP_FG);
    nr.setFontWeight('bold');
    nr.setFontSize(11);
  }
}


// ─────────────────────────────────────────────
// Shared helpers
// ─────────────────────────────────────────────

function isTypeLabel(v) {
  var labels = ['Finance Team','LRAD','Lag','Lead','Governance','None','Oppotunity','Events and Gathering'];
  return labels.indexOf(v) !== -1;
}

function toA1(row, col) {
  var letter = '';
  var c = col;
  while (c > 0) {
    var rem = (c - 1) % 26;
    letter = String.fromCharCode(65 + rem) + letter;
    c = Math.floor((c - 1) / 26);
  }
  return letter + row;
}

function applyBatch(list, fn) {
  for (var i = 0; i < list.length; i += 500) {
    var batch = list.slice(i, i + 500);
    if (batch.length > 0) fn(batch);
  }
}
