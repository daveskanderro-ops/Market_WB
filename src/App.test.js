import { fireEvent, render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from './App';

describe('App routing', () => {
  test('renders the home landing page with header, product list and footer', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>
    );

    expect(screen.getByRole('button', { name: /open menu|close menu/i })).toBeInTheDocument();
    expect(screen.getAllByText(/quick view/i).length).toBeGreaterThan(0);
    expect(screen.getByRole('contentinfo')).toBeInTheDocument();
  });

  test('routes to wishlist from the header navigation', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>
    );

    const wishlistLinks = screen.getAllByRole('link', { name: /wishlist/i });
    fireEvent.click(wishlistLinks[0]);

    expect(screen.getByText(/wishlist \(0\)/i)).toBeInTheDocument();
  });
});
