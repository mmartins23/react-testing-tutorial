## Types of Tests

### 1. Unit Tests
**Unit Tests** are the smallest and most granular level of testing. They focus on individual units of code, such as functions, methods, or components, to ensure they work correctly in isolation. The primary goal is to verify the correctness of a single unit without relying on external systems or dependencies.

**Key Characteristics:**
- **Isolated:** Tests individual components or functions independently.
- **Fast:** Executes quickly since they test small pieces of code.
- **Focused:** Tests specific functionality or logic.
- **Mocks/Stubs:** Often use mocks or stubs to simulate external dependencies.

**Example:**
Testing a function that adds two numbers:
```javascript
function add(a, b) {
  return a + b;
}

test('adds 1 + 2 to equal 3', () => {
  expect(add(1, 2)).toBe(3);
});
```

### 2. Integration Tests
**Integration Tests** focus on the interaction between multiple units or components. They ensure that different parts of the system work together as expected. Integration tests often involve testing the interactions between functions, modules, or services to validate the integration points.

**Key Characteristics:**
- **Combination:** Tests interactions between multiple units or components.
- **Intermediate Speed:** Slower than unit tests but faster than end-to-end tests.
- **Real Dependencies:** May involve actual dependencies like databases or APIs, though sometimes mocks are used.

**Example:**
Testing a component that fetches data from an API and displays it:
```javascript
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';
import { fetchData } from './api';

jest.mock('./api');

test('displays data fetched from API', async () => {
  fetchData.mockResolvedValue({ data: 'Hello, World!' });
  
  render(<App />);
  
  const element = await screen.findByText(/Hello, World!/i);
  expect(element).toBeInTheDocument();
});
```

### 3. End-to-End (E2E) Tests
**End-to-End (E2E) Tests** simulate real user scenarios to test the entire application flow from start to finish. They ensure that the application works correctly in a real-world environment by interacting with the UI and verifying the outcomes. E2E tests often run in a browser and involve navigating through the application as a user would.

**Key Characteristics:**
- **Comprehensive:** Tests the full workflow of the application.
- **Slow:** Slower due to browser interactions and comprehensive scope.
- **Real Environment:** Runs in a real or closely simulated production environment.
- **User-Centric:** Focuses on user interactions and system behavior.

**Example:**
Testing a login workflow in a web application:
```javascript
import { test, expect } from '@playwright/test';

test('user can log in', async ({ page }) => {
  await page.goto('https://example.com/login');
  await page.fill('#username', 'testuser');
  await page.fill('#password', 'password123');
  await page.click('button[type="submit"]');
  
  const welcomeMessage = await page.waitForSelector('text=Welcome, testuser');
  expect(welcomeMessage).toBeTruthy();
});
```

### Summary
- **Unit Tests:** Validate individual units of code in isolation. Fast and highly focused.
- **Integration Tests:** Verify interactions between multiple units or components. Intermediate speed and complexity.
- **End-to-End (E2E) Tests:** Ensure the entire application flow works as expected in a real-world environment. Slow but comprehensive.

Each type of test plays a crucial role in a comprehensive testing strategy, helping ensure that the software is reliable, maintainable, and meets user expectations.