import React from 'react';
import styles from './Main.module.scss'
import {MainComponentType} from "../../app/state";
import {SkillsInfo} from "./skillsInfo/SkillsInfo";
import {Zoom} from "react-awesome-reveal";
import Typewriter from 'typewriter-effect';

type MainPropsType = {
    mainComponent: MainComponentType
}

export function Main(props: MainPropsType) {

    return (
        <div className={styles.mainBlock} id={'home'}>
            <div className={styles.mainContainer}>
                <div className={styles.text}>
                    <h1>{props.mainComponent.h1}</h1>
                    {/*<SkillsInfo arrSkills={props.mainComponent.arrSkills}/>*/}
                    <Typewriter
                        options={{
                            strings: props.mainComponent.arrSkills,
                            autoStart: true,
                            loop: true,
                        }}
                    />
                    <p>{props.mainComponent.location}</p>
                    <a className={styles.myWorks} href={'#projects'}>{props.mainComponent.a1}</a>
                    <a className={styles.contactMe} href={'#contacts'}><span>{props.mainComponent.a2}</span> &#9660;</a>
                </div>
                <Zoom>
                <div className={styles.photo}>

                    <div>

                        <img src={props.mainComponent.photo} alt={'photo'}/>

                    </div>

                </div>
</Zoom>
            </div>
        </div>
    );
}
