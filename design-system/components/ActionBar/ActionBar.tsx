/**
 * ActionBar Component
 *
 * A horizontal bar containing action buttons, typically used at the bottom
 * of forms, modals, or pages to provide primary and secondary actions.
 *
 * Figma: Matches Action bar in Spark Components
 *
 * @example
 * <ActionBar
 *   variant="workflow"
 *   position="left"
 *   actions={[
 *     { label: 'Primary', onClick: () => {}, hierarchy: 'primary' },
 *     { label: 'Secondary', onClick: () => {}, hierarchy: 'secondary' },
 *     { label: 'Cancel', onClick: () => {}, hierarchy: 'secondary', variant: 'text' }
 *   ]}
 * />
 */

import React from 'react';
import clsx from 'clsx';
import { Button } from '../Button';
import type { ButtonHierarchy, ButtonVariant } from '../../types/components';
import styles from './ActionBar.module.css';

export interface ActionBarAction {
  /** Button label */
  label: string;

  /** Click handler */
  onClick: () => void;

  /** Button hierarchy - maps to Figma button hierarchy */
  hierarchy?: ButtonHierarchy;

  /** Button variant - maps to Figma button variant */
  variant?: ButtonVariant;

  /** Disabled state */
  disabled?: boolean;

  /** Icon to display (left side) */
  icon?: React.ReactNode;
}

export interface ActionBarProps {
  /** Array of action buttons */
  actions: ActionBarAction[];

  /** Visual variant - maps to Figma variants */
  variant?: 'workflow' | 'equal-weight' | 'primary-action';

  /** Button alignment position */
  position?: 'left' | 'right';

  /** Optional CSS class name */
  className?: string;
}

export const ActionBar: React.FC<ActionBarProps> = ({
  actions,
  variant = 'workflow',
  position = 'left',
  className,
}) => {
  return (
    <div
      className={clsx(
        styles.actionBar,
        styles[`position-${position}`],
        styles[`variant-${variant}`],
        className
      )}
    >
      <div className={styles.actions}>
        {actions.map((action, index) => (
          <Button
            key={index}
            hierarchy={action.hierarchy || 'secondary'}
            variant={action.variant || 'solid'}
            size="medium"
            onClick={action.onClick}
            disabled={action.disabled}
            iconLeft={action.icon}
          >
            {action.label}
          </Button>
        ))}
      </div>
    </div>
  );
};
