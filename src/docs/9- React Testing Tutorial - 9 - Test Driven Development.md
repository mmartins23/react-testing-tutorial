### Test Driven Development (TDD)

Test Driven Development (TDD) is a software development methodology where tests are written before the actual code. The main idea is to ensure that the code meets its requirements by continuously writing tests and code iteratively. The TDD process involves three main steps, often referred to as the "Red-Green-Refactor" cycle:

1. **Red:** Write a failing test.
2. **Green:** Write the minimum amount of code to pass the test.
3. **Refactor:** Refactor the code while ensuring that all tests still pass.

This approach helps in creating cleaner, bug-free, and more maintainable code.

### Example: Greet Component with TDD

We'll create a `Greet` component and test it using TDD principles. The `Greet` component will optionally accept a `name` prop and render a greeting message.

### Step 1: Define Props and Component

First, we define the props type and the component itself.

**Greet.tsx:**
```tsx
import React from 'react';

type GreetProps = {
    name?: string,
}

const Greet = ({ name }: GreetProps) => {
  return (
    <p>Hello {name ? name : 'Guest'}</p>
  );
}

export default Greet;
```

This component will display "Hello Guest" if no name is provided.

### Step 2: Write Tests

Next, we'll write tests to ensure our component behaves as expected.

**Greet.test.tsx:**
```tsx
import { render, screen } from '@testing-library/react';
import Greet from './Greet';

test('Greet renders correctly without a name', () => {
  render(<Greet />);
  const textElement = screen.getByText(/hello guest/i);
  expect(textElement).toBeInTheDocument();
});

test('Greet renders with a name', () => {
  render(<Greet name='Ash' />);
  const textElement = screen.getByText('Hello Ash');
  expect(textElement).toBeInTheDocument();
});
```

### Explanation:

1. **Importing Required Modules:**
   ```tsx
   import { render, screen } from '@testing-library/react';
   import Greet from './Greet';
   ```
   We import the `render` and `screen` utilities from `@testing-library/react` and the `Greet` component.

2. **Writing Tests:**
   ```tsx
   test('Greet renders correctly without a name', () => {
     render(<Greet />);
     const textElement = screen.getByText(/hello guest/i);
     expect(textElement).toBeInTheDocument();
   });
   ```
   - This test checks that the `Greet` component renders "Hello Guest" when no `name` prop is provided.

   ```tsx
   test('Greet renders with a name', () => {
     render(<Greet name='Ash' />);
     const textElement = screen.getByText('Hello Ash');
     expect(textElement).toBeInTheDocument();
   });
   ```
   - This test checks that the `Greet` component renders "Hello Ash" when the `name` prop is "Ash".

### Step 3: Run Tests

To run your tests, use the following command in your terminal:

```sh
npm test
```

You should see output indicating that both tests passed.

### Conclusion

By following TDD, we ensured that our `Greet` component met the specified requirements:

1. It renders "Hello Guest" when no name is provided.
2. It renders "Hello {name}" when a name is provided.

This process helps in writing better code with fewer bugs and ensures that our codebase remains maintainable and testable.