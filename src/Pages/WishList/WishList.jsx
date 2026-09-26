import "./Cart.css";

export default function WishList({ items }) {
	const itemCount = items.reduce((total, item) => total + item.quantity, 0);

	return (
		<section className="wishList">
			<h2>WishList ({itemCount})</h2>
			{items.length === 0 ? (
				<p>Your wishList is empty.</p>
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
