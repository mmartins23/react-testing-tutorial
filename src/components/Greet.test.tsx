import { render, screen } from '@testing-library/react';
import Greet from './Greet';

test('renders learn react link', () => {
  render(<Greet />);
  const textElement = screen.getByText(/greet/i);
  expect(textElement).toBeInTheDocument();
});