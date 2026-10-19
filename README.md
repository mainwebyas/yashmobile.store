# yashmobile.store

A modern mobile-accessories e-commerce storefront built with **plain HTML, CSS and JavaScript** — no build step, no dependencies, no frameworks. Design language is inspired by *mobileaccessories.in* (navy + blue + cyan palette, Inter typeface, soft-shadow cards, mega-menu navigation).

---

## Run locally

Just open `index.html` in a browser — there is no build step. For a proper local server (recommended so paths behave identically to production) use any static server, e.g. VS Code **Live Server**, or:

```powershell
cd "C:\Users\yashv\Desktop\gurweb\yashmobile.store"
# any one of:
npx serve .
python -m http.server 5173
```

then open `http://localhost:5173`.

---

## Pages

| File | Purpose |
|---|---|
| `index.html` | Home — hero slider, trust strip, browse-by-need chips, category grid, new arrivals, B2B band, trending, FAQ accordion, info badges, newsletter |
| `shop.html` | Full catalogue with category filter chips, live search (`?q=`), sorting and result count |
| `product.html` | Product detail — gallery + thumbnails, price/discount, colour swatches, quantity stepper, add-to-cart, tabs (Description / Specifications / Shipping), related products |
| `cart.html` | Cart with quantity steppers, remove, order summary (subtotal, savings, shipping, total) |
| `checkout.html` | Shipping form, payment-method selector, order summary and order-placed confirmation |
| `wishlist.html` | Saved items (persisted in the browser) with live item count |
| `about.html` | Brand story, stats and value cards |
| `contact.html` | Contact cards + working enquiry / B2B-quote form with inline success message |
| `privacy.html` | Privacy policy |
| `terms.html` | Terms & conditions (shipping, returns, bulk orders) |
| `404.html` | Friendly not-found page |
| `sitemap.xml` / `robots.txt` | SEO crawl files |

---

## Architecture

```
yashmobile.store/
├── index.html          # home
├── shop.html           # catalogue
├── product.html        # product detail  (?id=p1 … p15)
├── cart.html           # cart + summary
├── checkout.html       # shipping form + payment + place order
├── wishlist.html       # saved items
├── about.html          # about us
├── contact.html        # contact / B2B quote
├── privacy.html        # privacy policy
├── terms.html          # terms & conditions
├── 404.html            # not-found page
├── sitemap.xml         # SEO sitemap
├── robots.txt          # crawler rules
├── css/
│   └── style.css       # single stylesheet: design tokens → components → responsive
├── js/
│   ├── data.js         # STORE, CATEGORIES, PRODUCTS, SLIDES, FAQS
│   └── main.js         # icons, cart, wishlist, header/footer, page renderers, boot
└── assets/
    ├── products/       # p1.jpg … p15.jpg  (one photo per product)
    ├── cats/           # cases.jpg, chargers.jpg … (one photo per category)
    ├── hero/           # hero-1.jpg … hero-3.jpg (home slider)
    └── CREDITS.md      # photo sources / licences
```

### Key ideas

- **Shared header & footer are injected by JS** (`renderHeader()` / `renderFooter()` into `#site-header` / `#site-footer`) so navigation and footer never drift between pages.
- **All product data lives in `js/data.js`** — add a product by pushing one object into `PRODUCTS`; every grid, filter, product page and cart pick it up automatically.
- **Icons are inline SVG** (`I` map + `icon(name, size)` helper) — no icon-font or external requests.
- **Photos are local files** served from `assets/`. `productImg()` / `categoryImg()` in `js/main.js` resolve the default path from the object `id` (`assets/products/<id>.jpg`, `assets/cats/<id>.jpg`) so you never have to touch HTML. Add an `img` property to any product/category/slide object to override it.
- **Cart persists in `localStorage`** under the key `ym_cart_v1` (add, increment, decrement, remove, live badge count).
- **Wishlist persists in `localStorage`** under the key `ym_wish_v1` — tap the heart on any card; the count badge in the header and the `wishlist.html` grid update live.
- **Checkout** reads the cart, validates the shipping form and clears the cart on success (payment step is a placeholder for a real gateway).
- **Floating WhatsApp button** is injected on every page and opens `wa.me` with a pre-filled message using `STORE.phoneRaw`.
- **SEO** — canonical + Open Graph tags, `Store` JSON-LD on the homepage, `sitemap.xml` and `robots.txt`.
- **Category navigation is URL-driven**: `shop.html?cat=cases`, and search is `shop.html?q=iphone`.

---

## Adding / editing products

Open `js/data.js` and add to the `PRODUCTS` array:

```js
{ id: "p17", name: "Product name here", cat: "chargers",
  price: 999, mrp: 1499, icon: "charger", rating: 4.5, tag: "New",
  img: "assets/products/p17.jpg" }   // optional — defaults to assets/products/p17.jpg
```

- `cat` must match an `id` in `CATEGORIES`.
- `icon` must be a key in the `I` map in `js/main.js` (`case`, `charger`, `cable`, `battery`, `screen`, `earbud`, `headphone`, `car`, `watch`, `laptop`, `tablet`, `stand`, `hub`, `gamepad`, `shield`, `tag`, `zap`…). It is still used for the small pills/drawer icons.
- `img` is optional: drop `p17.jpg` in `assets/products/` and the product card, product gallery, cart and checkout pick it up automatically.
- `mrp: null` hides the discount badge. Set `tag: "New"` or `"Hot"` for ribbons.

Store contact details (phone, email, hours) live in the `STORE` object at the top of `data.js` — update them there and every page follows.

---

## Images

All artwork is stored locally so the site works offline and loads fast:

| Folder | Naming | Used by |
|---|---|---|
| `assets/products/` | `<product id>.jpg` e.g. `p1.jpg` | Product cards, PDP gallery + thumbnails, cart, wishlist, checkout |
| `assets/cats/` | `<category id>.jpg` e.g. `chargers.jpg` | Home category grid + mega-menu thumbnails |
| `assets/hero/` | `hero-1.jpg … hero-3.jpg` | Home hero slider |

**To replace a photo:** overwrite the file with your own (keep the same filename). Recommended size ≈ 1100px wide for products/categories and ≈ 1600px for hero shots, JPEG.

Photos currently bundled are free-to-use stock images from [Pexels](https://www.pexels.com/license/). Sources are listed in [`assets/CREDITS.md`](assets/CREDITS.md) — replace them with your own product photography before going live.

---

## Design tokens (`css/style.css` → `:root`)

| Token | Value | Used for |
|---|---|---|
| `--navy` | `#07152b` | Headings, top strip, footer, dark buttons |
| `--blue` | `#155eef` | Primary buttons, links, accents |
| `--blue-dark` | `#0d47c8` | Button hover |
| `--cyan` | `#38c7ff` | Highlights on dark surfaces |
| `--coral` | `#ff6b4a` | Deals / wishlist hover |
| `--success` | `#087a55` | Savings, in-stock |
| `--danger` | `#b42318` | Discount badges |
| `--amber` | `#ffb822` | Star ratings |
| `--paper` | `#f5f7fb` | Alternating section background |
| `--line` | `#dce4ee` | Borders |
| `--muted` | `#526174` | Secondary text |
| `--radius-sm/md/lg` | `12 / 18 / 26px` | Corners |
| `--shadow-sm/md/lg` | navy-tinted | Card elevation |

Typography: **Inter** (Google Fonts) with a full system-font fallback stack.

---

## Responsive behaviour

Breakpoints at **1080px**, **860px**, **720px** and **420px**:

- 4 → 3 → 2 → 1 column product and category grids.
- Below 1080px the hero photo is hidden (text-only hero) and the product gallery is centred at 560px.
- Below 860px the horizontal nav is replaced by a **slide-in drawer** + overlay.
- CTAs become full-width on phones.

---

## Going live (next steps)

This is a **front-end storefront**. To sell for real you would connect:

1. **Payments** — Razorpay / Stripe (the "Proceed to checkout" button is currently a demo toast).
2. **Backend/API** — replace the `PRODUCTS` array with a fetch to your store API or a headless CMS.
3. **Forms** — point `#quoteForm` and the newsletter form at a real endpoint (Formspree, your own API, etc.).
4. **Product images** — replace the stock photos in `assets/products/`, `assets/cats/` and `assets/hero/` with your own photography (same filenames) — no code changes needed.

---

© 2026 yashmobile.store