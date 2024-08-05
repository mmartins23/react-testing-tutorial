### Explanation of `queryBy` in React Testing Library

In React Testing Library (RTL), `queryBy` methods are used to query elements that might or might not be present in the DOM. They differ from `getBy` methods in that they do not throw an error if no matching elements are found; instead, they return `null`. This makes `queryBy` methods useful for asserting the non-existence of elements.

### Common `queryBy` Methods

- **queryByRole**: Queries an element by its ARIA role.
- **queryByLabelText**: Queries an element by its associated label text.
- **queryByPlaceholderText**: Queries an element by its placeholder text.
- **queryByText**: Queries an element by its text content.
- **queryByDisplayValue**: Queries an element by its displayed value.
- **queryByAltText**: Queries an element by its alt text.
- **queryByTitle**: Queries an element by its title attribute.
- **queryByTestId**: Queries an element by its data-testid attribute.

### Example Usage with `Skills` Component

Here is an example using the `queryByRole` method to assert that a button is not rendered in the DOM:

```jsx
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
        render(<Skills skills={skills}/>);
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
        render(<Skills skills={skills}/>);
        const startLearningButton = screen.queryByRole("button", {
            name: "Start Learning",
        });
        expect(startLearningButton).not.toBeInTheDocument();
    });
});
```

### Explanation of the `Skills` Component and Tests

#### `Skills` Component

The `Skills` component takes an array of skills as props and renders them in a list. It also has a button that changes based on the state of `isLoggedIn`.

```jsx
import { SkillsProps } from './Skills.type';
import { useState } from 'react';

export const Skills = ({ skills }: SkillsProps) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    return (
        <>
            <ul>
                {skills.map((skill) => {
                    return <li key={skill}>{skill}</li>
                })}
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

#### Test Suite

- **renders correctly**: This test renders the `Skills` component and verifies that the list element is present in the DOM.
  ```javascript
  test("renders correctly", () => {
      render(<Skills skills={skills} />);
      const listElement = screen.getByRole('list');
      expect(listElement).toBeInTheDocument();
  });
  ```

- **renders a list of skills**: This test renders the `Skills` component and checks that the number of list items matches the length of the `skills` array.
  ```javascript
  test("renders a list of skills", () => {
      render(<Skills skills={skills}/>);
      const listItemElements = screen.getAllByRole('listitem');
      expect(listItemElements).toHaveLength(skills.length);
  });
  ```

- **renders Login button**: This test renders the `Skills` component and verifies that the "Login" button is present in the DOM.
  ```javascript
  test("renders Login button", () => {
      render(<Skills skills={skills} />);
      const loginButton = screen.getByRole("button", {
          name: "Login",
      });
      expect(loginButton).toBeInTheDocument();
  });
  ```

- **Start learning button is not rendered**: This test renders the `Skills` component and asserts that the "Start Learning" button is not present in the DOM using `queryByRole`.
  ```javascript
  test("Start learning button is not rendered", () => {
      render(<Skills skills={skills}/>);
      const startLearningButton = screen.queryByRole("button", {
          name: "Start Learning",
      });
      expect(startLearningButton).not.toBeInTheDocument();
  });
  ```

In this test suite, `queryByRole` is effectively used to verify that the "Start Learning" button does not exist in the DOM before the user is logged in. This demonstrates how `queryBy` methods can be used to assert the non-existence of elements in a component's rendered output.