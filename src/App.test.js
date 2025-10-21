import { render, screen } from '@testing-library/react';
import App from './App';

test('renders rock paper scissors game', () => {
  render(<App />);
  const youElement = screen.getByText(/You/i);
  const computerElement = screen.getByText(/Computer/i);
  expect(youElement).toBeInTheDocument();
  expect(computerElement).toBeInTheDocument();
});
