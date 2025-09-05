import { test, expect } from '@playwright/test';

test('EPAM website navigation and verification', async ({ page }) => {
  // Step 1: Navigate to https://www.epam.com/
  await page.goto('https://www.epam.com/');
  
  // Step 2: Select "Services" from the header menu
  await page.click('text=Services');
  
  // Step 3: Click the "Explore Our Client Work" link
  await page.click('text=Explore Our Client Work');
  
  // Step 4: Verify the visibility of the "Client Work" text
  const clientWorkText = await page.locator('text=Client Work').first();
  await expect(clientWorkText).toBeVisible();
});