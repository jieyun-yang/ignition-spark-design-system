/**
 * Avatar Component
 *
 * A circular avatar component that displays user initials or an image.
 * Can be used standalone or as part of a user profile display.
 *
 * Figma: Matches Avatar in Spark Components
 *
 * @example
 * <Avatar initials="AB" />
 * <Avatar src="/path/to/image.jpg" alt="User Name" />
 * <Avatar initials="FC" name="Fred Costanza" email="fred@email.com" />
 */
import React from 'react';
export interface AvatarProps {
    /** User initials to display (if no image provided) */
    initials?: string;
    /** Image source URL */
    src?: string;
    /** Image alt text */
    alt?: string;
    /** Avatar size */
    size?: 'small' | 'medium' | 'large';
    /** Display as user profile with name and email */
    showProfile?: boolean;
    /** User name (for profile variant) */
    name?: string;
    /** User email (for profile variant) */
    email?: string;
    /** Optional CSS class name */
    className?: string;
}
export declare const Avatar: React.FC<AvatarProps>;
