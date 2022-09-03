import React from 'react';
import styles from './Links.module.scss'
import {SvgSelector} from "../../../common/svgSelector/SvgSelector";
import {LinksType} from "../../../bll/state";
import {LanguageType} from "../../../App";

type LinksPropsType = {
    links: LinksType[]
    callback: (language: LanguageType) => void
    language: LanguageType
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
                <span
                    onClick={() => props.callback("en")}
                    className={props.language === "en" ? styles.active : ''}
                >en</span>
                |
                <span onClick={() => props.callback("ru")}
                      className={props.language === "ru" ? styles.active : ''}
                >ru</span>
            </div>
        </div>
    );
}
