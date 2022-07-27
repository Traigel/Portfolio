import React from 'react';
import styles from './Footer.module.css'
import styleContainer from '../common/styles/Container.module.css'

export function Footer() {
    return (
        <div className={styles.footerBlock}>
            <div className={`${styleContainer.container} ${styles.footerContainer}`}>
                <h2 className={styles.title}>Трайгель Владимир</h2>
                <div className={styles.imgs}>
                    <div className={styles.img}></div>
                    <div className={styles.img}></div>
                    <div className={styles.img}></div>
                    <div className={styles.img}></div>
                </div>
                <h4>© 2022 Все права защищены</h4>
            </div>
        </div>
    );
}
