/**
 * Containers Demo
 *
 * Showcases container components
 */

import { useState } from 'react';
import { Card, CardContainer, Accordion, Modal, Banner, Overlayer, Popover, Drawer } from '../design-system';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faStar,
  faClipboard,
  faFile,
  faPencil,
  faClock,
  faCheck,
  faTriangleExclamation,
  faPaperPlane,
  faSignature,
  faVideo,
  faEdit,
  faTrash,
  faDownload,
} from '@fortawesome/pro-regular-svg-icons';
import './App.css';

function ContainersDemo() {
  const [accordionExpanded, setAccordionExpanded] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [confirmModalOpen, setConfirmModalOpen] = useState(false);
  const [contextModalOpen, setContextModalOpen] = useState(false);
  const [decisionModalOpen, setDecisionModalOpen] = useState(false);
  const [featureGatingModalOpen, setFeatureGatingModalOpen] = useState(false);
  const [showBanner, setShowBanner] = useState(true);
  const [overlayerVisible, setOverlayerVisible] = useState(false);
  const [popoverVisible, setPopoverVisible] = useState(false);
  const [popoverAnchor, setPopoverAnchor] = useState<HTMLButtonElement | null>(null);

  // Drawer states
  const [basicDrawer, setBasicDrawer] = useState(false);
  const [fullDrawer, setFullDrawer] = useState(false);
  const [fullActiveTab, setFullActiveTab] = useState('details');

  return (
    <div className="app">
      <header className="header">
        <h1>Containers</h1>
        <p>Components for organizing and grouping content</p>
      </header>

      <main className="main">
        {/* CardContainer */}
        <section className="section">
          <h2>Card Container</h2>

          <h3 style={{ fontSize: '16px', fontWeight: 500, color: '#3c3d40', marginBottom: '12px' }}>Basic</h3>
          <div className="button-grid">
            <div className="button-row" style={{ flexDirection: 'column', gap: '24px', alignItems: 'flex-start' }}>
              <CardContainer heading="Heading">
                <p style={{ fontSize: '14px', color: '#3c3d40', margin: 0 }}>
                  This is the body content area. You can put any content here.
                </p>
              </CardContainer>
            </div>
          </div>

          <h3 style={{ fontSize: '16px', fontWeight: 500, color: '#3c3d40', marginTop: '24px', marginBottom: '12px' }}>With Subheading</h3>
          <div className="button-grid">
            <div className="button-row" style={{ flexDirection: 'column', gap: '24px', alignItems: 'flex-start' }}>
              <CardContainer
                heading="Heading"
                subheading="Subheading"
              >
                <p style={{ fontSize: '14px', color: '#3c3d40', margin: 0 }}>
                  Card container with subheading text below the main heading.
                </p>
              </CardContainer>
            </div>
          </div>

          <h3 style={{ fontSize: '16px', fontWeight: 500, color: '#3c3d40', marginTop: '24px', marginBottom: '12px' }}>With Action Button</h3>
          <div className="button-grid">
            <div className="button-row" style={{ flexDirection: 'column', gap: '24px', alignItems: 'flex-start' }}>
              <CardContainer
                heading="Heading"
                action={{
                  label: 'Action',
                  icon: <FontAwesomeIcon icon={faPencil} />,
                  onClick: () => console.log('Action clicked')
                }}
              >
                <p style={{ fontSize: '14px', color: '#3c3d40', margin: 0 }}>
                  Card container with an action button in the header.
                </p>
              </CardContainer>
            </div>
          </div>
        </section>

        {/* Accordion */}
        <section className="section">
          <h2>Accordion</h2>

          <h3 style={{ fontSize: '16px', fontWeight: 500, color: '#3c3d40', marginBottom: '12px' }}>Small Size - Basic</h3>
          <div className="button-grid">
            <div className="button-row" style={{ flexDirection: 'column', gap: '16px', alignItems: 'flex-start', maxWidth: '600px' }}>
              <Accordion heading="Heading" size="small">
                <p style={{ fontSize: '14px', color: '#3c3d40', margin: 0 }}>
                  This is the accordion body content. It can contain any content and will expand/collapse when clicking the header.
                </p>
              </Accordion>
            </div>
          </div>

          <h3 style={{ fontSize: '16px', fontWeight: 500, color: '#3c3d40', marginTop: '24px', marginBottom: '12px' }}>Small Size - With Stepper and Badge</h3>
          <div className="button-grid">
            <div className="button-row" style={{ flexDirection: 'column', gap: '16px', alignItems: 'flex-start', maxWidth: '600px' }}>
              <Accordion
                heading="Heading"
                subheading="Subheading"
                size="small"
                stepper="1"
                badge={{ text: 'Warning', variant: 'warning' }}
              >
                <p style={{ fontSize: '14px', color: '#3c3d40', margin: 0 }}>
                  Accordion with stepper number and warning badge.
                </p>
              </Accordion>
            </div>
          </div>

          <h3 style={{ fontSize: '16px', fontWeight: 500, color: '#3c3d40', marginTop: '24px', marginBottom: '12px' }}>Large Size</h3>
          <div className="button-grid">
            <div className="button-row" style={{ flexDirection: 'column', gap: '16px', alignItems: 'flex-start', maxWidth: '600px' }}>
              <Accordion heading="Heading" size="large">
                <p style={{ fontSize: '14px', color: '#3c3d40', margin: 0 }}>
                  Large accordion with bigger text and icon.
                </p>
              </Accordion>
            </div>
          </div>

          <h3 style={{ fontSize: '16px', fontWeight: 500, color: '#3c3d40', marginTop: '24px', marginBottom: '12px' }}>Large Size - With Stepper</h3>
          <div className="button-grid">
            <div className="button-row" style={{ flexDirection: 'column', gap: '16px', alignItems: 'flex-start', maxWidth: '600px' }}>
              <Accordion
                heading="Heading"
                subheading="Subheading"
                size="large"
                stepper="1"
              >
                <p style={{ fontSize: '14px', color: '#3c3d40', margin: 0 }}>
                  Large accordion with stepper and subheading.
                </p>
              </Accordion>
            </div>
          </div>

          <h3 style={{ fontSize: '16px', fontWeight: 500, color: '#3c3d40', marginTop: '24px', marginBottom: '12px' }}>Controlled State</h3>
          <div className="button-grid">
            <div className="button-row" style={{ flexDirection: 'column', gap: '16px', alignItems: 'flex-start', maxWidth: '600px' }}>
              <Accordion
                heading="Controlled Accordion"
                subheading="Click to toggle"
                size="small"
                expanded={accordionExpanded}
                onToggle={setAccordionExpanded}
              >
                <p style={{ fontSize: '14px', color: '#3c3d40', margin: 0 }}>
                  This accordion's state is controlled by the parent component. Current state: {accordionExpanded ? 'Expanded' : 'Collapsed'}
                </p>
              </Accordion>
            </div>
          </div>

          <h3 style={{ fontSize: '16px', fontWeight: 500, color: '#3c3d40', marginTop: '24px', marginBottom: '12px' }}>Disabled</h3>
          <div className="button-grid">
            <div className="button-row" style={{ flexDirection: 'column', gap: '16px', alignItems: 'flex-start', maxWidth: '600px' }}>
              <Accordion
                heading="Disabled Accordion"
                subheading="Cannot be toggled"
                size="small"
                disabled
              >
                <p style={{ fontSize: '14px', color: '#3c3d40', margin: 0 }}>
                  This content is not accessible.
                </p>
              </Accordion>
            </div>
          </div>
        </section>

        {/* Banner */}
        <section className="section">
          <h2>Banner</h2>

          <h3 style={{ fontSize: '16px', fontWeight: 500, color: '#3c3d40', marginBottom: '12px' }}>Basic Banner</h3>
          <div className="button-grid">
            <div className="button-row" style={{ flexDirection: 'column', gap: '16px', width: '100%' }}>
              {showBanner && (
                <Banner
                  title="Welcome to OnBrand"
                  primaryAction={{
                    label: 'Get started',
                    onClick: () => console.log('Get started clicked')
                  }}
                  secondaryAction={{
                    label: 'Maybe later',
                    onClick: () => setShowBanner(false)
                  }}
                  onClose={() => setShowBanner(false)}
                >
                  <p>Discover our new features and get started with your design system journey. Max 2 lines of content recommended.</p>
                </Banner>
              )}
              {!showBanner && (
                <button
                  onClick={() => setShowBanner(true)}
                  style={{
                    padding: '8px 16px',
                    background: '#5a51e7',
                    color: 'white',
                    border: 'none',
                    borderRadius: '3px',
                    cursor: 'pointer',
                    fontWeight: 600
                  }}
                >
                  Show Banner Again
                </button>
              )}
            </div>
          </div>

          <h3 style={{ fontSize: '16px', fontWeight: 500, color: '#3c3d40', marginTop: '24px', marginBottom: '12px' }}>With Image</h3>
          <div className="button-grid">
            <div className="button-row" style={{ flexDirection: 'column', gap: '16px', width: '100%' }}>
              <Banner
                title="Reclaim your time"
                primaryAction={{
                  label: 'Primary',
                  onClick: () => console.log('Primary clicked')
                }}
                secondaryAction={{
                  label: 'Maybe later',
                  onClick: () => console.log('Maybe later clicked')
                }}
                onClose={() => console.log('Closed')}
                image={
                  <div style={{
                    fontSize: '64px',
                    textAlign: 'center'
                  }}>
                    <FontAwesomeIcon icon={faClock} />
                  </div>
                }
              >
                Content goes here....
                <br />
                Max 2 lines
              </Banner>
            </div>
          </div>
        </section>

        {/* Modal */}
        <section className="section">
          <h2>Modal</h2>

          <h3 style={{ fontSize: '16px', fontWeight: 500, color: '#3c3d40', marginBottom: '12px' }}>Basic Modal</h3>
          <div className="button-grid">
            <div className="button-row" style={{ gap: '12px' }}>
              <button
                onClick={() => setModalOpen(true)}
                style={{
                  padding: '8px 16px',
                  background: '#5a51e7',
                  color: 'white',
                  border: 'none',
                  borderRadius: '3px',
                  cursor: 'pointer',
                  fontWeight: 600
                }}
              >
                Open Modal
              </button>
            </div>
          </div>

          <h3 style={{ fontSize: '16px', fontWeight: 500, color: '#3c3d40', marginTop: '24px', marginBottom: '12px' }}>Confirmation Modal</h3>
          <div className="button-grid">
            <div className="button-row" style={{ gap: '12px' }}>
              <button
                onClick={() => setConfirmModalOpen(true)}
                style={{
                  padding: '8px 16px',
                  background: '#5a51e7',
                  color: 'white',
                  border: 'none',
                  borderRadius: '3px',
                  cursor: 'pointer',
                  fontWeight: 600
                }}
              >
                Open Confirmation Modal
              </button>
            </div>
          </div>

          <h3 style={{ fontSize: '16px', fontWeight: 500, color: '#3c3d40', marginTop: '24px', marginBottom: '12px' }}>Context Modal</h3>
          <div className="button-grid">
            <div className="button-row" style={{ gap: '12px' }}>
              <button
                onClick={() => setContextModalOpen(true)}
                style={{
                  padding: '8px 16px',
                  background: '#5a51e7',
                  color: 'white',
                  border: 'none',
                  borderRadius: '3px',
                  cursor: 'pointer',
                  fontWeight: 600
                }}
              >
                Open Context Modal
              </button>
            </div>
          </div>

          <h3 style={{ fontSize: '16px', fontWeight: 500, color: '#3c3d40', marginTop: '24px', marginBottom: '12px' }}>Decision Modal</h3>
          <div className="button-grid">
            <div className="button-row" style={{ gap: '12px' }}>
              <button
                onClick={() => setDecisionModalOpen(true)}
                style={{
                  padding: '8px 16px',
                  background: '#5a51e7',
                  color: 'white',
                  border: 'none',
                  borderRadius: '3px',
                  cursor: 'pointer',
                  fontWeight: 600
                }}
              >
                Open Decision Modal
              </button>
            </div>
          </div>

          <h3 style={{ fontSize: '16px', fontWeight: 500, color: '#3c3d40', marginTop: '24px', marginBottom: '12px' }}>Feature-gating Modal</h3>
          <div className="button-grid">
            <div className="button-row" style={{ gap: '12px' }}>
              <button
                onClick={() => setFeatureGatingModalOpen(true)}
                style={{
                  padding: '8px 16px',
                  background: '#5a51e7',
                  color: 'white',
                  border: 'none',
                  borderRadius: '3px',
                  cursor: 'pointer',
                  fontWeight: 600
                }}
              >
                Open Feature-gating Modal
              </button>
            </div>
          </div>

          {/* Modal instances */}
          <Modal
            isOpen={modalOpen}
            onClose={() => setModalOpen(false)}
            title="Create new item"
            size="medium"
            primaryAction={{
              label: 'Create',
              icon: <FontAwesomeIcon icon={faCheck} />,
              onClick: () => {
                console.log('Created!');
                setModalOpen(false);
              },
              hierarchy: 'primary'
            }}
            secondaryAction={{
              label: 'Cancel',
              onClick: () => setModalOpen(false),
              hierarchy: 'tertiary'
            }}
          >
            <p>Enter the details for your new item. This is where form inputs or other content would go.</p>
          </Modal>

          <Modal
            isOpen={confirmModalOpen}
            onClose={() => setConfirmModalOpen(false)}
            title="Verb noun?"
            size="xsmall"
            variant="confirmation"
            headerIcon={<FontAwesomeIcon icon={faTriangleExclamation} style={{ color: '#d97706' }} />}
            primaryAction={{
              label: 'Verb',
              icon: <FontAwesomeIcon icon={faCheck} />,
              onClick: () => {
                console.log('Confirmed!');
                setConfirmModalOpen(false);
              },
              hierarchy: 'primary'
            }}
            secondaryAction={{
              label: 'Cancel',
              onClick: () => setConfirmModalOpen(false),
              hierarchy: 'tertiary'
            }}
          >
            <p>Explanation... this can't be undone.</p>
          </Modal>

          <Modal
            isOpen={contextModalOpen}
            onClose={() => setContextModalOpen(false)}
            title="Verb noun"
            caption="Description of what to do below"
            size="xsmall"
            variant="context"
            primaryAction={{
              label: 'Verb',
              icon: <FontAwesomeIcon icon={faCheck} />,
              onClick: () => {
                console.log('Context action completed!');
                setContextModalOpen(false);
              },
              hierarchy: 'primary'
            }}
            secondaryAction={{
              label: 'Cancel',
              onClick: () => setContextModalOpen(false),
              hierarchy: 'tertiary'
            }}
          >
            <p>Content goes here</p>
          </Modal>

          <Modal
            isOpen={decisionModalOpen}
            onClose={() => setDecisionModalOpen(false)}
            title="Choose an option"
            size="medium"
            variant="decision"
            primaryAction={{
              label: 'Option A',
              onClick: () => {
                console.log('Option A selected');
                setDecisionModalOpen(false);
              },
              hierarchy: 'primary'
            }}
            secondaryAction={{
              label: 'Option B',
              onClick: () => {
                console.log('Option B selected');
                setDecisionModalOpen(false);
              },
              hierarchy: 'secondary'
            }}
            additionalActions={[
              {
                label: 'Cancel',
                onClick: () => setDecisionModalOpen(false),
                hierarchy: 'tertiary'
              }
            ]}
          >
            <p>Please select one of the options below to continue.</p>
          </Modal>

          <Modal
            isOpen={featureGatingModalOpen}
            onClose={() => setFeatureGatingModalOpen(false)}
            title="Upgrade Required"
            size="large"
            variant="feature-gating"
            illustration={
              <div style={{
                width: '100%',
                height: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '48px',
                color: '#5a51e7'
              }}>
                <FontAwesomeIcon icon={faStar} />
              </div>
            }
            primaryAction={{
              label: 'Upgrade',
              onClick: () => {
                console.log('Upgrade clicked');
                setFeatureGatingModalOpen(false);
              },
              hierarchy: 'primary'
            }}
            secondaryAction={{
              label: 'Skip for now',
              onClick: () => setFeatureGatingModalOpen(false),
              hierarchy: 'tertiary'
            }}
          >
            <h2>Upgrade your plan to unlock more value</h2>
            <p>This feature is only available on a higher tier plan. {'{{Description of feature that user has attempted to access goes here.}}'}</p>
            <div>
              <p style={{ fontWeight: 700, marginBottom: '8px' }}>Upgrade and get more features like:</p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <div style={{ display: 'flex', gap: '8px', alignItems: 'flex-start' }}>
                  <FontAwesomeIcon icon={faPaperPlane} style={{ marginTop: '2px', fontSize: '12px' }} />
                  <p><strong>Branded emails</strong> that look professional and build trust.</p>
                </div>
                <div style={{ display: 'flex', gap: '8px', alignItems: 'flex-start' }}>
                  <FontAwesomeIcon icon={faClock} style={{ marginTop: '2px', fontSize: '12px' }} />
                  <p><strong>Bulk proposal renewals</strong> that save you time.</p>
                </div>
                <div style={{ display: 'flex', gap: '8px', alignItems: 'flex-start' }}>
                  <FontAwesomeIcon icon={faSignature} style={{ marginTop: '2px', fontSize: '12px' }} />
                  <p><strong>Multiple e-signatures</strong> making it easy to stay compliant.</p>
                </div>
                <div style={{ display: 'flex', gap: '8px', alignItems: 'flex-start' }}>
                  <FontAwesomeIcon icon={faVideo} style={{ marginTop: '2px', fontSize: '12px' }} />
                  <p><strong>Videos in proposals</strong> for a personalized touch.</p>
                </div>
              </div>
            </div>
          </Modal>
        </section>

        {/* Overlayer */}
        <section style={{ marginBottom: '40px' }}>
          <h2 style={{ fontSize: '24px', fontWeight: 600, color: '#3c3d40', marginBottom: '16px' }}>Overlayer</h2>
          <p style={{ fontSize: '14px', color: '#5a5b60', marginBottom: '16px' }}>
            A semi-transparent overlay typically used with modals, drawers, and popovers.
          </p>
          <button
            onClick={() => setOverlayerVisible(true)}
            style={{
              padding: '10px 16px',
              backgroundColor: '#5a51e7',
              color: 'white',
              border: 'none',
              borderRadius: '3px',
              cursor: 'pointer',
              fontSize: '14px',
              fontWeight: 600,
            }}
          >
            Show Overlayer
          </button>
          <Overlayer visible={overlayerVisible} onClick={() => setOverlayerVisible(false)} />
        </section>

        {/* Popover */}
        <section style={{ marginBottom: '40px' }}>
          <h2 style={{ fontSize: '24px', fontWeight: 600, color: '#3c3d40', marginBottom: '16px' }}>Popover</h2>
          <p style={{ fontSize: '14px', color: '#5a5b60', marginBottom: '16px' }}>
            A floating container that appears near a trigger element.
          </p>

          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
            <button
              ref={(el) => !popoverAnchor && el && setPopoverAnchor(el)}
              onClick={() => setPopoverVisible(!popoverVisible)}
              style={{
                padding: '10px 16px',
                backgroundColor: '#5a51e7',
                color: 'white',
                border: 'none',
                borderRadius: '3px',
                cursor: 'pointer',
                fontSize: '14px',
                fontWeight: 600,
              }}
            >
              Toggle Popover
            </button>
          </div>

          <Popover
            visible={popoverVisible}
            onClose={() => setPopoverVisible(false)}
            anchorEl={popoverAnchor}
            size="medium"
            placement="bottom"
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <h3 style={{ fontSize: '16px', fontWeight: 500, color: '#1e1e20', margin: 0 }}>
                Popover Title
              </h3>
              <p style={{ fontSize: '14px', color: '#5a5b60', margin: 0 }}>
                This is a popover with some content inside. It can contain any React elements.
              </p>
              <div style={{ display: 'flex', gap: '8px', justifyContent: 'flex-end' }}>
                <button
                  onClick={() => setPopoverVisible(false)}
                  style={{
                    padding: '6px 12px',
                    backgroundColor: '#e4e7f5',
                    color: '#3c3d40',
                    border: 'none',
                    borderRadius: '3px',
                    cursor: 'pointer',
                    fontSize: '13px',
                    fontWeight: 500,
                  }}
                >
                  Cancel
                </button>
                <button
                  onClick={() => {
                    alert('Action confirmed!');
                    setPopoverVisible(false);
                  }}
                  style={{
                    padding: '6px 12px',
                    backgroundColor: '#5a51e7',
                    color: 'white',
                    border: 'none',
                    borderRadius: '3px',
                    cursor: 'pointer',
                    fontSize: '13px',
                    fontWeight: 500,
                  }}
                >
                  Confirm
                </button>
              </div>
            </div>
          </Popover>
        </section>

        {/* Drawer */}
        <section className="section">
          <h2>Drawer</h2>
          <p style={{ marginBottom: '16px', color: '#7b7d85', fontSize: '14px' }}>
            Slide-in panel component for displaying detailed content
          </p>

          <h3 style={{ fontSize: '16px', fontWeight: 500, color: '#3c3d40', marginBottom: '12px' }}>Basic Drawer</h3>
          <button
            onClick={() => setBasicDrawer(true)}
            style={{
              padding: '8px 16px',
              backgroundColor: '#5a51e7',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
              fontSize: '14px',
              fontWeight: 600,
            }}
          >
            Open Basic Drawer
          </button>

          <Drawer
            isOpen={basicDrawer}
            onClose={() => setBasicDrawer(false)}
            title="Drawer title"
            subtitle="Drawer subtitle"
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <p style={{ fontSize: '14px', color: '#3c3d40' }}>
                This is a basic drawer with just a title, subtitle, and close button. The drawer slides in from the right
                side of the screen and includes an overlay that can be clicked to close.
              </p>
              <p style={{ fontSize: '14px', color: '#3c3d40' }}>
                You can also press the Escape key to close the drawer.
              </p>
            </div>
          </Drawer>

          <h3 style={{ fontSize: '16px', fontWeight: 500, color: '#3c3d40', marginTop: '24px', marginBottom: '12px' }}>Full Features</h3>
          <button
            onClick={() => setFullDrawer(true)}
            style={{
              padding: '8px 16px',
              backgroundColor: '#5a51e7',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
              fontSize: '14px',
              fontWeight: 600,
            }}
          >
            Open Drawer with All Features
          </button>

          <Drawer
            isOpen={fullDrawer}
            onClose={() => setFullDrawer(false)}
            title="Drawer title"
            subtitle="Drawer subtitle"
            badge="NEW"
            primaryAction={{
              label: 'Primary',
              icon: faCheck,
              onClick: () => alert('Primary action clicked!'),
            }}
            moreActions={[
              {
                label: 'Edit',
                icon: faEdit,
                onClick: () => alert('Edit clicked!'),
              },
              {
                label: 'Download',
                icon: faDownload,
                onClick: () => alert('Download clicked!'),
              },
              {
                label: 'Delete',
                icon: faTrash,
                onClick: () => alert('Delete clicked!'),
              },
            ]}
            tabs={[
              { id: 'overview', label: 'Overview' },
              { id: 'details', label: 'Details' },
              { id: 'settings', label: 'Settings' }
            ]}
            activeTab={fullActiveTab}
            onTabChange={setFullActiveTab}
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <h3 style={{ fontSize: '16px', fontWeight: 500, color: '#1e1e20', margin: 0 }}>
                {fullActiveTab === 'overview' && 'Overview'}
                {fullActiveTab === 'details' && 'Details'}
                {fullActiveTab === 'settings' && 'Settings'}
              </h3>
              <p style={{ fontSize: '14px', color: '#3c3d40' }}>
                This drawer includes all features: subtitle, badge, primary action button,
                more actions dropdown, and tab navigation.
              </p>
              {fullActiveTab === 'overview' && (
                <p style={{ fontSize: '14px', color: '#3c3d40' }}>
                  The Overview tab shows a summary of the content.
                </p>
              )}
              {fullActiveTab === 'details' && (
                <p style={{ fontSize: '14px', color: '#3c3d40' }}>
                  The Details tab shows detailed information.
                </p>
              )}
              {fullActiveTab === 'settings' && (
                <p style={{ fontSize: '14px', color: '#3c3d40' }}>
                  The Settings tab shows configuration options.
                </p>
              )}
            </div>
          </Drawer>
        </section>
      </main>
    </div>
  );
}

export default ContainersDemo;
