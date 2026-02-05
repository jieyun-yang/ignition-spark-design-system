/**
 * Design Tokens Index
 *
 * Central export for all design tokens
 */

// Import CSS tokens to ensure they're bundled
import './tokens.css';

import { colors } from './colors';
import { spacing } from './spacing';
import { typography } from './typography';
import { borders } from './borders';
import { shadows } from './shadows';
import { illustrations } from './illustrations';
import { animations } from './animations';

export { colors, type Colors } from './colors';
export { spacing, type Spacing } from './spacing';
export { typography, type Typography } from './typography';
export { borders, type Borders } from './borders';
export { shadows, type Shadows } from './shadows';
export { illustrations, type Illustrations } from './illustrations';
export { animations, type Animations } from './animations';

export const tokens = {
  colors,
  spacing,
  typography,
  borders,
  shadows,
  illustrations,
  animations,
} as const;
