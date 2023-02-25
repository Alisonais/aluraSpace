import Menu from '../menu';
import styles from './banner.module.scss';
import banner from './banner.png';

export default function Banner (){
    return(
        <main>
            <section className={styles.principal}>
                <Menu/>
                <div className={styles.principal__imagem}>
                    <h1>A galeria mais completa de fotos do espaço!</h1>
                    <img src={banner} alt="Imagem da terra vista do espaço" />
                </div>
            </section>
        </main>
    );
};  