import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Cart from './Components/Cart';
import WishList from './Components/WishList';
import Home from './Components/Home';
import SideBar from './Components/SideBar';
import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';

function AppShell({ children, cartItemCount, wishItemCount, isSidebarOpen, onSidebarToggle }) {
  return (
    <>
      <Header
        cartItemCount={cartItemCount}
        wishItemCount={wishItemCount}
        isMenuOpen={isSidebarOpen}
        onMenuClick={onSidebarToggle}
      />
      <SideBar isOpen={isSidebarOpen} onClose={() => onSidebarToggle(false)} />
      <main>{children}</main>
      <Footer />
    </>
  );
}

function App() {
  const [cartItems, setCartItems] = useState([]);
  const cartItemCount = cartItems.reduce((total, item) => total + item.quantity, 0);
  const [wishItems, setWishItems] = useState([]);
  const wishItemCount = wishItems.reduce((total, item) => total + item.quantity, 0);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const addToCart = (item) => {
    setCartItems((currentItems) => {
      const existingItem = currentItems.find((cartItem) => cartItem.id === item.id);
      if (existingItem) {
        return currentItems.map((cartItem) => (
          cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
        ));
      }
      return [...currentItems, { ...item, quantity: 1 }];
    });
  };

  const decreaseCartQuantity = (item) => {
    setCartItems((currentItems) => currentItems
      .map((cartItem) => (
        cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity - 1 } : cartItem
      ))
      .filter((cartItem) => cartItem.quantity > 0));
  };

  const toggleWishList = (item) => {
    setWishItems((currentItems) => {
      const existingItem = currentItems.find((wishItem) => wishItem.id === item.id);

      if (existingItem) {
        return currentItems.filter((wishItem) => wishItem.id !== item.id);
      }
      return [...currentItems, { ...item, quantity: 1 }];
    });
  };

  const appShellProps = {
    cartItemCount,
    wishItemCount,
    isSidebarOpen,
    onSidebarToggle: (nextState) => {
      setIsSidebarOpen((isOpen) => (typeof nextState === 'boolean' ? nextState : !isOpen));
    },
  };

  return (
    <Routes>
      <Route
        path="/"
        element={(
          <AppShell {...appShellProps}>
            <Home
              addToCart={addToCart}
              cartItems={cartItems}
              decreaseCartQuantity={decreaseCartQuantity}
              wishItems={wishItems}
              toggleWishList={toggleWishList}
            />
          </AppShell>
        )}
      />
      <Route
        path="/wishlist"
        element={(
          <AppShell {...appShellProps}>
            <WishList items={wishItems} />
          </AppShell>
        )}
      />
      <Route
        path="/cart"
        element={(
          <AppShell {...appShellProps}>
            <Cart items={cartItems} />
          </AppShell>
        )}
      />
      <Route
        path="*"
        element={(
          <AppShell {...appShellProps}>
            <Home
              addToCart={addToCart}
              cartItems={cartItems}
              decreaseCartQuantity={decreaseCartQuantity}
              wishItems={wishItems}
              toggleWishList={toggleWishList}
            />
          </AppShell>
        )}
      />
    </Routes>
  );
}

export default App;
