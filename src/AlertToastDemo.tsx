/**
 * Alert and Toast Demo Page
 *
 * Showcases all Alert and Toast component variants
 */

import { useState } from 'react';
import { Alert, Toast } from '../design-system';
import './App.css';

function AlertToastDemo() {
  const [toasts, setToasts] = useState<{ id: number; status: string; heading: string; body?: string }[]>([]);
  const [toastId, setToastId] = useState(0);

  const showToast = (status: any, heading: string, body?: string) => {
    const id = toastId;
    setToastId(id + 1);
    setToasts((prev) => [...prev, { id, status, heading, body }]);

    // Auto-dismiss after 5 seconds
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 5000);
  };

  const removeToast = (id: number) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  return (
    <div className="app">
      <header className="header">
        <h1>Alert & Toast</h1>
        <p>Notification components for user feedback</p>
      </header>

      <main className="main">
        {/* Alert Components */}
        <section className="section">
          <h2>Alert Component</h2>

          <h3>Info Alert - Full Content</h3>
          <div style={{ marginBottom: '1rem' }}>
            <Alert
              status="info"
              title="Information"
              action={{ label: "Learn More", onClick: () => alert('Learn More clicked!') }}
              closeable
              onClose={() => console.log('Alert closed')}
            >
              This is an informational alert with a title, body text, and action button.
            </Alert>
          </div>

          <h3>Success Alert</h3>
          <div style={{ marginBottom: '1rem' }}>
            <Alert
              status="success"
              title="Success!"
              closeable
              onClose={() => console.log('Success alert closed')}
            >
              Your changes have been saved successfully.
            </Alert>
          </div>

          <h3>Warning Alert</h3>
          <div style={{ marginBottom: '1rem' }}>
            <Alert
              status="warning"
              title="Warning"
              action={{ label: "Fix Now", onClick: () => alert('Fix Now clicked!') }}
              closeable
            >
              Please review your settings before continuing.
            </Alert>
          </div>

          <h3>Error Alert</h3>
          <div style={{ marginBottom: '1rem' }}>
            <Alert
              status="error"
              title="Error"
              closeable
              onClose={() => console.log('Error alert closed')}
            >
              Something went wrong. Please try again.
            </Alert>
          </div>

          <h3>Premium Alert</h3>
          <div style={{ marginBottom: '1rem' }}>
            <Alert
              status="premium"
              title="Upgrade to Premium"
              action={{ label: "Upgrade Now", onClick: () => alert('Upgrade clicked!') }}
              closeable
            >
              Unlock premium features with our Pro plan.
            </Alert>
          </div>

          <h3>Body Only (No Title)</h3>
          <div style={{ marginBottom: '1rem' }}>
            <Alert status="info" closeable>
              This is a simple alert with just body text.
            </Alert>
          </div>

          <h3>No Close Button</h3>
          <div style={{ marginBottom: '1rem' }}>
            <Alert status="success" title="Permanent Notice">
              This alert cannot be dismissed.
            </Alert>
          </div>
        </section>

        {/* Toast Components */}
        <section className="section">
          <h2>Toast Component</h2>

          <h3>Toast Examples</h3>
          <div style={{ marginBottom: '2rem', display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
            <div style={{ width: '320px' }}>
              <Toast
                status="success"
                heading="Success"
                onClose={() => console.log('Toast closed')}
              >
                Congratulations. You're great.
              </Toast>
            </div>

            <div style={{ width: '320px' }}>
              <Toast
                status="info"
                heading="Information"
                onClose={() => console.log('Toast closed')}
              >
                Hey, just for your information...
              </Toast>
            </div>

            <div style={{ width: '320px' }}>
              <Toast
                status="warning"
                heading="Warning"
                onClose={() => console.log('Toast closed')}
              >
                Please check your settings.
              </Toast>
            </div>

            <div style={{ width: '320px' }}>
              <Toast
                status="error"
                heading="Error"
                onClose={() => console.log('Toast closed')}
              >
                Something went wrong.
              </Toast>
            </div>

            <div style={{ width: '320px' }}>
              <Toast
                status="waiting"
                heading="Processing..."
                onClose={() => console.log('Toast closed')}
              >
                Please wait while we process your request.
              </Toast>
            </div>

            <div style={{ width: '320px' }}>
              <Toast
                status="premium"
                heading="Premium Feature"
                onClose={() => console.log('Toast closed')}
              >
                This feature requires a premium subscription.
              </Toast>
            </div>
          </div>

          <h3>Toast with Actions</h3>
          <div style={{ marginBottom: '2rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <div style={{ width: '320px' }}>
              <Toast
                status="info"
                heading="Update Available"
                actions={[
                  { label: "Learn more", onClick: () => alert('Learn more clicked!') }
                ]}
                onClose={() => console.log('Toast closed')}
              >
                A new version is available for download.
              </Toast>
            </div>

            <div style={{ width: '320px' }}>
              <Toast
                status="success"
                heading="File Uploaded"
                actions={[
                  { label: "View file", onClick: () => alert('View file clicked!') }
                ]}
                onClose={() => console.log('Toast closed')}
              />
            </div>

            <div style={{ width: '320px' }}>
              <Toast
                status="success"
                heading="Changes Saved"
                actions={[
                  { label: "Primary", onClick: () => alert('Primary clicked!') },
                  { label: "Secondary", onClick: () => alert('Secondary clicked!') }
                ]}
                onClose={() => console.log('Toast closed')}
              >
                Your changes have been saved successfully.
              </Toast>
            </div>
          </div>

          <h3>Interactive Toast Demo</h3>
          <p style={{ marginBottom: '1rem', color: '#7b7d85' }}>
            Click buttons below to show toasts that auto-dismiss after 5 seconds
          </p>
          <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '2rem' }}>
            <button
              onClick={() => showToast('success', 'Success!', 'Operation completed successfully.')}
              style={{ padding: '8px 16px', borderRadius: '3px', border: 'none', background: '#08a674', color: 'white', cursor: 'pointer' }}
            >
              Show Success Toast
            </button>
            <button
              onClick={() => showToast('info', 'Information', 'Here is some info for you.')}
              style={{ padding: '8px 16px', borderRadius: '3px', border: 'none', background: '#0f65f0', color: 'white', cursor: 'pointer' }}
            >
              Show Info Toast
            </button>
            <button
              onClick={() => showToast('warning', 'Warning!', 'Please be careful.')}
              style={{ padding: '8px 16px', borderRadius: '3px', border: 'none', background: '#d97706', color: 'white', cursor: 'pointer' }}
            >
              Show Warning Toast
            </button>
            <button
              onClick={() => showToast('error', 'Error', 'Something went wrong.')}
              style={{ padding: '8px 16px', borderRadius: '3px', border: 'none', background: '#dd2222', color: 'white', cursor: 'pointer' }}
            >
              Show Error Toast
            </button>
          </div>
        </section>
      </main>

      {/* Toast Container */}
      <div style={{
        position: 'fixed',
        top: '20px',
        right: '20px',
        display: 'flex',
        flexDirection: 'column',
        gap: '12px',
        zIndex: 9999,
        pointerEvents: 'none'
      }}>
        {toasts.map((toast) => (
          <div key={toast.id} style={{ pointerEvents: 'auto' }}>
            <Toast
              status={toast.status as any}
              heading={toast.heading}
              onClose={() => removeToast(toast.id)}
            >
              {toast.body}
            </Toast>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AlertToastDemo;
