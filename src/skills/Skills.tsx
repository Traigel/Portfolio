import React from 'react';
import styles from './Skills.module.scss'
import {Skill} from './skill/Skill';
import {Title} from "../common/components/title/Title";

export function Skills() {
    return (
        <div className={styles.skillsBlock}>
            <div className={styles.skillsContainer}>
                <Title
                    span={'What I Do?'}
                    h2={'How I can help your next project'}
                />
                <div className={styles.skills}>
                    <Skill svgName={'HTML'} description={'Стандартизированный язык гипертекстовой разметки документов для просмотра веб-страниц в браузере.'}/>
                    <Skill svgName={'CSS'} description={'Формальный язык описания внешнего вида документа, написанного с использованием языка разметки.'}/>
                    <Skill svgName={'JavaScript'} description={'Мультипарадигменный язык программирования. Поддерживает объектно-ориентированный, императивный и функциональный стили.'}/>
                    <Skill svgName={'React'} description={'JavaScript-библиотека с открытым исходным кодом для разработки пользовательских интерфейсов.'}/>
                    <Skill svgName={'Storybook'} description={'Библиотека UI, которую можно использовать для документирования компонентов. Также она позволяет упорядочивать и собирать компоненты JavaScript.'}/>
                    <Skill svgName={'Material-ui'} description={'Фрэймворк, предоставляющий готовые решения для быстрой и довольно простой web разработки.'}/>
                    <Skill svgName={'UnitTesting'} description={'Процесс в программировании, позволяющий проверить на корректность отдельные модули исходного кода программы'}/>


                </div>
            </div>
        </div>
    );
}
