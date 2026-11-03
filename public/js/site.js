/* Shared behaviour for every page: theme, menu, scroll effects, photo popup, quick jump (⌘K), copy email, toasts. */
(() => {
  const $ = id => document.getElementById(id);
  const esc = s => String(s).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  const still = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const EMAIL = document.body.dataset.email, BOOKING = document.body.dataset.booking;
  const onHome = document.body.dataset.page === "home";

  /* Toast messages (also used by the homepage and contact page scripts) */
  function toast(msg) {
    const t = $("toast");
    t.textContent = msg; t.hidden = false;
    clearTimeout(toast.timer);
    toast.timer = setTimeout(() => { t.hidden = true; }, 2200);
  }
  window.toast = toast;

  /* Copy email: any element with data-copy-email */
  function copyEmail() {
    const fallback = () => {
      const ta = document.createElement("textarea");
      ta.value = EMAIL; ta.setAttribute("readonly", ""); ta.style.cssText = "position:fixed;opacity:0";
      document.body.appendChild(ta); ta.select();
      let ok = false;
      try { ok = document.execCommand("copy"); } catch (e) {}
      ta.remove();
      toast(ok ? "Email copied" : "My email: " + EMAIL);
    };
    try { navigator.clipboard.writeText(EMAIL).then(() => toast("Email copied"), fallback); }
    catch (e) { fallback(); }
  }
  document.querySelectorAll("[data-copy-email]").forEach(b => b.addEventListener("click", copyEmail));

  const year = $("year"); if (year) year.textContent = new Date().getFullYear();

  /* Theme toggle: dark by default; a visitor's choice is remembered. */
  const ICONS = {
    sun: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/></svg>',
    moon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z"/></svg>'
  };
  const currentTheme = () => document.documentElement.dataset.theme || "dark";
  function syncThemeUI() {
    const dark = currentTheme() === "dark", btn = $("theme-toggle");
    btn.innerHTML = dark ? ICONS.sun : ICONS.moon;
    btn.setAttribute("aria-label", dark ? "Switch to light mode" : "Switch to dark mode");
    btn.title = btn.getAttribute("aria-label");
    document.querySelector('meta[name="theme-color"]').content = getComputedStyle(document.documentElement).getPropertyValue("--bg").trim();
  }
  $("theme-toggle").addEventListener("click", () => {
    const next = currentTheme() === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = next;
    try { localStorage.setItem("theme", next); } catch (e) {}
    syncThemeUI();
  });
  syncThemeUI();

  /* Photo popup: any .zoomable image; images sharing a data-group can be stepped through. */
  const lb = $("lightbox"), lbImg = $("lb-img");
  let lbSet = [], lbAt = 0;
  function showPhoto(i) {
    lbAt = (i + lbSet.length) % lbSet.length;
    const img = lbSet[lbAt], src = img.dataset.full || img.getAttribute("src");
    const big = src.replace(/\.jpg$/, "-lg.jpg");
    lbImg.onerror = () => { lbImg.onerror = null; lbImg.src = src; };
    lbImg.src = big;
    lbImg.alt = img.alt;
    $("lb-cap").textContent = img.alt;
    $("lb-count").textContent = lbSet.length > 1 ? `${lbAt + 1} / ${lbSet.length}` : "";
    lbImg.style.animation = "none"; void lbImg.offsetWidth; lbImg.style.animation = "";
  }
  function openPhoto(img) {
    const group = (img.dataset.group || "").replace(/-copy$/, "");
    lbSet = group ? [...document.querySelectorAll(`.zoomable[data-group="${group}"]`)] : [img];
    const at = lbSet.findIndex(x => x.getAttribute("src") === img.getAttribute("src"));
    $("lb-prev").hidden = $("lb-next").hidden = lbSet.length < 2;
    showPhoto(Math.max(0, at));
    document.documentElement.style.overflow = "hidden";
    lb.showModal();
  }
  document.addEventListener("click", e => { const img = e.target.closest(".zoomable"); if (img) openPhoto(img); });
  document.addEventListener("keydown", e => {
    const img = e.target.closest && e.target.closest(".zoomable");
    if (img && (e.key === "Enter" || e.key === " ")) { e.preventDefault(); openPhoto(img); }
    if (lb.open && e.key === "ArrowRight") showPhoto(lbAt + 1);
    if (lb.open && e.key === "ArrowLeft") showPhoto(lbAt - 1);
  });
  $("lb-close").addEventListener("click", () => lb.close());
  $("lb-prev").addEventListener("click", e => { e.stopPropagation(); showPhoto(lbAt - 1); });
  $("lb-next").addEventListener("click", e => { e.stopPropagation(); showPhoto(lbAt + 1); });
  lb.addEventListener("click", e => { if (e.target === lb || e.target.tagName === "FIGURE") lb.close(); });
  lb.addEventListener("close", () => { document.documentElement.style.overflow = ""; lbImg.removeAttribute("src"); });
  let swipeX = null;
  lbImg.addEventListener("pointerdown", e => { swipeX = e.clientX; });
  lbImg.addEventListener("pointerup", e => { if (swipeX === null) return; const dx = e.clientX - swipeX; swipeX = null; if (Math.abs(dx) > 50) showPhoto(lbAt + (dx < 0 ? 1 : -1)); });

  /* Phone/tablet menu */
  const MENU_ICONS = {
    open: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><path d="M4 8h16M4 16h16"/></svg>',
    close: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><path d="M6 6l12 12M18 6L6 18"/></svg>'
  };
  const menu = $("menu"), menuBtn = $("menu-btn");
  function setMenu(open) {
    menu.classList.toggle("open", open);
    menuBtn.innerHTML = open ? MENU_ICONS.close : MENU_ICONS.open;
    menuBtn.setAttribute("aria-expanded", open);
    menuBtn.setAttribute("aria-label", open ? "Close menu" : "Open menu");
  }
  setMenu(false);
  menuBtn.addEventListener("click", e => { e.stopPropagation(); setMenu(!menu.classList.contains("open")); });
  menu.addEventListener("click", e => { if (e.target.closest("a")) setMenu(false); });
  document.addEventListener("click", e => { if (menu.classList.contains("open") && !menu.contains(e.target)) setMenu(false); });
  addEventListener("keydown", e => { if (e.key === "Escape" && menu.classList.contains("open")) { setMenu(false); menuBtn.focus(); } });

  /* Scroll: progress bar, glass header, floating "Book" button */
  const nav = $("nav"), bar = $("progress"), fab = $("fab");
  const onScroll = () => {
    const max = document.documentElement.scrollHeight - innerHeight;
    bar.style.transform = `scaleX(${max > 0 ? Math.min(1, scrollY / max) : 0})`;
    nav.classList.toggle("scrolled", scrollY > 8);
  };
  addEventListener("scroll", onScroll, { passive: true }); onScroll();
  // Homepage: appears once the hero's booking button scrolls away. Other pages: after a short scroll.
  // The contact page has its own booking option, so the floating button stays hidden there.
  let heroGone = false, footerIn = false;
  const noFab = document.body.dataset.page === "contact";
  const syncFab = () => fab.classList.toggle("away", noFab || !heroGone || footerIn);
  if ("IntersectionObserver" in window) {
    if ($("cta")) new IntersectionObserver(([en]) => { heroGone = !en.isIntersecting; syncFab(); }).observe($("cta"));
    else { const check = () => { heroGone = scrollY > 500; syncFab(); }; addEventListener("scroll", check, { passive: true }); check(); }
    new IntersectionObserver(([en]) => { footerIn = en.isIntersecting; syncFab(); }, { threshold: 0.15 }).observe($("contact"));
  }
  syncFab();
  $("to-top").addEventListener("click", () => { scrollTo({ top: 0, behavior: still ? "auto" : "smooth" }); document.querySelector(".logo").focus({ preventScroll: true }); });

  /* Menu: highlight the current page, or on the homepage the section on screen */
  const links = [...menu.querySelectorAll("a")];
  const path = location.pathname.replace(/index\.html$/, "");
  links.forEach(a => { const href = a.getAttribute("href"); if (!href.includes("#") && href !== "/" && path.startsWith(href)) a.setAttribute("aria-current", "page"); });
  if (onHome && "IntersectionObserver" in window) {
    const spy = new IntersectionObserver(entries => {
      entries.forEach(en => {
        if (!en.isIntersecting) return;
        links.forEach(a => a.setAttribute("aria-current", a.getAttribute("href") === "/#" + en.target.id));
      });
    }, { rootMargin: "-45% 0px -50% 0px" });
    ["top", ...links.map(a => (a.getAttribute("href").split("#")[1] || ""))].forEach(id => id && $(id) && spy.observe($(id)));
  }

  /* Reveal sections as they scroll into view */
  if ("IntersectionObserver" in window && !still) {
    const rv = new IntersectionObserver(entries => entries.forEach(en => { if (en.isIntersecting) { en.target.classList.add("in"); rv.unobserve(en.target); } }), { rootMargin: "0px 0px -8% 0px" });
    document.querySelectorAll(".reveal").forEach(el => rv.observe(el));
  } else {
    document.querySelectorAll(".reveal").forEach(el => el.classList.add("in"));
  }

  /* Cards light up where the pointer is */
  if (matchMedia("(hover: hover)").matches) {
    document.addEventListener("pointermove", e => {
      const card = e.target.closest && e.target.closest(".spot");
      if (!card) return;
      const r = card.getBoundingClientRect();
      card.style.setProperty("--mx", `${e.clientX - r.left}px`);
      card.style.setProperty("--my", `${e.clientY - r.top}px`);
    }, { passive: true });
  }

  /* Quick jump (⌘K / Ctrl+K or "/") */
  const isMac = /Mac|iPhone|iPad/.test(navigator.platform || navigator.userAgent);
  $("pal-kbd").textContent = isMac ? "⌘K" : "Ctrl K";
  const PI = {
    go: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>',
    page: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="3" width="16" height="18" rx="3"/><path d="M8 8h8M8 12h8M8 16h5"/></svg>',
    cal: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="5" width="18" height="16" rx="3"/><path d="M3 10h18M8 3v4M16 3v4"/></svg>',
    mail: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/></svg>',
    doc: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z"/><path d="M14 3v5h5"/></svg>',
    sun: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2"/></svg>'
  };
  const goTo = id => () => {
    const el = $(id);
    if (el && onHome) el.scrollIntoView({ behavior: still ? "auto" : "smooth" });
    else location.href = "/#" + id;
  };
  const pages = JSON.parse(document.body.dataset.pages || "[]");
  const ACTIONS = [
    { g: "Actions", t: "Book a free meeting", i: "cal", k: "meet call calendar", run: () => open(BOOKING, "_blank", "noopener") },
    { g: "Actions", t: "Send me a message", i: "mail", k: "contact form email", run: () => { location.href = "/contact/"; } },
    { g: "Actions", t: "Copy my email", i: "mail", k: "contact email", run: copyEmail },
    { g: "Actions", t: "Open resume", i: "doc", k: "cv pdf", run: () => { $("resume") && onHome ? $("resume").click() : (location.href = "/?resume"); } },
    { g: "Actions", t: "Switch light / dark theme", i: "sun", k: "theme mode", run: () => $("theme-toggle").click() },
    ...pages.map(([href, t]) => ({ g: "Pages", t, i: "page", k: href, run: () => { location.href = href; } })),
    ...[["top", "Home"], ["experience", "Career Experience"], ["education", "Academic Journey"], ["tools", "Tools & Capabilities"], ["process", "How I Work"], ["services", "Services & Pricing"], ["beyond", "Beyond the Work"], ["faq", "FAQ"]]
      .map(([id, t]) => ({ g: "On the homepage", t, i: "go", k: id, run: goTo(id) }))
  ];
  const pal = $("palette"), palIn = $("pal-input"), palList = $("pal-list");
  let palHits = [], palAt = 0;
  function renderPal() {
    const q = palIn.value.trim().toLowerCase();
    palHits = ACTIONS.filter(a => !q || (a.t + " " + a.k).toLowerCase().includes(q));
    palAt = Math.min(palAt, Math.max(0, palHits.length - 1));
    let group = "";
    palList.innerHTML = palHits.length ? palHits.map((a, i) => {
      const head = a.g !== group ? `<li class="pal-group" role="presentation">${esc(a.g)}</li>` : "";
      group = a.g;
      return `${head}<li class="pal-item" role="option" id="pal-${i}" data-i="${i}" aria-selected="${i === palAt}"><span class="pi" aria-hidden="true">${PI[a.i]}</span>${esc(a.t)}${i === palAt ? "<kbd>↵</kbd>" : ""}</li>`;
    }).join("") : `<li class="pal-empty">Nothing found for “${esc(palIn.value)}”</li>`;
    palIn.setAttribute("aria-activedescendant", palHits.length ? `pal-${palAt}` : "");
    const cur = $(`pal-${palAt}`); if (cur) cur.scrollIntoView({ block: "nearest" });
  }
  function openPal() { palIn.value = ""; palAt = 0; renderPal(); pal.showModal(); palIn.focus(); }
  function runPal(i) { const a = palHits[i]; if (!a) return; pal.close(); a.run(); }
  $("pal-open").addEventListener("click", openPal);
  palIn.addEventListener("input", () => { palAt = 0; renderPal(); });
  palIn.addEventListener("keydown", e => {
    if (e.key === "ArrowDown") { e.preventDefault(); palAt = (palAt + 1) % Math.max(1, palHits.length); renderPal(); }
    if (e.key === "ArrowUp") { e.preventDefault(); palAt = (palAt - 1 + palHits.length) % Math.max(1, palHits.length); renderPal(); }
    if (e.key === "Enter") { e.preventDefault(); runPal(palAt); }
  });
  palList.addEventListener("click", e => { const it = e.target.closest(".pal-item"); if (it) runPal(+it.dataset.i); });
  palList.addEventListener("pointermove", e => { const it = e.target.closest(".pal-item"); if (it && +it.dataset.i !== palAt) { palAt = +it.dataset.i; renderPal(); } });
  pal.addEventListener("click", e => { if (e.target === pal) pal.close(); });
  addEventListener("keydown", e => {
    const typing = /INPUT|TEXTAREA|SELECT/.test(document.activeElement.tagName) || document.activeElement.isContentEditable;
    if ((e.key.toLowerCase() === "k" && (e.metaKey || e.ctrlKey)) || (e.key === "/" && !typing && !pal.open)) {
      e.preventDefault();
      pal.open ? pal.close() : openPal();
    }
  });
})();
