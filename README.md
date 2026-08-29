# AIAgentRepository

This project demonstrates browser automation using Playwright for a real e-commerce flow. It covers login, product selection, cart validation, and checkout steps against the Rahul Shetty Academy demo application.

## What this project does

The suite of tests automates a realistic user journey:

- Access the login page
- Authenticate with valid credentials
- Open the shop page
- Select the iPhone X product
- Add it to the cart
- Validate the cart and checkout flow
- Complete the checkout steps and confirm the purchase success message

## MCPs in use

This project is designed around the Playwright MCP server for browser automation, which allows the agent to interact with the web application in a real browser session. In the IDE environment, GitHub MCP is also used for repository operations, such as creating and managing the remote repository.

## Project structure

- `tests/checkout-flow.spec.ts` – validates login, product selection, and cart flow
- `tests/checkout-complete-flow.spec.ts` – covers the full checkout flow including purchase confirmation
- `playwright.config.ts` – Playwright configuration for the browser and test runner
- `package.json` – project dependencies and scripts

## Requirements

- Node.js 18+
- npm

## Install dependencies

```bash
npm install
```

## Run the tests

Run all tests:

```bash
npx playwright test --reporter=line
```

Run a specific test file:

```bash
npx playwright test tests/checkout-flow.spec.ts --reporter=line
```

Run in headed mode to watch the browser UI:

```bash
npx playwright test tests/checkout-flow.spec.ts tests/checkout-complete-flow.spec.ts --headed --reporter=line
```

## Notes

The login uses the demo credentials provided by the Rahul Shetty Academy site for this exercise, and the tests are built to validate real browser behavior against the live application.
