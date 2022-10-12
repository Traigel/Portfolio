import React from 'react';
import styles from './Main.module.scss'
import {MainComponentType} from "../../app/state";
import {SkillsInfo} from "./skillsInfo/SkillsInfo";
import {Link} from "react-scroll";

type MainPropsType = {
    mainComponent: MainComponentType
}

export function Main(props: MainPropsType) {

    return (
        <div className={styles.mainBlock} id={'home'}>
            <div className={styles.mainContainer}>
                <div className={styles.text}>
                    <h1>{props.mainComponent.h1}</h1>
                    <SkillsInfo arrSkills={props.mainComponent.arrSkills}/>
                    <p>{props.mainComponent.location}</p>
                    <Link
                        to={'projects'}
                        className={styles.myWorks}
                        spy={true}
                        smooth={true}
                        offset={-60}
                        duration={500}
                    >{props.mainComponent.a1}
                    </Link>
                    <Link
                        to={'contacts'}
                        className={styles.contactMe}
                        spy={true}
                        smooth={true}
                        offset={-60}
                        duration={500}
                    ><span>{props.mainComponent.a2}</span> &#9660;
                    </Link>
                </div>
                <div className={styles.photo}>
                    <div>
                        <img src={props.mainComponent.photo} alt={'photo'}/>
                    </div>
                </div>
            </div>
        </div>
    );
}
