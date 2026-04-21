import React from 'react'
import styles from './AgeGate.module.css'

/**
 * AgeGate — Full-screen age verification modal.
 * Content is controlled via siteConfig.js → ageGate object.
 */
export default function AgeGate({ config, onConfirm }) {
  const handleDeny = () => {
    // Redirect user away when they click "Exit"
    window.location.href = config.denyUrl
  }

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <span className={styles.emoji}>🔞</span>
        <h2 className={styles.title}>{config.title}</h2>
        <p className={styles.description}>{config.description}</p>

        <div className={styles.actions}>
          {/* NOTE: "Confirm" button — calls onConfirm prop to dismiss the gate */}
          <button className={styles.confirmBtn} onClick={onConfirm}>
            {config.confirmText}
          </button>
          {/* NOTE: "Deny / Exit" button — redirects to config.denyUrl */}
          <button className={styles.denyBtn} onClick={handleDeny}>
            {config.denyText}
          </button>
        </div>

        <p className={styles.footer}>{config.footerNote}</p>
      </div>
    </div>
  )
}
