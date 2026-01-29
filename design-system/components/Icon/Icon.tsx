/**
 * Icon Component
 *
 * A unified icon component using local FontAwesome SVG files.
 * Uses Regular variant by default, Solid when specified.
 *
 * @example
 * // Regular icon (default)
 * <Icon name="circle-info" />
 *
 * @example
 * // Solid variant
 * <Icon name="check" variant="solid" />
 *
 * @example
 * // With size and custom class
 * <Icon name="search" size="lg" className={styles.searchIcon} />
 */

import React from 'react';
import clsx from 'clsx';
import styles from './Icon.module.css';

// Regular icons
import CircleInfoRegular from './svg/regular/circle-info.svg?raw';
import CircleCheckRegular from './svg/regular/circle-check.svg?raw';
import TriangleExclamationRegular from './svg/regular/triangle-exclamation.svg?raw';
import CircleXmarkRegular from './svg/regular/circle-xmark.svg?raw';
import LockRegular from './svg/regular/lock.svg?raw';
import XmarkRegular from './svg/regular/xmark.svg?raw';
import CircleQuestionRegular from './svg/regular/circle-question.svg?raw';
import ChevronUpRegular from './svg/regular/chevron-up.svg?raw';
import ChevronDownRegular from './svg/regular/chevron-down.svg?raw';
import EllipsisVerticalRegular from './svg/regular/ellipsis-vertical.svg?raw';
import CopyRegular from './svg/regular/copy.svg?raw';
import CheckRegular from './svg/regular/check.svg?raw';
import SlidersRegular from './svg/regular/sliders.svg?raw';
import SearchRegular from './svg/regular/magnifying-glass.svg?raw';
import BellRegular from './svg/regular/bell.svg?raw';
import SpinnerRegular from './svg/regular/spinner.svg?raw';
import PlusRegular from './svg/regular/plus.svg?raw';

// Solid icons
import XmarkSolid from './svg/solid/xmark.svg?raw';
import ChevronDownSolid from './svg/solid/chevron-down.svg?raw';
import ChevronLeftSolid from './svg/solid/chevron-left.svg?raw';
import ChevronRightSolid from './svg/solid/chevron-right.svg?raw';
import AnglesLeftSolid from './svg/solid/angles-left.svg?raw';
import AnglesRightSolid from './svg/solid/angles-right.svg?raw';
import PlusSolid from './svg/solid/plus.svg?raw';
import GiftSolid from './svg/solid/gift.svg?raw';
import CircleUserSolid from './svg/solid/circle-user.svg?raw';
import CalendarSolid from './svg/solid/calendar.svg?raw';
import AngleLeftSolid from './svg/solid/angle-left.svg?raw';
import AngleRightSolid from './svg/solid/angle-right.svg?raw';
import BanSolid from './svg/solid/ban.svg?raw';
import CheckSolid from './svg/solid/check.svg?raw';
import SearchSolid from './svg/solid/magnifying-glass.svg?raw';
import EyeSolid from './svg/solid/eye.svg?raw';
import EyeSlashSolid from './svg/solid/eye-slash.svg?raw';
import SpinnerSolid from './svg/solid/spinner.svg?raw';

// Light icons
import SearchLight from './svg/light/magnifying-glass.svg?raw';
import BellLight from './svg/light/bell.svg?raw';
import PlusLight from './svg/light/plus.svg?raw';
import ChevronDownLight from './svg/light/chevron-down.svg?raw';
import GiftLight from './svg/light/gift.svg?raw';
import CircleUserLight from './svg/light/circle-user.svg?raw';
import HouseLight from './svg/light/house.svg?raw';
import FileLinesLight from './svg/light/file-lines.svg?raw';
import BriefcaseLight from './svg/light/briefcase.svg?raw';
import UsersLight from './svg/light/users.svg?raw';
import GearLight from './svg/light/gear.svg?raw';
import CreditCardLight from './svg/light/credit-card.svg?raw';
import CircleQuestionLight from './svg/light/circle-question.svg?raw';
import FolderLight from './svg/light/folder.svg?raw';
import Grid2Light from './svg/light/grid-2.svg?raw';

const regularIcons: Record<string, string> = {
  'circle-info': CircleInfoRegular,
  'circle-check': CircleCheckRegular,
  'triangle-exclamation': TriangleExclamationRegular,
  'circle-xmark': CircleXmarkRegular,
  'lock': LockRegular,
  'xmark': XmarkRegular,
  'circle-question': CircleQuestionRegular,
  'chevron-up': ChevronUpRegular,
  'chevron-down': ChevronDownRegular,
  'ellipsis-vertical': EllipsisVerticalRegular,
  'copy': CopyRegular,
  'check': CheckRegular,
  'sliders': SlidersRegular,
  'search': SearchRegular,
  'bell': BellRegular,
  'spinner': SpinnerRegular,
  'plus': PlusRegular,
};

const solidIcons: Record<string, string> = {
  'xmark': XmarkSolid,
  'chevron-down': ChevronDownSolid,
  'chevron-left': ChevronLeftSolid,
  'chevron-right': ChevronRightSolid,
  'angles-left': AnglesLeftSolid,
  'angles-right': AnglesRightSolid,
  'plus': PlusSolid,
  'gift': GiftSolid,
  'circle-user': CircleUserSolid,
  'calendar': CalendarSolid,
  'angle-left': AngleLeftSolid,
  'angle-right': AngleRightSolid,
  'ban': BanSolid,
  'check': CheckSolid,
  'search': SearchSolid,
  'eye': EyeSolid,
  'eye-slash': EyeSlashSolid,
  'spinner': SpinnerSolid,
};

const lightIcons: Record<string, string> = {
  'search': SearchLight,
  'bell': BellLight,
  'plus': PlusLight,
  'chevron-down': ChevronDownLight,
  'gift': GiftLight,
  'circle-user': CircleUserLight,
  'house': HouseLight,
  'file-lines': FileLinesLight,
  'briefcase': BriefcaseLight,
  'users': UsersLight,
  'gear': GearLight,
  'credit-card': CreditCardLight,
  'circle-question': CircleQuestionLight,
  'folder': FolderLight,
  'grid-2': Grid2Light,
};

export type IconVariant = 'regular' | 'solid' | 'light';
export type IconSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export type RegularIconName = keyof typeof regularIcons;
export type SolidIconName = keyof typeof solidIcons;
export type IconName = RegularIconName | SolidIconName;

export interface IconProps {
  /** Icon name (e.g., "circle-info", "check", "search") */
  name: string;

  /** Icon variant - defaults to "regular" per design guidelines */
  variant?: IconVariant;

  /** Icon size */
  size?: IconSize;

  /** Whether the icon should spin (for loading states) */
  spin?: boolean;

  /** Additional CSS class names */
  className?: string;

  /** Accessible label for screen readers */
  'aria-label'?: string;

  /** Hide from screen readers (decorative icon) */
  'aria-hidden'?: boolean;
}

export const Icon: React.FC<IconProps> = ({
  name,
  variant = 'regular',
  size = 'md',
  spin = false,
  className,
  'aria-label': ariaLabel,
  'aria-hidden': ariaHidden = true,
}) => {
  // Select icon map based on variant
  const iconMaps: Record<IconVariant, Record<string, string>> = {
    regular: regularIcons,
    solid: solidIcons,
    light: lightIcons,
  };

  let svgContent = iconMaps[variant]?.[name];

  // Fallback: try other variants if not found
  if (!svgContent) {
    for (const v of ['regular', 'solid', 'light'] as IconVariant[]) {
      if (v !== variant && iconMaps[v]?.[name]) {
        svgContent = iconMaps[v][name];
        break;
      }
    }
  }

  if (!svgContent) {
    console.warn(`Icon "${name}" not found in ${variant} variant`);
    return null;
  }

  const iconClasses = clsx(
    styles.icon,
    styles[`size-${size}`],
    spin && styles.spin,
    className
  );

  return (
    <span
      className={iconClasses}
      role={ariaLabel ? 'img' : undefined}
      aria-label={ariaLabel}
      aria-hidden={ariaHidden}
      dangerouslySetInnerHTML={{ __html: svgContent }}
    />
  );
};

Icon.displayName = 'Icon';
