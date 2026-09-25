import './App.css';
import Header from './Components/Header';
import Product_items from './Components/Product_items';
import Cart from './Components/Cart';
import WishList from './Components/WishList';
import { useState } from 'react';
import SideBar from './Components/SideBar';
import { Route, Routes } from 'react-router-dom';
import Layout from './Components/Layout';

function App() {
  const [cartItems, setCartItems] = useState([]);
  const cartItemCount = cartItems.reduce((total, item) => total + item.quantity, 0);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const [wishItems, setWishItems] = useState([]);
  const wishItemCount = wishItems.reduce((total, item) => total + item.quantity, 0);

  const addToCart = (item) => {
    setCartItems((currentItems) => {
      const existingItem = currentItems.find((cartItem) => cartItem.id === item.id);
      if (existingItem) {
        return currentItems.map((cartItem) => (
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        ));
      }
      return [...currentItems, { ...item, quantity: 1 }];
    });
  };

  const decreaseCartQuantity = (item) => {
    setCartItems((currentItems) => currentItems
      .map((cartItem) => (
        cartItem.id === item.id
          ? { ...cartItem, quantity: cartItem.quantity - 1 }
          : cartItem
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

  return (
    <Routes>
      <Route element={<Layout />}>

        <Route path="/"
          element={<Header
            cartItemCount={cartItemCount}
            wishItemCount={wishItemCount}
            isMenuOpen={isSidebarOpen}
            onMenuClick={() => setIsSidebarOpen((isOpen) => !isOpen)} />} />
        
      </Route>
      <Route path="/"
        element={<Product_items
          addToCart={addToCart}
          cartItems={cartItems}
          decreaseCartQuantity={decreaseCartQuantity}
          wishItems={wishItems}
          toggleWishList={toggleWishList} />} />
    </Routes>
    // <div className="App">

    //   <SideBar
    //     isOpen={isSidebarOpen}
    //     onClose={() => setIsSidebarOpen(false)}
    //   />
    // <Header
    //   cartItemCount={cartItemCount}
    //   wishItemCount={wishItemCount}
    //   isMenuOpen={isSidebarOpen}
    //   onMenuClick={() => setIsSidebarOpen((isOpen) => !isOpen)}
    // />
    // <Product_items
    //   addToCart={addToCart}
    //   cartItems={cartItems}
    //   decreaseCartQuantity={decreaseCartQuantity}
    //   wishItems={wishItems}
    //   toggleWishList={toggleWishList}
    // />
    //   {/* <Cart items={cartItems}/> */}
    //   <WishList items={wishItems}/>
    // </div>
  );
}

export default App;
