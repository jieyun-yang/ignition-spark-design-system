/**
 * Proposals Template
 *
 * Complete proposals page example with table, filters, and actions
 * Demonstrates a typical data management interface
 */

import { useState } from 'react';
import { Table, TableColumn } from '../components/Table';
import { Badge } from '../components/Badge';
import { Button } from '../components/Button';
import { Search } from '../components/Search';
import { Pagination } from '../components/Pagination';
import { Tabs, Tab } from '../components/Tabs';
import { Checkbox } from '../components/Checkbox';
import { SideNav } from '../components/SideNav';
import { TemplateLayout } from '../components/TemplateLayout';
import { IgnitionLogo } from '../components/Card/assets';
import { Drawer } from '../components/Drawer';
import { Alert } from '../components/Alert';
import { CardContainer } from '../components/CardContainer';
import { Icon } from '../index';
import '../../src/App.css';
import styles from './ProposalsTemplate.module.css';
import drawerStyles from './ProposalDrawer.module.css';

interface Proposal {
  id: string;
  client: string;
  proposalName: string;
  status: 'lost' | 'draft' | 'completed' | 'accepted' | 'awaiting';
  start: string;
  end: string;
  activity: string;
  value: string;
}

const mockProposals: Proposal[] = [
  {
    id: '1',
    client: 'Acme Corporation',
    proposalName: 'Q4 Financial Audit',
    status: 'awaiting',
    start: 'Oct 1, 2024',
    end: 'Dec 31, 2024',
    activity: '2 days ago',
    value: '$45,000.00'
  },
  {
    id: '2',
    client: 'Tech Innovations Ltd',
    proposalName: 'Annual Tax Planning',
    status: 'accepted',
    start: 'Nov 15, 2024',
    end: 'Feb 28, 2025',
    activity: '5 hours ago',
    value: '$12,500.00'
  },
  {
    id: '3',
    client: 'Green Energy Co',
    proposalName: 'Monthly Bookkeeping',
    status: 'draft',
    start: 'Jan 1, 2025',
    end: 'Dec 31, 2025',
    activity: '1 week ago',
    value: '$24,000.00'
  },
  {
    id: '4',
    client: 'Blue Sky Ventures',
    proposalName: 'CFO Advisory Services',
    status: 'completed',
    start: 'Sep 1, 2024',
    end: 'Nov 30, 2024',
    activity: '3 days ago',
    value: '$75,000.00'
  },
  {
    id: '5',
    client: 'Downtown Retail Inc',
    proposalName: 'Payroll Management',
    status: 'lost',
    start: 'Oct 15, 2024',
    end: 'Oct 15, 2025',
    activity: '2 weeks ago',
    value: '$18,000.00'
  },
  {
    id: '6',
    client: 'Mountain Real Estate',
    proposalName: 'Property Tax Review',
    status: 'awaiting',
    start: 'Nov 1, 2024',
    end: 'Jan 31, 2025',
    activity: '1 day ago',
    value: '$8,500.00'
  },
  {
    id: '7',
    client: 'Coastal Manufacturing',
    proposalName: 'Financial Statement Preparation',
    status: 'draft',
    start: 'Dec 1, 2024',
    end: 'Mar 31, 2025',
    activity: '4 days ago',
    value: '$32,000.00'
  },
  {
    id: '8',
    client: 'Urban Development Corp',
    proposalName: 'Budget Forecasting',
    status: 'accepted',
    start: 'Jan 15, 2025',
    end: 'Jun 30, 2025',
    activity: '12 hours ago',
    value: '$55,000.00'
  }
];

const statusFilterTabs: Tab[] = [
  { id: 'all', label: 'All (224)' },
  { id: 'draft', label: 'Draft (139)' },
  { id: 'awaiting', label: 'Awaiting acceptance (31)' },
  { id: 'lost', label: 'Lost (17)' },
  { id: 'accepted', label: 'Accepted (15)' },
  { id: 'ending-soon', label: 'Ending soon (5)' },
  { id: 'completed', label: 'Completed (22)' }
];

function ProposalsTemplate() {
  const [selectedTab, setSelectedTab] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedRows, setSelectedRows] = useState<string[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [selectedProposal, setSelectedProposal] = useState<Proposal | null>(null);
  const [drawerTab, setDrawerTab] = useState('details');

  const getBadgeVariant = (status: Proposal['status']): 'green' | 'red' | 'grey' | 'yellow' | 'blue' => {
    switch (status) {
      case 'accepted':
        return 'green';
      case 'lost':
        return 'red';
      case 'awaiting':
        return 'yellow';
      case 'completed':
        return 'blue';
      case 'draft':
      default:
        return 'grey';
    }
  };

  const getStatusLabel = (status: Proposal['status']): string => {
    switch (status) {
      case 'awaiting':
        return 'Awaiting acceptance';
      case 'accepted':
        return 'Accepted';
      case 'lost':
        return 'Lost';
      case 'completed':
        return 'Completed';
      case 'draft':
        return 'Draft';
      default:
        return status;
    }
  };

  const columns: TableColumn<Proposal>[] = [
    {
      key: 'client',
      label: 'CLIENT',
      sortable: true,
      width: '18%',
      render: (row) => (
        <div className={styles.clientName}>
          {row.client}
        </div>
      )
    },
    {
      key: 'proposalName',
      label: 'PROPOSAL NAME',
      sortable: true,
      width: '22%',
      render: (row) => (
        <div className={styles.proposalName}>
          {row.proposalName}
        </div>
      )
    },
    {
      key: 'status',
      label: 'STATUS',
      sortable: true,
      width: '16%',
      render: (row) => (
        <Badge variant={getBadgeVariant(row.status)} size="small">
          {getStatusLabel(row.status)}
        </Badge>
      )
    },
    {
      key: 'start',
      label: 'START',
      sortable: true,
      width: '12%',
      render: (row) => (
        <div className={styles.dateText}>
          {row.start}
        </div>
      )
    },
    {
      key: 'end',
      label: 'END',
      sortable: true,
      width: '12%',
      render: (row) => (
        <div className={styles.dateText}>
          {row.end}
        </div>
      )
    },
    {
      key: 'activity',
      label: 'ACTIVITY',
      sortable: true,
      width: '10%',
      render: (row) => (
        <div className={styles.activityText}>
          {row.activity}
        </div>
      )
    },
    {
      key: 'value',
      label: 'VALUE',
      sortable: true,
      width: '10%',
      align: 'right' as const,
      render: (row) => (
        <div className={styles.valueText}>
          {row.value}
        </div>
      )
    }
  ];

  const totalValue = mockProposals.reduce((sum, proposal) => {
    const value = parseFloat(proposal.value.replace(/[^0-9.-]+/g, ''));
    return sum + value;
  }, 0);

  const handleRowClick = (proposal: Proposal) => {
    setSelectedProposal(proposal);
    setDrawerOpen(true);
    setDrawerTab('details');
  };

  return (
    <TemplateLayout
      sideNav={
        <SideNav
        logo={<IgnitionLogo variant="positive" type="full" />}
        showSearch={true}
        showNotification={true}
        createButton={{
          label: 'Create new',
          onClick: () => console.log('Create clicked')
        }}
        group1Items={[
          { id: 'home', label: 'Home', icon: <Icon name="house" variant="light" />, onClick: () => console.log('Home clicked') },
          { id: 'deals', label: 'Deals', icon: <Icon name="briefcase" variant="light" />, onClick: () => console.log('Deals clicked') },
          { id: 'proposals', label: 'Proposals', icon: <Icon name="file-lines" variant="light" />, active: true, onClick: () => console.log('Proposals clicked') },
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
          { id: 'clients', label: 'Clients', icon: <Icon name="users" variant="light" />, onClick: () => console.log('Clients clicked') },
          { id: 'services', label: 'Services', icon: <Icon name="gear" variant="light" />, onClick: () => console.log('Services clicked') },
          { id: 'forms', label: 'Forms', icon: <Icon name="file-lines" variant="light" />, onClick: () => console.log('Forms clicked') },
          {
            id: 'templates',
            label: 'Templates',
            icon: <Icon name="folder" variant="light" />,
            onClick: () => console.log('Templates clicked'),
            subItems: [
              { id: 'proposals', label: 'Proposals', onClick: () => console.log('Proposals') },
              { id: 'terms', label: 'Terms', onClick: () => console.log('Terms') },
              { id: 'emails', label: 'Emails', onClick: () => console.log('Emails') },
              { id: 'messages', label: 'Messages', onClick: () => console.log('Messages') }
            ]
          }
        ]}
        group3Items={[
          { id: 'apps', label: 'Apps', icon: <Icon name="grid-2" variant="light" />, onClick: () => console.log('Apps clicked') },
          {
            id: 'settings',
            label: 'Settings',
            icon: <Icon name="gear" variant="light" />,
            onClick: () => console.log('Settings clicked'),
            subItems: [
              { id: 'general', label: 'General', onClick: () => console.log('General') },
              { id: 'payments-settings', label: 'Payments', onClick: () => console.log('Payments') },
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
              { id: 'support-portal', label: 'Support portal', onClick: () => console.log('Support portal') },
              { id: 'onboarding-course', label: 'Onboarding course', onClick: () => console.log('Onboarding course') },
              { id: 'learning-center', label: 'Learning center', onClick: () => console.log('Learning center') },
              { id: 'community', label: 'Community', onClick: () => console.log('Community') }
            ]
          }
        ]}
        showReferButton={true}
        onReferClick={() => console.log('Refer clicked')}
        user={{
          name: 'Demo User',
          company: 'Demo Company'
        }}
        />
      }
    >
      {/* Page Header */}
      <TemplateLayout.PageHeader
        title="Proposals"
        actions={
          <>
              <Button
                hierarchy="tertiary"
                size="medium"
              >
                Export
              </Button>
              <Button
                hierarchy="tertiary"
                size="medium"
              >
                Import
              </Button>
              <Button
                hierarchy="primary"
                size="medium"
                iconLeft={<Icon name="plus" variant="solid" />}
              >
                New proposal
              </Button>
          </>
        }
      />

      {/* Status Filter Tabs */}
      <div className={styles.tabsContainer}>
        <Tabs
          tabs={statusFilterTabs}
          activeTab={selectedTab}
          onTabChange={setSelectedTab}
        />
      </div>

      {/* Search, Filters, Results Summary, and Bulk Actions Row */}
      <div className={styles.searchRow}>
        <div className={styles.searchGroup}>
          <div className={styles.searchWrapper}>
            <Search
              placeholder="Search proposals..."
              value={searchQuery}
              onChange={setSearchQuery}
            />
          </div>
          <Button
            hierarchy="secondary"
            size="medium"
            iconLeft={<Icon name="sliders" />}
          >
            Filters
          </Button>
          <div className={styles.statsText}>
            {mockProposals.length} results • ${totalValue.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
          </div>
        </div>
        <div className={styles.bulkActions}>
          <Button
            hierarchy="secondary"
            size="medium"
            disabled={selectedRows.length === 0}
          >
            Send
          </Button>
          <Button
            hierarchy="secondary"
            size="medium"
            disabled={selectedRows.length === 0}
          >
            Renew
          </Button>
          <Button
            hierarchy="secondary"
            size="medium"
            disabled={selectedRows.length === 0}
          >
            Adjust pricing
          </Button>
          <Button
            hierarchy="secondary"
            size="medium"
            disabled={selectedRows.length === 0}
            iconLeft={<Icon name="ellipsis-vertical" />}
          >
            More actions
          </Button>
        </div>
      </div>

      {/* Table */}
      <Table
        columns={columns}
        data={mockProposals}
        selectable={true}
        selectedRows={selectedRows}
        onSelectionChange={setSelectedRows}
        getRowKey={(row) => row.id}
        showActions={true}
        onRowClick={handleRowClick}
        getActionMenuOptions={(row) => [
          { value: 'view', label: 'View details' },
          { value: 'edit', label: 'Edit proposal' },
          { value: 'duplicate', label: 'Duplicate' },
          { value: 'delete', label: 'Delete', destructive: true }
        ]}
      />

      {/* Pagination */}
      <div className={styles.paginationContainer}>
        <Pagination
          currentPage={currentPage}
          totalPages={28}
          onPageChange={setCurrentPage}
        />
      </div>

      {/* Proposal Drawer */}
      {selectedProposal && (
        <Drawer
          isOpen={drawerOpen}
          onClose={() => setDrawerOpen(false)}
          title={selectedProposal.proposalName}
          subtitle={selectedProposal.client}
          badge={getStatusLabel(selectedProposal.status)}
          badgeVariant={getBadgeVariant(selectedProposal.status)}
          headerContent={
            <div className={drawerStyles.drawerHeader}>
              {/* Warning Banner for Lost/Expired Proposals */}
              {selectedProposal.status === 'lost' && (
                <Alert
                  status="warning"
                  icon={<Icon name="triangle-exclamation" />}
                  className={drawerStyles.warningAlert}
                >
                  Proposal expired on 24 September 2025 12:00 AM
                </Alert>
              )}

              {/* Client Name and Email */}
              <div>
                <a
                  href="#"
                  className={drawerStyles.clientLink}
                  onClick={(e) => {
                    e.preventDefault();
                    alert(`Navigate to ${selectedProposal.client} client page`);
                  }}
                >
                  {selectedProposal.client}
                </a>
                <div className={drawerStyles.emailText}>
                  test@example.com
                </div>
              </div>
            </div>
          }
          primaryAction={{
            label: selectedProposal.status === 'lost' ? 'Resend' : selectedProposal.status === 'draft' ? 'Send' : selectedProposal.status === 'awaiting' ? 'Resend' : 'Accept on behalf',
            onClick: () => alert(`${selectedProposal.status === 'lost' || selectedProposal.status === 'draft' || selectedProposal.status === 'awaiting' ? 'Resend' : 'Accept on behalf'} clicked`),
          }}
          moreActions={[
            { label: 'Edit', onClick: () => alert('Edit clicked') },
            { label: 'Duplicate', onClick: () => alert('Duplicate clicked') },
            { label: 'Delete', onClick: () => alert('Delete clicked') },
          ]}
          tabs={[
            { id: 'details', label: 'Details' },
            { id: 'introduction', label: 'Introduction' },
            { id: 'services', label: 'Services' },
            { id: 'pricing', label: 'Pricing' },
            { id: 'terms', label: 'Terms' }
          ]}
          activeTab={drawerTab}
          onTabChange={setDrawerTab}
          tabVariant="segment"
        >
          {drawerTab === 'details' && (
            <div className={drawerStyles.tabContent}>
              {/* Two-column Details Grid */}
              <div className={drawerStyles.detailsGrid}>
                <div className={drawerStyles.detailLabel}>Client</div>
                <div className={drawerStyles.detailValueMedium}>{selectedProposal.client}</div>

                <div className={drawerStyles.detailLabel}>Start</div>
                <div className={drawerStyles.detailValue}>{selectedProposal.start === 'On Accept' ? 'On Acceptance' : selectedProposal.start}</div>

                <div className={drawerStyles.detailLabel}>Contract length</div>
                <div className={drawerStyles.detailValue}>12 months</div>

                <div className={drawerStyles.detailLabel}>Minimum value</div>
                <div className={drawerStyles.detailValueBold}>{selectedProposal.value}</div>

                <div className={drawerStyles.detailLabel}>Created</div>
                <div className={drawerStyles.detailValue}>Wednesday, 10 September 2025 12:11 PM</div>

                <div className={drawerStyles.detailLabel}>Modified</div>
                <div className={drawerStyles.detailValue}>Wednesday, 10 September 2025 12:12 PM</div>
              </div>

              {/* Payments Section */}
              <CardContainer heading="Payments">
                <p style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-gray-700)', margin: 0 }}>
                  Payments are not enabled for your account. <a href="#" className={drawerStyles.setupLink}>Set up payments</a>
                </p>
              </CardContainer>

              {/* Activity Section */}
              <CardContainer heading="Activity">
                <div className={drawerStyles.activityList}>
                  {[
                    { text: 'Proposal marked as lost as it has expired', date: '24 Sep 2025 12:00 AM' },
                    { text: `Proposal reminder sent to ${selectedProposal.client} - test@example.com`, date: '19 Sep 2025 11:00 AM' },
                    { text: `Proposal reminder sent to ${selectedProposal.client} - test@example.com`, date: '16 Sep 2025 11:00 AM' },
                    { text: `Proposal reminder sent to ${selectedProposal.client} - test@example.com`, date: '13 Sep 2025 11:00 AM' },
                    { text: `Proposal sent to primary signatory: ${selectedProposal.client} (test@example.com) by Jieyun Yang`, date: '10 Sep 2025 12:12 PM' },
                    { text: 'Proposal moved to awaiting acceptance by Jieyun Yang', date: '10 Sep 2025 12:12 PM' },
                    { text: 'Proposal created by Jieyun Yang using the advanced editor', date: '10 Sep 2025 12:11 PM' }
                  ].map((activity, index) => (
                    <div key={index} className={drawerStyles.activityItem}>
                      <div className={drawerStyles.activityText}>{activity.text}</div>
                      <div className={drawerStyles.activityDate}>{activity.date}</div>
                    </div>
                  ))}
                </div>
              </CardContainer>
            </div>
          )}
          {drawerTab === 'introduction' && (
            <div>
              <h3 style={{ fontSize: 'var(--font-size-lg)', fontWeight: 'var(--font-weight-semibold)', marginBottom: 'var(--spacing-3)' }}>
                Introduction
              </h3>
              <p style={{ fontSize: 'var(--font-size-base)', color: 'var(--color-gray-700)', lineHeight: 'var(--line-height-normal)' }}>
                Introduction content for the proposal would appear here.
              </p>
            </div>
          )}
          {drawerTab === 'services' && (
            <div>
              <h3 style={{ fontSize: 'var(--font-size-lg)', fontWeight: 'var(--font-weight-semibold)', marginBottom: 'var(--spacing-3)' }}>
                Services
              </h3>
              <p style={{ fontSize: 'var(--font-size-base)', color: 'var(--color-gray-700)', lineHeight: 'var(--line-height-normal)' }}>
                Services included in this proposal would be listed here.
              </p>
            </div>
          )}
          {drawerTab === 'pricing' && (
            <div>
              <h3 style={{ fontSize: 'var(--font-size-lg)', fontWeight: 'var(--font-weight-semibold)', marginBottom: 'var(--spacing-3)' }}>
                Pricing
              </h3>
              <p style={{ fontSize: 'var(--font-size-base)', color: 'var(--color-gray-700)', lineHeight: 'var(--line-height-normal)' }}>
                Pricing breakdown would be displayed here.
              </p>
            </div>
          )}
          {drawerTab === 'terms' && (
            <div>
              <h3 style={{ fontSize: 'var(--font-size-lg)', fontWeight: 'var(--font-weight-semibold)', marginBottom: 'var(--spacing-3)' }}>
                Terms
              </h3>
              <p style={{ fontSize: 'var(--font-size-base)', color: 'var(--color-gray-700)', lineHeight: 'var(--line-height-normal)' }}>
                Terms and conditions would be displayed here.
              </p>
            </div>
          )}
        </Drawer>
      )}
    </TemplateLayout>
  );
}

export default ProposalsTemplate;
