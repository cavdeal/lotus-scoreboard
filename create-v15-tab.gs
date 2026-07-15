// =============================================================
// Lotus Scoreboard v1.5 — VTO Map Tab Builder
// Creates "v1.5" tab from "wip VTO Map 2026 Jan 13":
//   - Clears cols 7-15 (company-level tiers, not scoreboard)
//   - Keeps Finance + LRAD rows in cols 7-15 (they ARE scoreboard)
//   - Colors all scoreboard cells (cols 16-21) deep magenta
//   - Adds % Planned vs Actual: JO (UM) for Technical Team
// =============================================================

function createV15Tab() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();

  // --- 1. Delete v1.5 if it already exists ---
  var existing = ss.getSheetByName('v1.5');
  if (existing) ss.deleteSheet(existing);

  // --- 2. Copy source tab ---
  var src = ss.getSheetByName('wip VTO Map 2026 Jan 13');
  if (!src) {
    SpreadsheetApp.getUi().alert('Source sheet "wip VTO Map 2026 Jan 13" not found!');
    return;
  }
  var sheet = src.copyTo(ss);
  sheet.setName('v1.5');
  ss.moveActiveSheet(ss.getNumSheets());

  // --- Colors ---
  var POP_BG = '#AD1457';  // Deep magenta — does not exist in original sheet
  var POP_FG = '#FFFFFF';  // White text

  // --- 3. Read all data ---
  var data = sheet.getDataRange().getValues();
  var numRows = data.length;

  var clearList = [];
  var colorList = [];

  for (var r = 0; r < numRows; r++) {
    // Check if Finance Team or LRAD appears in cols 7-15 (0-indexed: 6-14)
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
        // Cols 7-15: company-level measurement tiers
        if (isSpecialTeam) {
          // Finance/LRAD: keep KPI value cells, color them (not the team name / type labels)
          if (!isTypeLabel(cellVal)) {
            colorList.push(a1);
          }
        } else {
          // Not a scoreboard-relevant column for this team — clear it
          clearList.push(a1);
        }
      } else if (c >= 15 && c <= 20) {
        // Cols 16-21: TL Lead + TM SC — all scoreboard, color everything
        colorList.push(a1);
      }
      // Cols 1-6 (metadata/vision) and cols 22+ (plans/rocks): leave untouched
    }
  }

  // --- 4. Apply clear in batches ---
  applyBatch(clearList, function(batch) {
    sheet.getRangeList(batch).clearContent();
  });

  // --- 5. Apply pop color in batches ---
  applyBatch(colorList, function(batch) {
    var rl = sheet.getRangeList(batch);
    rl.setBackground(POP_BG);
    rl.setFontColor(POP_FG);
    rl.setFontWeight('bold');
    rl.setFontSize(11);
  });

  // --- 6. Add JO (UM) for Technical Team (in HTML/MD but not in CSV cols 16-18) ---
  var lastTechRow = -1;
  for (var r = 0; r < numRows; r++) {
    if ((data[r][15] || '').toString().trim() === 'Technical Team') {
      lastTechRow = r;
    }
  }
  if (lastTechRow >= 0) {
    var insertAt = lastTechRow + 2; // 1-indexed: one row after last tech row
    sheet.insertRowBefore(insertAt);
    sheet.getRange(insertAt, 16).setValue('Technical Team');
    sheet.getRange(insertAt, 17).setValue('Lead');
    sheet.getRange(insertAt, 18).setValue('% Planned vs Actual: JO (UM)');
    var newRange = sheet.getRange(insertAt, 16, 1, 3);
    newRange.setBackground(POP_BG);
    newRange.setFontColor(POP_FG);
    newRange.setFontWeight('bold');
    newRange.setFontSize(11);
  }

  SpreadsheetApp.getUi().alert(
    'v1.5 tab created!\n\n' +
    'MAGENTA (#AD1457) = KPIs in HTML scoreboard + MD\n' +
    'Cols 7-15 cleared (company-level tiers removed)\n' +
    'Finance & LRAD rows preserved in cols 7-15\n' +
    '% Planned vs Actual: JO (UM) added to Technical Team'
  );
}

// --- Helpers ---

function isTypeLabel(v) {
  var labels = ['Finance Team', 'LRAD', 'Lag', 'Lead', 'Governance', 'None', 'Oppotunity', 'Events and Gathering'];
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
  var BATCH = 500;
  for (var i = 0; i < list.length; i += BATCH) {
    var batch = list.slice(i, i + BATCH);
    if (batch.length > 0) fn(batch);
  }
}
