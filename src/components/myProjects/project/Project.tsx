import React from 'react';
import styles from './Project.module.scss'

type ProjectStyleType = {
    backgroundImage: string
}

type SkillPropsType = {
    title: string
    description: string
    style?: ProjectStyleType
    img: string
}

export function Project(props: SkillPropsType) {
    return (
        <div className={styles.project}>
            <div className={styles.block}>
                <img className={styles.icon} alt={'iconProject'} src={props.img}/>
                <div className={styles.projectInfo}>
                    <h3 className={styles.title}>{props.title}</h3>
                    <span className={styles.description}>{props.description}</span>
                </div>
            </div>
        </div>
    );
}
