### Jest Watch Mode

Jest is a popular testing framework for JavaScript, and it includes a powerful feature called "watch mode." Watch mode helps streamline the development and testing process by automatically running tests related to the changes in your codebase as you develop. This immediate feedback loop is beneficial for maintaining code quality and catching bugs early.

#### Key Features of Jest Watch Mode

1. **Automatic Test Running**: Jest watches your files for changes and reruns only the tests related to those changes.
2. **Interactive CLI**: Jest’s interactive command-line interface allows you to filter which tests to run, control how tests are run, and quickly see test results.
3. **Filtering Tests**: You can run tests related to specific files, tests matching a pattern, or only failed tests from the last run.
4. **Test Status Indicators**: Jest displays indicators for passed, failed, and skipped tests, providing an immediate visual understanding of the test status.

#### How to Use Jest Watch Mode

You can start Jest in watch mode using the following command:

```sh
npm test -- --watch
```

Or, if you have a `test` script defined in your `package.json`:

```sh
"scripts": {
  "test": "jest"
}
```

Then you can simply run:

```sh
npm test --watch
```

### Interactive CLI Options

Once in watch mode, Jest provides several options to filter and control your test runs:

1. **Watch Usage Menu**: Press `w` to show the full list of available commands.
2. **Run All Tests**: Press `a` to run all tests.
3. **Run Only Changed Files**: Press `o` to run tests related to changed files since the last commit.
4. **Run Failed Tests**: Press `f` to run only tests that failed in the last run.
5. **Quit Watch Mode**: Press `q` to exit watch mode.
6. **Pattern Matching**: Press `p` to filter tests by a regex pattern.
7. **Toggle Verbose Mode**: Press `v` to turn verbose mode on or off.

### Example Workflow

Let's say you are working on a React component and writing tests for it. Watch mode would help you continuously validate your changes:

1. **Initial Run**: Start watch mode with `npm test -- --watch`.
2. **Make a Change**: Modify your component or test file.
3. **Automatic Testing**: Jest automatically detects the changes and reruns the relevant tests.
4. **Check Results**: View immediate feedback in the terminal.
5. **Fix Issues**: Address any failing tests or errors, save your changes, and Jest will rerun the tests.

### Practical Example with Greet Component

Suppose we have the `Greet` component and its tests as previously defined.

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

### Running in Watch Mode

1. **Start Watch Mode**:
   ```sh
   npm test -- --watch
   ```

2. **Make a Change**:
   Modify `Greet.tsx` to change the default greeting from "Guest" to "Visitor":

   ```tsx
   const Greet = ({ name }: GreetProps) => {
     return (
       <p>Hello {name ? name : 'Visitor'}</p>
     );
   }
   ```

3. **Automatic Testing**:
   Jest will automatically detect the change and rerun the tests. You will see the test for the default greeting fail because it now expects "Visitor" instead of "Guest".

4. **Update the Test**:
   Update `Greet.test.tsx` to reflect the new default greeting:

   ```tsx
   test('Greet renders correctly without a name', () => {
     render(<Greet />);
     const textElement = screen.getByText(/hello visitor/i);
     expect(textElement).toBeInTheDocument();
   });
   ```

5. **Fix Issues**:
   Save the changes, and Jest will rerun the tests, confirming that the component behaves as expected.

By using Jest watch mode, you can develop and test your code more efficiently, catching issues early and ensuring your code meets the desired functionality.