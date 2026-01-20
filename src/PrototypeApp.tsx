/**
 * Prototype Starter
 *
 * Replace this file's contents with your prototype.
 * See /demo for component examples.
 */

import { Button } from '../design-system';
import './App.css';

function PrototypeApp() {
  return (
    <div className="app">
      <main className="main">
        <section className="section" style={{ textAlign: 'center', padding: 'var(--spacing-12)' }}>
          <h1 style={{ fontSize: 'var(--font-size-2xl)', marginBottom: 'var(--spacing-4)' }}>
            Prototype Starter
          </h1>
          <p style={{ color: 'var(--color-gray-600)', marginBottom: 'var(--spacing-6)' }}>
            Edit <code>src/PrototypeApp.tsx</code> to build your prototype
          </p>
          <Button hierarchy="primary" onClick={() => window.location.href = '/demo'}>
            View Component Demo
          </Button>
        </section>
      </main>
    </div>
  );
}

export default PrototypeApp;
