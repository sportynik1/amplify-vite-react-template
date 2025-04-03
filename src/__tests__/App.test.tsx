import '@testing-library/jest-dom'; // This provides the custom matchers
import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';

describe('App', () => {
  test('renders learn react link', () => {
    render(<App />);
    const linkElement = screen.getByText(/learn react/i);
    expect(linkElement).toBeInTheDocument();
  });
});
