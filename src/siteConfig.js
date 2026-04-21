// ============================================================
// SITE CONFIGURATION
// Edit this file to customize all text, links, and images.
// ============================================================

export const siteConfig = {
  // ----------------------------------------------------------
  // CREATOR INFO
  // ----------------------------------------------------------
  creatorName: "🎀Tina🎀",        // NOTE: Replace with your display name
  creatorHandle: "@johabettina",    // NOTE: Replace with your main handle/username
  // NOTE: Age gate emoji — remove or change if your content is not adult-only
  ageRatingEmoji: "🔞",

  // ----------------------------------------------------------
  // BACKGROUND IMAGE
  // NOTE: Replace the src below with your own image path or URL.
  //   - For a local file: place it in /public/ and use "/yourimage.jpg"
  //   - For an external URL: use the full https:// link
  //   - Recommended size: at least 1200×1600px, portrait orientation
  // ----------------------------------------------------------
  backgroundImage: {
    src: "/fondo.jpg",        // ← REPLACE THIS
    alt: "Background",
  },

  // ----------------------------------------------------------
  // PROFILE / AVATAR IMAGE
  // NOTE: Replace with your profile photo.
  //   - Place in /public/ and use "/avatar.jpg", or use an external URL
  //   - Recommended: square image, at least 400×400px
  // ----------------------------------------------------------
  avatarImage: {
    src: "/fondo.jpg",            // ← REPLACE THIS
    alt: "Profile photo",
  },

  // ----------------------------------------------------------
  // AGE GATE MODAL
  // NOTE: Set showAgeGate to false if you don't need an age verification screen
  // ----------------------------------------------------------
  ageGate: {
    show: true,
    title: "Contenido para adultos",
    description:
      "Este sitio contiene material exclusivo para mayores de 18 años. Al continuar, confirmas que eres mayor de edad y aceptas ver contenido para adultos.",
    confirmText: "SOY MAYOR DE 18 AÑOS",
    denyText: "SALIR",
    // NOTE: Where the "Exit" button sends the user
    denyUrl: "https://www.google.com",   // ← REPLACE THIS if desired
    footerNote: "Al ingresar aceptás los Términos y Condiciones del sitio.",
  },

  // ----------------------------------------------------------
  // LINK BUTTONS
  // Each item in this array becomes a button on the page.
  //
  // Two types:
  //   1. Simple link:   { label, url, emoji }
  //   2. Dropdown group:{ label, emoji, isGroup: true, links: [...] }
  //
  // NOTE: Add, remove, or reorder items freely.
  //       For each link, replace the `url` value with your actual URL.
  // ----------------------------------------------------------
  buttons: [
    // --- Single button ---
    {
      label: "CONTENIDO EXCLUSIVO (OF)",
      emoji: "★",
      url: "https://onlyfans.com/johabettina",   // ← REPLACE
    },

    // --- Single button ---
    {
      label: "FANSLY",
      emoji: "★",
      url: "https://fansly.com/johabettina",     // ← REPLACE
    },

    // --- Dropdown group ---
    {
      label: "TELEGRAM",
      emoji: "✈",
      isGroup: true,
      links: [
        {
          label: "TELEGRAM FREE",
          url: "https://t.me/+yHpq52XO4dZlNDdh",      // ← REPLACE
        },
      ],
    },

    // --- Dropdown group ---
    {
      label: "INSTAGRAM",
      emoji: "◈",
      isGroup: true,
      links: [
        {
          label: "@johabettina",
          url: "https://www.instagram.com/johabettina/",  // ← REPLACE
        },
        ],
    },

    // --- Dropdown group ---
    {
      label: "TWITTER / X",
      emoji: "✕",
      isGroup: true,
      links: [
        {
          label: "@johabettina",
          url: "http://twitter.com/johabettina",      // ← REPLACE
        },
        ],
    },

    // --- Single button ---
    {
      label: "TIKTOK",
      emoji: "♪",
      url: "https://www.tiktok.com/@johabettina", // ← REPLACE
    },

  ],

  // ----------------------------------------------------------
  // FOOTER
  // ----------------------------------------------------------
  footer:
    "Al ingresar a enlaces externos aceptás sus Términos. Contenido para mayores de 18+",
};
