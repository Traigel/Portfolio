import React from 'react';
import { Nav } from './nav/Nav';
import styles from './Header.module.scss'

export function Header() {
    return (
        <div className={styles.header}>
            <div className={styles.headerContainer}>
                <Nav/>
            </div>
        </div>
    );
}
