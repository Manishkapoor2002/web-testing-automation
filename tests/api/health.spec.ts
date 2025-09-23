import { expect } from '@playwright/test';
import { test } from '../../fixtures/test-fixtures';

// @testCaseId:API-001
// Validate API health endpoint

test.describe('@api @smoke API health', () => {
  test('API-001: should return 200 from /health', async ({ apiContext }) => {
    const res = await apiContext.get('/health');
    expect(res.status(), 'status').toBe(200);
    const bodyText = await res.text();
    expect(bodyText).toBeTruthy();
  });
});
