import React from 'react';
import styles from './MyProjects.module.scss'
import {Project} from './project/Project';
import {Title} from '../../common/title/Title';
import {ProjectsComponentsType} from "../../bll/state";

type ProjectsPropsType = {
    projectsComponent: ProjectsComponentsType
}

export function MyProjects(props: ProjectsPropsType) {

    return (
        <div className={styles.projectsBlock} id={'projects'} >
            <div className={styles.projectsContainer}>
                <Title
                    span={props.projectsComponent.span}
                    h2={props.projectsComponent.title}
                />
                <div className={styles.projects}>
                    {props.projectsComponent.projects.map((el, index) => {
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
