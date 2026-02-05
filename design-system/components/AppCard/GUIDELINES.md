# AppCard Guidelines

## Overview

The AppCard (App Tile) component provides a standardized visual representation for individual applications within the system. It displays essential app information and facilitates interaction such as connecting to, importing from, or managing an app.

## Anatomy

- **Container:** The primary bounding box for the tile
- **App logo:** Visual identifier of the application
- **App name:** Name of the application
- **Description:** Optional text, often displaying an associated account name
- **Badge (optional):** Indicates connection status (e.g., connected, has error)
- **Icon (optional):** Indicates availability status (e.g., feature gated, unavailable)

## Where to Use

- On the "Apps" page
- Within the "NPE > Client select dropdown" when syncing from an app
- In "Select an app" modals:
  - During NPE (New Partner Experience): Client select dropdown
  - On the Clients page: 'Import' functionality

## States

| Property | Description |
|:---------|:------------|
| **Default** | Standard appearance when no specific state is active |
| **Hover** | Appearance when cursor is over the tile |
| `isAuthorised` | App can be connected |
| `isAuthorised, showDescription` | App can be connected with description displayed |
| `isAvailable=no` | App cannot be connected. Tooltip explains reason on hover. |
| `isEnabled` | App is currently connected |
| `isError` | Connection error (previously connected but now has an issue) |
| `showPremiumBanner` | App is feature-gated (requires higher plan subscription) |

## Interactions

- **On Hover:** Display shadow/elevation effect
- **Click/Select:** Opens related drawer with more details or actions

## Styling

AppCards inherit styles from the Card component with these modifications:
- **Width/Height:** Fixed, square aspect ratio (N*N)
- **Justify Content:** Centered within the tile
- **On Hover:** Shadow/elevation effect

## Variants

### Zapier Workflow App Tiles

- **Size:** Smaller than default App Tiles
- **Content:** No description or app status/availability badges/icons
- **Usage:** Only displayed on the "Apps" page in dedicated Zapier workflow section

### "Request App" Tile

- **Purpose:** Allows users to request new apps to add to the ecosystem
- **Interaction:** Triggers Intercom widget for feedback (instead of opening drawer)

## Best Practices

### Do's

- Display app logo prominently for easy identification
- Show connection status clearly via badges
- Provide hover states for all interactive tiles
- Use tooltips to explain unavailable states

### Don'ts

- Don't overcrowd with excessive information
- Don't hide important status indicators
- Don't use without proper error state handling

## Accessibility

- Ensure all interactive elements are keyboard accessible
- Provide clear focus indicators
- Use tooltips to explain icon meanings
- Ensure sufficient color contrast for status badges

## Related Components

- **Card:** AppCard uses Card as its base component and inherits its styles with specific modifications
