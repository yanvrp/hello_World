import styles from "./sobreMim.module.css";
import PostModelo from "componentes/postModelo";
import fotoCapa from "assets/sobre_mim_capa.png";
import fotoSobreMim from "assets/sobre-mim-foto.jpg";

export default function SobreMim() {
    return (
        <PostModelo
            fotoCapa={fotoCapa}
            titulo="Sobre mim"
        >
            <h3 className={styles.subtitulo}>
                Olá, eu sou o Yan!
            </h3>

            <img
                src={fotoSobreMim}
                alt="Foto do Yan apresentando TCC"
                className={styles.fotoSobreMim}
            />

            <p className={styles.paragrafo}>
                Meu nome é Yan Vinícius, sou formado em Sistemas de Informação pela UDC de Foz do Iguaçu, com conclusão em dezembro de 2024. Tenho 25 anos e, embora ainda não tenha experiência formal na área de desenvolvimento, adquiri contato com programação desde o início da faculdade.
            </p>
            <p className={styles.paragrafo}>
                Minha experiência profissional inclui atuação na área de suporte, o que me proporcionou uma boa compreensão do funcionamento e das necessidades técnicas desse setor. Durante a graduação, desenvolvi projetos principalmente em C#, mas também trabalhei com linguagens como Python, JavaScript e PHP, além de tecnologias web como HTML e CSS. Possuo conhecimentos em bancos de dados, como SQL Server e MySQL, e uma sólida base em lógica de programação.
            </p>
            <p className={styles.paragrafo}>
                Atualmente, estou realizando cursos na Alura para aprimorar ainda mais meus conhecimentos em programação e estudando React com JavaScript e TypeScript. Resido em Medianeira e estou em busca de uma oportunidade de trabalho presencial em Medianeira ou Foz do Iguaçu, além de vagas remotas para qualquer lugar do mundo. Quero continuar aprendendo, me desenvolvendo profissionalmente e ingressar de vez na área de desenvolvimento.
            </p>
            <p className={styles.paragrafo}>
                Além da tecnologia, tenho grande interesse por blockchain e criptomoedas, explorando suas aplicações e inovações. Também sou apaixonado por jogos, sempre buscando novas experiências e desafios.
            </p>
            <p className={styles.paragrafo}>

            </p>
            <p className={styles.paragrafo}>

            </p>
        </PostModelo>
    )
}