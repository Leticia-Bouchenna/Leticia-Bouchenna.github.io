# Portfolio Finishing Report

Date: 23 July 2026

## Result

The validated portfolio structure and hero composition were preserved. This finishing phase improves typography, viewport motion, navigation state, card depth, theme consistency, project presentation, academic content, credentials, contact composition and the footer without replacing the template or changing Leticia’s validated identity, projects, experiences or metrics.

## Exact files changed in this phase

### Root and configuration

- `package.json`
- `package-lock.json`
- `README.md`
- `TODO_ASSETS.md`
- `TODO_LINKS.md`
- `DELIVERY_REPORT.md`

### Application

- `src/App.tsx`
- `src/index.tsx`
- `src/index.scss`
- `src/data/portfolioData.ts`
- `src/types/portfolio.ts`
- `src/hooks/useScrollReveal.ts` — added

### Components

- `src/components/About.tsx`
- `src/components/CertificationCard.tsx` — added
- `src/components/Contact.tsx`
- `src/components/CredentialModal.tsx` — added
- `src/components/Education.tsx`
- `src/components/Expertise.tsx`
- `src/components/FadeIn.tsx`
- `src/components/Footer.tsx`
- `src/components/Navigation.tsx`
- `src/components/Project.tsx`
- `src/components/TechStack.tsx`
- `src/components/Timeline.tsx`
- `src/components/index.ts`
- `src/components/Achievements.tsx` — removed

### Styles

- `src/assets/styles/About.scss`
- `src/assets/styles/Contact.scss`
- `src/assets/styles/Education.scss`
- `src/assets/styles/Expertise.scss`
- `src/assets/styles/Footer.scss`
- `src/assets/styles/Main.scss`
- `src/assets/styles/Project.scss`
- `src/assets/styles/TechStack.scss`
- `src/assets/styles/Timeline.scss`
- `src/assets/styles/Achievements.scss` — removed

### Media

- `src/assets/images/certifications/ai-engineer-core-track.jpg` — added
- `src/assets/images/certifications/python-data-science-bootcamp.jpg` — added
- `src/assets/images/certifications/ai-expo-2026-participation.jpg` — added and optimized
- `src/assets/images/certifications/english-speaking-club.jpeg` — added
- `src/assets/images/projects/alerte-ia/visual-pending.svg` — removed
- `docs/screenshots/v2/` — complete new visual evidence set
- Obsolete V1 screenshot folders — removed after V2 validation

## Fonts

Two local font families are installed through `@fontsource`; the rendered site does not depend on an external font URL.

- Manrope 600, 700 and 800 for headings and strong identity text
- Inter 400, 500 and 600 for paragraphs, navigation and interface text

The system monospace stack remains limited to dates, section numbers, categories and technical badges.

## Motion and interactions

- Each top-level section now reveals when it enters the viewport instead of animating only during initial page load.
- About indicators reveal sequentially.
- Expertise cards reveal by row and use icon, border, shadow and elevation feedback.
- Technology logos reveal progressively, remain still at rest and receive restrained hover emphasis.
- Timeline cards enter alternately from the left and right.
- The timeline line gains a cyan-to-purple progress layer tied to page scroll.
- Featured project media and copy reveal from opposite sides.
- Project metrics and Additional Projects reveal sequentially.
- Credential cards reveal sequentially.
- Contact copy and contact card reveal from opposite sides.
- Buttons, arrows, badges, logos and cards use consistent hover transitions.
- `prefers-reduced-motion: reduce` disables reveal movement and smooth scrolling while keeping every element visible.

## Navigation

- The compact navigation remains visible while scrolling.
- Transparent background, blur and saturation are applied at the top.
- A subtle border and shadow appear after scrolling.
- The active section is calculated from real document coordinates and marked with `aria-current="page"`.
- Active desktop and mobile items receive a restrained cyan state.
- Smooth section navigation remains enabled unless reduced motion is requested.

## Card and theme system

The global SCSS variables now cover:

- background
- elevated surfaces
- primary and secondary text
- borders
- cyan and purple accents
- soft, card and hover shadows
- consistent card radii

Dark and light aliases are explicitly scoped to avoid mixed-theme gradients. Cards use diffuse blue-night shadows, subtle cyan accents and a three-to-five-pixel hover elevation.

## Confidential emergency-call project

- The old “visual pending” asset and wording were removed.
- No product interface, real data, transcription, operational screenshot or fictional software screen is displayed.
- A dedicated editorial composition uses only an abstract voice signal.
- The stages read `Audio → Understanding → Structured Information`.
- The visible confidentiality statement reads `Interface withheld for confidentiality`.
- The one-time signal reveal respects reduced-motion settings.

## Repetitions removed

Education no longer repeats:

- the 1st / 37 ranking
- the 19.5 / 20 thesis result
- the emergency-call research description
- the link between the thesis and MARIS

Education now contains only each degree, institution, period and specialization.

The previous five-card Recognition & Achievements section was removed:

- the ranking remains once in About
- the thesis grade remains once in About
- TIPA-SPACE support is integrated into the MARIS experience
- AI EXPO evidence is integrated into Certifications & Programs
- “Major of the cohort” is not duplicated separately from the 1st / 37 ranking

This shortens the page and removes repeated claims.

## Certificates detected in `E:\portfolio\images`

The plural folder `E:\portfolio\images\institutions` exists. The singular folder `E:\portfolio\images\institution` does not exist.

Detected credential files:

1. `AI Engineer Core Track.jpg`
2. `Python for Data Science & Machine Learning Bootcamp.jpg`
3. `Certificat ai expo 2026 Blida _removed_rotated_page-0001.jpg`
4. `English Speaking Club Program.jpeg`

## Certificates integrated

All four detected documents are integrated.

1. **AI Engineer Core Track: LLM Engineering, RAG, QLoRA and Agents**  
   Udemy · Ligency, Ed Donner · completed July 2026.
2. **Python for Data Science & Machine Learning Bootcamp**  
   Udemy · Jose Portilla, Pierian Training · completed September 2025.
3. **AI EXPO 2026 — Competition Participation**  
   AI House · University of Blida 1 · April 2026. The document proves participation, not a victory or ranking.
4. **English Speaking Club Program**  
   Elites School of English · completed 2023–2024, matching the supplied document.

Each card has a real `View credential` button. The Material UI dialog:

- traps keyboard focus
- closes with its close button, backdrop or Escape
- locks background scrolling
- provides a descriptive image alternative
- keeps the complete document inside the mobile viewport

The 31 MB AI EXPO source was resized to a 2400-pixel, 659 KB web copy for the modal. The original source file remains untouched in `E:\portfolio\images`.

## Contact and footer

- Contact now uses a balanced two-column composition.
- The left column holds the title, editorial copy and real `mailto` call to action.
- The right card consolidates LinkedIn, GitHub, email, location and mobility.
- The decorative rings remain subtle and do not create horizontal overflow.
- The footer contains Leticia’s identity, positioning, social links, 2026 copyright and the template credit.

## Missing or pending items

- Professional front-facing portrait
- Real RamyPulse dashboard capture
- Verified OLAP project visual
- Verified Java/PostgreSQL application visual
- SARL BM ENERGIE logo
- Resume PDF
- Dedicated social-sharing image
- Final repository, canonical URL and deployed portfolio URL
- Verified public project, demo, report and publication links
- Explicit retained approval for public use of the CEVITAL dashboard
- Confirmation that the co-participant name visible on the AI EXPO certificate may be displayed publicly

The confidential emergency-call interface is intentionally withheld and is not listed as a missing image.

## Visual verification

Chrome checks covered 320, 375, 768, 1024 and 1440 pixels.

- no horizontal overflow
- no clipped headings
- one page-level `h1`
- no broken images after lazy loading
- no console errors
- correct active navigation state
- correct dark/light persistence
- all reveal elements become visible
- reduced-motion mode leaves zero hidden elements
- mobile timeline remains readable
- credential modal fits at 375 × 812 pixels

Microsoft Edge also passed at 1440 and 375 pixels with no console errors. Firefox and Safari/WebKit were not installed in the available Windows environment and are not claimed as tested.

## Screenshot manifest

Every desktop theme folder contains:

- `01-hero.png`
- `02-about.png`
- `03-expertise.png`
- `04-stack.png`
- `05-experience.png`
- `06-projects.png`
- `07-education-certifications.png`
- `08-contact.png`
- `full-page.png`

The dark desktop folder also contains `09-credential-modal.png`.

Locations:

- `docs/screenshots/v2/desktop/light/`
- `docs/screenshots/v2/desktop/dark/`

Every mobile theme folder contains:

- `01-hero-375.png`
- `02-about-375.png`
- `03-expertise-375.png`
- `04-stack-375.png`
- `05-experience-375.png`
- `06-projects-375.png`
- `07-education-certifications-375.png`
- `08-contact-375.png`
- `09-credential-modal-375.png`

Locations:

- `docs/screenshots/v2/mobile/light/`
- `docs/screenshots/v2/mobile/dark/`

## Build and tests

`npm run build`

- Result: compiled successfully with no ESLint/build warning
- Main JavaScript: 134.03 kB gzip
- Main CSS: 11.72 kB gzip
- Lazy chunk: 1.79 kB gzip

`npm test -- --watchAll=false`

- 1 test suite passed
- 1 test passed
- 0 snapshots

The inherited Testing Library version prints the known `ReactDOMTestUtils.act` deprecation notice. It does not fail the test and does not affect the runtime site. Dependencies were not changed solely to hide that notice.

The inherited Create React App dependency tree currently reports 64 npm audit findings, mainly in legacy tooling. No automatic `npm audit fix --force` was run because it can introduce breaking dependency changes.

## Remaining limitations

- No CV file was supplied, so a contradiction audit against the current portfolio text is still unavailable.
- The final portfolio is not deployed because no final repository or production URL has been selected.
- The project remains on the local `feat/leticia-portfolio` branch with the original template remote named `upstream`; nothing was pushed to the original repository.
