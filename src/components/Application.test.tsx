import { render, screen } from '@testing-library/react'
import { Application } from './Application'

describe('Application', () => {
    test('renders correcly', () => {
        render(<Application />);
        const nameElement = screen.getByRole('textbox');
        expect(nameElement).toBeInTheDocument()

        const bioElement = screen.getByRole('textbox')
        expect(bioElement).toBeInTheDocument()

        const jobLocationElement = screen.getByRole('combobox')
        expect(jobLocationElement).toBeInTheDocument()

        const termsElement = screen.getByRole('checkbox')
        expect(termsElement).toBeInTheDocument()

        const submitElement = screen.getByRole('button')
        expect(submitElement).toBeInTheDocument()
    });
});
