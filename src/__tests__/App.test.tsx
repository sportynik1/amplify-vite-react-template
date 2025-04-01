// src/__tests__/App.test.tsx
import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App'; // Adjust the path based on your project structure

describe('App Component', () => {
  test('renders welcome message', () => {
    render(<App />);
    const linkElement = screen.getByText(/welcome/i);
    expect(linkElement).toBeInTheDocument();
  });

  test('renders a button', () => {
    render(<App />);
    const buttonElement = screen.getByRole('button', { name: /click me/i });
    expect(buttonElement).toBeInTheDocument();
  });
});
