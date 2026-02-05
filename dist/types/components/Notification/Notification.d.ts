/**
 * Notification Component
 *
 * Displays a notification item with avatar, title, description, timestamp, and unread indicator
 * Matches Figma Notification design
 */
import React from 'react';
export interface NotificationProps {
    /** Avatar content (initials or image) */
    avatar?: React.ReactNode;
    /** Avatar initials (if no custom avatar provided) */
    avatarInitials?: string;
    /** Notification title */
    title: string;
    /** Notification description */
    description?: string;
    /** Timestamp text */
    timestamp: string;
    /** Whether notification is unread */
    unread?: boolean;
    /** Unread indicator color */
    indicatorColor?: string;
    /** Click handler */
    onClick?: () => void;
    /** Additional CSS class */
    className?: string;
}
export declare function Notification({ avatar, avatarInitials, title, description, timestamp, unread, indicatorColor, onClick, className, }: NotificationProps): import("react/jsx-runtime").JSX.Element;
