### Explanation of `textMatch` in React Testing Library

In React Testing Library (RTL), the `textMatch` parameter allows you to search for elements based on their text content using various matching strategies. These strategies include exact matching, substring matching, regular expression matching, and custom function matching.

### Matching Strategies

1. **Exact String Match**: The default behavior where the text content must match exactly.
2. **Substring Match**: Part of the text content matches the provided string.
3. **Regular Expression Match**: The text content matches a given regular expression.
4. **Custom Function Match**: A custom function determines whether the text content matches based on custom logic.

### Example with Different Matching Strategies

Given the `Application` component:

```jsx
export const Application = () => {
  return (
    <>
      <h1>Job application form</h1>
      <h2>Section 1</h2>
      <p>All fields are mandatory</p>
      <span title="close">x</span>
      <img src="https://via.placeholder.com/150" alt="a person with laptop" />
      <div data-testid="custom-element">Custom HTML element</div>
      <form>
        <div>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" placeholder="Full Name" value="John Doe" onChange={() => {}} />
        </div>
        <div>
          <label htmlFor="bio">Bio</label>
          <textarea id="bio" name="bio" />
        </div>
        <div>
          <label htmlFor="job-location">Job location</label>
          <select id="job-location">
            <option value="">Select a country</option>
            <option value="US">United States</option>
            <option value="GB">United Kingdom</option>
            <option value="CA">Canada</option>
            <option value="IN">India</option>
            <option value="AU">Australia</option>
          </select>
        </div>
        <div>
          <label>
            <input type="checkbox" id="terms" /> I agree to the terms and conditions
          </label>
        </div>
        <button>Submit</button>
      </form>
    </>
  );
};
```

### Test Suite Using Different `textMatch` Strategies

```javascript
import { render, screen } from '@testing-library/react';
import { Application } from './Application';

describe('Application', () => {
  test('renders correctly', () => {
    render(<Application />);

    // Exact String Match
    const exactParagraphElement = screen.getByText('All fields are mandatory');
    expect(exactParagraphElement).toBeInTheDocument();

    // Substring Match using string
    const substringParagraphElement = screen.getByText('fields are mandatory', { exact: false });
    expect(substringParagraphElement).toBeInTheDocument();

    // Regular Expression Match
    const regexParagraphElement = screen.getByText(/fields are mandatory/i);
    expect(regexParagraphElement).toBeInTheDocument();

    // Custom Function Match
    const customFunctionParagraphElement = screen.getByText((content, element) => {
      return content.includes('fields are mandatory');
    });
    expect(customFunctionParagraphElement).toBeInTheDocument();

    // Additional tests for other elements

    const headingElement = screen.getByRole('heading', { name: /job application form/i });
    expect(headingElement).toBeInTheDocument();

    const sectionElement = screen.getByRole('heading', { name: /section 1/i });
    expect(sectionElement).toBeInTheDocument();

    const closeElement = screen.getByTitle('close');
    expect(closeElement).toBeInTheDocument();

    const imageElement = screen.getByAltText('a person with laptop');
    expect(imageElement).toBeInTheDocument();

    const customElement = screen.getByTestId('custom-element');
    expect(customElement).toBeInTheDocument();

    const nameElement = screen.getByRole('textbox', { name: 'Name' });
    expect(nameElement).toBeInTheDocument();

    const nameElement2 = screen.getByLabelText('Name');
    expect(nameElement2).toBeInTheDocument();

    const nameElement3 = screen.getByPlaceholderText('Full Name');
    expect(nameElement3).toBeInTheDocument();

    const nameElement4 = screen.getByDisplayValue('John Doe');
    expect(nameElement4).toBeInTheDocument();

    const bioElement = screen.getByRole('textbox', { name: 'Bio' });
    expect(bioElement).toBeInTheDocument();

    const jobLocationElement = screen.getByRole('combobox');
    expect(jobLocationElement).toBeInTheDocument();

    const termsElement = screen.getByRole('checkbox');
    expect(termsElement).toBeInTheDocument();

    const termsElement2 = screen.getByLabelText('I agree to the terms and conditions');
    expect(termsElement2).toBeInTheDocument();

    const submitElement = screen.getByRole('button');
    expect(submitElement).toBeInTheDocument();
  });
});
```

### Summary

- **Exact String Match**: The default method, requiring an exact match.
- **Substring Match using String**: Part of the text must match; set `{ exact: false }` for case insensitivity.
- **Regular Expression Match**: Uses regex for matching, allowing flexible and case-insensitive searches.
- **Custom Function Match**: A function that returns `true` for matched content, allowing custom logic for matching.

These matching strategies provide flexibility in querying elements, ensuring tests are robust and adaptable to changes in text content.