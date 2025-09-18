import { Link } from "react-router-dom";
import styles from "./cart.module.scss";
import { Button } from "../../components/ui/Button";
import { CloseOutlined } from "@ant-design/icons";

function Cart() {
    const emptyCart = false;
    return (
        <div className={styles.container}>
            <h1>Carrinho de Compras</h1>

            {emptyCart ?
                <div className={styles.emptyCart}>
                    <p>Carrinho vazio</p>
                    <Link to="/">
                        <Button>Continuar comprando</Button>
                    </Link>
                </div>
                :
                <div className={styles.content}>
                    <div className={styles.cartItems}>
                        <div className={styles.cartItem}>
                            <Link to="/product/1" className={styles.productInfo}>
                                <img src="https://acdn-us.mitiendanube.com/stores/003/707/394/products/wesley_camiseta_lisa_cores_36-4773cb1dcc3117dc1217478466778425-1024-1024.jpg" alt="image" />

                                <div>
                                    <h3>Titulo do Produto</h3>
                                    <p>Descricao do produto</p>
                                    <span className={styles.price}>R$150,00</span>
                                </div>
                            </Link>

                            <button className={styles.removeButton}>
                                <CloseOutlined />
                            </button>
                        </div>

                        <div className={styles.cartItem}>
                            <Link to="/product/1" className={styles.productInfo}>
                                <img src="https://acdn-us.mitiendanube.com/stores/003/707/394/products/wesley_camiseta_lisa_cores_36-4773cb1dcc3117dc1217478466778425-1024-1024.jpg" alt="image" />

                                <div>
                                    <h3>Titulo do Produto</h3>
                                    <p>Descricao do produto</p>
                                    <span className={styles.price}>R$150,00</span>
                                </div>
                            </Link>

                            <button className={styles.removeButton}>
                                <CloseOutlined />
                            </button>
                        </div>

                        <div className={styles.cartItem}>
                            <Link to="/product/1" className={styles.productInfo}>
                                <img src="https://acdn-us.mitiendanube.com/stores/003/707/394/products/wesley_camiseta_lisa_cores_36-4773cb1dcc3117dc1217478466778425-1024-1024.jpg" alt="image" />

                                <div>
                                    <h3>Titulo do Produto</h3>
                                    <p>Descricao do produto</p>
                                    <span className={styles.price}>R$150,00</span>
                                </div>
                            </Link>

                            <button className={styles.removeButton}>
                                <CloseOutlined />
                            </button>
                        </div>
                    </div>

                    <div className={styles.summary}>
                        <h2>Resumo do Pedido</h2>
                        <div className={styles.summaryContent}>
                            <div className={styles.summaryItem}>
                                <span>Subtotal</span>
                                <span>R$150,00</span>
                            </div>

                            <div className={styles.summaryItem}>
                                <span>Frete</span>
                                <span>Gratis</span>
                            </div>

                            <div className={styles.summaryTotal}>
                                <span>Total</span>
                                <span>R$150,00</span>
                            </div>

                            <Button>Finalizar Compra</Button>
                            <Link to="/">
                                <Button variant="secondary" fullWidth>Continuar Comprando</Button>
                            </Link>
                        </div>
                    </div>
                </div>
            }
        </div>

    )
}

export default Cart;