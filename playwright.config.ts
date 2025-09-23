import { defineConfig, devices } from '@playwright/test';
import dotenv from 'dotenv';
import path from 'path';

// Load env from .env.<ENV> if provided, else .env
const ENV = process.env.ENV || process.env.NODE_ENV || 'local';
const envFile = path.resolve(process.cwd(), `.env.${ENV}`);
dotenv.config({ path: envFile });
dotenv.config();

// Map ENV to baseURL via config files or env
const baseURL = process.env.BASE_URL || require('./config/env').getBaseUrl(ENV);

// Retries depending on CI
const isCI = !!process.env.CI;

export default defineConfig({
  testDir: './tests',
  timeout: 30 * 1000,
  retries: isCI ? 2 : 0,
  reporter: [
    ['html', { outputFolder: 'playwright-report', open: 'never' }],
    ['junit', { outputFile: 'reports/junit/results.xml' }]
  ],
  use: {
    baseURL,
    headless: true,
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure'
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
    }
  ],
  // Allow selecting env via CLI: `ENV=staging` or `--config=config/playwright.staging.config.ts`
});
