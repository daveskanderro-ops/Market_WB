import { useEffect, useState } from "react";

export default function QuickView({ item, onClose, addToCart }) {
    const [activeImageIndex, setActiveImageIndex] = useState(0);

    useEffect(() => {
        setActiveImageIndex(0);
    }, [item]);

    if (!item) return null;

    const displayedImages = [item.image];
    const currentImage = displayedImages[activeImageIndex] || item.image;
    const goToPreviousImage = () => {
        setActiveImageIndex((index) =>
            index === 0 ? displayedImages.length - 1 : index - 1
        );
    };

    const goToNextImage = () => {
        setActiveImageIndex((index) =>
            index === displayedImages.length - 1 ? 0 : index + 1
        );
    };

    return (
        <div className="quick-view-overlay" onClick={onClose}>
            <div className="quick-view-modal" onClick={(event) => event.stopPropagation()}>
                <button type="button" className="quick-view-close" onClick={onClose} aria-label="Close quick view">
                    ×
                </button>

                <div className="quick-view-gallery">
                    {displayedImages.length > 1 && (
                        <button type="button" className="gallery-arrow prev" onClick={goToPreviousImage} aria-label="Previous image">
                            ‹
                        </button>
                    )}
                    <img src={currentImage} alt={item.name} className="quick-view-main-image" />
                    {displayedImages.length > 1 && (
                        <button type="button" className="gallery-arrow next" onClick={goToNextImage} aria-label="Next image">
                            ›
                        </button>
                    )}
                    {displayedImages.length > 1 && (
                        <div className="gallery-dots">
                            {displayedImages.map((image, index) => (
                                <button
                                    key={`${item.id}-${index}`}
                                    type="button"
                                    className={index === activeImageIndex ? "dot active" : "dot"}
                                    onClick={() => setActiveImageIndex(index)}
                                    aria-label={`Show image ${index + 1}`}
                                />
                            ))}
                        </div>
                    )}
                </div>

                <div className="quick-view-info">
                    <p className="quick-view-store">{item.store}</p>
                    <a
                        href={`#product-${item.id}`}
                        className="quick-view-name"
                        onClick={(event) => {
                            event.preventDefault();
                            window.location.hash = `product-${item.id}`;
                            onClose();
                        }}
                    >
                        {item.name}
                    </a>

                    <div className="quick-view-price-row">
                        <span className="quick-view-discount-price">
                            {item.discount_price >= 1000
                                ? `${Math.floor(item.discount_price / 1000)} ${item.discount_price % 1000}$`
                                : `${item.discount_price}$`}
                        </span>
                        <span className="quick-view-actual-price">
                            {item.actual_price >= 1000
                                ? `${Math.floor(item.actual_price / 1000)} ${item.actual_price % 1000}$`
                                : `${item.actual_price}$`}
                        </span>
                    </div>

                    <p className="quick-view-description">{item.short_description}</p>

                    <div className="quick-view-meta">
                        <span>⭐ {item.rating}</span>
                        <span>{item.reviews} reviews</span>
                        <span>{item.delivery_approx}</span>
                    </div>

                    <button type="button" className="quick-view-cart-button" onClick={() => { addToCart(item); onClose(); }}>
                        <i className="fa fa-shopping-cart" aria-hidden="true"></i>
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    );
}