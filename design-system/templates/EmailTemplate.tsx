/**
 * Email Template
 *
 * Complete email layout example matching Figma design with decorative graphics
 * Supports multiple variants: not-branded, branded, no-images, branded-no-logo
 */

import { useState } from 'react';
import '../App.css';
import styles from './EmailTemplate.module.css';
import ignitionLogoText from '../assets/ignition-logo-text.svg';
import ignitionStar from '../assets/ignition-star.svg';

type EmailVariant = 'not-branded' | 'branded' | 'not-branded-no-images' | 'branded-no-images' | 'branded-no-logo';

function EmailTemplate() {
  const [variant, setVariant] = useState<EmailVariant>('not-branded');

  return (
    <div className="app">
      <header className="header">
        <h1>Email Template</h1>
        <p>Multiple email variants for different branding scenarios</p>
      </header>

      {/* Variant Selector */}
      <div className={styles.variantSelector}>
        <h3 className={styles.variantSelectorTitle}>Select Variant:</h3>
        <div className={styles.variantButtons}>
          {[
            { value: 'not-branded', label: 'Ignition (with graphics)' },
            { value: 'branded', label: 'Branded (with graphics)' },
            { value: 'not-branded-no-images', label: 'Ignition (no graphics)' },
            { value: 'branded-no-images', label: 'Branded (no graphics)' },
            { value: 'branded-no-logo', label: 'Branded (no logo)' }
          ].map(({ value, label }) => (
            <button
              key={value}
              onClick={() => setVariant(value as EmailVariant)}
              className={variant === value ? styles.variantButtonActive : styles.variantButton}
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      <main className="main">
        {/* Full Email Example */}
        <section className="section">
          <div className={styles.emailOuter}>
            {/* Email Container */}
            <div className={styles.emailContainer}>
              {/* Header */}
              <div className={variant === 'branded-no-images' || variant === 'branded' || variant === 'branded-no-logo' ? styles.emailHeaderBranded : styles.emailHeader}>
                {/* Ignition Logo (not-branded variants) */}
                {(variant === 'not-branded' || variant === 'not-branded-no-images') && (
                  <div className={styles.ignitionLogo}>
                    <img
                      src={ignitionLogoText}
                      alt="Ignition"
                      className={styles.ignitionLogoText}
                    />
                    <img
                      src={ignitionStar}
                      alt=""
                      className={styles.ignitionStar}
                    />
                  </div>
                )}

                {/* Custom Branded Logo (branded with logo) */}
                {variant === 'branded' && (
                  <div className={styles.brandedLogo}>
                    <span className={styles.brandedLogoEmoji}>🌿</span>
                    Growth Accounting
                  </div>
                )}

                {/* Text Header (branded-no-images) */}
                {variant === 'branded-no-images' && (
                  <div className={styles.brandedTextHeader}>
                    [ Growth Accounting logo ]
                  </div>
                )}

                {/* Text Header (branded-no-logo) */}
                {variant === 'branded-no-logo' && (
                  <div className={styles.brandedTextHeaderBold}>
                    Growth Accounting
                  </div>
                )}
              </div>

              {/* Body Content */}
              <div className={styles.emailBody}>
                <div className={styles.emailContent}>
                  <div className={(variant === 'not-branded' || variant === 'not-branded-no-images') ? styles.contentText : styles.contentTextLeft}>
                    Content
                  </div>

                  <a
                    href="#"
                    className={
                      variant === 'not-branded' ? styles.ctaButtonPrimary :
                      variant === 'branded' ? styles.ctaButtonBrandedTeal :
                      variant === 'not-branded-no-images' ? styles.ctaButtonTeal :
                      variant === 'branded-no-images' ? styles.ctaButtonOrange :
                      styles.ctaButtonTeal
                    }
                  >
                    Pay invoice
                  </a>
                </div>

                {/* Decorative Bottom Graphics or Line */}
                {(variant === 'not-branded' || variant === 'branded') ? (
                  <div className={styles.decorativeGraphics}>
                    {/* Left Circle */}
                    <div className={styles.decorativeCircleLeft} />
                    {/* Center Circles */}
                    <div className={styles.decorativeCircleCenter} />
                    {/* Right Circle */}
                    <div className={styles.decorativeCircleRight} />
                  </div>
                ) : (
                  <div className={variant === 'branded-no-images' ? styles.decorativeLineOrange : styles.decorativeLineTeal} />
                )}
              </div>
            </div>

            {/* Unsubscribe Text */}
            <div className={styles.unsubscribeSection}>
              <p className={styles.unsubscribeText}>
                To stop receiving these emails, please contact{' '}
                <a
                  href="mailto:GrowthAccounting@mail.com"
                  className={styles.unsubscribeLink}
                >
                  Growth Accounting
                </a>
              </p>
            </div>

            {/* Footer with Ignition Info and Star Rating */}
            <div className={styles.emailFooter}>
              {/* Logo/Header */}
              {(variant === 'not-branded' || variant === 'branded') ? (
                <div className={styles.footerLogo}>
                  <img
                    src={ignitionLogoText}
                    alt="Ignition"
                    className={styles.ignitionLogoText}
                  />
                  <img
                    src={ignitionStar}
                    alt=""
                    className={styles.ignitionStar}
                  />
                </div>
              ) : (
                <div className={styles.footerTextLogo}>
                  [ Ignition Logo ]
                </div>
              )}

              {/* Description */}
              <p className={styles.footerDescription}>
                Trusted by 7,000+ professional services businesses globally to help them engage clients, invoice and collect payments.
              </p>

              {/* Star Rating */}
              <div>
                {(variant === 'not-branded' || variant === 'branded') ? (
                  <div className={styles.starRating}>
                    {[1, 2, 3, 4, 5].map((star) => (
                      <span key={star} className={styles.star}>★</span>
                    ))}
                  </div>
                ) : (
                  <div className={styles.starRatingPlaceholder}>
                    [ Ignition 4.8 Star Rating Image ]
                  </div>
                )}
                <p className={styles.ratingText}>
                  Average based on thousands of reviews
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default EmailTemplate;
