/**
 * Email Template
 *
 * Complete email layout example matching Figma design with decorative graphics
 * Supports multiple variants: not-branded, branded, no-images, branded-no-logo
 */

import { useState } from 'react';
import '../App.css';
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
      <div style={{
        padding: '20px',
        backgroundColor: '#f8f8fc',
        borderRadius: '8px',
        margin: '0 auto 24px',
        maxWidth: '683px'
      }}>
        <h3 style={{ margin: '0 0 12px 0', fontSize: '14px', fontWeight: 600 }}>Select Variant:</h3>
        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
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
              style={{
                padding: '8px 16px',
                backgroundColor: variant === value ? '#5a51e7' : 'white',
                color: variant === value ? 'white' : '#3c3d40',
                border: '1px solid #e4e7f5',
                borderRadius: '3px',
                cursor: 'pointer',
                fontSize: '13px',
                fontWeight: 500
              }}
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      <main className="main">
        {/* Full Email Example */}
        <section className="section">
          <div style={{
            maxWidth: '683px',
            margin: '0 auto',
            backgroundColor: '#f0f2fa',
            padding: '30px 0 0 0'
          }}>
            {/* Email Container */}
            <div style={{
              maxWidth: '600px',
              margin: '0 auto',
              backgroundColor: 'white',
              borderRadius: '8px',
              overflow: 'hidden'
            }}>
              {/* Header */}
              <div style={{
                backgroundColor: 'white',
                borderBottom: variant === 'branded-no-images' || variant === 'branded' || variant === 'branded-no-logo' ? '2px solid #ecebea' : '2px solid #e4e7f5',
                padding: '30px 40px',
                height: '110px',
                display: 'flex',
                alignItems: 'center'
              }}>
                {/* Ignition Logo (not-branded variants) */}
                {(variant === 'not-branded' || variant === 'not-branded-no-images') && (
                  <div style={{
                    position: 'relative',
                    height: '50px',
                    width: '151.429px',
                    display: 'flex',
                    alignItems: 'center'
                  }}>
                    <img
                      src={ignitionLogoText}
                      alt="Ignition"
                      style={{
                        position: 'absolute',
                        left: 0,
                        bottom: '7.09%',
                        width: '88.52%',
                        height: '78.24%'
                      }}
                    />
                    <img
                      src={ignitionStar}
                      alt=""
                      style={{
                        position: 'absolute',
                        left: '85.49%',
                        top: 0,
                        width: '14.56%',
                        height: '41.73%'
                      }}
                    />
                  </div>
                )}

                {/* Custom Branded Logo (branded with logo) */}
                {variant === 'branded' && (
                  <div style={{
                    fontSize: '24px',
                    fontWeight: 400,
                    fontFamily: 'Helvetica, Arial, sans-serif',
                    color: '#1e1e20',
                    fontStyle: 'italic'
                  }}>
                    <span style={{ fontSize: '32px', color: '#4d9f96', marginRight: '4px' }}>🌿</span>
                    Growth Accounting
                  </div>
                )}

                {/* Text Header (branded-no-images) */}
                {variant === 'branded-no-images' && (
                  <div style={{
                    fontSize: '14px',
                    fontWeight: 400,
                    fontFamily: 'Matter, Helvetica, Arial, sans-serif',
                    color: 'black'
                  }}>
                    [ Growth Accounting logo ]
                  </div>
                )}

                {/* Text Header (branded-no-logo) */}
                {variant === 'branded-no-logo' && (
                  <div style={{
                    fontSize: '24px',
                    fontWeight: 700,
                    fontFamily: 'Helvetica, Arial, sans-serif',
                    color: 'black'
                  }}>
                    Growth Accounting
                  </div>
                )}
              </div>

              {/* Body Content */}
              <div style={{
                backgroundColor: 'white',
                padding: '30px 40px 0 40px'
              }}>
                <div style={{
                  paddingBottom: '20px',
                  borderBottom: '1px solid #e4e7f5'
                }}>
                  <div style={{
                    fontSize: '16px',
                    fontFamily: 'Helvetica, Arial, sans-serif',
                    color: '#3c3d40',
                    lineHeight: variant === 'not-branded' || variant === 'not-branded-no-images' ? '20px' : '1.5',
                    marginBottom: '20px',
                    textAlign: (variant === 'not-branded' || variant === 'not-branded-no-images') ? 'center' : 'left'
                  }}>
                    Content
                  </div>

                  <a
                    href="#"
                    style={{
                      display: 'inline-block',
                      backgroundColor:
                        variant === 'not-branded' ? '#5a51e7' :
                        variant === 'branded' ? '#d5fdff' :
                        variant === 'not-branded-no-images' ? '#6dd8df' :
                        variant === 'branded-no-images' ? '#ff9d28' :
                        '#6dd8df',
                      color: variant === 'not-branded' ? 'white' : 'black',
                      padding: '11px 18px',
                      borderRadius: '12px',
                      textDecoration: 'none',
                      fontSize: '18px',
                      fontFamily: 'Helvetica, Arial, sans-serif',
                      letterSpacing: '-0.15px',
                      lineHeight: '22px'
                    }}
                  >
                    Pay invoice
                  </a>
                </div>

                {/* Decorative Bottom Graphics or Line */}
                {(variant === 'not-branded' || variant === 'branded') ? (
                  <div style={{
                    height: '98px',
                    position: 'relative',
                    overflow: 'hidden',
                    marginTop: '0'
                  }}>
                    {/* Left Circle */}
                    <div style={{
                      position: 'absolute',
                      left: '-80px',
                      bottom: '-140px',
                      width: '280px',
                      height: '280px',
                      borderRadius: '50%',
                      background: 'linear-gradient(135deg, #4D9F96 0%, #5a9f96 100%)',
                      opacity: 0.4
                    }} />
                    {/* Center Circles */}
                    <div style={{
                      position: 'absolute',
                      left: '50%',
                      transform: 'translateX(-50%)',
                      bottom: '-140px',
                      width: '280px',
                      height: '280px',
                      borderRadius: '50%',
                      background: 'linear-gradient(135deg, #6dd8df 0%, #5ac8cf 100%)',
                      opacity: 0.3
                    }} />
                    {/* Right Circle */}
                    <div style={{
                      position: 'absolute',
                      right: '-80px',
                      bottom: '-140px',
                      width: '280px',
                      height: '280px',
                      borderRadius: '50%',
                      background: 'linear-gradient(135deg, #4D9F96 0%, #5a9f96 100%)',
                      opacity: 0.4
                    }} />
                  </div>
                ) : (
                  <div style={{
                    height: '8px',
                    backgroundColor:
                      variant === 'branded-no-images' ? '#ff9d28' :
                      variant === 'branded-no-logo' ? '#6dd8df' :
                      '#6dd8df',
                    borderBottomLeftRadius: '8px',
                    borderBottomRightRadius: '8px'
                  }} />
                )}
              </div>
            </div>

            {/* Unsubscribe Text */}
            <div style={{
              maxWidth: '600px',
              margin: '30px auto',
              textAlign: 'center'
            }}>
              <p style={{
                fontSize: '16px',
                fontStyle: 'italic',
                fontFamily: 'Arial, sans-serif',
                color: '#7b7d85',
                lineHeight: '1.5',
                margin: 0
              }}>
                To stop receiving these emails, please contact{' '}
                <a
                  href="mailto:GrowthAccounting@mail.com"
                  style={{
                    color: '#df320c',
                    textDecoration: 'underline'
                  }}
                >
                  Growth Accounting
                </a>
              </p>
            </div>

            {/* Footer with Ignition Info and Star Rating */}
            <div style={{
              maxWidth: '600px',
              margin: '0 auto',
              backgroundColor: 'white',
              padding: '40px 40px 30px 40px'
            }}>
              {/* Logo/Header */}
              {(variant === 'not-branded' || variant === 'branded') ? (
                <div style={{
                  position: 'relative',
                  height: '50px',
                  width: '151.429px',
                  display: 'flex',
                  alignItems: 'center',
                  marginBottom: '30px'
                }}>
                  <img
                    src={ignitionLogoText}
                    alt="Ignition"
                    style={{
                      position: 'absolute',
                      left: 0,
                      bottom: '7.09%',
                      width: '88.52%',
                      height: '78.24%'
                    }}
                  />
                  <img
                    src={ignitionStar}
                    alt=""
                    style={{
                      position: 'absolute',
                      left: '85.49%',
                      top: 0,
                      width: '14.56%',
                      height: '41.73%'
                    }}
                  />
                </div>
              ) : (
                <div style={{
                  fontSize: '14px',
                  fontWeight: 400,
                  fontFamily: 'Helvetica, Arial, sans-serif',
                  color: 'black',
                  marginBottom: '30px'
                }}>
                  [ Ignition Logo ]
                </div>
              )}

              {/* Description */}
              <p style={{
                fontSize: '14px',
                fontFamily: 'Helvetica, Arial, sans-serif',
                color: '#15514d',
                lineHeight: '16px',
                letterSpacing: '0.014px',
                margin: '0 0 30px 0'
              }}>
                Trusted by 7,000+ professional services businesses globally to help them engage clients, invoice and collect payments.
              </p>

              {/* Star Rating */}
              <div>
                {(variant === 'not-branded' || variant === 'branded') ? (
                  <div style={{
                    display: 'flex',
                    gap: '2px',
                    marginBottom: '10px'
                  }}>
                    {[1, 2, 3, 4, 5].map((star) => (
                      <span key={star} style={{
                        color: '#f4a52a',
                        fontSize: '20px',
                        lineHeight: '20px'
                      }}>★</span>
                    ))}
                  </div>
                ) : (
                  <div style={{
                    fontSize: '14px',
                    fontWeight: 400,
                    fontFamily: 'Helvetica, Arial, sans-serif',
                    color: 'black',
                    marginBottom: '10px'
                  }}>
                    [ Ignition 4.8 Star Rating Image ]
                  </div>
                )}
                <p style={{
                  fontSize: '14px',
                  fontFamily: 'Helvetica, Arial, sans-serif',
                  color: '#15514d',
                  lineHeight: '16px',
                  margin: 0
                }}>
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
