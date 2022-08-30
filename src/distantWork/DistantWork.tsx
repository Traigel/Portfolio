import React from 'react';
import styles from './DistantWork.module.css'
import styleContainer from '../common/styles/Container.module.css'
import {Title} from "../common/components/title/Title";

export function DistantWork() {
    return (
        <div className={styles.mainDistantWork}>
            <div className={`${styleContainer.container} ${styles.distantWorkContainer}`}>
                <Title
                    h2={'I\'m looking into remote work options'}
                />
                <span>Нанаять меня</span>
            </div>
        </div>
    );
}
