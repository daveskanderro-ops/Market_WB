import { useState } from "react";
import items_data from "../data/getItemsData";
import QuickView from "./QuickView";
import "./Product_items.css"

export default function Product_items ({
    addToCart,
    cartItems,
    decreaseCartQuantity,
    wishItems,
    toggleWishList
}) {
    const items = items_data();
    const [selectedItem, setSelectedItem] = useState(null);

    const handleQuickView = (item) => {
        setSelectedItem(item);
    };

    return (
        <div className="product-items-container">
            {items.map(item => (
                <div key={item.id} className="product-item">
                    <div id="quickViewButton" onClick={() => handleQuickView(item)}>
                        Quick view
                    </div>
                    <div className="product-image-container">
                        <img src={item.image} alt={item.name} className="product-image"/>
                    </div>
                    <i
                        className={`fa ${wishItems.some((wishItem) => wishItem.id === item.id) ? "fa-heart" : "fa-heart-o"}`}
                        aria-hidden="true"
                        onClick={() => toggleWishList(item)}
                    ></i>
                    <p className="discount-price">
                        {item.discount_price >= 1000
                            ? `${Math.floor(item.discount_price / 1000)} ${item.discount_price % 1000}$`
                            : `${item.discount_price}$`}
                        <span className="actual-price">{item.actual_price >= 1000
                            ? `${Math.floor(item.actual_price / 1000)} ${item.actual_price % 1000}$`
                            : `${item.actual_price}$`}$</span>
                    </p>
                    <h2 className="product" >
                        <span className="product-seller">{item.store}</span>
                         <span> / </span>
                        <span className="product-name">{item.name}</span>
                    </h2>

                    <p className="product-rating">
                        { item.rating === 5 ? <i className="fa fa-star" aria-hidden="true"><span className="rating-score">{item.rating}</span></i> : <i className="fa fa-star-half-o" aria-hidden="true">
                            <span className="rating-score">{item.rating}</span>
                            </i>}  
                        <span className="product-review"><i className="fa fa-circle" aria-hidden="true" style={{fontSize: "5px"}}></i> {item.reviews >= 1000
                            ? `${Math.floor(item.reviews / 1000)} ${item.reviews % 1000} reviews`
                            : `${item.reviews} reviews`}</span>
                    </p>
                    
                    {cartItems.some((cartItem) => cartItem.id === item.id) ? (
                        <div className="cart-quantity-control">
                            <button type="button" onClick={() => decreaseCartQuantity(item)}>-</button>
                            <p>{cartItems.find((cartItem) => cartItem.id === item.id).quantity}</p>
                            <button type="button" onClick={() => addToCart(item)}>+</button>
                        </div>
                    ) : (
                        <button className="addToCart" onClick={() => addToCart(item)}>
                            <i className="fa fa-shopping-cart" aria-hidden="true"></i>
                            Add to Cart
                        </button>
                    )}
                </div>
            ))}

            {selectedItem && (
                <QuickView item={selectedItem} onClose={() => setSelectedItem(null)} addToCart={addToCart} />
            )}
        </div>
    )
}
