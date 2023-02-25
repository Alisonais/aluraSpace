
import React from 'react';

export default function Icone({icone ,styles}) {
  return (
    <li className={styles.menu__item}>
        <img src={icone.imagem} alt={icone.titulo} />
        <a href="/">{icone.titulo}</a>
    </li>
  )
}
