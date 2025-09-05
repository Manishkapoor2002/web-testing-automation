import { test, expect } from '@playwright/test';

test('EPAM website navigation and verification', async ({ page }) => {
  // Navigate to EPAM website
  await page.goto('https://www.epam.com/');

  // Select "Services" from the header menu
  await page.click('text=Services');

  // Click the "Explore Our Client Work" link
  await page.click('text=Explore Our Client Work');

  // Verify the visibility of the "Client Work" text
  const clientWorkText = await page.locator('text=Client Work').first();
  await expect(clientWorkText).toBeVisible();
});