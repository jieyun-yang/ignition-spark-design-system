/**
 * Calendar Component (Internal)
 *
 * Calendar grid for date selection, used within DatePicker popover
 */
import React from 'react';
interface CalendarProps {
    selectedDate: Date | null;
    onSelectDate: (date: Date) => void;
    onClose: () => void;
}
export declare const Calendar: React.FC<CalendarProps>;
export {};
