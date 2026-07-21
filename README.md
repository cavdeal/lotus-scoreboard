# GM Strat and Scoreboard

This is the GM/MD scoreboard for Lotus. It shows one page with 8 tabs. Each tab shows numbers the team needs to check every week.

## What is live

`index.html` is the real app. It is one file. When you push it to the `main` branch, GitHub Pages puts it live at:

**cavdeal.github.io/lotus-scoreboard**

Do not edit `index.html` by hand unless you mean to change the live site.

## What each file does

- `index.html` — the live scoreboard app. All 8 tabs, all KPI numbers, login, and edit mode live here.
- `GM-MD-Integrated-Scoreboard-MASTER-2026-07-21.md` — the master plan doc. Explains what each tab is for and why, and includes a technical build spec so the app can be rebuilt from this file alone. Renamed with an edit-date suffix each time it's updated — check the date against `git log -1 -- index.html` if you're unsure it's current.
- `run-all-tab-updates.gs`, `create-v15-tab.gs`, `create-html-diff-tab.gs` — Google Apps Script helper scripts. They run inside the Google Sheet that tracks KPIs, not inside the website. Use them to check the Sheet and the website still match.
- `Draft/` — old backup copies of the app and dated archives of past master-doc versions. Do not delete or edit these. They are kept for safety only.
- `docs/superpowers/` — planning notes from past work sessions.

## How to make a change

1. Make a new branch (do not edit `main` directly).
2. Change `index.html`.
3. Test it: run `python3 -m http.server 8080` in this folder, then open `http://localhost:8080` in a browser.
4. When it looks right, merge to `main` and push. GitHub Pages updates the live site in 1–2 minutes.
