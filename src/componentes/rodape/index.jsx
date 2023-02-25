import styles from "./Rodape.module.scss";
import face from "../assets/icones.rodape/facebook.svg"
import twitter from "../assets/icones.rodape/twitter.svg"
import insta from "../assets/icones.rodape/instagram.svg"

export default function Rodape(){
    return(
        <footer>
            <div className={styles.rodape}>
                <div className={styles.rodape__container}>
                    <a href="https://pt-br.facebook.com/">
                        <img className={styles.rodape__img} src={face} alt="facebook" />
                    </a>
                    <a href="https://twitter.com/">
                        <img className={styles.rodape__img} src={twitter} alt="twitter" />
                    </a>
                    <a href="https://www.instagram.com/">
                        <img className={styles.rodape__img} src={insta} alt="instagram" />
                    </a>
                </div>
                <a className={styles.rodape__link} href="https://github.com/Alisonais">Desenvolvido por Alisonais.</a>
            </div>
        </footer>
    )
}