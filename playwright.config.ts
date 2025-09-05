import { defineConfig } from '@playwright/test';

export default defineConfig({
  use: {
    baseURL: 'https://www.epam.com/',
    headless: true,
    browserName: 'chromium',
    retries: 2,
    locale: 'en-US',
    viewport: { width: 1280, height: 720 },
    trace: 'on-failure',
    reporter: [['allure-playwright']]
  }
});
