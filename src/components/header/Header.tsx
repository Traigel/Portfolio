import React from 'react';
import {Nav} from './nav/Nav';
import styles from './Header.module.scss'
import {SvgSelector} from "../../common/svgSelector/SvgSelector";
import {Links} from "./links/Links";
import {HeaderComponentType} from "../../bll/state";

type HeaderPropsType = {
    headerComponent: HeaderComponentType
}

export function Header(props: HeaderPropsType) {
    return (
        <div className={styles.header}>
            <div className={styles.headerContainer}>
                <a href={'#'} className={styles.logo}>
                    <SvgSelector svgName={"PortfolioSvg"}/>
                </a>
                <Nav nav={props.headerComponent.nav}/>
                <Links links={props.headerComponent.links}/>
            </div>
        </div>
    );
}
