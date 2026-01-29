/**
 * Drawer Demo
 *
 * Showcases Drawer component with all variants
 */

import { useState } from 'react';
import { Drawer } from '../design-system';
import './App.css';

function DrawerDemo() {
  // Basic drawer
  const [basicDrawer, setBasicDrawer] = useState(false);

  // Drawer with subtitle
  const [subtitleDrawer, setSubtitleDrawer] = useState(false);

  // Drawer with badge
  const [badgeDrawer, setBadgeDrawer] = useState(false);

  // Drawer with tabs
  const [tabsDrawer, setTabsDrawer] = useState(false);
  const [activeTab, setActiveTab] = useState('tab1');

  // Drawer with all features
  const [fullDrawer, setFullDrawer] = useState(false);
  const [fullActiveTab, setFullActiveTab] = useState('details');

  // Drawer with custom width
  const [wideDrawer, setWideDrawer] = useState(false);

  // Drawer with long content
  const [scrollDrawer, setScrollDrawer] = useState(false);

  return (
    <div className="app">
      <header className="header">
        <h1>Drawer</h1>
        <p>Slide-in panel component for displaying detailed content</p>
      </header>

      <main className="main">
        {/* Basic Drawer */}
        <section className="section">
          <h2>Basic Drawer</h2>
          <p style={{ marginBottom: '16px', color: '#7b7d85', fontSize: '14px' }}>
            Simple drawer with title and close button
          </p>
          <button
            onClick={() => setBasicDrawer(true)}
            style={{
              padding: '8px 16px',
              backgroundColor: '#5a51e7',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
            }}
          >
            Open Basic Drawer
          </button>

          <Drawer
            isOpen={basicDrawer}
            onClose={() => setBasicDrawer(false)}
            title="Drawer title"
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <p style={{ fontSize: '14px', color: '#3c3d40' }}>
                This is a basic drawer with just a title and close button. The drawer slides in from the right
                side of the screen and includes an overlay that can be clicked to close.
              </p>
              <p style={{ fontSize: '14px', color: '#3c3d40' }}>
                You can also press the Escape key to close the drawer.
              </p>
            </div>
          </Drawer>
        </section>

        {/* Drawer with Subtitle */}
        <section className="section">
          <h2>Drawer with Subtitle</h2>
          <p style={{ marginBottom: '16px', color: '#7b7d85', fontSize: '14px' }}>
            Drawer with additional subtitle text
          </p>
          <button
            onClick={() => setSubtitleDrawer(true)}
            style={{
              padding: '8px 16px',
              backgroundColor: '#5a51e7',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
            }}
          >
            Open Drawer with Subtitle
          </button>

          <Drawer
            isOpen={subtitleDrawer}
            onClose={() => setSubtitleDrawer(false)}
            title="Drawer title"
            subtitle="Drawer subtitle"
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <p style={{ fontSize: '14px', color: '#3c3d40' }}>
                This drawer includes a subtitle below the title to provide additional context.
              </p>
            </div>
          </Drawer>
        </section>

        {/* Drawer with Badge */}
        <section className="section">
          <h2>Drawer with Badge</h2>
          <p style={{ marginBottom: '16px', color: '#7b7d85', fontSize: '14px' }}>
            Drawer with a badge indicator (e.g., "NEW")
          </p>
          <button
            onClick={() => setBadgeDrawer(true)}
            style={{
              padding: '8px 16px',
              backgroundColor: '#5a51e7',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
            }}
          >
            Open Drawer with Badge
          </button>

          <Drawer
            isOpen={badgeDrawer}
            onClose={() => setBadgeDrawer(false)}
            title="Drawer title"
            subtitle="Drawer subtitle"
            badge="NEW"
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <p style={{ fontSize: '14px', color: '#3c3d40' }}>
                This drawer includes a badge next to the title to highlight new or important content.
              </p>
            </div>
          </Drawer>
        </section>

        {/* Drawer with Actions */}
        <section className="section">
          <h2>Drawer with Actions</h2>
          <p style={{ marginBottom: '16px', color: '#7b7d85', fontSize: '14px' }}>
            Drawer with primary action and more actions dropdown
          </p>
          <button
            onClick={() => setFullDrawer(true)}
            style={{
              padding: '8px 16px',
              backgroundColor: '#5a51e7',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
            }}
          >
            Open Drawer with Actions
          </button>

          <Drawer
            isOpen={fullDrawer}
            onClose={() => setFullDrawer(false)}
            title="Drawer title"
            subtitle="Drawer subtitle"
            badge="NEW"
            primaryAction={{
              label: 'Primary',
              onClick: () => alert('Primary action clicked!'),
            }}
            moreActions={[
              {
                label: 'Edit',
                onClick: () => alert('Edit clicked!'),
              },
              {
                label: 'Download',
                onClick: () => alert('Download clicked!'),
              },
              {
                label: 'Delete',
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

        {/* Drawer with Tabs */}
        <section className="section">
          <h2>Drawer with Tabs</h2>
          <p style={{ marginBottom: '16px', color: '#7b7d85', fontSize: '14px' }}>
            Drawer with tab navigation
          </p>
          <button
            onClick={() => setTabsDrawer(true)}
            style={{
              padding: '8px 16px',
              backgroundColor: '#5a51e7',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
            }}
          >
            Open Drawer with Tabs
          </button>

          <Drawer
            isOpen={tabsDrawer}
            onClose={() => setTabsDrawer(false)}
            title="Drawer title"
            tabs={[
              { id: 'tab1', label: 'Label' },
              { id: 'tab2', label: 'Label' },
              { id: 'tab3', label: 'Label' }
            ]}
            activeTab={activeTab}
            onTabChange={setActiveTab}
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <h3 style={{ fontSize: '16px', fontWeight: 500, color: '#1e1e20', margin: 0 }}>
                Tab {activeTab === 'tab1' ? '1' : activeTab === 'tab2' ? '2' : '3'} Content
              </h3>
              <p style={{ fontSize: '14px', color: '#3c3d40' }}>
                This is the content for tab {activeTab === 'tab1' ? '1' : activeTab === 'tab2' ? '2' : '3'}. Click on different tabs to switch content.
              </p>
            </div>
          </Drawer>
        </section>

        {/* Wide Drawer */}
        <section className="section">
          <h2>Wide Drawer</h2>
          <p style={{ marginBottom: '16px', color: '#7b7d85', fontSize: '14px' }}>
            Drawer with custom width (900px)
          </p>
          <button
            onClick={() => setWideDrawer(true)}
            style={{
              padding: '8px 16px',
              backgroundColor: '#5a51e7',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
            }}
          >
            Open Wide Drawer
          </button>

          <Drawer
            isOpen={wideDrawer}
            onClose={() => setWideDrawer(false)}
            title="Wide drawer"
            subtitle="This drawer is 900px wide"
            width={900}
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <p style={{ fontSize: '14px', color: '#3c3d40' }}>
                This drawer has a custom width of 900px, which is wider than the default 700px.
                You can set any custom width using the width prop.
              </p>
            </div>
          </Drawer>
        </section>

        {/* Scrollable Drawer */}
        <section className="section">
          <h2>Scrollable Drawer</h2>
          <p style={{ marginBottom: '16px', color: '#7b7d85', fontSize: '14px' }}>
            Drawer with long scrollable content
          </p>
          <button
            onClick={() => setScrollDrawer(true)}
            style={{
              padding: '8px 16px',
              backgroundColor: '#5a51e7',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
            }}
          >
            Open Scrollable Drawer
          </button>

          <Drawer
            isOpen={scrollDrawer}
            onClose={() => setScrollDrawer(false)}
            title="Scrollable drawer"
            subtitle="Long content that scrolls"
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              {Array.from({ length: 20 }, (_, i) => (
                <div key={i} style={{ padding: '16px', backgroundColor: '#f8f8fc', borderRadius: '4px' }}>
                  <h3 style={{ fontSize: '16px', fontWeight: 500, color: '#1e1e20', margin: '0 0 8px 0' }}>
                    Section {i + 1}
                  </h3>
                  <p style={{ fontSize: '14px', color: '#3c3d40', margin: 0 }}>
                    This is section {i + 1} of the scrollable content. The drawer body scrolls
                    independently while the header remains fixed at the top.
                  </p>
                </div>
              ))}
            </div>
          </Drawer>
        </section>
      </main>
    </div>
  );
}

export default DrawerDemo;
