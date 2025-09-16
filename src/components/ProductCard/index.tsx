import styles from "./productCard.module.scss";

interface IProductCardProps {
    id: string;
    title: string;
    description: string;
    price: number;
    imageUrl: string;
}

export function ProductCard({ id, title, description, price, imageUrl}: IProductCardProps) {
    return (
        <div className={styles.productCard}>
            <img src={imageUrl} alt="image" className={styles.productImage}/>
            <div className={styles.productInfo}>
                <div className={styles.productContent}>
                    <h3>{title}</h3>
                    <p>{description}</p>
                    <span className={styles.price}>R${price}</span>
                </div>

                <button>
                    Adicionar ao Carrinho
                </button>
            </div>
        </div>
    )
}