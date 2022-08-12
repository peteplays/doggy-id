import { render, screen } from '@testing-library/react';

import App from './App';

describe('renders app', () => {
  test('should load title text', () => {
    render(<App />);
    const el = screen.getAllByText(/service dog/i);
    expect(el).toHaveLength(3);
    expect(el[0]).toBeInTheDocument();
  });

  test('should load image', async () => {
    render(<App />);
    const image = await screen.findByAltText(/the service dog/i);
    expect(image).toBeInTheDocument();
  });

  test('should load footer text', () => {
    render(<App />);
    const footerText = screen.getByText(/in case of accident/i);
    expect(footerText).toBeInTheDocument();
  });
});
