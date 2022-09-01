import React from 'react';
import styles from './MyProjects.module.scss'
import {Project} from './project/Project';
import {Title} from '../common/components/title/Title';
import tidoListImg from '../assets/image/Todolist.png';
import SocialNetworkImg from '../assets/image/SocialNetwork.png'

export function MyProjects() {

    const todoListStyle = {
        backgroundImage: 'url(' + tidoListImg + ')',
    };
    const socialNetworkStyle = {
        backgroundImage: 'url(' + SocialNetworkImg + ')',
    };

    return (
        <div className={styles.projectsBlock}>
            <div className={styles.projectsContainer}>
                <Title
                    span={'Portfolio'}
                    h2={'Some of my most recent projects'}
                />
                <div className={styles.projects}>
                    <Project
                        style={socialNetworkStyle}
                        title={'Social Network'}
                        description={'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'}/>
                    <Project
                        style={todoListStyle}
                        title={'Todo list'}
                        description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'}/>
                </div>
            </div>
        </div>
    );
}
