import React from 'react';
import styles from './Links.module.scss'
import {SvgSelector} from "../../../common/svgSelector/SvgSelector";
import {LinksType} from "../../../bll/state";

type LinksPropsType = {
    links: LinksType[]
}

export function Links(props: LinksPropsType) {
    return (
        <div className={styles.links}>
            {props.links.map((el, index) => {
                return (
                    <a key={index} href={el.href} target="_blank">
                        <SvgSelector svgName={el.svgName}/>
                    </a>
                )
            })}
            <div className={styles.language}>
                <span>en</span>|<span>ru</span>
            </div>
        </div>
    );
}
