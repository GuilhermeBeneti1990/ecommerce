import { Link } from "react-router-dom";
import style from "./header.module.scss";
import { ShoppingCartOutlined } from "@ant-design/icons";

function Header() {
    return (
        <header className={style.container}> 
            <Link to="/">
                <strong>E-commerce Developer</strong>
            </Link>

            <nav>
                <Link to="/">Home</Link>
                <Link to="/cart" className={style.cartLink}>
                    <span>Cart</span>
                    <div className={style.cartIconContainer}>
                        <ShoppingCartOutlined />

                        <span className={style.cartBadge}>2</span>
                    </div>
                </Link>
            </nav>
        </header>
    )
}

export default Header;