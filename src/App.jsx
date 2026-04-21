import React, { useState } from 'react'
import { siteConfig } from './siteConfig.js'
import AgeGate from './components/AgeGate.jsx'
import LinkButton from './components/LinkButton.jsx'
import styles from './App.module.css'

export default function App() {
  // Age gate state — starts visible if configured
  const [ageVerified, setAgeVerified] = useState(!siteConfig.ageGate.show)

  return (
    <>
      {/* ---- Age Gate Modal ---- */}
      {!ageVerified && (
        <AgeGate
          config={siteConfig.ageGate}
          onConfirm={() => setAgeVerified(true)}
        />
      )}

      {/* ---- Main Page ---- */}
      <div className={styles.page}>

        {/* ------------------------------------------------------------------
            BACKGROUND IMAGE
            NOTE: The background image src is set in siteConfig.js →
                  backgroundImage.src
                  Replace "/background.jpg" with your own image path or URL.
        ------------------------------------------------------------------ */}
        <div
          className={styles.bg}
          style={{ backgroundImage: `url(${siteConfig.backgroundImage.src})` }}
          aria-hidden="true"
        />
        {/* Dark gradient overlay on top of the background */}
        <div className={styles.bgOverlay} aria-hidden="true" />

        {/* ---- Content card ---- */}
        <main className={styles.card}>

          {/* ------------------------------------------------------------------
              AVATAR / PROFILE PHOTO
              NOTE: Avatar src is set in siteConfig.js → avatarImage.src
                    Replace "/avatar.jpg" with your own image.
          ------------------------------------------------------------------ */}
          <div className={styles.avatarWrap}>
            <img
              src={siteConfig.avatarImage.src}
              alt={siteConfig.avatarImage.alt}
              className={styles.avatar}
            />
          </div>

          {/* Creator name & handle */}
          <div className={styles.identity}>
            {/* NOTE: Name comes from siteConfig.js → creatorName */}
            <h1 className={styles.name}>{siteConfig.creatorName}</h1>
            {/* NOTE: Handle comes from siteConfig.js → creatorHandle */}
            <p className={styles.handle}>{siteConfig.creatorHandle}</p>
          </div>

          {/* ------------------------------------------------------------------
              LINK BUTTONS
              NOTE: All buttons are defined in siteConfig.js → buttons array.
                    Add, remove, or reorder them there.
          ------------------------------------------------------------------ */}
          <nav className={styles.links} aria-label="Links">
            {siteConfig.buttons.map((item, i) => (
              <LinkButton key={item.label} item={item} index={i} />
            ))}
          </nav>

          

        </main>
        {/* Footer disclaimer */}
          <footer className={styles.footer}>
            {/* NOTE: Footer text is set in siteConfig.js → footer */}
            {siteConfig.footer}
          </footer>
      </div>
    </>
  )
}
