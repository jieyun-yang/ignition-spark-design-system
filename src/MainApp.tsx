/**
 * Main App with Navigation
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
import './App.css';

type Page = 'forms' | 'alert-toast' | 'data-display' | 'containers' | 'navigation' | 'intercom' | 'templates' | 'illustrations';

function MainApp() {
  const [currentPage, setCurrentPage] = useState<Page>('forms');

  return (
    <div>
      {/* Navigation */}
      <nav style={{
        position: 'sticky',
        top: 0,
        left: 0,
        right: 0,
        background: '#ffffff',
        borderBottom: '2px solid #e4e7f5',
        padding: '1rem 2rem',
        display: 'flex',
        gap: '1rem',
        zIndex: 1000,
        boxShadow: '0 2px 4px rgba(0,0,0,0.05)'
      }}>
        <button
          onClick={() => setCurrentPage('forms')}
          style={{
            padding: '0.5rem 1rem',
            borderRadius: '3px',
            border: 'none',
            background: currentPage === 'forms' ? '#5a51e7' : '#e4e7f5',
            color: currentPage === 'forms' ? '#ffffff' : '#3c3d40',
            fontWeight: 600,
            cursor: 'pointer',
            transition: 'all 0.2s'
          }}
        >
          Forms
        </button>
        <button
          onClick={() => setCurrentPage('alert-toast')}
          style={{
            padding: '0.5rem 1rem',
            borderRadius: '3px',
            border: 'none',
            background: currentPage === 'alert-toast' ? '#5a51e7' : '#e4e7f5',
            color: currentPage === 'alert-toast' ? '#ffffff' : '#3c3d40',
            fontWeight: 600,
            cursor: 'pointer',
            transition: 'all 0.2s'
          }}
        >
          Alert & Toast
        </button>
        <button
          onClick={() => setCurrentPage('data-display')}
          style={{
            padding: '0.5rem 1rem',
            borderRadius: '3px',
            border: 'none',
            background: currentPage === 'data-display' ? '#5a51e7' : '#e4e7f5',
            color: currentPage === 'data-display' ? '#ffffff' : '#3c3d40',
            fontWeight: 600,
            cursor: 'pointer',
            transition: 'all 0.2s'
          }}
        >
          Data Display
        </button>
        <button
          onClick={() => setCurrentPage('containers')}
          style={{
            padding: '0.5rem 1rem',
            borderRadius: '3px',
            border: 'none',
            background: currentPage === 'containers' ? '#5a51e7' : '#e4e7f5',
            color: currentPage === 'containers' ? '#ffffff' : '#3c3d40',
            fontWeight: 600,
            cursor: 'pointer',
            transition: 'all 0.2s'
          }}
        >
          Containers
        </button>
        <button
          onClick={() => setCurrentPage('navigation')}
          style={{
            padding: '0.5rem 1rem',
            borderRadius: '3px',
            border: 'none',
            background: currentPage === 'navigation' ? '#5a51e7' : '#e4e7f5',
            color: currentPage === 'navigation' ? '#ffffff' : '#3c3d40',
            fontWeight: 600,
            cursor: 'pointer',
            transition: 'all 0.2s'
          }}
        >
          Navigation
        </button>
        <button
          onClick={() => setCurrentPage('intercom')}
          style={{
            padding: '0.5rem 1rem',
            borderRadius: '3px',
            border: 'none',
            background: currentPage === 'intercom' ? '#5a51e7' : '#e4e7f5',
            color: currentPage === 'intercom' ? '#ffffff' : '#3c3d40',
            fontWeight: 600,
            cursor: 'pointer',
            transition: 'all 0.2s'
          }}
        >
          Intercom
        </button>
        <button
          onClick={() => setCurrentPage('templates')}
          style={{
            padding: '0.5rem 1rem',
            borderRadius: '3px',
            border: 'none',
            background: currentPage === 'templates' ? '#5a51e7' : '#e4e7f5',
            color: currentPage === 'templates' ? '#ffffff' : '#3c3d40',
            fontWeight: 600,
            cursor: 'pointer',
            transition: 'all 0.2s'
          }}
        >
          Templates
        </button>
        <button
          onClick={() => setCurrentPage('illustrations')}
          style={{
            padding: '0.5rem 1rem',
            borderRadius: '3px',
            border: 'none',
            background: currentPage === 'illustrations' ? '#5a51e7' : '#e4e7f5',
            color: currentPage === 'illustrations' ? '#ffffff' : '#3c3d40',
            fontWeight: 600,
            cursor: 'pointer',
            transition: 'all 0.2s'
          }}
        >
          Illustrations
        </button>
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
