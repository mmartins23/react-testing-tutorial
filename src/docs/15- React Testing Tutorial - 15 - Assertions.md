### Assertions in Testing

**Assertions** are crucial in testing as they validate whether the code behaves as expected. They form the backbone of test cases, ensuring that the actual output of the code matches the expected output.

### Basic Assertions Examples

1. **toBe**: Checks for exact equality.
   ```js
   expect(2 + 2).toBe(4);
   ```

2. **toEqual**: Checks for deep equality (suitable for objects and arrays).
   ```js
   const data = { name: 'Ash' };
   expect(data).toEqual({ name: 'Ash' });
   ```

3. **toBeTruthy**: Checks if a value is truthy.
   ```js
   expect(true).toBeTruthy();
   ```

4. **toBeNull**: Checks if a value is null.
   ```js
   const n = null;
   expect(n).toBeNull();
   ```

5. **toBeDefined**: Checks if a value is defined.
   ```js
   let x = 10;
   expect(x).toBeDefined();
   ```

### Example: Assertions with React Testing Library

Let's explain the provided code with a focus on the assertions used:

**Code Explanation:**

```jsx
import { render, screen } from '@testing-library/react';
import Greet from './Greet';

// Greet should render the text hello and if a name is passed into the component, it should render hello followed by the name

describe('Greet', () => {
    test('Greet renders correctly', () => {
        render(<Greet />);
        const textElement = screen.getByText(/hello/i);
        expect(textElement).toBeInTheDocument();
    });

    test('Greet renders with a name', () => {
        render(<Greet name='Ash' />);
        const textElement = screen.getByText(`Hello Ash`);
        expect(textElement).toBeInTheDocument();
    });
});
```

### Imports

```jsx
import { render, screen } from '@testing-library/react';
import Greet from './Greet';
```
- **`render`**: Renders a React component into a virtual DOM for testing.
- **`screen`**: Provides methods to query the rendered DOM.
- **`Greet`**: The React component being tested.

### Test Suite

```jsx
describe('Greet', () => {
```
- **`describe`**: A Jest function to group related tests. In this case, it groups all tests related to the `Greet` component.

### Test Cases

1. **Test: Greet renders correctly**
   ```jsx
   test('Greet renders correctly', () => {
       render(<Greet />);
       const textElement = screen.getByText(/hello/i);
       expect(textElement).toBeInTheDocument();
   });
   ```
   - **`test`**: Defines a test case named "Greet renders correctly".
   - **`render(<Greet />)`**: Renders the `Greet` component.
   - **`screen.getByText(/hello/i)`**: Queries the rendered output for an element containing "hello" (case insensitive).
   - **`expect(textElement).toBeInTheDocument()`**: **Assertion** that verifies `textElement` is present in the DOM.

2. **Test: Greet renders with a name**
   ```jsx
   test('Greet renders with a name', () => {
       render(<Greet name='Ash' />);
       const textElement = screen.getByText(`Hello Ash`);
       expect(textElement).toBeInTheDocument();
   });
   ```
   - **`test`**: Defines a test case named "Greet renders with a name".
   - **`render(<Greet name='Ash' />)`**: Renders the `Greet` component with the `name` prop set to 'Ash'.
   - **`screen.getByText('Hello Ash')`**: Queries the rendered output for an element containing the exact text "Hello Ash".
   - **`expect(textElement).toBeInTheDocument()`**: **Assertion** that verifies `textElement` is present in the DOM.

### Summary

In summary, assertions are used to verify that your code behaves as expected. The provided tests for the `Greet` component use the `expect(...).toBeInTheDocument()` assertion to ensure that the expected text is present in the rendered output. This is crucial for validating that the component correctly handles different states and inputs:

- **Default State**: When no name is provided, the component should render "hello".
- **Name Provided**: When a name is provided, the component should render "Hello [name]".

These assertions help ensure that the `Greet` component behaves correctly under different conditions.