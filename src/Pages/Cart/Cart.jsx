import "./Cart.css";

export default function Cart({ items }) {
	const itemCount = items.reduce((total, item) => total + item.quantity, 0);

	return (
		<section className="cart">
			<h2>Cart ({itemCount})</h2>
			{items.length === 0 ? (
				<p>Your cart is empty.</p>
			) : (
				<ul>
					{items.map((item) => (
						<li key={item.id}>
							<span>{item.name}</span>
							<span>{item.quantity} x {item.discount_price}$</span>
						</li>
					))}
				</ul>
			)}
		</section>
	);
}
