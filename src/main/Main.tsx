import React from 'react';
import styles from './Main.module.css'
import styleContainer from '../common/styles/Container.module.css'

export function Main() {
    return (
        <div className={styles.mainBlock}>
            <div className={`${styleContainer.container} ${styles.mainContainer}`}>
                <div className={styles.text}>
                    <span>Привет!</span>
                    <h1>Меня завут Владимир Трайгель</h1>
                    <span>Я front-end разроботчик</span>
                </div>
                <div className={styles.photo}></div>
            </div>
        </div>
    );
}
