// ============================================================
// SITE SETTINGS: the details used on every page.
// ============================================================
export const SITE = {
  // Your live address. Replace with your real domain (keep the https:// and no slash at the end).
  url: "https://flexiroot.in",
  name: "Rohit Madeshiya",
  firstName: "Rohit",
  email: "itsrohitmadeshiya@gmail.com",
  bookingUrl: "https://calendar.app.google/1wCbAVUgq2WPPDJk9",
  // Default image shown when a page is shared on WhatsApp, LinkedIn, X, etc.
  shareImage: "/Assets/rohit-madeshiya-shopify-expert-share.jpg",
  footerPhoto: "/Assets/rohit-madeshiya-shopify-expert.webp",
  // WhatsApp number with country code (e.g. "+91 98765 43210"). Leave empty to hide the WhatsApp buttons.
  whatsapp: "+91 90509 21186",
  // Free, privacy-friendly visitor stats: create a site at dash.cloudflare.com → Web Analytics,
  // copy the "token" from the snippet it shows, and paste it here. Leave empty to turn it off.
  cfAnalyticsToken: "9dd99f2ddd204bf796086021f6c7af42",
  // IndexNow (instant indexing on Bing & co.) uses the key 7aba602ff8a8d080ea660f36edad868e: the file
  // public/7aba602ff8a8d080ea660f36edad868e.txt and the "Ping IndexNow" step in .github/workflows/deploy.yml.
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
