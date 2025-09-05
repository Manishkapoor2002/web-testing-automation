# EPAM Website Test Automation

This project contains automated tests for the EPAM website using Playwright and TypeScript.

## Test Scenario

The test performs the following actions:
1. Navigate to https://www.epam.com/
2. Select "Services" from the header menu
3. Click the "Explore Our Client Work" link
4. Verify the visibility of the "Client Work" text

## Running the Tests

To run the tests, follow these steps:

1. Install dependencies:
   ```
   npm install
   ```

2. Run the tests:
   ```
   npm test
   ```

This will execute the tests in Chromium, Firefox, and WebKit browsers.

## Test Results

The tests will generate a report in the `playwright-report` directory. You can view this report by opening the `index.html` file in your browser.
