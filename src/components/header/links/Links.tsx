import React from 'react';
import styles from './Links.module.scss'
import {SvgSelector} from "../../../common/svgSelector/SvgSelector";
import {AllLocales, Locale} from '../../../types/enum/i18n';
import {headerLinks} from '../../../constants/links';
import {useTranslation} from 'react-i18next';

export function Links({hideLanguage = false}: { hideLanguage?: boolean }) {

  const {i18n} = useTranslation();

  const onClickHandler = async (language: Locale) => {
    await i18n.changeLanguage(language)
  }

  return (
      <div className={styles.links}>
        {headerLinks.map((el, index) => {
          return (
              <a key={index} href={el.href} target="_blank">
                <SvgSelector svgName={el.svgName}/>
              </a>
          )
        })}
        {!hideLanguage &&
            <div className={styles.language}>
              {AllLocales.map((language, index) =>
                  <>
                   <span key={index}
                         onClick={() => onClickHandler(language)}
                         className={i18n.language === language ? styles.active : ''}
                   >
                      {language}
                  </span>

                    {index < AllLocales.length - 1 && <span>|</span>}
                  </>
              )}
            </div>
        }

      </div>
  );
}
