/**
 * Proposals Template
 *
 * Complete proposals page example with table, filters, and actions
 * Demonstrates a typical data management interface
 */

import { useState } from 'react';
import { Table, TableColumn } from '../../design-system/components/Table';
import { Badge } from '../../design-system/components/Badge';
import { Button } from '../../design-system/components/Button';
import { Search } from '../../design-system/components/Search';
import { Pagination } from '../../design-system/components/Pagination';
import { Tabs, Tab } from '../../design-system/components/Tabs';
import { Checkbox } from '../../design-system/components/Checkbox';
import { SideNav } from '../../design-system/components/SideNav';
import { IgnitionLogo } from '../../design-system/components/Card/assets';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faFilter } from '@fortawesome/free-solid-svg-icons';
import {
  faHome,
  faChartLine,
  faFileInvoice,
  faCreditCard,
  faUsers,
  faList,
  faFolder,
  faGripVertical,
  faGear,
  faQuestionCircle,
  faArrowUpFromBracket,
  faArrowDownToBracket,
  faPaperPlane,
  faArrowsRotate,
  faDollarSign,
  faEllipsis
} from '@fortawesome/pro-light-svg-icons';
import { faClipboard } from '@fortawesome/pro-regular-svg-icons';
import '../App.css';

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
        <div style={{ fontWeight: 500, color: '#3c3d40' }}>
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
        <div style={{ color: '#3c3d40' }}>
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
        <div style={{ color: '#7b7d85' }}>
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
        <div style={{ color: '#7b7d85' }}>
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
        <div style={{ color: '#7b7d85', fontSize: '13px' }}>
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
        <div style={{ fontWeight: 600, color: '#3c3d40' }}>
          {row.value}
        </div>
      )
    }
  ];

  const totalValue = mockProposals.reduce((sum, proposal) => {
    const value = parseFloat(proposal.value.replace(/[^0-9.-]+/g, ''));
    return sum + value;
  }, 0);

  return (
    <div style={{ display: 'flex', minHeight: '100vh', backgroundColor: '#f8f9fa' }}>
      {/* Side Navigation */}
      <SideNav
        logo={<IgnitionLogo variant="positive" type="full" />}
        showSearch={true}
        showNotification={true}
        createButton={{
          label: 'Create new',
          onClick: () => console.log('Create clicked')
        }}
        group1Items={[
          { id: 'home', label: 'Home', icon: <FontAwesomeIcon icon={faHome} />, onClick: () => console.log('Home clicked') },
          { id: 'deals', label: 'Deals', icon: <FontAwesomeIcon icon={faChartLine} />, onClick: () => console.log('Deals clicked') },
          { id: 'proposals', label: 'Proposals', icon: <FontAwesomeIcon icon={faFileInvoice} />, active: true, onClick: () => console.log('Proposals clicked') },
          {
            id: 'payments',
            label: 'Payments',
            icon: <FontAwesomeIcon icon={faCreditCard} />,
            onClick: () => console.log('Payments clicked'),
            subItems: [
              { id: 'all-payments', label: 'All payments', onClick: () => console.log('All payments') },
              { id: 'pending', label: 'Pending', onClick: () => console.log('Pending') },
              { id: 'completed', label: 'Completed', onClick: () => console.log('Completed') }
            ]
          }
        ]}
        group2Items={[
          { id: 'clients', label: 'Clients', icon: <FontAwesomeIcon icon={faUsers} />, onClick: () => console.log('Clients clicked') },
          { id: 'services', label: 'Services', icon: <FontAwesomeIcon icon={faList} />, onClick: () => console.log('Services clicked') },
          { id: 'forms', label: 'Forms', icon: <FontAwesomeIcon icon={faClipboard} />, onClick: () => console.log('Forms clicked') },
          {
            id: 'templates',
            label: 'Templates',
            icon: <FontAwesomeIcon icon={faFolder} />,
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
          { id: 'apps', label: 'Apps', icon: <FontAwesomeIcon icon={faGripVertical} />, onClick: () => console.log('Apps clicked') },
          {
            id: 'settings',
            label: 'Settings',
            icon: <FontAwesomeIcon icon={faGear} />,
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
            icon: <FontAwesomeIcon icon={faQuestionCircle} />,
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

      {/* Main Content Area */}
      <div style={{ flex: 1, padding: '32px 40px' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          {/* Page Header */}
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '24px'
          }}>
            <h2 style={{ margin: 0, fontSize: '28px', fontWeight: 600, color: '#1e1e20' }}>Proposals</h2>
            <div style={{ display: 'flex', gap: '8px' }}>
              <Button
                hierarchy="tertiary"
                size="medium"
                iconLeft={<FontAwesomeIcon icon={faArrowUpFromBracket} />}
              >
                Export
              </Button>
              <Button
                hierarchy="tertiary"
                size="medium"
                iconLeft={<FontAwesomeIcon icon={faArrowDownToBracket} />}
              >
                Import
              </Button>
              <Button
                hierarchy="primary"
                size="medium"
                iconLeft={<FontAwesomeIcon icon={faPlus} />}
              >
                New proposal
              </Button>
            </div>
          </div>

          {/* Status Filter Tabs */}
          <div style={{ marginBottom: '20px', borderBottom: '1px solid #e4e7f5' }}>
            <Tabs
              tabs={statusFilterTabs}
              activeTab={selectedTab}
              onTabChange={setSelectedTab}
            />
          </div>

          {/* Search, Filters, and Statistics Row */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            marginBottom: '16px',
            padding: '12px 0',
            borderTop: '1px solid #e4e7f5',
            borderBottom: '1px solid #e4e7f5'
          }}>
            {/* Search */}
            <div style={{ flex: 1 }}>
              <Search
                placeholder="Search proposals..."
                value={searchQuery}
                onChange={setSearchQuery}
                onSearch={() => console.log('Search:', searchQuery)}
              />
            </div>

            {/* Filters Button */}
            <Button
              hierarchy="secondary"
              size="medium"
              iconLeft={<FontAwesomeIcon icon={faFilter} />}
            >
              Filters
            </Button>
          </div>

          {/* Results Summary and Bulk Actions Row */}
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '16px'
          }}>
            <div style={{ fontSize: '14px', color: '#7b7d85' }}>
              {mockProposals.length} results • ${totalValue.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
            </div>
            <div style={{ display: 'flex', gap: '8px' }}>
              <Button
                hierarchy="secondary"
                size="small"
                disabled={selectedRows.length === 0}
                iconLeft={<FontAwesomeIcon icon={faPaperPlane} />}
              >
                Send
              </Button>
              <Button
                hierarchy="secondary"
                size="small"
                disabled={selectedRows.length === 0}
                iconLeft={<FontAwesomeIcon icon={faArrowsRotate} />}
              >
                Renew
              </Button>
              <Button
                hierarchy="secondary"
                size="small"
                disabled={selectedRows.length === 0}
                iconLeft={<FontAwesomeIcon icon={faDollarSign} />}
              >
                Adjust pricing
              </Button>
              <Button
                hierarchy="secondary"
                size="small"
                disabled={selectedRows.length === 0}
                iconLeft={<FontAwesomeIcon icon={faEllipsis} />}
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
            getActionMenuOptions={(row) => [
              { id: 'view', label: 'View details' },
              { id: 'edit', label: 'Edit proposal' },
              { id: 'duplicate', label: 'Duplicate' },
              { id: 'divider-1', type: 'divider' },
              { id: 'delete', label: 'Delete', destructive: true }
            ]}
          />

          {/* Pagination */}
          <div style={{
            marginTop: '20px',
            display: 'flex',
            justifyContent: 'center'
          }}>
            <Pagination
              currentPage={currentPage}
              totalPages={28}
              onPageChange={setCurrentPage}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProposalsTemplate;
