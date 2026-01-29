/**
 * Forms Demo
 *
 * Showcases all form-related components: Buttons and Form Inputs
 */

import { useState, useRef, useEffect } from 'react';
import { Button, ComboButton, MenuButton, Menu, Checkbox, DatePicker, CheckboxCard, TextArea, Switch, RadioButton, RadioButtonGroup, Search, PasswordInput, TextInput, Select, Tooltip, CopyField, ActionBar, FieldSet, Icon } from '../design-system';
import './App.css';

// Icon components for demo using design system Icon
const CheckIcon = () => <Icon name="check" variant="solid" />;
const PlusIcon = () => <Icon name="plus" variant="solid" />;
// Note: arrow-right icon not available in design system, removing usage
const ArrowIcon = () => <Icon name="chevron-right" variant="solid" />;
// Note: trash icon not available in design system, removing usage
const TrashIcon = () => <Icon name="xmark" variant="solid" />;

function FormsDemo() {
  const [menuOpen, setMenuOpen] = useState<string | null>(null);
  const menuRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});
  const [checkbox1, setCheckbox1] = useState(false);
  const [checkbox2, setCheckbox2] = useState(true);
  const [checkbox3, setCheckbox3] = useState(false);
  const [checkbox4, setCheckbox4] = useState(false);
  const [card1, setCard1] = useState(false);
  const [card2, setCard2] = useState(true);
  const [card3, setCard3] = useState(false);
  const [date1, setDate1] = useState('16/07/2023');
  const [date2, setDate2] = useState('');
  const [textarea1, setTextarea1] = useState('');
  const [textarea2, setTextarea2] = useState('This is some pre-filled text in a textarea.');
  const [toggle1, setToggle1] = useState(false);
  const [toggle2, setToggle2] = useState(true);
  const [radio1, setRadio1] = useState('basic');
  const [radioGroup1, setRadioGroup1] = useState('monthly');
  const [search1, setSearch1] = useState('');
  const [password1, setPassword1] = useState('');
  const [password2, setPassword2] = useState('123');
  const [textInput1, setTextInput1] = useState('');
  const [textInput2, setTextInput2] = useState('invalid@');
  const [email, setEmail] = useState('');
  const [select1, setSelect1] = useState('');
  const [select2, setSelect2] = useState('option2');
  const [select3, setSelect3] = useState('');
  const [select4, setSelect4] = useState('pro');
  const [multiSelect1, setMultiSelect1] = useState<string[]>([]);
  const [multiSelect2, setMultiSelect2] = useState<string[]>(['option2', 'option3']);

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
        <h1>Forms</h1>
        <p>Complete form examples and patterns</p>
      </header>

      <main className="main">
        {/* BUTTONS SECTION */}
        <h1 style={{ fontSize: '24px', fontWeight: 700, color: '#3c3d40', marginBottom: '24px', marginTop: '24px' }}>Buttons</h1>

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
              <Button hierarchy="secondary" variant="solid" size="xlarge">
                XLarge
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
            <div className="button-row">
              <Tooltip content="This action is currently unavailable">
                <Button hierarchy="secondary" variant="solid" size="xlarge" disabled>
                  XLarge Disabled
                </Button>
              </Tooltip>
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
              <Button hierarchy="secondary" variant="text" size="xlarge">
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
                With Left Icon
              </Button>
              <Button
                hierarchy="secondary"
                variant="text"
                size="xlarge"
                iconRight={<ArrowIcon />}
              >
                XLarge With Right Icon
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
            <div className="button-row">
              <Tooltip content="This option is not available">
                <Button hierarchy="tertiary" variant="ghost" size="large" disabled>
                  Large Disabled
                </Button>
              </Tooltip>
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
                iconRight={<ArrowIcon />}
              >
                Delete and Continue
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
            <div className="button-row">
              <Button
                hierarchy="destructive"
                variant="solid"
                size="large"
                iconLeft={<TrashIcon />}
              >
                Large with Left Icon
              </Button>
              <Button
                hierarchy="destructive"
                variant="solid"
                size="large"
                iconRight={<ArrowIcon />}
              >
                Large with Right Icon
              </Button>
              <Button
                hierarchy="destructive"
                variant="solid"
                size="large"
                iconOnly={<TrashIcon />}
                aria-label="Delete item"
              />
              <Tooltip content="Cannot delete in large size when disabled">
                <Button
                  hierarchy="destructive"
                  variant="solid"
                  size="large"
                  disabled
                >
                  Large Disabled
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
                      { value: 'profile', label: 'Profile', caption: 'View your profile' },
                      { value: 'settings', label: 'Settings', caption: 'Configure app' },
                      { value: 'docs', label: 'Documentation', caption: 'Read the docs' },
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

        {/* Action Bar */}
        <section className="section">
          <h2>Action Bar</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
            <div>
              <h3 style={{ fontSize: '16px', fontWeight: 500, color: '#3c3d40', marginBottom: '12px' }}>Workflow (Position Left)</h3>
              <ActionBar
                variant="workflow"
                position="left"
                actions={[
                  { label: 'Primary', onClick: () => console.log('Primary clicked'), hierarchy: 'primary' },
                  { label: 'Secondary', onClick: () => console.log('Secondary clicked'), hierarchy: 'secondary' },
                  { label: 'Cancel', onClick: () => console.log('Cancel clicked'), hierarchy: 'tertiary', variant: 'ghost' }
                ]}
              />
            </div>

            <div>
              <h3 style={{ fontSize: '16px', fontWeight: 500, color: '#3c3d40', marginBottom: '12px' }}>Equal Weight (Position Left)</h3>
              <ActionBar
                variant="equal-weight"
                position="left"
                actions={[
                  { label: 'Label', onClick: () => console.log('Label 1'), hierarchy: 'secondary' },
                  { label: 'Label', onClick: () => console.log('Label 2'), hierarchy: 'secondary' },
                  { label: 'Label', onClick: () => console.log('Label 3'), hierarchy: 'secondary' },
                  { label: 'More actions', onClick: () => console.log('More actions'), hierarchy: 'tertiary', variant: 'ghost' }
                ]}
              />
            </div>

            <div>
              <h3 style={{ fontSize: '16px', fontWeight: 500, color: '#3c3d40', marginBottom: '12px' }}>Primary Action with Menu Button (Position Left)</h3>
              <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                <Button hierarchy="primary" onClick={() => console.log('Primary action')}>
                  Primary Action
                </Button>
                <ComboButton
                  hierarchy="secondary"
                  onMainClick={() => console.log('Secondary action')}
                  onMenuClick={() => console.log('Menu opened')}
                >
                  Secondary
                </ComboButton>
              </div>
            </div>

            <div>
              <h3 style={{ fontSize: '16px', fontWeight: 500, color: '#3c3d40', marginBottom: '12px' }}>Primary Action (Position Right)</h3>
              <ActionBar
                variant="primary-action"
                position="right"
                actions={[
                  { label: 'More actions', onClick: () => console.log('More actions'), hierarchy: 'tertiary', variant: 'ghost' },
                  { label: 'More actions', onClick: () => console.log('More actions 2'), hierarchy: 'tertiary', variant: 'ghost' },
                  { label: 'Primary', onClick: () => console.log('Primary action'), hierarchy: 'primary' }
                ]}
              />
            </div>

            <div>
              <h3 style={{ fontSize: '16px', fontWeight: 500, color: '#3c3d40', marginBottom: '12px' }}>Workflow (Position Right)</h3>
              <ActionBar
                variant="workflow"
                position="right"
                actions={[
                  { label: 'Primary', onClick: () => console.log('Primary clicked'), hierarchy: 'primary' },
                  { label: 'Secondary', onClick: () => console.log('Secondary clicked'), hierarchy: 'secondary' },
                  { label: 'Cancel', onClick: () => console.log('Cancel clicked'), hierarchy: 'tertiary', variant: 'ghost' }
                ]}
              />
            </div>

            <div>
              <h3 style={{ fontSize: '16px', fontWeight: 500, color: '#3c3d40', marginBottom: '12px' }}>Equal Weight (Position Right)</h3>
              <ActionBar
                variant="equal-weight"
                position="right"
                actions={[
                  { label: 'Label', onClick: () => console.log('Label 1'), hierarchy: 'secondary' },
                  { label: 'Label', onClick: () => console.log('Label 2'), hierarchy: 'secondary' },
                  { label: 'Label', onClick: () => console.log('Label 3'), hierarchy: 'secondary' },
                  { label: 'More actions', onClick: () => console.log('More actions'), hierarchy: 'tertiary', variant: 'ghost' }
                ]}
              />
            </div>
          </div>
        </section>

        {/* FORM INPUTS SECTION */}
        <h1 style={{ fontSize: '24px', fontWeight: 700, color: '#3c3d40', marginBottom: '24px', marginTop: '48px' }}>Form Inputs</h1>

        {/* Checkbox */}
        <section className="section">
          <h2>Checkbox</h2>
          <h3 style={{ fontSize: '16px', fontWeight: 500, color: '#3c3d40', marginBottom: '12px' }}>Small</h3>
          <div className="button-grid">
            <div className="button-row">
              <Checkbox
                size="sm"
                checked={checkbox1}
                onChange={setCheckbox1}
              >
                Unchecked
              </Checkbox>
              <Checkbox
                size="sm"
                checked={true}
                onChange={() => {}}
              >
                Checked
              </Checkbox>
              <Checkbox
                size="sm"
                checked={false}
                onChange={() => {}}
                invalid
              >
                Invalid
              </Checkbox>
              <Tooltip content="This option is not available in your current plan">
                <Checkbox
                  size="sm"
                  checked={false}
                  onChange={() => {}}
                  disabled
                >
                  Disabled
                </Checkbox>
              </Tooltip>
            </div>
          </div>

          <h3 style={{ fontSize: '16px', fontWeight: 500, color: '#3c3d40', marginTop: '24px', marginBottom: '12px' }}>Medium (Default)</h3>
          <div className="button-grid">
            <div className="button-row">
              <Checkbox
                size="md"
                checked={checkbox2}
                onChange={setCheckbox2}
              >
                Unchecked
              </Checkbox>
              <Checkbox
                size="md"
                checked={true}
                onChange={() => {}}
              >
                Checked
              </Checkbox>
              <Checkbox
                size="md"
                checked={false}
                onChange={() => {}}
                invalid
              >
                Invalid
              </Checkbox>
              <Checkbox
                size="md"
                checked={true}
                onChange={() => {}}
                invalid
              >
                Checked Invalid
              </Checkbox>
            </div>
            <div className="button-row">
              <Tooltip content="This option requires premium subscription">
                <Checkbox
                  size="md"
                  checked={false}
                  onChange={() => {}}
                  disabled
                >
                  Disabled
                </Checkbox>
              </Tooltip>
              <Tooltip content="This feature is locked in your current plan">
                <Checkbox
                  size="md"
                  checked={true}
                  onChange={() => {}}
                  disabled
                >
                  Checked Disabled
                </Checkbox>
              </Tooltip>
            </div>
          </div>

          <h3 style={{ fontSize: '16px', fontWeight: 500, color: '#3c3d40', marginTop: '24px', marginBottom: '12px' }}>Large</h3>
          <div className="button-grid">
            <div className="button-row">
              <Checkbox
                size="lg"
                checked={checkbox3}
                onChange={setCheckbox3}
              >
                Unchecked
              </Checkbox>
              <Checkbox
                size="lg"
                checked={true}
                onChange={() => {}}
              >
                Checked
              </Checkbox>
              <Checkbox
                size="lg"
                checked={false}
                onChange={() => {}}
                invalid
              >
                Invalid
              </Checkbox>
              <Tooltip content="This setting is managed by your administrator">
                <Checkbox
                  size="lg"
                  checked={false}
                  onChange={() => {}}
                  disabled
                >
                  Disabled
                </Checkbox>
              </Tooltip>
            </div>
          </div>

          <h3 style={{ fontSize: '16px', fontWeight: 500, color: '#3c3d40', marginTop: '24px', marginBottom: '12px' }}>Checkbox Cards</h3>
          <div className="button-grid">
            <div className="button-row" style={{ gap: '16px' }}>
              <CheckboxCard
                icon="gift"
                title="Premium Plan"
                description="Get access to premium features"
                checked={card1}
                onChange={setCard1}
              />
              <CheckboxCard
                icon="gift"
                title="Pro Plan"
                description="Perfect for professionals"
                checked={card2}
                onChange={setCard2}
              />
              <CheckboxCard
                icon="gift"
                title="Basic Plan"
                description="Essential features only"
                checked={card3}
                onChange={setCard3}
              />
            </div>
          </div>

          <h3 style={{ fontSize: '16px', fontWeight: 500, color: '#3c3d40', marginTop: '24px', marginBottom: '12px' }}>Checkbox Cards - States</h3>
          <div className="button-grid">
            <div className="button-row" style={{ gap: '16px' }}>
              <Tooltip content="This plan is not available in your region">
                <CheckboxCard
                    icon="gift"
                    title="Disabled"
                  description="This card is disabled"
                  checked={false}
                  onChange={() => {}}
                  disabled
                />
              </Tooltip>
              <Tooltip content="Plan selection is locked during billing cycle">
                <CheckboxCard
                    icon="gift"
                    title="Disabled Checked"
                  description="This card is disabled"
                  checked={true}
                  onChange={() => {}}
                  disabled
                />
              </Tooltip>
              <CheckboxCard
                icon="gift"
                title="Invalid"
                description="This card has an error"
                checked={false}
                onChange={() => {}}
                invalid
              />
            </div>
          </div>

          <h3 style={{ fontSize: '16px', fontWeight: 500, color: '#3c3d40', marginTop: '24px', marginBottom: '12px' }}>Interactive</h3>
          <div className="button-grid">
            <div className="button-row">
              <Checkbox
                checked={checkbox4}
                onChange={(checked) => {
                  setCheckbox4(checked);
                  console.log('Checkbox changed:', checked);
                }}
              >
                I accept the terms and conditions
              </Checkbox>
            </div>
            <div className="button-row">
              <p style={{ marginTop: '8px', color: '#3c3d40' }}>
                Status: {checkbox4 ? 'Accepted' : 'Not accepted'}
              </p>
            </div>
          </div>

          <div className="button-grid">
            <div className="button-row" style={{ flexDirection: 'column', alignItems: 'flex-start', gap: '16px' }}>
              <div style={{ display: 'flex', gap: '16px' }}>
                <CheckboxCard
                    icon="gift"
                    title="Design"
                  description="UI/UX Design services"
                  checked={card1}
                  onChange={setCard1}
                />
                <CheckboxCard
                    icon="gift"
                    title="Development"
                  description="Full-stack development"
                  checked={card2}
                  onChange={setCard2}
                />
                <CheckboxCard
                    icon="gift"
                    title="Analytics"
                  description="Data insights & reporting"
                  checked={card3}
                  onChange={setCard3}
                />
              </div>
              <p style={{ marginTop: '8px', color: '#3c3d40' }}>
                Selected: {[card1 && 'Design', card2 && 'Development', card3 && 'Analytics'].filter(Boolean).join(', ') || 'None'}
              </p>
            </div>
          </div>
        </section>

        {/* Date Picker */}
        <section className="section">
          <h2>Date Picker</h2>
          <div className="button-grid">
            <div className="button-row" style={{ flexDirection: 'column', alignItems: 'flex-start', gap: '16px' }}>
              <div>
                <label style={{ display: 'block', marginBottom: '8px', fontSize: '14px', color: '#3c3d40' }}>
                  Select Date
                </label>
                <DatePicker
                  value={date1}
                  onChange={setDate1}
                  placeholder="DD/MM/YYYY"
                />
              </div>
              <div>
                <label style={{ display: 'block', marginBottom: '8px', fontSize: '14px', color: '#3c3d40' }}>
                  Empty Date
                </label>
                <DatePicker
                  value={date2}
                  onChange={setDate2}
                  placeholder="Select a date"
                />
              </div>
              <div>
                <label style={{ display: 'block', marginBottom: '8px', fontSize: '14px', color: '#3c3d40' }}>
                  Disabled Date
                </label>
                <Tooltip content="Date cannot be changed after submission">
                  <DatePicker
                    value="01/01/2024"
                    disabled
                  />
                </Tooltip>
              </div>
              <div>
                <label style={{ display: 'block', marginBottom: '8px', fontSize: '14px', color: '#3c3d40' }}>
                  Interactive Date Picker
                </label>
                <DatePicker
                  value={date2}
                  onChange={(value) => {
                    setDate2(value);
                    console.log('Date changed:', value);
                  }}
                  placeholder="Enter date (DD/MM/YYYY)"
                />
                <p style={{ marginTop: '8px', color: '#3c3d40' }}>
                  Selected date: {date2 || 'None'}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* TextArea Examples */}
        <section className="section">
          <h2>TextArea</h2>
          <div className="button-grid">
            <div className="button-row" style={{ flexDirection: 'column', alignItems: 'flex-start', gap: '16px', width: '100%', maxWidth: '600px' }}>
              <div style={{ width: '100%' }}>
                <label style={{ display: 'block', marginBottom: '8px', fontSize: '14px', color: '#3c3d40' }}>
                  Default TextArea
                </label>
                <TextArea
                  value={textarea1}
                  onChange={setTextarea1}
                  placeholder="Enter your message here..."
                  rows={4}
                />
              </div>
              <div style={{ width: '100%' }}>
                <label style={{ display: 'block', marginBottom: '8px', fontSize: '14px', color: '#3c3d40' }}>
                  Pre-filled TextArea
                </label>
                <TextArea
                  value={textarea2}
                  onChange={setTextarea2}
                  rows={3}
                />
              </div>
              <div style={{ width: '100%' }}>
                <label style={{ display: 'block', marginBottom: '8px', fontSize: '14px', color: '#3c3d40' }}>
                  Disabled TextArea
                </label>
                <Tooltip content="This field is read-only after approval">
                  <TextArea
                    value="This textarea is disabled"
                    disabled
                    rows={2}
                  />
                </Tooltip>
              </div>
              <div style={{ width: '100%' }}>
                <label style={{ display: 'block', marginBottom: '8px', fontSize: '14px', color: '#3c3d40' }}>
                  Invalid TextArea
                </label>
                <TextArea
                  value=""
                  placeholder="This field has an error"
                  invalid
                  rows={2}
                />
              </div>
              <div style={{ width: '100%' }}>
                <label style={{ display: 'block', marginBottom: '8px', fontSize: '14px', color: '#3c3d40' }}>
                  Non-resizable TextArea
                </label>
                <TextArea
                  value={textarea1}
                  onChange={setTextarea1}
                  placeholder="This textarea cannot be resized"
                  rows={3}
                  resizable={false}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Switch Examples */}
        <section className="section">
          <h2>Switch</h2>
          <div className="button-grid">
            <div className="button-row" style={{ flexDirection: 'column', alignItems: 'flex-start', gap: '16px' }}>
              <Switch
                checked={toggle1}
                onChange={setToggle1}
                label="Email notifications"
              />
              <Switch
                checked={toggle2}
                onChange={setToggle2}
                label="SMS notifications"
              />
              <Switch
                checked={true}
                onChange={() => {}}
                label="Push notifications (always on)"
              />
              <Tooltip content="This setting is controlled by your organization">
                <Switch
                  checked={false}
                  onChange={() => {}}
                  label="Disabled switch"
                  disabled
                />
              </Tooltip>
              <Tooltip content="This feature cannot be turned off">
                <Switch
                  checked={true}
                  onChange={() => {}}
                  label="Disabled switch (on)"
                  disabled
                />
              </Tooltip>
              <div style={{ marginTop: '8px' }}>
                <p style={{ color: '#3c3d40', fontSize: '14px' }}>
                  Email: {toggle1 ? 'Enabled' : 'Disabled'} | SMS: {toggle2 ? 'Enabled' : 'Disabled'}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* RadioButton Examples */}
        <section className="section">
          <h2>Radio Button</h2>
          <div className="button-grid">
            <div className="button-row" style={{ flexDirection: 'column', alignItems: 'flex-start', gap: '16px' }}>
              <div>
                <p style={{ marginBottom: '12px', fontSize: '14px', fontWeight: 500, color: '#3c3d40' }}>
                  Select a plan:
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  <RadioButton
                    name="plan"
                    value="basic"
                    checked={radio1 === 'basic'}
                    onChange={setRadio1}
                  >
                    Basic Plan - $9/month
                  </RadioButton>
                  <RadioButton
                    name="plan"
                    value="pro"
                    checked={radio1 === 'pro'}
                    onChange={setRadio1}
                  >
                    Pro Plan - $29/month
                  </RadioButton>
                  <RadioButton
                    name="plan"
                    value="enterprise"
                    checked={radio1 === 'enterprise'}
                    onChange={setRadio1}
                  >
                    Enterprise Plan - $99/month
                  </RadioButton>
                  <Tooltip content="This plan is currently unavailable">
                    <RadioButton
                      name="plan"
                      value="disabled"
                      checked={false}
                      onChange={() => {}}
                      disabled
                    >
                      Disabled Option
                    </RadioButton>
                  </Tooltip>
                </div>
                <p style={{ marginTop: '12px', color: '#3c3d40', fontSize: '14px' }}>
                  Selected: {radio1.charAt(0).toUpperCase() + radio1.slice(1)} Plan
                </p>
              </div>
            </div>
          </div>

          <h3 style={{ fontSize: '16px', fontWeight: 500, color: '#3c3d40', marginTop: '24px', marginBottom: '12px' }}>Radio Button Group (Segment Control)</h3>
          <div className="button-grid">
            <div className="button-row" style={{ flexDirection: 'column', alignItems: 'flex-start', gap: '16px' }}>
              <RadioButtonGroup
                name="billing"
                options={[
                  { value: 'monthly', label: 'Monthly' },
                  { value: 'quarterly', label: 'Quarterly' },
                  { value: 'yearly', label: 'Yearly' }
                ]}
                value={radioGroup1}
                onChange={setRadioGroup1}
              />
              <p style={{ color: '#3c3d40', fontSize: '14px' }}>
                Selected: <strong>{radioGroup1}</strong>
              </p>
            </div>
          </div>

          <h3 style={{ fontSize: '16px', fontWeight: 500, color: '#3c3d40', marginTop: '24px', marginBottom: '12px' }}>Radio Button Group - Disabled Option</h3>
          <div className="button-grid">
            <div className="button-row" style={{ flexDirection: 'column', alignItems: 'flex-start', gap: '16px' }}>
              <RadioButtonGroup
                name="status"
                options={[
                  { value: 'active', label: 'Active' },
                  { value: 'pending', label: 'Pending', disabled: true },
                  { value: 'archived', label: 'Archived' }
                ]}
                value="active"
                onChange={() => {}}
              />
            </div>
          </div>

          <h3 style={{ fontSize: '16px', fontWeight: 500, color: '#3c3d40', marginTop: '24px', marginBottom: '12px' }}>Radio Button Group - All Disabled</h3>
          <div className="button-grid">
            <div className="button-row" style={{ flexDirection: 'column', alignItems: 'flex-start', gap: '16px' }}>
              <RadioButtonGroup
                name="disabled-group"
                options={[
                  { value: 'option1', label: 'Option 1' },
                  { value: 'option2', label: 'Option 2' },
                  { value: 'option3', label: 'Option 3' }
                ]}
                value="option1"
                onChange={() => {}}
                disabled
              />
            </div>
          </div>
        </section>

        {/* Search Component */}
        <section className="section">
          <h2>Search</h2>
          <div className="button-grid">
            <div className="button-row" style={{ flexDirection: 'column', alignItems: 'flex-start', gap: '16px' }}>
              <Search
                value={search1}
                onChange={setSearch1}
                placeholder="Search..."
              />
              <Search
                value="Text"
                onChange={() => {}}
                placeholder="Search..."
              />
              <Tooltip content="Search is disabled while loading results">
                <Search
                  value=""
                  onChange={() => {}}
                  placeholder="Search..."
                  disabled
                />
              </Tooltip>
              <div style={{ marginTop: '8px' }}>
                <p style={{ color: '#3c3d40', fontSize: '14px' }}>
                  Search query: "{search1}" {search1 ? `(${search1.length} characters)` : '(empty)'}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Password Input Component */}
        <section className="section">
          <h2>Password Input</h2>
          <div className="button-grid">
            <div className="button-row" style={{ flexDirection: 'column', alignItems: 'flex-start', gap: '20px', maxWidth: '400px', width: '100%' }}>
              <PasswordInput
                value={password1}
                onChange={setPassword1}
                placeholder="Enter your password"
              />
              <PasswordInput
                value={password2}
                onChange={setPassword2}
                placeholder="Enter your password"
                errorMessage="Password is too weak"
              />
              <Tooltip content="Password cannot be changed during trial period">
                <PasswordInput
                  value="secretpassword"
                  onChange={() => {}}
                  placeholder="Enter your password"
                  disabled
                />
              </Tooltip>
            </div>
          </div>
        </section>

        {/* Text Input Component */}
        <section className="section">
          <h2>Text Input</h2>
          <div className="button-grid">
            <div className="button-row" style={{ flexDirection: 'column', alignItems: 'flex-start', gap: '20px', maxWidth: '400px', width: '100%' }}>
              <TextInput
                value={textInput1}
                onChange={setTextInput1}
                label="Name"
                placeholder="Enter your name"
              />
              <TextInput
                value={email}
                onChange={setEmail}
                label="Email"
                type="email"
                placeholder="Enter your email"
                helperText="We'll never share your email"
                required
              />
              <TextInput
                value={textInput2}
                onChange={setTextInput2}
                label="Email"
                type="email"
                placeholder="Enter your email"
                errorMessage="Invalid email address"
              />
              <Tooltip content="Email address is verified and cannot be changed">
                <TextInput
                  value="john.doe@example.com"
                  onChange={() => {}}
                  label="Email (Disabled)"
                  type="email"
                  disabled
                />
              </Tooltip>
            </div>
          </div>
        </section>

        {/* Copy Field Component */}
        <section className="section">
          <h2>Copy Field</h2>
          <div className="button-grid">
            <div className="button-row" style={{ flexDirection: 'column', alignItems: 'flex-start', gap: '20px', maxWidth: '400px', width: '100%' }}>
              <CopyField
                value="demo.grab@example.com"
                onCopy={() => console.log('Email copied to clipboard')}
              />
              <CopyField
                value="demo.grab@hinge.com"
                onCopy={() => console.log('Email copied')}
              />
              <CopyField
                value="demo.grab@new.com"
                onCopy={() => console.log('Copied!')}
              />
              <Tooltip content="This field is locked and cannot be copied">
                <CopyField
                  value="admin.grab@example.com"
                  disabled
                />
              </Tooltip>
            </div>
          </div>
        </section>

        {/* Select Component */}
        <section className="section">
          <h2>Select</h2>
          <h3 style={{ fontSize: '16px', fontWeight: 500, color: '#3c3d40', marginBottom: '12px' }}>Simple Variant</h3>
          <div className="button-grid">
            <div className="button-row" style={{ flexDirection: 'column', alignItems: 'flex-start', gap: '20px' }}>
              <div>
                <label style={{ display: 'block', marginBottom: '8px', fontSize: '14px', color: '#3c3d40' }}>
                  Choose an option
                </label>
                <Select
                  value={select1}
                  onChange={(val) => setSelect1(val as string)}
                  options={[
                    { value: 'option1', label: 'Option 1' },
                    { value: 'option2', label: 'Option 2' },
                    { value: 'option3', label: 'Option 3' },
                    { value: 'option4', label: 'Option 4' },
                  ]}
                  placeholder="Select an option..."
                />
              </div>
              <div>
                <label style={{ display: 'block', marginBottom: '8px', fontSize: '14px', color: '#3c3d40' }}>
                  Pre-selected option
                </label>
                <Select
                  value={select2}
                  onChange={(val) => setSelect2(val as string)}
                  options={[
                    { value: 'option1', label: 'Option 1' },
                    { value: 'option2', label: 'Option 2' },
                    { value: 'option3', label: 'Option 3' },
                  ]}
                  placeholder="Select an option..."
                />
              </div>
              <div>
                <label style={{ display: 'block', marginBottom: '8px', fontSize: '14px', color: '#3c3d40' }}>
                  With error message
                </label>
                <Select
                  value={select3}
                  onChange={(val) => setSelect3(val as string)}
                  options={[
                    { value: 'option1', label: 'Option 1' },
                    { value: 'option2', label: 'Option 2' },
                  ]}
                  placeholder="Please select..."
                  errorMessage="This field is required"
                />
              </div>
              <div>
                <label style={{ display: 'block', marginBottom: '8px', fontSize: '14px', color: '#3c3d40' }}>
                  Disabled select
                </label>
                <Tooltip content="Selection is locked until you complete the previous step">
                  <Select
                    value=""
                    onChange={() => {}}
                    options={[
                      { value: 'option1', label: 'Option 1' },
                      { value: 'option2', label: 'Option 2' },
                    ]}
                    placeholder="Disabled"
                    disabled
                  />
                </Tooltip>
              </div>
              <div>
                <label style={{ display: 'block', marginBottom: '8px', fontSize: '14px', color: '#3c3d40' }}>
                  Clearable select
                </label>
                <Select
                  value={select1}
                  onChange={(val) => setSelect1(val as string)}
                  options={[
                    { value: 'option1', label: 'Option 1' },
                    { value: 'option2', label: 'Option 2' },
                    { value: 'option3', label: 'Option 3' },
                  ]}
                  placeholder="Select an option..."
                  clearable
                />
              </div>
              <div>
                <label style={{ display: 'block', marginBottom: '8px', fontSize: '14px', color: '#3c3d40' }}>
                  Loading state
                </label>
                <Select
                  value={select2}
                  onChange={(val) => setSelect2(val as string)}
                  options={[
                    { value: 'option1', label: 'Option 1' },
                    { value: 'option2', label: 'Option 2' },
                  ]}
                  placeholder="Loading..."
                  loading
                />
              </div>
            </div>
          </div>

          <h3 style={{ fontSize: '16px', fontWeight: 500, color: '#3c3d40', marginTop: '24px', marginBottom: '12px' }}>Simple Variant (with Captions)</h3>
          <div className="button-grid">
            <div className="button-row" style={{ flexDirection: 'column', alignItems: 'flex-start', gap: '20px' }}>
              <div>
                <label style={{ display: 'block', marginBottom: '8px', fontSize: '14px', color: '#3c3d40' }}>
                  Select a payment method
                </label>
                <Select
                  value={select3}
                  onChange={(val) => setSelect3(val as string)}
                  options={[
                    { value: 'card', label: 'Credit Card', caption: 'Visa, Mastercard, Amex' },
                    { value: 'paypal', label: 'PayPal', caption: 'Pay with your PayPal account' },
                    { value: 'bank', label: 'Bank Transfer', caption: 'Direct bank account transfer' },
                    { value: 'crypto', label: 'Cryptocurrency', caption: 'Bitcoin, Ethereum, USDC' },
                  ]}
                  placeholder="Select payment method..."
                  menuVariant="simple"
                />
              </div>
              <div style={{ marginTop: '8px' }}>
                <p style={{ color: '#3c3d40', fontSize: '14px' }}>
                  Selected: {select3 ? select3.charAt(0).toUpperCase() + select3.slice(1) : 'None'}
                </p>
              </div>
            </div>
          </div>

          <h3 style={{ fontSize: '16px', fontWeight: 500, color: '#3c3d40', marginTop: '24px', marginBottom: '12px' }}>Prominent Variant (with Icons)</h3>
          <div className="button-grid">
            <div className="button-row" style={{ flexDirection: 'column', alignItems: 'flex-start', gap: '20px' }}>
              <div>
                <label style={{ display: 'block', marginBottom: '8px', fontSize: '14px', color: '#3c3d40' }}>
                  Select a plan
                </label>
                <Select
                  value={select4}
                  onChange={(val) => setSelect4(val as string)}
                  options={[
                    { value: 'basic', label: 'Basic Plan', caption: '$9/month - Essential features' },
                    { value: 'pro', label: 'Pro Plan', caption: '$29/month - Advanced features' },
                    { value: 'enterprise', label: 'Enterprise', caption: '$99/month - Full access' },
                  ]}
                  placeholder="Select a plan..."
                  menuVariant="prominent"
                />
              </div>
              <div style={{ marginTop: '8px' }}>
                <p style={{ color: '#3c3d40', fontSize: '14px' }}>
                  Selected plan: {select4 ? select4.charAt(0).toUpperCase() + select4.slice(1) : 'None'}
                </p>
              </div>
            </div>
          </div>

          <h3 style={{ fontSize: '16px', fontWeight: 500, color: '#3c3d40', marginTop: '24px', marginBottom: '12px' }}>Multi-Select Variant</h3>
          <div className="button-grid">
            <div className="button-row" style={{ flexDirection: 'column', alignItems: 'flex-start', gap: '20px' }}>
              <div>
                <label style={{ display: 'block', marginBottom: '8px', fontSize: '14px', color: '#3c3d40' }}>
                  Choose multiple options
                </label>
                <Select
                  value={multiSelect1}
                  onChange={(val) => setMultiSelect1(val as string[])}
                  options={[
                    { value: 'option1', label: 'Option 1' },
                    { value: 'option2', label: 'Option 2' },
                    { value: 'option3', label: 'Option 3' },
                    { value: 'option4', label: 'Option 4' },
                  ]}
                  placeholder="Select multiple options..."
                  multiple
                />
              </div>
              <div>
                <label style={{ display: 'block', marginBottom: '8px', fontSize: '14px', color: '#3c3d40' }}>
                  Pre-selected items
                </label>
                <Select
                  value={multiSelect2}
                  onChange={(val) => setMultiSelect2(val as string[])}
                  options={[
                    { value: 'option1', label: 'Option 1' },
                    { value: 'option2', label: 'Option 2' },
                    { value: 'option3', label: 'Option 3' },
                    { value: 'option4', label: 'Option 4' },
                  ]}
                  placeholder="Select multiple options..."
                  multiple
                />
              </div>
              <div>
                <label style={{ display: 'block', marginBottom: '8px', fontSize: '14px', color: '#3c3d40' }}>
                  Multi-select with clearable
                </label>
                <Select
                  value={multiSelect2}
                  onChange={(val) => setMultiSelect2(val as string[])}
                  options={[
                    { value: 'option1', label: 'Option 1' },
                    { value: 'option2', label: 'Option 2' },
                    { value: 'option3', label: 'Option 3' },
                  ]}
                  placeholder="Select options..."
                  multiple
                  clearable
                />
              </div>
              <div>
                <label style={{ display: 'block', marginBottom: '8px', fontSize: '14px', color: '#3c3d40' }}>
                  Multi-select with icons (prominent)
                </label>
                <Select
                  value={multiSelect1}
                  onChange={(val) => setMultiSelect1(val as string[])}
                  options={[
                    { value: 'star', label: 'Starred Items', caption: 'Your favorite items' },
                    { value: 'rocket', label: 'In Progress', caption: 'Currently active' },
                    { value: 'heart', label: 'Liked', caption: 'Items you liked' },
                    { value: 'palette', label: 'Creative', caption: 'Design projects' },
                  ]}
                  placeholder="Select categories..."
                  multiple
                  menuVariant="prominent"
                />
              </div>
              <div style={{ marginTop: '8px' }}>
                <p style={{ color: '#3c3d40', fontSize: '14px' }}>
                  Selected items: {multiSelect1.length > 0 ? multiSelect1.join(', ') : 'None'}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FieldSet Component */}
        <section className="section">
          <h2>FieldSet</h2>
          <p style={{ marginBottom: '24px', color: '#7b7d85', fontSize: '14px' }}>
            Container component for grouping related form fields with a header.
          </p>

          <h3 style={{ fontSize: '16px', fontWeight: 500, color: '#3c3d40', marginBottom: '12px' }}>Personal Information</h3>
          <div style={{ marginBottom: '32px' }}>
            <FieldSet
              title="Personal Information"
              icon={<Icon name="circle-user" variant="solid" />}
            >
              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <TextInput
                  value=""
                  onChange={() => {}}
                  label="Full Name"
                  placeholder="Enter your full name"
                />
                <TextInput
                  value=""
                  onChange={() => {}}
                  label="Email Address"
                  type="email"
                  placeholder="your.email@example.com"
                />
                <TextInput
                  value=""
                  onChange={() => {}}
                  label="Phone Number"
                  type="tel"
                  placeholder="+1 (555) 000-0000"
                />
              </div>
            </FieldSet>
          </div>

          <h3 style={{ fontSize: '16px', fontWeight: 500, color: '#3c3d40', marginBottom: '12px' }}>Account Settings</h3>
          <div style={{ marginBottom: '32px' }}>
            <FieldSet
              title="Account Settings"
              icon={<Icon name="sliders" />}
            >
              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <div>
                  <label style={{ display: 'block', marginBottom: '8px', fontSize: '14px', color: '#3c3d40' }}>
                    Account Type
                  </label>
                  <Select
                    value="pro"
                    onChange={() => {}}
                    options={[
                      { value: 'basic', label: 'Basic Plan', caption: '$9/month - Essential features' },
                      { value: 'pro', label: 'Pro Plan', caption: '$29/month - Advanced features' },
                      { value: 'enterprise', label: 'Enterprise', caption: '$99/month - Full access' },
                    ]}
                    placeholder="Select a plan..."
                    menuVariant="prominent"
                  />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  <Switch
                    checked={true}
                    onChange={() => {}}
                    label="Email notifications"
                  />
                  <Switch
                    checked={false}
                    onChange={() => {}}
                    label="SMS notifications"
                  />
                  <Switch
                    checked={true}
                    onChange={() => {}}
                    label="Push notifications"
                  />
                </div>
              </div>
            </FieldSet>
          </div>

          <h3 style={{ fontSize: '16px', fontWeight: 500, color: '#3c3d40', marginBottom: '12px' }}>Security</h3>
          <div style={{ marginBottom: '32px' }}>
            <FieldSet
              title="Security"
              icon={<Icon name="lock" />}
            >
              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <PasswordInput
                  value=""
                  onChange={() => {}}
                  placeholder="Current password"
                />
                <PasswordInput
                  value=""
                  onChange={() => {}}
                  placeholder="New password"
                />
                <PasswordInput
                  value=""
                  onChange={() => {}}
                  placeholder="Confirm new password"
                />
                <div style={{ marginTop: '8px' }}>
                  <Checkbox
                    checked={false}
                    onChange={() => {}}
                  >
                    Require password change every 90 days
                  </Checkbox>
                </div>
              </div>
            </FieldSet>
          </div>
        </section>
      </main>
    </div>
  );
}

export default FormsDemo;
