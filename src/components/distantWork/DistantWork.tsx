import React from 'react';
import styles from './DistantWork.module.scss'
import {Title} from "../../common/title/Title";

export function DistantWork() {
    return (
        <div className={styles.mainDistantWork}>
            <div className={styles.distantWorkContainer}>
                <Title
                    h2={'I\'m looking into remote work options'}
                />
                <span>Нанаять меня</span>
            </div>
        </div>
    );
}
