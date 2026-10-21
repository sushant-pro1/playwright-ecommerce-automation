# Playwright E-Commerce Automation

Automated end-to-end testing of an e-commerce web application using **Playwright Test and JavaScript**. This project tests key user workflows on [SauceDemo](https://www.saucedemo.com/), including login, product selection, shopping cart operations, and checkout.

## 🚀 Project Overview

The goal of this project is to validate essential e-commerce workflows and verify that the application behaves as expected under different test scenarios.

### Key Features

- **Login Testing:** Validate successful login and authentication behavior.
- **Product Testing:** Verify product listings and add-to-cart functionality.
- **Shopping Cart Testing:** Validate cart contents, product removal, and cart item counts.
- **Checkout Testing:** Verify checkout form submission and order completion.
- **Price Validation:** Check subtotal, tax, and total calculations.
- **Page Object Model (POM):** Separate page locators and actions from test cases for maintainability.
- **Reusable Test Data:** Store test data and application constants separately.
- **Automated Assertions:** Use Playwright's built-in assertions to validate expected behavior.

## 🛠️ Tech Stack

- JavaScript
- Playwright Test
- Node.js and npm
- Page Object Model (POM)
- Git and GitHub

## 📁 Project Structure

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
├── playwright.config.js
├── package.json
├── package-lock.json
└── README.md
```

## ⚙️ Installation and Setup

### Prerequisites

- Node.js and npm installed
- Git installed

### 1. Clone the repository

```bash
git clone https://github.com/sushant-pro1/playwright-ecommerce-automation.git
```

### 2. Navigate to the project directory

```bash
cd playwright-ecommerce-automation
```

### 3. Install dependencies

```bash
npm install
```

### 4. Install Playwright browsers

```bash
npx playwright install
```

## ▶️ Running Tests

Run all tests:

```bash
npx playwright test
```

Run tests in headed mode:

```bash
npx playwright test --headed
```

Run a specific test file:

```bash
npx playwright test tests/Login.spec.js
npx playwright test tests/inventory.spec.js
npx playwright test tests/cart.spec.js
```

Run tests using Chromium:

```bash
npx playwright test --project=chromium
```

View the HTML test report:

```bash
npx playwright show-report
```
## Cross-Browser Testing

Run the complete Playwright test suite across configured browsers:

```bash
npx playwright test
```

Run tests in a specific browser:

```bash
npx playwright test --project=chromium
npx playwright test --project=firefox
npx playwright test --project=webkit
```

View the HTML report:

```bash
npx playwright show-report
```
## 🧪 Testing Scenarios

| Module | Scenarios |
|---|---|
| Login | Validate login behavior |
| Inventory | Verify products and add-to-cart functionality |
| Cart | Validate cart contents and remove products |
| Checkout | Submit customer information and proceed to order overview |
| Order Completion | Verify successful order confirmation |
| Price Calculation | Validate subtotal + tax = total |

## 🏗️ Design Approach

The project follows the **Page Object Model (POM)** design pattern. Page-specific locators and actions are maintained in separate classes, while test files focus on test scenarios and assertions.

Test data and application constants are organized separately to improve readability, reusability, and maintainability.

## 🔮 Future Improvements

- Integrate automated test execution with GitHub Actions.
- Expand negative and boundary test scenarios.
- Add cross-browser execution.
- Improve test reporting and failure diagnostics.
- Expand API testing coverage.

## 👨‍💻 Author

**Sushant Suryavanshi**

- GitHub: [sushant-pro1](https://github.com/sushant-pro1)
- LinkedIn: [Sushant Suryavanshi](https://www.linkedin.com/in/sushant-suryavanshi/)

---

*This project is built for learning and demonstrating practical skills in web UI test automation, test design, and maintainable automation frameworks.*
