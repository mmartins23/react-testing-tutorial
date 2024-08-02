### `getByText` in React Testing Library

The `getByText` query is used to find elements that contain a specific text node. This is one of the most straightforward and commonly used queries in React Testing Library, as it searches for text content within the rendered DOM.

### How `getByText` Works

- **Exact Match**: By default, `getByText` looks for elements that contain the exact text node provided.
- **Case Insensitivity**: You can make the search case-insensitive by using a regular expression with the `i` flag.
- **Substring Match**: You can also use regular expressions to search for substrings.

### Examples of `getByText`

1. **Basic Usage**:
    ```jsx
    <div>
        <p>Hello, World!</p>
    </div>
    ```

    Test:
    ```jsx
    const element = screen.getByText('Hello, World!');
    expect(element).toBeInTheDocument();
    ```

2. **Case-Insensitive Search**:
    ```jsx
    const element = screen.getByText(/hello, world!/i);
    expect(element).toBeInTheDocument();
    ```

3. **Substring Match**:
    ```jsx
    const element = screen.getByText(/Hello/);
    expect(element).toBeInTheDocument();
    ```

4. **Handling Multiple Elements**:
    ```jsx
    <div>
        <button>Click me</button>
        <button>Click me</button>
    </div>
    ```

    Test:
    ```jsx
    const buttons = screen.getAllByText('Click me');
    expect(buttons.length).toBe(2);
    ```

### Explanation of Your Code Example

#### Component Code

```jsx
export const Application = () => {
    return (
        <>
            <h1>Job application form</h1>
            <h2>Section 1</h2>
            <p>All fields are mandatory</p>
            <form>
                <div>
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" placeholder="Full Name"/>
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
                        <input type="checkbox" id="terms" /> I agree to the terms and
                        conditions
                    </label>
                </div>
                <button>Submit</button>
            </form>
        </>
    )
}
```

This component renders a form with various labelled input elements, including a paragraph element with the text "All fields are mandatory".

#### Test Code

```jsx
import { render, screen } from '@testing-library/react'
import { Application } from './Application'

describe('Application', () => {
    test('renders correctly', () => {
        render(<Application />);

        const pageElement = screen.getByRole('heading', {
            name: "Job application form"
        });
        expect(pageElement).toBeInTheDocument();

        const sectionElement = screen.getByRole('heading', {
            name: "Section 1"
        });
        expect(sectionElement).toBeInTheDocument();

        const paragraphElement = screen.getByText('All fields are mandatory');
        expect(paragraphElement).toBeInTheDocument();

        const nameElement = screen.getByRole('textbox', {
            name: "Name"
        });
        expect(nameElement).toBeInTheDocument();

        const nameElement2 = screen.getByLabelText('Name');
        expect(nameElement2).toBeInTheDocument();

        const bioElement = screen.getByRole('textbox', {
            name: "Bio"
        });
        expect(bioElement).toBeInTheDocument();

        const jobLocationElement = screen.getByRole('combobox');
        expect(jobLocationElement).toBeInTheDocument();

        const termsElement = screen.getByRole('checkbox');
        expect(termsElement).toBeInTheDocument();

        const termsElement2 = screen.getByLabelText('I agree to the terms and conditions');
        expect(termsElement2).toBeInTheDocument();

        const termsElement3 = screen.getByPlaceholderText("Full Name");
        expect(termsElement3).toBeInTheDocument();

        const submitElement = screen.getByRole('button');
        expect(submitElement).toBeInTheDocument();
    });
});
```

### Explanation of `getByText` in the Test Code

1. **Rendering the Component**:
    ```jsx
    render(<Application />);
    ```
    - This line renders the `Application` component into the virtual DOM for testing.

2. **Querying and Asserting Elements**:
    - **Paragraph Element**:
        ```jsx
        const paragraphElement = screen.getByText('All fields are mandatory');
        expect(paragraphElement).toBeInTheDocument();
        ```
        - This query searches for a paragraph element containing the text "All fields are mandatory" and asserts that it is present in the document.

By using `getByText`, you ensure that specific text nodes are present in your rendered components. This method is particularly useful for verifying static text content, error messages, button texts, and more.