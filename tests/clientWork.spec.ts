import { test, expect } from '@playwright/test';
import { HeaderPage } from '../src/pages/HeaderPage';
import { ClientWorkPage } from '../src/pages/ClientWorkPage';

test('Explore Our Client Work', async ({ page }) => {
  const headerPage = new HeaderPage(page);
  const clientWorkPage = new ClientWorkPage(page);

  await page.goto('https://www.epam.com/');
  await headerPage.selectServices();
  await headerPage.clickExploreOurClientWork();

  await expect(clientWorkPage.isClientWorkHeadingVisible()).toBeTruthy();
});
