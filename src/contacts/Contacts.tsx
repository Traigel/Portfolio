import React from 'react';
import styles from './Contacts.module.css'
import stylesContainer from '../common/styles/Container.module.css'
import {Title} from "../common/components/title/Title";

export function Contacts() {
    return (
        <div className={styles.contactsBlock}>
            <div className={`${stylesContainer.container} ${styles.contactsContainer}`}>
                <Title
                    h2={'Contacts'}
                />
                <form className={styles.form}>
                    <input className={styles.input}/>
                    <input className={styles.input}/>
                    <textarea className={styles.textarea}/>
                </form>
                <h2 className={styles.title}>Отправить</h2>
            </div>
        </div>
    );
}
