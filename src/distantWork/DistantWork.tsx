import React from 'react';
import styles from './DistantWork.module.css'
import styleContainer from '../common/styles/Container.module.css'

export function DistantWork() {
    return (
        <div className={styles.mainDistantWork}>
            <div className={`${styleContainer.container} ${styles.distantWorkContainer}`}>
                <h2>Рассматриваю варианты удалённой работы</h2>
                <span>Нанаять меня</span>
            </div>
        </div>
    );
}
