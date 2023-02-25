import React from 'react';
import fotosPopulares from "./fotosPopulares.json";
import styles from "./Populares.module.scss";

export default function Populares() {
  return (
    <aside className={styles.populares}>
        <h2>Populares</h2>
            <ul className={styles.populares__imagens}>
                {fotosPopulares.map(item =>{
                  return(
                    <li key={item.id}>
                      <img src={item.path} alt={item.alt} />
                    </li>
                  )
                })}
            </ul>
            <button>Ver mais</button>
    </aside>
  )
}
