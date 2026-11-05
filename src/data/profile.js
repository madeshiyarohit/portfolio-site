/* ============================================================
   EDIT YOUR HOMEPAGE CONTENT HERE.
   This is the single source for the homepage, the resume, the structured data
   Google reads (services, prices, FAQ) and the ready-made HTML search engines see.
   Change something here, save, and every place updates on the next build.
   ============================================================ */
export const PROFILE = {
  name: "Rohit Madeshiya",
  greeting: "👋 Hello there, I'm",
  // The pills under your name. icon can be "chat", "bag" or "check".
  roles: [
    { label: "Shopify Consultant", icon: "chat" },
    { label: "Shopify Expert", icon: "bag" },
    { label: "Shopify QA Tester", icon: "check" }
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
    { src: "/Assets/rohit-madeshiya-shopify-developer-at-work.webp", alt: "Rohit Madeshiya, Shopify developer, working at his desk" },
    { src: "/Assets/shopify-store-design-laptop-and-mobile.webp", alt: "Shopify store design shown on a laptop and a mobile phone" },
    { src: "/Assets/rohit-madeshiya-shopify-consultant-client-call.webp", alt: "Rohit Madeshiya on a Shopify consulting call with a client" },
    { src: "/Assets/shopify-store-planning-conversion-optimization.webp", alt: "Planning a Shopify store and conversion improvements on a sticky-note wall" },
    { src: "/Assets/shopify-store-mobile-testing-qa.webp", alt: "Testing a Shopify store on mobile before launch" },
    { src: "/Assets/shopify-theme-development-coding.webp", alt: "Late-night Shopify theme development and coding" }
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
  // delivery, revisions and support appear under the price on each card.
  services: [
    { ico: "design", title: "Shopify Store Design", text: "A store that looks great and feels true to your brand.", price: "$499",
      delivery: "5–7 days", revisions: "2 revision rounds",
      features: ["Custom homepage design", "Product & collection page layouts", "Mobile-first design for every page", "Brand colors, fonts & visual style", "Layouts that guide shoppers to buy"] },
    { ico: "speed", title: "Shopify Speed & Fixes", text: "Make your store faster and fix what's broken.", price: "$400", hourly: "$20", featured: true,
      delivery: "3–5 days", revisions: "Re-tested until fixed",
      features: ["Speed audit with clear priorities", "Image, app & code optimization", "Bug, layout & checkout fixes", "Before & after speed report", "Every fix re-tested across devices"] },
    { ico: "rocket", title: "Full Shopify Store Build", text: "Everything from setup to launch, done for you.", price: "$1,200", hourly: "$30",
      delivery: "2–3 weeks", revisions: "3 revision rounds",
      features: ["Store setup & theme customization", "Up to 20 products added", "Payments & shipping set up", "Essential apps installed", "Full QA on every device", "Launch + 14 days of support"] }
  ],
  // The three steps shown under the pricing cards.
  nextSteps: [
    { title: "Book a free call", text: "A free 15-minute call about your store, your goals and your timeline." },
    { title: "Get a clear plan", text: "Within 24 hours you get a clear price, a delivery date and exactly what's included." },
    { title: "Work begins", text: "Updates every few days, nothing goes live without your approval, and everything I build or fix is tested first." }
  ],
  responseTime: "I reply to every message within 24 hours.",
  payments: ["Fiverr", "PayPal", "Payoneer", "Wise", "Bank Transfer"],
  // photos: set src to an image file (e.g. "/Assets/food.jpg"). Until then the color shows as a placeholder.
  beyond: [
    { title: "Hobbies that change with the season",
      text: "My hobbies never sit still, and I like it that way. One month I'm lost in a book, the next I'm in a BGMI match with friends or packing a bag for somewhere new. Wherever I go, finding the best local food is always part of the plan.",
      items: ["Reading books", "Playing BGMI", "Traveling and exploring new places", "Hunting down good food"],
      photos: [
        { src: "/Assets/rohit-madeshiya-hobby-reading-books.webp", alt: "Reading books with a cup of tea", c: "#c9d6ff" },
        { src: "/Assets/rohit-madeshiya-hobby-bgmi-gaming.webp", alt: "Playing BGMI on a phone", c: "#ffd6a5" },
        { src: "/Assets/rohit-madeshiya-hobby-hiking-sunset.webp", alt: "Rohit Madeshiya on a golden hour hike", c: "#caffbf" },
        { src: "/Assets/rohit-madeshiya-hobby-travel-india.webp", alt: "A morning train journey through India", c: "#fdffb6" },
        { src: "/Assets/rohit-madeshiya-hobby-exploring-heritage-lane.webp", alt: "Exploring a lantern-lit heritage lane in India", c: "#ffc6ff" },
        { src: "/Assets/shopify-developer-night-desk-setup.webp", alt: "Rohit Madeshiya's late-night desk setup with a laptop, code books and a desk lamp", c: "#a0c4ff" }
      ] },
    { title: "Right now: colors and calm",
      text: "My current favorite is filling colors into ready-made drawing outlines. It's slow, quiet and oddly satisfying, the perfect break from screens. Before that it was the ukulele, and I still pick it up now and then.",
      items: ["Coloring drawing outlines (current favorite)", "Playing the ukulele (an old love)"],
      photos: [
        { src: "/Assets/rohit-madeshiya-hobby-coloring-mandala.webp", alt: "Rohit Madeshiya coloring a mandala drawing outline with colored pencils", c: "#ffadad" },
        { src: "/Assets/hobby-colored-pencils-floral-coloring-page.webp", alt: "Colored pencils beside a floral coloring page", c: "#bdb2ff" },
        { src: "/Assets/rohit-madeshiya-hobby-playing-ukulele.webp", alt: "Rohit Madeshiya playing the ukulele by a sunny window", c: "#9bf6ff" }
      ] }
  ],
  // Time zone for "My time" in the hero badge.
  timeZone: "Asia/Kolkata",
  // Questions in the FAQ section. Add, remove or reword freely.
  faq: [
    { q: "Do you work with clients outside India?", a: "Yes. I work remotely with brands worldwide. We meet over Google Meet, and you get regular updates so you always know where your store stands." },
    { q: "How long does a project take?", a: "Speed & fixes usually take 3–5 days, a store design 5–7 days and a full store build 2–3 weeks. After our call you get an exact delivery date before any work starts." },
    { q: "What if I want changes?", a: "Revisions are built in: 2 rounds for a store design, 3 for a full build, and fixes are re-tested until they're right. Small tweaks after launch are covered by the support period." },
    { q: "Can you fix or improve my existing Shopify store?", a: "Absolutely. The Speed & Fixes package covers a speed audit, bug, layout and checkout fixes, all tested across devices before I hand it back." },
    { q: "What makes you different from other Shopify developers?", a: "I'm a developer and a software tester. I tested banking and healthcare apps at Deloitte, so every store I build is checked on every device and browser before a single customer sees it." },
    { q: "How do payments work?", a: "You can pay through Fiverr, PayPal, Payoneer, Wise or a bank transfer, whichever suits you best." },
    { q: "Do you offer support after launch?", a: "Yes. A full store build includes 14 days of support after launch, and I'm always happy to help with ongoing changes after that." },
    { q: "How do we get started?", a: "Book a free meeting. We'll talk about your brand, your goals and what your store needs, and I'll suggest the right plan, with no obligation." }
  ],
  marquee: ["Staying Curious", "Deep Research", "Coffee", "Flow State", "Learning Every Day", "Exploring AI"]
};