/**
 * Proposal Editor Template
 *
 * Multi-step wizard for creating and editing proposals.
 * Steps: General > Services > Payments > Terms > Presentation > Send
 *
 * Matches layout from demo.ignitionapp.com
 */

import { useState } from 'react';
import {
  Accordion,
  Badge,
  Button,
  Link,
  Switch,
  Select,
  Icon,
  EmptyState,
  Table,
  Tabs,
  CheckboxCard,
  Illustration,
} from '../index';
import type { TableColumn } from '../index';
import styles from './ProposalEditorTemplate.module.css';

type ProposalStep = 'general' | 'services' | 'payments' | 'terms' | 'presentation' | 'send';

interface StepConfig {
  id: ProposalStep;
  number: number;
  label: string;
}

const STEPS: StepConfig[] = [
  { id: 'general', number: 1, label: 'General' },
  { id: 'services', number: 2, label: 'Services' },
  { id: 'payments', number: 3, label: 'Payments' },
  { id: 'terms', number: 4, label: 'Terms' },
  { id: 'presentation', number: 5, label: 'Presentation' },
  { id: 'send', number: 6, label: 'Send' },
];

const MINIMUM_LENGTH_OPTIONS = [
  { value: '1', label: '1 month' },
  { value: '3', label: '3 months' },
  { value: '6', label: '6 months' },
  { value: '12', label: '12 months' },
  { value: '24', label: '24 months' },
  { value: '36', label: '36 months' },
];

function ProposalEditorTemplate() {
  const [currentStep, setCurrentStep] = useState<ProposalStep>('general');
  const [proposalName, setProposalName] = useState('Untitled Proposal');
  const [autoExpire, setAutoExpire] = useState(true);
  const [expireDays, setExpireDays] = useState('14');
  const [startDateOption, setStartDateOption] = useState<'acceptance' | 'specific'>('acceptance');
  const [minimumLength, setMinimumLength] = useState('12');
  const [hasServices, setHasServices] = useState(false);
  const [showProposalOptions, setShowProposalOptions] = useState(false);
  const [creditCardEnabled, setCreditCardEnabled] = useState(true);
  const [directDebitEnabled, setDirectDebitEnabled] = useState(true);
  const [requirePayment, setRequirePayment] = useState(true);
  const [termsTemplate, setTermsTemplate] = useState('standard');
  const [presentationTab, setPresentationTab] = useState('introduction');

  const currentStepIndex = STEPS.findIndex(s => s.id === currentStep);

  const handleNext = () => {
    const nextIndex = currentStepIndex + 1;
    if (nextIndex < STEPS.length) {
      setCurrentStep(STEPS[nextIndex].id);
    }
  };

  const handleStepClick = (stepId: ProposalStep) => {
    setCurrentStep(stepId);
  };

  // Header with breadcrumb and actions
  const renderHeader = () => (
    <header className={styles.header}>
      <div className={styles.headerLeft}>
        <nav className={styles.breadcrumb}>
          <span className={styles.breadcrumbItem}>New proposal</span>
          <Icon name="chevron-right" className={styles.breadcrumbSeparator} />
          <div className={styles.proposalTitle}>
            <span className={styles.proposalTitleText}>{proposalName}</span>
            <button className={styles.editButton} aria-label="Edit proposal name">
              <Icon name="pen" />
            </button>
          </div>
          <Badge variant="yellow">New</Badge>
        </nav>
      </div>
      <div className={styles.headerRight}>
        <div className={styles.headerStatus}>
          <span className={styles.attachDeal}>
            No attached deal <a className={styles.attachLink}>Attach</a>
          </span>
          <span className={styles.saveStatus}>Not saved</span>
        </div>
        <div className={styles.headerActions}>
          <Button hierarchy="secondary" variant="ghost" iconRight={<Icon name="arrow-up-right-from-square" />}>
            Preview
          </Button>
          <Button hierarchy="secondary" variant="solid" iconRight={<Icon name="chevron-down" />}>
            Templates
          </Button>
          <Button hierarchy="secondary" variant="solid" iconRight={<Icon name="chevron-down" />}>
            Save &amp; close
          </Button>
        </div>
      </div>
    </header>
  );

  // Step navigation
  const renderStepNav = () => (
    <nav className={styles.stepNav}>
      <div className={styles.stepList}>
        {STEPS.map((step, index) => {
          const isActive = step.id === currentStep;
          const isCompleted = index < currentStepIndex;

          return (
            <div key={step.id} className={styles.stepItem}>
              {index > 0 && (
                <div className={`${styles.stepConnector} ${isCompleted ? styles.stepConnectorCompleted : ''}`} />
              )}
              <button
                className={`${styles.stepButton} ${isActive ? styles.stepButtonActive : ''} ${isCompleted ? styles.stepButtonCompleted : ''}`}
                onClick={() => handleStepClick(step.id)}
              >
                <span className={styles.stepNumber}>{step.number}</span>
                <span className={styles.stepLabel}>{step.label}</span>
              </button>
            </div>
          );
        })}
      </div>
      <div className={styles.nextButton}>
        <Button
          hierarchy="primary"
          variant="solid"
          iconRight={<Icon name="chevron-right" />}
          onClick={handleNext}
        >
          Next
        </Button>
      </div>
    </nav>
  );

  // General step content
  const renderGeneralStep = () => (
    <div className={styles.stepContent}>
      {/* Proposal Section */}
      <section className={styles.formSection}>
        <h3 className={styles.sectionTitle}>Proposal</h3>

        <div className={styles.formGroup}>
          <label className={styles.fieldLabel}>Proposal name</label>
          <span className={styles.fieldHint}>This name won't be shown to clients</span>
          <div className={styles.inputWithCounter}>
            <input
              type="text"
              value={proposalName}
              onChange={(e) => setProposalName(e.target.value)}
              placeholder="Enter a proposal name"
            />
            <span className={styles.characterCount}>{proposalName.length}</span>
          </div>
        </div>

        <div className={styles.formGroup}>
          <div className={styles.switchRow}>
            <Switch
              checked={autoExpire}
              onChange={setAutoExpire}
            />
            <span className={styles.switchLabel}>Proposal auto-expires</span>
            <div className={styles.daysInputGroup}>
              <input
                type="number"
                className={styles.daysInput}
                value={expireDays}
                onChange={(e) => setExpireDays(e.target.value)}
                disabled={!autoExpire}
              />
              <span className={styles.daysLabel}>days</span>
            </div>
            <span className={styles.afterSending}>after sending</span>
            <button className={styles.infoButton} aria-label="More info">
              <Icon name="circle-info" />
            </button>
          </div>
        </div>
      </section>

      {/* Client Section */}
      <section className={styles.formSection}>
        <h3 className={styles.sectionTitle}>Client</h3>

        <div className={styles.formGroup}>
          <label className={styles.fieldLabel}>Client</label>
          <span className={styles.fieldHint}>Who this proposal is for</span>
          <div className={styles.selectWrapper}>
            <Select
              value=""
              onChange={() => {}}
              options={[]}
              placeholder="Start typing to search clients..."
            />
          </div>
        </div>
      </section>

      {/* Contract Section */}
      <section className={styles.formSection}>
        <h3 className={styles.sectionTitle}>Contract</h3>

        <div className={styles.formGroup}>
          <label className={styles.fieldLabel}>Start date</label>
          <span className={styles.fieldHint}>When this contract comes into effect</span>
          <div className={styles.radioGroup}>
            <button
              className={`${styles.radioOption} ${startDateOption === 'acceptance' ? styles.radioOptionSelected : ''}`}
              onClick={() => setStartDateOption('acceptance')}
            >
              On acceptance
            </button>
            <button
              className={`${styles.radioOption} ${startDateOption === 'specific' ? styles.radioOptionSelected : ''}`}
              onClick={() => setStartDateOption('specific')}
            >
              On a specific date
            </button>
          </div>
        </div>

        <div className={styles.formGroup}>
          <label className={styles.fieldLabel}>Minimum contract length</label>
          <span className={styles.fieldHint}>How long this contract will be in effect for</span>
          <div className={styles.selectWrapper}>
            <Select
              value={minimumLength}
              onChange={(val) => setMinimumLength(val as string)}
              options={MINIMUM_LENGTH_OPTIONS}
            />
          </div>
        </div>

        <div className={styles.formGroup}>
          <label className={styles.fieldLabel}>Minimum contract term</label>
          <div className={styles.contractTerm}>
            <div className={styles.contractTermDate}>9 Feb 2026 - 8 Feb 2027</div>
            <div className={styles.contractTermExplanation}>
              If accepted today, this contract will <strong>start 9 Feb 2026</strong> and <strong>end 8 Feb 2027</strong>.
            </div>
          </div>
        </div>
      </section>
    </div>
  );

  // Placeholder for other steps
  const renderStepPlaceholder = (stepName: string) => (
    <div className={styles.stepContent}>
      <div className={styles.placeholder}>
        <h2>{stepName}</h2>
        <p>Content for {stepName} step will be added here.</p>
      </div>
    </div>
  );

  // Payments step content
  const renderPaymentsStep = () => (
    <div className={styles.stepContent}>
      <section className={styles.formSection}>
        <h3 className={styles.sectionTitle}>Payments</h3>

        <div className={styles.formGroup}>
          <label className={styles.fieldLabel}>How the client can pay</label>
          <span className={styles.fieldHint}>
            Only available payment methods will be shown to the client.
          </span>
          <div className={styles.paymentCardsRow}>
            <CheckboxCard
              title="Credit/Debit card"
              description="Confirmed instantly then paid in 1-2 business days"
              icon="lock"
              checked={creditCardEnabled}
              onChange={setCreditCardEnabled}
            />
            <CheckboxCard
              title="Direct Debit"
              description="Confirmed and paid in 3-5 business days"
              icon="lock"
              checked={directDebitEnabled}
              onChange={setDirectDebitEnabled}
            />
          </div>
          {creditCardEnabled && (
            <div className={styles.paymentBadgeRow}>
              <Badge variant="green" size="small">Card processing fees off</Badge>
            </div>
          )}
        </div>

        <div className={styles.formGroup}>
          <div className={styles.switchRow}>
            <Switch
              checked={requirePayment}
              onChange={setRequirePayment}
            />
            <div className={styles.switchContent}>
              <label className={styles.fieldLabel}>Require client to pay</label>
              <span className={styles.fieldHint}>
                Client must provide payment details to accept
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );

  // Terms step content
  const renderTermsStep = () => (
    <div className={styles.stepContent}>
      <section className={styles.formSection}>
        <h3 className={styles.sectionTitle}>Terms</h3>

        <p className={styles.sectionDescription}>
          Terms outline the agreement with your client. You can add dynamic content using placeholders.
        </p>

        <div className={styles.formGroup}>
          <label className={styles.fieldLabel}>Template</label>
          <div className={styles.selectWrapper}>
            <Select
              value={termsTemplate}
              onChange={(val) => setTermsTemplate(val as string)}
              options={[
                { value: 'standard', label: 'Industry Standard Engagement Terms' },
                { value: 'custom', label: 'Custom Terms' },
              ]}
            />
          </div>
        </div>

        <div className={styles.termsPreview}>
          <pre className={styles.termsPreviewCode}>{`{% if client.name == contact.name %}
Client name: No data available
Client address: No data available
{% else %}
Contact name: No data available
Client name: No data available
Client address: No data available
{% endif %}

Dear contact.addressee | default: contact.name,

ENGAGEMENT LETTER – Practice name: Clear Counts Accounting PTY LTD and Client name: No data available

This is to confirm our understanding of the terms and objectives of our engagement and the nature and limitations of the services Practice name: Clear Counts Accounting PTY LTD will provide.`}</pre>
        </div>
      </section>
    </div>
  );

  // Send step content
  const renderSendStep = () => (
    <div className={styles.stepContent}>
      {/* Send proposal section */}
      <section className={styles.formSection}>
        <h3 className={styles.sectionTitle}>Send proposal</h3>
        <p className={styles.sectionDescription}>
          Who receives this proposal when emailed. For more ways to send, click the arrow next to Send via email.
        </p>
        <div className={styles.sendSectionBody}>
          <div className={styles.sendIllustration}>
            <Illustration name="product-proposal-sent" size="small" />
          </div>
          <div className={styles.sendInfoRows}>
            <div className={styles.sendInfoRow}>
              <span className={styles.sendInfoLabel}>SENDING</span>
              <span className={styles.sendInfoValue}>
                &ldquo;Untitled proposal&rdquo; to Sue Smith
              </span>
            </div>
            <div className={styles.sendInfoRow}>
              <span className={styles.sendInfoLabel}>SIGNATORY</span>
              <span className={styles.sendInfoValue}>
                Sue Smith (sue.smith@sales.com)
                <Badge variant="blue" size="tiny">Primary</Badge>
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Contract section */}
      <section className={styles.formSection}>
        <h3 className={styles.sectionTitle}>Contract</h3>
        <p className={styles.sectionDescription}>
          Services offered, contract duration and start date.
        </p>
        <div className={styles.sendSectionBody}>
          <div className={styles.sendIllustration}>
            <Illustration name="product-proposal-add-service" size="small" />
          </div>
          <div className={styles.sendInfoRows}>
            <div className={styles.sendInfoRow}>
              <span className={styles.sendInfoLabel}>DURATION</span>
              <span className={styles.sendInfoValue}>
                12 month contract for Aceable Inc, starting on acceptance
              </span>
            </div>
            <div className={styles.sendInfoRow}>
              <span className={styles.sendInfoLabel}>SERVICES</span>
              <span className={styles.sendInfoValueError}>No services added</span>
            </div>
            <div className={styles.sendInfoRow}>
              <span className={styles.sendInfoLabel}>BILLING</span>
              <span className={styles.sendInfoValue}>&ndash;</span>
            </div>
          </div>
        </div>
      </section>

      {/* What happens after you send section */}
      <section className={styles.formSection}>
        <h3 className={styles.sectionTitle}>What happens after you send</h3>
        <p className={styles.sectionDescription}>
          What the client receives, based on your account settings and their custom email settings.
        </p>
        <div className={styles.sendSectionBody}>
          <div className={styles.sendIllustration}>
            <Illustration name="product-proposal-payment-methods" size="small" />
          </div>
          <div className={styles.sendEventsList}>
            <div className={styles.sendEventItem}>
              <Icon name="bell" />
              <span>If not signed after 3 days, a reminder email is sent</span>
            </div>
            <div className={styles.sendEventItem}>
              <Icon name="sliders" />
              <span>Once signed, your client sees the next steps page in this proposal</span>
            </div>
            <div className={styles.sendEventItem}>
              <Icon name="circle-check" />
              <span>When an invoice is raised, the client is notified by email</span>
            </div>
            <div className={styles.sendEventItem}>
              <Icon name="check" />
              <span>When each invoice is paid, the client is also notified by email</span>
            </div>
            <div className={styles.sendEventItem}>
              <Icon name="circle-info" />
              <span>When the contract is up for renewal, you&apos;ll be notified in Ignition</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );

  // Services step content
  const renderServicesStep = () => {
    if (!hasServices) {
      // Empty state
      return (
        <div className={styles.stepContent}>
          <section className={styles.formSection}>
            <h3 className={styles.sectionTitle}>Services</h3>
            <div className={styles.servicesEmptyState}>
              <EmptyState
                illustration="product-proposal-add-service"
                heading="Add services to your proposal"
                description="Select services from your Services library and customize it for the client."
                size="medium"
              />
              <Button
                hierarchy="primary"
                variant="solid"
                iconLeft={<Icon name="plus" />}
                onClick={() => setHasServices(true)}
              >
                Add service
              </Button>
            </div>
          </section>
        </div>
      );
    }

    // Filled state
    const monthlyServices: {
      name: string;
      priceType: string;
      price: string;
      quantity: string;
      billingMode: string;
      optional: boolean;
    }[] = [
      {
        name: 'Service name',
        priceType: 'Fixed',
        price: '$900',
        quantity: 'Qty 1',
        billingMode: 'Automatic',
        optional: false,
      },
      {
        name: 'Tax Preparation Services',
        priceType: 'Minimum price',
        price: '$900',
        quantity: '',
        billingMode: 'Automatic',
        optional: false,
      },
    ];

    const serviceColumns: TableColumn<typeof monthlyServices[0]>[] = [
      {
        key: 'name',
        label: 'SERVICE',
        render: (row) => (
          <div className={styles.serviceNameCell}>
            <span className={styles.serviceName}>{row.name}</span>
            <span className={styles.servicePriceType}>{row.priceType}</span>
          </div>
        ),
      },
      {
        key: 'price',
        label: 'PRICE',
        width: '120px',
        render: (row) => (
          <div className={styles.servicePriceCell}>
            <span className={styles.servicePrice}>{row.price}</span>
            {row.quantity && (
              <span className={styles.serviceQuantity}>{row.quantity}</span>
            )}
          </div>
        ),
      },
      {
        key: 'billingMode',
        label: 'BILLING MODE',
        width: '160px',
        render: (row) => (
          <div className={styles.billingModeCell}>
            <Select
              value={row.billingMode.toLowerCase()}
              onChange={() => {}}
              options={[
                { value: 'automatic', label: 'Automatic' },
                { value: 'manual', label: 'Manual' },
              ]}
            />
          </div>
        ),
      },
      {
        key: 'optional',
        label: 'OPTIONAL',
        width: '80px',
        align: 'center' as const,
        render: (row) => (
          <Switch checked={row.optional} onChange={() => {}} />
        ),
      },
    ];

    return (
      <div className={styles.stepContent}>
        {/* Header with toggle and action buttons */}
        <div className={styles.servicesHeader}>
          <div className={styles.servicesHeaderRight}>
            <span className={styles.servicesHeaderLabel}>Show proposal options</span>
            <Switch
              checked={showProposalOptions}
              onChange={setShowProposalOptions}
            />
          </div>
          <div className={styles.servicesHeaderActions}>
            <Button hierarchy="secondary" variant="solid" iconLeft={<Icon name="sliders" />}>
              Price insights
            </Button>
            <Button hierarchy="secondary" variant="solid">
              Tax rates
            </Button>
          </div>
        </div>

        {/* Add project link */}
        <div className={styles.addProjectRow}>
          <Button
            hierarchy="primary"
            variant="text"
            iconLeft={<Icon name="plus" />}
          >
            ADD PROJECT
          </Button>
        </div>

        {/* Services billed every month */}
        <section className={styles.formSection}>
          <div className={styles.servicesSectionHeader}>
            <h3 className={styles.servicesSectionTitle}>
              Services billed{' '}
              <span className={styles.servicesGreenText}>every month</span>
            </h3>
            <div className={styles.servicesBillingDates}>
              Billing starts: 9 Feb 2026 &middot; end date: 8 Feb 2027
            </div>
          </div>

          <Table
            columns={serviceColumns}
            data={monthlyServices}
            getRowKey={(_, index) => index.toString()}
          />

          <div className={styles.servicesAddRow}>
            <Button
              hierarchy="primary"
              variant="text"
              iconLeft={<Icon name="plus" />}
            >
              Add another service
            </Button>
          </div>

          <div className={styles.servicesSubtotal}>
            <span className={styles.subtotalLabel}>
              Subtotal excl. sales tax and extras:
            </span>
            <span className={styles.subtotalValue}>$300.00</span>
          </div>
        </section>

        {/* Services billed at other times */}
        <section className={styles.formSection}>
          <div className={styles.servicesSectionHeader}>
            <h3 className={styles.servicesSectionTitle}>
              Services billed at other times
            </h3>
            <p className={styles.servicesSectionDescription}>
              Services billed off the, on transaction, quarterly, or with a deposit
            </p>
          </div>
          <Button
            hierarchy="primary"
            variant="solid"
            iconLeft={<Icon name="plus" />}
          >
            Add service
          </Button>
        </section>

        {/* Add project link (bottom) */}
        <div className={styles.addProjectRow}>
          <Button
            hierarchy="primary"
            variant="text"
            iconLeft={<Icon name="plus" />}
          >
            ADD PROJECT
          </Button>
        </div>

        {/* Footer info */}
        <div className={styles.servicesFooter}>
          <div className={styles.servicesFooterRow}>
            <span className={styles.servicesFooterLabel}>
              Minimum value
              <button className={styles.infoButton} aria-label="More info about minimum value">
                <Icon name="circle-info" />
              </button>
            </span>
            <span className={styles.servicesFooterValue}>$3,600.00</span>
          </div>
          <div className={styles.servicesFooterLinks}>
            <button className={styles.servicesFooterLink}>Rounding</button>
            <button className={styles.servicesFooterLink}>Apply price increase</button>
          </div>
        </div>
      </div>
    );
  };

  // Presentation step content
  const renderPresentationStep = () => {
    const previewTabs = [
      { id: 'introduction', label: 'Introduction' },
      { id: 'services', label: 'Services' },
      { id: 'pricing', label: 'Pricing' },
      { id: 'terms', label: 'Terms' },
      { id: 'nextsteps', label: 'Next steps' },
    ];

    return (
      <div className={styles.presentationLayout}>
        {/* Left Column - Editor */}
        <div className={styles.presentationEditor}>
          <Accordion
            heading="Introduction page"
            subheading="Add a message, video or brochure"
            defaultExpanded
          >
            <div className={styles.presentationFormGroup}>
              <label className={styles.fieldLabel}>Display message from</label>
              <Select
                value="asdf"
                onChange={() => {}}
                options={[
                  { value: 'asdf', label: 'asdf <jieyun.yang+75@ignitionapp.com>' },
                ]}
              />
            </div>

            <div className={styles.presentationFormGroup}>
              <div className={styles.fieldLabelRow}>
                <label className={styles.fieldLabel}>Message template</label>
                <button className={styles.infoButton} aria-label="More info about message templates">
                  <Icon name="circle-info" />
                </button>
              </div>
              <Select
                value=""
                onChange={() => {}}
                options={[]}
                placeholder="Search or select template"
              />
            </div>

            {/* Rich text editor */}
            <div className={styles.richTextEditor}>
              <div className={styles.richTextToolbar}>
                <select className={styles.toolbarSelect}>
                  <option>Paragraph</option>
                </select>
                <div className={styles.toolbarDivider} />
                <button className={styles.toolbarButton} aria-label="Bold"><strong>B</strong></button>
                <button className={styles.toolbarButton} aria-label="Italic"><em>I</em></button>
                <button className={`${styles.toolbarButton} ${styles.toolbarButtonUnderline}`} aria-label="Underline">U</button>
                <button className={styles.toolbarButton} aria-label="Insert link"><span className={styles.toolbarIconText}>&#128279;</span></button>
                <div className={styles.toolbarDivider} />
                <button className={styles.toolbarButton} aria-label="Align left"><span className={styles.toolbarIconText}>&#9776;</span></button>
                <button className={styles.toolbarButton} aria-label="Ordered list"><span className={styles.toolbarIconText}>1.</span></button>
                <button className={styles.toolbarButton} aria-label="Unordered list"><span className={styles.toolbarIconText}>&bull;</span></button>
                <button className={styles.toolbarButton} aria-label="Quote"><span className={styles.toolbarIconText}>&ldquo;</span></button>
                <div className={styles.toolbarDivider} />
                <button className={styles.toolbarButton} aria-label="Undo"><span className={styles.toolbarIconText}>&#8630;</span></button>
                <button className={styles.toolbarButton} aria-label="Redo"><span className={styles.toolbarIconText}>&#8631;</span></button>
              </div>
              <div className={styles.richTextContent}>
                <p>
                  Hi <span className={styles.templateVariable}>contact.addressee | default:contact.name</span>,
                </p>
                <p>
                  Here&apos;s our proposal for you to review and sign based on an assessment of your current wants and needs.
                </p>
                <p>
                  The review acceptance flow is very intuitive and will allow you to step through the services proposed, the scope, and an outline of when those services will be provided. We would also draw your attention to any included service terms as any fixed prices quoted will be conditional...
                </p>
              </div>
            </div>

            <div className={styles.presentationFormActions}>
              <Button hierarchy="secondary" variant="solid" size="small">
                Save as template
              </Button>
            </div>

            {/* Introduction video subsection */}
            <div className={styles.presentationSubsection}>
              <label className={styles.fieldLabel}>Introduction video</label>
              <span className={styles.fieldHint}>
                Embed a Loom, YouTube or Vimeo video.{' '}
                <Link href="#" variant="small">Learn more</Link>
              </span>
              <Button hierarchy="secondary" variant="solid" size="small">
                Add video
              </Button>
            </div>

            {/* Brochure subsection */}
            <div className={styles.presentationSubsection}>
              <label className={styles.fieldLabel}>Brochure (PDF)</label>
              <span className={styles.fieldHint}>
                Add a brochure to your proposal to provide additional marketing or supportive content to your client.
              </span>
              <Button hierarchy="secondary" variant="solid" size="small">
                Select or upload brochure
              </Button>
            </div>
          </Accordion>

          <Accordion
            heading="Pricing page"
            subheading="Change how services and prices display"
          >
            <p className={styles.sectionDescription}>Pricing page settings will appear here.</p>
          </Accordion>

          <Accordion heading="Next steps page">
            <p className={styles.sectionDescription}>Next steps page settings will appear here.</p>
          </Accordion>
        </div>

        {/* Right Column - Preview */}
        <div className={styles.presentationPreview}>
          <div className={styles.previewSticky}>
            <Tabs
              tabs={previewTabs}
              activeTab={presentationTab}
              onTabChange={setPresentationTab}
            />
            <div className={styles.previewCard}>
              <div className={styles.previewTopBorder} />
              <div className={styles.previewHeader}>
                <h2 className={styles.previewClientName}>Space Ranger (demo client)</h2>
                <div className={styles.previewHeaderMeta}>
                  <span>asdf</span>
                  <span>Starting on acceptance</span>
                </div>
              </div>
              <div className={styles.previewBody}>
                <h3 className={styles.previewHeading}>asdf</h3>
                <p>Hi Space Ranger (demo client),</p>
                <p>
                  Here&apos;s our proposal for you to review and sign based on an assessment of your current wants and needs.
                </p>
                <p>
                  The review acceptance flow is very intuitive and will allow you to step through the services proposed, the scope, and an outline of when those services will be provided. We would also draw your attention to any included service terms as any fixed prices quoted will be conditional on these terms being met.
                </p>
                <p>
                  You&apos;ll also be taken through the pricing schedule which outlines our prices for those services.
                </p>
                <p>
                  If this proposal includes options you can review each option by clicking &lsquo;Select&rsquo; &ndash; your choice does not become final until you electronically sign the proposal at the final step.
                </p>
                <p>If you have any queries please let us know.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const renderCurrentStep = () => {
    switch (currentStep) {
      case 'general':
        return renderGeneralStep();
      case 'services':
        return renderServicesStep();
      case 'payments':
        return renderPaymentsStep();
      case 'terms':
        return renderTermsStep();
      case 'presentation':
        return renderPresentationStep();
      case 'send':
        return renderSendStep();
      default:
        return null;
    }
  };

  return (
    <div className={styles.proposalEditor}>
      {renderHeader()}
      {renderStepNav()}
      <main className={styles.main}>
        {renderCurrentStep()}
      </main>
    </div>
  );
}

export default ProposalEditorTemplate;
