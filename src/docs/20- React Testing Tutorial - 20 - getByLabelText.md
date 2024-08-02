### `getByLabelText` in React Testing Library

The `getByLabelText` query is used to find form elements (like inputs, textareas, selects, etc.) by the text of their associated `<label>` elements. This is particularly useful because it mirrors how users interact with form elements by reading their labels.

### How `getByLabelText` Works

The `getByLabelText` query looks for elements that are labelled by a `<label>` element. It supports both explicit labelling (using the `for` attribute on the label) and implicit labelling (where the label wraps the input element).

### Examples of `getByLabelText`

1. **Explicit Labeling**:
    ```jsx
    <label htmlFor="username">Username</label>
    <input id="username" type="text" />
    ```

    Test:
    ```jsx
    const usernameInput = screen.getByLabelText('Username');
    expect(usernameInput).toBeInTheDocument();
    ```

2. **Implicit Labeling**:
    ```jsx
    <label>
        Password
        <input type="password" />
    </label>
    ```

    Test:
    ```jsx
    const passwordInput = screen.getByLabelText('Password');
    expect(passwordInput).toBeInTheDocument();
    ```

3. **Using `aria-label` for Accessibility**:
    ```jsx
    <input type="text" aria-label="Email address" />
    ```

    Test:
    ```jsx
    const emailInput = screen.getByLabelText('Email address');
    expect(emailInput).toBeInTheDocument();
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

This component renders a form with various labelled input elements:

- A text input for the name.
- A textarea for the bio.
- A select dropdown for job location.
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
    - This line renders the `Application` component into the virtual DOM for testing.

2. **Querying and Asserting Elements**:
    - **Headings**:
        ```jsx
        const pageElement = screen.getByRole('heading', { name: "Job application form" });
        expect(pageElement).toBeInTheDocument();

        const sectionElement = screen.getByRole('heading', { name: "Section 1" });
        expect(sectionElement).toBeInTheDocument();
        ```
        - Queries the `<h1>` and `<h2>` elements by their text and asserts their presence.

    - **Name Input (Two Ways)**:
        ```jsx
        const nameElement = screen.getByRole('textbox', { name: "Name" });
        expect(nameElement).toBeInTheDocument();

        const nameElement2 = screen.getByLabelText('Name');
        expect(nameElement2).toBeInTheDocument();
        ```
        - The first query uses `getByRole` with the `name` option to find the `<input>` element.
        - The second query uses `getByLabelText` to find the same `<input>` element by its associated `<label>` text.

    - **Bio Textarea**:
        ```jsx
        const bioElement = screen.getByRole('textbox', { name: "Bio" });
        expect(bioElement).toBeInTheDocument();
        ```
        - Queries the `<textarea>` element by its associated label "Bio" and asserts its presence.

    - **Job Location Select**:
        ```jsx
        const jobLocationElement = screen.getByRole('combobox');
        expect(jobLocationElement).toBeInTheDocument();
        ```
        - Queries the `<select>` element and asserts its presence.

    - **Terms Checkbox (Two Ways)**:
        ```jsx
        const termsElement = screen.getByRole('checkbox');
        expect(termsElement).toBeInTheDocument();

        const termsElement2 = screen.getByLabelText('I agree to the terms and conditions');
        expect(termsElement2).toBeInTheDocument();
        ```
        - The first query uses `getByRole` to find the checkbox element.
        - The second query uses `getByLabelText` to find the checkbox by its associated label text "I agree to the terms and conditions".

    - **Submit Button**:
        ```jsx
        const submitElement = screen.getByRole('button');
        expect(submitElement).toBeInTheDocument();
        ```
        - Queries the `<button>` element and asserts its presence.

### Summary

Using `getByLabelText` is a powerful way to query form elements by their labels, making tests more user-centric and aligned with accessibility best practices. It ensures that your form elements are correctly labelled, improving the overall accessibility of your application.

In your example, the component and test code demonstrate how to use `getByRole` and `getByLabelText` to query different types of form elements. The use of both methods shows the flexibility and robustness of React Testing Library in ensuring that your tests are maintainable and reflect real-world usage.