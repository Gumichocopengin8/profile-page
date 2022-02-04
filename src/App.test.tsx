import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Repo for this page link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Repo for this page/i);
  expect(linkElement).toBeInTheDocument();
});
