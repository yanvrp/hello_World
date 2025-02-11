import { Link, useLocation } from 'react-router';
import styles from './menuLink.module.css';

export default function MenuLink({ children, to }) {
    const localizacao = useLocation();

    return (
        <Link className={`
            ${styles.link}
            ${localizacao.pathname === to ? styles.linkDestacado : ""}
        `} to={to}>
            {children}
        </Link>
    )
}