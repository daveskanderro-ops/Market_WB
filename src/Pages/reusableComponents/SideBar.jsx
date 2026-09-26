import './SideBar.css';
import { NavLink } from 'react-router-dom';

const menuItems = [
  { label: 'Home', to: '/' },
  { label: 'Brands', to: '/' },
  { label: 'School', to: '/' },
  { label: 'Kids', to: '/' },
  { label: 'Home Goods', to: '/' },
  { label: 'Beauty', to: '/' },
  { label: 'Wishlist', to: '/wishlist' },
  { label: 'Cart', to: '/cart' },
];

export default function SideBar({ isOpen, onClose }) {
  return (
    <div
      id="sideBarOverlay"
      className={isOpen ? 'is-open' : ''}
      onClick={onClose}
      aria-hidden={!isOpen}
    >
      <aside id="sideBarBlock" onClick={(event) => event.stopPropagation()}>
        <nav aria-label="Sidebar navigation">
          <ul id="sidebarList">
            {menuItems.map((item) => (
              <li key={item.label} className="sideMenuItems">
                <NavLink to={item.to} onClick={onClose}>
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </aside>
    </div>
  );
}