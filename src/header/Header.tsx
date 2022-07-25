import React from 'react';
import { Nav } from './nav/Nav';
import styles from './Header.module.css'
import styleContainer from '../common/styles/Container.module.css'

export function Header() {
    return (
        <div className={styles.header}>
            <div className={`${styleContainer.container} ${styles.headerContainer}`}>
                <Nav/>
            </div>
        </div>
    );
}
