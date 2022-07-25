import React from 'react';
import styles from './Skill.module.css'

type SkillPropsType = {
    icon: string
    title: string
    description: string
}

export function Skill(props: SkillPropsType) {
    return (
        <div className={styles.skill}>
            <div className={styles.icon}>{props.icon}</div>
            <h3 className={styles.title}>{props.title}</h3>
            <span className={styles.description}>{props.description}</span>
        </div>
    );
}
