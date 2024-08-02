### `getByDisplayValue` in React Testing Library

The `getByDisplayValue` query is used to find form elements (like `<input>`, `<textarea>`, and `<select>`) that have a specific value. This is useful when you need to ensure that an element has been correctly initialized with or updated to a particular value.

### Examples of `getByDisplayValue`

1. **Basic Usage**:
    ```jsx
    <input type="text" value="John Doe" />
    ```

    Test:
    ```jsx
    const element = screen.getByDisplayValue('John Doe');
    expect(element).toBeInTheDocument();
    ```

2. **With `<select>` Element**:
    ```jsx
    <select value="CA">
        <option value="US">United States</option>
        <option value="CA">Canada</option>
    </select>
    ```

    Test:
    ```jsx
    const element = screen.getByDisplayValue('Canada');
    expect(element).toBeInTheDocument();
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
                    <input
                        type="text"
                        id="name"
                        placeholder="Full Name"
                        value="John Doe"
                        onChange={() => { }} />
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

This component renders a form with various labelled input elements. The `input` element for the name field is initialized with a value of "John Doe".

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

        const nameElement3 = screen.getByPlaceholderText("Full Name");
        expect(nameElement3).toBeInTheDocument();

        const nameElement4 = screen.getByDisplayValue("John Doe");
        expect(nameElement4).toBeInTheDocument();

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

### Explanation of `getByDisplayValue` in the Test Code

1. **Rendering the Component**:
    ```jsx
    render(<Application />);
    ```
    - This line renders the `Application` component into the virtual DOM for testing.

2. **Querying and Asserting Elements**:
    - **Input Element with Value**:
        ```jsx
        const nameElement4 = screen.getByDisplayValue("John Doe");
        expect(nameElement4).toBeInTheDocument();
        ```
        - This query searches for an input element with the value "John Doe" and asserts that it is present in the document. This is particularly useful for ensuring that form fields are initialized with the correct values or updated to the expected values during testing.

By using `getByDisplayValue`, you can effectively test that specific form elements have the correct values, which is essential for verifying the behavior of forms and other interactive elements in your application.