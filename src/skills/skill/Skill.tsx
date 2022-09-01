import React from 'react';
import styles from './Skill.module.scss'
import {SvgNameType, SvgSelector} from "../../common/components/svgSelector/SvgSelector";

type SkillPropsType = {
    svgName: SvgNameType
    title?: string
    description: string
}

export function Skill(props: SkillPropsType) {
    return (
        <div className={styles.skill}>
            <SvgSelector svgName={props.svgName}/>
            <h3 className={styles.title}>{props.title ? props.title : props.svgName}</h3>
            <p className={styles.description}>{props.description}</p>
        </div>
    );
}
