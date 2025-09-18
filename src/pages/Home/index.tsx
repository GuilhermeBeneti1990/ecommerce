import { ProductCard } from "../../components/ProductCard";
import styles from "./home.module.scss";

function Home() {
    return (
        <div className={styles.container}>
            <div className={styles.banner}>
                <h1>E-commerce Developer</h1>
            </div>

            <div className={styles.products}>
                <ProductCard id="1" title="Camiseta Preta" description="Camiseta nova preta" price={150} imageUrl="https://acdn-us.mitiendanube.com/stores/003/707/394/products/wesley_camiseta_lisa_cores_36-4773cb1dcc3117dc1217478466778425-1024-1024.jpg" isInCart />
                <ProductCard id="1" title="Camiseta Preta" description="Camiseta nova preta" price={150} imageUrl="https://acdn-us.mitiendanube.com/stores/003/707/394/products/wesley_camiseta_lisa_cores_36-4773cb1dcc3117dc1217478466778425-1024-1024.jpg" isInCart/>
                <ProductCard id="1" title="Camiseta Preta" description="Camiseta nova preta" price={150} imageUrl="https://acdn-us.mitiendanube.com/stores/003/707/394/products/wesley_camiseta_lisa_cores_36-4773cb1dcc3117dc1217478466778425-1024-1024.jpg" />
                <ProductCard id="1" title="Camiseta Preta" description="Camiseta nova preta" price={150} imageUrl="https://acdn-us.mitiendanube.com/stores/003/707/394/products/wesley_camiseta_lisa_cores_36-4773cb1dcc3117dc1217478466778425-1024-1024.jpg" />
                <ProductCard id="1" title="Camiseta Preta" description="Camiseta nova preta" price={150} imageUrl="https://acdn-us.mitiendanube.com/stores/003/707/394/products/wesley_camiseta_lisa_cores_36-4773cb1dcc3117dc1217478466778425-1024-1024.jpg" />
                <ProductCard id="1" title="Camiseta Preta" description="Camiseta nova preta" price={150} imageUrl="https://acdn-us.mitiendanube.com/stores/003/707/394/products/wesley_camiseta_lisa_cores_36-4773cb1dcc3117dc1217478466778425-1024-1024.jpg" />
                <ProductCard id="1" title="Camiseta Preta" description="Camiseta nova preta" price={150} imageUrl="https://acdn-us.mitiendanube.com/stores/003/707/394/products/wesley_camiseta_lisa_cores_36-4773cb1dcc3117dc1217478466778425-1024-1024.jpg" />
                <ProductCard id="1" title="Camiseta Preta" description="Camiseta nova preta" price={150} imageUrl="https://acdn-us.mitiendanube.com/stores/003/707/394/products/wesley_camiseta_lisa_cores_36-4773cb1dcc3117dc1217478466778425-1024-1024.jpg" />
            </div>
        </div>
        
    )
}

export default Home;