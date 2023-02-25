import Icone from '../icone';
import styles from '../menu/Menu.module.scss';
import icones from "./iconesMenu.json"


export default function Menu() {
    return (
        <nav className={styles.menu}>
            <ul className={styles.menu__lista}>
                {icones.map(icone => {
                    return (
                        <Icone
                            key={icone.id}
                            icone={icone}
                            styles={styles}
                        />
                    )
                })}
            </ul>
        </nav>
    )
};

