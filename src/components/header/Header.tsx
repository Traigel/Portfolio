import React from 'react';
import {Nav} from './nav/Nav';
import styles from './Header.module.scss'
import {SvgSelector} from "../../common/svgSelector/SvgSelector";
import {Links} from "./links/Links";
import {HeaderComponentType} from "../../app/state";
import {LanguageType} from "../../app/App";
import {Link} from "react-scroll";

type HeaderPropsType = {
    headerComponent: HeaderComponentType
    callback: (language: LanguageType) => void
    language: LanguageType
}

export function Header(props: HeaderPropsType) {
    return (
        <header className={styles.header}>
            <div className={styles.headerContainer}>
                <Link
                    className={styles.logo}
                    to={'home'}
                    spy={true}
                    smooth={true}
                    offset={-60}
                    duration={500}
                ><SvgSelector svgName={"PortfolioSvg"}/></Link>
                <Nav nav={props.headerComponent.nav} menuName={props.headerComponent.menuName}/>
                <Links
                    links={props.headerComponent.headerLinks}
                    callback={props.callback}
                    language={props.language}
                />
            </div>
        </header>
    );
}
