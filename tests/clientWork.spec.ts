import { test, expect } from '@playwright/test';
import { HeaderPage } from '../src/pages/HeaderPage';
import { ClientWorkPage } from '../src/pages/ClientWorkPage';
import { CookieConsent } from '../src/pages/CookieConsent';

test('Explore Our Client Work', async ({ page }) => {
  const headerPage = new HeaderPage(page);
  const clientWorkPage = new ClientWorkPage(page);
  const cookieConsent = new CookieConsent(page);

  await page.goto('https://www.epam.com/');
  await cookieConsent.acceptCookies();
  await headerPage.selectServices();
  await headerPage.clickExploreOurClientWork();

  await expect(clientWorkPage.isClientWorkHeadingVisible()).toBeTruthy();
});
