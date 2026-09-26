import './Header.css';
import { NavLink } from 'react-router-dom';

export default function Header({ cartItemCount, wishItemCount, isMenuOpen, onMenuClick }) {
  return (
    <header id="header-container">
      <div id="header">
        <div id="logo" aria-label="Market WB logo" />
        <button
          id="sideMenu"
          type="button"
          onClick={onMenuClick}
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
        >
          <i className={`fa ${isMenuOpen ? 'fa-times' : 'fa-bars'}`} aria-hidden="true" />
        </button>

        <div id="searchBar">
          <input placeholder="Search on Wildberries" aria-label="Search products" />
        </div>

        <nav id="userButtons" aria-label="Main navigation">
          <NavLink to="/orders" className="header-link">
            <i className="fa fa-gift" aria-hidden="true" />
            <span>Orders</span>
          </NavLink>

          <NavLink to="/wishlist" className="header-link" id="wishes">
            {wishItemCount > 0 && <span id="counter-wishes">{wishItemCount}</span>}
            <i className="fa fa-heart" aria-hidden="true" id="wished" />
            <span>Wishlist</span>
          </NavLink>

          <NavLink to="/profile" className="header-link">
            <i className="fa fa-user" aria-hidden="true" />
            <span>Profile</span>
          </NavLink>

          <NavLink to="/cart" className="header-link" id="cart">
            {cartItemCount > 0 && <span id="counter-cart">{cartItemCount}</span>}
            <i className="fa fa-shopping-cart" aria-hidden="true" />
            <span>Cart</span>
          </NavLink>
        </nav>
      </div>
    </header>
  );
}