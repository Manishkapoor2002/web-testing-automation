import { test, expect } from '@playwright/test';

test('EPAM Services and Client Work Navigation', async ({ page }) => {
  // Navigate to EPAM website
  await page.goto('https://www.epam.com/');

  // Select "Services" from the header menu
  await page.click('text=Services');

  // Click the "Explore Our Client Work" link
  await page.click('text=Explore Our Client Work');

  // Verify that the "Client Work" text is visible on the page
  await expect(page.locator('text=Client Work')).toBeVisible();
});