/* Homepage behaviour. All content is already in the HTML (built from src/data/profile.js);
   this file only makes it interactive. window.HOME holds the few values it needs. */
(() => {
const $ = id => document.getElementById(id);
const H = window.HOME || {};
const still = matchMedia("(prefers-reduced-motion: reduce)").matches;

/* Hero: the role words slide up one after another; the icon beside them follows. */
const rot = $("roles"), roleEls = [...rot.children];
let roleOn = 0;
const showRole = (i, prev) => {
  roleEls.forEach((el, k) => { el.classList.toggle("on", k === i); el.classList.toggle("out", k === prev); });
  const icon = H.roleIcons && H.roleIcons[roleEls[i].dataset.icon];
  if (icon) $("role-ico").innerHTML = icon;
  rot.style.width = roleEls[i].getBoundingClientRect().width + "px";
};
showRole(0);
addEventListener("resize", () => showRole(roleOn));
document.fonts && document.fonts.ready.then(() => showRole(roleOn));
if (!still) setInterval(() => { if (document.hidden) return; const prev = roleOn; roleOn = (roleOn + 1) % roleEls.length; showRole(roleOn, prev); }, 2600);

// My current time (IST), so clients anywhere know when to expect a reply.
const timeFmt = new Intl.DateTimeFormat("en-US", { hour: "numeric", minute: "2-digit", timeZone: H.timeZone || "Asia/Kolkata" });
const tickTime = () => { $("local-time").textContent = `My time: ${timeFmt.format(new Date())} IST`; };
tickTime(); setInterval(tickTime, 30000);

/* Tabs helper: tab buttons switch which panel is visible (click or arrow keys). */
function tabs(list, buttons, panels, { vertical = false, onShow } = {}) {
  let cur = buttons.findIndex(b => b.getAttribute("aria-selected") === "true");
  function show(i, animate = true) {
    if (i === cur) return;
    cur = i;
    buttons.forEach((b, k) => { b.setAttribute("aria-selected", k === i); b.tabIndex = k === i ? 0 : -1; });
    panels.forEach((p, k) => { p.hidden = k !== i; });
    if (animate) { panels[i].classList.remove("swap"); void panels[i].offsetWidth; panels[i].classList.add("swap"); }
    onShow && onShow(i);
  }
  buttons.forEach((b, i) => b.addEventListener("click", () => { show(i); list.dispatchEvent(new Event("tab-click")); }));
  list.addEventListener("keydown", ev => {
    const keys = vertical ? { ArrowDown: 1, ArrowRight: 1, ArrowUp: -1, ArrowLeft: -1 } : { ArrowRight: 1, ArrowLeft: -1 };
    let i = ev.key === "Home" ? 0 : ev.key === "End" ? buttons.length - 1 : keys[ev.key] !== undefined ? cur + keys[ev.key] : null;
    if (i === null) return;
    ev.preventDefault(); list.dispatchEvent(new Event("tab-click"));
    i = (i + buttons.length) % buttons.length;
    show(i); buttons[i].focus();
  });
  return { show, get current() { return cur; } };
}

/* Experience */
const expTabs = [...document.querySelectorAll(".exp-tab")];
tabs(document.querySelector(".exp-tabs"), expTabs, [...document.querySelectorAll(".exp-panel")], { vertical: true });
// On small screens the tabs show the short label instead of the full title.
const expMq = matchMedia("(max-width: 900px)");
const labelTabs = () => expTabs.forEach(t => { t.querySelector(".exp-full").textContent = expMq.matches ? t.dataset.short : t.dataset.full; });
expMq.addEventListener("change", labelTabs); labelTabs();

/* Education: walks through the milestones once when scrolled into view, then stops on the latest. */
const edu = $("edu"), eduNodes = [...edu.querySelectorAll(".edu-node")], eduN = eduNodes.length;
const fill = edu.querySelector(".edu-fill");
const markEdu = i => {
  eduNodes.forEach((n, k) => n.classList.toggle("done", k < i));
  fill.style.setProperty("--p", eduN > 1 ? i / (eduN - 1) : 1);
};
const eduTabs = tabs(edu.querySelector(".edu-rail"), eduNodes, [...edu.querySelectorAll(".edu-panel")], { onShow: markEdu });
let eduTimer = null;
const stopEdu = () => { clearInterval(eduTimer); eduTimer = null; };
edu.querySelector(".edu-rail").addEventListener("tab-click", stopEdu);
if ("IntersectionObserver" in window && !still) {
  eduTabs.show(0, false);
  const io = new IntersectionObserver(entries => {
    if (!entries.some(en => en.isIntersecting)) return;
    io.disconnect();
    eduTimer = setInterval(() => { if (eduTabs.current >= eduN - 1) return stopEdu(); eduTabs.show(eduTabs.current + 1); }, 2600);
  }, { threshold: 0.5 });
  io.observe(edu);
} else {
  markEdu(eduN - 1);
}

/* FAQ: one answer open at a time */
const faqs = [...document.querySelectorAll("#faq-list details")];
faqs.forEach(d => d.addEventListener("toggle", () => { if (d.open) faqs.forEach(o => { if (o !== d) o.open = false; }); }));

/* Resume viewer */
const view = $("resume-view");
let lastFocus = null;
function openResume() {
  lastFocus = document.activeElement;
  view.hidden = false;
  view.scrollTop = 0;
  document.documentElement.style.overflow = "hidden";
  $("rv-close").focus();
}
function closeResume() {
  view.hidden = true;
  document.documentElement.style.overflow = "";
  if (lastFocus) lastFocus.focus();
}
window.openResume = openResume;
document.querySelectorAll("[data-open-resume]").forEach(b => b.addEventListener("click", e => { e.preventDefault(); openResume(); }));
$("rv-close").addEventListener("click", closeResume);
addEventListener("keydown", e => { if (e.key === "Escape" && !view.hidden) closeResume(); });

$("rv-download").addEventListener("click", async () => {
  const filename = (H.name || "Resume").trim().replace(/\s+/g, "-") + "-Resume.pdf";
  if (H.resumePdf) {
    const a = document.createElement("a");
    a.href = H.resumePdf; a.download = filename; a.target = "_blank"; a.rel = "noopener";
    document.body.appendChild(a); a.click(); a.remove();
    return;
  }
  // The PDF tool is large, so it is only downloaded the first time someone asks for the PDF.
  if (!window.html2pdf) {
    try {
      await new Promise((ok, fail) => {
        const sc = document.createElement("script");
        sc.src = "https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.10.1/html2pdf.bundle.min.js";
        sc.onload = ok; sc.onerror = fail;
        document.head.appendChild(sc);
      });
    } catch (e) { toast("The PDF tool didn't load. Check your connection and try again"); return; }
  }
  const btn = $("rv-download");
  btn.classList.add("busy");
  // The PDF is made from a copy of the resume pinned to the top-left corner at A4 width (hidden
  // behind the resume screen). Capturing the centered, scrolled copy on screen cut it off.
  const holder = document.createElement("div");
  holder.style.cssText = "position:absolute;left:0;top:0;width:794px;z-index:-1;background:#fff";
  const copy = $("paper").cloneNode(true);
  copy.removeAttribute("id");
  copy.classList.add("pdf");
  copy.style.cssText = "max-width:none;margin:0";
  holder.appendChild(copy);
  document.body.appendChild(holder);
  const keepY = scrollY;
  scrollTo({ top: 0, behavior: "instant" });
  try {
    await html2pdf().set({
      margin: [10, 0, 10, 0],
      filename,
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { scale: 2, backgroundColor: "#ffffff", scrollX: 0, scrollY: 0 },
      jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
      // Never split a line, job or section row across two pages.
      pagebreak: { mode: ["css", "legacy"], avoid: [".r-sec:not(:nth-of-type(2))", ".r-item", ".r-row", ".r-head", "li"] }
    }).from(copy).save();
    toast("Resume downloaded");
  } catch (e) {
    toast("Couldn't create the PDF. Please try again");
  } finally {
    holder.remove();
    btn.classList.remove("busy");
    scrollTo({ top: keepY, behavior: "instant" });
  }
});
// Links from other pages ("/?resume") open the resume straight away.
if (new URLSearchParams(location.search).has("resume")) openResume();
})();
