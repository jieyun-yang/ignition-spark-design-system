/**
 * Navigation Demo
 *
 * Showcases navigation components
 */

import { useState } from 'react';
import { Spinner, Tabs, Pagination, ProgressBar, Skeleton, PageHeader, SideNav, SupportArticleLink, Icon } from '../design-system';
import { IgnitionLogo } from '../design-system/components/Card/assets';
import './App.css';

function NavigationDemo() {
  const [activeTab, setActiveTab] = useState('tab1');
  const [disabledTab, setDisabledTab] = useState('home');
  const [manyTabs, setManyTabs] = useState('all');
  const [segmentTab, setSegmentTab] = useState('monthly');
  const [currentPage, setCurrentPage] = useState(2);
  const [pageHeaderTab, setPageHeaderTab] = useState('page1');
  const [reportTab, setReportTab] = useState('overview');

  return (
    <div className="app">
      <header className="header">
        <h1>Navigation</h1>
        <p>Components for navigating through the application</p>
      </header>

      <main className="main">
        {/* Tabs */}
        <section className="section">
          <h2>Tabs</h2>

          <h3 style={{ fontSize: '16px', fontWeight: 500, color: '#3c3d40', marginBottom: '12px' }}>Basic Tabs</h3>
          <div className="button-grid">
            <div className="button-row" style={{ flexDirection: 'column', gap: '24px', alignItems: 'flex-start' }}>
              <Tabs
                tabs={[
                  { id: 'tab1', label: 'Overview' },
                  { id: 'tab2', label: 'Details' },
                  { id: 'tab3', label: 'Settings' }
                ]}
                activeTab={activeTab}
                onTabChange={setActiveTab}
              />
              <div style={{ fontSize: '14px', color: '#5a5b60' }}>
                Active tab: <strong>{activeTab}</strong>
              </div>
            </div>
          </div>

          <h3 style={{ fontSize: '16px', fontWeight: 500, color: '#3c3d40', marginTop: '24px', marginBottom: '12px' }}>With Disabled Tab</h3>
          <div className="button-grid">
            <div className="button-row">
              <Tabs
                tabs={[
                  { id: 'home', label: 'Home' },
                  { id: 'products', label: 'Products' },
                  { id: 'services', label: 'Services', disabled: true },
                  { id: 'contact', label: 'Contact' }
                ]}
                activeTab={disabledTab}
                onTabChange={setDisabledTab}
              />
            </div>
          </div>

          <h3 style={{ fontSize: '16px', fontWeight: 500, color: '#3c3d40', marginTop: '24px', marginBottom: '12px' }}>Many Tabs</h3>
          <div className="button-grid">
            <div className="button-row">
              <Tabs
                tabs={[
                  { id: 'all', label: 'All' },
                  { id: 'active', label: 'Active' },
                  { id: 'pending', label: 'Pending' },
                  { id: 'completed', label: 'Completed' },
                  { id: 'archived', label: 'Archived' }
                ]}
                activeTab={manyTabs}
                onTabChange={setManyTabs}
              />
            </div>
          </div>

          <h3 style={{ fontSize: '16px', fontWeight: 500, color: '#3c3d40', marginTop: '24px', marginBottom: '12px' }}>Segment Control</h3>
          <div className="button-grid">
            <div className="button-row" style={{ flexDirection: 'column', gap: '24px', alignItems: 'flex-start' }}>
              <Tabs
                variant="segment"
                tabs={[
                  { id: 'monthly', label: 'Monthly' },
                  { id: 'quarterly', label: 'Quarterly' },
                  { id: 'yearly', label: 'Yearly' }
                ]}
                activeTab={segmentTab}
                onTabChange={setSegmentTab}
              />
              <div style={{ fontSize: '14px', color: '#5a5b60' }}>
                Selected: <strong>{segmentTab}</strong>
              </div>
            </div>
          </div>
        </section>

        {/* Pagination */}
        <section className="section">
          <h2>Pagination</h2>

          <h3 style={{ fontSize: '16px', fontWeight: 500, color: '#3c3d40', marginBottom: '12px' }}>Basic Pagination</h3>
          <div className="button-grid">
            <div className="button-row" style={{ flexDirection: 'column', gap: '24px', alignItems: 'flex-start' }}>
              <Pagination
                currentPage={currentPage}
                totalPages={10}
                onPageChange={setCurrentPage}
              />
              <div style={{ fontSize: '14px', color: '#5a5b60' }}>
                Current page: <strong>{currentPage}</strong> of 10
              </div>
            </div>
          </div>
        </section>

        {/* Spinner */}
        <section className="section">
          <h2>Spinner</h2>

          <h3 style={{ fontSize: '16px', fontWeight: 500, color: '#3c3d40', marginBottom: '12px' }}>Sizes</h3>
          <div className="button-grid">
            <div className="button-row" style={{ gap: '24px', alignItems: 'center' }}>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
                <Spinner size="small" />
                <span style={{ fontSize: '12px', color: '#5a5b60' }}>Small</span>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
                <Spinner size="medium" />
                <span style={{ fontSize: '12px', color: '#5a5b60' }}>Medium</span>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
                <Spinner size="large" />
                <span style={{ fontSize: '12px', color: '#5a5b60' }}>Large</span>
              </div>
            </div>
          </div>

          <h3 style={{ fontSize: '16px', fontWeight: 500, color: '#3c3d40', marginTop: '24px', marginBottom: '12px' }}>Colors</h3>
          <div className="button-grid">
            <div className="button-row" style={{ gap: '24px', alignItems: 'center' }}>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
                <Spinner color="primary" />
                <span style={{ fontSize: '12px', color: '#5a5b60' }}>Primary</span>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
                <Spinner color="secondary" />
                <span style={{ fontSize: '12px', color: '#5a5b60' }}>Secondary</span>
              </div>
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '8px',
                padding: '16px',
                background: '#3c3d40',
                borderRadius: '4px'
              }}>
                <Spinner color="white" />
                <span style={{ fontSize: '12px', color: '#ffffff' }}>White</span>
              </div>
            </div>
          </div>

          <h3 style={{ fontSize: '16px', fontWeight: 500, color: '#3c3d40', marginTop: '24px', marginBottom: '12px' }}>In Context</h3>
          <div className="button-grid">
            <div className="button-row" style={{ gap: '12px', alignItems: 'center' }}>
              <button
                disabled
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '8px 16px',
                  background: '#5a51e7',
                  color: 'white',
                  border: 'none',
                  borderRadius: '3px',
                  fontWeight: 600,
                  opacity: 0.7
                }}
              >
                <Spinner size="small" color="white" />
                Loading...
              </button>
            </div>
          </div>
        </section>

        {/* Progress Bar */}
        <section className="section">
          <h2>Progress Bar</h2>

          <h3 style={{ fontSize: '16px', fontWeight: 500, color: '#3c3d40', marginBottom: '12px' }}>Progress Values</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', maxWidth: '400px' }}>
            <ProgressBar value={25} max={100} showLabel label="1/4" />
            <ProgressBar value={50} max={100} showLabel label="2/4" />
            <ProgressBar value={75} max={100} showLabel label="3/4" />
            <ProgressBar value={100} max={100} showLabel label="4/4" />
          </div>

          <h3 style={{ fontSize: '16px', fontWeight: 500, color: '#3c3d40', marginTop: '24px', marginBottom: '12px' }}>Sizes</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', maxWidth: '400px' }}>
            <div>
              <span style={{ fontSize: '12px', color: '#5a5b60', marginBottom: '4px', display: 'block' }}>Small</span>
              <ProgressBar value={60} size="small" />
            </div>
            <div>
              <span style={{ fontSize: '12px', color: '#5a5b60', marginBottom: '4px', display: 'block' }}>Medium</span>
              <ProgressBar value={60} size="medium" />
            </div>
            <div>
              <span style={{ fontSize: '12px', color: '#5a5b60', marginBottom: '4px', display: 'block' }}>Large</span>
              <ProgressBar value={60} size="large" />
            </div>
          </div>

          <h3 style={{ fontSize: '16px', fontWeight: 500, color: '#3c3d40', marginTop: '24px', marginBottom: '12px' }}>Variants</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', maxWidth: '400px' }}>
            <div>
              <span style={{ fontSize: '12px', color: '#5a5b60', marginBottom: '4px', display: 'block' }}>Primary</span>
              <ProgressBar value={70} variant="primary" />
            </div>
            <div>
              <span style={{ fontSize: '12px', color: '#5a5b60', marginBottom: '4px', display: 'block' }}>Success</span>
              <ProgressBar value={70} variant="success" />
            </div>
            <div>
              <span style={{ fontSize: '12px', color: '#5a5b60', marginBottom: '4px', display: 'block' }}>Warning</span>
              <ProgressBar value={70} variant="warning" />
            </div>
            <div>
              <span style={{ fontSize: '12px', color: '#5a5b60', marginBottom: '4px', display: 'block' }}>Error</span>
              <ProgressBar value={70} variant="error" />
            </div>
          </div>
        </section>

        {/* Skeleton */}
        <section className="section">
          <h2>Skeleton</h2>

          <h3 style={{ fontSize: '16px', fontWeight: 500, color: '#3c3d40', marginBottom: '12px' }}>Text Lines</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', maxWidth: '400px' }}>
            <Skeleton width="100%" />
            <Skeleton width="80%" />
            <Skeleton width="60%" />
          </div>

          <h3 style={{ fontSize: '16px', fontWeight: 500, color: '#3c3d40', marginTop: '24px', marginBottom: '12px' }}>Circular</h3>
          <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
            <Skeleton variant="circular" width={40} height={40} />
            <Skeleton variant="circular" width={60} height={60} />
            <Skeleton variant="circular" width={80} height={80} />
          </div>

          <h3 style={{ fontSize: '16px', fontWeight: 500, color: '#3c3d40', marginTop: '24px', marginBottom: '12px' }}>Rectangular</h3>
          <div style={{ display: 'flex', gap: '16px' }}>
            <Skeleton variant="rectangular" width={200} height={70} />
            <Skeleton variant="rectangular" width={150} height={70} />
          </div>

          <h3 style={{ fontSize: '16px', fontWeight: 500, color: '#3c3d40', marginTop: '24px', marginBottom: '12px' }}>Card Loading State</h3>
          <div style={{ maxWidth: '400px', padding: '16px', border: '1px solid #e4e7f5', borderRadius: '8px' }}>
            <div style={{ display: 'flex', gap: '16px', marginBottom: '16px' }}>
              <Skeleton variant="circular" width={60} height={60} />
              <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <Skeleton width="100%" />
                <Skeleton width="80%" />
                <Skeleton width="60%" />
              </div>
            </div>
          </div>

          <h3 style={{ fontSize: '16px', fontWeight: 500, color: '#3c3d40', marginTop: '24px', marginBottom: '12px' }}>List Loading State</h3>
          <div style={{ maxWidth: '400px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {[1, 2, 3].map((i) => (
              <div key={i} style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                <Skeleton variant="circular" width={40} height={40} />
                <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <Skeleton width="100%" />
                  <Skeleton width="70%" />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Page Header */}
        <section className="section">
          <h2>Page Header</h2>

          <h3 style={{ fontSize: '16px', fontWeight: 500, color: '#3c3d40', marginBottom: '12px' }}>With Tabs and Actions</h3>
          <div style={{ border: '1px solid #e4e7f5', borderRadius: '8px', marginBottom: '24px', backgroundColor: '#ffffff' }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '24px 24px 0'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <h1 style={{
                  fontSize: '24px',
                  fontWeight: 500,
                  color: '#1e1e20',
                  margin: 0,
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px'
                }}>
                  Page title
                  <SupportArticleLink
                    href="https://help.example.com/page-title"
                    type="icon"
                    external
                  />
                </h1>
              </div>
              <div style={{ display: 'flex', gap: '12px' }}>
                <button
                  style={{
                    padding: '0 13px',
                    height: '32px',
                    backgroundColor: '#e4e7f5',
                    color: '#3c3d40',
                    border: 'none',
                    borderRadius: '3px',
                    fontSize: '14px',
                    fontWeight: 600,
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px'
                  }}
                  onClick={() => alert('More actions')}
                >
                  More actions
                  <Icon name="chevron-down" variant="solid" size="xs" />
                </button>
                <button
                  style={{
                    padding: '0 13px',
                    height: '32px',
                    backgroundColor: '#5a51e7',
                    color: 'white',
                    border: 'none',
                    borderRadius: '3px',
                    fontSize: '14px',
                    fontWeight: 600,
                    cursor: 'pointer'
                  }}
                  onClick={() => alert('Primary action')}
                >
                  Primary
                </button>
              </div>
            </div>
            <div style={{
              borderBottom: '2px solid #e4e7f5',
              marginTop: '24px',
              padding: '0 24px'
            }}>
              <Tabs
                tabs={[
                  { id: 'page1', label: 'Page 1' },
                  { id: 'page2', label: 'Page 2' },
                  { id: 'page3', label: 'Page 3' },
                ]}
                activeTab={pageHeaderTab}
                onTabChange={setPageHeaderTab}
              />
            </div>
            <div style={{ padding: '24px' }}>
              <p style={{ color: '#5a5b60', fontSize: '14px' }}>
                Content for {pageHeaderTab === 'page1' ? 'Page 1' : pageHeaderTab === 'page2' ? 'Page 2' : 'Page 3'}
              </p>
            </div>
          </div>

          <h3 style={{ fontSize: '16px', fontWeight: 500, color: '#3c3d40', marginTop: '24px', marginBottom: '12px' }}>Simple Header</h3>
          <PageHeader
            title="Dashboard"
            primaryAction={{
              label: 'Create',
              icon: <Icon name="plus" variant="solid" />,
              onClick: () => alert('Create'),
            }}
          />

          <h3 style={{ fontSize: '16px', fontWeight: 500, color: '#3c3d40', marginTop: '24px', marginBottom: '12px' }}>With Tabs Only</h3>
          <div style={{ border: '1px solid #e4e7f5', borderRadius: '8px', backgroundColor: '#ffffff' }}>
            <div style={{ padding: '24px 24px 0' }}>
              <h1 style={{ fontSize: '24px', fontWeight: 500, color: '#1e1e20', margin: 0 }}>
                Reports
              </h1>
            </div>
            <div style={{
              borderBottom: '2px solid #e4e7f5',
              marginTop: '24px',
              padding: '0 24px'
            }}>
              <Tabs
                tabs={[
                  { id: 'overview', label: 'Overview' },
                  { id: 'details', label: 'Details' },
                  { id: 'analytics', label: 'Analytics' },
                ]}
                activeTab={reportTab}
                onTabChange={setReportTab}
              />
            </div>
            <div style={{ padding: '24px' }}>
              <p style={{ color: '#5a5b60', fontSize: '14px' }}>
                {reportTab === 'overview' ? 'Overview content' : reportTab === 'details' ? 'Details content' : 'Analytics content'}
              </p>
            </div>
          </div>
        </section>

        {/* Side Nav */}
        <section className="section">
          <h2>Side Nav</h2>

          <h3 style={{ fontSize: '16px', fontWeight: 500, color: '#3c3d40', marginBottom: '12px' }}>Complete Navigation Sidebar</h3>
          <div style={{ border: '1px solid #e4e7f5', borderRadius: '8px', overflow: 'hidden', display: 'inline-block' }}>
            <SideNav
              logo={<IgnitionLogo variant="positive" type="full" />}
              showSearch
              showNotification
              createButton={{
                label: 'Create new',
                onClick: () => alert('Create new clicked')
              }}
              group1Items={[
                {
                  id: 'home',
                  label: 'Home',
                  icon: <Icon name="house" variant="light" />,
                  active: true,
                  onClick: () => console.log('Home clicked')
                },
                {
                  id: 'deals',
                  label: 'Deals',
                  icon: <Icon name="briefcase" variant="light" />,
                  onClick: () => console.log('Deals clicked')
                },
                {
                  id: 'proposals',
                  label: 'Proposals',
                  icon: <Icon name="file-lines" variant="light" />,
                  onClick: () => console.log('Proposals clicked')
                },
                {
                  id: 'payments',
                  label: 'Payments',
                  icon: <Icon name="credit-card" variant="light" />,
                  onClick: () => console.log('Payments clicked'),
                  subItems: [
                    { id: 'all-payments', label: 'All payments', onClick: () => console.log('All payments') },
                    { id: 'pending', label: 'Pending', onClick: () => console.log('Pending') },
                    { id: 'completed', label: 'Completed', onClick: () => console.log('Completed') }
                  ]
                }
              ]}
              group2Items={[
                {
                  id: 'clients',
                  label: 'Clients',
                  icon: <Icon name="users" variant="light" />,
                  onClick: () => console.log('Clients clicked')
                },
                {
                  id: 'services',
                  label: 'Services',
                  icon: <Icon name="gear" variant="light" />,
                  onClick: () => console.log('Services clicked')
                },
                {
                  id: 'forms',
                  label: 'Forms',
                  icon: <Icon name="file-lines" variant="light" />,
                  onClick: () => console.log('Forms clicked')
                },
                {
                  id: 'templates',
                  label: 'Templates',
                  icon: <Icon name="folder" variant="light" />,
                  onClick: () => console.log('Templates clicked'),
                  subItems: [
                    { id: 'proposals', label: 'Proposals', active: true, onClick: () => console.log('Proposals') },
                    { id: 'terms', label: 'Terms', onClick: () => console.log('Terms') },
                    { id: 'emails', label: 'Emails', onClick: () => console.log('Emails') },
                    { id: 'messages', label: 'Messages', onClick: () => console.log('Messages') }
                  ]
                }
              ]}
              group3Items={[
                {
                  id: 'apps',
                  label: 'Apps',
                  icon: <Icon name="grid-2" variant="light" />,
                  onClick: () => console.log('Apps clicked')
                },
                {
                  id: 'settings',
                  label: 'Settings',
                  icon: <Icon name="gear" variant="light" />,
                  onClick: () => console.log('Settings clicked'),
                  subItems: [
                    { id: 'general', label: 'General', active: true, onClick: () => console.log('General') },
                    { id: 'payments', label: 'Payments', onClick: () => console.log('Payments') },
                    { id: 'branding', label: 'Branding', onClick: () => console.log('Branding') },
                    { id: 'taxes', label: 'Taxes', onClick: () => console.log('Taxes') },
                    { id: 'users', label: 'Users', onClick: () => console.log('Users') },
                    { id: 'labs', label: 'Labs', onClick: () => console.log('Labs') }
                  ]
                },
                {
                  id: 'help',
                  label: 'Help',
                  icon: <Icon name="circle-question" variant="light" />,
                  onClick: () => console.log('Help clicked'),
                  subItems: [
                    { id: 'support-portal', label: 'Support portal', active: true, onClick: () => console.log('Support portal') },
                    { id: 'onboarding-course', label: 'Onboarding course', onClick: () => console.log('Onboarding course') },
                    { id: 'learning-center', label: 'Learning center', onClick: () => console.log('Learning center') },
                    { id: 'community', label: 'Community', onClick: () => console.log('Community') }
                  ]
                }
              ]}
              showReferButton
              onReferClick={() => alert('Refer & earn clicked')}
              user={{
                name: 'Greg Bradbury',
                company: 'ABC accounting'
              }}
            />
          </div>

          <h3 style={{ fontSize: '16px', fontWeight: 500, color: '#3c3d40', marginTop: '24px', marginBottom: '12px' }}>Without Header Icons</h3>
          <div style={{ border: '1px solid #e4e7f5', borderRadius: '8px', overflow: 'hidden', display: 'inline-block' }}>
            <SideNav
              logo={<IgnitionLogo variant="positive" type="full" />}
              showSearch={false}
              showNotification={false}
              createButton={{
                label: 'Create new',
                onClick: () => alert('Create new clicked')
              }}
              group1Items={[
                {
                  id: 'home',
                  label: 'Home',
                  icon: <Icon name="house" variant="light" />,
                  active: true,
                  onClick: () => console.log('Home clicked')
                },
                {
                  id: 'clients',
                  label: 'Clients',
                  icon: <Icon name="users" variant="light" />,
                  onClick: () => console.log('Clients clicked')
                }
              ]}
              user={{
                name: 'Jane Smith',
                company: 'Design Co'
              }}
            />
          </div>

          <h3 style={{ fontSize: '16px', fontWeight: 500, color: '#3c3d40', marginTop: '24px', marginBottom: '12px' }}>Minimal Configuration</h3>
          <div style={{ border: '1px solid #e4e7f5', borderRadius: '8px', overflow: 'hidden', display: 'inline-block' }}>
            <SideNav
              logo={<IgnitionLogo variant="positive" type="full" />}
              group1Items={[
                {
                  id: 'dashboard',
                  label: 'Dashboard',
                  icon: <Icon name="house" variant="light" />,
                  active: true,
                  onClick: () => console.log('Dashboard')
                },
                {
                  id: 'settings',
                  label: 'Settings',
                  icon: <Icon name="gear" variant="light" />,
                  onClick: () => console.log('Settings')
                }
              ]}
            />
          </div>
        </section>
      </main>
    </div>
  );
}

export default NavigationDemo;
