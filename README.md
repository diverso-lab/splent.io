# splent.io — Landing page

Next.js + Tailwind landing page for [SPLENT](https://docs.splent.io),
the Software Product Line Engineering Toolkit built at DiversoLab,
Universidad de Sevilla.

## Stack

- **Next.js 14** (App Router, standalone output)
- **Tailwind CSS 3** (with custom Apple-style design system)
- **TypeScript**
- **Docker + Docker Compose** for deployment

## Local development

```bash
npm install
npm run dev
# open http://localhost:3000
```

## Production build

```bash
npm run build
npm start
```

## Docker

```bash
docker compose up --build -d
# then: http://localhost:3000
```

To stop:

```bash
docker compose down
```

## Structure

```
src/
├── app/
│   ├── layout.tsx      # root layout, fonts, metadata
│   ├── page.tsx        # landing composition
│   └── globals.css     # Tailwind + design tokens
└── components/
    ├── Nav.tsx         # floating pill navbar
    ├── Hero.tsx        # hero + animated terminal
    ├── Terminal.tsx    # typewriter terminal demo
    ├── Features.tsx    # 6 capability cards
    ├── Pillars.tsx     # Framework / CLI / Cache
    ├── CodeShowcase.tsx # UVL + CLI example
    ├── WhySplent.tsx   # problem vs solution
    ├── CTA.tsx         # closing CTA
    ├── Footer.tsx      # footer with links
    └── Logo.tsx        # splent mark
```

## Editorial notes

The copy is based on the public SPLENT documentation:

- "From feature model to running product — in one command"
- Three pieces of the ecosystem: SPLENT Framework, CLI, Cache
- Problem framing: duplication vs. feature flags vs. microservices vs. SPLENT
- Pipeline stages: **Validate → Compose → Launch**

When features or claims change upstream, update the `Features`, `Pillars`
and `CodeShowcase` components accordingly.
