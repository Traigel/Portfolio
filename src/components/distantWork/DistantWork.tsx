import React from 'react';
import styles from './DistantWork.module.scss'
import {Title} from "../../common/title/Title";
import {DistantWorkComponentType} from "../../app/state";
import {Link} from "react-scroll";

type DistantWorkPropsType = {
    distantWorkComponent: DistantWorkComponentType
}

export function DistantWork(props: DistantWorkPropsType) {
    return (
        <div className={styles.mainDistantWork}>
            <div className={styles.div1}></div>
            <div className={styles.div2} style={{backgroundImage: `url(${props.distantWorkComponent.bgImg})`}}></div>
            <div className={styles.distantWorkContainer}>
                <Title h2={props.distantWorkComponent.title}/>
                <Link
                    to={'contacts'}
                    className={styles.contactMe}
                    spy={true}
                    smooth={true}
                    offset={-60}
                    duration={500}
                >{props.distantWorkComponent.a}
                </Link>
            </div>
        </div>
    );
}