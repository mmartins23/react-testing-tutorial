import { render, screen } from '@testing-library/react'
import { Application } from './Application'

describe('Application', () => {
    test('renders correcly', () => {
        render(<Application />);

        const pageElement = screen.getByRole('heading', {
            name: "Job application form"
        })
        expect(pageElement).toBeInTheDocument()

        const sectionElement = screen.getByRole('heading', {
            name: "Section 1"
        })
        expect(sectionElement).toBeInTheDocument()

        const paragraphElement = screen.getByText('All fields are mandatory')
        expect(paragraphElement).toBeInTheDocument()

        const imageElement = screen.getByAltText("a person with laptop")
        expect(imageElement).toBeInTheDocument()

        const nameElement = screen.getByRole('textbox', {
            name: "Name"
        })
        expect(nameElement).toBeInTheDocument()

        const nameElement2 = screen.getByLabelText('Name')
        expect(nameElement2).toBeInTheDocument()

        const nameElement3 = screen.getByPlaceholderText("Full Name")
        expect(nameElement3).toBeInTheDocument()

        const nameElement4 = screen.getByDisplayValue("John Doe")
        expect(nameElement4).toBeInTheDocument()

        const bioElement = screen.getByRole('textbox', {
            name: "Bio"
        })
        expect(bioElement).toBeInTheDocument()

        const jobLocationElement = screen.getByRole('combobox')
        expect(jobLocationElement).toBeInTheDocument()

        const termsElement = screen.getByRole('checkbox')
        expect(termsElement).toBeInTheDocument()

        const termsElement2 = screen.getByLabelText('I agree to the terms and conditions')
        expect(termsElement2).toBeInTheDocument()

        const submitElement = screen.getByRole('button')
        expect(submitElement).toBeInTheDocument()
    });
});
