import './App.css';
import { Route, Routes } from 'react-router-dom';
import  Home from './Pages/Home/Home'

function App() {

  return (
    <Routes>
      <Route path="/" element={<Home/>} />
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
