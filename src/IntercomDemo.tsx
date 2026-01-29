/**
 * Intercom Demo
 *
 * Showcases Intercom-style UI patterns
 */

import { useState } from 'react';
import { Icon } from '../design-system';
import './App.css';

function TooltipExample({ position }: { position: string }) {
  const [isHovered, setIsHovered] = useState(false);

  const beaconStyles = {
    position: 'relative' as const,
    width: '14px',
    height: '14px',
    cursor: 'pointer'
  };

  const pulseStyles = {
    position: 'absolute' as const,
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '14px',
    height: '14px',
    borderRadius: '50%',
    backgroundColor: '#f4502a',
    opacity: 0.6,
    animation: 'pulse 2s ease-in-out infinite'
  };

  const dotStyles = {
    position: 'absolute' as const,
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '8px',
    height: '8px',
    borderRadius: '50%',
    backgroundColor: '#f4502a'
  };

  const tooltipStyles = {
    position: 'absolute' as const,
    backgroundColor: '#3c3d40',
    color: 'white',
    padding: '8px 12px',
    borderRadius: '3px',
    fontSize: '12px',
    fontWeight: 500,
    whiteSpace: 'nowrap' as const,
    lineHeight: '1.5',
    width: '255px',
    zIndex: 1000
  };

  const pointerStyles = {
    position: 'absolute' as const,
    width: 0,
    height: 0,
    borderStyle: 'solid' as const
  };

  return (
    <div
      style={{ position: 'relative', display: 'inline-flex', alignItems: 'center' }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Pulsing Beacon */}
      <div style={beaconStyles}>
        <div style={pulseStyles}></div>
        <div style={dotStyles}></div>
      </div>

      {/* Tooltip */}
      {isHovered && (
        <>
          {position === 'Left' && (
            <div style={{ display: 'flex', alignItems: 'center', position: 'absolute', right: '100%', top: '50%', transform: 'translateY(-50%)' }}>
              <div style={tooltipStyles}>Content goes here</div>
              <div style={{
                ...pointerStyles,
                borderWidth: '4px 0 4px 6px',
                borderColor: 'transparent transparent transparent #3c3d40',
                marginLeft: '-6px'
              }}></div>
            </div>
          )}
          {position === 'Right' && (
            <div style={{ display: 'flex', alignItems: 'center', position: 'absolute', left: '100%', top: '50%', transform: 'translateY(-50%)' }}>
              <div style={{
                ...pointerStyles,
                borderWidth: '4px 6px 4px 0',
                borderColor: 'transparent #3c3d40 transparent transparent',
                marginRight: '-6px'
              }}></div>
              <div style={tooltipStyles}>Content goes here</div>
            </div>
          )}
          {position === 'Top' && (
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', position: 'absolute', bottom: '100%', left: '50%', transform: 'translateX(-50%)' }}>
              <div style={tooltipStyles}>Content goes here</div>
              <div style={{
                ...pointerStyles,
                borderWidth: '6px 4px 0 4px',
                borderColor: '#3c3d40 transparent transparent transparent',
                marginTop: '-6px'
              }}></div>
            </div>
          )}
          {position === 'Bottom' && (
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', position: 'absolute', top: '100%', left: '50%', transform: 'translateX(-50%)' }}>
              <div style={{
                ...pointerStyles,
                borderWidth: '0 4px 6px 4px',
                borderColor: 'transparent transparent #3c3d40 transparent',
                marginBottom: '-6px'
              }}></div>
              <div style={tooltipStyles}>Content goes here</div>
            </div>
          )}
        </>
      )}
    </div>
  );
}

function IntercomDemo() {
  const [bannerVisible, setBannerVisible] = useState(true);
  const [tourStep, setTourStep] = useState(0);
  const [showTour, setShowTour] = useState(false);

  const tourSteps = [
    { title: 'Welcome!', content: 'Let\'s take a quick tour of the key features.' },
    { title: 'Step 2', content: 'This is the second step of the tour.' },
    { title: 'Step 3', content: 'This is the third step.' },
    { title: 'Final Step', content: 'You\'re all set! Click Next to finish.' }
  ];

  return (
    <div className="app">
      <header className="header">
        <h1>Intercom UI Patterns</h1>
        <p>Banner, Product Tour, Tooltips, and Posts</p>
      </header>

      <main className="main">
        {/* Banner Section */}
        <section className="section">
          <h2>Banner</h2>
          <p>Dark green notification banner with action button</p>

          {bannerVisible && (
            <div style={{
              backgroundColor: '#15514d',
              color: 'white',
              padding: '8px 12px',
              borderRadius: '12px',
              display: 'flex',
              gap: '22px',
              alignItems: 'flex-start',
              maxWidth: '594px',
              boxShadow: '0px 0px 1px 0px rgba(23, 30, 37, 0.31), 0px 18px 28px 0px rgba(23, 30, 37, 0.15)'
            }}>
              <div style={{ flex: 1 }}>
                <p style={{ fontSize: '14px', margin: '0 0 4px 0', color: 'white' }}>
                  🎉 New feature available! Check out our latest updates.
                </p>
                <button
                  style={{
                    background: 'none',
                    border: 'none',
                    color: 'white',
                    fontSize: '13px',
                    fontWeight: 'bold',
                    textDecoration: 'underline',
                    cursor: 'pointer',
                    padding: 0
                  }}
                  onClick={() => alert('Action clicked')}
                >
                  Learn more
                </button>
              </div>
              <button
                onClick={() => setBannerVisible(false)}
                style={{
                  background: 'none',
                  border: 'none',
                  color: 'white',
                  cursor: 'pointer',
                  padding: '4px',
                  fontSize: '12px'
                }}
                aria-label="Close banner"
              >
                <Icon name="xmark" variant="solid" />
              </button>
            </div>
          )}

          {!bannerVisible && (
            <button
              onClick={() => setBannerVisible(true)}
              style={{
                backgroundColor: '#5a51e7',
                color: 'white',
                border: 'none',
                padding: '8px 16px',
                borderRadius: '4px',
                cursor: 'pointer'
              }}
            >
              Show Banner
            </button>
          )}
        </section>

        {/* Product Tour Section */}
        <section className="section">
          <h2>Product Tour</h2>
          <p>Multi-step walkthrough with progress indicator</p>

          <button
            onClick={() => {
              setShowTour(true);
              setTourStep(0);
            }}
            style={{
              backgroundColor: '#5a51e7',
              color: 'white',
              border: 'none',
              padding: '10px 20px',
              borderRadius: '4px',
              cursor: 'pointer',
              fontSize: '14px'
            }}
          >
            Start Product Tour
          </button>

          {showTour && (
            <div style={{
              marginTop: '20px',
              border: '2px dashed #e4e7f5',
              borderRadius: '8px',
              padding: '20px',
              position: 'relative'
            }}>
              <button
                onClick={() => setShowTour(false)}
                style={{
                  position: 'absolute',
                  top: '8px',
                  right: '8px',
                  background: 'none',
                  border: 'none',
                  fontSize: '16px',
                  cursor: 'pointer',
                  color: '#7b7d85'
                }}
                aria-label="Close tour"
              >
                <Icon name="xmark" variant="solid" />
              </button>

              <div style={{ marginBottom: '16px' }}>
                <h3 style={{ margin: '0 0 8px 0', fontSize: '16px' }}>
                  {tourSteps[tourStep].title}
                </h3>
                <p style={{ margin: '0', color: '#3c3d40', fontSize: '13px' }}>
                  {tourSteps[tourStep].content}
                </p>
              </div>

              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
              }}>
                <div style={{ fontSize: '12px', color: '#7b7d85' }}>
                  {tourStep + 1} of {tourSteps.length}
                </div>
                <div style={{ display: 'flex', gap: '8px' }}>
                  {tourStep > 0 && (
                    <button
                      onClick={() => setTourStep(tourStep - 1)}
                      style={{
                        backgroundColor: 'transparent',
                        color: '#3c3d40',
                        border: '1px solid #e4e7f5',
                        padding: '6px 12px',
                        borderRadius: '3px',
                        cursor: 'pointer',
                        fontSize: '13px'
                      }}
                    >
                      Previous
                    </button>
                  )}
                  <button
                    onClick={() => {
                      if (tourStep < tourSteps.length - 1) {
                        setTourStep(tourStep + 1);
                      } else {
                        setShowTour(false);
                        setTourStep(0);
                      }
                    }}
                    style={{
                      backgroundColor: '#15514d',
                      color: 'white',
                      border: 'none',
                      padding: '6px 12px',
                      borderRadius: '3px',
                      cursor: 'pointer',
                      fontSize: '13px'
                    }}
                  >
                    {tourStep < tourSteps.length - 1 ? 'Next' : 'Finish'}
                  </button>
                </div>
              </div>
            </div>
          )}
        </section>

        {/* Tooltip Section */}
        <section className="section">
          <h2>Tooltip</h2>
          <p>Dark tooltips that appear on hover</p>

          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
            {['Top', 'Right', 'Bottom', 'Left'].map((position) => (
              <TooltipExample key={position} position={position} />
            ))}
          </div>
        </section>

        {/* Post - Small Section */}
        <section className="section">
          <h2>Post - Small</h2>
          <p>Announcement cards with avatar and content</p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', maxWidth: '400px' }}>
            {[
              { name: 'Your name', fromText: 'from Ignition', time: '2hrs', emoji: '🎉', heading: 'New in Ignition', title: 'Heading', content: 'Content goes here. Short scrolls after 380px.' },
              { name: 'Your name', fromText: 'from Ignition', time: '2hrs', emoji: '🚀', heading: 'New in Ignition', title: 'Heading', content: 'Content goes here. This is Intercom\'s version of a modal.' }
            ].map((post, index) => (
              <div
                key={index}
                style={{
                  backgroundColor: 'white',
                  border: '1px solid #e4e7f5',
                  borderRadius: '8px',
                  padding: '16px',
                  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.05)'
                }}
              >
                {/* Sender - left aligned */}
                <div style={{ display: 'flex', gap: '12px', marginBottom: '12px' }}>
                  <div style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '50%',
                    flexShrink: 0,
                    overflow: 'hidden'
                  }}>
                    <img
                      src={`https://i.pravatar.cc/80?img=${index + 1}`}
                      alt="User avatar"
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        objectPosition: '50% 50%',
                        display: 'block'
                      }}
                    />
                  </div>
                  <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    flex: 1,
                    minWidth: 0
                  }}>
                    <div style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '4px',
                      fontSize: '14px',
                      fontWeight: 400,
                      lineHeight: 1.5,
                      fontFamily: "'SF Pro Text', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
                    }}>
                      <span style={{ color: '#1e1e20', flexShrink: 0 }}>{post.name}</span>
                      <span style={{ color: '#7b7d85', flexShrink: 0 }}>{post.fromText}</span>
                    </div>
                    <p style={{
                      fontSize: '11px',
                      fontWeight: 400,
                      lineHeight: 1.5,
                      color: '#7b7d85',
                      margin: 0,
                      fontFamily: "'SF Pro Text', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
                    }}>
                      {post.time}
                    </p>
                  </div>
                </div>

                <h3 style={{
                  margin: '0 0 8px 0',
                  fontSize: '16px',
                  fontWeight: 600,
                  color: '#000000',
                  lineHeight: '1.5'
                }}>
                  {post.heading}
                </h3>

                <h4 style={{
                  margin: '0 0 8px 0',
                  fontSize: '18px',
                  fontWeight: 500,
                  color: '#15514d',
                  lineHeight: '1.5'
                }}>
                  {post.title}
                </h4>

                <p style={{
                  margin: '0 0 12px 0',
                  fontSize: '14px',
                  lineHeight: '1.5',
                  color: '#3c3d40'
                }}>
                  {post.content}
                </p>

                <button
                  style={{
                    backgroundColor: '#15514d',
                    color: 'white',
                    border: 'none',
                    padding: '6px 14px',
                    borderRadius: '4px',
                    cursor: 'pointer',
                    fontSize: '13px',
                    fontWeight: 500
                  }}
                >
                  Primary
                </button>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

export default IntercomDemo;
