import React, {useState} from 'react';
import styles from './Nav.module.scss'
import {NavType} from "../../../app/state";
import {Link} from "react-scroll";

type NavPropsType = {
    nav: NavType[]
    menuName: string
}

export function Nav(props: NavPropsType) {

    const [menu, setMenu] = useState<boolean>(false)

    const onClickHandler = () => setMenu(!menu)

    return (
        <div className={styles.nav}>

            <div className={styles.navOpen}>
                {props.nav.map((el, index) => {
                    return (
                        // <a className={styles.a} key={index} href={el.href}>{el.navName}</a>
                        <Link
                            key={index}
                            to={el.href}
                            className={styles.a}
                            activeClass={styles.active}
                            spy={true}
                            smooth={true}
                            offset={-50}
                            duration={500}
                        >{el.navName}</Link>
                    )
                })}
            </div>

            <div className={styles.menu}>
                <h3 className={styles.a} onClick={onClickHandler}>&equiv; {props.menuName}</h3>
                {menu ? <div className={styles.menuOpen}>
                    {props.nav.map((el, index) => {
                        return (
                            <a
                                key={index}
                                className={styles.a}
                                href={el.href}
                                onClick={onClickHandler}
                            >
                                {el.navName}
                            </a>
                        )
                    })}
                </div> : <div></div>}
            </div>
        </div>
    );
}
