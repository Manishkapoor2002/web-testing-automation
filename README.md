# Playwright TS Template

This is a Playwright testing framework template using TypeScript.

## Getting Started

1. Clone the repository.
2. Install dependencies:
   ```bash
   npm install
   npx playwright install
   ```
3. Create a `.env.local` file with the following content:
   ```
   BASE_URL=https://instagram.com
   ```
4. Run tests:
   ```bash
   npm run test
   ```

## CI/CD

This project includes a GitHub Actions workflow for running tests on push and pull requests across Chromium, Firefox, and WebKit.

## Test Cases

### User Authentication
- Successful Login with Valid Credentials
- Login Failure with Invalid Credentials
- Sign-Up with Valid Information
- Sign-Up Failure with Invalid Info
- CAPTCHA Verification
- Password Reset During Login
- Login via Social Media
- Multi-Device Compatibility

### Coverage Summary
- Positive Tests: 4
- Negative Tests: 2
- Non-Functional Tests: 1

### Assumptions and Open Questions
- CAPTCHA implementation details are not provided. How is CAPTCHA failure handled?
- Social media login is limited to Facebook. Are there plans for other providers like Google?
- Are there specific browser versions or device models we need to support?
- Is there a maximum limit for password length, username, or email?

### RTM (Requirements Traceability Matrix)
- AC-1 -> SMP-13-TC1
- AC-2 -> SMP-13-TC2
- AC-3 -> SMP-13-TC3
- AC-4 -> SMP-13-TC4
- AC-5 -> SMP-13-TC5
- AC-6 -> SMP-13-TC6
- AC-7 -> SMP-13-TC7
- AC-8 -> SMP-13-TC8
