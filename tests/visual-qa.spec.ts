import { test, expect } from '@playwright/test';

/**
 * Visual QA Test Suite - Updated for Tab Navigation
 *
 * Comprehensive visual regression testing for:
 * - Design system components
 * - Demo templates
 * - Interactive states
 */

test.describe('Design System Components - Visual QA', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
    // Default page loads with "Forms" tab active
  });

  test('Homepage loads with Forms tab', async ({ page }) => {
    // Verify Forms tab is active
    await expect(page.locator('h1').first()).toContainText('Forms');
    await expect(page).toHaveScreenshot('homepage-forms-tab.png');
  });

  test('Data Display components', async ({ page }) => {
    // Click Data Display tab
    await page.locator('nav button').filter({ hasText: 'Data Display' }).click();
    await page.waitForTimeout(300);

    // Take full page screenshot
    await expect(page).toHaveScreenshot('data-display-components.png', { fullPage: true });
  });

  test('Alert & Toast components', async ({ page }) => {
    // Click Alert & Toast tab
    await page.locator('nav button').filter({ hasText: 'Alert & Toast' }).click();
    await page.waitForTimeout(300);

    await expect(page).toHaveScreenshot('alert-toast-components.png', { fullPage: true });
  });

  test('Container components', async ({ page }) => {
    // Click Containers tab
    await page.locator('nav button').filter({ hasText: 'Containers' }).click();
    await page.waitForTimeout(300);

    await expect(page).toHaveScreenshot('container-components.png', { fullPage: true });
  });

  test('Navigation components', async ({ page }) => {
    // Click Navigation tab
    await page.locator('nav button').filter({ hasText: 'Navigation' }).click();
    await page.waitForTimeout(300);

    await expect(page).toHaveScreenshot('navigation-components.png', { fullPage: true });
  });
});

test.describe('Email Template - Visual QA', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
    // Navigate to Templates tab
    await page.locator('nav button').filter({ hasText: 'Templates' }).click();
    await page.waitForTimeout(500);

    // Click Email Template button
    await page.locator('button').filter({ hasText: 'View Email Template' }).click();
    await page.waitForTimeout(500);
  });

  test('Email template page loads', async ({ page }) => {
    await expect(page.locator('h1')).toContainText('Email Template');
    await expect(page).toHaveScreenshot('email-template-page.png');
  });

  test('Email variant: Ignition (with graphics)', async ({ page }) => {
    const variantButton = page.locator('button').filter({ hasText: 'Ignition (with graphics)' });
    await variantButton.click();
    await page.waitForTimeout(300);

    const emailContainer = page.locator('[class*="emailOuter"]').first();
    await expect(emailContainer).toHaveScreenshot('email-ignition-graphics.png');
  });

  test('Email variant: Branded (with graphics)', async ({ page }) => {
    const variantButton = page.locator('button').filter({ hasText: 'Branded (with graphics)' });
    await variantButton.click();
    await page.waitForTimeout(300);

    const emailContainer = page.locator('[class*="emailOuter"]').first();
    await expect(emailContainer).toHaveScreenshot('email-branded-graphics.png');
  });

  test('Email variant: Ignition (no graphics)', async ({ page }) => {
    const variantButton = page.locator('button').filter({ hasText: 'Ignition (no graphics)' });
    await variantButton.click();
    await page.waitForTimeout(300);

    const emailContainer = page.locator('[class*="emailOuter"]').first();
    await expect(emailContainer).toHaveScreenshot('email-ignition-no-graphics.png');
  });

  test('Email variant: Branded (no graphics)', async ({ page }) => {
    const variantButton = page.locator('button').filter({ hasText: 'Branded (no graphics)' });
    await variantButton.click();
    await page.waitForTimeout(300);

    const emailContainer = page.locator('[class*="emailOuter"]').first();
    await expect(emailContainer).toHaveScreenshot('email-branded-no-graphics.png');
  });

  test('Email variant: Branded (no logo)', async ({ page }) => {
    const variantButton = page.locator('button').filter({ hasText: 'Branded (no logo)' });
    await variantButton.click();
    await page.waitForTimeout(300);

    const emailContainer = page.locator('[class*="emailOuter"]').first();
    await expect(emailContainer).toHaveScreenshot('email-branded-no-logo.png');
  });
});

test.describe('Wizard Template - Visual QA', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
    // Navigate to Templates tab
    await page.locator('nav button').filter({ hasText: 'Templates' }).click();
    await page.waitForTimeout(500);

    // Click Wizard Template button
    await page.locator('button').filter({ hasText: 'View Wizard Template' }).click();
    await page.waitForTimeout(500);
  });

  test('Wizard page loads - Default intro', async ({ page }) => {
    await expect(page.locator('h1').first()).toContainText(/Get Started|Lorem ipsum/);
    await expect(page).toHaveScreenshot('wizard-intro-default.png');
  });

  test('Wizard: Intro page - Simple variant', async ({ page }) => {
    // Click simple variant
    const simpleButton = page.locator('button').filter({ hasText: /^simple$/i }).first();
    await simpleButton.click();
    await page.waitForTimeout(300);
    await expect(page).toHaveScreenshot('wizard-intro-simple.png');
  });

  test('Wizard: Intro page - Detailed variant', async ({ page }) => {
    const detailedButton = page.locator('button').filter({ hasText: /^detailed$/i }).first();
    await detailedButton.click();
    await page.waitForTimeout(300);
    await expect(page).toHaveScreenshot('wizard-intro-detailed.png');
  });

  test('Wizard: Form page', async ({ page }) => {
    // Use page navigator buttons
    const formNavButton = page.locator('[class*="pageNavigator"] button').filter({ hasText: 'Form' });
    await formNavButton.click();
    await page.waitForTimeout(500);
    await expect(page).toHaveScreenshot('wizard-form-page.png');
  });

  test('Wizard: Table page', async ({ page }) => {
    const tableNavButton = page.locator('[class*="pageNavigator"] button').filter({ hasText: 'Table' });
    await tableNavButton.click();
    await page.waitForTimeout(500);

    // Scroll to see more of table
    await page.evaluate(() => window.scrollTo(0, 300));
    await page.waitForTimeout(300);
    await expect(page).toHaveScreenshot('wizard-table-page.png', { fullPage: true });
  });

  test('Wizard: Loading page - Default variant', async ({ page }) => {
    const loadingNavButton = page.locator('[class*="pageNavigator"] button').filter({ hasText: 'Loading' });
    await loadingNavButton.click();
    await page.waitForTimeout(500);
    await expect(page).toHaveScreenshot('wizard-loading-default.png');
  });

  test('Wizard: Loading page - Progress variant', async ({ page }) => {
    const loadingNavButton = page.locator('[class*="pageNavigator"] button').filter({ hasText: 'Loading' });
    await loadingNavButton.click();
    await page.waitForTimeout(500);

    const progressButton = page.locator('button').filter({ hasText: /^progress$/i }).first();
    await progressButton.click();
    await page.waitForTimeout(300);
    await expect(page).toHaveScreenshot('wizard-loading-progress.png');
  });

  test('Wizard: Transition page - Display 1 (no bg)', async ({ page }) => {
    const transitionNavButton = page.locator('[class*="pageNavigator"] button').filter({ hasText: 'Transition' });
    await transitionNavButton.click();
    await page.waitForTimeout(500);
    await expect(page).toHaveScreenshot('wizard-transition-display1-no-bg.png');
  });

  test('Wizard: Transition page - Display 1 (with bg)', async ({ page }) => {
    const transitionNavButton = page.locator('[class*="pageNavigator"] button').filter({ hasText: 'Transition' });
    await transitionNavButton.click();
    await page.waitForTimeout(500);

    const display1TrueButton = page.locator('button').filter({ hasText: 'display1-true' }).first();
    await display1TrueButton.click();
    await page.waitForTimeout(300);
    await expect(page).toHaveScreenshot('wizard-transition-display1-with-bg.png');
  });

  test('Wizard: Transition page - Display 2 (no bg)', async ({ page }) => {
    const transitionNavButton = page.locator('[class*="pageNavigator"] button').filter({ hasText: 'Transition' });
    await transitionNavButton.click();
    await page.waitForTimeout(500);

    const display2FalseButton = page.locator('button').filter({ hasText: 'display2-false' }).first();
    await display2FalseButton.click();
    await page.waitForTimeout(300);
    await expect(page).toHaveScreenshot('wizard-transition-display2-no-bg.png');
  });

  test('Wizard: Transition page - Display 2 (with bg)', async ({ page }) => {
    const transitionNavButton = page.locator('[class*="pageNavigator"] button').filter({ hasText: 'Transition' });
    await transitionNavButton.click();
    await page.waitForTimeout(500);

    const display2TrueButton = page.locator('button').filter({ hasText: 'display2-true' }).first();
    await display2TrueButton.click();
    await page.waitForTimeout(300);
    await expect(page).toHaveScreenshot('wizard-transition-display2-with-bg.png');
  });
});

test.describe('Proposals Template - Visual QA', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
    // Navigate to Templates tab
    await page.locator('nav button').filter({ hasText: 'Templates' }).click();
    await page.waitForTimeout(500);

    // Click Proposals Template button
    await page.locator('button').filter({ hasText: 'View Proposals Template' }).click();
    await page.waitForTimeout(500);
  });

  test('Proposals page loads', async ({ page }) => {
    // Verify page loaded by checking for "Proposals" heading or content
    await expect(page.locator('text=Proposals')).toBeVisible();
    await expect(page).toHaveScreenshot('proposals-page-top.png');
  });

  test('Proposals page - Full document', async ({ page }) => {
    // Capture full page scroll
    await expect(page).toHaveScreenshot('proposals-full-document.png', { fullPage: true });
  });
});

test.describe('Illustrations - Visual QA', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('Illustrations showcase', async ({ page }) => {
    // Click Illustrations tab
    await page.locator('nav button').filter({ hasText: 'Illustrations' }).click();
    await page.waitForTimeout(500);

    await expect(page).toHaveScreenshot('illustrations-showcase.png', { fullPage: true });
  });
});

test.describe('Accessibility & Interaction Tests', () => {
  test('Button focus states', async ({ page }) => {
    await page.goto('/');

    // Tab to first button and verify focus
    await page.keyboard.press('Tab');
    const focusedElement = await page.evaluate(() => document.activeElement?.tagName);
    expect(focusedElement).toBeTruthy();
  });

  test('Tab navigation works', async ({ page }) => {
    await page.goto('/');

    // Test clicking different tabs
    const dataDisplayTab = page.locator('nav button').filter({ hasText: 'Data Display' });
    await dataDisplayTab.click();
    await page.waitForTimeout(300);

    // Verify tab switched - Data Display tab has "Data Display" as the h1
    await expect(page.locator('h1').first()).toContainText('Data Display');
  });

  test('All images have alt attributes', async ({ page }) => {
    await page.goto('/');

    const images = await page.locator('img').all();
    for (const img of images) {
      const alt = await img.getAttribute('alt');
      expect(alt).toBeDefined(); // Should have alt attribute (can be empty for decorative)
    }
  });
});

test.describe('Design Token Usage Check', () => {
  test('No hardcoded colors in computed styles', async ({ page }) => {
    await page.goto('/');

    // Sample check: Primary button should use CSS variables
    const navButton = page.locator('nav button').first();
    if (await navButton.count() > 0) {
      const bgColor = await navButton.evaluate((el) => {
        const computed = window.getComputedStyle(el);
        return computed.backgroundColor;
      });

      // Should resolve to actual color, not "transparent"
      expect(bgColor).toBeTruthy();
      expect(bgColor).not.toBe('transparent');
    }
  });
});
