import styles from "./footer.module.scss";

export function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.content}>
                <strong>E-commerce Developer</strong>
                <p>&copy; {new Date().getFullYear()} - Todos os direitos reservados</p>
            </div>
        </footer>
    )
}