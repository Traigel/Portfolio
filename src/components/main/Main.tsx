import React from 'react';
import styles from './Main.module.scss'
import photo from '../../assets/image/photo.jpg'

export function Main() {
    return (
        <div className={styles.mainBlock}>
            <div className={styles.mainContainer}>
                <div className={styles.text}>
                    <span>Привет!</span>
                    <h1>Меня завут Владимир Трайгель</h1>
                    <span>Я front-end разроботчик</span>
                </div>
                <div className={styles.photo}>
                    <img src={photo} alt={'photo'}/>
                </div>
            </div>
        </div>
    );
}
