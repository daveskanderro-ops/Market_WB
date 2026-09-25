import ProductItems from './Product_items';

export default function Home({
  addToCart,
  cartItems,
  decreaseCartQuantity,
  wishItems,
  toggleWishList,
}) {
  return (
    <ProductItems
      addToCart={addToCart}
      cartItems={cartItems}
      decreaseCartQuantity={decreaseCartQuantity}
      wishItems={wishItems}
      toggleWishList={toggleWishList}
    />
  );
}
