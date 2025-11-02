/**
 * Guided Wizard Demo
 *
 * Showcases multi-step wizard patterns
 */

import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faSpinner, faChevronLeft, faChevronRight, faImage, faExclamationTriangle, faTimesCircle, faCheckCircle, faRedo } from '@fortawesome/free-solid-svg-icons';
import { IgnitionLogo } from '../../design-system/components/Card/assets';
import '../App.css';

type WizardStep = 'intro' | 'form' | 'table' | 'loading' | 'transition';
type IntroVariant = 'default' | 'simple' | 'detailed';
type LoadingVariant = 'default' | 'progress';
type TransitionVariant = 'display1-false' | 'display1-true' | 'display2-false' | 'display2-true';

function WizardTemplate() {
  const [currentStep, setCurrentStep] = useState<WizardStep>('intro');
  const [formData, setFormData] = useState({ name: '', email: '' });
  const [introVariant, setIntroVariant] = useState<IntroVariant>('default');
  const [loadingVariant, setLoadingVariant] = useState<LoadingVariant>('default');
  const [transitionVariant, setTransitionVariant] = useState<TransitionVariant>('display1-false');
  const [loadingProgress, setLoadingProgress] = useState(0);

  const steps: WizardStep[] = ['intro', 'form', 'table', 'loading', 'transition'];
  const stepIndex = steps.indexOf(currentStep);

  // Header component used across all wizard pages
  const renderHeader = (backgroundColor?: string, fixed?: boolean) => (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '16px 24px',
      position: fixed ? 'fixed' : 'absolute',
      top: '66px',
      left: 0,
      right: 0,
      zIndex: 1000,
      backgroundColor: backgroundColor || 'transparent'
    }}>
      <IgnitionLogo type="full" variant="positive" width={74} height={24} />
      <button
        onClick={() => setCurrentStep('intro')}
        style={{
          background: 'none',
          border: 'none',
          color: '#5a5b60',
          fontSize: '14px',
          fontWeight: 600,
          cursor: 'pointer',
          padding: '8px 13px'
        }}
      >
        Cancel
      </button>
    </div>
  );

  const renderIntro = () => {
    // Variant selector for intro page
    const variantSelector = (
      <div style={{
        position: 'absolute',
        top: '82px',
        left: '50%',
        transform: 'translateX(-50%)',
        backgroundColor: 'white',
        border: '1px solid #e4e7f5',
        borderRadius: '8px',
        padding: '8px',
        display: 'flex',
        gap: '8px',
        zIndex: 1001,
        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)'
      }}>
        {(['default', 'simple', 'detailed'] as IntroVariant[]).map((variant) => (
          <button
            key={variant}
            onClick={() => setIntroVariant(variant)}
            style={{
              backgroundColor: introVariant === variant ? '#5a51e7' : 'transparent',
              color: introVariant === variant ? 'white' : '#3c3d40',
              border: introVariant === variant ? 'none' : '1px solid #e4e7f5',
              padding: '6px 12px',
              borderRadius: '4px',
              cursor: 'pointer',
              fontSize: '12px',
              fontWeight: 500,
              textTransform: 'capitalize',
              fontFamily: 'SF Pro Text, -apple-system, BlinkMacSystemFont, sans-serif'
            }}
          >
            {variant}
          </button>
        ))}
      </div>
    );

    if (introVariant === 'simple') {
      return (
        <div style={{
          backgroundColor: 'white',
          height: '100vh',
          position: 'relative',
          overflow: 'hidden',
          paddingTop: '66px'
        }}>
          {renderHeader()}
          {variantSelector}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100vh',
            textAlign: 'center',
            padding: '0 24px',
            maxWidth: '600px',
            margin: '0 auto'
          }}>
            <h1 style={{
              fontSize: '48px',
              fontWeight: 600,
              margin: '0 0 16px 0',
              color: '#15514d',
              lineHeight: '1.1',
              letterSpacing: '-1px',
              fontFamily: 'SF Pro Text, -apple-system, BlinkMacSystemFont, sans-serif'
            }}>
              Get Started
            </h1>
            <p style={{
              fontSize: '16px',
              fontWeight: 500,
              lineHeight: '1.5',
              color: '#5a5b60',
              margin: '0 0 32px 0',
              fontFamily: 'SF Pro Text, -apple-system, BlinkMacSystemFont, sans-serif'
            }}>
              Complete the following steps to set up your account
            </p>
            <button
              onClick={() => setCurrentStep('form')}
              style={{
                backgroundColor: '#5a51e7',
                color: 'white',
                border: 'none',
                padding: '12px 24px',
                borderRadius: '3px',
                cursor: 'pointer',
                fontSize: '16px',
                fontWeight: 600,
                height: '40px',
                fontFamily: 'SF Pro Text, -apple-system, BlinkMacSystemFont, sans-serif'
              }}
            >
              Continue
            </button>
          </div>
        </div>
      );
    }

    if (introVariant === 'detailed') {
      return (
        <div style={{
          backgroundColor: 'white',
          height: '100vh',
          position: 'relative',
          overflow: 'hidden',
          paddingTop: '66px'
        }}>
          {renderHeader()}
          {variantSelector}
          <div style={{
            display: 'flex',
            height: '100vh',
            alignItems: 'center',
            gap: '64px',
            maxWidth: '1168px',
            margin: '0 auto',
            padding: '0 24px'
          }}>
            {/* Left Content */}
            <div style={{
              flex: 1,
              maxWidth: '538px',
              display: 'flex',
              flexDirection: 'column',
              gap: '32px'
            }}>
              <div>
                <h1 style={{
                  fontSize: '48px',
                  fontWeight: 600,
                  margin: '0 0 16px 0',
                  color: '#15514d',
                  lineHeight: '1.1',
                  letterSpacing: '-1px',
                  fontFamily: 'SF Pro Text, -apple-system, BlinkMacSystemFont, sans-serif'
                }}>
                  Welcome to Your Setup Journey
                </h1>
                <p style={{
                  fontSize: '16px',
                  fontWeight: 500,
                  lineHeight: '1.5',
                  color: '#5a5b60',
                  margin: '0 0 24px 0',
                  fontFamily: 'SF Pro Text, -apple-system, BlinkMacSystemFont, sans-serif'
                }}>
                  We'll guide you through a comprehensive setup process to ensure everything is configured perfectly for your needs.
                </p>
                <div style={{
                  backgroundColor: '#f8f8fc',
                  padding: '20px',
                  borderRadius: '8px',
                  marginBottom: '8px'
                }}>
                  <h3 style={{
                    fontSize: '14px',
                    fontWeight: 600,
                    color: '#3c3d40',
                    margin: '0 0 12px 0',
                    fontFamily: 'SF Pro Text, -apple-system, BlinkMacSystemFont, sans-serif'
                  }}>
                    What you'll accomplish:
                  </h3>
                  <ul style={{
                    margin: 0,
                    paddingLeft: '20px',
                    color: '#5a5b60',
                    fontSize: '14px',
                    lineHeight: '1.8',
                    fontFamily: 'SF Pro Text, -apple-system, BlinkMacSystemFont, sans-serif'
                  }}>
                    <li>Configure your account settings</li>
                    <li>Set up your preferences and notifications</li>
                    <li>Review and customize your dashboard</li>
                    <li>Complete initial data import</li>
                  </ul>
                </div>
              </div>
              <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                <button
                  onClick={() => setCurrentStep('form')}
                  style={{
                    backgroundColor: '#5a51e7',
                    color: 'white',
                    border: 'none',
                    padding: '12px 16px',
                    borderRadius: '3px',
                    cursor: 'pointer',
                    fontSize: '16px',
                    fontWeight: 600,
                    height: '40px',
                    fontFamily: 'SF Pro Text, -apple-system, BlinkMacSystemFont, sans-serif'
                  }}
                >
                  Get started
                </button>
                <button
                  style={{
                    backgroundColor: 'transparent',
                    color: '#3c3d40',
                    border: 'none',
                    padding: '12px 16px',
                    cursor: 'pointer',
                    fontSize: '16px',
                    fontWeight: 600,
                    height: '40px',
                    fontFamily: 'SF Pro Text, -apple-system, BlinkMacSystemFont, sans-serif'
                  }}
                >
                  Learn more
                </button>
              </div>
            </div>
            {/* Right Purple Area */}
            <div style={{
              flex: 1,
              maxWidth: '528px',
              minHeight: '528px',
              backgroundColor: '#e8e7ff',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <FontAwesomeIcon icon={faImage} style={{ fontSize: '48px', color: '#b8b4f5' }} />
            </div>
          </div>
        </div>
      );
    }

    // Default variant
    return (
      <div style={{
        backgroundColor: 'white',
        height: '100vh',
        position: 'relative',
        overflow: 'hidden',
        paddingTop: '66px'
      }}>
        {renderHeader()}
        {variantSelector}
        <div style={{
          display: 'flex',
          height: '100vh',
          alignItems: 'center',
          gap: '64px',
          maxWidth: '1168px',
          margin: '0 auto',
          padding: '0 24px'
        }}>
          {/* Left Content */}
          <div style={{
            flex: 1,
            maxWidth: '538px',
            display: 'flex',
            flexDirection: 'column',
            gap: '32px'
          }}>
            <div>
              <h1 style={{
                fontSize: '48px',
                fontWeight: 600,
                margin: '0 0 16px 0',
                color: '#15514d',
                lineHeight: '1.1',
                letterSpacing: '-1px',
                fontFamily: 'SF Pro Text, -apple-system, BlinkMacSystemFont, sans-serif'
              }}>
                Lorem ipsum dolor sit amet, consectetur
              </h1>
              <p style={{
                fontSize: '16px',
                fontWeight: 500,
                lineHeight: '1.5',
                color: '#5a5b60',
                margin: 0,
                fontFamily: 'SF Pro Text, -apple-system, BlinkMacSystemFont, sans-serif'
              }}>
                Adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
              </p>
            </div>
            <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
              <button
                onClick={() => setCurrentStep('form')}
                style={{
                  backgroundColor: '#5a51e7',
                  color: 'white',
                  border: 'none',
                  padding: '12px 16px',
                  borderRadius: '3px',
                  cursor: 'pointer',
                  fontSize: '16px',
                  fontWeight: 600,
                  height: '40px',
                  fontFamily: 'SF Pro Text, -apple-system, BlinkMacSystemFont, sans-serif'
                }}
              >
                Primary action
              </button>
              <button
                style={{
                  backgroundColor: 'transparent',
                  color: '#3c3d40',
                  border: 'none',
                  padding: '12px 16px',
                  cursor: 'pointer',
                  fontSize: '16px',
                  fontWeight: 600,
                  height: '40px',
                  fontFamily: 'SF Pro Text, -apple-system, BlinkMacSystemFont, sans-serif'
                }}
              >
                Secondary action
              </button>
            </div>
          </div>
          {/* Right Purple Area */}
          <div style={{
            flex: 1,
            maxWidth: '528px',
            minHeight: '528px',
            backgroundColor: '#e8e7ff',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <FontAwesomeIcon icon={faImage} style={{ fontSize: '48px', color: '#b8b4f5' }} />
          </div>
        </div>
      </div>
    );
  };

  const renderForm = () => (
    <div style={{
      backgroundColor: 'white',
      height: '100vh',
      position: 'relative',
      overflow: 'hidden',
      paddingTop: '66px'
    }}>
      {renderHeader('white')}
      <div style={{
        display: 'flex',
        height: '100vh',
        paddingTop: '56px'
      }}>
        {/* Left Form Area */}
        <div style={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          maxWidth: '864px',
          padding: '56px 24px 24px',
          backgroundColor: 'white'
        }}>
          <div style={{
            maxWidth: '544px',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            gap: '32px'
          }}>
            {/* Header */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <div style={{
                fontSize: '12px',
                fontWeight: 500,
                color: '#7b7d85',
                textTransform: 'uppercase',
                letterSpacing: '0.5px',
                fontFamily: 'SF Pro Text, -apple-system, BlinkMacSystemFont, sans-serif'
              }}>
                STEP 1
              </div>
              <h2 style={{
                fontSize: '32px',
                fontWeight: 600,
                margin: 0,
                color: '#15514d',
                lineHeight: '1.1',
                letterSpacing: '-1px',
                fontFamily: 'SF Pro Text, -apple-system, BlinkMacSystemFont, sans-serif'
              }}>
                Lorem ipsum dolor sit amet, consectetur
              </h2>
              <p style={{
                fontSize: '14px',
                lineHeight: '1.5',
                color: '#5a5b60',
                margin: 0,
                fontFamily: 'SF Pro Text, -apple-system, BlinkMacSystemFont, sans-serif'
              }}>
                Adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
              </p>
            </div>

            {/* Form Fields */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', maxWidth: '400px' }}>
                <div>
                  <div style={{
                    fontSize: '14px',
                    fontWeight: 500,
                    color: '#3c3d40',
                    fontFamily: 'SF Pro Text, -apple-system, BlinkMacSystemFont, sans-serif'
                  }}>
                    Label
                  </div>
                  <div style={{
                    fontSize: '14px',
                    color: '#9b9da8',
                    fontFamily: 'SF Pro Text, -apple-system, BlinkMacSystemFont, sans-serif'
                  }}>
                    This is a caption
                  </div>
                </div>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Text"
                  style={{
                    width: '100%',
                    height: '32px',
                    padding: '6px 12px',
                    border: '1px solid #b7bac7',
                    borderRadius: '4px',
                    fontSize: '14px',
                    fontFamily: 'SF Pro Text, -apple-system, BlinkMacSystemFont, sans-serif',
                    backgroundColor: 'white',
                    color: '#3c3d40'
                  }}
                />
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', maxWidth: '400px' }}>
                <div>
                  <div style={{
                    fontSize: '14px',
                    fontWeight: 500,
                    color: '#3c3d40',
                    fontFamily: 'SF Pro Text, -apple-system, BlinkMacSystemFont, sans-serif'
                  }}>
                    Label
                  </div>
                  <div style={{
                    fontSize: '14px',
                    color: '#9b9da8',
                    fontFamily: 'SF Pro Text, -apple-system, BlinkMacSystemFont, sans-serif'
                  }}>
                    This is a caption
                  </div>
                </div>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="Text"
                  style={{
                    width: '100%',
                    height: '32px',
                    padding: '6px 12px',
                    border: '1px solid #b7bac7',
                    borderRadius: '4px',
                    fontSize: '14px',
                    fontFamily: 'SF Pro Text, -apple-system, BlinkMacSystemFont, sans-serif',
                    backgroundColor: 'white',
                    color: '#3c3d40'
                  }}
                />
              </div>
            </div>

            {/* Footer with Navigation */}
            <div style={{
              display: 'flex',
              gap: '8px',
              alignItems: 'center',
              width: '100%'
            }}>
            <button
              onClick={() => setCurrentStep('intro')}
              style={{
                backgroundColor: '#e4e7f5',
                border: 'none',
                width: '40px',
                height: '40px',
                borderRadius: '3px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#3c3d40'
              }}
            >
              <FontAwesomeIcon icon={faChevronLeft} style={{ fontSize: '12px' }} />
            </button>
            <div style={{
              flex: 1,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '4px'
            }}>
              <div style={{
                width: '8px',
                height: '8px',
                borderRadius: '50%',
                backgroundColor: '#9c96f0'
              }} />
              <div style={{
                width: '8px',
                height: '8px',
                borderRadius: '50%',
                backgroundColor: '#e8e7ff'
              }} />
              <div style={{
                width: '8px',
                height: '8px',
                borderRadius: '50%',
                backgroundColor: '#e8e7ff'
              }} />
            </div>
            <button
              onClick={() => setCurrentStep('table')}
              style={{
                backgroundColor: '#5a51e7',
                color: 'white',
                border: 'none',
                padding: '0 16px',
                height: '40px',
                borderRadius: '3px',
                cursor: 'pointer',
                fontSize: '16px',
                fontWeight: 600,
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                fontFamily: 'SF Pro Text, -apple-system, BlinkMacSystemFont, sans-serif'
              }}
            >
              Next
              <FontAwesomeIcon icon={faChevronRight} style={{ fontSize: '12px' }} />
            </button>
            </div>
          </div>
        </div>
        {/* Right Image Area */}
        <div style={{
          flex: 1,
          maxWidth: '576px',
          backgroundColor: '#f8f8fc',
          display: 'flex',
          alignItems: 'flex-start',
          justifyContent: 'center',
          paddingTop: '112px',
          padding: '112px 24px 0'
        }}>
          <FontAwesomeIcon icon={faImage} style={{ fontSize: '48px', color: '#b8b4f5' }} />
        </div>
      </div>
    </div>
  );


  const renderTable = () => (
    <div style={{
      backgroundColor: 'white',
      minHeight: '100vh',
      position: 'relative',
      paddingTop: '66px',
      paddingBottom: '88px'
    }}>
      {renderHeader('white', true)}
      <div style={{
        padding: '80px 24px 0'
      }}>
        <div style={{
          maxWidth: '1168px',
          margin: '0 auto',
          width: '100%'
        }}>
          {/* Header */}
          <div style={{ marginBottom: '24px' }}>
            <div style={{
              fontSize: '12px',
              fontWeight: 500,
              color: '#7b7d85',
              textTransform: 'uppercase',
              letterSpacing: '0.5px',
              marginBottom: '8px',
              fontFamily: 'SF Pro Text, -apple-system, BlinkMacSystemFont, sans-serif'
            }}>
              STEP 1
            </div>
            <h2 style={{
              fontSize: '32px',
              fontWeight: 600,
              margin: '0 0 8px 0',
              color: '#15514d',
              lineHeight: '1.1',
              letterSpacing: '-1px',
              fontFamily: 'SF Pro Text, -apple-system, BlinkMacSystemFont, sans-serif'
            }}>
              Lorem ipsum dolor sit amet, consectetur
            </h2>
            <p style={{
              fontSize: '14px',
              lineHeight: '1.5',
              color: '#5a5b60',
              margin: 0,
              fontFamily: 'SF Pro Text, -apple-system, BlinkMacSystemFont, sans-serif'
            }}>
              Adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
            </p>
          </div>

          {/* Table */}
          <div style={{
            backgroundColor: 'white',
            border: '1px solid #e4e7f5',
            borderRadius: '8px',
            overflow: 'hidden',
            marginBottom: '24px'
          }}>
            <table style={{
              width: '100%',
              borderCollapse: 'collapse'
            }}>
              <thead>
                <tr style={{ backgroundColor: '#f8f8fc' }}>
                  <th style={{
                    padding: '12px 16px',
                    textAlign: 'left',
                    fontSize: '11px',
                    fontWeight: 600,
                    color: '#7b7d85',
                    textTransform: 'uppercase',
                    letterSpacing: '0.5px',
                    fontFamily: 'SF Pro Text, -apple-system, BlinkMacSystemFont, sans-serif'
                  }}>CLIENT</th>
                  <th style={{
                    padding: '12px 16px',
                    textAlign: 'left',
                    fontSize: '11px',
                    fontWeight: 600,
                    color: '#7b7d85',
                    textTransform: 'uppercase',
                    letterSpacing: '0.5px',
                    fontFamily: 'SF Pro Text, -apple-system, BlinkMacSystemFont, sans-serif'
                  }}>SERVICE</th>
                  <th style={{
                    padding: '12px 16px',
                    textAlign: 'left',
                    fontSize: '11px',
                    fontWeight: 600,
                    color: '#7b7d85',
                    textTransform: 'uppercase',
                    letterSpacing: '0.5px',
                    fontFamily: 'SF Pro Text, -apple-system, BlinkMacSystemFont, sans-serif'
                  }}>BILLING</th>
                  <th style={{
                    padding: '12px 16px',
                    textAlign: 'left',
                    fontSize: '11px',
                    fontWeight: 600,
                    color: '#7b7d85',
                    textTransform: 'uppercase',
                    letterSpacing: '0.5px',
                    fontFamily: 'SF Pro Text, -apple-system, BlinkMacSystemFont, sans-serif'
                  }}>ORIGINAL PRICE</th>
                  <th style={{
                    padding: '12px 16px',
                    textAlign: 'left',
                    fontSize: '11px',
                    fontWeight: 600,
                    color: '#7b7d85',
                    textTransform: 'uppercase',
                    letterSpacing: '0.5px',
                    fontFamily: 'SF Pro Text, -apple-system, BlinkMacSystemFont, sans-serif'
                  }}>NEW PRICE</th>
                  <th style={{
                    padding: '12px 16px',
                    textAlign: 'right',
                    fontSize: '11px',
                    fontWeight: 600,
                    color: '#7b7d85',
                    textTransform: 'uppercase',
                    letterSpacing: '0.5px',
                    fontFamily: 'SF Pro Text, -apple-system, BlinkMacSystemFont, sans-serif'
                  }}>% CHANGE</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { client: 'Bessie Cooper', service: 'Accounting services...', billing: 'One-off', price: '$200.00', newPrice: '$220' },
                  { client: 'Bessie Cooper', service: 'Bookkeeping servic...', billing: 'Every month', price: '$200.00 per hour', newPrice: '$220' },
                  { client: 'Floyd Miles', service: 'Accounting services...', billing: 'One-off', price: '$200.00', newPrice: '$220' },
                  { client: 'Marvin McKinney', service: 'Tax preparation...', billing: 'One-off', price: '$350.00', newPrice: '$385' },
                  { client: 'Jenny Wilson', service: 'Payroll services...', billing: 'Every month', price: '$150.00 per month', newPrice: '$165' },
                  { client: 'Kristin Watson', service: 'Financial planning...', billing: 'One-off', price: '$500.00', newPrice: '$550' },
                  { client: 'Wade Warren', service: 'Audit services...', billing: 'One-off', price: '$800.00', newPrice: '$880' },
                  { client: 'Robert Fox', service: 'Consulting services...', billing: 'Every week', price: '$300.00 per hour', newPrice: '$330' },
                  { client: 'Esther Howard', service: 'Tax advisory...', billing: 'Every month', price: '$250.00 per month', newPrice: '$275' },
                  { client: 'Cameron Williamson', service: 'Compliance review...', billing: 'One-off', price: '$600.00', newPrice: '$660' },
                  { client: 'Brooklyn Simmons', service: 'Business advisory...', billing: 'Every month', price: '$400.00 per month', newPrice: '$440' },
                  { client: 'Savannah Nguyen', service: 'Accounting services...', billing: 'One-off', price: '$200.00', newPrice: '$220' }
                ].map((row, index) => (
                  <tr key={index} style={{ borderTop: '1px solid #e4e7f5' }}>
                    <td style={{
                      padding: '16px',
                      fontSize: '14px',
                      color: '#3c3d40',
                      fontWeight: 500,
                      fontFamily: 'SF Pro Text, -apple-system, BlinkMacSystemFont, sans-serif'
                    }}>
                      <div>{row.client}</div>
                      <div style={{ fontSize: '12px', color: '#7b7d85', fontWeight: 400 }}>PROP-123 Accounting</div>
                    </td>
                    <td style={{
                      padding: '16px',
                      fontSize: '14px',
                      color: '#3c3d40',
                      fontFamily: 'SF Pro Text, -apple-system, BlinkMacSystemFont, sans-serif'
                    }}>{row.service}</td>
                    <td style={{
                      padding: '16px',
                      fontSize: '14px',
                      color: '#3c3d40',
                      fontFamily: 'SF Pro Text, -apple-system, BlinkMacSystemFont, sans-serif'
                    }}>{row.billing}</td>
                    <td style={{
                      padding: '16px',
                      fontSize: '14px',
                      color: '#7b7d85',
                      fontFamily: 'SF Pro Text, -apple-system, BlinkMacSystemFont, sans-serif'
                    }}>{row.price}</td>
                    <td style={{ padding: '16px' }}>
                      <input
                        type="text"
                        defaultValue={row.newPrice}
                        style={{
                          width: '80px',
                          height: '32px',
                          padding: '6px 12px',
                          border: '1px solid #b7bac7',
                          borderRadius: '4px',
                          fontSize: '14px',
                          fontFamily: 'SF Pro Text, -apple-system, BlinkMacSystemFont, sans-serif',
                          backgroundColor: 'white',
                          color: '#3c3d40'
                        }}
                      />
                    </td>
                    <td style={{
                      padding: '16px',
                      fontSize: '14px',
                      color: '#16a34a',
                      textAlign: 'right',
                      fontWeight: 500,
                      fontFamily: 'SF Pro Text, -apple-system, BlinkMacSystemFont, sans-serif'
                    }}>↗ 10%</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

        </div>
      </div>

      {/* Fixed Footer with Navigation */}
      <div style={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: 'white',
        borderTop: '1px solid #e4e7f5',
        padding: '24px',
        zIndex: 10
      }}>
        <div style={{
          maxWidth: '1168px',
          margin: '0 auto',
          display: 'flex',
          gap: '8px',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}>
            <button
              onClick={() => setCurrentStep('form')}
              style={{
                backgroundColor: '#e4e7f5',
                border: 'none',
                width: '40px',
                height: '40px',
                borderRadius: '3px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#3c3d40'
              }}
            >
              <FontAwesomeIcon icon={faChevronLeft} style={{ fontSize: '12px' }} />
            </button>
            <div style={{
              flex: 1,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '4px'
            }}>
              <div style={{
                width: '8px',
                height: '8px',
                borderRadius: '50%',
                backgroundColor: '#e8e7ff'
              }} />
              <div style={{
                width: '8px',
                height: '8px',
                borderRadius: '50%',
                backgroundColor: '#9c96f0'
              }} />
              <div style={{
                width: '8px',
                height: '8px',
                borderRadius: '50%',
                backgroundColor: '#e8e7ff'
              }} />
            </div>
            <button
              onClick={() => {
                setCurrentStep('loading');
                setTimeout(() => setCurrentStep('transition'), 2000);
              }}
              style={{
                backgroundColor: '#5a51e7',
                color: 'white',
                border: 'none',
                padding: '0 16px',
                height: '40px',
                borderRadius: '3px',
                cursor: 'pointer',
                fontSize: '16px',
                fontWeight: 600,
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                fontFamily: 'SF Pro Text, -apple-system, BlinkMacSystemFont, sans-serif'
              }}
            >
              Next
              <FontAwesomeIcon icon={faChevronRight} style={{ fontSize: '12px' }} />
            </button>
        </div>
      </div>
    </div>
  );

  const renderLoading = () => {
    // Variant selector for loading page
    const variantSelector = (
      <div style={{
        position: 'absolute',
        top: '82px',
        left: '50%',
        transform: 'translateX(-50%)',
        backgroundColor: 'white',
        border: '1px solid #e4e7f5',
        borderRadius: '8px',
        padding: '8px',
        display: 'flex',
        gap: '8px',
        zIndex: 1001,
        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)'
      }}>
        {(['default', 'progress'] as LoadingVariant[]).map((variant) => (
          <button
            key={variant}
            onClick={() => setLoadingVariant(variant)}
            style={{
              backgroundColor: loadingVariant === variant ? '#5a51e7' : 'transparent',
              color: loadingVariant === variant ? 'white' : '#3c3d40',
              border: loadingVariant === variant ? 'none' : '1px solid #e4e7f5',
              padding: '6px 12px',
              borderRadius: '4px',
              cursor: 'pointer',
              fontSize: '12px',
              fontWeight: 500,
              textTransform: 'capitalize',
              fontFamily: 'SF Pro Text, -apple-system, BlinkMacSystemFont, sans-serif'
            }}
          >
            {variant}
          </button>
        ))}
      </div>
    );

    if (loadingVariant === 'progress') {
      // Progress variant matching Figma design
      const progress = loadingProgress;

      return (
        <div style={{
          backgroundColor: 'white',
          height: '100vh',
          position: 'relative',
          overflow: 'hidden',
          paddingTop: '66px'
        }}>
          {renderHeader()}
          {variantSelector}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100vh',
            textAlign: 'center',
            padding: '0 24px',
            maxWidth: '640px',
            margin: '0 auto'
          }}>
            {/* Progress bar with label */}
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '12px',
              marginBottom: '24px'
            }}>
              <div style={{
                width: '320px',
                height: '8px',
                backgroundColor: '#e4e7f5',
                borderRadius: '2px',
                overflow: 'hidden',
                position: 'relative'
              }}>
                <div style={{
                  width: `${progress}%`,
                  height: '100%',
                  backgroundColor: '#4ea298',
                  transition: 'width 0.3s ease',
                  position: 'absolute',
                  left: 0,
                  top: 0
                }} />
              </div>
              <p style={{
                fontSize: '12px',
                lineHeight: '1.5',
                color: '#5a5b60',
                margin: 0,
                fontFamily: 'SF Pro Text, -apple-system, BlinkMacSystemFont, sans-serif'
              }}>
                Progress update...
              </p>
            </div>

            {/* Heading and description */}
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '8px',
              alignItems: 'center',
              textAlign: 'center'
            }}>
              <h1 style={{
                fontSize: '32px',
                fontWeight: 600,
                margin: 0,
                color: '#15514d',
                lineHeight: '1.1',
                letterSpacing: '-1px',
                fontFamily: 'SF Pro Text, -apple-system, BlinkMacSystemFont, sans-serif'
              }}>
                Lorem ipsum dolor sit amet, consectetur
              </h1>
              <p style={{
                fontSize: '16px',
                fontWeight: 500,
                lineHeight: '1.5',
                color: '#5a5b60',
                margin: 0,
                fontFamily: 'SF Pro Text, -apple-system, BlinkMacSystemFont, sans-serif'
              }}>
                Adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
              </p>
            </div>

            {/* Button to simulate progress */}
            <button
              onClick={() => {
                if (progress < 100) {
                  setLoadingProgress(Math.min(progress + 25, 100));
                } else {
                  setLoadingProgress(0);
                }
              }}
              style={{
                marginTop: '32px',
                backgroundColor: '#e4e7f5',
                color: '#3c3d40',
                border: 'none',
                padding: '8px 16px',
                borderRadius: '3px',
                cursor: 'pointer',
                fontSize: '13px',
                fontWeight: 500,
                fontFamily: 'SF Pro Text, -apple-system, BlinkMacSystemFont, sans-serif'
              }}
            >
              {progress < 100 ? 'Simulate Progress (+25%)' : 'Reset Progress'}
            </button>
          </div>
        </div>
      );
    }

    // Default variant
    return (
      <div style={{
        backgroundColor: 'white',
        height: '100vh',
        position: 'relative',
        overflow: 'hidden',
        paddingTop: '66px'
      }}>
        {renderHeader()}
        {variantSelector}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100vh',
          textAlign: 'center',
          padding: '0 24px'
        }}>
          <div style={{
            width: '60px',
            height: '60px',
            border: '4px solid #e8e7ff',
            borderTop: '4px solid #f4502a',
            borderRadius: '50%',
            animation: 'spin 1s linear infinite',
            marginBottom: '32px'
          }} />
          <h2 style={{
            fontSize: '32px',
            fontWeight: 600,
            margin: '0 0 16px 0',
            color: '#15514d',
            lineHeight: '1.1',
            fontFamily: 'SF Pro Text, -apple-system, BlinkMacSystemFont, sans-serif'
          }}>
            Lorem ipsum dolor sit amet, consectetur
          </h2>
          <p style={{
            fontSize: '14px',
            lineHeight: '1.5',
            color: '#5a5b60',
            margin: 0,
            maxWidth: '600px',
            fontFamily: 'SF Pro Text, -apple-system, BlinkMacSystemFont, sans-serif'
          }}>
            Adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
          </p>
        </div>
      </div>
    );
  };

  const renderTransition = () => {
    // Variant selector for transition page
    const variantSelector = (
      <div style={{
        position: 'absolute',
        top: '82px',
        left: '50%',
        transform: 'translateX(-50%)',
        backgroundColor: 'white',
        border: '1px solid #e4e7f5',
        borderRadius: '8px',
        padding: '8px',
        display: 'flex',
        gap: '8px',
        zIndex: 1001,
        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)'
      }}>
        {(['display1-false', 'display1-true', 'display2-false', 'display2-true'] as TransitionVariant[]).map((variant) => (
          <button
            key={variant}
            onClick={() => setTransitionVariant(variant)}
            style={{
              backgroundColor: transitionVariant === variant ? '#5a51e7' : 'transparent',
              color: transitionVariant === variant ? 'white' : '#3c3d40',
              border: transitionVariant === variant ? 'none' : '1px solid #e4e7f5',
              padding: '6px 12px',
              borderRadius: '4px',
              cursor: 'pointer',
              fontSize: '11px',
              fontWeight: 500,
              fontFamily: 'SF Pro Text, -apple-system, BlinkMacSystemFont, sans-serif'
            }}
          >
            {variant}
          </button>
        ))}
      </div>
    );

    // Footer component used in all variants
    const footer = (
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '8px',
        alignItems: 'center'
      }}>
        <button
          onClick={() => setCurrentStep('intro')}
          style={{
            backgroundColor: '#5a51e7',
            color: 'white',
            border: 'none',
            padding: '0 24px',
            height: '48px',
            borderRadius: '3px',
            cursor: 'pointer',
            fontSize: '18px',
            fontWeight: 600,
            fontFamily: 'SF Pro Text, -apple-system, BlinkMacSystemFont, sans-serif'
          }}
        >
          Primary Action
        </button>
        <div style={{
          display: 'flex',
          gap: '8px',
          alignItems: 'baseline'
        }}>
          <span style={{
            fontSize: '14px',
            lineHeight: '1.5',
            color: '#5a5b60',
            fontFamily: 'SF Pro Text, -apple-system, BlinkMacSystemFont, sans-serif'
          }}>
            Disclaimer
          </span>
          <button
            onClick={() => {}}
            style={{
              backgroundColor: 'transparent',
              color: '#5a51e7',
              border: 'none',
              padding: '0 13px',
              height: '32px',
              borderRadius: '3px',
              cursor: 'pointer',
              fontSize: '14px',
              fontWeight: 600,
              fontFamily: 'SF Pro Text, -apple-system, BlinkMacSystemFont, sans-serif'
            }}
          >
            Action
          </button>
        </div>
      </div>
    );

    // Display 1, Visual background = False
    if (transitionVariant === 'display1-false') {
      return (
        <div style={{
          backgroundColor: 'white',
          height: '100vh',
          position: 'relative',
          overflow: 'hidden',
          paddingTop: '66px'
        }}>
          {renderHeader()}
          {variantSelector}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100vh',
            padding: '0 24px',
            maxWidth: '720px',
            margin: '0 auto'
          }}>
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '40px',
              alignItems: 'center',
              width: '100%'
            }}>
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '16px',
                alignItems: 'center',
                textAlign: 'center',
                width: '100%'
              }}>
                <h1 style={{
                  fontSize: '48px',
                  fontWeight: 600,
                  margin: 0,
                  color: '#15514d',
                  lineHeight: '1.1',
                  letterSpacing: '-1px',
                  fontFamily: 'SF Pro Text, -apple-system, BlinkMacSystemFont, sans-serif'
                }}>
                  Lorem ipsum dolor sit amet, consectetur
                </h1>
                <p style={{
                  fontSize: '16px',
                  fontWeight: 500,
                  lineHeight: '1.5',
                  color: '#5a5b60',
                  margin: 0,
                  fontFamily: 'SF Pro Text, -apple-system, BlinkMacSystemFont, sans-serif'
                }}>
                  Adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
                </p>
              </div>
              {footer}
            </div>
          </div>
        </div>
      );
    }

    // Display 1, Visual background = True
    if (transitionVariant === 'display1-true') {
      return (
        <div style={{
          backgroundColor: 'white',
          height: '100vh',
          position: 'relative',
          overflow: 'hidden'
        }}>
          {renderHeader()}
          {variantSelector}

          {/* Decorative paper plane background */}
          <div style={{
            position: 'absolute',
            top: '13.57%',
            left: '-16.39%',
            right: '-16.34%',
            bottom: 0,
            pointerEvents: 'none',
            opacity: 0.32
          }}>
            {/* Paper planes would be rendered here with proper positioning */}
            <div style={{
              position: 'absolute',
              bottom: 0,
              left: '-16.39%',
              width: '20%',
              height: '20%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <FontAwesomeIcon icon={faImage} style={{ fontSize: '80px', color: '#d5d2f9', transform: 'rotate(4deg)' }} />
            </div>
          </div>

          <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100vh',
            padding: '0 24px',
            maxWidth: '720px',
            margin: '0 auto',
            position: 'relative',
            zIndex: 1
          }}>
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '40px',
              alignItems: 'center',
              width: '100%'
            }}>
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '16px',
                alignItems: 'center',
                textAlign: 'center',
                width: '100%'
              }}>
                <h1 style={{
                  fontSize: '48px',
                  fontWeight: 600,
                  margin: 0,
                  color: '#15514d',
                  lineHeight: '1.1',
                  letterSpacing: '-1px',
                  fontFamily: 'SF Pro Text, -apple-system, BlinkMacSystemFont, sans-serif'
                }}>
                  Lorem ipsum dolor sit amet, consectetur
                </h1>
                <p style={{
                  fontSize: '16px',
                  fontWeight: 500,
                  lineHeight: '1.5',
                  color: '#5a5b60',
                  margin: 0,
                  fontFamily: 'SF Pro Text, -apple-system, BlinkMacSystemFont, sans-serif'
                }}>
                  Adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
                </p>
              </div>
              {footer}
            </div>
          </div>
        </div>
      );
    }

    // Display 2, Visual background = False
    if (transitionVariant === 'display2-false') {
      return (
        <div style={{
          backgroundColor: 'white',
          height: '100vh',
          position: 'relative',
          overflow: 'hidden',
          paddingTop: '66px'
        }}>
          {renderHeader()}
          {variantSelector}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100vh',
            padding: '0 24px',
            maxWidth: '720px',
            margin: '0 auto'
          }}>
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '40px',
              alignItems: 'center',
              width: '100%'
            }}>
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '24px',
                alignItems: 'start',
                width: '100%'
              }}>
                {/* Icon container */}
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '100%'
                }}>
                  <div style={{
                    width: '120px',
                    height: '120px',
                    backgroundColor: '#d5d2f9',
                    borderRadius: '8px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '8px'
                  }}>
                    <FontAwesomeIcon icon={faImage} style={{ fontSize: '28px', color: '#7169ea' }} />
                  </div>
                </div>

                {/* Text */}
                <div style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '8px',
                  alignItems: 'center',
                  textAlign: 'center',
                  width: '100%'
                }}>
                  <h1 style={{
                    fontSize: '32px',
                    fontWeight: 600,
                    margin: 0,
                    color: '#15514d',
                    lineHeight: '1.1',
                    letterSpacing: '-1px',
                    fontFamily: 'SF Pro Text, -apple-system, BlinkMacSystemFont, sans-serif'
                  }}>
                    Lorem ipsum dolor sit amet, consectetur
                  </h1>
                  <p style={{
                    fontSize: '14px',
                    lineHeight: '1.5',
                    color: '#5a5b60',
                    margin: 0,
                    fontFamily: 'SF Pro Text, -apple-system, BlinkMacSystemFont, sans-serif'
                  }}>
                    Adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
                  </p>
                </div>
              </div>
              {footer}
            </div>
          </div>
        </div>
      );
    }

    // Display 2, Visual background = True (default)
    return (
      <div style={{
        backgroundColor: 'white',
        height: '100vh',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {renderHeader()}
        {variantSelector}

        {/* Decorative paper plane background */}
        <div style={{
          position: 'absolute',
          top: '13.57%',
          left: '-16.39%',
          right: '-16.34%',
          bottom: 0,
          pointerEvents: 'none',
          opacity: 0.32
        }}>
          {/* Simplified paper plane representation */}
          <div style={{
            position: 'absolute',
            bottom: 0,
            left: '-16.39%',
            width: '20%',
            height: '20%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <FontAwesomeIcon icon={faImage} style={{ fontSize: '80px', color: '#d5d2f9', transform: 'rotate(4deg)' }} />
          </div>
        </div>

        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100vh',
          padding: '0 24px',
          maxWidth: '720px',
          margin: '0 auto',
          position: 'relative',
          zIndex: 1
        }}>
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '40px',
            alignItems: 'center',
            width: '100%'
          }}>
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '8px',
              alignItems: 'center',
              textAlign: 'center',
              width: '100%'
            }}>
              <h1 style={{
                fontSize: '32px',
                fontWeight: 600,
                margin: 0,
                color: '#15514d',
                lineHeight: '1.1',
                letterSpacing: '-1px',
                fontFamily: 'SF Pro Text, -apple-system, BlinkMacSystemFont, sans-serif'
              }}>
                Lorem ipsum dolor sit amet, consectetur
              </h1>
              <p style={{
                fontSize: '14px',
                lineHeight: '1.5',
                color: '#5a5b60',
                margin: 0,
                fontFamily: 'SF Pro Text, -apple-system, BlinkMacSystemFont, sans-serif'
              }}>
                Adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
              </p>
            </div>
            {footer}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div style={{ position: 'relative' }}>
      {/* Variant Selector - Floating */}
      <div style={{
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        backgroundColor: 'white',
        border: '1px solid #e4e7f5',
        borderRadius: '8px',
        padding: '12px',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
        zIndex: 1000,
        display: 'flex',
        flexDirection: 'column',
        gap: '8px'
      }}>
        <div style={{
          fontSize: '12px',
          fontWeight: 600,
          color: '#7b7d85',
          textTransform: 'uppercase',
          marginBottom: '4px'
        }}>
          Wizard Pages
        </div>
        {[
          { key: 'intro', label: 'Intro' },
          { key: 'form', label: 'Form' },
          { key: 'table', label: 'Table' },
          { key: 'loading', label: 'Loading' },
          { key: 'transition', label: 'Transition' }
        ].map(({ key, label }) => (
          <button
            key={key}
            onClick={() => setCurrentStep(key as WizardStep)}
            style={{
              backgroundColor: currentStep === key ? '#5a51e7' : 'transparent',
              color: currentStep === key ? 'white' : '#3c3d40',
              border: currentStep === key ? 'none' : '1px solid #e4e7f5',
              padding: '8px 16px',
              borderRadius: '4px',
              cursor: 'pointer',
              fontSize: '13px',
              fontWeight: 500,
              textAlign: 'left',
              transition: 'all 0.2s ease'
            }}
          >
            {label}
          </button>
        ))}
      </div>

      {/* Wizard Pages */}
      {currentStep === 'intro' && renderIntro()}
      {currentStep === 'form' && renderForm()}
      {currentStep === 'table' && renderTable()}
      {currentStep === 'loading' && renderLoading()}
      {currentStep === 'transition' && renderTransition()}
    </div>
  );
}

export default WizardTemplate;
