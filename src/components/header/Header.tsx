import React from 'react';
import {Nav} from './nav/Nav';
import styles from './Header.module.scss'
import {SvgSelector} from "../../common/svgSelector/SvgSelector";
import {Links} from "./links/Links";
import {HeaderComponentType} from "../../bll/state";
import {LanguageType} from "../../App";

type HeaderPropsType = {
    headerComponent: HeaderComponentType
    callback: (language: LanguageType) => void
    language: LanguageType
}

export function Header(props: HeaderPropsType) {
    return (
        <div className={styles.header}>
            <div className={styles.headerContainer}>
                <a href={'#'} className={styles.logo}>
                    <SvgSelector svgName={"PortfolioSvg"}/>
                </a>
                <Nav nav={props.headerComponent.nav} menuName={props.headerComponent.menuName}/>
                <Links
                    links={props.headerComponent.headerLinks}
                    callback={props.callback}
                    language={props.language}
                />
            </div>
        </div>
    );
}
