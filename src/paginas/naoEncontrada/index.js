import BotaoPrincipal from 'componentes/botaoPrincipal'
import styles from './naoEncontrada.module.css'
import erro404 from 'assets/erro_404.png'
import { useNavigate } from 'react-router'
export default function NaoEncontrada() {
    const navegar = useNavigate();
    return (
        <>
            <div className={styles.conteudoContainer}>
                <span className={styles.texto404}>404</span>

                <h1 c
                    lassName={styles.titulo}>
                    Puts! Página não encontada.
                </h1>
                <p className={styles.paragrafo}>
                    Tem certeza que era isso que você estava procurando?
                </p>

                <p className={styles.paragrafo}>
                    Aguarde alguns instantes e recarregue a página, ou volte para a página inicial.
                </p>
                <div 
                    className={styles.botaoContainer}
                    onClick={() => navegar(-1)}
                >
                    <BotaoPrincipal tamanho="lg">
                        Voltar

                    </BotaoPrincipal>
                </div>
                <img
                    className={styles.imagemCachorro}
                    src={erro404}
                    alt="Cachorro de oculos"
                />
            </div>
            <div className={styles.espacoEmBranco}></div>
        </>
    )
}