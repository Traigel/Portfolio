import React from 'react';
import styles from './Skill.module.scss'
import {SvgNameType, SvgSelector} from "../../../common/svgSelector/SvgSelector";

type SkillPropsType = {
    svgName: SvgNameType
    description: string
}

export function Skill(props: SkillPropsType) {
    return (
        <div className={styles.skill}>
            <SvgSelector svgName={props.svgName}/>
            <h3 className={styles.title}>{props.svgName}</h3>
            <p className={styles.description}>{props.description}</p>
        </div>
    );
}
