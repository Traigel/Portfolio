import React from 'react';
import styles from './MyProjects.module.css'
import stylesContainer from '../common/styles/Container.module.css'
import {Project} from './project/Project';

export function MyProjects() {
    return (
        <div className={styles.projectsBlock}>
            <div className={`${stylesContainer.container} ${styles.projectsContainer}`}>

                <div className={styles.title}>
                    <span>Portfolio</span>
                    <h2>Some of my most recent projects</h2>
                </div>

                <div className={styles.projects}>
                    <Project icon={'https://inventure.com.ua/img/thumb.990.660/upload/board/it-project.jpg'} title={'Название проекта'} description={'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'}/>
                    <Project icon={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVlkClFvI-gzv2m6mrPMQl6Cvg7dBumLLdnQ&usqp=CAU'} title={'Название проекта'} description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'}/>
                </div>
            </div>
        </div>
    );
}
