import { CheckCircleOutlined, HomeOutlined } from "@ant-design/icons";
import styles from "./success.module.scss";
import { Link } from "react-router-dom";
import { Button } from "../../components/ui/Button";

function Success() {
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <CheckCircleOutlined className={styles.icon} />
                <h1>Pagamento Confirmado</h1>
                <p>Obrigado por sua compra</p>

                <div className={styles.orderInfo}>
                    <h2>Resumo do Pedido</h2>

                    <div className={styles.items}>
                        <div className={styles.item}>
                            <img src="https://acdn-us.mitiendanube.com/stores/003/707/394/products/wesley_camiseta_lisa_cores_36-4773cb1dcc3117dc1217478466778425-1024-1024.jpg" alt="product" />
                            <div className={styles.itemInfo}>
                                <h3>Titulo</h3>
                                <span>R$150,00</span>
                            </div>
                        </div>
                    </div>

                    <div className={styles.total}>
                        <strong>Total:</strong>
                        <strong>R$150,00</strong>
                    </div>
                </div>

                <Link to="/">
                    <Button>
                        <HomeOutlined />
                        Voltar para home
                    </Button>
                </Link>
            </div>
        </div>

    )
}

export default Success;