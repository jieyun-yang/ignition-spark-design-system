/**
 * Design System Demo App
 *
 * Showcases all Button component variants
 */

import { useState, useRef, useEffect } from 'react';
import { Button, ComboButton, MenuButton, Menu, Tooltip } from '../design-system';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faPlus, faArrowRight, faTrash, faUser, faCog, faFileAlt } from '@fortawesome/free-solid-svg-icons';
import './App.css';

// Font Awesome icon components for demo
const CheckIcon = () => <FontAwesomeIcon icon={faCheck} />;
const PlusIcon = () => <FontAwesomeIcon icon={faPlus} />;
const ArrowIcon = () => <FontAwesomeIcon icon={faArrowRight} />;
const TrashIcon = () => <FontAwesomeIcon icon={faTrash} />;

function App() {
  const [menuOpen, setMenuOpen] = useState<string | null>(null);
  const menuRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuOpen) {
        const menuRef = menuRefs.current[menuOpen];
        if (menuRef && !menuRef.contains(event.target as Node)) {
          setMenuOpen(null);
        }
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [menuOpen]);

  return (
    <div className="app">
      <header className="header">
        <h1>OnBrand Design System</h1>
        <p>Button Component Showcase</p>
      </header>

      <main className="main">
        {/* Primary Hierarchy - Solid */}
        <section className="section">
          <h2>Primary + Solid</h2>
          <div className="button-grid">
            <div className="button-row">
              <Button hierarchy="primary" variant="solid" size="small">
                Small
              </Button>
              <Button hierarchy="primary" variant="solid" size="medium">
                Medium (Default)
              </Button>
              <Button hierarchy="primary" variant="solid" size="large">
                Large
              </Button>
              <Button hierarchy="primary" variant="solid" size="xlarge">
                XLarge
              </Button>
            </div>
            <div className="button-row">
              <Button
                hierarchy="primary"
                variant="solid"
                size="medium"
                iconLeft={<CheckIcon />}
              >
                With Left Icon
              </Button>
              <Button
                hierarchy="primary"
                variant="solid"
                size="medium"
                iconRight={<ArrowIcon />}
              >
                With Right Icon
              </Button>
              <Button
                hierarchy="primary"
                variant="solid"
                size="medium"
                iconOnly={<PlusIcon />}
                aria-label="Add item"
              />
            </div>
            <div className="button-row">
              <Tooltip content="This action requires admin privileges">
                <Button hierarchy="primary" variant="solid" size="medium" disabled>
                  Disabled
                </Button>
              </Tooltip>
            </div>
          </div>
        </section>

        {/* Secondary Hierarchy - Solid */}
        <section className="section">
          <h2>Secondary + Solid</h2>
          <div className="button-grid">
            <div className="button-row">
              <Button hierarchy="secondary" variant="solid" size="small">
                Small
              </Button>
              <Button hierarchy="secondary" variant="solid" size="medium">
                Medium
              </Button>
              <Button hierarchy="secondary" variant="solid" size="large">
                Large
              </Button>
            </div>
            <div className="button-row">
              <Button
                hierarchy="secondary"
                variant="solid"
                size="medium"
                iconLeft={<CheckIcon />}
              >
                With Left Icon
              </Button>
              <Button
                hierarchy="secondary"
                variant="solid"
                size="medium"
                iconRight={<ArrowIcon />}
              >
                With Right Icon
              </Button>
              <Button
                hierarchy="secondary"
                variant="solid"
                size="medium"
                iconOnly={<PlusIcon />}
                aria-label="Add item"
              />
            </div>
          </div>
        </section>

        {/* Text Variant */}
        <section className="section">
          <h2>Secondary + Text</h2>
          <div className="button-grid">
            <div className="button-row">
              <Button hierarchy="secondary" variant="text" size="small">
                Text Button
              </Button>
              <Button hierarchy="secondary" variant="text" size="medium">
                Text Button
              </Button>
              <Button hierarchy="secondary" variant="text" size="large">
                Text Button
              </Button>
            </div>
            <div className="button-row">
              <Button
                hierarchy="secondary"
                variant="text"
                size="medium"
                iconLeft={<CheckIcon />}
              >
                With Icon
              </Button>
              <Button
                hierarchy="secondary"
                variant="text"
                size="medium"
                iconOnly={<PlusIcon />}
                aria-label="Add item"
              />
              <Tooltip content="This action is temporarily unavailable">
                <Button hierarchy="secondary" variant="text" size="medium" disabled>
                  Disabled
                </Button>
              </Tooltip>
            </div>
          </div>
        </section>

        {/* Tertiary Hierarchy - Ghost */}
        <section className="section">
          <h2>Tertiary + Ghost</h2>
          <div className="button-grid">
            <div className="button-row">
              <Button hierarchy="tertiary" variant="ghost" size="small">
                Small
              </Button>
              <Button hierarchy="tertiary" variant="ghost" size="medium">
                Medium
              </Button>
              <Button hierarchy="tertiary" variant="ghost" size="large">
                Large
              </Button>
            </div>
            <div className="button-row">
              <Button
                hierarchy="tertiary"
                variant="ghost"
                size="medium"
                iconLeft={<CheckIcon />}
              >
                With Left Icon
              </Button>
              <Button
                hierarchy="tertiary"
                variant="ghost"
                size="medium"
                iconRight={<ArrowIcon />}
              >
                With Right Icon
              </Button>
              <Button
                hierarchy="tertiary"
                variant="ghost"
                size="medium"
                iconOnly={<PlusIcon />}
                aria-label="Add item"
              />
            </div>
          </div>
        </section>

        {/* Destructive Hierarchy - Solid */}
        <section className="section">
          <h2>Destructive + Solid</h2>
          <div className="button-grid">
            <div className="button-row">
              <Button hierarchy="destructive" variant="solid" size="small">
                Delete
              </Button>
              <Button hierarchy="destructive" variant="solid" size="medium">
                Delete
              </Button>
              <Button hierarchy="destructive" variant="solid" size="large">
                Delete
              </Button>
              <Button hierarchy="destructive" variant="solid" size="xlarge">
                Delete
              </Button>
            </div>
            <div className="button-row">
              <Button
                hierarchy="destructive"
                variant="solid"
                size="medium"
                iconLeft={<TrashIcon />}
              >
                Delete Item
              </Button>
              <Button
                hierarchy="destructive"
                variant="solid"
                size="medium"
                iconOnly={<TrashIcon />}
                aria-label="Delete item"
              />
              <Tooltip content="Cannot delete while items are in use">
                <Button
                  hierarchy="destructive"
                  variant="solid"
                  size="medium"
                  disabled
                >
                  Disabled
                </Button>
              </Tooltip>
            </div>
          </div>
        </section>

        {/* Destructive Hierarchy - Ghost */}
        <section className="section">
          <h2>Destructive + Ghost</h2>
          <div className="button-grid">
            <div className="button-row">
              <Button hierarchy="destructive" variant="ghost" size="medium">
                Remove
              </Button>
              <Button hierarchy="destructive" variant="ghost" size="large">
                Remove
              </Button>
              <Button
                hierarchy="destructive"
                variant="ghost"
                size="medium"
                iconLeft={<TrashIcon />}
              >
                Delete Item
              </Button>
            </div>
          </div>
        </section>

        {/* Combo Button */}
        <section className="section">
          <h2>Combo Button</h2>
          <div className="button-grid">
            <div className="button-row">
              <ComboButton
                hierarchy="primary"
                onMainClick={() => console.log('Main action')}
                onMenuClick={() => console.log('Menu opened')}
              >
                Save
              </ComboButton>
              <ComboButton
                hierarchy="secondary"
                onMainClick={() => console.log('Export action')}
                onMenuClick={() => console.log('Export menu opened')}
              >
                Export
              </ComboButton>
            </div>
            <div className="button-row">
              <Tooltip content="Main action requires admin privileges">
                <ComboButton
                  hierarchy="primary"
                  mainDisabled
                  onMenuClick={() => console.log('Menu only')}
                >
                  Main Disabled
                </ComboButton>
              </Tooltip>
              <Tooltip content="Additional options are not available yet">
                <ComboButton
                  hierarchy="secondary"
                  menuDisabled
                  onMainClick={() => console.log('Main only')}
                >
                  Menu Disabled
                </ComboButton>
              </Tooltip>
              <Tooltip content="This feature is currently unavailable">
                <ComboButton
                  hierarchy="primary"
                  disabled
                >
                  Both Disabled
                </ComboButton>
              </Tooltip>
            </div>
          </div>
        </section>

        {/* Menu Button */}
        <section className="section">
          <h2>Menu Button with Dropdown</h2>
          <div className="button-grid">
            <div className="button-row" style={{ gap: '20px', alignItems: 'flex-start' }}>
              {/* Simple Menu */}
              <div ref={(el) => (menuRefs.current['menu1'] = el)} style={{ position: 'relative' }}>
                <MenuButton onClick={() => setMenuOpen(menuOpen === 'menu1' ? null : 'menu1')}>
                  Actions
                </MenuButton>
                {menuOpen === 'menu1' && (
                  <Menu
                    options={[
                      { value: 'edit', label: 'Edit' },
                      { value: 'duplicate', label: 'Duplicate' },
                      { value: 'delete', label: 'Delete' },
                    ]}
                    onSelect={(value) => {
                      alert(`Selected: ${value}`);
                      setMenuOpen(null);
                    }}
                  />
                )}
              </div>

              {/* Prominent Menu with Icons */}
              <div ref={(el) => (menuRefs.current['menu2'] = el)} style={{ position: 'relative' }}>
                <MenuButton onClick={() => setMenuOpen(menuOpen === 'menu2' ? null : 'menu2')}>
                  Options
                </MenuButton>
                {menuOpen === 'menu2' && (
                  <Menu
                    variant="prominent"
                    options={[
                      { value: 'profile', label: 'Profile', icon: faUser, caption: 'View your profile' },
                      { value: 'settings', label: 'Settings', icon: faCog, caption: 'Configure app' },
                      { value: 'docs', label: 'Documentation', icon: faFileAlt, caption: 'Read the docs' },
                    ]}
                    onSelect={(value) => {
                      alert(`Selected: ${value}`);
                      setMenuOpen(null);
                    }}
                  />
                )}
              </div>

              {/* Disabled Menu Button */}
              <Tooltip content="No actions available at this time">
                <MenuButton disabled>
                  Disabled
                </MenuButton>
              </Tooltip>
            </div>
          </div>
        </section>

        {/* Interactive Demo */}
        <section className="section">
          <h2>Interactive Demo</h2>
          <div className="button-grid">
            <div className="button-row">
              <Button
                hierarchy="primary"
                variant="solid"
                size="large"
                onClick={() => alert('Button clicked!')}
              >
                Click Me
              </Button>
              <Button
                hierarchy="secondary"
                variant="solid"
                size="large"
                onClick={() => console.log('Secondary clicked')}
              >
                Log to Console
              </Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
