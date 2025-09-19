import { expect, Locator } from '@playwright/test';

export async function expectNoConsoleErrors(logs: string[]) {
  const errors = logs.filter((l) => l.startsWith('error'));
  expect(errors, `Console errors found:\n${logs.join('\n')}`).toHaveLength(0);
}

export async function expectCountAtLeast(locator: Locator, min: number) {
  const count = await locator.count();
  expect(count).toBeGreaterThanOrEqual(min);
}
