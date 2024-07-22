import React, {useState} from 'react';
import styles from './Nav.module.scss'
import {Link} from "react-scroll";
import {useTranslation} from 'react-i18next';
import {Namespace} from '../../../types/enum/i18n';
import {navInApp} from '../../../constants/nav';

export function Nav() {

  const {t} = useTranslation(Namespace.Header);

  const [isOpenMenu, setIsOpenMenu] = useState<boolean>(false)

  const onClickHandler = () => setIsOpenMenu(!isOpenMenu)

  return (
      <div className={styles.nav}>

        <div className={styles.navOpen}>
          {navInApp.map((el, index) => {
            return (
                <Link
                    key={index}
                    to={el.href}
                    className={styles.a}
                    activeClass={styles.active}
                    spy={true}
                    smooth={true}
                    offset={-60}
                    duration={500}
                >{t(el.navName)}</Link>
            )
          })}
        </div>

        <div className={styles.menu}>
          <h3 className={styles.a} onClick={onClickHandler}>&equiv; {t('menu')}</h3>
          {isOpenMenu ? <div className={styles.menuOpen}>
            {navInApp.map((el, index) => {
              return (
                  <Link
                      key={index}
                      to={el.href}
                      className={styles.a}
                      activeClass={styles.active}
                      spy={true}
                      smooth={true}
                      offset={-60}
                      duration={500}
                      onClick={onClickHandler}
                  >{t(el.navName)}</Link>
              )
            })}
          </div> : <div></div>}
        </div>
      </div>
  );
}
