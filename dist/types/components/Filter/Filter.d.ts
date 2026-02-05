/**
 * Filter Component
 *
 * A pill-style filter button with dropdown popover for selecting filter options.
 * Matches Figma Filter design.
 *
 * Figma: https://www.figma.com/design/pFe8ykz2F9QdvabPsTGl1L/Spark-%7C-Components?node-id=5773-12918
 *
 * @example
 * <Filter
 *   label="Status"
 *   value="Active"
 *   options={['Active', 'Inactive', 'Pending']}
 *   onApply={(value) => console.log(value)}
 *   onRemove={() => console.log('removed')}
 * />
 */
export interface FilterOption {
    label: string;
    value: string;
}
export interface FilterProps {
    /** Filter label (e.g., "Status", "Type") */
    label: string;
    /** Optional sub-filter label shown above the main label */
    subLabel?: string;
    /** Currently selected value */
    value?: string;
    /** Filter options - can be array of strings or objects with label/value */
    options?: string[] | FilterOption[];
    /** Allow custom text input instead of predefined options */
    allowCustomInput?: boolean;
    /** Placeholder for custom input */
    inputPlaceholder?: string;
    /** Callback when filter is applied */
    onApply?: (value: string) => void;
    /** Callback when filter is removed */
    onRemove?: () => void;
    /** Additional CSS class */
    className?: string;
}
export declare function Filter({ label, subLabel, value, options, allowCustomInput, inputPlaceholder, onApply, onRemove, className, }: FilterProps): import("react/jsx-runtime").JSX.Element;
