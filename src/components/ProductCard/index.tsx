import { CloseOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import { Button } from "../ui/Button";
import styles from "./productCard.module.scss";

interface IProductCardProps {
    id: string;
    title: string;
    description: string;
    price: number;
    imageUrl: string;
    isInCart?: boolean;
}

export function ProductCard({ id, title, description, price, imageUrl, isInCart }: IProductCardProps) {
    return (
        <div className={styles.productCard}>
            <img src={imageUrl} alt="image" className={styles.productImage}/>
            <div className={styles.productInfo}>
                <div className={styles.productContent}>
                    <h3>{title}</h3>
                    <p>{description}</p>
                    <span className={styles.price}>R${price}</span>
                </div>

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
    )
}