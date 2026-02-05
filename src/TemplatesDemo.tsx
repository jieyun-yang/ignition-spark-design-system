/**
 * Templates Demo
 *
 * Showcases complete page templates using design system components
 */

import { useState } from 'react';
import EmailTemplate from '../design-system/templates/EmailTemplate';
import WizardTemplate from '../design-system/templates/WizardTemplate';
import ProposalsTemplate from '../design-system/templates/ProposalsTemplate';
import ignitionLogoText from './assets/ignition-logo-text.svg';
import ignitionStar from './assets/ignition-star.svg';
import './App.css';

type TemplateView = 'overview' | 'email' | 'wizard' | 'proposals';

function TemplatesDemo() {
  const [currentTemplate, setCurrentTemplate] = useState<TemplateView>('overview');

  if (currentTemplate === 'email') {
    return <EmailTemplate />;
  }

  if (currentTemplate === 'wizard') {
    return <WizardTemplate />;
  }

  if (currentTemplate === 'proposals') {
    return <ProposalsTemplate />;
  }

  return (
    <div className="app">
      <header className="header">
        <h1>Page Templates</h1>
        <p>Complete page examples using design system components</p>
      </header>

      <main className="main">
        {/* Email Template */}
        <section className="section">
          <h2>Email Template</h2>
          <p style={{ marginBottom: '16px', color: '#7b7d85', fontSize: '14px' }}>
            Transactional email template with header, footer, buttons, and content sections.
            Built with inline styles for maximum email client compatibility.
          </p>
          <div style={{
            border: '1px solid #e4e7f5',
            borderRadius: '8px',
            overflow: 'hidden',
            marginBottom: '16px',
            backgroundColor: '#f0f2fa',
            padding: '40px 20px',
            cursor: 'pointer'
          }}
          onClick={() => setCurrentTemplate('email')}
          >
            {/* Email Preview - Scaled down */}
            <div style={{
              maxWidth: '600px',
              margin: '0 auto',
              backgroundColor: 'white',
              borderRadius: '8px',
              overflow: 'hidden',
              boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
              fontSize: '12px',
              transform: 'scale(0.85)',
              transformOrigin: 'top center'
            }}>
              {/* Header */}
              <div style={{
                padding: '20px 30px',
                borderBottom: '2px solid #e4e7f5',
                display: 'flex',
                alignItems: 'center'
              }}>
                <div style={{
                  position: 'relative',
                  height: '35px',
                  width: '106px',
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
              </div>

              {/* Body */}
              <div style={{ padding: '20px 30px 0 30px' }}>
                <div style={{ paddingBottom: '15px', borderBottom: '1px solid #e4e7f5' }}>
                  <div style={{
                    fontSize: '12px',
                    color: '#3c3d40',
                    marginBottom: '12px'
                  }}>
                    Content
                  </div>
                  <div style={{
                    display: 'inline-block',
                    backgroundColor: '#5a51e7',
                    color: 'white',
                    padding: '8px 14px',
                    borderRadius: '12px',
                    fontSize: '12px',
                    fontWeight: 500
                  }}>
                    Pay invoice
                  </div>
                </div>

                {/* Decorative Graphics */}
                <div style={{
                  height: '70px',
                  position: 'relative',
                  overflow: 'hidden'
                }}>
                  <div style={{
                    position: 'absolute',
                    left: '-60px',
                    bottom: '-100px',
                    width: '200px',
                    height: '200px',
                    borderRadius: '50%',
                    background: 'linear-gradient(135deg, #4D9F96 0%, #5a9f96 100%)',
                    opacity: 0.4
                  }} />
                  <div style={{
                    position: 'absolute',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    bottom: '-100px',
                    width: '200px',
                    height: '200px',
                    borderRadius: '50%',
                    background: 'linear-gradient(135deg, #6dd8df 0%, #5ac8cf 100%)',
                    opacity: 0.3
                  }} />
                  <div style={{
                    position: 'absolute',
                    right: '-60px',
                    bottom: '-100px',
                    width: '200px',
                    height: '200px',
                    borderRadius: '50%',
                    background: 'linear-gradient(135deg, #4D9F96 0%, #5a9f96 100%)',
                    opacity: 0.4
                  }} />
                </div>
              </div>
            </div>

            {/* Unsubscribe and Footer Preview */}
            <div style={{
              maxWidth: '600px',
              margin: '20px auto 0',
              backgroundColor: 'white',
              padding: '20px 30px',
              borderRadius: '8px',
              transform: 'scale(0.85)',
              transformOrigin: 'top center'
            }}>
              <div style={{
                position: 'relative',
                height: '35px',
                width: '106px',
                display: 'flex',
                alignItems: 'center',
                marginBottom: '15px'
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
              <div style={{
                fontSize: '10px',
                color: '#15514d',
                marginBottom: '15px',
                lineHeight: 1.4
              }}>
                Trusted by 7,000+ professional services businesses globally to help them engage clients, invoice and collect payments.
              </div>
              <div style={{
                fontSize: '14px',
                color: '#f4a52a',
                marginBottom: '6px'
              }}>
                ★ ★ ★ ★ ★
              </div>
              <div style={{
                fontSize: '10px',
                color: '#15514d'
              }}>
                Average based on thousands of reviews
              </div>
            </div>
          </div>
          <button
            onClick={() => setCurrentTemplate('email')}
            style={{
              padding: '8px 16px',
              backgroundColor: '#5a51e7',
              color: 'white',
              border: 'none',
              borderRadius: '3px',
              cursor: 'pointer',
              fontSize: '14px',
              fontWeight: 500
            }}
          >
            View Email Template
          </button>
        </section>

        {/* Proposals Template */}
        <section className="section">
          <h2>Proposals Data Table Template</h2>
          <p style={{ marginBottom: '16px', color: '#7b7d85', fontSize: '14px' }}>
            Complete data management interface with table, filters, search, and bulk actions.
            Perfect for listing pages, dashboards, and data-heavy interfaces.
          </p>
          <div style={{
            border: '1px solid #e4e7f5',
            borderRadius: '8px',
            overflow: 'hidden',
            marginBottom: '16px',
            backgroundColor: '#f8f8fc',
            padding: '40px 20px',
            cursor: 'pointer'
          }}
          onClick={() => setCurrentTemplate('proposals')}
          >
            {/* Proposals Preview - Simplified table view */}
            <div style={{
              maxWidth: '900px',
              margin: '0 auto',
              backgroundColor: 'white',
              borderRadius: '8px',
              overflow: 'hidden',
              boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
              fontSize: '11px',
              transform: 'scale(0.85)',
              transformOrigin: 'top center'
            }}>
              {/* Header */}
              <div style={{
                padding: '20px 30px',
                borderBottom: '1px solid #e4e7f5',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
              }}>
                <h3 style={{ margin: 0, fontSize: '18px', fontWeight: 600 }}>Proposals</h3>
                <div style={{ display: 'flex', gap: '8px' }}>
                  <div style={{
                    padding: '6px 12px',
                    border: '1px solid #e4e7f5',
                    borderRadius: '3px',
                    fontSize: '11px'
                  }}>Export</div>
                  <div style={{
                    padding: '6px 12px',
                    backgroundColor: '#5a51e7',
                    color: 'white',
                    borderRadius: '3px',
                    fontSize: '11px',
                    fontWeight: 500
                  }}>New proposal</div>
                </div>
              </div>

              {/* Filters */}
              <div style={{
                padding: '16px 30px',
                borderBottom: '1px solid #e4e7f5'
              }}>
                <div style={{ display: 'flex', gap: '12px', marginBottom: '12px' }}>
                  {['All (224)', 'Draft (139)', 'Awaiting (31)', 'Lost (17)'].map((tab, i) => (
                    <div key={tab} style={{
                      padding: '4px 8px',
                      color: i === 0 ? '#5a51e7' : '#7b7d85',
                      fontSize: '11px',
                      fontWeight: i === 0 ? 600 : 400,
                      borderBottom: i === 0 ? '2px solid #5a51e7' : 'none'
                    }}>
                      {tab}
                    </div>
                  ))}
                </div>
              </div>

              {/* Table */}
              <div style={{ padding: '20px 30px' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                  <thead>
                    <tr style={{ borderBottom: '1px solid #e4e7f5' }}>
                      <th style={{ textAlign: 'left', padding: '8px 0', fontSize: '10px', color: '#7b7d85', fontWeight: 600 }}>CLIENT</th>
                      <th style={{ textAlign: 'left', padding: '8px 0', fontSize: '10px', color: '#7b7d85', fontWeight: 600 }}>PROPOSAL</th>
                      <th style={{ textAlign: 'left', padding: '8px 0', fontSize: '10px', color: '#7b7d85', fontWeight: 600 }}>STATUS</th>
                      <th style={{ textAlign: 'right', padding: '8px 0', fontSize: '10px', color: '#7b7d85', fontWeight: 600 }}>VALUE</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { client: 'Acme Corp', proposal: 'Q4 Audit', status: 'Accepted', statusColor: '#d4f4dd', value: '$45,000' },
                      { client: 'Tech Ltd', proposal: 'Tax Planning', status: 'Draft', statusColor: '#e4e7f5', value: '$12,500' },
                      { client: 'Green Co', proposal: 'Bookkeeping', status: 'Awaiting', statusColor: '#fff4e5', value: '$24,000' }
                    ].map((row, i) => (
                      <tr key={i} style={{ borderBottom: '1px solid #f8f8fc' }}>
                        <td style={{ padding: '10px 0', fontSize: '11px', color: '#3c3d40' }}>{row.client}</td>
                        <td style={{ padding: '10px 0', fontSize: '11px', color: '#3c3d40' }}>{row.proposal}</td>
                        <td style={{ padding: '10px 0' }}>
                          <span style={{
                            padding: '2px 8px',
                            backgroundColor: row.statusColor,
                            borderRadius: '3px',
                            fontSize: '10px',
                            color: '#3c3d40'
                          }}>
                            {row.status}
                          </span>
                        </td>
                        <td style={{ padding: '10px 0', fontSize: '11px', color: '#3c3d40', textAlign: 'right', fontWeight: 600 }}>{row.value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <button
            onClick={() => setCurrentTemplate('proposals')}
            style={{
              padding: '8px 16px',
              backgroundColor: '#5a51e7',
              color: 'white',
              border: 'none',
              borderRadius: '3px',
              cursor: 'pointer',
              fontSize: '14px',
              fontWeight: 500
            }}
          >
            View Proposals Template
          </button>
        </section>

        {/* Wizard Template */}
        <section className="section">
          <h2>Guided Wizard Template</h2>
          <p style={{ marginBottom: '16px', color: '#7b7d85', fontSize: '14px' }}>
            Multi-step onboarding wizard with progress tracking, form validation, and transitions.
            Perfect for user onboarding, setup flows, and complex form processes.
          </p>
          <div style={{
            border: '1px solid #e4e7f5',
            borderRadius: '8px',
            overflow: 'hidden',
            marginBottom: '16px',
            backgroundColor: '#f8f8fc',
            padding: '40px 20px',
            cursor: 'pointer'
          }}
          onClick={() => setCurrentTemplate('wizard')}
          >
            {/* Wizard Preview - Scaled down */}
            <div style={{
              maxWidth: '900px',
              margin: '0 auto',
              backgroundColor: 'white',
              borderRadius: '8px',
              overflow: 'hidden',
              boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
              fontSize: '12px',
              transform: 'scale(0.85)',
              transformOrigin: 'top center'
            }}>
              {/* Progress bar */}
              <div style={{
                padding: '24px 40px',
                borderBottom: '1px solid #e4e7f5'
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '12px' }}>
                  {['Intro', 'Form', 'Table', 'Loading', 'Success'].map((step, i) => (
                    <div key={step} style={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      flex: 1
                    }}>
                      <div style={{
                        width: '32px',
                        height: '32px',
                        borderRadius: '50%',
                        backgroundColor: i === 0 ? '#5a51e7' : '#e4e7f5',
                        color: i === 0 ? 'white' : '#7b7d85',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontWeight: 600,
                        fontSize: '12px',
                        marginBottom: '8px'
                      }}>
                        {i + 1}
                      </div>
                      <div style={{
                        fontSize: '11px',
                        color: i === 0 ? '#5a51e7' : '#7b7d85',
                        fontWeight: i === 0 ? 600 : 400
                      }}>
                        {step}
                      </div>
                    </div>
                  ))}
                </div>
                <div style={{
                  height: '4px',
                  backgroundColor: '#e4e7f5',
                  borderRadius: '2px',
                  overflow: 'hidden'
                }}>
                  <div style={{
                    height: '100%',
                    width: '20%',
                    backgroundColor: '#5a51e7',
                    transition: 'width 0.3s'
                  }} />
                </div>
              </div>

              {/* Content */}
              <div style={{ padding: '40px' }}>
                <div style={{ display: 'flex', gap: '40px', alignItems: 'center' }}>
                  <div style={{ flex: 1 }}>
                    <h1 style={{
                      fontSize: '28px',
                      fontWeight: 600,
                      marginBottom: '12px',
                      color: '#1e1e20'
                    }}>
                      Welcome to Onboarding
                    </h1>
                    <p style={{
                      fontSize: '14px',
                      color: '#7b7d85',
                      lineHeight: 1.6,
                      marginBottom: '24px'
                    }}>
                      Let's get you set up with your account. This will only take a few minutes.
                    </p>
                    <div style={{
                      display: 'inline-block',
                      backgroundColor: '#5a51e7',
                      color: 'white',
                      padding: '10px 24px',
                      borderRadius: '3px',
                      fontSize: '13px',
                      fontWeight: 500
                    }}>
                      Get Started →
                    </div>
                  </div>
                  <div style={{
                    flex: 1,
                    backgroundColor: '#f8f8fc',
                    height: '200px',
                    borderRadius: '8px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#a0a1a6',
                    fontSize: '48px'
                  }}>
                    🚀
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button
            onClick={() => setCurrentTemplate('wizard')}
            style={{
              padding: '8px 16px',
              backgroundColor: '#5a51e7',
              color: 'white',
              border: 'none',
              borderRadius: '3px',
              cursor: 'pointer',
              fontSize: '14px',
              fontWeight: 500
            }}
          >
            View Wizard Template
          </button>
        </section>
      </main>
    </div>
  );
}

export default TemplatesDemo;
