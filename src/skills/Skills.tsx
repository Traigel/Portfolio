import React from 'react';
import styles from './Skills.module.css'
import stylesContainer from '../common/styles/Container.module.css'
import {Skill} from './skill/Skill';

export function Skills() {
    return (
        <div className={styles.skillsBlock}>
            <div className={`${stylesContainer.container} ${styles.skillsContainer}`}>
                <h2 className={styles.title}>Мои скилы</h2>
                <div className={styles.skills}>
                    <Skill icon={''} title={'React'} description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'}/>
                    <Skill icon={''} title={'JS/TS'} description={'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'}/>
                    <Skill icon={''} title={'HTML/CSS'} description={'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'}/>
                </div>
            </div>
        </div>
    );
}
