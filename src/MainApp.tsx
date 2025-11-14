/**
 * Main App with Navigation
 * Refactored to use design system components and tokens
 */

import { useState } from 'react';
import FormsDemo from './FormsDemo';
import AlertToastDemo from './AlertToastDemo';
import DataDisplayDemo from './DataDisplayDemo';
import ContainersDemo from './ContainersDemo';
import NavigationDemo from './NavigationDemo';
import IntercomDemo from './IntercomDemo';
import TemplatesDemo from './TemplatesDemo';
import IllustrationsDemo from './IllustrationsDemo';
import { Button } from '../design-system';
import './App.css';
import styles from './MainApp.module.css';

type Page = 'forms' | 'alert-toast' | 'data-display' | 'containers' | 'navigation' | 'intercom' | 'templates' | 'illustrations';

function MainApp() {
  const [currentPage, setCurrentPage] = useState<Page>('forms');

  const pages: Array<{ id: Page; label: string }> = [
    { id: 'forms', label: 'Forms' },
    { id: 'alert-toast', label: 'Alert & Toast' },
    { id: 'data-display', label: 'Data Display' },
    { id: 'containers', label: 'Containers' },
    { id: 'navigation', label: 'Navigation' },
    { id: 'intercom', label: 'Intercom' },
    { id: 'templates', label: 'Templates' },
    { id: 'illustrations', label: 'Illustrations' },
  ];

  return (
    <div>
      {/* Navigation - Using design system Button component */}
      <nav className={styles.nav}>
        {pages.map((page) => (
          <Button
            key={page.id}
            onClick={() => setCurrentPage(page.id)}
            hierarchy={currentPage === page.id ? 'primary' : 'secondary'}
            variant="solid"
            size="medium"
          >
            {page.label}
          </Button>
        ))}
      </nav>

      {/* Content */}
      {currentPage === 'forms' ? <FormsDemo /> :
       currentPage === 'alert-toast' ? <AlertToastDemo /> :
       currentPage === 'data-display' ? <DataDisplayDemo /> :
       currentPage === 'containers' ? <ContainersDemo /> :
       currentPage === 'navigation' ? <NavigationDemo /> :
       currentPage === 'intercom' ? <IntercomDemo /> :
       currentPage === 'templates' ? <TemplatesDemo /> :
       <IllustrationsDemo />}
    </div>
  );
}

export default MainApp;
