import React from 'react';
import styles from './DistantWork.module.css'
import styleContainer from '../common/styles/Container.module.css'

export function DistantWork() {
    return (
        <div className={styles.mainDistantWork}>
            <div className={`${styleContainer.container} ${styles.distantWorkContainer}`}>
                <h3>Расмотрю варианты удалённой работы</h3>
                <button>Нанаять меня</button>
            </div>
        </div>
    );
}
