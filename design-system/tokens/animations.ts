/**
 * Animation Design Tokens
 *
 * Standard durations and easing functions for transitions and animations
 */

export const animations = {
  duration: {
    /** Instant - 0ms (no animation) */
    instant: '0ms',
    /** Fast - 100ms (micro-interactions) */
    fast: '100ms',
    /** Normal - 200ms (default for most transitions) */
    normal: '200ms',
    /** Slow - 300ms (complex animations) */
    slow: '300ms',
    /** Slower - 500ms (page transitions) */
    slower: '500ms',
  },
  easing: {
    /** Linear - no easing */
    linear: 'linear',
    /** Ease - default browser easing */
    ease: 'ease',
    /** Ease in - acceleration curve */
    easeIn: 'ease-in',
    /** Ease out - deceleration curve */
    easeOut: 'ease-out',
    /** Ease in out - acceleration then deceleration */
    easeInOut: 'ease-in-out',
  },
} as const;

export type Animations = typeof animations;
