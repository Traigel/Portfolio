import React, {useEffect, useState} from 'react';
import styles from './Main.module.scss'
import {MainComponentType} from "../../bll/state";

type MainPropsType = {
    mainComponent: MainComponentType
}

export function Main(props: MainPropsType) {

    const [skill, setSkill] = useState<string>(props.mainComponent.arrSkills[0])
    const arrLength = props.mainComponent.arrSkills.length - 1
    let i = 0
    useEffect(() => {

        const intervalID = setInterval(() => {
            setSkill(props.mainComponent.arrSkills[i])
            if (i < arrLength) i++
            else i = 0
        }, 2000)
        return () => clearInterval(intervalID)
    }, [])

    return (
        <div className={styles.mainBlock} id={'home'}>
            <div className={styles.mainContainer}>
                <div className={styles.text}>
                    <h1>{props.mainComponent.h1}</h1>
                    <h2>{skill}</h2>
                    <p>{props.mainComponent.location}</p>
                    <a className={styles.myWorks} href={'#projects'}>{props.mainComponent.a1}</a>
                    <a className={styles.contactMe} href={'#projects'}><span>{props.mainComponent.a2}</span> &#9660;</a>
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
