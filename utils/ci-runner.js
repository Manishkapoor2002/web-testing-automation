#!/usr/bin/env node
const { spawnSync } = require('node:child_process');

const isCI = !!process.env.CI;
const baseArgs = ['test', '--reporter=junit,html'];

if (isCI) {
  baseArgs.push('--retries=2');
}

const result = spawnSync('npx', ['playwright', ...baseArgs], { stdio: 'inherit' });
process.exit(result.status || 0);
