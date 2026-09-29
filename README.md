# ByteSpace New

A responsive marketing site for **ByteSpace**, an online course platform, built from the
[ByteSpace New Figma design](https://www.figma.com/design/26TBgRjmpuxudcErJsHUfy/ByteSpace-New-Check-website?node-id=0-1).
It includes the full landing page plus the Login and Sign-up pages.

**Live:** https://bytespace-new-kappa.vercel.app

| Page | Route |
| --- | --- |
| Landing page | [`/`](https://bytespace-new-kappa.vercel.app) |
| Login | [`/login`](https://bytespace-new-kappa.vercel.app/login) |
| Sign up | [`/signup`](https://bytespace-new-kappa.vercel.app/signup) |

## Tech stack

- [Next.js 16](https://nextjs.org) (App Router, static prerendering) + React 19
- TypeScript
- Tailwind CSS v4. Design tokens (colors, type scale, radii) live in `src/app/globals.css` under `@theme`
- `next/font` for Poppins (Google) and Satoshi / Clash Display (self-hosted from Fontshare)
- `next/image` for all images and icons
- ESLint (`eslint-config-next`), deployed on Vercel

## Getting started

Requires Node.js 20.9+.

```bash
git clone https://github.com/Ahad-41/bytespace-new.git
cd bytespace-new
npm install
npm run dev        # http://localhost:3000
```

Other scripts:

```bash
npm run build      # production build
npm run start      # serve the production build
npm run lint       # ESLint
```

## Folder structure

```
public/
├── decor/            # blurred gradient glows (SVG)
├── icons/            # UI + category icons, logo mark, social icons
├── images/
│   ├── avatars/      # learner & student avatars
│   ├── courses/      # course thumbnails
│   ├── shapes/       # 3D shapes, pre-tinted lime/white
│   └── testimonials/
└── logos/            # partner logos
src/
├── app/
│   ├── (auth)/login/page.tsx
│   ├── (auth)/signup/page.tsx
│   ├── globals.css   # Tailwind theme tokens + custom utilities
│   ├── icon.svg      # favicon
│   ├── layout.tsx    # fonts + metadata
│   └── page.tsx      # landing page composition
├── components/
│   ├── auth/         # AuthShell, AuthForm, AuthShowcase
│   ├── cards/        # CourseCard, CategoryCard, TestimonialCard, StatCards
│   ├── layout/       # Navbar, Footer, NewsletterForm
│   ├── sections/     # Hero, Partners, FeaturedCourses, LearningPaths, Features, CreatorCta, Testimonials
│   └── ui/           # Button, Container, SectionHeading, Logo, AvatarStack, ProgressBar,
│                     # TextField, FloatingCard, DecorShape, ScaledStage
├── data/             # typed content: courses, categories, testimonials, navigation
├── fonts/            # Satoshi + Clash Display woff2
└── lib/              # fonts config, cn() helper
```

## Implementation notes

- **Design tokens.** Figma color styles (Persian Blue, Electric Lime, Shuttle Gray) and text styles
  (Heading L/M, Body L/M/S/XS, Label XL–XS) map to Tailwind theme variables, e.g. `bg-brand`,
  `text-h1`, `text-body-lg`, `rounded-card`. Components don't hardcode raw values.
- **Collages.** The hero and feature image collages are absolutely positioned in Figma. `ScaledStage`
  renders them at their exact design size and scales them down uniformly on smaller screens, so
  mobile keeps the same composition without overlaps.
- **3D shapes.** In Figma these are grayscale renders tinted with a hard-light color overlay. They
  were pre-tinted into PNGs during export, which avoids CSS mask/blend hacks at runtime.
- **Responsive.** The design is desktop-only (1440px). Below that, sections stack, grids reflow
  (3 → 2 → 1 columns), the navbar collapses into a menu, and decorative shapes shrink or hide.
- **Accessibility.** Semantic landmarks and headings, labelled form fields, `aria-pressed` topic
  chips, an accessible mobile menu, decorative images hidden from assistive tech, and visible
  focus states.
- **Forms.** Search, newsletter, login and sign-up forms are front-end only; no backend is wired up.
