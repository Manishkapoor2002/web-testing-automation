import { defineConfig } from '@playwright/test';

export default defineConfig({
  use: {
    baseURL: 'http://uitestingplayground.com',
    headless: false,
    trace: 'on',
  },
});