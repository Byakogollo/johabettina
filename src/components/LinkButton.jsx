import React, { useState } from 'react'
import styles from './LinkButton.module.css'

/**
 * LinkButton — renders either:
 *   1. A simple anchor button (when item.isGroup is falsy)
 *   2. An expandable dropdown group (when item.isGroup is true)
 *
 * All URLs come from siteConfig.js — edit them there.
 */
export default function LinkButton({ item, index }) {
  const [open, setOpen] = useState(false)

  // Animation delay so buttons stagger in on load
  const delay = `${0.1 + index * 0.07}s`

  if (item.isGroup) {
    return (
      <div
        className={styles.group}
        style={{ animationDelay: delay }}
      >
        {/* Group toggle button */}
        <button
          className={`${styles.btn} ${styles.groupToggle} ${open ? styles.groupOpen : ''}`}
          onClick={() => setOpen(!open)}
          aria-expanded={open}
        >
          <span className={styles.btnEmoji}>{item.emoji}</span>
          <span className={styles.btnLabel}>{item.label}</span>
          {/* Arrow indicator — rotates when open */}
          <span className={`${styles.arrow} ${open ? styles.arrowOpen : ''}`}>▾</span>
        </button>

        {/* Dropdown links */}
        <div className={`${styles.dropdown} ${open ? styles.dropdownOpen : ''}`}>
          {item.links.map((link) => (
            <a
              key={link.url}
              href={link.url}   /* NOTE: Each URL is set in siteConfig.js → buttons[].links[].url */
              className={styles.dropdownLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              {link.label}
              <span className={styles.arrow2}>➜</span>
            </a>
          ))}
        </div>
      </div>
    )
  }

  // Simple single link button
  return (
    <a
      href={item.url}   /* NOTE: URL is set in siteConfig.js → buttons[].url */
      className={styles.btn}
      style={{ animationDelay: delay }}
      target="_blank"
      rel="noopener noreferrer"
    >
      <span className={styles.btnEmoji}>{item.emoji}</span>
      <span className={styles.btnLabel}>{item.label}</span>
      <span className={styles.arrow2}>➜</span>
    </a>
  )
}
