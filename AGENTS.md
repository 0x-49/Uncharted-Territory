# Uncharted-Territory - Agent Rules

## Project Overview
Trading education landing page (Next.js static export). Sells trading courses/services via 15 sections.

---

## VERIFICATION FIRST (MOST IMPORTANT)
Every task MUST include verification criteria BEFORE implementation.

### Task Template
```
Task: [Specific thing to do]
Files: @component.tsx
Verification:
1. Run: npm run build
2. Expected: Build succeeds, no errors
3. Check: localhost:3480 looks correct
```

---

## Tech Stack
| Category | Choice |
|----------|--------|
| Framework | Next.js 14 (static export) |
| Language | TypeScript |
| Styling | Tailwind CSS |
| UI Pattern | Component sections in /src/components/sections/ |

---

## Build Commands
```bash
npm run dev     # Dev server on port 3480
npm run build   # Static export to /out
npm run lint    # Linting
```
**Dev server**: `npm run dev -- -H 0.0.0.0 -p 3480`
**If port busy**: Try 3481, 3482, 3483 (always +1)

---

## Twitter Data Workflow
This project analyzes Twitter trading data.

### Files
- `TwExport_braczyy_Posts.csv` - Raw Twitter export
- `analyze_tweets.py` - Python analysis script

### Run Analysis
```bash
python analyze_tweets.py
```
Output: Top 60 tickers mentioned + sample tweet texts

### Adding New Data
1. Export Twitter data as CSV
2. Replace `TwExport_braczyy_Posts.csv`
3. Run `python analyze_tweets.py`
4. Update site content if needed

---

## Site Structure
```
src/app/page.jsx     # Main page (15 sections)
src/components/
  layout/            # Navigation.jsx, Footer.jsx
  sections/          # Hero, Ticker, PainSection, Features, etc.
  ErrorBoundary.jsx  # Error handling wrapper
src/constants/index.js  # Site constants
```

### Adding a New Section
1. Create `@/components/sections/NewSection.jsx`
2. Import in `src/app/page.jsx`
3. Add to `<main>` after relevant section
4. Test: `npm run dev` → Check on port 3480

---

## Component Conventions
```jsx
export default function SectionName() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        {/* content */}
      </div>
    </section>
  )
}
```

---

## Git Workflow
1. `git checkout -b feat/[name]`
2. Make changes
3. `npm run build` (verify)
4. `git add .`
5. `git commit -m "feat: [description]"`
6. Verify identity: `git config --global user.email` → should be `maximeyao12345@gmail.com`
7. `git push origin feat/[name]`

---

## GitHub Identity
- **Username**: `0x-49`
- **Email**: `maximeyao12345@gmail.com`
- Push to: `github.com/0x-49/uncharted-territory.git`

---

## Context Management
**When to `/clear` and start fresh:**
- After completing a section
- When corrections exceed 2 attempts
- When switching tasks
- End of session

**Keep this file under 150 lines. Delete rules the AI already follows.**

---

## Gotchas
- `tsconfig.json` MUST have `paths: {"@/*": ["./src/*"]}` and `baseUrl: "."` for imports to resolve
- If build fails with "Module not found" for `@/components/*`, check tsconfig.json paths
- TypeScript 6+ requires `ignoreDeprecations: "6.0"` with `baseUrl`

---

## Port Management
- Home port: 3480
- If busy: +1, +2, +3
- To check: `lsof -i :3480,3481,3482 2>/dev/null | grep LISTEN`
- To kill: `lsof -ti:<port> | xargs kill -9`
