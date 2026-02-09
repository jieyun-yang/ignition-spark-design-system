/**
 * Guided Wizard Demo
 *
 * Showcases multi-step wizard patterns
 */

import { useState } from 'react';
import { Icon } from '../index';
import { IgnitionLogo } from '../components/Card/assets';
import '../../src/App.css';
import styles from './WizardTemplate.module.css';

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
    <div className={`${fixed ? styles.headerFixed : styles.header} ${backgroundColor ? styles.headerWithBg : ''}`}>
      <IgnitionLogo type="full" variant="positive" width={74} height={24} />
      <button onClick={() => setCurrentStep('intro')} className={styles.cancelButton}>
        Cancel
      </button>
    </div>
  );

  const renderIntro = () => {
    // Variant selector for intro page
    const variantSelector = (
      <div className={styles.variantSelector}>
        {(['default', 'simple', 'detailed'] as IntroVariant[]).map((variant) => (
          <button
            key={variant}
            onClick={() => setIntroVariant(variant)}
            className={introVariant === variant ? styles.variantButtonActive : styles.variantButton}
          >
            {variant}
          </button>
        ))}
      </div>
    );

    if (introVariant === 'simple') {
      return (
        <div className={styles.wizardPage}>
          {renderHeader()}
          {variantSelector}
          <div className={styles.introSimple}>
            <h1 className={styles.introHeading}>
              Get Started
            </h1>
            <p className={styles.introDescription}>
              Complete the following steps to set up your account
            </p>
            <button onClick={() => setCurrentStep('form')} className={styles.primaryButton}>
              Continue
            </button>
          </div>
        </div>
      );
    }

    if (introVariant === 'detailed') {
      return (
        <div className={styles.wizardPage}>
          {renderHeader()}
          {variantSelector}
          <div className={styles.introDetailed}>
            {/* Left Content */}
            <div className={styles.introContent}>
              <div>
                <h1 className={styles.introHeading}>
                  Welcome to Your Setup Journey
                </h1>
                <p className={styles.introDescriptionSmall}>
                  We'll guide you through a comprehensive setup process to ensure everything is configured perfectly for your needs.
                </p>
                <div className={styles.infoBox}>
                  <h3 className={styles.infoBoxHeading}>
                    What you'll accomplish:
                  </h3>
                  <ul className={styles.infoBoxList}>
                    <li>Configure your account settings</li>
                    <li>Set up your preferences and notifications</li>
                    <li>Review and customize your dashboard</li>
                    <li>Complete initial data import</li>
                  </ul>
                </div>
              </div>
              <div className={styles.buttonGroup}>
                <button onClick={() => setCurrentStep('form')} className={styles.primaryButton}>
                  Get started
                </button>
                <button className={styles.secondaryButton}>
                  Learn more
                </button>
              </div>
            </div>
            {/* Right Purple Area */}
            <div className={styles.imageArea}>
              <Icon name="copy" size="xl" />
            </div>
          </div>
        </div>
      );
    }

    // Default variant
    return (
      <div className={styles.wizardPage}>
        {renderHeader()}
        {variantSelector}
        <div className={styles.introDefault}>
          {/* Left Content */}
          <div className={styles.introContent}>
            <div>
              <h1 className={styles.introHeading}>
                Lorem ipsum dolor sit amet, consectetur
              </h1>
              <p className={styles.introDescriptionSmall}>
                Adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
              </p>
            </div>
            <div className={styles.buttonGroup}>
              <button onClick={() => setCurrentStep('form')} className={styles.primaryButton}>
                Primary action
              </button>
              <button className={styles.secondaryButton}>
                Secondary action
              </button>
            </div>
          </div>
          {/* Right Purple Area */}
          <div className={styles.imageArea}>
            <Icon name="copy" size="xl" />
          </div>
        </div>
      </div>
    );
  };

  const renderForm = () => (
    <div className={styles.wizardPage}>
      {renderHeader('white')}
      <div className={styles.formLayout}>
        {/* Left Form Area */}
        <div className={styles.formContent}>
          <div className={styles.formInner}>
            {/* Header */}
            <div className={styles.formHeader}>
              <div className={styles.stepLabel}>
                STEP 1
              </div>
              <h2 className={styles.formHeading}>
                Lorem ipsum dolor sit amet, consectetur
              </h2>
              <p className={styles.formDescription}>
                Adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
              </p>
            </div>

            {/* Form Fields */}
            <div className={styles.formFields}>
              <div className={styles.fieldGroup}>
                <div>
                  <div className={styles.fieldLabel}>
                    Label
                  </div>
                  <div className={styles.fieldCaption}>
                    This is a caption
                  </div>
                </div>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Text"
                  className={styles.textInput}
                />
              </div>

              <div className={styles.fieldGroup}>
                <div>
                  <div className={styles.fieldLabel}>
                    Label
                  </div>
                  <div className={styles.fieldCaption}>
                    This is a caption
                  </div>
                </div>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="Text"
                  className={styles.textInput}
                />
              </div>
            </div>

            {/* Footer with Navigation */}
            <div className={styles.navigationFooter}>
            <button
              onClick={() => setCurrentStep('intro')}
              className={styles.backButton}
              aria-label="Previous step"
            >
              <Icon name="chevron-left" variant="solid" size="sm" />
            </button>
            <div className={styles.progressDots}>
              <div className={styles.dotActive} />
              <div className={styles.dot} />
              <div className={styles.dot} />
            </div>
            <button
              onClick={() => setCurrentStep('table')}
              className={styles.nextButton}
            >
              Next
              <Icon name="chevron-right" variant="solid" size="sm" />
            </button>
            </div>
          </div>
        </div>
        {/* Right Image Area */}
        <div className={styles.imageAreaGray}>
          <Icon name="copy" size="xl" />
        </div>
      </div>
    </div>
  );


  const renderTable = () => (
    <div className={styles.wizardPage} style={{ minHeight: '100vh', paddingBottom: '88px' }}>
      {renderHeader('white', true)}
      <div className={styles.tableContainer}>
        <div className={styles.tableWrapper}>
          {/* Header */}
          <div className={styles.tableHeader}>
            <div className={styles.stepLabel}>
              STEP 1
            </div>
            <h2 className={styles.formHeading}>
              Lorem ipsum dolor sit amet, consectetur
            </h2>
            <p className={styles.formDescription}>
              Adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
            </p>
          </div>

          {/* Table */}
          <div className={styles.tableCard}>
            <table className={styles.dataTable}>
              <thead>
                <tr className={styles.tableHeaderRow}>
                  <th className={styles.tableHeaderCell}>CLIENT</th>
                  <th className={styles.tableHeaderCell}>SERVICE</th>
                  <th className={styles.tableHeaderCell}>BILLING</th>
                  <th className={styles.tableHeaderCell}>ORIGINAL PRICE</th>
                  <th className={styles.tableHeaderCell}>NEW PRICE</th>
                  <th className={styles.tableHeaderCellRight}>% CHANGE</th>
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
                  <tr key={index} className={styles.tableRow}>
                    <td className={styles.tableCellBold}>
                      <div>{row.client}</div>
                      <div className={styles.tableCellSubtext}>PROP-123 Accounting</div>
                    </td>
                    <td className={styles.tableCell}>{row.service}</td>
                    <td className={styles.tableCell}>{row.billing}</td>
                    <td className={styles.tableCellMuted}>{row.price}</td>
                    <td className={styles.tableCell}>
                      <input
                        type="text"
                        defaultValue={row.newPrice}
                        className={styles.priceInput}
                      />
                    </td>
                    <td className={styles.tableCellSuccess}>↗ 10%</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

        </div>
      </div>

      {/* Fixed Footer with Navigation */}
      <div className={styles.navigationFooterFixed}>
            <button
              onClick={() => setCurrentStep('form')}
              className={styles.backButton}
              aria-label="Previous step"
            >
              <Icon name="chevron-left" variant="solid" size="sm" />
            </button>
            <div className={styles.progressDots}>
              <div className={styles.dot} />
              <div className={styles.dotActive} />
              <div className={styles.dot} />
            </div>
            <button
              onClick={() => {
                setCurrentStep('loading');
                setTimeout(() => setCurrentStep('transition'), 2000);
              }}
              className={styles.nextButton}
            >
              Next
              <Icon name="chevron-right" variant="solid" size="sm" />
            </button>
      </div>
    </div>
  );

  const renderLoading = () => {
    // Variant selector for loading page
    const variantSelector = (
      <div className={styles.variantSelector}>
        {(['default', 'progress'] as LoadingVariant[]).map((variant) => (
          <button
            key={variant}
            onClick={() => setLoadingVariant(variant)}
            className={loadingVariant === variant ? styles.variantButtonActive : styles.variantButton}
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
        <div className={styles.wizardPage}>
          {renderHeader()}
          {variantSelector}
          <div className={styles.loadingContainer}>
            {/* Progress bar with label */}
            <div className={styles.progressSection}>
              <div className={styles.progressBar}>
                <div className={styles.progressFill} style={{ width: `${progress}%` }} />
              </div>
              <p className={styles.progressLabel}>
                Progress update...
              </p>
            </div>

            {/* Heading and description */}
            <div className={styles.progressContent}>
              <h1 className={styles.loadingHeading}>
                Lorem ipsum dolor sit amet, consectetur
              </h1>
              <p className={styles.transitionDescription}>
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
              className={styles.simulateButton}
            >
              {progress < 100 ? 'Simulate Progress (+25%)' : 'Reset Progress'}
            </button>
          </div>
        </div>
      );
    }

    // Default variant
    return (
      <div className={styles.wizardPage}>
        {renderHeader()}
        {variantSelector}
        <div className={styles.loadingContainerDefault}>
          <div className={styles.spinner} />
          <h2 className={styles.loadingHeading}>
            Lorem ipsum dolor sit amet, consectetur
          </h2>
          <p className={styles.loadingDescription}>
            Adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
          </p>
        </div>
      </div>
    );
  };

  const renderTransition = () => {
    // Variant selector for transition page
    const variantSelector = (
      <div className={styles.variantSelector}>
        {(['display1-false', 'display1-true', 'display2-false', 'display2-true'] as TransitionVariant[]).map((variant) => (
          <button
            key={variant}
            onClick={() => setTransitionVariant(variant)}
            className={transitionVariant === variant ? styles.variantButtonActive : styles.variantButton}
            style={{ fontSize: '11px' }}
          >
            {variant}
          </button>
        ))}
      </div>
    );

    // Footer component used in all variants
    const footer = (
      <div className={styles.footerActions}>
        <button
          onClick={() => setCurrentStep('intro')}
          className={styles.primaryActionButton}
        >
          Primary Action
        </button>
        <div className={styles.disclaimerRow}>
          <span className={styles.disclaimerText}>
            Disclaimer
          </span>
          <button
            onClick={() => {}}
            className={styles.disclaimerButton}
          >
            Action
          </button>
        </div>
      </div>
    );

    // Display 1, Visual background = False
    if (transitionVariant === 'display1-false') {
      return (
        <div className={styles.wizardPage}>
          {renderHeader()}
          {variantSelector}
          <div className={styles.transitionContainer}>
            <div className={styles.transitionContent}>
              <div className={styles.transitionTextContent}>
                <h1 className={styles.transitionHeading}>
                  Lorem ipsum dolor sit amet, consectetur
                </h1>
                <p className={styles.transitionDescription}>
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
        <div className={styles.wizardPage} style={{ paddingTop: 0 }}>
          {renderHeader()}
          {variantSelector}

          {/* Decorative paper plane background */}
          <div className={styles.decorativeBackground}>
            <div className={styles.decorativePlane}>
              <Icon name="copy" size="xl" />
            </div>
          </div>

          <div className={styles.transitionContainerWithBg}>
            <div className={styles.transitionContent}>
              <div className={styles.transitionTextContent}>
                <h1 className={styles.transitionHeading}>
                  Lorem ipsum dolor sit amet, consectetur
                </h1>
                <p className={styles.transitionDescription}>
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
        <div className={styles.wizardPage}>
          {renderHeader()}
          {variantSelector}
          <div className={styles.transitionContainer}>
            <div className={styles.transitionContent}>
              <div className={styles.transitionTextContentStart}>
                {/* Icon container */}
                <div className={styles.iconContainer}>
                  <div className={styles.iconBox}>
                    <Icon name="copy" size="xl" />
                  </div>
                </div>

                {/* Text */}
                <div className={styles.transitionTextContent}>
                  <h1 className={styles.transitionHeadingMedium}>
                    Lorem ipsum dolor sit amet, consectetur
                  </h1>
                  <p className={styles.transitionDescriptionSmall}>
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
      <div className={styles.wizardPage} style={{ paddingTop: 0 }}>
        {renderHeader()}
        {variantSelector}

        {/* Decorative paper plane background */}
        <div className={styles.decorativeBackground}>
          <div className={styles.decorativePlane}>
            <Icon name="copy" size="xl" />
          </div>
        </div>

        <div className={styles.transitionContainerWithBg}>
          <div className={styles.transitionContent}>
            <div className={styles.transitionTextContent} style={{ gap: '8px' }}>
              <h1 className={styles.transitionHeadingMedium}>
                Lorem ipsum dolor sit amet, consectetur
              </h1>
              <p className={styles.transitionDescriptionSmall}>
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
      <div className={styles.pageNavigator}>
        <div className={styles.pageNavigatorTitle}>
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
            className={currentStep === key ? styles.pageNavButtonActive : styles.pageNavButton}
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
