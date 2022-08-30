import React from 'react';
import styles from './Footer.module.css'
import styleContainer from '../common/styles/Container.module.css'
import {Title} from "../common/components/title/Title";

export function Footer() {
    return (
        <div className={styles.footerBlock}>
            <div className={`${styleContainer.container} ${styles.footerContainer}`}>
                <Title
                    h2={'Traihel Vladimir'}
                />
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
