import styles from "./button.module.scss";
import type { ButtonHTMLAttributes } from "react";

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "secondary" | "danger";
    fullWidth?: boolean;
}

export function Button({ children, variant = "primary", fullWidth, className, ...props }: IButtonProps) {
    return (
        <button className={`${styles.button} ${styles[variant]} ${fullWidth ? styles.fullWidth : ""} ${className ?? ""}`} {...props}>{children}</button>
    )
}