import React from 'react';
import styles from './Project.module.css'

type ProjectStyleType = {
    backgroundImage: string
}

type SkillPropsType = {
    title: string
    description: string
    style?: ProjectStyleType
}

export function Project(props: SkillPropsType) {
    return (
        <div className={styles.project}>
            <div className={styles.icon} style={props.style}>
                <h3 className={styles.button}>Смотреть</h3>
            </div>
            <h3 className={styles.title}>{props.title}</h3>
            <span className={styles.description}>{props.description}</span>
        </div>
    );
}
