### `getByRole` Options

The `getByRole` query in React Testing Library can be enhanced with various options to make it more specific and robust. The primary option is the `name` option, but there are other useful options such as `level` for headings and `hidden` for elements that are hidden but should be considered.

### `getByRole` Options Explained

1. **`name`**: This option is used to specify the accessible name of the element. This name can be derived from the element's inner text, `aria-label`, `aria-labelledby`, or other labeling techniques.

2. **`level`**: This option is specifically for heading elements (`<h1>`, `<h2>`, etc.). It allows you to specify the heading level.

3. **`hidden`**: This option includes elements that are hidden from the accessibility tree. By default, hidden elements are not queried.

### Examples of `getByRole` with Options

1. **Querying a button by name**:
    ```jsx
    render(<button aria-label="Submit">Click me</button>);
    const buttonElement = screen.getByRole('button', { name: 'Submit' });
    expect(buttonElement).toBeInTheDocument();
    ```

2. **Querying a heading by name and level**:
    ```jsx
    render(<h1>Main Heading</h1>);
    const headingElement = screen.getByRole('heading', { name: 'Main Heading', level: 1 });
    expect(headingElement).toBeInTheDocument();
    ```

3. **Querying a hidden element**:
    ```jsx
    render(<button style={{ display: 'none' }}>Hidden Button</button>);
    const hiddenButton = screen.getByRole('button', { name: 'Hidden Button', hidden: true });
    expect(hiddenButton).toBeInTheDocument();
    ```

### Explanation of Your Code Example

#### Component Code

```jsx
export const Application = () => {
    return (
        <>
            <h1>Job application form</h1>
            <h2>Section 1</h2>
            <form>
                <div>
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" />
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

This component renders a form with various input elements and labels. The form includes:

- Two headings (`<h1>` and `<h2>`).
- A text input for the name.
- A textarea for the bio.
- A dropdown (combobox) for job location selection.
- A checkbox for agreeing to terms and conditions.
- A submit button.

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

        const nameElement = screen.getByRole('textbox', {
            name: "Name"
        });
        expect(nameElement).toBeInTheDocument();

        const bioElement = screen.getByRole('textbox', {
            name: "Bio"
        });
        expect(bioElement).toBeInTheDocument();

        const jobLocationElement = screen.getByRole('combobox');
        expect(jobLocationElement).toBeInTheDocument();

        const termsElement = screen.getByRole('checkbox');
        expect(termsElement).toBeInTheDocument();

        const submitElement = screen.getByRole('button');
        expect(submitElement).toBeInTheDocument();
    });
});
```

### Explanation of the Test Code

1. **Rendering the Component**:
    ```jsx
    render(<Application />);
    ```
    - This renders the `Application` component into the virtual DOM for testing.

2. **Querying and Asserting Elements**:
    - **Page Heading**:
        ```jsx
        const pageElement = screen.getByRole('heading', { name: "Job application form" });
        expect(pageElement).toBeInTheDocument();
        ```
        - Queries the `<h1>` element with the text "Job application form" and asserts its presence.

    - **Section Heading**:
        ```jsx
        const sectionElement = screen.getByRole('heading', { name: "Section 1" });
        expect(sectionElement).toBeInTheDocument();
        ```
        - Queries the `<h2>` element with the text "Section 1" and asserts its presence.

    - **Name Textbox**:
        ```jsx
        const nameElement = screen.getByRole('textbox', { name: "Name" });
        expect(nameElement).toBeInTheDocument();
        ```
        - Queries the `<input>` element with the associated label "Name" and asserts its presence.

    - **Bio Textbox**:
        ```jsx
        const bioElement = screen.getByRole('textbox', { name: "Bio" });
        expect(bioElement).toBeInTheDocument();
        ```
        - Queries the `<textarea>` element with the associated label "Bio" and asserts its presence.

    - **Job Location Combobox**:
        ```jsx
        const jobLocationElement = screen.getByRole('combobox');
        expect(jobLocationElement).toBeInTheDocument();
        ```
        - Queries the `<select>` element and asserts its presence.

    - **Terms Checkbox**:
        ```jsx
        const termsElement = screen.getByRole('checkbox');
        expect(termsElement).toBeInTheDocument();
        ```
        - Queries the `<input type="checkbox">` element and asserts its presence.

    - **Submit Button**:
        ```jsx
        const submitElement = screen.getByRole('button');
        expect(submitElement).toBeInTheDocument();
        ```
        - Queries the `<button>` element and asserts its presence.

### Summary

Using `getByRole` with options such as `name`, `level`, and `hidden` helps you write more robust and user-centric tests. These options make your queries more precise and ensure your tests better reflect how users and assistive technologies interact with your application.

In your example, the component and test code demonstrate how to use `getByRole` to query different types of form elements based on their roles and accessible names. This approach ensures your tests are maintainable and aligned with best practices for accessibility.