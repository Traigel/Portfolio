import React from 'react';
import styles from './Main.module.scss'
import {SkillsInfo} from "./skillsInfo/SkillsInfo";
import {Link} from "react-scroll";
import {useTranslation} from 'react-i18next';
import {Namespace} from '../../types/enum/i18n';
import {arrSkills} from '../../constants/skills';
import myPhoto from '../../assets/image/photo.jpg'

export function Main() {

  const {t} = useTranslation(Namespace.Main);

  return (
      <div className={styles.mainBlock} id={'home'}>
        <div className={styles.mainContainer}>
          <div className={styles.text}>
            <h1>{t('hello')}</h1>
            <SkillsInfo arrSkills={arrSkills}/>
            <p>{t('location')}</p>
            <Link
                to={'projects'}
                className={styles.myWorks}
                spy={true}
                smooth={true}
                offset={-60}
                duration={500}
            >{t('view_my_works')}
            </Link>
            <Link
                to={'contacts'}
                className={styles.contactMe}
                spy={true}
                smooth={true}
                offset={-60}
                duration={500}
            ><span>{t('contact_me')}</span> &#9660;
            </Link>
          </div>
          <div className={styles.photo}>
            <div>
              <img src={myPhoto} alt={'photo'}/>
            </div>
          </div>
        </div>
      </div>
  );
}
