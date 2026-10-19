/* ============================================================
   yashmobile.store  —  Shared data (categories, products, store)
   ============================================================ */

const STORE = {
  brand: "yashmobile",
  brand2: ".store",
  domain: "yashmobile.store",
  tagline: "Mobile Accessories for Every Device",
  phone: "+91 84510 66698",
  phoneRaw: "+918451066698",
  email: "care@yashmobile.store",
  hours: "11am to 7pm (Monday to Saturday)",
  address: "Shop No. 12, Mobile Market, Main Road, India"
};

/* Category groups (mega menu + browse chips) */
const CATEGORIES = [
  { id: "cases",    name: "Cover & Cases",           icon: "case",     sub: ["Glitter Covers", "Magsafe Covers", "Pouches", "Rugged Case"] },
  { id: "chargers", name: "Chargers & Adapters",     icon: "charger",  sub: ["20 Watt", "Fast Chargers", "Travel Adapters"] },
  { id: "cables",   name: "Cables & Wires",          icon: "cable",    sub: ["Laptop Cable", "Magnetic Cable", "Travel Cable", "Powerbank Cable"] },
  { id: "powerbank",name: "Powerbanks & Batteries",  icon: "battery",  sub: ["Powerbank", "Batteries"] },
  { id: "screen",   name: "Screen Protectors",       icon: "shield",   sub: ["Tempered Glass", "Nano Glass", "Privacy Glass"] },
  { id: "earbuds",  name: "Earbud Accessories",      icon: "earbud",   sub: ["Earbud Cases", "Earbud Tips"] },
  { id: "earphones",name: "Earphones",               icon: "headphone",sub: ["Wired", "Wireless"] },
  { id: "car",      name: "Car Gadgets",             icon: "car",      sub: ["Car Charger", "Car Holders", "Car Invertor"] },
  { id: "watch",    name: "Smart Watch Accessories", icon: "watch",    sub: ["Watch Cables", "Watch Straps"] },
  { id: "laptop",   name: "Laptop Accessories",      icon: "laptop",   sub: ["Hard Shell Cover", "Laptop Stand", "Keyboards & Mouse", "Laptop Bags"] },
  { id: "tablet",   name: "Tablet Accessories",      icon: "tablet",   sub: ["Tablet Stand", "Tablet Cases"] },
  { id: "stand",    name: "Stand & Holders",         icon: "stand",    sub: ["Desk Stand", "Cable Holder", "Foldable Stand"] },
  { id: "hubs",     name: "Connectors & Hubs",       icon: "hub",      sub: ["USB Hubs", "Convertors", "Aux Music"] },
  { id: "gaming",   name: "Gaming Accessories",      icon: "gamepad",  sub: ["Controllers", "Grips"] }
];

/* Products — price, mrp, category, icon key, rating */
const PRODUCTS = [
  { id: "p1",  name: "240W USB-C Fast Charging Adapter",            cat: "chargers",  price: 279,  mrp: null, icon: "charger",  rating: 4.6, tag: "" },
  { id: "p2",  name: "Cable Holder & Foldable Stand - Black",       cat: "stand",     price: 279,  mrp: 499,  icon: "stand",    rating: 4.4, tag: "" },
  { id: "p3",  name: "Hardshell Transparent Case for MacBook 13in",  cat: "laptop",    price: 1499, mrp: null, icon: "laptop",   rating: 4.7, tag: "New" },
  { id: "p4",  name: "Heat Dissipation MagSafe Case for iPhone 17",  cat: "cases",     price: 999,  mrp: 1499, icon: "case",     rating: 4.8, tag: "Hot" },
  { id: "p5",  name: "AirTag Full Covered Wrist Strap - Black",      cat: "cases",     price: 499,  mrp: 999,  icon: "tag",      rating: 4.3, tag: "" },
  { id: "p6",  name: "Whoop 5.0 Charging Cable - USB Fast Charger",  cat: "watch",     price: 3499, mrp: 4999, icon: "watch",    rating: 4.5, tag: "" },
  { id: "p7",  name: "Google Pixel 11 Pro MagSafe Case - Black",     cat: "cases",     price: 1499, mrp: null, icon: "case",     rating: 4.6, tag: "" },
  { id: "p8",  name: "Tablet Stand with Lock & Key - Metal",         cat: "tablet",    price: 1899, mrp: 2499, icon: "tablet",   rating: 4.5, tag: "" },
  { id: "p9",  name: "20000mAh Power Bank - 22.5W Fast Charge",      cat: "powerbank", price: 1799, mrp: 2999, icon: "battery",  rating: 4.7, tag: "Hot" },
  { id: "p10", name: "Braided 100W USB-C to USB-C Cable 1.5m",       cat: "cables",    price: 349,  mrp: 799,  icon: "cable",    rating: 4.4, tag: "" },
  { id: "p11", name: "Nano Glass Screen Protector - Universal",      cat: "screen",    price: 199,  mrp: 499,  icon: "shield",   rating: 4.2, tag: "" },
  { id: "p12", name: "Magnetic Wireless Car Holder - Dashboard",     cat: "car",       price: 699,  mrp: 1299, icon: "car",      rating: 4.5, tag: "" },
  { id: "p13", name: "TWS Earbud Silicone Case with Hook",           cat: "earbuds",   price: 249,  mrp: 599,  icon: "earbud",   rating: 4.3, tag: "" },
  { id: "p14", name: "Wired Earphones with Mic - 3.5mm",             cat: "earphones", price: 399,  mrp: 899,  icon: "headphone",rating: 4.1, tag: "" },
  { id: "p15", name: "7-in-1 USB-C Hub - HDMI + USB 3.0 + SD",       cat: "hubs",      price: 2299, mrp: 3499, icon: "hub",      rating: 4.6, tag: "New" },
  ];

/* Hero slides */
const SLIDES = [
  { kicker: "Mobile essentials, thoughtfully sourced", title: "Mobile Accessories for Every Device and Business",
    text: "Dependable mobile accessories for everyday shopping and bulk procurement, curated for compatibility, quality and value.",
    cta: "Explore the collection", cta2: "Request a bulk quote", theme: "navy" },
  { kicker: "Fast power. Fewer interruptions.", title: "Power that keeps every device moving.",
    text: "Charge faster at home, at work or on the move with dependable adapters, power banks and everyday cables.",
    cta: "Shop charging", cta2: "Request a bulk quote", theme: "blue" },
  { kicker: "Everyday protection, elevated", title: "Protection designed to be seen.",
    text: "Explore cases and screen protection that balance a confident look with practical everyday coverage.",
    cta: "Shop protection", cta2: "Request a bulk quote", theme: "coral" }
];

/* FAQ */
const FAQS = [
  { q: "Do you offer bulk / B2B pricing?", a: "Yes. We supply retailers and procurement teams with volume pricing and quote-led rates for planned quantities. Send us a quote request and our team will respond with a practical accessories quote for your quantity and delivery location." },
  { q: "Are your accessories compatible with my device?", a: "Every product page lists device compatibility. Our range covers iPhone, Samsung, Google Pixel, MacBook, tablets, smart watches and universal 9in-15.6in laptops. If unsure, message us your exact model and we will confirm the right fit." },
  { q: "What is your return policy?", a: "Products can be returned for exchange as per our easy return policy, provided they are in original condition. Contact support within the return window and we will guide you through the process." },
  { q: "How long does shipping take?", a: "Orders are dispatched quickly and customised shipping is arranged as per your convenience. You will receive tracking details once your order ships." },
  { q: "Is payment secure?", a: "Yes - 100% secure payments are processed through our payment partner Razorpay with protected account and checkout." }
];
