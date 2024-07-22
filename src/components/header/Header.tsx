import React from 'react';
import {Nav} from './nav/Nav';
import styles from './Header.module.scss'
import {SvgSelector} from "../../common/svgSelector/SvgSelector";
import {Links} from "./links/Links";
import {Link} from "react-scroll";
import {NavLink} from '../../types/enum/navLink';

export function Header() {

  return (
      <header className={styles.header}>
        <div className={styles.headerContainer}>
          <Link
              className={styles.logo}
              to={NavLink.Home}
              spy={true}
              smooth={true}
              offset={-60}
              duration={500}
          >
            <SvgSelector svgName={"PortfolioSvg"}/>
          </Link>

          <Nav/>

          <Links/>
        </div>
      </header>
  );
}
