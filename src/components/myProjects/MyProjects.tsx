import React from 'react';
import styles from './MyProjects.module.scss'
import {Project} from './project/Project';
import {Title} from '../../common/title/Title';
import {ProjectsComponentsType} from "../../bll/state";

type ProjectsPropsType = {
    projectsComponents: ProjectsComponentsType
}

export function MyProjects(props: ProjectsPropsType) {

    return (
        <div className={styles.projectsBlock}>
            <div className={styles.projectsContainer}>
                <Title
                    span={props.projectsComponents.span}
                    h2={props.projectsComponents.title}
                />
                <div className={styles.projects}>
                    {props.projectsComponents.projects.map((el, index) => {
                        return (
                            <Project
                                key={index}
                                title={el.title}
                                img={el.img}
                                description={el.description}
                            />
                        )
                    })}
                </div>
            </div>
        </div>
    );
}
