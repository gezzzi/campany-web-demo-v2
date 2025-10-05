# Repository Guidelines

## Project Structure & Module Organization
- `src/app/` contains the Next.js App Router tree. Key files: `layout.tsx` for global chrome, `page.tsx` for the landing page replica, and `globals.css` for shared styles.
- `public/images/` stores locally cached assets mirrored from the reference site. Keep filenames lowercase with hyphens; optimize size before replacing.
- `reference/` holds `tosounemoto.html`, the captured source of the original site for design parity. Do not ship this folder to production builds.
- Configuration lives at the root (`next.config.ts`, `tsconfig.json`, `eslint.config.mjs`). Adjust these before adding new frameworks or build tools.

## Build, Test, and Development Commands
- `npm run dev` — launches the Next.js development server at `http://localhost:3000/` with hot reload.
- `npm run build` — creates the production build; run before deployment to catch type and compilation issues.
- `npm run lint` — executes ESLint with the project configuration; required prior to raising a PR.

## Coding Style & Naming Conventions
- TypeScript with strict typing; prefer explicit interfaces/types for new data structures.
- Components follow PascalCase in filenames (e.g. `HeroSection.tsx`) and reside near their usage inside `src/app` route segments.
- Use Tailwind utility classes for layout/spacing; fall back to `globals.css` for cross-cutting tokens (colors, typography).
- Run `npm run lint` after edits; it enforces the configured ESLint/Next.js rules.

## Testing Guidelines
- No automated tests are present yet. When adding tests, place them under `src/__tests__/` and use Jest with React Testing Library.
- Name test files `<component>.test.tsx`; ensure they run with `npm test` once the script is added.

## Commit & Pull Request Guidelines
- Craft commits in imperative mood (e.g. `Add hero CTA animation`). Group related changes and avoid mixed concerns.
- Pull requests must include: summary of changes, testing evidence (command output or screenshots), and links to relevant tasks/issues.
- Re-run `npm run lint` and `npm run build` before requesting review; attach notable UI screenshots for visual updates.

## Security & Configuration Tips
- Never commit environment secrets. Use `.env.local` (ignored by Git) for API keys or service tokens.
- Verify external embeds (e.g. Google Maps iframes) are allowed in target deployment environments.
