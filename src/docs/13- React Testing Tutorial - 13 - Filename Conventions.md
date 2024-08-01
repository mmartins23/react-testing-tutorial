### Filename Conventions in Testing

When writing tests, it's essential to follow consistent filename conventions. This helps in organizing test files, making it easier to locate and manage them. Below are the common conventions for naming test files in JavaScript and React projects, particularly when using Jest and React Testing Library.

#### Common Filename Conventions

1. **Same Name as the Component/File:**
   - Test files are named after the component or file they are testing, with a suffix to indicate that they are test files.
   - Example: If you have a component named `Greet.js`, the test file can be named `Greet.test.js`.

2. **Suffix for Test Files:**
   - Common suffixes include `.test.js` and `.spec.js`.
   - These suffixes help distinguish test files from the regular source files.

#### Example Conventions

1. **Using `.test.js` Suffix:**
   - Source file: `Greet.js`
   - Test file: `Greet.test.js`
   
   ```text
   src/
   ├── components/
   │   └── Greet.js
   └── __tests__/
       └── Greet.test.js
   ```

2. **Using `.spec.js` Suffix:**
   - Source file: `Greet.js`
   - Test file: `Greet.spec.js`
   
   ```text
   src/
   ├── components/
   │   └── Greet.js
   └── __tests__/
       └── Greet.spec.js
   ```

3. **Tests in the Same Directory:**
   - Sometimes, test files are kept in the same directory as the source files.
   - This approach can make it easier to locate tests related to a specific component or module.
   
   ```text
   src/
   ├── components/
   │   ├── Greet.js
   │   └── Greet.test.js
   ```

### Benefits of Consistent Filename Conventions

1. **Organization:** Consistent naming helps keep your project organized and makes it easier to locate test files.
2. **Clarity:** It is immediately clear which files are test files and which are source files.
3. **Tooling:** Many testing tools and editors recognize these conventions and can provide better support, like running tests automatically or offering test-specific commands.

### Example Application

Given the `Greet` component and its test:

**Greet.js:**
```jsx
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

**Greet.test.js:**
```jsx
import { render, screen } from '@testing-library/react';
import Greet from './Greet';

describe('Greet', () => {
    test('Greet renders correctly', () => {
        render(<Greet />);
        const textElement = screen.getByText(/hello/i);
        expect(textElement).toBeInTheDocument();
    });

    test('Greet renders with a name', () => {
        render(<Greet name='Ash' />);
        const textElement = screen.getByText('Hello Ash');
        expect(textElement).toBeInTheDocument();
    });
});
```

### Summary

By adhering to consistent filename conventions, you ensure that your project remains organized and maintainable. Whether you choose `.test.js`, `.spec.js`, or another suffix, the key is consistency across your project. This practice not only benefits developers but also integrates well with various tools and editors, enhancing the overall development workflow.