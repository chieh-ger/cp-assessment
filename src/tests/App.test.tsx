import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from '../App';

describe('render app component', () => {
  test('render header nav', () => {
    render(<App />)
    const topNav = screen.getByText('Chargepoint Assessment');
    expect(topNav).toBeInTheDocument();
  });
  test('render search', () => {
    render(<App />)
    const searchBar = screen.getByPlaceholderText('Search for a movie title')
    expect(searchBar).toBeInTheDocument();
  });
  test('render footer', () => {
    render(<App />)
    const bottomNav = screen.getByTitle('Copyright XYZ');
    expect(bottomNav).toBeInTheDocument();
  });
})
