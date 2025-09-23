# Web Testing Automation (Playwright Test + TypeScript)

A clean, maintainable UI + API Test Automation Framework using Playwright Test (TypeScript).

- UI tests use Page Object Model (POM)
- API tests use APIRequestContext fixture with env-driven base URL and token
- Reporters: HTML and JUnit
- Browsers: Chromium, Firefox, WebKit; headless by default
- Retries: 0 locally, 2 on CI
- Tags: @ui, @api, @smoke

## Repo setup

- Default branch: main
- Working branch: feature/taf-init
- CI: GitHub Actions matrix across browsers, uploads HTML+JUnit artifacts

## Prerequisites

- Node.js >= 18 (Node 20 used in CI)

## Getting started

1) Install deps and Playwright browsers

- npm ci
- npm run pw:install

2) Configure environment

- Copy .env.example to .env.local (or .env.dev, .env.qa, .env.staging, .env.prod)
- Set BASE_URL, API_BASE_URL, API_TOKEN as needed

3) Run tests

- npm run test:ui
- npm run test:api
- npm run test:all
- npm run test:ci
- npm run test:report

Select environment via env var:

- ENV=qa npm run test:all

Run a single tag:

- npx playwright test --grep "@smoke"

Open HTML report:

- npm run test:report

## Project structure

- playwright.config.ts – global config with env loading and reporters
- config/env.ts – helpers to resolve base URLs per environment
- fixtures/test-fixtures.ts – shared APIRequestContext fixture
- page-objects – POM classes (BasePage, HomePage)
- tests/ui – UI specs (home.spec.ts)
- tests/api – API specs (health.spec.ts)
- utils – utilities (testIds.ts)
- data – test data samples
- .github/workflows/playwright-ci.yml – CI pipeline

## Test cases mapping

- UI-001 → tests/ui/home.spec.ts
- API-001 → tests/api/health.spec.ts

## Contributing workflow

- Create branch from main: feature/<short-description>
- Commit using conventional commits if possible
- Open PR to main with description and checklist

## Notes

- headless set true by default (see playwright.config.ts)
- Use ENV and .env files to override base URLs and tokens
