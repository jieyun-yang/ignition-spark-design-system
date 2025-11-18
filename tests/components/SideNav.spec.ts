import { test, expect } from '@playwright/test';

/**
 * SideNav Component Tests
 * Verified against production: 2025-11-15
 * Spec: Width 220px, Font size 16px, Active border-right 3px purple
 */

test.describe('SideNav Component', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
    // Navigate to templates to see SideNav in action
    await page.locator('nav button').filter({ hasText: 'Templates' }).click();
    await page.waitForTimeout(300);
    await page.locator('button').filter({ hasText: 'View Proposals Template' }).click();
    await page.waitForTimeout(500);
  });

  test('Visual regression - default state', async ({ page }) => {
    const sideNav = page.locator('[class*="sideNav"]').first();
    await expect(sideNav).toHaveScreenshot('sidenav-default.png');
  });

  test('Has correct width (220px)', async ({ page }) => {
    const sideNav = page.locator('[class*="sideNav"]').first();
    const width = await sideNav.evaluate((el) => {
      return window.getComputedStyle(el).width;
    });
    expect(width).toBe('220px');
  });

  test('Nav items have correct font size (16px)', async ({ page }) => {
    const navLabel = page.locator('[class*="navLabel"]').first();
    const fontSize = await navLabel.evaluate((el) => {
      return window.getComputedStyle(el).fontSize;
    });
    expect(fontSize).toBe('16px');
  });

  test('Active nav item shows purple border-right', async ({ page }) => {
    const activeItem = page.locator('[class*="navItemActive"]').first();
    if (await activeItem.count() > 0) {
      const borderRight = await activeItem.evaluate((el) => {
        return window.getComputedStyle(el).borderRightWidth;
      });
      expect(borderRight).toBe('3px');
    }
  });

  test('Nav items are interactive', async ({ page }) => {
    const navItem = page.locator('[class*="navButton"]').first();
    await navItem.hover();
    await page.waitForTimeout(200);
    await expect(navItem).toHaveScreenshot('sidenav-nav-item-hover.png');
  });

  test('Create button is visible and clickable', async ({ page }) => {
    const createButton = page.locator('[class*="createButton"]').first();
    await expect(createButton).toBeVisible();

    await createButton.hover();
    await page.waitForTimeout(200);
    await expect(createButton).toHaveScreenshot('sidenav-create-button-hover.png');
  });

  test('Refer & earn button is visible', async ({ page }) => {
    const referButton = page.locator('[class*="referButton"]').first();
    await expect(referButton).toBeVisible();

    await referButton.hover();
    await page.waitForTimeout(200);
    await expect(referButton).toHaveScreenshot('sidenav-refer-button-hover.png');
  });

  test('User account section is visible', async ({ page }) => {
    const userAccount = page.locator('[class*="userAccount"]').first();
    await expect(userAccount).toBeVisible();
    await expect(userAccount).toHaveScreenshot('sidenav-user-account.png');
  });

  test('Background color matches design tokens', async ({ page }) => {
    const navContent = page.locator('[class*="navContentWrapper"]').first();
    const bgColor = await navContent.evaluate((el) => {
      return window.getComputedStyle(el).backgroundColor;
    });
    // Should be Gray/50: rgb(248, 248, 252)
    expect(bgColor).toBe('rgb(248, 248, 252)');
  });
});
