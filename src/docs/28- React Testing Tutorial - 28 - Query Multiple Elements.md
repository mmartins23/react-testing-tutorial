### Querying Multiple Elements with Code Examples

In React Testing Library, there are several methods to query multiple elements. These methods return arrays of elements that match the criteria. The most common methods are `getAllBy`, `queryAllBy`, and `findAllBy`.

1. **getAllBy**: Throws an error if no elements are found.
2. **queryAllBy**: Returns an empty array if no elements are found.
3. **findAllBy**: Returns a promise and is used for asynchronous queries.

#### Example Usage

```jsx
import { render, screen } from '@testing-library/react';

// A simple component for demonstration
const Skills = ({ skills }) => (
  <ul>
    {skills.map(skill => (
      <li key={skill}>{skill}</li>
    ))}
  </ul>
);

describe('Skills Component', () => {
  const skills = ['HTML', 'CSS', 'JavaScript'];

  test('renders all skill items', () => {
    render(<Skills skills={skills} />);
    // Using getAllByRole to get all list items
    const skillItems = screen.getAllByRole('listitem');
    expect(skillItems).toHaveLength(skills.length);
  });

  test('does not find non-existent items', () => {
    render(<Skills skills={skills} />);
    // Using queryAllByRole to get all buttons (none expected)
    const buttons = screen.queryAllByRole('button');
    expect(buttons).toHaveLength(0);
  });

  test('finds skill items asynchronously', async () => {
    render(<Skills skills={skills} />);
    // Using findAllByRole to get all list items (for async rendering)
    const skillItems = await screen.findAllByRole('listitem');
    expect(skillItems).toHaveLength(skills.length);
  });
});
```

### Code Explanation and Commenting

Here's the given code with detailed explanations and comments:

#### Type Definition

```typescript
// Define the type for the component props
export type SkillsProps = {
  skills: string[]; // skills prop is an array of strings
};
```

#### Skills Component

```javascript
import { SkillsProps } from './Skills.type'; // Import the type definition

// Skills component accepting skills prop of type SkillsProps
export const Skills = ({ skills }: SkillsProps) => {
  return (
    <>
      <ul>
        {skills.map((skill) => (
          // Render each skill as a list item with a unique key
          <li key={skill}>{skill}</li>
        ))}
      </ul>
    </>
  );
};
```

#### Test Suite for Skills Component

```javascript
import { render, screen } from '@testing-library/react'; // Import necessary functions from RTL
import { Skills } from './Skills'; // Import the Skills component

// Define the test suite for the Skills component
describe("Skills", () => {
  // Test data: array of skills
  const skills = ["HTML", "CSS", "JavaScript"];

  // Test case to check if the Skills component renders correctly
  test("renders correctly", () => {
    render(<Skills skills={skills} />); // Render the component with test data
    const listElement = screen.getByRole('list'); // Query for the list element
    expect(listElement).toBeInTheDocument(); // Assert that the list element is present in the DOM
  });

  // Test case to check if the Skills component renders a list of skills
  test("renders a list of skills", () => {
    render(<Skills skills={skills}/>); // Render the component with test data
    const listItemElements = screen.getAllByRole('listitem'); // Query for all list items
    expect(listItemElements).toHaveLength(skills.length); // Assert that the number of list items matches the length of the skills array
  });
});
```

### Summary

- **Type Definition**: The `SkillsProps` type defines that the `skills` prop is an array of strings.
- **Skills Component**: The `Skills` component takes `skills` as a prop and renders each skill as a list item.
- **Test Suite**: 
  - The `renders correctly` test checks if the unordered list (`<ul>`) is rendered.
  - The `renders a list of skills` test checks if the number of list items (`<li>`) matches the length of the `skills` array.