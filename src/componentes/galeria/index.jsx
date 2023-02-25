import styles from './Galeria.module.scss';
import fotos from "./fotos.json";
import fav from "./favorito.png";
import open from "./open.png"
import Tags from '../tagsGaleria/Index';
import Cards from '../cards';
import Populares from '../populares';
import { useState } from 'react';

export default function Galeria() {

    const [itens, setItens] = useState(fotos);
    
    const tags =  [...new Set(fotos.map(tag=>tag.tag))]
    
    function filtraFotos (tag){  
            const novasFotos = fotos.filter(fotos => fotos.tag === tag)
            setItens(novasFotos);
    }

    return (
        <section className={styles.galeria}>
            <div className={styles.galeria__container}>
                <h2>Navegue pela galeria</h2>
                <Tags tags={tags} filtraFotos = {filtraFotos} setItens={setItens}/>
                <ul className={styles.galeria__cards}>
                    {itens.map(foto => {
                        return (
                            <Cards
                                key={foto.id}
                                foto={foto}
                                styles={styles}
                                fav={fav}
                                open={open}
                            />
                        )
                    })}
                </ul>
            </div>
            <Populares/>
        </section>
    );
};