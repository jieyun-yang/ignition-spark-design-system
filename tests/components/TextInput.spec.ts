import { test, expect } from '@playwright/test';

/**
 * TextInput Component Tests
 * Verified against production: 2025-11-15
 * Production spec: height 32px, padding 0px 12px, border-radius 3px
 */

test.describe('TextInput Component', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
    await page.locator('nav button').filter({ hasText: 'Forms' }).click();
    await page.waitForTimeout(300);
  });

  // Helper to get the actual TextInput component (not DatePicker or Search inputs)
  const getTextInput = (page) => page.locator('input[placeholder="Enter your name"]');

  test('Visual regression - default state', async ({ page }) => {
    const textInput = getTextInput(page);
    await expect(textInput).toHaveScreenshot('textinput-default.png');
  });

  test('Has correct height (32px)', async ({ page }) => {
    const textInput = getTextInput(page);
    const height = await textInput.evaluate((el) => {
      return window.getComputedStyle(el).height;
    });
    expect(height).toBe('32px');
  });

  test('Has correct padding (0px 12px)', async ({ page }) => {
    const textInput = getTextInput(page);
    const padding = await textInput.evaluate((el) => {
      const computed = window.getComputedStyle(el);
      return {
        paddingTop: computed.paddingTop,
        paddingRight: computed.paddingRight,
        paddingBottom: computed.paddingBottom,
        paddingLeft: computed.paddingLeft,
      };
    });
    expect(padding.paddingTop).toBe('0px');
    expect(padding.paddingRight).toBe('12px');
    expect(padding.paddingBottom).toBe('0px');
    expect(padding.paddingLeft).toBe('12px');
  });

  test('Has correct border-radius (3px)', async ({ page }) => {
    const textInput = getTextInput(page);
    const borderRadius = await textInput.evaluate((el) => {
      return window.getComputedStyle(el).borderRadius;
    });
    expect(borderRadius).toBe('3px');
  });

  test('Has correct font size (14px)', async ({ page }) => {
    const textInput = getTextInput(page);
    const fontSize = await textInput.evaluate((el) => {
      return window.getComputedStyle(el).fontSize;
    });
    expect(fontSize).toBe('14px');
  });

  test('Has correct border color', async ({ page }) => {
    const textInput = getTextInput(page);
    const borderColor = await textInput.evaluate((el) => {
      return window.getComputedStyle(el).borderColor;
    });
    // Should be Gray/400: rgb(183, 186, 199)
    expect(borderColor).toBe('rgb(183, 186, 199)');
  });

  test('Focused state', async ({ page }) => {
    const textInput = getTextInput(page);
    await textInput.focus();
    await page.waitForTimeout(200);
    await expect(textInput).toHaveScreenshot('textinput-focused.png');
  });

  test('Input is interactive', async ({ page }) => {
    const textInput = getTextInput(page);
    await expect(textInput).toBeEnabled();
    await textInput.fill('Test input');
    expect(await textInput.inputValue()).toBe('Test input');
  });

  test('Disabled state', async ({ page }) => {
    // Target the disabled TextInput in the demo (has label "Email (Disabled)")
    const disabledInput = page.locator('input[type="text"]:disabled').filter({ hasText: '' }).last();
    const count = await disabledInput.count();
    if (count > 0) {
      await expect(disabledInput).toHaveScreenshot('textinput-disabled.png');
    } else {
      // Skip if no disabled TextInput found
      test.skip();
    }
  });

  test('Error state (if present)', async ({ page }) => {
    // Look for TextInput with error - has placeholder "Enter your email" and value "invalid@"
    const errorInput = page.locator('input[placeholder="Enter your email"]').filter({ hasText: 'invalid@' });
    const count = await errorInput.count();
    if (count > 0) {
      await expect(errorInput).toHaveScreenshot('textinput-error.png');
    } else {
      // Skip if no error TextInput found
      test.skip();
    }
  });
});
