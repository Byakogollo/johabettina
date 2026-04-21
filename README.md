# Link-in-Bio Site (Vite + React)

A clean, animated creator link-in-bio page with age gate, profile card, single buttons, and expandable dropdown groups — inspired by [paulibelen.com](https://paulibelen.com).

---

## 🚀 Quick Start

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## ✏️ How to Customize

**Everything you need to change lives in one file:**

```
src/siteConfig.js
```

Open it and edit:

| Field | What it changes |
|---|---|
| `creatorName` | The large heading name |
| `creatorHandle` | The small @handle below the name |
| `backgroundImage.src` | The full-page background photo |
| `avatarImage.src` | The circular profile picture |
| `ageGate.show` | `true` = show age gate, `false` = skip it |
| `ageGate.denyUrl` | Where "Exit" button sends the user |
| `buttons[]` | All your link buttons |

### Adding / Removing Buttons

In `siteConfig.js`, each entry in `buttons` is either:

**Single button:**
```js
{
  label: "ONLYFANS",
  emoji: "★",
  url: "https://onlyfans.com/yourprofile",
}
```

**Dropdown group:**
```js
{
  label: "TELEGRAM",
  emoji: "✈",
  isGroup: true,
  links: [
    { label: "FREE CHANNEL", url: "https://t.me/..." },
    { label: "PRIVATE CHAT", url: "https://t.me/..." },
  ],
}
```

---

## 🖼️ Replacing Images

Place your images in the `/public/` folder, then update the paths in `siteConfig.js`:

```js
backgroundImage: { src: "/my-background.jpg" },
avatarImage:     { src: "/my-avatar.jpg" },
```

Or use any external URL:
```js
backgroundImage: { src: "https://example.com/photo.jpg" },
```

---

## 🎨 Changing Colors / Fonts

Open `src/index.css` and edit the CSS variables at the top:

```css
--color-accent: #c9a96e;   /* Gold accent — change to your brand color */
--font-display: 'Cormorant Garamond', serif;
--font-body:    'Jost', sans-serif;
```

---

## 📦 Build for Production

```bash
npm run build
```

Output goes to `/dist/` — upload that folder to any static host (Vercel, Netlify, Cloudflare Pages, etc.).
