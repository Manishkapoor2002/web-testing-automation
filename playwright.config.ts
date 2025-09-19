import { defineConfig, devices } from '@playwright/test';
import * as dotenv from 'dotenv';
import path from 'path';

// Load env from .env or .env.<ENV>
const ENV = process.env.ENV || process.env.NODE_ENV || 'local';
const envFile = [`.env.${ENV}`, '.env']
  .map((f) => path.resolve(process.cwd(), f))
  .find((p) => require('fs').existsSync(p));
if (envFile) dotenv.config({ path: envFile });

const baseURL = process.env.BASE_URL || 'https://automationexercise.com';
const apiBaseURL = process.env.API_BASE_URL || baseURL;
const headless = process.env.HEADLESS ? process.env.HEADLESS === 'true' : true;

export default defineConfig({
  testDir: './tests',
  timeout: 60_000,
  expect: { timeout: 10_000 },
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  reporter: [
    ['html', { outputFolder: 'playwright-report', open: 'never' }],
    ['junit', { outputFile: 'reports/junit-results.xml' }]
  ],
  use: {
    baseURL,
    extraHTTPHeaders: async () => {
      const token = process.env.API_TOKEN;
      return token ? { Authorization: `Bearer ${token}` } : {};
    },
    trace: 'retain-on-failure',
    headless,
    video: 'retain-on-failure',
    screenshot: 'only-on-failure'
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] }
    },
    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] }
    },
    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] }
    },
    {
      name: 'mobile-chromium',
      use: { ...devices['Pixel 5'] }
    }
  ],
  metadata: {
    baseURL,
    apiBaseURL,
    env: ENV
  }
});
