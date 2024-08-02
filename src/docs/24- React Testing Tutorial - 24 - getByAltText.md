React Testing Tutorial - 24 - getByAltText
### `getByAltText` in React Testing Library

The `getByAltText` query is used to find elements by their `alt` attribute value. This is particularly useful for images (`<img>`) where the `alt` text is used to describe the content of the image for accessibility purposes. It ensures that images are correctly described, enhancing the accessibility of the application.

### Examples of `getByAltText`

1. **Basic Usage**:
    ```jsx
    <img src="image.png" alt="A scenic view" />
    ```

    Test:
    ```jsx
    const imageElement = screen.getByAltText('A scenic view');
    expect(imageElement).toBeInTheDocument();
    ```

2. **With Other Elements**:
    ```jsx
    <input type="image" src="submit.png" alt="Submit button" />
    ```

    Test:
    ```jsx
    const imageButtonElement = screen.getByAltText('Submit button');
    expect(imageButtonElement).toBeInTheDocument();
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
            <img src="https://via.placeholder" alt="a person with laptop"/>
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

This component renders a form for a job application, including an image with the `alt` text "a person with laptop". The `alt` attribute describes the image, providing important context for screen readers and other assistive technologies.

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

        const imageElement = screen.getByAltText("a person with laptop");
        expect(imageElement).toBeInTheDocument();

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

### Explanation of `getByAltText` in the Test Code

1. **Rendering the Component**:
    ```jsx
    render(<Application />);
    ```
    - This line renders the `Application` component into the virtual DOM for testing.

2. **Querying and Asserting Elements**:
    - **Image Element with Alt Text**:
        ```jsx
        const imageElement = screen.getByAltText("a person with laptop");
        expect(imageElement).toBeInTheDocument();
        ```
        - This query searches for an image element with the `alt` text "a person with laptop" and asserts that it is present in the document. This is essential for verifying that the image is properly rendered and accessible to users relying on screen readers.

Using `getByAltText`, you can effectively test that images and other elements with `alt` attributes are present and correctly described, which is crucial for ensuring the accessibility and usability of your application.