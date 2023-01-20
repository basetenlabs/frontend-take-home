import { render, screen } from '@testing-library/react';
import App from './App';

test('renders initial placeholder text', () => {
  render(<App />);
  const linkElement = screen.getByText(/Replace me with your implementation./i);
  expect(linkElement).toBeInTheDocument();
});
