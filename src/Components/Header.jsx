import "./Header.css"

export default function Header({ cartItemCount, wishItemCount, isMenuOpen, onMenuClick }) {
    return (
        <div id="header-container">
            <div id="header" >
                <div id="logo"></div>
                <button
                    id="sideMenu"
                    type="button"
                    onClick={onMenuClick}
                    aria-label={isMenuOpen ? "Закрыть меню" : "Открыть меню"}
                >
                    <i className={`fa ${isMenuOpen ? "fa-times" : "fa-bars"}`} aria-hidden="true"></i>
                </button>
                <div id="searchBar"><input placeholder="Найти на Wildberries"></input></div>
                <div id="userButtons">
                    <div>
                        <i class="fa fa-gift" aria-hidden="true" ></i>
                        <a href="">Заказы</a>
                    </div>

                    <div id="wishes">
                        {wishItemCount > 0 && <div id="counter-wishes">{wishItemCount}</div>}
                        <i class="fa fa-heart" aria-hidden="true" id="wished"></i>
                        <a href="">Избранное</a>
                    </div>

                    <div>
                        <i class="fa fa-user" aria-hidden="true" ></i>
                        <a href="">Профиль</a>
                    </div>

                    <div id="cart">
                        {cartItemCount > 0 && <div id="counter-cart" >{cartItemCount}</div>}
                        <i class="fa fa-shopping-cart" aria-hidden="true"></i>
                        <a href="">Корзина</a>
                    </div>
                </div>
            </div>
        </div>

      

    )
}