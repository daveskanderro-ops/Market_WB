import { useState } from 'react';

import Header from '../reusableComponents/Header';
import Product_items from './Product_items';


export default function Home() {
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
        <>
            <Header
                cartItemCount={cartItemCount}
                wishItemCount={wishItemCount}
                isMenuOpen={isSidebarOpen}
                onMenuClick={() => setIsSidebarOpen((isOpen) => !isOpen)} />

            <Product_items
                addToCart={addToCart}
                cartItems={cartItems}
                decreaseCartQuantity={decreaseCartQuantity}
                wishItems={wishItems}
                toggleWishList={toggleWishList} />

            
        </>
    );
}
