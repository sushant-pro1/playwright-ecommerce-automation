# Playwright E-Commerce Automation Framework

A UI test automation framework for the [SauceDemo](https://www.saucedemo.com/) e-commerce application, built using **Playwright Test and JavaScript**. The project uses the **Page Object Model (POM)** to organize page interactions and supports automated test execution across Chromium, Firefox, and WebKit.

## Features

- Page Object Model (POM) for maintainable test code
- Reusable page classes and test data
- UI validation for login, inventory, shopping cart, and checkout
- Positive and negative test scenarios
- Cross-browser testing with Chromium, Firefox, and WebKit
- HTML test reports and failure artifacts
- GitHub Actions integration for continuous integration (CI)

## Tech Stack

- **Language:** JavaScript
- **Automation:** Playwright Test
- **Design Pattern:** Page Object Model
- **Test Application:** SauceDemo
- **CI/CD:** GitHub Actions
- **Version Control:** Git and GitHub
- **Environment Configuration:** dotenv

## Project Structure

```text
playwright-ecommerce-automation/
├── data/
│   ├── constants.js
│   └── users.js
├── pages/
│   ├── LoginPage.js
│   ├── InventoryPage.js
│   └── CartPage.js
├── tests/
│   ├── Login.spec.js
│   ├── inventory.spec.js
│   └── cart.spec.js
├── .github/
│   └── workflows/
│       └── playwright.yml
├── .env                 # Local environment configuration
├── .gitignore
├── package.json
├── package-lock.json
├── playwright.config.js
└── README.md
```

**Note:** The `.env` file contains local configuration and should not be committed to Git.

## Prerequisites

- Node.js and npm
- Git
- A GitHub account to access the repository

## Installation

Clone the repository and enter the project directory:

```bash
git clone https://github.com/sushant-pro1/playwright-ecommerce-automation.git
cd playwright-ecommerce-automation
```

Install dependencies:

```bash
npm ci
```

Install the Playwright browsers:

```bash
npx playwright install
```

On Linux CI environments, use `npx playwright install --with-deps` when browser system dependencies need to be installed.

## Environment Configuration

Create a `.env` file in the project root:

```env
BASE_URL=https://www.saucedemo.com
```

Keep `.env` out of version control. Use the project's existing test-data configuration for test credentials.

## Test Scenarios

### Login
- Validate login with valid credentials.
- Verify appropriate error messages for invalid credentials.

### Inventory
- Verify inventory products are displayed.
- Add products to the shopping cart.
- Validate cart badge updates when products are added.

### Shopping Cart and Checkout
- Verify selected products appear in the cart.
- Remove products and validate cart contents.
- Complete the checkout flow.
- Validate checkout information fields, including required-field errors.
- Verify order summary totals and checkout completion.

## Browser Coverage

The Playwright configuration includes the following browsers:

| Browser | Project |
|---|---|
| Chromium | `chromium` |
| Firefox | `firefox` |
| WebKit | `webkit` |

## Running Tests

Run the complete configured test suite:

```bash
npx playwright test
```

Run tests in a specific browser:

```bash
npx playwright test --project=chromium
npx playwright test --project=firefox
npx playwright test --project=webkit
```

Run a specific test file:

```bash
npx playwright test tests/Login.spec.js
npx playwright test tests/inventory.spec.js
npx playwright test tests/cart.spec.js
```

Run only tests tagged for smoke testing:

```bash
npx playwright test --project=chromium --grep "@smoke"
```

Run tests with the Playwright UI:

```bash
npx playwright test --ui
```

## Test Reports and Debugging

Open the HTML report after a test run:

```bash
npx playwright show-report
```

Run tests in headed mode:

```bash
npx playwright test --headed
```

Playwright traces, screenshots, videos, and other failure artifacts depend on the settings in `playwright.config.js` and the CI workflow.

## GitHub Actions Workflow

The project uses GitHub Actions to automate test execution.

- **Push to `main`:** Runs the configured Chromium smoke tests.
- **Pull request targeting `main`:** Runs the configured Chromium regression suite.
- **Artifacts:** The workflow uploads the HTML report and test results when configured by the workflow.

A successful workflow run provides an automated check before changes are merged into `main`.

## Framework Design

The project follows the Page Object Model:

- **`pages/`** — Contains reusable page classes, locators, and UI actions.
- **`tests/`** — Contains test scenarios and assertions.
- **`data/`** — Contains shared constants and test-user data.
- **`playwright.config.js`** — Configures browser projects, test execution, and reporting.
- **`.github/workflows/`** — Defines the CI workflow for automated test execution.

This separation helps keep test cases readable and makes page interactions easier to maintain.

## Future Improvements

- Expand API testing coverage.
- Add additional edge cases and regression scenarios.
- Improve test data management.
- Extend CI execution and reporting as the framework evolves.

## Disclaimer

This project is intended for learning and demonstrating UI test automation against the publicly available SauceDemo demo application.
