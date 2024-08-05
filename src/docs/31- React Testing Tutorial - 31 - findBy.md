### Explanation of `findBy` in React Testing Library

In React Testing Library (RTL), `findBy` methods are asynchronous queries used to wait for an element to appear in the DOM. They are particularly useful when dealing with components that change their state or fetch data asynchronously. `findBy` methods return a promise that resolves when the element is found or rejects if the element is not found within a specified timeout (default is 1000ms).

### Common `findBy` Methods

- **findByRole**: Finds an element by its ARIA role.
- **findByLabelText**: Finds an element by its associated label text.
- **findByPlaceholderText**: Finds an element by its placeholder text.
- **findByText**: Finds an element by its text content.
- **findByDisplayValue**: Finds an element by its displayed value.
- **findByAltText**: Finds an element by its alt text.
- **findByTitle**: Finds an element by its title attribute.
- **findByTestId**: Finds an element by its data-testid attribute.

### Example with `Skills` Component

Here is an example using `findByRole` to test the `Skills` component, which includes a button that appears after a delay:

```jsx
import { SkillsProps } from './Skills.type';
import { useEffect, useState } from 'react';

export const Skills = ({ skills }: SkillsProps) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoggedIn(true);
        }, 1000);
        return () => clearTimeout(timer); // Cleanup the timer
    }, []);

    return (
        <>
            <ul>
                {skills.map((skill) => (
                    <li key={skill}>{skill}</li>
                ))}
            </ul>
            {isLoggedIn ? (
                <button>Start learning</button>
            ) : (
                <button onClick={() => setIsLoggedIn(true)}>Login</button>
            )}
        </>
    );
};
```

### Test Suite Using `findByRole`

The test suite includes a test that waits for the "Start learning" button to appear using `findByRole`.

```javascript
import { render, screen } from '@testing-library/react';
import { Skills } from './Skills';

describe("Skills", () => {
    const skills = ["HTML", "CSS", "JavaScript"];

    test("renders correctly", () => {
        render(<Skills skills={skills} />);
        const listElement = screen.getByRole('list');
        expect(listElement).toBeInTheDocument();
    });

    test("renders a list of skills", () => {
        render(<Skills skills={skills} />);
        const listItemElements = screen.getAllByRole('listitem');
        expect(listItemElements).toHaveLength(skills.length);
    });

    test("renders Login button", () => {
        render(<Skills skills={skills} />);
        const loginButton = screen.getByRole("button", {
            name: "Login",
        });
        expect(loginButton).toBeInTheDocument();
    });

    test("Start learning button is not rendered", () => {
        render(<Skills skills={skills} />);
        const startLearningButton = screen.queryByRole("button", {
            name: "Start Learning",
        });
        expect(startLearningButton).not.toBeInTheDocument();
    });

    test("Start learning button is eventually displayed", async () => {
        render(<Skills skills={[]} />);
        const startLearningButton = await screen.findByRole('button', {
            name: "Start learning",
        }, {
            timeout: 2000, // Optional: specify a timeout (default is 1000ms)
        });
        expect(startLearningButton).toBeInTheDocument();
    });
});
```

### Explanation of the Tests

1. **renders correctly**: Renders the `Skills` component and verifies that the list element is present in the DOM.
   ```javascript
   test("renders correctly", () => {
       render(<Skills skills={skills} />);
       const listElement = screen.getByRole('list');
       expect(listElement).toBeInTheDocument();
   });
   ```

2. **renders a list of skills**: Renders the `Skills` component and checks that the number of list items matches the length of the `skills` array.
   ```javascript
   test("renders a list of skills", () => {
       render(<Skills skills={skills} />);
       const listItemElements = screen.getAllByRole('listitem');
       expect(listItemElements).toHaveLength(skills.length);
   });
   ```

3. **renders Login button**: Renders the `Skills` component and verifies that the "Login" button is present in the DOM.
   ```javascript
   test("renders Login button", () => {
       render(<Skills skills={skills} />);
       const loginButton = screen.getByRole("button", {
           name: "Login",
       });
       expect(loginButton).toBeInTheDocument();
   });
   ```

4. **Start learning button is not rendered**: Renders the `Skills` component and asserts that the "Start Learning" button is not present in the DOM using `queryByRole`.
   ```javascript
   test("Start learning button is not rendered", () => {
       render(<Skills skills={skills} />);
       const startLearningButton = screen.queryByRole("button", {
           name: "Start Learning",
       });
       expect(startLearningButton).not.toBeInTheDocument();
   });
   ```

5. **Start learning button is eventually displayed**: Renders the `Skills` component and waits for the "Start learning" button to appear using `findByRole`.
   ```javascript
   test("Start learning button is eventually displayed", async () => {
       render(<Skills skills={[]} />);
       const startLearningButton = await screen.findByRole('button', {
           name: "Start learning",
       }, {
           timeout: 2000, // Optional: specify a timeout (default is 1000ms)
       });
       expect(startLearningButton).toBeInTheDocument();
   });
   ```

### Summary

- **`findBy` Methods**: Asynchronous queries that wait for elements to appear in the DOM.
- **Usage**: Particularly useful for testing components with asynchronous behavior.
- **Test Example**: The `findByRole` method is used to wait for the "Start learning" button to appear after a state change triggered by a timeout.

By using `findBy`, you can ensure that your tests handle asynchronous changes in the DOM correctly, making them robust and reliable.