import './SideBar.css'

export default function SideBar({ isOpen, onClose }) {
    return (
        <div
            id="sideBarOverlay"
            className={isOpen ? 'is-open' : ''}
            onClick={onClose}
            aria-hidden={!isOpen}
        >
            <aside id="sideBarBlock" onClick={(event) => event.stopPropagation()}>
                <ul id="sidebarList">
                    <li className="sideMenuItems">Бренды</li>
                    <li className="sideMenuItems">Школа</li>
                    <li className="sideMenuItems">Детям</li>
                    <li className="sideMenuItems">Дом</li>
                    <li className="sideMenuItems">Красота</li>
                    <li className="sideMenuItems">Концтовары</li>
                    <li className="sideMenuItems">Акции</li>
                </ul>
            </aside>
        </div>
    )
}