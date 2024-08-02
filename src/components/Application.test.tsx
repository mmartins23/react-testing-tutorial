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

        const nameElement = screen.getByRole('textbox', {
            name: "Name"
        })
        expect(nameElement).toBeInTheDocument()

        const nameElement2 = screen.getByLabelText('Name')
        expect(nameElement2).toBeInTheDocument()

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

        const termsElement3 = screen.getByPlaceholderText("Full Name")
        expect(termsElement3).toBeInTheDocument()

        const submitElement = screen.getByRole('button')
        expect(submitElement).toBeInTheDocument()
    });
});
