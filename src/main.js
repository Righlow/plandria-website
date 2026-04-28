import "./style.css";

// ── YOUR EXACT asset filenames ──
import BG3 from "./assets/BG3.jpg";
import BGT from "./assets/BGT.jpg";
import BGT1 from "./assets/BGT1.jpg";
import candleFlame from "./assets/candleFlame.jpg";
import CandleFlame2 from "./assets/Candleflame2.jpg";
import stoneBG from "./assets/stoneBG.jpg";

const SVG = {
  leaf: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.5 1 6.5s-2.84 4.16-8 4.16L19 20"/><path d="M2 21c0-3 1.85-5.36 5.08-6M5 21H2"/></svg>`,
  seedling: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22V12"/><path d="M12 12C12 7 7 3 3 3c0 5 4 9 9 9"/><path d="M12 12c0-5 5-9 9-9-1 5-5 9-9 9"/></svg>`,
  recycle: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M7 19H4.815a1.83 1.83 0 0 1-1.57-.881 1.785 1.785 0 0 1-.004-1.784L7.196 9.5"/><path d="M11 19h8.203a1.83 1.83 0 0 0 1.556-.89 1.784 1.784 0 0 0 0-1.775l-1.226-2.12"/><path d="m14 16-3 3 3 3"/><path d="M8.293 13.596 7.196 9.5 3.1 10.598"/><path d="m9.344 5.811 1.093-1.892A1.83 1.83 0 0 1 11.985 3a1.784 1.784 0 0 1 1.546.888l3.943 6.843"/><path d="m13.378 9.633 4.096 1.098 1.097-4.096"/></svg>`,
  flame: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"/></svg>`,
  droplet: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5S13.5 5 12 2C10.5 5 8.5 8.5 6.5 9.5 4.5 11.1 3.5 13 3.5 15A7.5 7.5 0 0 0 12 22z"/></svg>`,
  wind: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M17.7 7.7a2.5 2.5 0 1 1 1.8 4.3H2"/><path d="M9.6 4.6A2 2 0 1 1 11 8H2"/><path d="M12.6 19.4A2 2 0 1 0 14 16H2"/></svg>`,
  sun: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"/></svg>`,
  waves: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M2 6c.6.5 1.2 1 2.5 1C7 7 7 5 9.5 5c2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"/><path d="M2 12c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"/><path d="M2 18c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"/></svg>`,
  mountains: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="m8 3 4 8 5-5 5 15H2L8 3z"/></svg>`,
  rose: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M11.5 15H9a5 5 0 0 1-5-5V8l3 1 2-3 2 3 3-1v2a5 5 0 0 1-2.5 4.33"/><path d="M12 22v-7"/><path d="M10 17c.33.33 2.67.33 3 0"/></svg>`,
  check: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>`,
  concrete: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M3 15h18M9 3v18M15 3v18"/></svg>`,
  braid: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2v20M8 6c0 4 8 4 8 8s-8 4-8 8M16 6c0 4-8 4-8 8s8 4 8 8"/></svg>`,
  user: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="4"/><path d="M4 20c0-4 3.6-7 8-7s8 3 8 7"/></svg>`,
  bag: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 01-8 0"/></svg>`,
};

// ── INJECT IMAGES ──
function updateNavLogo() {
  const theme = document.documentElement.getAttribute("data-theme");
  // Same logo both modes, just the CSS tint changes
  document.getElementById("nav-logo").src = BGT1;
}
document.getElementById("nav-logo").src = BGT1;
document.getElementById("hero-bg-img").src = BG3;
// hero logo badge removed
document.getElementById("about-img").src = candleFlame;
document.getElementById("proc-img1").src = BGT;
document.getElementById("proc-img2").src = CandleFlame2;
document.getElementById("proc-img3").src = stoneBG;
document.getElementById("ico-user").innerHTML = SVG.user;
document.getElementById("ico-bag").innerHTML = SVG.bag;
["ico-check1", "ico-check2", "ico-check3", "ico-check4"].forEach((id) => {
  document.getElementById(id).innerHTML = SVG.check;
});
document.getElementById("proc-ico-1").innerHTML = SVG.concrete;
document.getElementById("proc-ico-2").innerHTML = SVG.droplet;
document.getElementById("proc-ico-3").innerHTML = SVG.braid;
document.getElementById("proc-ico-4").innerHTML = SVG.flame;

// ── DATA ──
const scents = [
  {
    name: "Forest Dew",
    note: "Pine · Eucalyptus · Moss",
    iconKey: "mountains",
    price: "£24",
    seeds: "Wildflower Seeds",
  },
  {
    name: "Lavender Calm",
    note: "Lavender · Chamomile",
    iconKey: "wind",
    price: "£24",
    seeds: "Lavender Seeds",
  },
  {
    name: "Citrus Bloom",
    note: "Orange · Bergamot · Zest",
    iconKey: "sun",
    price: "£22",
    seeds: "Marigold Seeds",
  },
  {
    name: "Vanilla Hearth",
    note: "Vanilla · Amber · Sandalwood",
    iconKey: "flame",
    price: "£26",
    seeds: "Basil Seeds",
  },
  {
    name: "Ocean Mist",
    note: "Sea Salt · Driftwood · Mint",
    iconKey: "waves",
    price: "£22",
    seeds: "Sea Holly Seeds",
  },
  {
    name: "Rose Garden",
    note: "Rose · Jasmine · Peony",
    iconKey: "rose",
    price: "£28",
    seeds: "Rose Seeds",
  },
];

const pots = [
  {
    img: candleFlame,
    badge: "Best Seller",
    cls: "feat",
    title: "Signature Candle Pot",
    desc: "Our flagship biodegradable pot with natural wax. Burns 40+ hours. Ready to plant when done.",
    price: "£28",
    tags: ["Natural Wax", "Braided Wick", "Concrete"],
    iconKey: "flame",
  },
  {
    img: BGT,
    badge: "New",
    cls: "sm",
    title: "Heritage Planter",
    desc: "The original Plandria pot. Empty and ready for seeds. Handcast, fully biodegradable.",
    price: "£14",
    tags: ["Glazed", "Eco-Friendly"],
    iconKey: "seedling",
  },
  {
    img: stoneBG,
    badge: "Limited",
    cls: "third",
    title: "Grey Stone Pot",
    desc: "Concrete grey finish with natural texture. Minimal and earthy for any space.",
    price: "£18",
    tags: ["Dust Dye", "Mortar Base"],
    iconKey: "mountains",
  },
  {
    img: BGT1,
    badge: "Eco",
    cls: "third",
    title: "Earthy Tones Pot",
    desc: "Warm earthen-coloured pot. Pairs perfectly with herb seeds.",
    price: "£20",
    tags: ["Handcast", "Seeds Included"],
    iconKey: "leaf",
  },
  {
    img: CandleFlame2,
    badge: "Lit",
    cls: "third",
    title: "Candle Pot — Burning",
    desc: "Photographed in full burn — a calming flame before a new life begins.",
    price: "£22",
    tags: ["Organic Wax", "Cotton Wick"],
    iconKey: "droplet",
  },
];

const whyCards = [
  {
    icon: "leaf",
    title: "100% Natural",
    desc: "Mortar base, natural wax, cotton wicks. Everything sustainable and kind to the environment.",
  },
  {
    icon: "recycle",
    title: "Two Cycles",
    desc: "Candle first, planter second. Zero waste by design — the pot lives on after the flame.",
  },
  {
    icon: "seedling",
    title: "Made by Hand",
    desc: "Each pot is cast, glazed, dyed, and wicked by hand. No two are exactly the same.",
  },
];

// ── RENDER SCENTS ──
const sg = document.getElementById("scent-grid");
scents.forEach((s) => {
  const ico = SVG[s.iconKey] || "";
  const icoInner = ico.replace(/<svg[^>]*>/, "").replace("</svg>", "");
  const seedInner = SVG.seedling
    .replace(/<svg[^>]*>/, "")
    .replace("</svg>", "");
  sg.innerHTML += `
    <div class="scent-tile">
      <div class="scent-ring r1"></div><div class="scent-ring r2"></div>
      <div class="scent-art">
        <div class="scent-blob"></div>
        <div class="scent-art-svg"><svg viewBox="0 0 24 24" fill="none" stroke-width="1" stroke-linecap="round" stroke-linejoin="round">${icoInner}</svg></div>
      </div>
      <div class="scent-content">
        <div class="scent-name">${s.name}</div>
        <div class="scent-note">${s.note}</div>
        <div class="scent-seeds-tag"><svg viewBox="0 0 24 24" fill="none" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">${seedInner}</svg>${s.seeds}</div>
        <div class="scent-price-row">
          <span class="scent-price">${s.price}</span>
          <button class="scent-add-btn" onclick="addToCart('${s.name}','${s.price}','${s.iconKey}')">Add to Cart</button>
        </div>
      </div>
    </div>`;
});

// ── RENDER POTS ──
const pg = document.getElementById("pot-grid");
pots.forEach((p) => {
  const tags = p.tags.map((t) => `<span class="pot-tag">${t}</span>`).join("");
  pg.innerHTML += `
    <div class="pot-card ${p.cls}">
      <img src="${p.img}" alt="${p.title}"/>
      <div class="pot-info">
        <span class="pot-badge">${p.badge}</span>
        <div class="pot-title">${p.title}</div>
        <p class="pot-desc">${p.desc}</p>
        <div class="pot-tags">${tags}</div>
        <span class="pot-price">${p.price}</span><br>
        <a href="#" class="pot-cta" onclick="addToCart('${p.title}','${p.price}','${p.iconKey}');return false">Add to Cart</a>
      </div>
    </div>`;
});

// ── RENDER WHY ──
const wg = document.getElementById("why-grid");
whyCards.forEach((w) => {
  wg.innerHTML += `<div class="why-card fade-up"><div class="why-icon">${SVG[w.icon]}</div><h3 class="why-title">${w.title}</h3><p class="why-desc">${w.desc}</p></div>`;
});

// ── CART ──
let cart = [];
window.addToCart = (name, price, icon) => {
  cart.push({ name, price, icon });
  renderCart();
  showToast();
};
function renderCart() {
  document.getElementById("cart-count").textContent = cart.length;
  const el = document.getElementById("cart-items"),
    footer = document.getElementById("cart-footer");
  if (!cart.length) {
    el.innerHTML = '<p class="cart-empty">Your cart is empty.</p>';
    footer.style.display = "none";
    return;
  }
  el.innerHTML = cart
    .map(
      (item, i) => `<div class="cart-item">
    <svg class="cart-item-icon" viewBox="0 0 24 24" fill="none" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">${(SVG[item.icon] || SVG.leaf).replace(/<svg[^>]*>/, "").replace("</svg>", "")}</svg>
    <div class="cart-item-info"><div class="cart-item-name">${item.name}</div><div class="cart-item-price">${item.price}</div></div>
    <button class="cart-item-remove" onclick="removeFromCart(${i})">&#10005;</button></div>`,
    )
    .join("");
  document.getElementById("total-price").textContent =
    "£" +
    cart
      .reduce((s, i) => s + parseFloat(i.price.replace("£", "")), 0)
      .toFixed(2);
  footer.style.display = "block";
}
window.removeFromCart = (i) => {
  cart.splice(i, 1);
  renderCart();
};
window.toggleCart = () => {
  document.getElementById("cart-drawer").classList.toggle("open");
  document.getElementById("overlay").classList.toggle("show");
};
window.closeCart = () => {
  document.getElementById("cart-drawer").classList.remove("open");
  document.getElementById("overlay").classList.remove("show");
};
function showToast() {
  const t = document.getElementById("toast");
  t.classList.add("show");
  setTimeout(() => t.classList.remove("show"), 2200);
}

// ── LOGIN ──

// ── MOBILE MENU ──
window.toggleMenu = () =>
  document.getElementById("mobile-menu").classList.toggle("open");

// ── CURSOR ──
// cursor removed for performance

// ── THEME ──
(function () {
  const s = localStorage.getItem("plandria-theme") || "dark";
  document.documentElement.setAttribute("data-theme", s);
  updateNavLogo();
})();
window.toggleTheme = () => {
  const next =
    document.documentElement.getAttribute("data-theme") === "light"
      ? "dark"
      : "light";
  document.documentElement.setAttribute("data-theme", next);
  localStorage.setItem("plandria-theme", next);
  updateNavLogo();
};

// ── NAV SCROLL ──
window.addEventListener("scroll", () =>
  document
    .getElementById("main-nav")
    .classList.toggle("scrolled", window.scrollY > 60),
);

// ════════════════════════════════════════════
// GSAP ANIMATIONS — efficient, once:true
// ════════════════════════════════════════════
const gsap = window.gsap;
const ScrollTrigger = window.ScrollTrigger;
gsap.registerPlugin(ScrollTrigger);

// Shared defaults — keeps things DRY
const ST = (trigger, start = "top 88%") => ({
  trigger,
  start,
  once: true, // fires once, then cleans up — best for perf
});

// ── HERO ENTRANCE — staggered text sequence ──
const heroTl = gsap.timeline({ defaults: { ease: "power3.out" } });
heroTl
  .from("#anim-eyebrow", { opacity: 0, y: 24, duration: 0.7 })
  .from("#anim-title", { opacity: 0, y: 56, duration: 1 }, "-=.4")
  .from("#anim-script", { opacity: 0, y: 20, duration: 0.7 }, "-=.5")
  .from("#anim-est", { opacity: 0, duration: 0.5 }, "-=.2")
  .from("#anim-pill", { opacity: 0, y: 14, duration: 0.6 }, "-=.3")
  .from("#anim-cta", { opacity: 0, y: 14, duration: 0.6 }, "-=.3")
  .from("#anim-scroll", { opacity: 0, duration: 0.5 }, "-=.2");

// ── HERO PHOTO — subtle Ken Burns zoom on load ──
gsap.from("#hero-bg-img", {
  scale: 1.08,
  duration: 2.4,
  ease: "power2.out",
  clearProps: "transform", // clean up after so it doesn't block CSS
});

// ── HERO PHOTO — slow parallax on scroll ──
// Only run on non-mobile (saves perf on small screens)
if (window.innerWidth > 768) {
  gsap.to("#hero-bg-img", {
    yPercent: 18,
    ease: "none",
    scrollTrigger: {
      trigger: "#hero",
      start: "top top",
      end: "bottom top",
      scrub: 1.2, // smooth scrub, not snappy
    },
  });
}

// ── SECTION FADE-UPS — batch for perf ──
// Using gsap.utils.toArray + ScrollTrigger.batch is faster than forEach
ScrollTrigger.batch(".fade-up", {
  start: "top 90%",
  once: true,
  onEnter: (batch) =>
    gsap.to(batch, {
      opacity: 1,
      y: 0,
      duration: 0.85,
      ease: "power3.out",
      stagger: 0.1,
    }),
});
ScrollTrigger.batch(".fade-left", {
  start: "top 90%",
  once: true,
  onEnter: (batch) =>
    gsap.to(batch, {
      opacity: 1,
      x: 0,
      duration: 0.85,
      ease: "power3.out",
      stagger: 0.08,
    }),
});
ScrollTrigger.batch(".fade-right", {
  start: "top 90%",
  once: true,
  onEnter: (batch) =>
    gsap.to(batch, {
      opacity: 1,
      x: 0,
      duration: 0.85,
      ease: "power3.out",
      stagger: 0.08,
    }),
});

// ── SCENT TILES — stagger from bottom with scale ──
gsap.from(".scent-tile", {
  scrollTrigger: { ...ST("#scent-grid", "top 82%") },
  opacity: 0,
  y: 50,
  scale: 0.96,
  stagger: { amount: 0.5, from: "start" },
  duration: 0.75,
  ease: "power2.out",
});

// ── POT CARDS — stagger with subtle clip reveal ──
// Each card slides up + fades; featured card gets a longer duration
gsap.from(".pot-card.feat", {
  scrollTrigger: { ...ST("#pot-grid", "top 80%") },
  opacity: 0,
  y: 40,
  duration: 0.9,
  ease: "power3.out",
});
gsap.from(".pot-card:not(.feat)", {
  scrollTrigger: { ...ST("#pot-grid", "top 80%") },
  opacity: 0,
  y: 36,
  scale: 0.97,
  stagger: { amount: 0.4 },
  duration: 0.75,
  ease: "power2.out",
  delay: 0.15,
});

// ── ABOUT IMAGE — clip-path wipe reveal (left to right) ──
// CSS sets clip-path initially; GSAP animates it open
gsap.from("#about-img", {
  scrollTrigger: { ...ST("#about", "top 75%") },
  clipPath: "inset(0 100% 0 0)",
  duration: 1.1,
  ease: "power3.inOut",
});
// Badge slides up after image reveals
gsap.from(".about-img-badge", {
  scrollTrigger: { ...ST("#about", "top 72%") },
  opacity: 0,
  y: 20,
  duration: 0.6,
  ease: "power2.out",
  delay: 0.6,
});

// ── PROCESS STEPS — stagger with number count-up feel ──
gsap.from(".process-step", {
  scrollTrigger: { ...ST(".process-grid", "top 82%") },
  opacity: 0,
  y: 30,
  stagger: { amount: 0.5, from: "start" },
  duration: 0.7,
  ease: "power2.out",
});

// ── PROCESS PHOTOS — slide in from alternating sides ──
const procPhotos = document.querySelectorAll(".process-photo-cell");
if (procPhotos.length) {
  gsap.from(procPhotos, {
    scrollTrigger: { ...ST(".process-photos", "top 85%") },
    opacity: 0,
    x: (i) => (i % 2 === 0 ? -30 : 30), // alternate left/right
    duration: 0.8,
    ease: "power2.out",
    stagger: 0.12,
  });
  // Subtle scale on the images inside
  gsap.from(".process-photo-cell img", {
    scrollTrigger: { ...ST(".process-photos", "top 85%") },
    scale: 1.06,
    duration: 1.2,
    ease: "power2.out",
    stagger: 0.12,
  });
}

// ── WHY CARDS — scale up from slightly small ──
gsap.from(".why-card", {
  scrollTrigger: { ...ST(".why-grid", "top 82%") },
  opacity: 0,
  y: 24,
  scale: 0.95,
  stagger: 0.12,
  duration: 0.7,
  ease: "back.out(1.4)",
});

// ── NAV — fade in on load ──
gsap.from("nav.main-nav", {
  opacity: 0,
  y: -10,
  duration: 0.6,
  ease: "power2.out",
  delay: 0.2,
});
