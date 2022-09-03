import React from 'react';
import styles from './Skills.module.scss'
import {Skill} from './skill/Skill';
import {Title} from "../../common/title/Title";
import {SkillsComponentsType} from "../../bll/state";

type SkillsPropsType = {
    skillsComponents: SkillsComponentsType
}

export function Skills(props: SkillsPropsType) {
    return (
        <div className={styles.skillsBlock}>
            <div className={styles.skillsContainer}>
                <Title
                    span={props.skillsComponents.span}
                    h2={props.skillsComponents.title}
                />
                <div className={styles.skills}>
                    {props.skillsComponents.skills.map((el, index) => {
                        return (
                            <Skill
                                key={index}
                                svgName={el.svgName}
                                description={el.description}
                            />
                        )
                    })}

                </div>
            </div>
        </div>
    );
}
