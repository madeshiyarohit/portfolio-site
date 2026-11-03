/* ============================================================
   EDIT YOUR DETAILS HERE. Everything on the page comes from this.
   ============================================================ */
const PROFILE = {
  name: "Rohit Madeshiya",
  firstName: "Rohit",
  greeting: "👋 Hello there, I'm",
  // The pills under your name. icon can be "chat", "bag" or "check".
  roles: [
    { label: "Shopify Consultant", icon: "chat" },
    { label: "Shopify Expert", icon: "bag" },
    { label: "Quality Expert", icon: "check" }
  ],
  tagline: "I build Shopify stores that <b>stop the scroll</b> and <b>start the sale</b>.",
  bookingUrl: "https://calendar.app.google/1wCbAVUgq2WPPDJk9", // Google Calendar booking page for the "Book a Free Meeting" button
  email: "itsrohitmadeshiya@gmail.com",
  resumePdf: "", // Optional: link to your own ready-made PDF. Leave empty to create the PDF from the page.
  resume: {
    headline: "Shopify Consultant · Developer · Tester",
    location: "Yamunanagar, Haryana, India · Open to remote work",
    summary: "Shopify consultant, developer and tester. I started out building responsive websites with HTML, CSS, React and Bootstrap, then tested banking and healthcare applications at Deloitte. Today I bring both sides together: I build Shopify stores and test them like a QA engineer, so they look great, load fast and just work.",
    // Job dates are left empty on purpose; add them in "when" to show them.
    jobs: [
      { title: "Shopify Consultant, Developer & Tester", org: "Freelance · Remote", when: "Present", bullets: [
        "Advise brands on store strategy, apps and the right Shopify setup for their goals.",
        "Set up and customize stores: themes, custom sections, app integrations, payments and shipping.",
        "Optimize store speed and conversion.",
        "Run full QA on every device and browser before launch, and support stores after go-live." ] },
      { title: "Software Tester", org: "Deloitte · Banking & Healthcare", when: "", bullets: [
        "Tested banking and healthcare applications through functional, regression and end-to-end testing.",
        "Wrote and ran detailed test cases for critical journeys like payments, accounts and patient records.",
        "Found, logged and tracked defects through to the fix.",
        "Worked closely with developers and business teams to ship reliable releases." ] },
      { title: "Web Developer", org: "Freelance · Remote", when: "", bullets: [
        "Built responsive websites and web pages from scratch with HTML, CSS, React and Bootstrap.",
        "Turned designs into pixel-perfect, mobile-first layouts with reusable React components.",
        "Cleaned up and optimized code for faster, easier-to-maintain sites." ] }
    ],
    skills: [
      { title: "Shopify Consulting", text: "Store strategy, app selection, store audits and the right setup for each brand." },
      { title: "Shopify Development", text: "Store setup, theme development, custom sections, app integration, payments and shipping." },
      { title: "Speed & Conversion", text: "Speed optimization, conversion optimization, mobile-first design and technical SEO." },
      { title: "Quality Testing", text: "Functional, regression and cross-browser testing, test cases and bug fixing." }
    ],
    tools: [
      { group: "Platform", list: "Shopify, Liquid" },
      { group: "Development", list: "HTML, CSS, JavaScript, React, Bootstrap" },
      { group: "AI & Research", list: "ChatGPT, Claude, Google Search" },
      { group: "Testing", list: "Manual, functional, regression and cross-browser testing" }
    ],
    honors: [
      { name: "6 Awards at Deloitte", detail: "4 Applause Awards and 2 Support Awards for hard work and dedication", year: "" },
      { name: "Certifications", detail: "Cleared all required certifications within the given timeline", year: "" }
    ],
    languages: [{ name: "English", level: "Fluent" }, { name: "Hindi", level: "Native" }]
  },
  // Newest first. short is the label on the small tabs (tablets and phones). Leave years empty to hide it; set current: true to show the green "Now" badge.
  experience: [
    { org: "Freelance", short: "Shopify Expert", color: "#5e8e3e", title: "Shopify Consultant, Developer & Tester", place: "Remote", years: "", current: true,
      text: "Helping brands plan, build and launch Shopify stores that look great, load fast and are tested before a single customer sees them.",
      checks: [
        "Shopify consulting: store strategy, apps and the right setup for your goals",
        "Store setup, theme customization and custom sections",
        "App integrations, payments and shipping configuration",
        "Speed and conversion optimization",
        "Full QA testing on every device and browser before launch"
      ],
      tags: ["Shopify", "Liquid", "Consulting", "QA Testing"] },
    { org: "Deloitte", short: "Deloitte", color: "#86bc25", title: "Software Tester", place: "Banking & Healthcare", years: "",
      text: "Tested banking and healthcare applications inside and out, where a single bug can cost real money or affect patient care.",
      checks: [
        "Functional, regression and end-to-end testing",
        "Writing and running detailed test cases",
        "Finding, logging and tracking defects until they were fixed",
        "Testing critical journeys like payments, accounts and patient records",
        "Working closely with developers and business teams"
      ],
      tags: ["Banking", "Healthcare", "Manual Testing", "Quality Assurance"] },
    { org: "Freelance", short: "Web Developer", color: "#e44d26", title: "Web Developer", place: "Remote", years: "",
      text: "Built websites and web pages from scratch for clients, making sure every page looked sharp on every screen.",
      checks: [
        "Responsive web pages built from scratch",
        "Pixel-perfect layouts turned from designs into code",
        "Reusable components in React",
        "Mobile-first layouts with Bootstrap",
        "Code cleanup and performance optimization"
      ],
      tags: ["HTML", "CSS", "React", "Bootstrap"] }
  ],
  // Behind-the-scenes photos in the strip under the experience cards (best at 4:3).
  // Clicking a photo opens a bigger version: "name-lg.jpg" next to it if present, otherwise the same file.
  workPhotos: [
    { src: "/Assets/rohit-madeshiya-shopify-developer-at-work.jpg", alt: "Rohit Madeshiya, Shopify developer, working at his desk" },
    { src: "/Assets/shopify-store-design-laptop-and-mobile.jpg", alt: "Shopify store design shown on a laptop and a mobile phone" },
    { src: "/Assets/rohit-madeshiya-shopify-consultant-client-call.jpg", alt: "Rohit Madeshiya on a Shopify consulting call with a client" },
    { src: "/Assets/shopify-store-planning-conversion-optimization.jpg", alt: "Planning a Shopify store and conversion improvements on a sticky-note wall" },
    { src: "/Assets/shopify-store-mobile-testing-qa.jpg", alt: "Testing a Shopify store on mobile before launch" },
    { src: "/Assets/shopify-theme-development-coding.jpg", alt: "Late-night Shopify theme development and coding" }
  ],
  education: [
    // ico: "book" | "school" | "cap". when/short label the year rail; story and learned fill the detail card.
    { ico: "book", when: "2017", short: "Secondary", stage: "Step 1 · The Foundation", school: "New Happy Senior Secondary School", degree: "Secondary Education", year: "Passed 2017",
      story: "Where the basics were built: discipline, numbers and a habit of asking why things work the way they do.",
      learned: ["Discipline", "Mathematics", "Curiosity"] },
    { ico: "school", when: "2019", short: "Senior Secondary", stage: "Step 2 · Finding My Direction", school: "New Happy Senior Secondary School", degree: "Senior Secondary Education", year: "Passed 2019",
      story: "The years I found my direction and leaned toward computers, logic and solving problems step by step.",
      learned: ["Logical thinking", "Problem solving", "Computers"] },
    { ico: "cap", when: "2022", short: "BCA Degree", stage: "Step 3 · Earning the Degree", school: "Tilak Raj Chadha Institute of Management and Technology (TIMT)", degree: "BCA, Kurukshetra University", year: "2019 – 2022",
      story: "Three years of learning to build software properly. Programming, databases and the web became the foundation for everything I build today.",
      learned: ["Programming", "Databases", "Web development", "Software testing"] }
  ],
  // Tools sit above the title; the yellow skill tags sit below it.
  tools: [
    { n: "Shopify", c: "#95bf47" }, { n: "ChatGPT", c: "#10a37f" }, { n: "Claude", c: "#d97757" },
    { n: "Google Search", c: "#4285f4" }, { n: "HTML", c: "#e44d26" }, { n: "CSS", c: "#264de4" },
    { n: "JavaScript", c: "#f7df1e" }
  ],
  toolTags: [
    "Shopify Consulting", "Store Setup", "Theme Development", "Custom Sections", "App Integration",
    "Speed Optimization", "Conversion Optimization", "Mobile-First Design", "Quality Testing",
    "Cross-Browser Testing", "Bug Fixing", "Store Audits", "Technical SEO"
  ],
  steps: [
    { title: "I Listen First", text: "Before I touch a single line of code, I get to know your brand, your customers and what keeps you up at night. Your store is your hard work on display, and I treat it that way." },
    { title: "I Build It Like It's Mine", text: "I turn your vision into a store that feels like you, step by step, with regular updates so you're never left wondering. You see real progress, never excuses." },
    { title: "I Stay After Launch", text: "Every page, button and checkout is tested on every device before we go live. And launch day isn't goodbye: I stick around to fix, fine-tune and help your store grow." }
  ],
  // ico: "design" | "speed" | "rocket". featured: true highlights the card with a "Most Popular" badge.
  services: [
    { ico: "design", title: "Shopify Store Design", text: "A store that looks great and feels true to your brand.", price: "$199",
      features: ["Custom homepage & product pages", "Mobile-first, on-brand layouts", "Colors, fonts & sections set up"] },
    { ico: "speed", title: "Shopify Speed & Fixes", text: "Make your store faster and fix what's broken.", price: "$129", featured: true,
      features: ["Speed audit & optimization", "Bug, layout & checkout fixes", "Tested across devices"] },
    { ico: "rocket", title: "Full Shopify Store Build", text: "Everything from setup to launch, done for you.", price: "$600",
      features: ["Theme setup & customization", "Payments, shipping & apps", "Full QA on every device", "Support after launch"] }
  ],
  payments: ["Fiverr", "PayPal", "Payoneer", "Wise", "Bank Transfer"],
  // photos: set src to an image file (e.g. "/Assets/food.jpg"). Until then the color shows as a placeholder.
  beyond: [
    { title: "Hobbies that change with the season",
      text: "My hobbies never sit still, and I like it that way. One month I'm lost in a book, the next I'm in a BGMI match with friends or packing a bag for somewhere new. Wherever I go, finding the best local food is always part of the plan.",
      items: ["Reading books", "Playing BGMI", "Traveling and exploring new places", "Hunting down good food"],
      photos: [
        { src: "/Assets/rohit-madeshiya-hobby-reading-books.jpg", alt: "Reading books with a cup of tea", c: "#c9d6ff" },
        { src: "/Assets/rohit-madeshiya-hobby-bgmi-gaming.jpg", alt: "Playing BGMI on a phone", c: "#ffd6a5" },
        { src: "/Assets/rohit-madeshiya-hobby-hiking-sunset.jpg", alt: "Rohit Madeshiya on a golden hour hike", c: "#caffbf" },
        { src: "/Assets/rohit-madeshiya-hobby-travel-india.jpg", alt: "A morning train journey through India", c: "#fdffb6" },
        { src: "/Assets/rohit-madeshiya-hobby-exploring-heritage-lane.jpg", alt: "Exploring a lantern-lit heritage lane in India", c: "#ffc6ff" },
        { src: "/Assets/shopify-developer-night-desk-setup.jpg", alt: "Rohit Madeshiya's late-night desk setup with a laptop, code books and a desk lamp", c: "#a0c4ff" }
      ] },
    { title: "Right now: colors and calm",
      text: "My current favorite is filling colors into ready-made drawing outlines. It's slow, quiet and oddly satisfying, the perfect break from screens. Before that it was the ukulele, and I still pick it up now and then.",
      items: ["Coloring drawing outlines (current favorite)", "Playing the ukulele (an old love)"],
      photos: [
        { src: "/Assets/rohit-madeshiya-hobby-coloring-mandala.jpg", alt: "Rohit Madeshiya coloring a mandala drawing outline with colored pencils", c: "#ffadad" },
        { src: "/Assets/hobby-colored-pencils-floral-coloring-page.jpg", alt: "Colored pencils beside a floral coloring page", c: "#bdb2ff" },
        { src: "/Assets/rohit-madeshiya-hobby-playing-ukulele.jpg", alt: "Rohit Madeshiya playing the ukulele by a sunny window", c: "#9bf6ff" }
      ] }
  ],
  // Shown in the hero so clients abroad can see your local time.
  city: "Yamunanagar, India",
  timeZone: "Asia/Kolkata",
  // Questions in the FAQ section. Add, remove or reword freely.
  faq: [
    { q: "Do you work with clients outside India?", a: "Yes. I work remotely with brands worldwide. We meet over Google Meet, and you get regular updates so you always know where your store stands." },
    { q: "Can you fix or improve my existing Shopify store?", a: "Absolutely. The Speed & Fixes package covers a speed audit, bug, layout and checkout fixes, all tested across devices before I hand it back." },
    { q: "What makes you different from other Shopify developers?", a: "I'm a developer and a software tester. I tested banking and healthcare apps at Deloitte, so every store I build is checked on every device and browser before a single customer sees it." },
    { q: "How do payments work?", a: "You can pay through Fiverr, PayPal, Payoneer, Wise or a bank transfer, whichever suits you best." },
    { q: "Do you offer support after launch?", a: "Yes. Launch day isn't goodbye: I stick around to fix, fine-tune and help your store grow." },
    { q: "How do we get started?", a: "Book a free meeting. We'll talk about your brand, your goals and what your store needs, and I'll suggest the right plan, with no obligation." }
  ],
  marquee: ["Staying Curious", "Deep Research", "Coffee", "Flow State", "Learning Every Day", "Exploring AI"]
};
/* ============================================================ */

const $ = id => document.getElementById(id);
const esc = s => String(s).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
const P = PROFILE;

const still = matchMedia("(prefers-reduced-motion: reduce)").matches;

/* Hero */
const [firstName, ...rest] = P.name.split(" ");
$("logo-mark").textContent = P.firstName[0];
$("logo-name").textContent = P.firstName + ".";
$("hello").textContent = P.greeting;
$("name").firstChild.nodeValue = firstName + " ";
$("name").querySelector(".last").firstChild.nodeValue = rest.join(" ");
$("tagline").innerHTML = P.tagline;
["cta", "cta2", "fab-cta", "svc-call"].forEach(id => { $(id).href = P.bookingUrl; });

const ROLE_ICONS = {
  chat: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 12a8 8 0 0 1-11.6 7.1L4 20l1-4.6A8 8 0 1 1 21 12z"/><path d="M8.5 11h7M8.5 14h4"/></svg>',
  bag: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 8h14l-1 12H6L5 8z"/><path d="M9 8V6a3 3 0 0 1 6 0v2"/></svg>',
  check: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 3l7 3v5c0 4.5-3 8.3-7 10-4-1.7-7-5.5-7-10V6l7-3z"/><path d="M9 12l2 2 4-4"/></svg>'
};

// Role line: the words slide up one after another; the icon beside them follows.
const rot = $("roles");
rot.innerHTML = P.roles.map(r => `<span>${esc(r.label)}</span>`).join("");
const roleEls = [...rot.children];
let roleOn = 0;
const showRole = (i, prev) => {
  roleEls.forEach((el, k) => { el.classList.toggle("on", k === i); el.classList.toggle("out", k === prev); });
  $("role-ico").innerHTML = ROLE_ICONS[P.roles[i].icon] || ROLE_ICONS.check;
  rot.style.width = roleEls[i].getBoundingClientRect().width + "px";
};
showRole(0);
addEventListener("resize", () => showRole(roleOn));
document.fonts && document.fonts.ready.then(() => showRole(roleOn));
if (!still) setInterval(() => { if (document.hidden) return; const prev = roleOn; roleOn = (roleOn + 1) % roleEls.length; showRole(roleOn, prev); }, 2600);

// Local time where Rohit is, so clients abroad know when to expect a reply.
const timeFmt = new Intl.DateTimeFormat("en-US", { hour: "numeric", minute: "2-digit", timeZone: P.timeZone });
const tickTime = () => { $("local-time").textContent = `${timeFmt.format(new Date())} in ${P.city}`; };
tickTime(); setInterval(tickTime, 30000);

const tickerWords = P.toolTags.map(t => `<span>${esc(t)}</span>`).join("");
$("ticker").innerHTML = tickerWords + tickerWords;

/* Experience */
const CHECK = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M8 12.5l2.7 2.7L16 9.8"/></svg>';

const CHEV = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg>';
const expBox = $("exp"), expN = P.experience.length;
const orgIco = e => `<i class="org-ico" style="background:${esc(e.color)}" aria-hidden="true">${esc(e.org[0])}</i>`;
expBox.innerHTML = `
  <div class="exp-tabs" role="tablist" aria-label="Roles" aria-orientation="vertical">
    ${P.experience.map((e, i) => `<button class="exp-tab" role="tab" id="exp-tab-${i}" aria-controls="exp-panel" aria-selected="false" tabindex="-1">
      ${orgIco(e)}<b class="exp-full">${esc(e.title)}</b>
      <small>${e.current ? '<i class="dot" aria-hidden="true"></i>Now · ' : ""}${esc(e.org)}${e.years ? " · " + esc(e.years) : ""}</small>
      <span class="chev">${CHEV}</span>
    </button>`).join("")}
  </div>
  <article class="exp-panel spot" id="exp-panel" role="tabpanel" aria-live="polite"></article>`;
const expTabs = [...expBox.querySelectorAll(".exp-tab")], expPanel = $("exp-panel");
const expMq = matchMedia("(max-width: 900px)");
const labelTabs = () => expTabs.forEach((t, i) => { const e = P.experience[i]; t.querySelector(".exp-full").textContent = expMq.matches ? (e.short || e.org) : e.title; });
expMq.addEventListener("change", labelTabs); labelTabs();
let expCur = -1;
function showExp(i) {
  if (i === expCur) return;
  expCur = i;
  const e = P.experience[i];
  expTabs.forEach((t, k) => { t.setAttribute("aria-selected", k === i); t.tabIndex = k === i ? 0 : -1; });
  expPanel.style.setProperty("--org", e.color);
  expPanel.setAttribute("aria-labelledby", `exp-tab-${i}`);
  expPanel.innerHTML = `
    <div class="exp-head">${orgIco(e)}<span class="exp-org">${esc(e.org)}</span>
      <div class="meta">${e.current ? '<span class="now">Now</span>' : ""}<span>${esc(e.place)}</span>${e.years ? `<span>${esc(e.years)}</span>` : ""}</div>
    </div>
    <h3>${esc(e.title)}</h3>
    <p>${esc(e.text)}</p>
    <ul class="checks">${e.checks.map(c => `<li>${CHECK}<span>${esc(c)}</span></li>`).join("")}</ul>
    <div class="tags">${e.tags.map(t => `<span>${esc(t)}</span>`).join("")}</div>
    <span class="count" aria-hidden="true">0${i + 1} / 0${expN}</span>`;
  expPanel.classList.remove("swap"); void expPanel.offsetWidth; expPanel.classList.add("swap");
}
expTabs.forEach((t, i) => t.addEventListener("click", () => showExp(i)));
expBox.querySelector(".exp-tabs").addEventListener("keydown", ev => {
  const go = { ArrowDown: expCur + 1, ArrowRight: expCur + 1, ArrowUp: expCur - 1, ArrowLeft: expCur - 1, Home: 0, End: expN - 1 }[ev.key];
  if (go === undefined) return;
  ev.preventDefault();
  const i = (go + expN) % expN;
  showExp(i); expTabs[i].focus();
});
showExp(0);

const zoomImg = (p, group) => `<img src="${esc(p.src)}" alt="${esc(p.alt)}" width="900" height="675" loading="lazy" decoding="async" class="zoomable" data-group="${group}" tabindex="0" role="button" aria-label="View larger: ${esc(p.alt)}">`;
// The photos appear twice so the strip loops seamlessly; the copy is hidden from screen readers and the keyboard.
$("strip-track").innerHTML = P.workPhotos.map(p => zoomImg(p, "work")).join("")
  + P.workPhotos.map(p => zoomImg(p, "work-copy").replace('tabindex="0"', 'tabindex="-1" aria-hidden="true"')).join("");

/* Education */
const EDU_ICONS = {
  book: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 6.5C10.3 5.2 7.8 4.5 4 4.5v13c3.8 0 6.3.7 8 2 1.7-1.3 4.2-2 8-2v-13c-3.8 0-6.3.7-8 2z"/><path d="M12 6.5v13"/></svg>',
  school: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3 21h18M5 21V11l7-4 7 4v10"/><path d="M12 7V3l3 1.5L12 6"/><path d="M10 21v-4h4v4M8.5 13h.01M15.5 13h.01"/></svg>',
  cap: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M2 9.5L12 5l10 4.5L12 14 2 9.5z"/><path d="M6 11.5V16c0 1.4 2.7 3 6 3s6-1.6 6-3v-4.5M22 9.5V15"/></svg>'
};

const edu = $("edu"), eduN = P.education.length;
edu.innerHTML = `
  <div class="edu-rail" role="tablist" aria-label="Academic milestones">
    <div class="edu-track" aria-hidden="true"><i class="edu-fill"></i></div>
    ${P.education.map((e, i) => `<button class="edu-node" role="tab" id="edu-tab-${i}" aria-controls="edu-panel" aria-selected="false" tabindex="-1">
      <span class="edu-pin">${EDU_ICONS[e.ico] || EDU_ICONS.cap}</span><b>${esc(e.when)}</b><small>${esc(e.short)}</small>
    </button>`).join("")}
  </div>
  <div class="edu-panel spot" id="edu-panel" role="tabpanel" aria-live="polite"></div>`;
const eduNodes = [...edu.querySelectorAll(".edu-node")], eduPanel = $("edu-panel");
let eduCur = -1, eduTimer = null;
function showEdu(i) {
  if (i === eduCur) return;
  eduCur = i;
  const e = P.education[i];
  eduNodes.forEach((n, k) => { n.setAttribute("aria-selected", k === i); n.tabIndex = k === i ? 0 : -1; n.classList.toggle("done", k < i); });
  edu.querySelector(".edu-fill").style.setProperty("--p", eduN > 1 ? i / (eduN - 1) : 1);
  eduPanel.setAttribute("aria-labelledby", `edu-tab-${i}`);
  eduPanel.innerHTML = `
    <div class="edu-big" aria-hidden="true">${esc(e.when)}<small>${esc(e.year)}</small></div>
    <div class="edu-body">
      <em class="stage">${esc(e.stage)}</em>
      <h3>${esc(e.school)}</h3>
      <p class="edu-deg">${esc(e.degree)}</p>
      ${e.story ? `<p class="edu-story">${esc(e.story)}</p>` : ""}
      ${(e.learned || []).length ? `<ul class="tags" aria-label="What I took away">${e.learned.map(t => `<li>${esc(t)}</li>`).join("")}</ul>` : ""}
    </div>
    <span class="count" aria-hidden="true">0${i + 1} / 0${eduN}</span>`;
  eduPanel.classList.remove("swap"); void eduPanel.offsetWidth; eduPanel.classList.add("swap");
}
const stopEdu = () => { clearInterval(eduTimer); eduTimer = null; };
eduNodes.forEach((n, i) => n.addEventListener("click", () => { stopEdu(); showEdu(i); }));
edu.querySelector(".edu-rail").addEventListener("keydown", ev => {
  const go = { ArrowRight: eduCur + 1, ArrowLeft: eduCur - 1, Home: 0, End: eduN - 1 }[ev.key];
  if (go === undefined) return;
  ev.preventDefault(); stopEdu();
  const i = (go + eduN) % eduN;
  showEdu(i); eduNodes[i].focus();
});
// Walk through the milestones once when the section scrolls into view, then stop on the latest.
if ("IntersectionObserver" in window && !still) {
  showEdu(0);
  const io = new IntersectionObserver(entries => {
    if (!entries.some(en => en.isIntersecting)) return;
    io.disconnect();
    eduTimer = setInterval(() => { if (eduCur >= eduN - 1) return stopEdu(); showEdu(eduCur + 1); }, 2600);
  }, { threshold: 0.5 });
  io.observe(edu);
} else {
  showEdu(eduN - 1);
}

/* Tools */
const shortTool = n => n.split(" ").map(w => w[0]).join("").slice(0, 2);
$("tools-top").innerHTML = P.tools.map(t => `<span class="tool"><i style="background:${esc(t.c)}${t.c === "#f7df1e" ? ";color:#111" : ""}" aria-hidden="true">${esc(shortTool(t.n))}</i>${esc(t.n)}</span>`).join("");
$("tools-bottom").innerHTML = P.toolTags.map(t => `<span>${esc(t)}</span>`).join("");


/* How I work */
$("process-list").innerHTML = P.steps.map((s, i) => `
  <div class="pcard spot reveal" style="--rd:${i * 0.08}s">
    <div class="num"><b>0${i + 1}</b><i aria-hidden="true"></i></div>
    <h3>${esc(s.title)}</h3><p>${esc(s.text)}</p>
    <span class="big" aria-hidden="true">0${i + 1}</span>
  </div>`).join("");

/* Services */
const SVC_ICONS = {
  design: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 19l7-7 3 3-7 7-3-3z"/><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"/><path d="M2 2l7.6 7.6"/><circle cx="11" cy="11" r="2"/></svg>',
  speed: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>',
  rocket: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/><path d="M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"/><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/></svg>'
};
// Simple brand-colored marks for each payment method (name shown beside them).
const PAY_ICONS = {
  "Fiverr": '<svg viewBox="0 0 26 26" aria-hidden="true"><rect width="26" height="26" rx="7" fill="#1dbf73"/><text x="13" y="18" font-family="Arial,sans-serif" font-size="13" font-weight="700" fill="#fff" text-anchor="middle">fi</text></svg>',
  "PayPal": '<svg viewBox="0 0 26 26" aria-hidden="true"><rect width="26" height="26" rx="7" fill="#003087"/><text x="11.5" y="19" font-family="Arial,sans-serif" font-size="16" font-style="italic" font-weight="800" fill="#009cde" text-anchor="middle">P</text><text x="14.5" y="17" font-family="Arial,sans-serif" font-size="16" font-style="italic" font-weight="800" fill="#fff" text-anchor="middle">P</text></svg>',
  "Payoneer": '<svg viewBox="0 0 26 26" aria-hidden="true"><rect width="26" height="26" rx="7" fill="#ff4800"/><circle cx="13" cy="13" r="6.5" fill="none" stroke="#fff" stroke-width="2.4" stroke-dasharray="30 11"/></svg>',
  "Wise": '<svg viewBox="0 0 26 26" aria-hidden="true"><rect width="26" height="26" rx="7" fill="#9fe870"/><path d="M7 8h9.5l-4.5 4.2h4.6L9.5 19l2.6-5.2H7.6L10.4 11H7z" fill="#163300"/></svg>',
  "Bank Transfer": '<svg viewBox="0 0 26 26" aria-hidden="true"><rect width="26" height="26" rx="7" fill="#111214"/><path d="M13 5.5l7 3.6v1.4H6V9.1l7-3.6zM7.5 11.8h2v5.4h-2zm4.5 0h2v5.4h-2zm4.5 0h2v5.4h-2zM6 18.4h14v2H6z" fill="#f0b429"/></svg>'
};

const TICK = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12.5l4.5 4.5L19 7.5"/></svg>';
$("services-list").innerHTML = P.services.map((s, i) => `
  <div class="svc spot reveal${s.featured ? " featured" : ""}" style="--rd:${i * 0.08}s">
    ${s.featured ? '<span class="badge">★ Most Popular</span>' : ""}
    <span class="ico">${SVC_ICONS[s.ico] || ""}</span>
    <h3>${esc(s.title)}</h3>
    <p>${esc(s.text)}</p>
    <div class="price"><small>From</small><b>${esc(s.price)}</b></div>
    <ul>${(s.features || []).map(f => `<li>${TICK}${esc(f)}</li>`).join("")}</ul>
    <a class="btn ${s.featured ? "btn-accent" : "btn-ghost"}" href="${esc(P.bookingUrl)}" target="_blank" rel="noopener" aria-label="Get started with ${esc(s.title)}">Get Started <i aria-hidden="true">→</i></a>
  </div>`).join("");
$("pay").innerHTML = '<span class="pay-label">Accepted payment methods</span>' + P.payments.map(p => `<span class="pay-item">${PAY_ICONS[p] || ""}${esc(p)}</span>`).join("");

/* Beyond the work */
$("beyond-list").innerHTML = P.beyond.map((b, bi) => `
  <div class="bcard reveal">
    <div class="btext"><span class="kicker">${bi === 0 ? "Off the clock" : "These days"}</span><h3>${esc(b.title)}</h3><p>${esc(b.text)}</p><ul>${b.items.map(i => `<li>${esc(i)}</li>`).join("")}</ul></div>
    <div class="mosaic${b.photos.length >= 6 ? " m6" : ""}">${b.photos.map(p => p.src
      ? `<figure class="tile" style="margin:0">${zoomImg(p, "beyond")}<figcaption>${esc(p.alt)}</figcaption></figure>`
      : `<div class="tile" style="background:${esc(p.c)}" aria-hidden="true"></div>`).join("")}</div>
  </div>`).join("");

/* FAQ: one open at a time */
$("faq-list").innerHTML = P.faq.map((f, i) => `
  <details class="reveal" style="--rd:${i * 0.05}s"${i === 0 ? " open" : ""}>
    <summary>${esc(f.q)}<i aria-hidden="true"></i></summary>
    <p class="ans">${esc(f.a)}</p>
  </details>`).join("");
const faqs = [...document.querySelectorAll("#faq-list details")];
faqs.forEach(d => d.addEventListener("toggle", () => { if (d.open) faqs.forEach(o => { if (o !== d) o.open = false; }); }));


const words = P.marquee.map(w => `<span>${esc(w)}</span>`).join("");
$("marquee").innerHTML = words + words;


/* Resume viewer */
const R = P.resume;
const li = arr => arr.map(x => `<li>${esc(x)}</li>`).join("");
$("rv-name").textContent = P.name;
$("paper").innerHTML = `
  <header class="r-head">
    <div><p class="r-name">${esc(P.name)}</p><p class="r-role">${esc(R.headline)}</p></div>
    <div class="r-contact">
      <div><i>✉</i>${esc(P.email)}</div>
      <div><i>⌖</i>${esc(R.location)}</div>
    </div>
  </header>
  <section class="r-sec"><h2>Professional Summary</h2><p>${esc(R.summary)}</p></section>
  <section class="r-sec"><h2>Professional Experience</h2>
    ${R.jobs.map(j => `<div class="r-item"><div class="r-top"><h3>${esc(j.title)}</h3><span class="r-when">${esc(j.when)}</span></div><div class="r-org">${esc(j.org)}</div><ul>${li(j.bullets)}</ul></div>`).join("")}
  </section>
  <section class="r-sec"><h2>Core Skills</h2>
    <div class="r-skills">${R.skills.map(k => `<div><b>${esc(k.title)}</b><span>${esc(k.text)}</span></div>`).join("")}</div>
  </section>
  <section class="r-sec"><h2>Tools</h2>
    <div class="r-tools">${R.tools.map(t => `<div><b>${esc(t.group)}:</b> ${esc(t.list)}</div>`).join("")}</div>
  </section>
  <section class="r-sec"><h2>Education</h2>
    <div class="r-rows">${P.education.map(e => `<div class="r-row"><span><b>${esc(e.school)}</b> · ${esc(e.degree)}</span><span>${esc(e.year)}</span></div>`).join("")}</div>
  </section>
  <section class="r-sec"><h2>Awards &amp; Recognition</h2>
    <div class="r-rows">${R.honors.map(h => `<div class="r-row"><span><b>${esc(h.name)}</b> · ${esc(h.detail)}</span><span>${esc(h.year)}</span></div>`).join("")}</div>
  </section>
  <section class="r-sec"><h2>Languages</h2>
    <div class="r-langs">${R.languages.map(l => `<span><b>${esc(l.name)}</b> · ${esc(l.level)}</span>`).join("")}</div>
  </section>`;

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
document.querySelectorAll("[data-open-resume]").forEach(b => b.addEventListener("click", openResume));
$("rv-close").addEventListener("click", closeResume);
addEventListener("keydown", e => { if (e.key === "Escape" && !view.hidden) closeResume(); });

$("rv-download").addEventListener("click", async () => {
  const filename = P.name.trim().replace(/\s+/g, "-") + "-Resume.pdf";
  if (P.resumePdf) {
    const a = document.createElement("a");
    a.href = P.resumePdf; a.download = filename; a.target = "_blank"; a.rel = "noopener";
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
