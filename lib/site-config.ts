export const siteConfig = {
  appName: "Elite Scope",
  tagline: "Market Intelligence",
  description:
    "Structured trading signals, tiered indicators, and risk tools for disciplined market observation.",
  url: "https://elitescope.org", // TODO: replace with your real production domain

  // TODO: replace with your live App Store / Play Store listing URLs once published.
  // Until then these are safe placeholders — the buttons will link to '#' style anchors.
  appStoreUrl: "https://apps.apple.com/app/id0000000000",
  playStoreUrl:
    "https://play.google.com/store/apps/details?id=com.thimmy.sample",
  appStoreLive: false, // flip to true once the App Store URL above is real
  playStoreLive: false, // flip to true once the Play Store URL above is real

  // Legal / support contact — TODO: replace placeholders with your real details.
  company: {
    legalName: "EliteScope", // e.g. "Elite Scope Technologies, Inc."
    address: "66 Ridgeway Birmingham B17 8JG",
    jurisdiction: "FCA UK ",
    supportEmail: "contact@elitescope.org",
    privacyEmail: "compliance@elitescope.org",
  },

  bundleIds: {
    ios: "com.woteva.elite",
    android: "com.thimmy.sample",
  },

  social: {
    twitter: "",
  },

  legalDates: {
    termsEffective: "01 August 2026",
    privacyEffective: "01 August 2026",
  },
};

export const tiers = [
  {
    id: "explorer",
    name: "Explorer",
    accent: "cyan" as const,
    description: "Core market signals for structured observation.",
    price: { weekly: 4.99, monthly: 14.99 },
    capabilities: [
      "Core signals across active pairs",
      "Signal direction & timeframe",
      "Confidence scoring",
    ],
  },
  {
    id: "strategist",
    name: "Strategist",
    accent: "indigo" as const,
    description: "Expanded signal access with advanced indicators.",
    price: { weekly: 7.99, monthly: 24.99 },
    capabilities: [
      "Everything in Explorer",
      "Advanced indicators",
      "Entry, stop-loss & take-profit levels",
    ],
    featured: true,
  },
  {
    id: "mathematician",
    name: "Mathematician",
    accent: "violet" as const,
    description: "Full analytical access with structured analytics.",
    price: { weekly: 11.99, monthly: 34.99 },
    capabilities: [
      "Everything in Strategist",
      "Structured analytics",
      "Analyst notes on every signal",
    ],
  },
];
