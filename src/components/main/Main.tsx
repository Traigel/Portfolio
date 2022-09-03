import React from 'react';
import styles from './Main.module.scss'
import photo from '../../assets/image/photo.jpg'

export function Main() {



    return (
        <div className={styles.mainBlock} id={'home'}>
            <div className={styles.mainContainer}>
                <div className={styles.text}>
                    <h1>Hi, I'm a developer</h1>
                    <h2>JavaScript</h2>
                    <p>based in Grodno, Belarus.</p>
                    <a className={styles.myWorks} href={'#projects'}>View My Works</a>
                    <a className={styles.contactMe} href={'#projects'}><span>Contact Me</span> &#9660;</a>
                </div>
                <div className={styles.photo}>
                    <div>
                        <img src={photo} alt={'photo'}/>
                    </div>
                </div>
            </div>
        </div>
    );
}
