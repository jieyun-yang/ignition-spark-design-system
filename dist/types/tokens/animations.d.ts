/**
 * Animation Design Tokens
 *
 * Standard durations and easing functions for transitions and animations
 */
export declare const animations: {
    readonly duration: {
        /** Instant - 0ms (no animation) */
        readonly instant: "0ms";
        /** Fast - 100ms (micro-interactions) */
        readonly fast: "100ms";
        /** Normal - 200ms (default for most transitions) */
        readonly normal: "200ms";
        /** Slow - 300ms (complex animations) */
        readonly slow: "300ms";
        /** Slower - 500ms (page transitions) */
        readonly slower: "500ms";
    };
    readonly easing: {
        /** Linear - no easing */
        readonly linear: "linear";
        /** Ease - default browser easing */
        readonly ease: "ease";
        /** Ease in - acceleration curve */
        readonly easeIn: "ease-in";
        /** Ease out - deceleration curve */
        readonly easeOut: "ease-out";
        /** Ease in out - acceleration then deceleration */
        readonly easeInOut: "ease-in-out";
    };
};
export type Animations = typeof animations;
