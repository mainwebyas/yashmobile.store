/* ============================================================
   yashmobile.store — site script
   Renders shared header/footer, home sections, cart & interactions
   ============================================================ */

/* ---------- Icon set (inline SVG, stroke based) ---------- */
const I = {
  search:'<path d="M11 19a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z"/><path d="m21 21-4.35-4.35"/>',
  heart:'<path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1-1.1a5.5 5.5 0 0 0-7.8 7.8l1.1 1.1L12 21l7.7-7.5 1.1-1.1a5.5 5.5 0 0 0 0-7.8Z"/>',
  user:'<path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>',
  cart:'<circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.7 13.4a2 2 0 0 0 2 1.6h9.7a2 2 0 0 0 2-1.6L23 6H6"/>',
  phone:'<path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.2a2 2 0 0 1 2.1-.5c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2Z"/>',
  mail:'<rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-10 6L2 7"/>',
  clock:'<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
  chevron:'<path d="m6 9 6 6 6-6"/>',
  arrow:'<path d="M5 12h14"/><path d="m13 6 6 6-6 6"/>',
  menu:'<path d="M3 6h18M3 12h18M3 18h18"/>',
  close:'<path d="M18 6 6 18M6 6l12 12"/>',
  star:'<path d="m12 2 3 6.3 6.9 1-5 4.9 1.2 6.8L12 17.8 5.9 21l1.2-6.8-5-4.9 6.9-1Z"/>',
  check:'<path d="M20 6 9 17l-5-5"/>',
  truck:'<path d="M1 3h15v13H1z"/><path d="M16 8h4l3 3v5h-7"/><circle cx="5.5" cy="18.5" r="2"/><circle cx="18.5" cy="18.5" r="2"/>',
  shield:'<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z"/>',
  refresh:'<path d="M3 12a9 9 0 0 1 15-6.7L21 8"/><path d="M21 3v5h-5"/><path d="M21 12a9 9 0 0 1-15 6.7L3 16"/><path d="M3 21v-5h5"/>',
  headset:'<path d="M4 14v-2a8 8 0 0 1 16 0v2"/><path d="M4 14a2 2 0 0 1 2 2v2a2 2 0 0 1-4 0v-2a2 2 0 0 1 2-2Z"/><path d="M20 14a2 2 0 0 1 2 2v2a2 2 0 0 1-4 0v-2a2 2 0 0 1 2-2Z"/>',
  plus:'<path d="M12 5v14M5 12h14"/>',
  zap:'<path d="M13 2 4 14h7l-1 8 9-12h-7l1-8Z"/>',
  tag:'<path d="M20.6 13.4 12 22l-9-9V3h10l8.6 8.6a2 2 0 0 1 0 2.8Z"/><circle cx="7.5" cy="7.5" r="1.2"/>',
  grid:'<rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/>',
  /* product icons */
  case:'<rect x="5" y="2" width="14" height="20" rx="3"/><path d="M10 6h4"/><circle cx="12" cy="17" r="2"/>',
  charger:'<rect x="6" y="3" width="12" height="9" rx="2"/><path d="M9 12v3m6-3v3"/><path d="M12 15v6"/><path d="M9 3V1m3 2V1m3 2V1"/>',
  cable:'<path d="M6 3v6a4 4 0 0 0 4 4h4a4 4 0 0 1 4 4v4"/><rect x="3" y="1" width="6" height="4" rx="1"/><rect x="15" y="19" width="6" height="4" rx="1"/>',
  battery:'<rect x="2" y="7" width="18" height="10" rx="2"/><path d="M22 11v2"/><path d="M6 11v2m4-2v2m4-2v2"/>',
  earbud:'<path d="M7 3a4 4 0 0 0-4 4c0 1.5.8 2.8 2 3.5V21h4v-10.5c1.2-.7 2-2 2-3.5a4 4 0 0 0-4-4Z"/><path d="M17 3a4 4 0 0 0-4 4c0 1.5.8 2.8 2 3.5V21h4V10.5c1.2-.7 2-2 2-3.5a4 4 0 0 0-4-4Z" opacity=".5"/>',
  headphone:'<path d="M3 14v-2a9 9 0 0 1 18 0v2"/><rect x="2" y="14" width="5" height="7" rx="2"/><rect x="17" y="14" width="5" height="7" rx="2"/>',
  car:'<path d="M5 16 6.5 9h11L19 16"/><path d="M3 16h18v4H3z"/><circle cx="7" cy="20" r="1.5"/><circle cx="17" cy="20" r="1.5"/>',
  watch:'<rect x="6" y="6" width="12" height="12" rx="3"/><path d="M9 6V3h6v3M9 18v3h6v-3"/>',
  laptop:'<rect x="4" y="4" width="16" height="11" rx="2"/><path d="M2 19h20"/>',
  tablet:'<rect x="5" y="2" width="14" height="20" rx="3"/><path d="M11 18h2"/>',
  stand:'<path d="M12 3v10"/><path d="m8 7 4-4 4 4"/><circle cx="12" cy="17" r="4"/>',
  hub:'<rect x="3" y="8" width="18" height="8" rx="3"/><path d="M7 8V5m5 3V4m5 4V5"/><path d="M8 16v3m8-3v3"/>',
  gamepad:'<rect x="2" y="7" width="20" height="11" rx="5"/><path d="M7 11v3m-1.5-1.5h3"/><circle cx="16" cy="11.5" r="1"/><circle cx="18.5" cy="14" r="1"/>'
};
function icon(name, size){
  size = size || 20;
  return '<svg width="'+size+'" height="'+size+'" viewBox="0 0 24 24" fill="none" '+
    'stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">'+
    (I[name]||I.grid)+'</svg>';
}

/* ---------- Helpers ---------- */
const $  = (s, c) => (c||document).querySelector(s);
const $$ = (s, c) => Array.from((c||document).querySelectorAll(s));
const rupee = n => '\u20B9' + Number(n).toLocaleString('en-IN');
const catName = id => (CATEGORIES.find(c => c.id === id) || {name:id}).name;
const discount = p => p.mrp ? Math.round((1 - p.price / p.mrp) * 100) : 0;
const esc = s => String(s).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
/* Local images — files live in assets/products/p1.jpg, assets/cats/<cat>.jpg, assets/hero/hero-1.jpg.
   Add an `img` property to any product/category object to override the default. */
const productImg  = p => p.img || ('assets/products/' + p.id + '.jpg');
const categoryImg = c => c.img || ('assets/cats/' + c.id + '.jpg');
function stars(rating){
  const full = Math.round(rating);
  let s = '';
  for (let i = 0; i < 5; i++) s += i < full ? '\u2605' : '\u2606';
  return s;
}
function getParam(name){
  return new URLSearchParams(location.search).get(name);
}

/* ---------- Cart (localStorage) ---------- */
const CART_KEY = 'ym_cart_v1';
function cartGet(){ try { return JSON.parse(localStorage.getItem(CART_KEY)) || []; } catch(e){ return []; } }
function cartSave(items){ localStorage.setItem(CART_KEY, JSON.stringify(items)); updateCartCount(); }
function cartCount(){ return cartGet().reduce((s, i) => s + i.qty, 0); }
function addToCart(id, qty){
  qty = qty || 1;
  const items = cartGet();
  const found = items.find(i => i.id === id);
  if (found) found.qty += qty; else items.push({ id: id, qty: qty });
  cartSave(items);
  const p = PRODUCTS.find(x => x.id === id);
  toast((p ? p.name.slice(0, 28) + (p.name.length > 28 ? '\u2026' : '') : 'Item') + ' added to cart');
}
function setQty(id, qty){
  const items = cartGet();
  const it = items.find(i => i.id === id);
  if (!it) return;
  it.qty = Math.max(1, qty);
  cartSave(items);
}
function removeFromCart(id){
  cartSave(cartGet().filter(i => i.id !== id));
  toast('Item removed');
}
function updateCartCount(){
  const n = cartCount();
  $$('[data-cart-count]').forEach(el => {
    el.textContent = n;
    el.style.display = n ? 'grid' : 'none';
  });
}

/* ---------- Wishlist (localStorage) ---------- */
const WISH_KEY = 'ym_wish_v1';
function wishGet(){ try { return JSON.parse(localStorage.getItem(WISH_KEY)) || []; } catch(e){ return []; } }
function wishHas(id){ return wishGet().indexOf(id) > -1; }
function wishSave(list){ localStorage.setItem(WISH_KEY, JSON.stringify(list)); updateWishCount(); }
function wishToggle(id){
  const wasOn = wishHas(id);
  wishSave(wasOn ? wishGet().filter(x => x !== id) : wishGet().concat(id));
  toast(wasOn ? 'Removed from wishlist' : 'Added to wishlist');
  document.dispatchEvent(new Event('wishchange'));
  return !wasOn;
}
function updateWishCount(){
  const n = wishGet().length;
  $$('[data-wish-count]').forEach(el => {
    el.textContent = n;
    el.style.display = n ? 'grid' : 'none';
  });
}

/* ---------- Toast ---------- */
let toastTimer;
function toast(msg){
  let el = $('.toast');
  if (!el){
    el = document.createElement('div');
    el.className = 'toast';
    document.body.appendChild(el);
  }
  el.innerHTML = icon('check', 18) + '<span>' + msg + '</span>';
  requestAnimationFrame(() => el.classList.add('is-show'));
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => el.classList.remove('is-show'), 2600);
}

/* ---------- Header ---------- */
function megaItem(c){
  return '<a href="shop.html?cat=' + c.id + '">' +
    '<span class="mega__thumb"><img src="' + categoryImg(c) + '" alt="" loading="lazy" decoding="async"></span>' +
    '<span><strong style="font-weight:600">' + c.name + '</strong>' +
    '<small>' + c.sub.slice(0, 3).join(' \u00B7 ') + '</small></span></a>';
}
function goSearch(e){
  e.preventDefault();
  /* Read the input from whichever search form was submitted (header or mobile drawer) */
  const form = (e && e.target && e.target.querySelector) ? e.target : document;
  const source = form.querySelector('input[type="search"]') || $('#siteSearch');
  const q = ((source && source.value) || '').trim();
  location.href = 'shop.html' + (q ? '?q=' + encodeURIComponent(q) : '');
  return false;
}
function renderHeader(){
  const host = $('#site-header');
  if (!host) return;

  const mega = CATEGORIES.map(c => '<div class="mega__col">' + megaItem(c) + '</div>').join('');

  host.innerHTML =
  '<div class="topbar"><div class="container topbar__inner">' +
    '<div class="topbar__links">' +
      '<a href="contact.html">' + icon('tag', 15) + ' Request for quote</a>' +
      '<a href="shop.html">' + icon('heart', 15) + ' Wishlist</a>' +
      '<a href="contact.html">' + icon('user', 15) + ' Sign in / register</a>' +
    '</div>' +
    '<span class="topbar__note">' + icon('truck', 15) + ' Free shipping over <strong>' + rupee(999) + '</strong></span>' +
  '</div></div>' +

  '<header class="header"><div class="container header__inner">' +
    '<a class="brand" href="index.html"><span class="brand__mark">' + icon('zap', 20) + '</span>' +
      STORE.brand + '<span class="brand__accent">' + STORE.brand2 + '</span></a>' +
    '<form class="search" role="search" onsubmit="return goSearch(event)">' +
      '<input type="search" id="siteSearch" placeholder="Search for cases, chargers, cables\u2026" aria-label="Search products">' +
      '<button type="submit" aria-label="Search">' + icon('search', 19) + '</button>' +
    '</form>' +
    '<div class="header__actions">' +
      '<a class="iconbtn" href="wishlist.html">' + icon('heart', 21) + '<span>Wishlist</span>' +
        '<b class="iconbtn__count" data-wish-count style="display:none">0</b></a>' +
      '<a class="iconbtn" href="contact.html">' + icon('user', 21) + '<span>Account</span></a>' +
      '<a class="iconbtn" href="cart.html">' + icon('cart', 21) + '<span>Cart</span>' +
        '<b class="iconbtn__count" data-cart-count style="display:none">0</b></a>' +
      '<button class="iconbtn menubtn" id="menuOpen" aria-label="Open menu">' + icon('menu', 22) + '</button>' +
    '</div>' +
  '</div></header>' +

  '<nav class="nav"><div class="container nav__inner">' +
    '<div class="nav__item nav__item--wide">' +
      '<a class="nav__link nav__all" href="shop.html">' + icon('grid', 17) + ' All categories ' +
        '<span class="caret">' + icon('chevron', 15) + '</span></a>' +
      '<div class="mega">' + mega +
        '<div class="mega__foot"><p>Compatibility first \u00B7 Retail &amp; bulk \u00B7 Secure shopping</p>' +
          '<a class="link-arrow" href="shop.html">View all categories ' + icon('arrow', 15) + '</a></div>' +
      '</div>' +
    '</div>' +
    '<div class="nav__item"><a class="nav__link" href="shop.html?cat=cases">Cover &amp; Cases</a></div>' +
    '<div class="nav__item"><a class="nav__link" href="shop.html?cat=chargers">Chargers</a></div>' +
    '<div class="nav__item"><a class="nav__link" href="shop.html?cat=cables">Cables</a></div>' +
    '<div class="nav__item"><a class="nav__link" href="shop.html?cat=powerbank">Powerbanks</a></div>' +
    '<div class="nav__item"><a class="nav__link" href="shop.html?cat=laptop">Laptop &amp; Tablet</a></div>' +
    '<div class="nav__spacer"></div>' +
    '<div class="nav__item"><a class="nav__link" href="contact.html">B2B Quote</a></div>' +
    '<div class="nav__item"><a class="nav__link nav__hot" href="shop.html">' + icon('zap', 16) + ' Deals</a></div>' +
  '</div></nav>' +

  '<aside class="drawer" id="drawer" aria-hidden="true">' +
    '<div class="drawer__head"><span class="brand" style="font-size:1.2rem">' + STORE.brand +
      '<span class="brand__accent">' + STORE.brand2 + '</span></span>' +
      '<button id="menuClose" aria-label="Close menu">' + icon('close', 20) + '</button></div>' +
    '<div class="drawer__body">' +
      '<form class="search drawer__search" role="search" onsubmit="return goSearch(event)">' +
        '<input type="search" placeholder="Search for cases, chargers, cables\u2026" aria-label="Search products">' +
        '<button type="submit" aria-label="Search">' + icon('search', 19) + '</button>' +
      '</form>' +
      '<a href="index.html">Home</a>' +
      '<a href="shop.html">All products</a>' +
      '<h4>Categories</h4>' +
      CATEGORIES.map(c => '<a href="shop.html?cat=' + c.id + '">' + c.name + '</a>').join('') +
      '<h4>More</h4>' +
      '<a href="about.html">About us</a>' +
      '<a href="contact.html">Contact / B2B quote</a>' +
      '<a href="cart.html">Cart</a>' +
    '</div>' +
  '</aside>' +
  '<div class="overlay" id="overlay"></div>';

  const drawer = $('#drawer'), overlay = $('#overlay');
  const open  = () => { drawer.classList.add('is-open'); overlay.classList.add('is-open'); };
  const close = () => { drawer.classList.remove('is-open'); overlay.classList.remove('is-open'); };
  $('#menuOpen').addEventListener('click', open);
  $('#menuClose').addEventListener('click', close);
  overlay.addEventListener('click', close);
  updateCartCount();
  updateWishCount();
}

/* ---------- Footer ---------- */
function renderFooter(){
  const host = $('#site-footer');
  if (!host) return;
  const social = { Facebook:'M14 9h3V6h-3c-2 0-3 1-3 3v2H8v3h3v7h3v-7h3l1-3h-4V9c0-.6.4-1 1-1Z',
    Instagram:'<rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1"/>',
    Twitter:'M4 4l7 9-7 7h2l6-6 5 6h4l-7-9 6-7h-2l-5 5-3-5Z',
    Youtube:'<rect x="2" y="5" width="20" height="14" rx="4"/><path d="m10 9 5 3-5 3Z"/>' };
  host.innerHTML =
  '<footer class="footer"><div class="container">' +
    '<div class="footer__top">' +
      '<div class="footer__brand">' +
        '<span class="brand"><span class="brand__mark">' + icon('zap', 20) + '</span>' +
          STORE.brand + '<span class="brand__accent">' + STORE.brand2 + '</span></span>' +
        '<p>Mobile accessories for everyday buyers, retailers and procurement teams \u2014 selected for compatibility, dependable quality and practical value.</p>' +
        '<ul class="footer__contact">' +
          '<li>' + icon('phone', 17) + '<a href="tel:' + STORE.phoneRaw + '">' + STORE.phone + '</a></li>' +
          '<li>' + icon('mail', 17) + '<a href="mailto:' + STORE.email + '">' + STORE.email + '</a></li>' +
          '<li>' + icon('clock', 17) + '<span>' + STORE.hours + '</span></li>' +
        '</ul>' +
      '</div>' +
      '<div><h4>Quick Links</h4><div class="footer__links">' +
        '<a href="index.html">Home</a><a href="shop.html">Shop</a>' +
        '<a href="wishlist.html">Wishlist</a><a href="cart.html">Cart</a>' +
        '<a href="checkout.html">Checkout</a>' +
        '<a href="about.html">About us</a><a href="contact.html">Contact us</a>' +
      '</div></div>' +
      '<div><h4>Categories</h4><div class="footer__links">' +
        CATEGORIES.slice(0, 5).map(c => '<a href="shop.html?cat=' + c.id + '">' + c.name + '</a>').join('') +
        '<a href="shop.html">View all \u2192</a>' +
      '</div></div>' +
      '<div><h4>For Business</h4><div class="footer__links">' +
        '<a href="contact.html">Request a B2B quote</a>' +
        '<a href="contact.html">Become a seller</a>' +
        '<a href="contact.html">Advertise with us</a>' +
        '<a href="contact.html">Become an affiliate</a>' +
      '</div></div>' +
    '</div>' +
    '<div class="footer__bottom">' +
      '<span>\u00A9 ' + new Date().getFullYear() + ' ' + STORE.domain + ' \u00B7 ' +
        '<a href="privacy.html">Privacy</a> \u00B7 <a href="terms.html">Terms</a> \u00B7 ' +
        '<a href="sitemap.xml">Sitemap</a></span>' +
      '<div class="payrow"><span>Razorpay</span><span>UPI</span><span>VISA</span><span>Mastercard</span><span>Net Banking</span></div>' +
      '<div class="footer__social">' +
        Object.keys(social).map(k => '<a href="#" aria-label="' + k + '" title="' + k + '">' +
          '<svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" ' +
          'stroke-linecap="round" stroke-linejoin="round">' + social[k] + '</svg></a>').join('') +
      '</div>' +
    '</div>' +
  '</div></footer>';
}

/* ---------- Product card template ---------- */
function productCard(p){
  const off = discount(p);
  let badges = '';
  if (off) badges += '<span class="badge badge--off">' + off + '% OFF</span>';
  if (p.tag === 'New') badges += '<span class="badge badge--new">New</span>';
  if (p.tag === 'Hot') badges += '<span class="badge badge--hot">Hot</span>';
  const on = wishHas(p.id) ? ' is-on' : '';
  return '<article class="card">' +
    '<div class="card__mediabox">' +
    '<a class="card__media" href="product.html?id=' + p.id + '">' +
      '<div class="card__badges">' + badges + '</div>' +
      '<img class="card__img" src="' + productImg(p) + '" alt="' + esc(p.name) + '" loading="lazy" decoding="async">' +
    '</a>' +
    '<button type="button" class="card__wish' + on + '" data-wish="' + p.id +
      '" aria-label="Add to wishlist">' + icon('heart', 18) + '</button>' +
    '</div>' +
    '<div class="card__body">' +
      '<span class="card__cat">' + catName(p.cat) + '</span>' +
      '<a class="card__title" href="product.html?id=' + p.id + '">' + p.name + '</a>' +
      '<div class="card__rate"><span class="stars">' + stars(p.rating) + '</span>' + p.rating.toFixed(1) + '</div>' +
      '<div class="card__price"><span class="now">' + rupee(p.price) + '</span>' +
        (p.mrp ? '<span class="was">' + rupee(p.mrp) + '</span>' : '') + '</div>' +
      '<div class="card__foot">' +
        '<button class="btn btn--cart" onclick="addToCart(\'' + p.id + '\')">' + icon('cart', 17) + ' Add to cart</button>' +
        '<a class="view" href="product.html?id=' + p.id + '" aria-label="View product">' + icon('arrow', 18) + '</a>' +
      '</div>' +
    '</div>' +
  '</article>';
}
function renderGrid(sel, list){
  const host = $(sel);
  if (!host) return;
  host.innerHTML = list.length ? list.map(productCard).join('')
    : '<p class="empty">No products found. Try a different search or category.</p>';
}

/* ---------- Hero slider ---------- */
function renderHero(){
  const track = $('#heroTrack');
  if (!track) return;
  track.innerHTML = SLIDES.map((s, i) =>
    '<section class="slide slide--' + s.theme + (i === 0 ? ' is-active' : '') + '" data-slide="' + i + '">' +
      '<div class="container slide__inner">' +
        '<div class="slide__copy">' +
          '<span class="slide__kicker">' + icon('zap', 15) + s.kicker + '</span>' +
          '<h1>' + s.title + '</h1><p>' + s.text + '</p>' +
          '<div class="slide__cta">' +
            '<a class="btn btn--primary" href="shop.html">' + s.cta + ' ' + icon('arrow', 17) + '</a>' +
            '<a class="btn btn--ghost" href="contact.html">' + s.cta2 + '</a>' +
          '</div>' +
        '</div>' +
        '<div class="slide__art">' +
          '<figure class="hero__shot">' +
            '<img src="' + (s.img || ('assets/hero/hero-' + (i + 1) + '.jpg')) + '" alt="' + esc(s.title) + '"' +
              (i === 0 ? ' fetchpriority="high"' : ' loading="lazy"') + ' decoding="async">' +
          '</figure>' +
          '<span class="chip chip--tl">' + icon('check', 15) + ' 100% Genuine</span>' +
          '<span class="chip chip--br">' + icon('truck', 15) + ' Fast dispatch</span>' +
        '</div>' +
      '</div>' +
    '</section>').join('') +
  '<button class="hero__arrow hero__arrow--prev" id="heroPrev" aria-label="Previous">' + icon('chevron', 22) + '</button>' +
  '<button class="hero__arrow hero__arrow--next" id="heroNext" aria-label="Next">' + icon('chevron', 22) + '</button>' +
  '<div class="hero__dots" id="heroDots">' +
    SLIDES.map((s, i) => '<button class="' + (i === 0 ? 'is-active' : '') + '" data-dot="' + i + '" aria-label="Slide ' + (i+1) + '"></button>').join('') +
  '</div>' +
  '<div class="hero__count"><span id="heroNow">01</span> / ' + String(SLIDES.length).padStart(2,'0') + '</div>';

  const slides = $$('.slide', track), dots = $$('[data-dot]', track);
  const now = $('#heroNow');
  let idx = 0, timer;
  function go(n){
    idx = (n + slides.length) % slides.length;
    slides.forEach((s, i) => s.classList.toggle('is-active', i === idx));
    dots.forEach((d, i) => d.classList.toggle('is-active', i === idx));
    if (now) now.textContent = String(idx + 1).padStart(2, '0');
  }
  function auto(){ clearInterval(timer); timer = setInterval(() => go(idx + 1), 6000); }
  $('#heroNext').addEventListener('click', () => { go(idx + 1); auto(); });
  $('#heroPrev').addEventListener('click', () => { go(idx - 1); auto(); });
  dots.forEach(d => d.addEventListener('click', () => { go(+d.dataset.dot); auto(); }));
  auto();
}

/* ---------- Home: category grid ---------- */
function renderCats(){
  const host = $('#catGrid');
  if (!host) return;
  host.innerHTML = CATEGORIES.slice(0, 8).map(c =>
    '<a class="catcard" href="shop.html?cat=' + c.id + '">' +
      '<div class="catcard__media">' +
        '<img src="' + categoryImg(c) + '" alt="" loading="lazy" decoding="async">' +
        '<span class="catcard__icon">' + icon(c.icon, 20) + '</span>' +
      '</div>' +
      '<div class="catcard__body">' +
        '<h3>' + c.name + '</h3>' +
        '<p>' + c.sub.slice(0, 3).join(' \u00B7 ') + '</p>' +
        '<span class="link-arrow">Shop now ' + icon('arrow', 15) + '</span>' +
      '</div>' +
    '</a>').join('');
}

/* ---------- Home: browse chips ---------- */
function renderBrowse(){
  const host = $('#browseChips');
  if (!host) return;
  host.innerHTML = CATEGORIES.map(c =>
    '<a class="pill" href="shop.html?cat=' + c.id + '">' + icon(c.icon, 16) + c.name + '</a>').join('');
}

/* ---------- Home: FAQ ---------- */
function renderFaq(){
  const host = $('#faqList');
  if (!host) return;
  host.innerHTML = FAQS.map((f, i) =>
    '<details class="faq__item"' + (i === 0 ? ' open' : '') + '>' +
      '<summary>' + f.q + '<span class="plus">' + icon('plus', 15) + '</span></summary>' +
      '<div class="faq__body">' + f.a + '</div>' +
    '</details>').join('');
}

/* ---------- Home: info badges ---------- */
function renderInfoBadges(){
  const host = $('#infoBadges');
  if (!host) return;
  const items = [
    { i:'shield',  t:'100% secure payment',  s:'Protected checkout via Razorpay' },
    { i:'truck',   t:'Easy shipping',        s:'Customised as per your convenience' },
    { i:'refresh', t:'Easy returns',         s:'Simply return it for an exchange' },
    { i:'headset', t:'Human support',        s:'11am to 7pm (Monday to Saturday)' }
  ];
  host.innerHTML = items.map(x =>
    '<div class="infobadge">' + icon(x.i, 30) + '<strong>' + x.t + '</strong><span>' + x.s + '</span></div>').join('');
}

/* ---------- Shop page ---------- */
function initShop(){
  const grid = $('#shopGrid');
  if (!grid) return;
  const list = $('#filterBar');
  const count = $('#resultCount');
  const sortSel = $('#sortSel');
  const q = getParam('q');
  let activeCat = getParam('cat') || 'all';

  const filterNames = [{ id:'all', name:'All' }].concat(CATEGORIES.map(c => ({ id:c.id, name:c.name })));
  if (list){
    list.innerHTML = filterNames.map(f =>
      '<button class="chipfilter' + (f.id === activeCat ? ' is-active' : '') +
      '" data-cat="' + f.id + '">' + f.name + '</button>').join('');
    list.addEventListener('click', e => {
      const b = e.target.closest('[data-cat]');
      if (!b) return;
      activeCat = b.dataset.cat;
      $$('.chipfilter', list).forEach(x => x.classList.toggle('is-active', x === b));
      /* keep the URL shareable/bookmarkable (shop.html?cat=...) */
      if (window.history && history.replaceState){
        const url = new URL(location.href);
        if (activeCat === 'all') url.searchParams.delete('cat');
        else url.searchParams.set('cat', activeCat);
        history.replaceState(null, '', url);
      }
      apply();
    });
  }
  function base(){
    let out = PRODUCTS.slice();
    if (activeCat !== 'all') out = out.filter(p => p.cat === activeCat);
    if (q){
      const s = q.toLowerCase();
      out = out.filter(p => p.name.toLowerCase().includes(s) || catName(p.cat).toLowerCase().includes(s));
    }
    return out;
  }
  function apply(){
    let out = base();
    const by = sortSel ? sortSel.value : 'featured';
    if (by === 'low') out.sort((a,b) => a.price - b.price);
    else if (by === 'high') out.sort((a,b) => b.price - a.price);
    else if (by === 'rating') out.sort((a,b) => b.rating - a.rating);
    else if (by === 'discount') out.sort((a,b) => discount(b) - discount(a));
    if (count) count.textContent = out.length + ' product' + (out.length === 1 ? '' : 's');
    renderGrid('#shopGrid', out);
  }
  if (sortSel) sortSel.addEventListener('change', apply);
  const note = $('#searchNote');
  if (note && q) note.textContent = 'Search results for \u201C' + q + '\u201D';
  apply();
}

/* ---------- Product detail page ---------- */
function initProduct(){
  const info = $('#pdpInfo');
  if (!info) return;
  const p = PRODUCTS.find(x => x.id === getParam('id')) || PRODUCTS[0];
  const off = discount(p);
  $('#pdpCrumb').textContent = p.name;
  $('#pdpCat').textContent = catName(p.cat);
  const gallery = [p].concat(
    PRODUCTS.filter(x => x.cat === p.cat && x.id !== p.id),
    PRODUCTS.filter(x => x.cat !== p.cat)
  ).slice(0, 4);
  $('#pdpMain').innerHTML = '<img class="pdp__img" src="' + productImg(p) + '" alt="' + esc(p.name) + '" decoding="async">';
  $('#pdpThumbs').innerHTML = gallery.map((x, i) =>
    '<button class="' + (i === 0 ? 'is-active' : '') + '" data-img="' + productImg(x) +
      '" data-alt="' + esc(x.name) + '" aria-label="View ' + esc(x.name) + '">' +
      '<img src="' + productImg(x) + '" alt="" loading="lazy" decoding="async"></button>').join('');
  $('#pdpThumbs').addEventListener('click', e => {
    const b = e.target.closest('button'); if (!b) return;
    $('#pdpMain').innerHTML = '<img class="pdp__img" src="' + b.dataset.img + '" alt="' + (b.dataset.alt || '') + '" decoding="async">';
    $$('#pdpThumbs button').forEach(x => x.classList.toggle('is-active', x === b));
  });
  $('#pdpColors').addEventListener('click', e => {
    const b = e.target.closest('button'); if (!b) return;
    $$('#pdpColors button').forEach(x => x.classList.toggle('is-active', x === b));
  });
  $('#pdpTitle').textContent = p.name;
  $('#pdpStars').textContent = stars(p.rating);
  $('#pdpRating').textContent = p.rating.toFixed(1) + ' (' + (12 + p.id.charCodeAt(1)) + ' reviews)';
  $('#pdpPrice').innerHTML = '<span class="now">' + rupee(p.price) + '</span>' +
    (p.mrp ? '<span class="was">' + rupee(p.mrp) + '</span><span class="badge badge--off">' + off + '% OFF</span>' : '');
  $('#pdpDesc').textContent = p.name + ' \u2014 a dependable everyday accessory chosen for compatibility, build quality and practical value. Backed by ' + STORE.brand + STORE.brand2 + ' easy returns and fast dispatch.';
  $('#pdpSpec').innerHTML =
    [['Category', catName(p.cat)], ['Brand', STORE.brand + STORE.brand2], ['Warranty', '6 months'], ['In stock', 'Yes \u2014 ships in 24h'],
     ['Compatibility', 'Universal / device specific'], ['Country of origin', 'India']]
    .map(r => '<div><dt>' + r[0] + '</dt><dd>' + r[1] + '</dd></div>').join('');
  $('#pdpAddCart').addEventListener('click', () => {
    addToCart(p.id, Math.max(1, parseInt($('#pdpQty').value, 10) || 1));
  });
  $('#qtyMinus').addEventListener('click', () => { const el = $('#pdpQty'); el.value = Math.max(1, (+el.value||1) - 1); });
  $('#qtyPlus').addEventListener('click', () => { const el = $('#pdpQty'); el.value = (+el.value||1) + 1; });
  $('#pdpTabs').addEventListener('click', e => {
    const b = e.target.closest('button'); if (!b) return;
    $$('#pdpTabs button').forEach(x => x.classList.toggle('is-active', x === b));
    $$('.tabpane').forEach(pane => pane.classList.toggle('is-active', pane.id === b.dataset.tab));
  });
  renderGrid('#relatedGrid', PRODUCTS.filter(x => x.cat === p.cat && x.id !== p.id)
    .concat(PRODUCTS.filter(x => x.cat !== p.cat)).slice(0, 4));
}

/* ---------- Cart page ---------- */
function initCart(){
  const wrap = $('#cartLines');
  if (!wrap) return;
  function render(){
    const items = cartGet().map(i => Object.assign({}, PRODUCTS.find(p => p.id === i.id), { qty: i.qty }))
      .filter(i => i.name);
    if (!items.length){
      wrap.innerHTML = '<p class="empty">Your cart is empty.<br><br><a class="btn btn--primary" href="shop.html">Start shopping</a></p>';
      $('#cartSummary').style.display = 'none';
      return;
    }
    $('#cartSummary').style.display = 'block';
    wrap.innerHTML = items.map(p =>
      '<div class="cartline">' +
        '<div class="cartline__media"><img src="' + productImg(p) + '" alt="" loading="lazy" decoding="async"></div>' +
        '<div><span class="cartline__cat">' + catName(p.cat) + '</span>' +
          '<h3>' + p.name + '</h3>' +
          '<div class="qty"><button data-dec="' + p.id + '">&minus;</button>' +
            '<input type="text" value="' + p.qty + '" readonly>' +
            '<button data-inc="' + p.id + '">+</button></div></div>' +
        '<div class="cartline__right">' +
          '<span class="price">' + rupee(p.price * p.qty) + '</span>' +
          '<button class="cartline__remove" data-del="' + p.id + '">' + icon('close', 14) + ' Remove</button>' +
        '</div>' +
      '</div>').join('');
    const sub = items.reduce((s, p) => s + p.price * p.qty, 0);
    const mrp = items.reduce((s, p) => s + (p.mrp || p.price) * p.qty, 0);
    const save = mrp - sub;
    const ship = sub >= 999 ? 0 : 59;
    $('#sumSub').textContent = rupee(sub);
    $('#sumSaveRow').style.display = save ? 'flex' : 'none';
    $('#sumSave').textContent = '\u2212 ' + rupee(save);
    $('#sumShip').textContent = ship ? rupee(ship) : 'FREE';
    $('#sumTotal').textContent = rupee(sub + ship);
  }
  wrap.addEventListener('click', e => {
    const inc = e.target.closest('[data-inc]'), dec = e.target.closest('[data-dec]'), del = e.target.closest('[data-del]');
    if (inc) { const it = cartGet().find(i => i.id === inc.dataset.inc); setQty(it.id, it.qty + 1); render(); }
    if (dec) { const it = cartGet().find(i => i.id === dec.dataset.dec); setQty(it.id, it.qty - 1); render(); }
    if (del) { removeFromCart(del.dataset.del); render(); }
  });
  const co = $('#checkoutBtn');
  if (co && co.tagName === 'BUTTON'){
    co.addEventListener('click', () => toast('Checkout demo \u2014 connect a payment gateway to go live'));
  }
  render();
}

/* ---------- Contact / quote form ---------- */
function initForm(){
  const f = $('#quoteForm');
  if (!f) return;
  f.addEventListener('submit', e => {
    e.preventDefault();
    const msg = $('#formMsg');
    msg.classList.add('is-show');
    msg.textContent = 'Thanks ' + ($('#fName').value || 'there') +
      '! Your request has been received. Our team will reply within 1 business day.';
    f.reset();
  });
}

/* ---------- Wishlist page ---------- */
function initWishlist(){
  const host = $('#wishGrid');
  if (!host) return;
  const count = $('#wishCount');
  function render(){
    const list = PRODUCTS.filter(p => wishHas(p.id));
    if (count) count.textContent = list.length + ' item' + (list.length === 1 ? '' : 's');
    if (!list.length){
      host.innerHTML = '<p class="empty">Your wishlist is empty.<br><br>' +
        '<a class="btn btn--primary" href="shop.html">Browse products</a></p>';
      return;
    }
    renderGrid('#wishGrid', list);
  }
  document.addEventListener('wishchange', render);
  render();
}

/* ---------- Checkout page ---------- */
function initCheckout(){
  const host = $('#checkoutItems');
  if (!host) return;
  const items = cartGet()
    .map(i => Object.assign({}, PRODUCTS.find(p => p.id === i.id), { qty: i.qty }))
    .filter(i => i.name);

  if (!items.length){
    /* Hide the whole checkout block (form AND order-summary) when there is nothing to buy */
    const wrap = $('#checkoutWrap'), empty = $('#checkoutEmpty');
    if (wrap) wrap.style.display = 'none';
    if (empty) empty.innerHTML = '<p class="empty">Your cart is empty.<br><br>' +
      '<a class="btn btn--primary" href="shop.html">Start shopping</a></p>';
    return;
  }

  host.innerHTML = items.map(p =>
    '<div class="cartline">' +
      '<div class="cartline__media"><img src="' + productImg(p) + '" alt="" loading="lazy" decoding="async"></div>' +
      '<div><span class="cartline__cat">' + catName(p.cat) + '</span>' +
        '<h3>' + p.name + '</h3>' +
        '<span class="cartline__cat">Qty ' + p.qty + '</span></div>' +
      '<div class="cartline__right"><span class="price">' + rupee(p.price * p.qty) + '</span></div>' +
    '</div>').join('');

  const sub  = items.reduce((s, p) => s + p.price * p.qty, 0);
  const ship = sub >= 999 ? 0 : 59;
  $('#coSub').textContent   = rupee(sub);
  $('#coShip').textContent  = ship ? rupee(ship) : 'FREE';
  $('#coTotal').textContent = rupee(sub + ship);
  $('#coCount').textContent = items.length + ' item' + (items.length === 1 ? '' : 's');

  $$('.paymethod').forEach(m => m.addEventListener('click', () => {
    $$('.paymethod').forEach(x => x.classList.toggle('is-on', x === m));
    const r = $('input', m);
    if (r) r.checked = true;
  }));

  $('#checkoutForm').addEventListener('submit', e => {
    e.preventDefault();
    localStorage.removeItem(CART_KEY);
    updateCartCount();
    $('#checkoutWrap').style.display = 'none';
    $('#orderDone').style.display = 'block';
    toast('Order placed \u2014 thank you!');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

/* ---------- Floating WhatsApp / chat ---------- */
function renderWhatsApp(){
  if ($('.wa-float')) return;
  const num = STORE.phoneRaw.replace(/[^0-9]/g, '');
  const a = document.createElement('a');
  a.className = 'wa-float';
  a.href = 'https://wa.me/' + num + '?text=' +
    encodeURIComponent('Hi ' + STORE.domain + ', I would like to enquire about mobile accessories.');
  a.target = '_blank';
  a.rel = 'noopener';
  a.setAttribute('aria-label', 'Chat on WhatsApp');
  a.innerHTML =
    '<svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">' +
    '<path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm5.2 14.2c-.2.6-1.2 1.2-1.7 1.2-.5.1-1 .1-1.7-.1-.4-.1-.9-.3-1.6-.6-2.8-1.2-4.6-4-4.7-4.2-.1-.2-1.1-1.5-1.1-2.8s.7-2 .9-2.2c.2-.3.5-.3.7-.3h.5c.2 0 .4 0 .6.5l.8 1.9c.1.2.1.4 0 .5l-.3.5-.4.4c-.1.1-.3.3-.1.6.2.3.8 1.3 1.7 2.1 1.2 1 2.1 1.3 2.4 1.5.3.1.4.1.6-.1l.8-1c.2-.2.4-.2.6-.1l1.9.9c.3.1.4.2.5.3.1.2.1.7-.1 1.3Z"/></svg>' +
    '<span>Chat with us</span>';
  document.body.appendChild(a);
}

/* ---------- Boot ---------- */
document.addEventListener('DOMContentLoaded', function(){
  renderHeader();
  renderFooter();
  renderHero();
  renderCats();
  renderBrowse();
  renderFaq();
  renderInfoBadges();
  renderGrid('#newArrivals', PRODUCTS.filter(p => p.tag || discount(p) >= 40).slice(0, 8));
  renderGrid('#trendingGrid', PRODUCTS.slice().sort((a,b) => b.rating - a.rating).slice(0, 4));
  initShop();
  initProduct();
  initCart();
  initWishlist();
  initCheckout();
  initForm();
  renderWhatsApp();
  updateCartCount();
  updateWishCount();

  /* wishlist toggles work anywhere on the site */
  document.addEventListener('click', function(e){
    const w = e.target.closest('[data-wish]');
    if (!w) return;
    e.preventDefault();
    e.stopPropagation();
    const on = wishToggle(w.dataset.wish);
    w.classList.toggle('is-on', on);
  });
});