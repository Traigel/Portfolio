import React from 'react';
import styles from './Footer.module.scss'
import {Title} from "../../common/title/Title";

export function Footer() {
    return (
        <div className={styles.footerBlock}>
            <div className={styles.footerContainer}>
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
