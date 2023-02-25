import logo from './logo.png';
import search from './search.png';
import styles from './Cabecalho.module.scss'

export default function Cabecalho(){
    return(
        <header className={styles.cabecalho}>
            <img src={logo} alt="logo alura space" />
            <div className={styles.cabecalho__container}>
                <input className={styles.cabecalho__input} type="text" placeholder="O que você procura?" />
                <img src={search} alt="imagem de lupa" />
            </div>
        </header>
    )
};