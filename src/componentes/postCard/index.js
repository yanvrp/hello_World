import { Link } from 'react-router'
import styles from './post.module.css'
import BotaoPrincipal from 'componentes/botaoPrincipal'

export default function PostCard({ post }) {
    return (
        <Link to={`/post/${post.id}`}>
            <div className={styles.post}>
                <img
                    className={styles.capa}
                    src={`/assets/posts/${post.id}/capa.png`}
                    alt="capa"
                />

                <h2 className={styles.titulo}>{post.titulo}</h2>

                <BotaoPrincipal>
                    Abrir
                </BotaoPrincipal>
            </div>
        </Link>
    )
}