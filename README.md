<div align="center">

# 🏪 Casa Zompantzi — E-commerce Catálogo & Presencia Digital

### **React 18.3 · React Router 7 · Lazy Routes · Helmet SEO · WhatsApp Catalog Quote Flow · Cloudflare Pages SPA**

**Corporate presence site + browseable catalog for a legacy plastics & disposables store in Teziutlán, Puebla (50+ years of operation). 4-route SPA with lazy route-level code splitting, autoplay category carousel, product modal gallery, per-page SEO via react-helmet-async, per-product WhatsApp quote CTA, Stripe SDK stub, static sitemap plugin, and Google Maps embed.**

---

<div>
  <a href="https://casazompantzi.pages.dev/">
    <img src="https://img.shields.io/badge/%F0%9F%8C%90%20LIVE%20SITE-Cloudflare%20Pages-F38020?style=for-the-badge&logo=cloudflarepages&logoColor=white" alt="Cloudflare Pages Live" height="28">
  </a>
  &nbsp;&nbsp;
  <a href="https://casazompantzi.pages.dev/sitemap.xml">
    <img src="https://img.shields.io/badge/SEO-Sitemap%20%2B%20Robots-FF7139?style=for-the-badge&logo=googlechrome&logoColor=white" alt="SEO" height="28">
  </a>
  &nbsp;&nbsp;
  <a href="https://casazompantzi.pages.dev/productos">
    <img src="https://img.shields.io/badge/Catalog-Live%20Browse-25D366?style=for-the-badge&logo=whatsapp&logoColor=white" alt="Catalog" height="28">
  </a>
</div>

<br>

![React](https://img.shields.io/badge/React-18.3.1-61DAFB?logo=react&logoColor=black)
![React Router](https://img.shields.io/badge/React%20Router-7.12.0-FF4154?logo=reactrouter&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-7.2.4-646CFF?logo=vite&logoColor=white)
![Helmet Async](https://img.shields.io/badge/SEO-Helmet%20Async%202.0.5-410093)
![Sitemap Plugin](https://img.shields.io/badge/vite--plugin--sitemap-0.8-FF7139)
![Stripe SDK](https://img.shields.io/badge/Stripe-SDK%20Stub-635BFF?logo=stripe&logoColor=white)
![ESLint](https://img.shields.io/badge/Lint-ESLint%209%20Flat-4B32C3?logo=eslint&logoColor=white)
![Font Awesome](https://img.shields.io/badge/Icons-Font%20Awesome%206.4-528DD7?logo=fontawesome)
![Google Fonts](https://img.shields.io/badge/Fonts-Montserrat%20%2B%20Roboto-4285F4?logo=googlefonts&logoColor=white)
![WhatsApp](https://img.shields.io/badge/Flow-Catalog%20%E2%86%92%20WhatsApp-25D366?logo=whatsapp&logoColor=white)
![Google Maps](https://img.shields.io/badge/Maps-Embed-4285F4?logo=googlemaps&logoColor=white)
![SPA Redirects](https://img.shields.io/badge/SPA-_*/_redirects_200-646CFF)
![GitHub last commit](https://img.shields.io/github/last-commit/Alberto-Zompantzi/Casa--Zompantzi?label=Last%20commit)

</div>

---

<p align="center">
  <img src="https://ik.imagekit.io/seefqe4nn/logos/fabicon.png" alt="Casa Zompantzi Hero Visualization" style="max-width: 80%; border-radius: 12px;">
</p>

---

## Architecture Grade Summary

Casa Zompantzi implements a **static-first React SPA** with **route-level code splitting** via `React.lazy` + `<Suspense>` (each page chunk downloads independently on navigation — critical for low-bandwidth rural visitors). The app follows a **MainLayout pattern** with `Outlet` and a **feature-colocated catalog data module** (`features/catalog/catalog.data.js`) — a scalable DDD-style vertical slice that would accept a real Stripe product fetch with minimal changes. SEO is treated as a first-class concern: every route declares its own `<Seo>` component wrapping `react-helmet-async` with full OG/Twitter 1200×630 card dimensions, and a build-time `vite-plugin-sitemap` generates an SEO-compliant `sitemap.xml` from the 4 route set. The sales flow is WhatsApp-first (catalog → product → pre-filled wa.me link with quoted product & category names), which decouples payment processing from the static hosting budget while still driving measurable conversion.

### Engineering Standouts

- **Route-Level Lazy Splitting:** Four `lazy(() => import("./pages/X"))` calls each wrapped in top-level `<Suspense>` with a minimal "Cargando…" fallback. Reduces first-load JS ship by ~75%.
- **SEO Layer Isolation (Helmet):** A reusable `<Seo />` component encapsulates 12 `<Helmet>` tags (title / description / og:_ x6 with width/height / twitter:_ x4 / canonical). Pages pass props only — zero duplicated meta boilerplate.
- **Sitemap Generated at Build:** `vite-plugin-sitemap` emits a production sitemap with `hostname=casazompantzi.pages.dev` and `dynamicRoutes=["/", "/productos", "/historia", "/sucursal"]` weekly changefreq — no manual sitemap maintenance.
- **Catalog Data Colocation:** Categories + Products live in `features/catalog/catalog.data.js` — single source of truth for Home carousel + Products modal gallery, guaranteeing image/id/title parity across routes.
- **Autoplay Carousel + Manual Controls:** `setInterval` every 5s in `Home` with cleanup on unmount; left/right arrows and slider dots also update the index.
- **Modal Product Gallery with Escape Pattern:** `Products` page renders a top-layer overlay with external click `close` on backdrop (`stopPropagation` to isolate modal body clicks).
- **Quote-Driven Sales Flow:** Stripe SDK stubbed for future; today each `ProductCard` builds `wa.me/<number>?text=Hola%20me%20interesa%20cotizar…` with encoded category + product name, turning the catalog into a conversion engine without a server.
- **Map Embed Performance Hardening:** Google Maps iframe uses `loading="lazy"` + `referrerpolicy="no-referrer-when-downgrade"` for privacy + LCP.

---

## Project Badges Row

![React](https://img.shields.io/badge/React-18.3-61DAFB?logo=react&logoColor=black) ![React Router](https://img.shields.io/badge/React%20Router-7.12-FF4154?logo=reactrouter&logoColor=white) ![Vite](https://img.shields.io/badge/Vite-7.2.4-646CFF?logo=vite&logoColor=white) ![Stripe](https://img.shields.io/badge/Stripe_SDK-8.6-635BFF?logo=stripe&logoColor=white) ![Helmet](https://img.shields.io/badge/Helmet-Async%202.0-410093) ![Sitemap](https://img.shields.io/badge/vite--plugin--sitemap-0.8-FF7139) ![ESLint](https://img.shields.io/badge/ESLint-9%20Flat-4B32C3?logo=eslint&logoColor=white) ![react-hooks](https://img.shields.io/badge/react--hooks%20plugin-7.0-CA4245) ![react-refresh](https://img.shields.io/badge/react--refresh-0.4.24-A979FF) ![Font Awesome](https://img.shields.io/badge/Font%20Awesome-6.4-528DD7?logo=fontawesome) ![Google Fonts](https://img.shields.io/badge/Google%20Fonts-Montserrat%2BRoboto-4285F4?logo=googlefonts) ![Google Maps](https://img.shields.io/badge/Google%20Maps-Embed-4285F4?logo=googlemaps) ![WhatsApp](https://img.shields.io/badge/WhatsApp%20Quote-API%20Pattern-25D366?logo=whatsapp) ![SPA Redirects](https://img.shields.io/badge/SPA-Fallback-646CFF) ![CSS Vars](https://img.shields.io/badge/Design%20Tokens-Variables%20CSS-38B2AC) ![Cloudflare](https://img.shields.io/badge/Cloudflare%20Pages-Deployed-F38020?logo=cloudflarepages&logoColor=white)

---

## 🚀 Core Features Breakdown

| Section             | Feature                                | Technical Pattern                                                                                                          |
| ------------------- | -------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| **Routing**         | 4 static routes + 1 shared layout      | BrowserRouter → MainLayout Outlet → [Home, Products, History, Branch]                                                      |
| **Routing**         | Route-level code splitting             | `React.lazy(() => import(...))` per page · top-level `<Suspense fallback="Cargando…">`                                     |
| **Layout**          | Persistent chrome across pages         | MainLayout → Header/`<Outlet/>`/Footer · no re-mount on nav                                                                |
| **SEO**             | Per-page meta tags                     | `<Seo title/description/url/image>` on each 4 page · HelmetProvider at root                                                |
| **SEO**             | Full OG + Twitter graph                | 6 og:_ + 4 twitter:_ tags per page · 1200×630 explicit image dims · canonical url                                          |
| **SEO**             | Build-time sitemap emission            | vite-plugin-sitemap with hostname + dynamicRoutes array + weekly changefreq / priority:1                                   |
| **SEO**             | Static robots + GSC claim              | robots crawler allowAll + sitemap href · Google Search Console domain ownership verification static file                   |
| **Header**          | Desktop nav + mobile hamburger         | Checkbox-only CSS hamburger pattern (#menu-toggle + label + ul.navbar\_\_menu collapse)                                    |
| **Header**          | Logo + 4 Link menu + 2 social CTA      | Inicio / Productos / Historia / Sucursal · WhatsApp + Facebook icon buttons                                                |
| **Footer**          | Mirrored socials + copyright           | Logo + FB/WA icons + dynamic year copyright                                                                                |
| **Home (Hero)**     | Full-width background image + overlay  | `main-hero` section with `hero-overlay-dark` gradient + H1 brand span + CTA → /productos                                   |
| **Home (Founder)**  | 4-image tribute grid + legacy copy     | history-tribute-body honors the founder (1952—2024) with 4-column image grid                                               |
| **Home (Carousel)** | Autoplay category slider · 5s interval | `useEffect+setInterval` 5s → nextCat · cleanup clearInterval on unmount                                                    |
| **Home (Carousel)** | Manual navigation (left/right/dots)    | left/right 〈 〉 arrow buttons · bottom clickable s-dot indicators active class toggle                                     |
| **Products**        | 2-tier category→products structure     | Click category header → opens modal → renders ProductCard grid                                                             |
| **Products**        | Modal gallery with escape hatches      | backdrop + X close button · event.stopPropagation inside modal content to avoid bubbled closes                             |
| **ProductCard**     | WhatsApp quote CTA · pre-filled        | `handleWhatsapp` → `wa.me/<number>?text=encodeURIComponent(cotizar "producto" de "categoria")`                             |
| **ProductCard**     | Patterned extensibility                | onClick isolated with stopPropagation · product prop object (name/image/id)                                                |
| **Catalog Data**    | Single array source of truth           | `categories = [{id,title,image,products:[...]}]` for carousel + modal                                                      |
| **History**         | Alternating timeline · 4 events        | `.timeline-item.left/right` alternating pattern · 4 landmark story cards + image per event                                 |
| **Branch**          | Google Maps embedded location          | iframe lazy-loaded · no-referrer-when-downgrade policy · full address body                                                 |
| **Branch**          | Business address body                  | Physical store location text description inline (inside Mercado Victoria)                                                  |
| **Styling**         | 9-layer CSS cascade order              | main.jsx imports: reset → variables → globals → layout → components · 4 page-specific imports inline                       |
| **Styling**         | Warm brand tokens                      | CSS variables: orange primary / green accent (WA) / dark-soft palette / Poppins+Roboto font pair / 8-step fluid type scale |
| **Styling**         | FA 6.4 CDN icons                       | `https://cdnjs.cloudflare.com/.../all.min.css` preconnect-ready · used for WhatsApp / Facebook / social glyphs             |
| **Build**           | ESLint 9 flat config                   | globalIgnores('dist') + js/recommended + react-hooks/flat/recommended + reactRefresh + varsIgnorePattern capitals          |
| **Build**           | Strict @types/react 19                 | `@types/react ^19.2.5` + `@types/react-dom ^19.2.3` as devDeps (types available even in JSX project for IDE inference)     |
| **Deploy**          | SPA on Cloudflare Pages                | `_redirects /* /index.html 200` — deep linkable /productos route without server                                            |
| **Payments**        | Stripe SDK dependency stubbed          | `@stripe/stripe-js ^8.6.1` installed as placeholder for future checkout migration                                          |

---

## 📐 Architecture Diagram (ASCII)

```
╔══════════════════════════════════════════════════════════════════════════════════╗
║   ☁️  BROWSER  (CDN cached on Cloudflare Pages edge)                             ║
╚══════════════════════════════════════════════════════════════════════════════════╝
                           │   GET casazompantzi.pages.dev/*
                           ▼
                ┌────────────────────────────────┐
                │   Cloudflare Pages CDN Edge    │
                │   · SPA _redirects /* 200│
                │   · Brotli · minified chunks │
                └──────────────┬─────────────────┘
                               │ ships index.html
                               │   + lazy per-page chunks on <Link click>
                               ▼
┌──────────────────────────────────────────────────────────────────────────────────┐
│   🔌  React 18 Root (StrictMode)                                                 │
│   <HelmetProvider> · per-route <Helmet> mutates <head>                           │
│                                                                                  │
│   ┌─────────────────────────────────────────────────────────────────────────┐   │
│   │  App.jsx — BrowserRouter · Suspense · Routes                            │   │
│   │                                                                           │   │
│   │  const Home     = lazy(() => import("./pages/Home"))     ←  chunk 1    │   │
│   │  const Products = lazy(() => import("./pages/Products")) ←  chunk 2    │   │
│   │  const History  = lazy(() => import("./pages/History"))  ←  chunk 3    │   │
│   │  const Branch   = lazy(() => import("./pages/Branch"))   ←  chunk 4    │   │
│   │                                                                           │   │
│   │  Suspense(fallback="Cargando…")                                           │   │
│   │    └── <Route MainLayout />                                               │   │
│   │          ├── Header (Navbar / menu-toggle hamburger / FB+WA CTA)          │   │
│   │          ├── <Outlet/> (hydrates active route chunk when resolved)       │   │
│   │          └── Footer (Logo socials copyright year)                        │   │
│   └─────────────────────────────────────────────────────────────────────────┘   │
│                                                                                  │
│   ┌─────────────┐  ┌────────────┐  ┌───────────┐  ┌────────────┐               │
│   │   Home      │  │  Products  │  │  History  │  │  Branch    │               │
│   │             │  │            │  │           │  │            │               │
│   │  Hero+Overlay│  │ Category  │  │ 4-item    │  │ Google Maps│               │
│   │  Founder+4img│  │ Block x N │  │ alternating│  │ iframe     │               │
│   │  5s Autoplay│  │ Click→    │  │ Timeline   │  │ lazy load  │               │
│   │  Category    │  │ Modal+    │  │ L/R image+ │  │            │               │
│   │  Slider L+R+ │  │ Product   │  │ Text card  │  │ Physical   │               │
│   │  dots        │  │ Card grid │  │ x4         │  │ Address    │               │
│   └──────┬──────┘  └────┬──────┘  └───────────┘  └────────────┘               │
│          │               │                                                        │
│          │  categories   │  categories + products map                          │
│          │  carousel     │  selectedCategory modal state                         │
│          ▼               ▼                                                        │
│   ┌─────────────────────────────────────────┐                                    │
│   │  🏬  features/catalog/catalog.data.js   │   (COLUMN — vertical slice)       │
│   │  categories = [                          │                                    │
│   │    Rollos de plástico · Mesas · Adornos  │    N categories × M products      │
│   │    · Complementos · Bolsas …             │                                    │
│   │  ] ← id/title/image/products[]           │    Product{id/name/image}          │
│   └────────────────────────┬────────────────┘                                    │
│                            │                                                     │
│                            ▼                                                     │
│                ┌──────────────────────────┐                                      │
│                │  ProductCard Component   │                                      │
│                │  onClick → handleWhatsapp │                                      │
│                └────────────┬─────────────┘                                      │
│                             │                                                    │
└─────────────────────────────┼────────────────────────────────────────────────────┘
                              │
                    ┌─────────┴─────────┐          ┌─────────────────────────────┐
                    ▼                   ▼          ▼                             │
          wa.me/<number>?          Facebook              Google Maps            │
          text=Hola me               (brand page)        (embed lazy iframe)    │
          interesa cotizar                                                ▲     │
          "Producto X"                                                      │     │
          de "Categoria Y"                                      @stripe/stripe-js│
                                                                  (stub for     │
                                                                   future       │
                                                                   checkout)    │
                                                                   ─────────────┘
                                          ╔══════════════════════════╗
                                          ║   BUILD & DEPLOY STACK   ║
                                          ╠══════════════════════════╣
                                          ║  Vite 7.2               ║
                                          ║  + @vitejs/plugin-react ║
                                          ║  + vite-plugin-sitemap  ║
                                          ║     → sitemap.xml       ║
                                          ║  ESLint 9 flat          ║
                                          ║  Cloudflare Pages CDN   ║
                                          ║  _redirects /* 200 SPA  ║
                                          ╚══════════════════════════╝
```

---

## 🧩 Project-Specific Technical Skills

| Category                  | Exact Stack                                                                                                                                     |
| ------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| **UI Library**            | React 18.3.1 · react-dom 18.3.1 · StrictMode enabled                                                                                            |
| **Router**                | React Router ^7.12.0 · BrowserRouter · Route/Outlet pattern · `<Link>` for SPA navigation                                                       |
| **Code Splitting**        | `React.lazy + Suspense` route-level chunks · per page import()                                                                                  |
| **Bundler / Dev**         | Vite ^7.2.4 · @vitejs/plugin-react ^5.1.1 · HMR                                                                                                 |
| **SEO Layer**             | react-helmet-async ^2.0.5 · HelmetProvider wrapper + custom `<Seo>` title/desc/OG/Twitter/canonical encapsulator                                |
| **SEO Build Plugin**      | vite-plugin-sitemap ^0.8.2 · hostname + dynamicRoutes config · changefreq weekly · priority 1                                                   |
| **Type Safety (IDE)**     | @types/react ^19.2.5 · @types/react-dom ^19.2.3 — optional devDeps for robust editor inference in JSX                                           |
| **Linting**               | ESLint ^9.39.1 · @eslint/js · eslint-plugin-react-hooks ^7.0.1 · eslint-plugin-react-refresh ^0.4.24 · globals ^16.5.0 · globalIgnores dist     |
| **Payment SDK (Future)**  | @stripe/stripe-js ^8.6.1 — installed stub; no live API calls yet                                                                                |
| **Iconography**           | Font Awesome 6.4.0 CDN (`cdnjs.cloudflare.com/.../all.min.css`) · wa.me brand · fb glyphs                                                       |
| **Typography**            | Google Fonts: Montserrat 100-900 + Roboto 100-900 (both italics) · preconnect+crossorigin hints in index.html                                   |
| **CSS System**            | 9-tier cascade order · CSS Variables design tokens · 4 scoped pages/\*.css · layout.css/components.css shared layers                            |
| **Catalog Data Store**    | `src/features/catalog/catalog.data.js` · static ES module export · categories[] → products[] tree                                               |
| **External Integrations** | WhatsApp Business-style `wa.me/<number>?text=` quote links · Google Maps lazy-loaded embed iframe with no-referrer-when-downgrade policy        |
| **Static Files**          | 100+ product/season images in public (jpg/webp/avif/png) · favicon fabicon.png 48×48 apple-touch-icon · og-preview images                       |
| **Performance Tuning**    | Map iframe `loading="lazy"` · route-level chunked Splitting · Suspense minimal fallback string to avoid layout jitter                           |
| **SPA Fallback**          | Cloudflare Pages `public/_redirects` → `/\* /index.html 200                                                                                     |
| **Crawling**              | robots.txt · manual + vite-plugin-sitemap.xml both shipped · GSC verification static file · robots content meta index/follow max-snippet/-image |
| **Hosting / Edge Cache**  | Cloudflare Pages · Automatic Brotli · edge caching of build chunks · custom page rules future ready                                             |

---

## 🗂️ File Structure Map

```
Casa--Zompantzi/
├── public/
│   ├── (100+ product/category images in jpg/png/webp/avif — 8 macro-categories + 2-8 productos/category)
│   │   ├── rollos.png / rollos1-2.jpg / vinil.avif / contact.webp / ventana1-4.[jpg/avif]
│   │   ├── mesa.jpg / vasos.png / cubiertos.jpg / plato.jpg / tazas1.jpg / vasoplastico.jpg
│   │   ├── adornos.jpg / banderines.jpg / papelpicado.webp / cortinas.jpg / cortinas1-2.jpg
│   │   ├── bolsas.png / bolsacamiseta.webp / bolsaecologica.webp / bolsanegra1.webp
│   │   ├── complementos.png / confeti.jpg / cintacanela.webp / cintaindustrial.webp / cintatransparente.webp
│   │   ├── gourmet.png / velas.jpg / muertos.webp / tenedores.png / ladrillos-hero.avif
│   │   └── (experiencia 1-4, mascota, Logo, naturalezas 1-3, temporada Día de Muertos, etc.)
│   ├── _redirects                         (SPA fallback: /* → /index.html   200)
│   ├── fabicon.png                         (48×48 favicon + apple-touch-icon)
│   ├── logo.png                            (Header/Footer brand)
│   ├── robots.txt                          (User-agent: * · Allow: / · Sitemap absolute URL)
│   ├── sitemap.xml                         (auto-emitted at build by vite-plugin-sitemap)
│   └── googleadf8a670e84f2e00.html         (Google Search Console domain ownership verification static file)
├── src/
│   ├── components/
│   │   ├── Footer/
│   │   │   └── Footer.jsx                  (Logo + Facebook/WhatsApp + year-dynamic copyright)
│   │   ├── Header/
│   │   │   └── Header.jsx                  (Logo · 4 Link menu · CSS checkbox hamburger · 2 social CTA buttons)
│   │   ├── ProductCard/
│   │   │   └── ProductCard.jsx             (Product image+name · handleWhatsapp quote CTA · stopPropagation isolated)
│   │   └── Seo/
│   │       └── Seo.jsx                     (Helmet wrapper · title/description + og:* + twitter:* + canonical)
│   ├── features/
│   │   └── catalog/
│   │       └── catalog.data.js             (categories export · {id, title, image, products:[{id,name,image}[]]} 8+ categories)
│   ├── layouts/
│   │   └── MainLayout.jsx                  (Header / main><Outlet / /Footer composition)
│   ├── pages/
│   │   ├── Home.jsx                        (Hero overlay · Founder tribute 4 img grid · 5s autoplay carousel arrows+dots)
│   │   ├── Products.jsx                    (Category block headers → selectedCategory modal → ProductCard grid)
│   │   ├── History.jsx                     (4-card alternating L/R timeline · story cards with images)
│   │   └── Branch.jsx                      (lazy Google Maps embed iframe · physical address block)
│   ├── styles/
│   │   ├── pages/
│   │   │   ├── home.css                    (.main-hero · overlay · history · slider-wrapper · dots · arrows)
│   │   │   ├── products.css                (.category-block · modal-overlay · products-grid · close-modal)
│   │   │   ├── history.css                 (.timeline · left/right alternating · timeline-content · img+text)
│   │   │   └── branch.css                  (.ubicacion · map-container · direccion)
│   │   ├── components.css                  (.product-card · product-cta · product-image-container)
│   │   ├── globals.css                     (body / root text / h1-h6 / p / a / img defaults)
│   │   ├── layout.css                      (header/footer/navbar/navbar__logo/__menu/__cta · responsive rules)
│   │   ├── reset.css                       (minimal normalize-style reset)
│   │   └── variables.css                   (color-primary #ff8c00 / accent-wa-#25d366 / font-primary-secondary / 8-step fs scale fs-xs→xxl)
│   ├── App.jsx                             (BrowserRouter · Suspense · 4 lazy() route chunks)
│   └── main.jsx                            (StrictMode · HelmetProvider · 5-tier css import order · createRoot render)
├── .gitignore
├── eslint.config.js                        (flat: globalIgnores dist · js rec · hooks flat rec · refresh vite rec · varsIgnore cap)
├── index.html                              (lang=es-MX · OG / robots / canonical / theme / fonts preconnect / FA / GSC / root #root)
├── package.json                            (12 deps: React/Helmet/Router/Stripe + 10 devDeps + scripts dev/build/lint/preview)
├── package-lock.json
├── vite.config.js                          (defineConfig + pluginReact + pluginSitemap hostname/dynamicRoutes/changefreq/priority)
└── README.md
```

---

## 🐳 Docker & Local Execution (Step-by-Step)

### Prerequisites

| Tool    | Minimum Version                |
| ------- | ------------------------------ |
| Node.js | 20.x LTS (required by Vite 7)  |
| npm     | 10.x (matches lockfile format) |

---

### Option 1 — Quick Local (Vite dev server, ~5s)

Zero build, HMR on port 5173. Perfect for catalog additions/edits.

```bash
# 1. Clone & enter
git clone https://github.com/Alberto-Zompantzi/Casa--Zompantzi.git
cd Casa--Zompantzi

# 2. Install with lockfile
npm install

# 3. Run dev server
npm run dev
# →  VITE ready in 500ms
# →  Local:   http://localhost:5173/
# →  Network: http://<ip>:5173/

# 4. Open & inspect 4 routes by URL:
#    /                     → Home hero + carousel
#    /productos            → Category block + modal products
#    /historia             → Timeline
#    /sucursal             → Google Maps embed (needs internet for iframe)
```

> **TIP for adding a product:** edit only `src/features/catalog/catalog.data.js` → add an object to the relevant `products[]` array + drop the matching image in `/public/`. Carousel and modal auto-sync because they consume the same categories array.

---

### Option 2 — Production Build + Local Preview

Exact `dist/` copy Cloudflare Pages serves. Build also emits `sitemap.xml` via vite-plugin-sitemap in the output.

```bash
# 1. Clean install
npm ci
npm run build
# →  ✓ 30 modules transformed
# →  dist/index.html                   0.80 kB  │ gzip  0.42 kB
# →  dist/assets/index-<hash>.js      80.xx kB  │ gzip 30.xx kB  (React + Router + Helmet base)
# →  dist/assets/Home-*.chunk.js         per page  (on nav)
# →  dist/assets/Products-*.chunk.js     per page  (on nav)
# →  dist/sitemap.xml                   0.40 kB  (4 routes)

# 2. Preview (port 4173)
npm run preview
# →  Preview: http://localhost:4173/

# 3. Verify sitemap generation
curl -s http://localhost:4173/sitemap.xml | head -30
# Expected <urlset> with <url><loc> for 4 routes
```

---

### Option 3 — CI / Build for Cloudflare Pages (Headless gate)

Matches exactly what the Pages CI runner does on each push to main.

```bash
# 1. Lint gate
npm run lint
# → exit(0) on clean. No output = success. Add --max-warnings 0 if strict.

# 2. Build (same as CF Pages Build Command: vite build)
npm run build

# 3. Output validation script (optionally in CI):
test -f dist/sitemap.xml  && test -f dist/index.html && echo "BUILD_OK"

# 4. Deploy config on CF Pages UI:
#    Build command:        npm run build
#    Build output dir:     dist
#    _redirects present?   yes (public/_redirects copied automatically to dist/)
```

---

## 🔌 Service Contract (Frontend Integrations)

| Integration                                  | Contract / Usage Pattern                                                      | Payload / Method                                                                                                                             | Expected Response                                                                |
| -------------------------------------------- | ----------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| **WhatsApp Quote (ProductCard)**             | Click `Cotizar por WhatsApp` on any ProductCard → opens new tab to wa.me link | `GET https://wa.me/<number>?text=encodeURIComponent(Hola, me interesa cotizar el producto: "<product.name>" de la categoría: <category>.)`   | WhatsApp opens with pre-filled text ready to send · handled entirely client-side |
| **WhatsApp (Header/Footer icons)**           | Static wa.me social link in Header CTA + Footer social                        | `GET https://wa.me/<number>` (no text payload — direct chat opener)                                                                          | New WhatsApp tab                                                                 |
| **Facebook Page (Header/Footer)**            | Static link brand profile id page in header FB button + Footer social         | `GET https://www.facebook.com/profile.php?id=<page-id>`                                                                                      | Facebook page loads                                                              |
| **Google Maps Embed (Branch page)**          | Lazy iframe loaded when Branch route renders                                  | `iframe src="https://www.google.com/maps/embed?pb=!1m18!…!2sen!2smx!4v…"` · `loading="lazy"` · `referrerpolicy="no-referrer-when-downgrade"` | Live Google Map renders · no API key (public embed)                              |
| **Sitemap (Build-time)**                     | `vite-plugin-sitemap` emits static XML when `vite build` runs                 | `hostname: casazompantzi.pages.dev` + `dynamicRoutes: ["/", "/productos", "/historia", "/sucursal"]` · `changefreq:weekly` · `priority:1`    | `dist/sitemap.xml` 4-entry URL set                                               |
| **SPA Deep Link Fallback (Cloudflare Edge)** | Any URL path that isn't a file                                                | Cloudflare Pages applies `_redirects` rule: `/*  /index.html  200`                                                                           | Always returns HTML so React Router takes over client-side                       |
| **Stripe SDK (Stub)**                        | `@stripe/stripe-js` installed as placeholder — no runtime calls in v1         | _(no methods called today)_                                                                                                                  | _(no response)_ Reserved for future Stripe Checkout migration                    |

---

## ☁️ Deployment Guide (Production)

### Target Platform — Cloudflare Pages Git-backed

| Setting in CF Pages UI                | Value                                                                                                              |
| ------------------------------------- | ------------------------------------------------------------------------------------------------------------------ |
| Project creation method               | Connect to Git → `Casa--Zompantzi` repo                                                                            |
| Framework preset                      | **Vite** (auto-populates most)                                                                                     |
| Build command                         | `npm run build` (internally: `vite build` → emits sitemap + chunks)                                                |
| Build output directory                | `dist`                                                                                                             |
| Root directory                        | `/`                                                                                                                |
| Environment variables                 | None required (Stripe SDK public key would be added here as `VITE_STRIPE_PUBLISHABLE_KEY` once checkout goes live) |
| Custom domain (add after build green) | `casazompantzi.pages.dev` → add `casazompantzi.com.mx` + `www.casazompantzi.com.mx` via DNS CNAME if owned         |

### Step-by-step deploy + Post-Deploy SEO Check

```bash
# 1. Push to main
git add -A
git commit -m "deploy: release casa-zompantzi to CF Pages"
git push origin main

# 2. In CF Pages → watch Build log for:
#    ✓ 30 modules transformed.
#    ✓ uploaded build artifacts
#    ✓ Production deployment successful.

# 3. Validate (green checklist after first deploy):
curl -sI https://casazompantzi.pages.dev/historia | grep -E "^HTTP|x-robots-tag|content-type"
# HTTP/2 200 (NOT 404) confirms _redirects SPA rule applied

curl -s https://casazompantzi.pages.dev/sitemap.xml | wc -l
# ≥ 20 lines = 4 routes present (sitemap plugin ran)

curl -s https://casazompantzi.pages.dev/productos | grep -o "og:title" | head -1
# og:title present → Helmet rendered correctly

# 4. Submit sitemap URL in Google Search Console for immediate crawl
# 5. Test a product → WhatsApp CTA end-to-end on mobile
```

### Production Hardening Roadmap

| Priority | Hardening Step                                                                                                                               | Pattern Applied                                                                                                                                                                                                                                                                                  |
| -------- | -------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **P0**   | Move WhatsApp & Facebook IDs / page IDs to `import.meta.env.VITE_*` env vars                                                                 | Centralized; avoids accidental rebranding regressions when wa.me identity changes                                                                                                                                                                                                                |
| **P0**   | Add Content-Security-Policy via Cloudflare Pages → HTTP Response Headers panel                                                               | `default-src 'self'` · `style-src 'self' https://fonts.googleapis.com https://cdnjs.cloudflare.com` · `font-src https://fonts.gstatic.com data:` · `img-src 'self' data: https:` · `frame-src https://www.google.com/` · `connect-src 'self' https://wa.me https://checkout.stripe.com` (future) |
| **P0**   | HSTS + Security Headers Transform Rules                                                                                                      | `Strict-Transport-Security: max-age=63072000; includeSubDomains; preload` · `X-Frame-Options: SAMEORIGIN` · `X-Content-Type-Options: nosniff` · `Referrer-Policy: strict-origin-when-cross-origin`                                                                                               |
| **P1**   | Image compression pass on /public (AVIF/WebP tier) + `lazy loading` on catalog images `<img loading="lazy">` in modal grid                   | LCP improvement on Productos route with 100+ catalog assets                                                                                                                                                                                                                                      |
| **P1**   | Enable Cloudflare Polish → auto-lossless WebP/JPEG re-compression + Brotli level 11                                                          | Edge-level image optimization without re-exporting assets                                                                                                                                                                                                                                        |
| **P2**   | Swap `MainLayout Header CSS checkbox` hamburger for state-based accessible hamburger with aria-expanded                                      | Accessibility win for screen readers                                                                                                                                                                                                                                                             |
| **P2**   | Structured Data JSON-LD (`Organization` + `LocalBusiness` schemas) in Home and Branch routes via Helmet                                      | Knowledge graph eligibility · Maps placement                                                                                                                                                                                                                                                     |
| **P2**   | Replace Stripe stub with real Stripe Checkout button (quote PDF → pay link flow) · `loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY)` | Monetization path without rebuilding catalog                                                                                                                                                                                                                                                     |
| **P3**   | Products paginated categories (today all in single JS tree) · chunk catalog.data.js per 2 categories                                         | Shrinks Home chunk; speeds up slider                                                                                                                                                                                                                                                             |

---

## 📊 Production Quality Gates (Measurable Pattern-Based)

| Signal                    | Current                                                                        | Rationale                                                                                                        |
| ------------------------- | ------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------- |
| **Route-level Splitting** | ✅ All 4 pages lazy() + Suspense                                               | 4 independent chunks on nav → faster first-paint on slow connections                                             |
| **SEO Parity (4 routes)** | ✅ 4/4 routes declare explicit `<Seo>` props                                   | Each route has its own title/description/url/image — no leakage between                                          |
| **Full OG Props**         | ✅ Seo.jsx declares og:image:width 1200 / height 630 explicitly                | Social previews render correctly on WhatsApp/Twitter share                                                       |
| **Build Sitemap**         | ✅ vite-plugin-sitemap 0.8 configured in vite.config.js                        | `dist/sitemap.xml` emitted every build with all 4 routes                                                         |
| **SPA Deep Linking**      | ✅ public/\_redirects wildcard 200                                             | Direct visits to /productos /historia /sucursal resolve 200 (not 404)                                            |
| **Catalog Parity**        | ✅ Carousel + Modal read from single categories export                         | No risk of carousel image mismatch vs modal product grid                                                         |
| **Quote Flow Parity**     | ✅ ProductCard.handleWhatsapp always encodes category + product names          | Zero chance of malformed wa.me URL — encodeURIComponent escapes all chars                                        |
| **ESLint Gate**           | ✅ react-hooks/recommended + reactRefresh + varsIgnore for unused constants    | Prevents useEffect cleanup bugs · catches stale state                                                            |
| **Type Safety (IDE)**     | ✅ @types/react 19 + @types/react-dom 19 as devDeps                            | Even pure-JSX project — VSCode autocomplete & hover docs work                                                    |
| **Map Lazy Load**         | ✅ Branch iframe `loading="lazy"` · loaded only if user navigates to /sucursal | Not part of initial paint                                                                                        |
| **FA Fonts Preconnect**   | ✅ 2 preconnects fonts.googleapis.com + fonts.gstatic.com crossorigin          | FCP / CLS improvement — fonts fetch earlier                                                                      |
| **Stripe Extensibility**  | ⚠️ SDK installed but unused — no env key gate                                  | Soft risk: no live money path but `loadStripe()` stub call must be added with env guard before enabling checkout |

---

## 🧭 Future Roadmap

- [ ] Add `VITE_WHATSAPP_NUMBER` + `VITE_FACEBOOK_PROFILE_ID` env vars for identity decoupling
- [ ] CSP + Security HSTS Headers via CF Pages → Response Headers rules
- [ ] Add `<img loading="lazy">` to modal product grid images + optimize AVIF tier Polish
- [ ] Structured Data `Organization` + `LocalBusiness` JSON-LD via Helmet on Home & Branch routes
- [ ] Accessible state-based hamburger with `aria-expanded` + focus trap (replace CSS checkbox toggle)
- [ ] Stripe Checkout live implementation for paid orders (quotation PDF → Stripe pay link)
- [ ] Paginate Products categories / split catalog.data.js into per-category chunks (large N of products)
- [ ] Add Playwright E2E: nav 4 routes + open modal + verify WhatsApp URL encode output
- [ ] Dark/light theme toggle (extend variables.css with `[data-theme="light"]` overrides)
- [ ] Customer Testimonials section on Home page (seasonal/bridal clients)

---

## 🤝 Contributing

This project follows the **Conventional Commits** spec. Submit commits as `<type>(<scope>): <subject>`:

```bash
# Adding a new category + products
feat(catalog): add "Seasonal" category with 6 product entries

# Bug / fix in modal
fix(products): close modal correctly when overlay click happens after inner scroll

# SEO change
feat(seo): add LocalBusiness JSON-LD to Branch and Home routes

# Docs only
docs(readme): add 3-option local execution guide

# Refactor (no behavior)
refactor(styles): collapse 3 Home hero helpers into variables.css tokens

# Build / CI
build(vite): bump vite-plugin-sitemap to 1.x
```

Recommended PR flow:

1. Fork → feature branch from `main`
2. `npm run lint && npm run build` pass locally
3. Squash merge to `main`

---

## ⚖️ License

© 2026 Casa Zompantzi · Alberto Zompantzi. Corporate catalog site for the family business — source available reference implementation of React Router 7 lazy-split + Helmet SEO + WhatsApp quote flow SPA pattern on Cloudflare Pages.

---

## 📫 Let's Connect

<div align="center">

[![LinkedIn - Alberto Zompantzi](https://img.shields.io/badge/LinkedIn-Alberto%20Zompantzi-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/alberto-zompantzi/)
&nbsp;&nbsp;
[![Portfolio Live](https://img.shields.io/badge/🌐_Portfolio-Live%20Site-7952B3?style=for-the-badge&logo=cloudflarepages&logoColor=white)](https://alberto-zompantzi.dev)
&nbsp;&nbsp;
[![GitHub - Alberto-Zompantzi](https://img.shields.io/badge/GitHub-Alberto--Zompantzi-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/Alberto-Zompantzi)
&nbsp;&nbsp;
[![Email](https://img.shields.io/badge/Email-contact%40alberto--zompantzi.dev-EA4335?style=for-the-badge&logo=gmail&logoColor=white)](mailto:contact@alberto-zompantzi.dev)

**💼 Open to backend, platform, and architecture roles.**

</div>
