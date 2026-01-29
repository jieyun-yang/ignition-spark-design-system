/**
 * Data Display Demo
 *
 * Showcases data display components
 */

import { useState } from 'react';
import { Badge, Avatar, DataList, Divider, Link, Card, AppCard, Table, TableHeader, Pagination, EmptyState, Notification, Signature, ProgressStatus, Filter, SupportArticleLink, Icon } from '../design-system';
import { IgnitionLogo, AppLogo, PaymentMethodLogo } from '../design-system/components/Card/assets';
import './App.css';

interface ProposalData {
  id: string;
  client: string;
  proposalName: string;
  status: 'Accepted' | 'Sent' | 'Completed' | 'Draft' | 'Awaiting';
  start: string;
  end: string;
  activity: string;
  value: string;
}

const proposalData: ProposalData[] = [
  {
    id: '1',
    client: "Bob's Bakery",
    proposalName: 'Annual Accounting',
    status: 'Accepted',
    start: '29 Apr 2024',
    end: '29 Apr 2025',
    activity: '29 Apr 2024',
    value: '$5,000.00',
  },
  {
    id: '2',
    client: 'Sunrise Cafe',
    proposalName: 'Quarterly Tax Filing',
    status: 'Sent',
    start: '20 Apr 2024',
    end: '29 Apr 2025',
    activity: '29 Apr 2024',
    value: '$5,000.00',
  },
  {
    id: '3',
    client: 'Quantum Innovations',
    proposalName: 'Bookkeeping Cleanup',
    status: 'Awaiting',
    start: '20 Apr 2024',
    end: '29 Apr 2025',
    activity: '29 Apr 2024',
    value: '$5,000.00',
  },
  {
    id: '4',
    client: 'TechStart Inc',
    proposalName: 'Monthly Bookkeeping',
    status: 'Draft',
    start: '15 Apr 2024',
    end: '15 Apr 2025',
    activity: '28 Apr 2024',
    value: '$3,500.00',
  },
  {
    id: '5',
    client: 'Green Valley Farm',
    proposalName: 'Year-End Tax Prep',
    status: 'Completed',
    start: '01 Mar 2024',
    end: '01 Mar 2025',
    activity: '30 Apr 2024',
    value: '$4,200.00',
  },
  {
    id: '6',
    client: 'Urban Design Studio',
    proposalName: 'Payroll Services',
    status: 'Accepted',
    start: '10 Apr 2024',
    end: '10 Apr 2025',
    activity: '25 Apr 2024',
    value: '$6,800.00',
  },
  {
    id: '7',
    client: 'Harbor Restaurant Group',
    proposalName: 'Financial Advisory',
    status: 'Sent',
    start: '05 Apr 2024',
    end: '05 Apr 2025',
    activity: '27 Apr 2024',
    value: '$8,500.00',
  },
  {
    id: '8',
    client: 'Blue Ocean Logistics',
    proposalName: 'Compliance Audit',
    status: 'Awaiting',
    start: '18 Apr 2024',
    end: '18 Apr 2025',
    activity: '26 Apr 2024',
    value: '$7,200.00',
  },
];

function DataDisplayDemo() {
  const [selectedRows, setSelectedRows] = useState<string[]>([]);
  const [selectedCardId, setSelectedCardId] = useState<string | null>(null);

  // Filter states - Without Value section (start empty)
  const [statusFilter, setStatusFilter] = useState('');
  const [typeFilter, setTypeFilter] = useState('');
  const [dateRangeFilter, setDateRangeFilter] = useState('');

  // Filter states - With Value section (start with values)
  const [statusFilterWithValue, setStatusFilterWithValue] = useState('Active');
  const [typeFilterWithValue, setTypeFilterWithValue] = useState('Client');
  const [amountFilter, setAmountFilter] = useState('$5,000');

  // Filter states - With Sub Label section
  const [proposalStatusFilter, setProposalStatusFilter] = useState('Sent');
  const [clientTypeFilter, setClientTypeFilter] = useState('Active');

  // Filter states - Multiple Filters section
  const [multiStatus, setMultiStatus] = useState('Active');
  const [multiType, setMultiType] = useState('Client');
  const [multiDate, setMultiDate] = useState('');

  return (
    <div className="app">
      <header className="header">
        <h1>Data Display</h1>
        <p>Components for displaying data and information</p>
      </header>

      <main className="main">
        {/* Badge */}
        <section className="section">
          <h2>Badge</h2>

          <h3 style={{ fontSize: '16px', fontWeight: 500, color: '#3c3d40', marginBottom: '12px' }}>Tiny Size</h3>
          <div className="button-grid">
            <div className="button-row" style={{ gap: '12px' }}>
              <Badge variant="green" size="tiny">Green</Badge>
              <Badge variant="red" size="tiny">Red</Badge>
              <Badge variant="grey" size="tiny">Grey</Badge>
              <Badge variant="yellow" size="tiny">Yellow</Badge>
              <Badge variant="blue" size="tiny">Blue</Badge>
            </div>
          </div>

          <h3 style={{ fontSize: '16px', fontWeight: 500, color: '#3c3d40', marginTop: '24px', marginBottom: '12px' }}>Small Size</h3>
          <div className="button-grid">
            <div className="button-row" style={{ gap: '12px' }}>
              <Badge variant="green" size="small">Green</Badge>
              <Badge variant="red" size="small">Red</Badge>
              <Badge variant="grey" size="small">Grey</Badge>
              <Badge variant="yellow" size="small">Yellow</Badge>
              <Badge variant="blue" size="small">Blue</Badge>
            </div>
          </div>

          <h3 style={{ fontSize: '16px', fontWeight: 500, color: '#3c3d40', marginTop: '24px', marginBottom: '12px' }}>Large Size</h3>
          <div className="button-grid">
            <div className="button-row" style={{ gap: '12px' }}>
              <Badge variant="green" size="large">Green</Badge>
              <Badge variant="red" size="large">Red</Badge>
              <Badge variant="grey" size="large">Grey</Badge>
              <Badge variant="yellow" size="large">Yellow</Badge>
              <Badge variant="blue" size="large">Blue</Badge>
            </div>
          </div>

          <h3 style={{ fontSize: '16px', fontWeight: 500, color: '#3c3d40', marginTop: '24px', marginBottom: '12px' }}>Usage Examples</h3>
          <div className="button-grid">
            <div className="button-row" style={{ gap: '12px' }}>
              <Badge variant="green" size="small">Active</Badge>
              <Badge variant="red" size="small">Error</Badge>
              <Badge variant="yellow" size="small">Warning</Badge>
              <Badge variant="blue" size="small">Info</Badge>
              <Badge variant="grey" size="small">Inactive</Badge>
            </div>
          </div>
        </section>

        {/* Avatar */}
        <section className="section">
          <h2>Avatar</h2>
          <h3 style={{ fontSize: '16px', fontWeight: 500, color: '#3c3d40', marginBottom: '12px' }}>Simple Avatar</h3>
          <div className="button-grid">
            <div className="button-row" style={{ gap: '16px', alignItems: 'center' }}>
              <Avatar initials="AB" size="small" />
              <Avatar initials="AB" size="medium" />
              <Avatar initials="AB" size="large" />
            </div>
            <div className="button-row" style={{ gap: '16px', alignItems: 'center', marginTop: '16px' }}>
              <Avatar initials="FC" size="medium" />
              <Avatar initials="JD" size="medium" />
              <Avatar initials="SK" size="medium" />
            </div>
          </div>

          <h3 style={{ fontSize: '16px', fontWeight: 500, color: '#3c3d40', marginTop: '24px', marginBottom: '12px' }}>User Profile</h3>
          <div className="button-grid">
            <div className="button-row" style={{ flexDirection: 'column', alignItems: 'flex-start', gap: '16px' }}>
              <Avatar
                initials="FC"
                showProfile
                name="Fred Costanza"
                email="fred@email.com"
                size="medium"
              />
              <Avatar
                initials="AB"
                showProfile
                name="Alex Brown"
                email="alex.brown@example.com"
                size="medium"
              />
            </div>
          </div>
        </section>

        {/* DataList */}
        <section className="section">
          <h2>Data List</h2>

          <h3 style={{ fontSize: '16px', fontWeight: 500, color: '#3c3d40', marginBottom: '12px' }}>Data Point - Large</h3>
          <div className="button-grid">
            <div className="button-row" style={{ maxWidth: '400px' }}>
              <DataList
                variant="data-point"
                size="large"
                items={[
                  { label: 'Label', value: 'Value' }
                ]}
              />
            </div>
          </div>

          <h3 style={{ fontSize: '16px', fontWeight: 500, color: '#3c3d40', marginTop: '24px', marginBottom: '12px' }}>Data Point - Small</h3>
          <div className="button-grid">
            <div className="button-row" style={{ maxWidth: '400px' }}>
              <DataList
                variant="data-point"
                size="small"
                items={[
                  { label: 'Label', value: 'Value' }
                ]}
              />
            </div>
          </div>

          <h3 style={{ fontSize: '16px', fontWeight: 500, color: '#3c3d40', marginTop: '24px', marginBottom: '12px' }}>Data List - Large with Header</h3>
          <div className="button-grid">
            <div className="button-row" style={{ maxWidth: '400px' }}>
              <DataList
                variant="data-list"
                size="large"
                header="List header"
                items={[
                  { label: 'Label', value: 'Value' },
                  { label: 'Label', value: 'Value' },
                  { label: 'Label', value: 'Value' },
                  { label: 'Label', value: 'Value' }
                ]}
              />
            </div>
          </div>

          <h3 style={{ fontSize: '16px', fontWeight: 500, color: '#3c3d40', marginTop: '24px', marginBottom: '12px' }}>Data List - Small with Header</h3>
          <div className="button-grid">
            <div className="button-row" style={{ maxWidth: '400px' }}>
              <DataList
                variant="data-list"
                size="small"
                header="List header"
                items={[
                  { label: 'Label', value: 'Value' },
                  { label: 'Label', value: 'Value' },
                  { label: 'Label', value: 'Value' },
                  { label: 'Label', value: 'Value' }
                ]}
              />
            </div>
          </div>

          <h3 style={{ fontSize: '16px', fontWeight: 500, color: '#3c3d40', marginTop: '24px', marginBottom: '12px' }}>Real World Example</h3>
          <div className="button-grid">
            <div className="button-row" style={{ maxWidth: '400px' }}>
              <DataList
                variant="data-list"
                size="large"
                header="User Information"
                items={[
                  { label: 'Name', value: 'John Doe' },
                  { label: 'Email', value: 'john.doe@example.com' },
                  { label: 'Phone', value: '+1 (555) 123-4567' },
                  { label: 'Status', value: 'Active' }
                ]}
              />
            </div>
          </div>
        </section>

        {/* Divider */}
        <section className="section">
          <h2>Divider</h2>
          <div className="button-grid">
            <div className="button-row" style={{ flexDirection: 'column', width: '100%', maxWidth: '600px', gap: '24px' }}>
              <div>Section 1 content</div>
              <Divider />
              <div>Section 2 content</div>
              <Divider />
              <div>Section 3 content</div>
            </div>
          </div>
        </section>

        {/* Link */}
        <section className="section">
          <h2>Link</h2>
          <p style={{ marginBottom: '24px', color: '#7b7d85', fontSize: '14px' }}>
            Styled links with multiple typography variants and hover states.
          </p>

          <h3 style={{ fontSize: '16px', fontWeight: 500, color: '#3c3d40', marginBottom: '12px' }}>Body Variants</h3>
          <div className="button-grid" style={{ marginBottom: '24px' }}>
            <div className="button-row" style={{ flexDirection: 'column', alignItems: 'flex-start', gap: '12px' }}>
              <Link href="#" variant="body">Body Link (14px, regular)</Link>
              <Link href="#" variant="body-medium">Body Medium Link (14px, medium)</Link>
            </div>
          </div>

          <h3 style={{ fontSize: '16px', fontWeight: 500, color: '#3c3d40', marginBottom: '12px' }}>Small Variants</h3>
          <div className="button-grid" style={{ marginBottom: '24px' }}>
            <div className="button-row" style={{ flexDirection: 'column', alignItems: 'flex-start', gap: '12px' }}>
              <Link href="#" variant="small">Small Link (12px, regular)</Link>
              <Link href="#" variant="small-medium">Small Medium Link (12px, medium)</Link>
              <Link href="#" variant="extra-small">Extra Small Link (11px, regular)</Link>
            </div>
          </div>

          <h3 style={{ fontSize: '16px', fontWeight: 500, color: '#3c3d40', marginBottom: '12px' }}>Heading Variants</h3>
          <div className="button-grid" style={{ marginBottom: '24px' }}>
            <div className="button-row" style={{ flexDirection: 'column', alignItems: 'flex-start', gap: '12px' }}>
              <Link href="#" variant="h1">H1 Link (24px, medium)</Link>
              <Link href="#" variant="h2">H2 Link (20px, medium)</Link>
              <Link href="#" variant="h3">H3 Link (18px, medium)</Link>
              <Link href="#" variant="h4">H4 Link (16px, medium)</Link>
            </div>
          </div>

          <h3 style={{ fontSize: '16px', fontWeight: 500, color: '#3c3d40', marginBottom: '12px' }}>External Links</h3>
          <div className="button-grid" style={{ marginBottom: '24px' }}>
            <div className="button-row" style={{ flexDirection: 'column', alignItems: 'flex-start', gap: '12px' }}>
              <Link href="https://example.com" external>Visit external site (opens in new tab)</Link>
              <Link href="https://docs.example.com" variant="small" external>View documentation</Link>
            </div>
          </div>

          <h3 style={{ fontSize: '16px', fontWeight: 500, color: '#3c3d40', marginBottom: '12px' }}>In Context</h3>
          <div className="button-grid">
            <div className="button-row" style={{ maxWidth: '600px' }}>
              <p style={{ fontSize: '14px', lineHeight: '1.6', color: '#3c3d40' }}>
                This is a paragraph with a <Link href="#">regular link</Link> embedded in it.
                You can also <Link href="https://example.com" external>visit an external site</Link> or
                read the <Link href="#" variant="small">documentation</Link> for more details.
                Need help? Check out our <Link href="#" variant="h4">support resources</Link>.
              </p>
            </div>
          </div>
        </section>

        {/* Card */}
        <section className="section">
          <h2>Card</h2>

          {/* Small Cards */}
          <h3 style={{ fontSize: '16px', fontWeight: 500, color: '#3c3d40', marginBottom: '12px' }}>Small - Default</h3>
          <div className="button-grid" style={{ marginBottom: '24px' }}>
            <div className="button-row" style={{ gap: '16px', flexWrap: 'wrap' }}>
              <Card
                size="small"
                icon={<Icon name="gift" variant="solid" />}
                iconVariant="default"
                title="Title"
                description="Description"
                onClick={() => setSelectedCardId(selectedCardId === 'small-icon' ? null : 'small-icon')}
                selected={selectedCardId === 'small-icon'}
              />
              <Card
                size="small"
                title="Title"
                description="Description"
                onClick={() => setSelectedCardId(selectedCardId === 'small-no-icon' ? null : 'small-no-icon')}
                selected={selectedCardId === 'small-no-icon'}
              />
              <Card
                size="small"
                iconVariant="logo"
                title="Title"
                description="Description"
                onClick={() => setSelectedCardId(selectedCardId === 'small-logo' ? null : 'small-logo')}
                selected={selectedCardId === 'small-logo'}
              />
              <Card
                size="small"
                icon={<Icon name="gift" variant="solid" />}
                iconVariant="default"
                title="Title"
                description="Description"
                badge="Seen"
                badgeVariant="grey"
                onClick={() => setSelectedCardId(selectedCardId === 'small-badge' ? null : 'small-badge')}
                selected={selectedCardId === 'small-badge'}
              />
              <Card
                size="small"
                preview={
                  <div style={{
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
                  }}>
                    <Icon name="copy" size="xl" />
                  </div>
                }
                title="Title"
                description="Description"
                onClick={() => setSelectedCardId(selectedCardId === 'small-illustration' ? null : 'small-illustration')}
                selected={selectedCardId === 'small-illustration'}
              />
            </div>
          </div>

          <h3 style={{ fontSize: '16px', fontWeight: 500, color: '#3c3d40', marginBottom: '12px' }}>Small - Disabled</h3>
          <div className="button-grid" style={{ marginBottom: '32px' }}>
            <div className="button-row" style={{ gap: '16px', flexWrap: 'wrap' }}>
              <Card
                size="small"
                icon={<Icon name="gift" variant="solid" />}
                iconVariant="default"
                title="Title"
                description="Description"
                disabled
              />
              <Card
                size="small"
                title="Title"
                description="Description"
                disabled
              />
            </div>
          </div>

          {/* Large Cards */}
          <h3 style={{ fontSize: '16px', fontWeight: 500, color: '#3c3d40', marginBottom: '12px' }}>Large - Default</h3>
          <div className="button-grid" style={{ marginBottom: '24px' }}>
            <div className="button-row" style={{ gap: '16px', flexWrap: 'wrap' }}>
              <Card
                size="large"
                icon={<Icon name="gift" variant="solid" />}
                iconVariant="default"
                title="Title"
                description="Description"
                onClick={() => setSelectedCardId(selectedCardId === 'large-icon' ? null : 'large-icon')}
                selected={selectedCardId === 'large-icon'}
              />
              <Card
                size="large"
                title="Title"
                description="Description"
                onClick={() => setSelectedCardId(selectedCardId === 'large-no-icon' ? null : 'large-no-icon')}
                selected={selectedCardId === 'large-no-icon'}
              />
              <Card
                size="large"
                iconVariant="logo"
                title="Title"
                description="Description"
                onClick={() => setSelectedCardId(selectedCardId === 'large-logo' ? null : 'large-logo')}
                selected={selectedCardId === 'large-logo'}
              />
              <Card
                size="large"
                icon={<Icon name="gift" variant="solid" />}
                iconVariant="default"
                title="Title"
                description="Description"
                badge="Seen"
                badgeVariant="grey"
                onClick={() => setSelectedCardId(selectedCardId === 'large-badge' ? null : 'large-badge')}
                selected={selectedCardId === 'large-badge'}
              />
              <Card
                size="large"
                preview={
                  <div style={{
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
                  }}>
                    <Icon name="copy" size="xl" />
                  </div>
                }
                title="Title"
                description="Description"
                onClick={() => setSelectedCardId(selectedCardId === 'large-illustration' ? null : 'large-illustration')}
                selected={selectedCardId === 'large-illustration'}
              />
            </div>
          </div>

          <h3 style={{ fontSize: '16px', fontWeight: 500, color: '#3c3d40', marginBottom: '12px' }}>Large - Disabled</h3>
          <div className="button-grid">
            <div className="button-row" style={{ gap: '16px', flexWrap: 'wrap' }}>
              <Card
                size="large"
                icon={<Icon name="gift" variant="solid" />}
                iconVariant="default"
                title="Title"
                description="Description"
                disabled
              />
              <Card
                size="large"
                title="Title"
                description="Description"
                disabled
              />
            </div>
          </div>

          {/* App Cards */}
          <h3 style={{ fontSize: '16px', fontWeight: 500, color: '#3c3d40', marginTop: '32px', marginBottom: '12px' }}>App Cards - Default</h3>
          <div className="button-grid" style={{ marginBottom: '24px' }}>
            <div className="button-row" style={{ gap: '16px', flexWrap: 'wrap' }}>
              <AppCard
                logo={<AppLogo app="xero" width={64} height={64} />}
                appName="App name"
                description="Description"
                onClick={() => setSelectedCardId(selectedCardId === 'app-basic' ? null : 'app-basic')}
                selected={selectedCardId === 'app-basic'}
              />
              <AppCard
                logo={<AppLogo app="quickbooks" width={64} height={64} />}
                appName="App name"
                description="Description"
                badge="Connected"
                badgeVariant="green"
                onClick={() => setSelectedCardId(selectedCardId === 'app-badge' ? null : 'app-badge')}
                selected={selectedCardId === 'app-badge'}
              />
              <AppCard
                logo={<AppLogo app="karbon" width={64} height={64} />}
                appName="App name"
                description="Description"
                premium
                onClick={() => setSelectedCardId(selectedCardId === 'app-premium' ? null : 'app-premium')}
                selected={selectedCardId === 'app-premium'}
              />
              <AppCard
                logo={<AppLogo app="gusto" width={64} height={64} />}
                appName="App name"
                description="Description"
                badge="New"
                badgeVariant="blue"
                premium
                onClick={() => setSelectedCardId(selectedCardId === 'app-premium-badge' ? null : 'app-premium-badge')}
                selected={selectedCardId === 'app-premium-badge'}
              />
            </div>
          </div>

          <h3 style={{ fontSize: '16px', fontWeight: 500, color: '#3c3d40', marginBottom: '12px' }}>App Cards - Disabled & Locked</h3>
          <div className="button-grid" style={{ marginBottom: '24px' }}>
            <div className="button-row" style={{ gap: '16px', flexWrap: 'wrap' }}>
              <AppCard
                logo={<AppLogo app="slack" width={64} height={64} />}
                appName="App name"
                description="Description"
                disabled
                locked
              />
              <AppCard
                logo={<AppLogo app="zapier" width={64} height={64} />}
                appName="App name"
                description="Description"
                badge="Locked"
                badgeVariant="grey"
                disabled
                locked
              />
            </div>
          </div>
        </section>

        {/* Table */}
        <section className="section">
          <h2>Table</h2>

          <h3 style={{ fontSize: '16px', fontWeight: 500, color: '#3c3d40', marginBottom: '12px' }}>Basic Table</h3>
          <Table
            columns={[
              { key: 'client', label: 'CLIENT', sortable: true },
              { key: 'proposalName', label: 'PROPOSAL NAME', sortable: true },
              {
                key: 'status',
                label: 'STATUS',
                render: (row: ProposalData) => {
                  const variantMap = {
                    Accepted: 'green',
                    Sent: 'blue',
                    Completed: 'green',
                    Draft: 'yellow',
                    Awaiting: 'blue',
                  };
                  return <Badge variant={variantMap[row.status] as any} size="tiny">{row.status}</Badge>;
                },
              },
              { key: 'start', label: 'START', sortable: true },
              { key: 'end', label: 'END', sortable: true },
              { key: 'activity', label: 'ACTIVITY', sortable: true },
              { key: 'value', label: 'VALUE', sortable: true, align: 'right' },
            ]}
            data={proposalData}
            getRowKey={(row) => row.id}
          />

          <h3 style={{ fontSize: '16px', fontWeight: 500, color: '#3c3d40', marginTop: '24px', marginBottom: '12px' }}>With Actions</h3>
          <Table
            columns={[
              { key: 'client', label: 'CLIENT' },
              { key: 'proposalName', label: 'PROPOSAL NAME' },
              {
                key: 'status',
                label: 'STATUS',
                render: (row: ProposalData) => {
                  const variantMap = {
                    Accepted: 'green',
                    Sent: 'blue',
                    Completed: 'green',
                    Draft: 'yellow',
                    Awaiting: 'blue',
                  };
                  return <Badge variant={variantMap[row.status] as any} size="tiny">{row.status}</Badge>;
                },
              },
            ]}
            data={proposalData}
            getRowKey={(row) => row.id}
            showActions
            getActionMenuOptions={(row) => [
              {
                label: 'Edit',
                value: 'edit',
                icon: <Icon name="copy" />,
                onClick: () => alert(`Edit: ${row.client}`),
              },
              {
                label: 'Duplicate',
                value: 'duplicate',
                onClick: () => alert(`Duplicate: ${row.client}`),
              },
              {
                label: 'Delete',
                value: 'delete',
                onClick: () => alert(`Delete: ${row.client}`),
                destructive: true,
              },
            ]}
          />

          <h3 style={{ fontSize: '16px', fontWeight: 500, color: '#3c3d40', marginTop: '24px', marginBottom: '12px' }}>Empty State</h3>
          <Table
            columns={[
              { key: 'client', label: 'CLIENT' },
              { key: 'proposalName', label: 'PROPOSAL NAME' },
              { key: 'status', label: 'STATUS' },
            ]}
            data={[]}
            emptyMessage="No proposals found"
          />

          <h3 style={{ fontSize: '16px', fontWeight: 500, color: '#3c3d40', marginTop: '24px', marginBottom: '12px' }}>Complete Table (Header + Body + Pagination)</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {/* Table Header */}
            <TableHeader
              searchPlaceholder="Search..."
              onSearchChange={(value) => console.log('Search:', value)}
              onFiltersClick={() => console.log('Filters clicked')}
              resultsCount={proposalData.length}
              totalAmount="$43,200.00"
              amountTooltip="Total value of all proposals"
              bulkActions={[
                {
                  label: 'Send',
                  icon: undefined,
                  onClick: () => alert(`Send ${selectedRows.length} proposals`),
                  disabled: selectedRows.length === 0
                },
                {
                  label: 'Renew',
                  icon: undefined,
                  onClick: () => alert(`Renew ${selectedRows.length} proposals`),
                  disabled: selectedRows.length === 0
                },
                {
                  label: 'Adjust pricing',
                  icon: undefined,
                  onClick: () => alert(`Adjust pricing for ${selectedRows.length} proposals`),
                  disabled: selectedRows.length === 0
                },
                {
                  label: 'More actions',
                  onClick: () => console.log('More actions'),
                  disabled: selectedRows.length === 0
                }
              ]}
            />

            {/* Table Body */}
            <Table
              columns={[
                { key: 'client', label: 'CLIENT', sortable: true },
                { key: 'proposalName', label: 'PROPOSAL NAME' },
                {
                  key: 'status',
                  label: 'STATUS',
                  render: (row: ProposalData) => {
                    const variantMap = {
                      Accepted: 'green',
                      Sent: 'blue',
                      Completed: 'green',
                      Draft: 'yellow',
                      Awaiting: 'blue',
                    };
                    return <Badge variant={variantMap[row.status] as any} size="small">{row.status}</Badge>;
                  },
                },
                { key: 'start', label: 'START', sortable: true },
                { key: 'end', label: 'END', sortable: true },
                { key: 'activity', label: 'ACTIVITY', sortable: true },
                { key: 'value', label: 'VALUE', sortable: true, align: 'right' },
              ]}
              data={proposalData}
              getRowKey={(row) => row.id}
              selectable
              selectedRows={selectedRows}
              onSelectionChange={setSelectedRows}
              showActions
              getActionMenuOptions={(row) => [
                {
                  label: 'Edit',
                  value: 'edit',
                  icon: <Icon name="copy" />,
                  onClick: () => alert(`Edit: ${row.client}`),
                },
                {
                  label: 'Duplicate',
                  value: 'duplicate',
                  onClick: () => alert(`Duplicate: ${row.client}`),
                },
                {
                  label: 'Delete',
                  value: 'delete',
                  onClick: () => alert(`Delete: ${row.client}`),
                  destructive: true,
                },
              ]}
            />

            {/* Pagination */}
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '4px' }}>
              <Pagination
                currentPage={2}
                totalPages={10}
                onPageChange={(page) => console.log('Page changed to:', page)}
              />
            </div>
          </div>
          <p style={{ fontSize: '14px', color: '#5a5b60', marginTop: '12px' }}>
            Selected rows: {selectedRows.length > 0 ? selectedRows.join(', ') : 'None'}. Bulk action buttons are enabled when rows are selected.
          </p>
        </section>

        {/* Empty State */}
        <section style={{ marginBottom: '40px' }}>
          <h2 style={{ fontSize: '24px', fontWeight: 600, color: '#3c3d40', marginBottom: '16px' }}>Empty State</h2>

          <h3 style={{ fontSize: '16px', fontWeight: 500, color: '#3c3d40', marginBottom: '12px' }}>Basic Empty State</h3>
          <EmptyState
            illustration={<Icon name="search" size="xl" />}
            heading="No proposals yet"
            description="When you create proposals, they'll appear here"
          />

          <h3 style={{ fontSize: '16px', fontWeight: 500, color: '#3c3d40', marginTop: '24px', marginBottom: '12px' }}>With Primary Action</h3>
          <EmptyState
            illustration={<Icon name="search" size="xl" />}
            heading="No proposals yet"
            description="Get started by creating your first proposal"
            primaryAction={{
              label: 'Create Proposal',
              onClick: () => alert('Create proposal clicked'),
            }}
          />

          <h3 style={{ fontSize: '16px', fontWeight: 500, color: '#3c3d40', marginTop: '24px', marginBottom: '12px' }}>With Both Actions</h3>
          <EmptyState
            illustration={<Icon name="search" size="xl" />}
            heading="No proposals yet"
            description="Create a new proposal or import existing ones"
            primaryAction={{
              label: 'Create Proposal',
              onClick: () => alert('Create proposal clicked'),
            }}
            secondaryAction={{
              label: 'Import',
              onClick: () => alert('Import clicked'),
            }}
          />
        </section>

        {/* Notification */}
        <section style={{ marginBottom: '40px' }}>
          <h2 style={{ fontSize: '24px', fontWeight: 600, color: '#3c3d40', marginBottom: '16px' }}>Notification</h2>

          <h3 style={{ fontSize: '16px', fontWeight: 500, color: '#3c3d40', marginBottom: '12px' }}>Notification List</h3>
          <div style={{ border: '1px solid #e4e7f5', borderRadius: '8px', overflow: 'hidden', background: '#ffffff' }}>
            <Notification
              avatarInitials="KN"
              title="Proposal accepted"
              description="Neely Family Trust • PROP-1234 • by Kara Neely"
              timestamp="2h ago"
              unread
              onClick={() => alert('Notification clicked')}
            />
            <Notification
              avatarInitials="EK"
              title="Proposal accepted"
              description="Neely Family Trust Corp Inc • PROP-1234 • by Elizabe..."
              timestamp="2h ago"
              unread
              onClick={() => alert('Notification clicked')}
            />
            <Notification
              avatarInitials="NF"
              title="Billing due today"
              description="Neely Family Trust • PROP-1234"
              timestamp="2h ago"
              unread
              onClick={() => alert('Notification clicked')}
            />
          </div>

          <h3 style={{ fontSize: '16px', fontWeight: 500, color: '#3c3d40', marginTop: '24px', marginBottom: '12px' }}>Read Notifications</h3>
          <div style={{ border: '1px solid #e4e7f5', borderRadius: '8px', overflow: 'hidden', background: '#ffffff' }}>
            <Notification
              avatarInitials="AB"
              title="You have a review request"
              description="Twinecho Realty Ltd • PROP-1234 • by David Yines"
              timestamp="4h ago"
              onClick={() => alert('Notification clicked')}
            />
            <Notification
              avatarInitials="CD"
              title="Proposal approved"
              description="Twinecho Realty Ltd • PROP-1234 • by Alina Luc..."
              timestamp="1d ago"
              onClick={() => alert('Notification clicked')}
            />
          </div>
        </section>

        {/* Signature */}
        <section style={{ marginBottom: '40px' }}>
          <h2 style={{ fontSize: '24px', fontWeight: 600, color: '#3c3d40', marginBottom: '16px' }}>Signature</h2>

          <h3 style={{ fontSize: '16px', fontWeight: 500, color: '#3c3d40', marginBottom: '12px' }}>Sizes</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <div>
              <span style={{ fontSize: '12px', color: '#5a5b60', marginBottom: '8px', display: 'block' }}>Small</span>
              <Signature text="Jo Shmo" size="small" />
            </div>
            <div>
              <span style={{ fontSize: '12px', color: '#5a5b60', marginBottom: '8px', display: 'block' }}>Medium</span>
              <Signature text="Jo Shmo" size="medium" />
            </div>
            <div>
              <span style={{ fontSize: '12px', color: '#5a5b60', marginBottom: '8px', display: 'block' }}>Large</span>
              <Signature text="Jo Shmo" size="large" />
            </div>
          </div>

          <h3 style={{ fontSize: '16px', fontWeight: 500, color: '#3c3d40', marginTop: '24px', marginBottom: '12px' }}>In Document</h3>
          <div style={{ padding: '24px', background: '#f0f2fa', borderRadius: '8px' }}>
            <p style={{ fontSize: '14px', color: '#3c3d40', marginBottom: '16px' }}>
              I hereby agree to the terms and conditions outlined in this proposal.
            </p>
            <Signature text="John Doe" size="medium" />
            <p style={{ fontSize: '12px', color: '#5a5b60', marginTop: '8px' }}>
              Signed on: October 31, 2025
            </p>
          </div>
        </section>

        {/* Progress Status */}
        <section style={{ marginBottom: '40px' }}>
          <h2 style={{ fontSize: '24px', fontWeight: 600, color: '#3c3d40', marginBottom: '16px' }}>Progress Status</h2>

          <h3 style={{ fontSize: '16px', fontWeight: 500, color: '#3c3d40', marginBottom: '12px' }}>Color Variants</h3>
          <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap' }}>
            <ProgressStatus label="Label" current={0} total={4} />
            <ProgressStatus label="Label" current={1} total={4} color="yellow" />
            <ProgressStatus label="Label" current={2} total={4} color="yellow" />
            <ProgressStatus label="Label" current={3} total={4} color="yellow" />
            <ProgressStatus label="Label" current={4} total={4} color="yellow" />
          </div>

          <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap', marginTop: '16px' }}>
            <ProgressStatus label="Label" current={1} total={4} color="green" />
            <ProgressStatus label="Label" current={2} total={4} color="green" />
            <ProgressStatus label="Label" current={3} total={4} color="green" />
            <ProgressStatus label="Label" current={4} total={4} color="green" />
          </div>

          <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap', marginTop: '16px' }}>
            <ProgressStatus label="Label" current={1} total={4} color="red" />
            <ProgressStatus label="Label" current={2} total={4} color="red" />
            <ProgressStatus label="Label" current={3} total={4} color="red" />
            <ProgressStatus label="Label" current={4} total={4} color="red" />
          </div>

          <h3 style={{ fontSize: '16px', fontWeight: 500, color: '#3c3d40', marginTop: '24px', marginBottom: '12px' }}>With Counter</h3>
          <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap' }}>
            <ProgressStatus label="Label" current={0} total={4} showCounter />
            <ProgressStatus label="Label" current={1} total={4} color="yellow" showCounter />
            <ProgressStatus label="Label" current={2} total={4} color="green" showCounter />
            <ProgressStatus label="Label" current={3} total={4} color="red" showCounter />
            <ProgressStatus label="Label" current={4} total={4} color="green" showCounter />
          </div>

          <h3 style={{ fontSize: '16px', fontWeight: 500, color: '#3c3d40', marginTop: '24px', marginBottom: '12px' }}>Use Case Example</h3>
          <div style={{ padding: '24px', background: '#f0f2fa', borderRadius: '8px' }}>
            <h4 style={{ fontSize: '16px', fontWeight: 500, color: '#3c3d40', marginBottom: '16px' }}>Project Tasks</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <ProgressStatus label="Design" current={4} total={4} color="green" showCounter />
              <ProgressStatus label="Development" current={2} total={4} color="yellow" showCounter />
              <ProgressStatus label="Testing" current={1} total={4} color="yellow" showCounter />
              <ProgressStatus label="Deployment" current={0} total={4} showCounter />
            </div>
          </div>
        </section>

        {/* Filter */}
        <section style={{ marginBottom: '40px' }}>
          <h2 style={{ fontSize: '24px', fontWeight: 600, color: '#3c3d40', marginBottom: '16px' }}>Filter</h2>

          <h3 style={{ fontSize: '16px', fontWeight: 500, color: '#3c3d40', marginBottom: '12px' }}>Filter Without Value</h3>
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            <Filter
              label="Status"
              value={statusFilter}
              options={['Active', 'Inactive', 'Pending']}
              onApply={(value) => setStatusFilter(value)}
              onRemove={() => setStatusFilter('')}
            />
            <Filter
              label="Type"
              value={typeFilter}
              options={['Client', 'Prospect', 'Partner']}
              onApply={(value) => setTypeFilter(value)}
              onRemove={() => setTypeFilter('')}
            />
            <Filter
              label="Date Range"
              value={dateRangeFilter}
              allowCustomInput
              inputPlaceholder="Enter date range..."
              onApply={(value) => setDateRangeFilter(value)}
              onRemove={() => setDateRangeFilter('')}
            />
          </div>

          <h3 style={{ fontSize: '16px', fontWeight: 500, color: '#3c3d40', marginTop: '24px', marginBottom: '12px' }}>Filter With Value</h3>
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            <Filter
              label="Status"
              value={statusFilterWithValue}
              options={['Active', 'Inactive', 'Pending']}
              onApply={(value) => setStatusFilterWithValue(value)}
              onRemove={() => setStatusFilterWithValue('')}
            />
            <Filter
              label="Type"
              value={typeFilterWithValue}
              options={['Client', 'Prospect', 'Partner']}
              onApply={(value) => setTypeFilterWithValue(value)}
              onRemove={() => setTypeFilterWithValue('')}
            />
            <Filter
              label="Amount"
              value={amountFilter}
              allowCustomInput
              inputPlaceholder="Enter amount..."
              onApply={(value) => setAmountFilter(value)}
              onRemove={() => setAmountFilter('')}
            />
          </div>

          <h3 style={{ fontSize: '16px', fontWeight: 500, color: '#3c3d40', marginTop: '24px', marginBottom: '12px' }}>Filter With Sub Label</h3>
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            <Filter
              subLabel="PROPOSAL"
              label="Status"
              value={proposalStatusFilter}
              options={['Draft', 'Sent', 'Accepted', 'Declined']}
              onApply={(value) => setProposalStatusFilter(value)}
              onRemove={() => setProposalStatusFilter('')}
            />
            <Filter
              subLabel="CLIENT"
              label="Type"
              value={clientTypeFilter}
              options={['Active', 'Inactive']}
              onApply={(value) => setClientTypeFilter(value)}
              onRemove={() => setClientTypeFilter('')}
            />
          </div>

          <h3 style={{ fontSize: '16px', fontWeight: 500, color: '#3c3d40', marginTop: '24px', marginBottom: '12px' }}>Multiple Filters Together</h3>
          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
            <Filter
              label="Status"
              value={multiStatus}
              options={['Active', 'Inactive', 'Pending']}
              onApply={(value) => setMultiStatus(value)}
              onRemove={() => setMultiStatus('')}
            />
            <Filter
              label="Type"
              value={multiType}
              options={['Client', 'Prospect', 'Partner']}
              onApply={(value) => setMultiType(value)}
              onRemove={() => setMultiType('')}
            />
            <Filter
              label="Date"
              value={multiDate}
              options={['Today', 'This Week', 'This Month', 'Custom']}
              onApply={(value) => setMultiDate(value)}
              onRemove={() => setMultiDate('')}
            />
          </div>
        </section>

        {/* Logo */}
        <section style={{ marginBottom: '40px' }}>
          <h2 style={{ fontSize: '24px', fontWeight: 600, color: '#3c3d40', marginBottom: '16px' }}>Logo</h2>

          <h3 style={{ fontSize: '16px', fontWeight: 500, color: '#3c3d40', marginBottom: '12px' }}>Ignition Brand - Icon Only</h3>
          <div style={{
            display: 'flex',
            gap: '20px',
            padding: '20px',
            background: '#f8f8fc',
            borderRadius: '8px',
            alignItems: 'center',
            flexWrap: 'wrap'
          }}>
            <div style={{ padding: '12px', background: 'white', borderRadius: '6px' }}>
              <IgnitionLogo type="icon" variant="spark" />
            </div>
            <div style={{ padding: '12px', background: 'white', borderRadius: '6px' }}>
              <IgnitionLogo type="icon" variant="spark" width={32} height={32} />
            </div>
            <div style={{ padding: '12px', background: 'white', borderRadius: '6px' }}>
              <IgnitionLogo type="icon" variant="spark" width={48} height={48} />
            </div>
          </div>

          <h3 style={{ fontSize: '16px', fontWeight: 500, color: '#3c3d40', marginTop: '24px', marginBottom: '12px' }}>Ignition Brand - Full Logo</h3>
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',
            padding: '20px',
            background: '#f8f8fc',
            borderRadius: '8px'
          }}>
            <div style={{ padding: '12px', background: 'white', borderRadius: '6px', display: 'inline-flex', alignSelf: 'flex-start' }}>
              <IgnitionLogo type="full" variant="positive" />
            </div>
            <div style={{ padding: '12px', background: '#0D3735', borderRadius: '6px', display: 'inline-flex', alignSelf: 'flex-start' }}>
              <IgnitionLogo type="full" variant="nositive" />
            </div>
          </div>

          <h3 style={{ fontSize: '16px', fontWeight: 500, color: '#3c3d40', marginTop: '24px', marginBottom: '12px' }}>Integration Apps</h3>
          <div style={{
            display: 'flex',
            gap: '16px',
            padding: '24px',
            background: 'white',
            border: '1px solid #e4e7f5',
            borderRadius: '8px',
            flexWrap: 'wrap',
            alignItems: 'center'
          }}>
            <AppLogo app="xero" width={56} height={56} />
            <AppLogo app="quickbooks" width={56} height={56} />
            <AppLogo app="karbon" width={56} height={56} />
            <AppLogo app="gusto" width={56} height={56} />
            <AppLogo app="zapier" width={56} height={56} />
            <AppLogo app="intuit" width={56} height={56} />
            <AppLogo app="myob" width={56} height={56} />
            <AppLogo app="slack" width={56} height={56} />
          </div>

          <h3 style={{ fontSize: '16px', fontWeight: 500, color: '#3c3d40', marginTop: '24px', marginBottom: '12px' }}>App Variants</h3>
          <div style={{
            display: 'flex',
            gap: '16px',
            padding: '24px',
            background: 'white',
            border: '1px solid #e4e7f5',
            borderRadius: '8px',
            flexWrap: 'wrap',
            alignItems: 'center'
          }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', alignItems: 'center' }}>
              <AppLogo app="karbon" variant="default" width={56} height={56} />
              <span style={{ fontSize: '11px', color: '#7b7d85' }}>Default</span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', alignItems: 'center' }}>
              <AppLogo app="karbon" variant="icon" width={56} height={56} />
              <span style={{ fontSize: '11px', color: '#7b7d85' }}>Icon</span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', alignItems: 'center' }}>
              <AppLogo app="gusto" variant="fullsize" width={56} height={56} />
              <span style={{ fontSize: '11px', color: '#7b7d85' }}>Full Size</span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', alignItems: 'center' }}>
              <AppLogo app="gusto" variant="small" width={56} height={56} />
              <span style={{ fontSize: '11px', color: '#7b7d85' }}>Small</span>
            </div>
          </div>

          <h3 style={{ fontSize: '16px', fontWeight: 500, color: '#3c3d40', marginTop: '24px', marginBottom: '12px' }}>Payment Methods</h3>
          <div style={{
            display: 'flex',
            gap: '12px',
            padding: '24px',
            background: 'white',
            border: '1px solid #e4e7f5',
            borderRadius: '8px',
            flexWrap: 'wrap',
            alignItems: 'center'
          }}>
            <PaymentMethodLogo method="visa" width={70} height={48} />
            <PaymentMethodLogo method="mastercard" width={70} height={48} />
            <PaymentMethodLogo method="amex" width={70} height={48} />
            <PaymentMethodLogo method="discover" width={70} height={48} />
            <PaymentMethodLogo method="paypal" width={70} height={48} />
            <PaymentMethodLogo method="jcb" width={70} height={48} />
            <PaymentMethodLogo method="diners" width={70} height={48} />
            <PaymentMethodLogo method="unionpay" width={70} height={48} />
            <PaymentMethodLogo method="ach" width={70} height={48} />
            <PaymentMethodLogo method="direct-debit" width={70} height={48} />
            <PaymentMethodLogo method="pre-auth" width={70} height={48} />
          </div>

        </section>

        {/* Support Article Link */}
        <section style={{ marginBottom: '40px' }}>
          <h2 style={{ fontSize: '24px', fontWeight: 600, color: '#3c3d40', marginBottom: '16px' }}>Support Article Link</h2>

          <h3 style={{ fontSize: '16px', fontWeight: 500, color: '#3c3d40', marginBottom: '12px' }}>Text Variant - "Learn more"</h3>
          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', alignItems: 'center' }}>
            <SupportArticleLink href="#" type="text" />
          </div>

          <h3 style={{ fontSize: '16px', fontWeight: 500, color: '#3c3d40', marginTop: '24px', marginBottom: '12px' }}>Icon Variant - Question Mark Icon</h3>
          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', alignItems: 'center' }}>
            <SupportArticleLink href="#" type="icon" />
          </div>

          <h3 style={{ fontSize: '16px', fontWeight: 500, color: '#3c3d40', marginTop: '24px', marginBottom: '12px' }}>In Context</h3>
          <div style={{ padding: '16px', background: '#f8f8ff', borderRadius: '8px' }}>
            <p style={{ fontSize: '14px', color: '#3c3d40', marginBottom: '12px' }}>
              Need help getting started? Check out our comprehensive guide on setting up your account.
            </p>
            <SupportArticleLink href="#" type="text" />
          </div>

          <div style={{ padding: '16px', background: '#f8f8ff', borderRadius: '8px', marginTop: '12px' }}>
            <p style={{ fontSize: '14px', color: '#3c3d40', display: 'flex', alignItems: 'center', gap: '8px' }}>
              For additional help, see our support docs
              <SupportArticleLink href="#" type="icon" />
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}

export default DataDisplayDemo;
