import { CloseOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import { Button } from "../../components/ui/Button";
import styles from "./product.module.scss";
import { ProductCard } from "../../components/ProductCard";

function Product() {
    const isInCart = false;

    return (
        <div className={styles.container}>
            <div className={styles.product}>
                <div className={styles.imageContainer}>
                    <img src="https://acdn-us.mitiendanube.com/stores/003/707/394/products/wesley_camiseta_lisa_cores_36-4773cb1dcc3117dc1217478466778425-1024-1024.jpg" alt="product" />
                </div>

                <div className={styles.info}>
                    <h1>Nome do Produto</h1>
                    <p className={styles.description}>
                        Minha descricao do produto
                    </p>
                    <span className={styles.price}>R$150,00</span>
                    <div className={styles.details}>
                        <h2>Detalhes do Produto</h2>
                        <p>Descricao detalhada do produto</p>

                        <ul>
                            <li>Garantia 12 meses</li>
                            <li>Frete gratuito</li>
                            <li>Produto original com nota fiscal</li>
                        </ul>
                    </div>

                    <div className={styles.actions}>
                        <Button variant={isInCart ? "danger" : "primary"}>
                            {isInCart ?
                                (
                                    <>
                                        <CloseOutlined />
                                        Remover do Carrinho
                                    </>
                                ) :
                                (
                                    <>
                                        <ShoppingCartOutlined />
                                        Adicionar ao Carrinho
                                    </>
                                )
                            }
                        </Button>
                    </div>
                </div>
            </div>

            <div className={styles.relatedProducts}>
                <h2>Produtos relacionados</h2>
                <div className={styles.carousel}>
                    <ProductCard id="1" title="Camiseta Preta" description="Camiseta nova preta" price={150} imageUrl="https://acdn-us.mitiendanube.com/stores/003/707/394/products/wesley_camiseta_lisa_cores_36-4773cb1dcc3117dc1217478466778425-1024-1024.jpg" />
                    <ProductCard id="1" title="Camiseta Preta" description="Camiseta nova preta" price={150} imageUrl="https://acdn-us.mitiendanube.com/stores/003/707/394/products/wesley_camiseta_lisa_cores_36-4773cb1dcc3117dc1217478466778425-1024-1024.jpg" />
                    <ProductCard id="1" title="Camiseta Preta" description="Camiseta nova preta" price={150} imageUrl="https://acdn-us.mitiendanube.com/stores/003/707/394/products/wesley_camiseta_lisa_cores_36-4773cb1dcc3117dc1217478466778425-1024-1024.jpg" />
                </div>
            </div>
        </div>

    )
}

export default Product;