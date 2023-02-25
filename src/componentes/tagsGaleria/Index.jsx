import styles from "./Tags.module.scss";
import fotos from "../galeria/fotos.json"

import React from 'react'

export default function Tags({tags, filtraFotos, setItens}) {
    return (
        <div className={styles.tags}>
            <p>filre por tags:</p>
            <ul className={styles.tags__lista}>
                <li onClick={()=> setItens(fotos)} >Todos</li>
                {tags.map(tag =>  <li key={tag} onClick={()=> filtraFotos(tag)} >{tag}</li> )}
            </ul>
        </div>
    )
}
