

import React from 'react'

export default function Cards({ foto, styles, fav, open }) {
    return (
        <li key={foto.id} className={styles.galeria__card}>
            <img
                className={styles.galeria__imagem}
                src={foto.imagem}
                alt={foto.titulo}
            />
            <p className={styles.galeria__descricao}>
                {foto.titulo}
            </p>
            <div>
                <p>{foto.creditos}</p>
                <span>
                    <img src={fav} alt="icone: coração de curtir" />
                    <img src={open} alt="icone: abrir modal" />
                </span>
            </div>
        </li>
    )
}
