import { render, screen } from '@testing-library/react';
import Greet from './Greet';

// Greet should render the text hello and if a name is passed into the component, it should render hello followed by the name
test('Greet renders correctly', () => {
  render(<Greet />);
  const textElement = screen.getByText(/hello/i);
  expect(textElement).toBeInTheDocument();
});

test('Greet renders with a name', () => {
    render(<Greet name='Ash'/>);
    const textElement = screen.getByText(`Hello Ash`);
    expect(textElement).toBeInTheDocument();
  });