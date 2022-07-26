import React from 'react';
import styles from './Project.module.css'

type SkillPropsType = {
    icon: string
    title: string
    description: string
}

export function Project(props: SkillPropsType) {
    return (
        <div className={styles.project}>
            <div className={styles.icon} style={{backgroundImage: `url(${props.icon})`}}>
                <h3 className={styles.button}>Смотреть</h3>
            </div>
            <h3 className={styles.title}>{props.title}</h3>
            <span className={styles.description}>{props.description}</span>
        </div>
    );
}
