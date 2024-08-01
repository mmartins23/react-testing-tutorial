In this tutorial, you'll learn how to write your first test using React Testing Library. We'll start by creating a simple React component and then write a test to ensure it renders correctly.

### Step 1: Create the Greet Component

First, let's create a simple React component called `Greet`.

**Greet.js:**
```jsx
import React from 'react';

const Greet = () => {
  return (
    <p>Greet</p>
  );
}

export default Greet;
```

This component just returns a paragraph with the text "Greet".

### Step 2: Set Up Testing Library

Ensure you have `@testing-library/react` installed in your project. If not, you can install it using:

```sh
npm install @testing-library/react
```

### Step 3: Write Your First Test

Now, let's write a test to verify that the `Greet` component renders correctly. Create a test file called `Greet.test.js`.

**Greet.test.js:**
```jsx
import { render, screen } from '@testing-library/react';
import Greet from './Greet';

test('renders Greet component', () => {
  render(<Greet />);
  const textElement = screen.getByText(/greet/i);
  expect(textElement).toBeInTheDocument();
});
```

### Explanation:

1. **Importing Required Modules:**
   ```jsx
   import { render, screen } from '@testing-library/react';
   import Greet from './Greet';
   ```
   We import the `render` and `screen` utilities from `@testing-library/react` and the `Greet` component that we want to test.

2. **Writing the Test:**
   ```jsx
   test('renders Greet component', () => {
     render(<Greet />);
     const textElement = screen.getByText(/greet/i);
     expect(textElement).toBeInTheDocument();
   });
   ```
   - `test('renders Greet component', () => { ... })`: This defines a test case named "renders Greet component".
   - `render(<Greet />)`: This function renders the `Greet` component.
   - `const textElement = screen.getByText(/greet/i)`: This line uses `screen.getByText` to find an element with the text "greet" (case insensitive due to the `/i` flag in the regular expression).
   - `expect(textElement).toBeInTheDocument()`: This assertion checks that the `textElement` is in the document, meaning the component rendered correctly.

### Running the Test

To run your test, use the following command in your terminal:

```sh
npm test
```

This command runs all the tests in your project. You should see output indicating that your test passed.

### Conclusion

Congratulations! You've written and run your first test with React Testing Library. This test ensures that the `Greet` component renders a paragraph with the text "Greet". You can now build on this foundation to write more comprehensive tests for your components.