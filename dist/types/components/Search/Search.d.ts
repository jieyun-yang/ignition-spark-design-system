/**
 * Search Component
 *
 * A search input field with icon and clear button.
 * Provides visual feedback for search functionality.
 *
 * Figma: Matches Search in Spark Components
 *
 * @example
 * <Search
 *   value={query}
 *   onChange={setQuery}
 *   placeholder="Search..."
 * />
 */
import React from 'react';
export interface SearchProps {
    /** Current search value */
    value?: string;
    /** Change handler */
    onChange?: (value: string) => void;
    /** Placeholder text */
    placeholder?: string;
    /** Disabled state */
    disabled?: boolean;
    /** Optional CSS class name */
    className?: string;
    /** Optional callback when clear button is clicked */
    onClear?: () => void;
}
export declare const Search: React.FC<SearchProps>;
