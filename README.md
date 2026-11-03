# Zyralume Studio – React (Vite) website

One-page React site: GSAP ScrollTrigger scroll animations, Lenis smooth scrolling, a three.js 3D scene, and a Vercel serverless contact API.

## Run it
```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # outputs dist/
npm run preview
```
Node 18 or newer. The contact API (`api/contact.js`) runs on Vercel, so locally the form will say "Not sent" unless you use `npx vercel dev`.

## Deploy on Vercel
1. Push this folder to a GitHub repository.
2. On vercel.com: Add New > Project > import the repository. Vercel detects Vite (`vercel.json` already sets the build command and `dist` output).
3. Add the environment variables below, then redeploy.

## Contact form (email through Resend)
Set in Vercel > Project > Settings > Environment Variables (see `.env.example`):
- `RESEND_API_KEY`: key from resend.com
- `CONTACT_TO_EMAIL`: where inquiries arrive
- `CONTACT_FROM_EMAIL`: use `Zyralume Studio <onboarding@resend.dev>` until you verify your own domain (that sender only delivers to your own Resend account email)

If a variable is missing, the API answers 503 and the form shows "Not sent". It never shows a fake success. The API validates the fields on the server and ignores submissions that fill the hidden honeypot field.

## Project structure
```
index.html              Vite entry: meta tags, fonts, #root
vite.config.js          Vite + React plugin
vercel.json             Vercel build config and security headers
package.json            Dependencies (three is pinned to 0.128.0 on purpose, the scene lighting is tuned for it)
.env.example            Names of the environment variables
.gitignore
public/robots.txt
api/contact.js          Serverless contact endpoint (POST /api/contact)
src/main.jsx            React entry (no StrictMode, see note below)
src/App.jsx             Layout: header, side rail, page, footer, dialogs
src/index.css           Whole design system and animation styles
src/data/content.js     ALL editable content: CONFIG, TEAM, S (services), PJ (projects), V (project visuals), P (packages), PR (process)
src/lib/site.js         Scroll animations, 3D scene, cursor, smooth scroll, navigation
src/components/
  Header.jsx  SideRail.jsx  Footer.jsx  Page.jsx  SvgDefs.jsx
  Hero.jsx  Marquee.jsx  Intro.jsx  Services.jsx  Work.jsx  Concept.jsx
  About.jsx  Process.jsx  Why.jsx  Packages.jsx  Contact.jsx  Cta.jsx
  Dialogs.jsx           Service and case-study popups
  Vis.jsx               The concept mockup artwork (SVG) used across the page
```

## Editing content
- Team, services, projects, packages, process steps, social links, contact email and logo: `src/data/content.js`.
  - `CONFIG.logoSrc`: put your logo in `public/` and set `"/logo.png"`.
  - `CONFIG.socials`: paste real URLs. Empty ones are hidden.
  - `TEAM[].p`: photo path (for example `"/abdul.jpg"` in `public/`). Without it, initials are shown.
  - `PJ` and `V`: concept projects. Replace with real work when you have it.
- Headline and paragraph text of Hero, Intro, Concept, Why and Cta: edit the matching file in `src/components/`.
- Colors and spacing: CSS variables at the top of `src/index.css`.

## Notes and limits
- `lib/site.js` animates the DOM that React renders (word-split headings, pinned sections, class toggles). That is why `Page` is memoised, the app does not use `<StrictMode>`, and the contact heading carries `data-nosplit`. Do not put state into the page sections; keep stateful UI in `Contact`, `Header` and `Dialogs`.
- The mockup artwork is concept art made in code, labelled "Concept". Replace it with real project images when available.
- Privacy and Terms pages are not included: they need real legal text. Add a sitemap and an `og:image` once you have your domain.
