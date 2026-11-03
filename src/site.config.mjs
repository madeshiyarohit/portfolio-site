// ============================================================
// SITE SETTINGS: the details used on every page.
// ============================================================
export const SITE = {
  // Your live address. Replace with your real domain (keep the https:// and no slash at the end).
  url: "https://flexiroot.in",
  name: "Rohit Madeshiya",
  firstName: "Rohit",
  role: "Shopify Expert, Developer & Consultant",
  email: "itsrohitmadeshiya@gmail.com",
  bookingUrl: "https://calendar.app.google/1wCbAVUgq2WPPDJk9",
  city: "Yamunanagar, India",
  // Default image shown when a page is shared on WhatsApp, LinkedIn, X, etc.
  shareImage: "/Assets/rohit-madeshiya-shopify-expert-share.jpg",
  footerPhoto: "/Assets/rohit-madeshiya-shopify-expert.png",
  // Contact form: get a free access key at https://web3forms.com (it is emailed to you) and paste it here.
  web3formsKey: "b353a810-2bdb-4c04-9cdb-7740250665a1",
  // Social links. Links that still contain "your-username" are hidden automatically.
  // icon can be "fiverr", "linkedin", "x", "whatsapp", "behance", "github" or "instagram".
  socials: [
    // Add your profiles here when ready, for example:
    // { icon: "linkedin", label: "LinkedIn", url: "https://www.linkedin.com/in/your-profile" },
  ]
};

export const liveSocials = SITE.socials.filter(s => !/your-username/.test(s.url));
