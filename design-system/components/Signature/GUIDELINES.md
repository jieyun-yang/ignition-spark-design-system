# Signature Guidelines

## Overview

The Signature component represents the output of an end-client entering their name, primarily used for indicating approval. It leverages a specific web-font, with robust fallbacks, to render the client's name in a script-like style, conveying a sense of official endorsement.

## Usage Guidelines

*   Used to display client approval within a proposal summary drawer.
*   Used to show a signature in the client portal interface.
*   Used as a placeholder in input fields where the client is expected to type their name.
*   Employed when a client types their name for endorsement or confirmation.
*   The designated font is utilized within rich text editors for signing messages or communications.

## Properties/Options

### Font Properties

| Property         | Type     | Description                                                                                                                                | Default        |
| :--------------- | :------- | :----------------------------------------------------------------------------------------------------------------------------------------- | :------------- |
| Primary Web-font | `string` | The preferred web-font for rendering the signature.                                                                                        | `Suomi`        |
| Font Fallback 1  | `string` | If the primary web-font (`Suomi`) is unavailable on the user's system, a generic script font is used as an alternative.                    | `generic script` |
| Font Fallback 2  | `string` | If both the primary web-font and the first fallback (generic script) are unavailable, a standard cursive font is used as a final fallback. | `cursive`      |

## Best Practices

### Do

*   **Represent Approval**: Use this component specifically to represent the explicit approval or endorsement of the client.

### Don't

*   **Avoid Contact Representation**: Do not use this component to represent a contact's general name or contact information. Its purpose is solely for approval.
*   **Email Font Usage**: Do not rely on the `Suomi` font for display within emails, as email clients have varied and often limited font rendering capabilities, which may prevent the intended font from displaying correctly.
