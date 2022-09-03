import {LinksNameType, SkillsNameType} from "../common/svgSelector/SvgSelector";
import SocialNetworkImg from '../assets/image/SocialNetwork.png'
import tidoListImg from '../assets/image/Todolist.png';

export const state: StateType = {
    en: {
        headerComponent: {
            nav: [
                {href: '#home', navName: 'Home'},
                {href: '#skills', navName: 'Skills'},
                {href: '#projects', navName: 'Portfolio'},
                {href: '#contacts', navName: 'Contact'},
            ],
            links: [
                {href: 'https://github.com/Traihel', svgName: 'GitHub'},
                {href: 'https://www.instagram.com/vova_tron/', svgName: 'Instagram'},
                {href: 'https://www.linkedin.com/in/vladimir-traihel/', svgName: 'Linkedin'},
                {href: 'https://vk.com/grodno1993', svgName: 'VK'},
                {href: 'https://www.codewars.com/users/Traihel', svgName: 'CodeWars'},
            ]
        },
        skillsComponent: {
            span: 'Что я умею?',
            title: 'Мои навыки',
            skills: [
                {
                    svgName: 'HTML',
                    description: 'Стандартизированный язык гипертекстовой разметки документов для просмотра веб-страниц в браузере.'
                },
                {
                    svgName: 'CSS',
                    description: 'Формальный язык описания внешнего вида документа, написанного с использованием языка разметки.'
                },
                {
                    svgName: 'SASS',
                    description: 'Метаязык на основе CSS, предназначенный для увеличения уровня абстракции CSS-кода и упрощения файлов каскадных таблиц стилей.'
                },
                {
                    svgName: 'LESS',
                    description: 'Динамический язык стилей. Он создан под влиянием языка стилей Sass, и, в свою очередь, оказал влияние на его новый синтаксис «SCSS».'
                },
                {
                    svgName: 'JavaScript',
                    description: 'Мультипарадигменный язык программирования. Поддерживает объектно-ориентированный, императивный и функциональный стили.'
                },
                {
                    svgName: 'TypeScript',
                    description: 'Язык программирования, представленный Microsoft в 2012 году и позиционируемый как средство разработки веб-приложений, расширяющее возможности JavaScript.'
                },
                {
                    svgName: 'React',
                    description: 'JavaScript-библиотека с открытым исходным кодом для разработки пользовательских интерфейсов. Может использоваться для разработки одностраничных и мобильных приложений.'
                },
                {
                    svgName: 'Redux',
                    description: 'Библиотека для JavaScript с открытым исходным кодом, предназначенная для управления состоянием приложения.'
                },
                {
                    svgName: 'Axios',
                    description: 'Библиотека с открытым исходным кодом, позволяющая делать HTTP-запросы.'
                },
                {
                    svgName: 'Git',
                    description: 'Бесплатная распределенная система управления версиями с открытым исходным кодом, предназначенная для быстрой и эффективной обработки любых проектов.'
                },
                {
                    svgName: 'Bootstrap',
                    description: 'Набор инструментов для создания сайтов и веб-приложений. Включает в себя HTML- и CSS-шаблоны оформления для типографики, веб-форм, кнопок, меток, блоков навигации и т.д.'
                },
                {
                    svgName: 'Material-ui',
                    description: 'Фрэймворк, предоставляющий готовые google решения для быстрой и довольно простой web разработки.'
                },
                {
                    svgName: 'Postman',
                    description: 'Платформа API, позволяющая разработчикам проектировать, создавать, тестировать и повторять свои API.'
                },
                {
                    svgName: 'Storybook',
                    description: 'Библиотека UI, которую можно использовать для документирования компонентов. Также она позволяет упорядочивать и собирать компоненты.'
                },
                {
                    svgName: 'Snapshot Testing',
                    description: 'Тесты, которые делают скриншот экрана (эталонный скриншот) и сравнивают с актуальным скриншотом, который делается во время прогона тестов.'
                },
                {
                    svgName: 'Unit Testing',
                    description: 'Процесс в программировании, позволяющий проверить на корректность отдельные модули исходного кода программы.'
                },
            ]
        },
        projectsComponent: {
            title: 'Некоторые из моих последних проектов',
            span: 'Портфолио',
            projects: [
                {
                    title: 'Social Network',
                    img: SocialNetworkImg,
                    description: 'Онлайн-платформа, которая используется для общения, знакомств, создания социальных отношений между людьми',
                },
                {
                    title: 'Todo list',
                    img: tidoListImg,
                    description: 'Список дел, которые вам нужно выполнить или того, что вы хотите сделать',
                },

            ]
        }
    },
    ru: {
        headerComponent: {
            nav: [
                {href: '#home', navName: 'Главная'},
                {href: '#skills', navName: 'Скилы'},
                {href: '#projects', navName: 'Проекты'},
                {href: '#contacts', navName: 'Контакты'},
            ],
            links: [
                {href: 'https://github.com/Traihel', svgName: 'GitHub'},
                {href: 'https://www.instagram.com/vova_tron/', svgName: 'Instagram'},
                {href: 'https://www.linkedin.com/in/vladimir-traihel/', svgName: 'Linkedin'},
                {href: 'https://vk.com/grodno1993', svgName: 'VK'},
                {href: 'https://www.codewars.com/users/Traihel', svgName: 'CodeWars'},
            ]
        },
        skillsComponent: {
            span: 'Что я умею?',
            title: 'Мои навыки',
            skills: [
                {
                    svgName: 'HTML',
                    description: 'Стандартизированный язык гипертекстовой разметки документов для просмотра веб-страниц в браузере.'
                },
                {
                    svgName: 'CSS',
                    description: 'Формальный язык описания внешнего вида документа, написанного с использованием языка разметки.'
                },
                {
                    svgName: 'SASS',
                    description: 'Метаязык на основе CSS, предназначенный для увеличения уровня абстракции CSS-кода и упрощения файлов каскадных таблиц стилей.'
                },
                {
                    svgName: 'LESS',
                    description: 'Динамический язык стилей. Он создан под влиянием языка стилей Sass, и, в свою очередь, оказал влияние на его новый синтаксис «SCSS».'
                },
                {
                    svgName: 'JavaScript',
                    description: 'Мультипарадигменный язык программирования. Поддерживает объектно-ориентированный, императивный и функциональный стили.'
                },
                {
                    svgName: 'TypeScript',
                    description: 'Язык программирования, представленный Microsoft в 2012 году и позиционируемый как средство разработки веб-приложений, расширяющее возможности JavaScript.'
                },
                {
                    svgName: 'React',
                    description: 'JavaScript-библиотека с открытым исходным кодом для разработки пользовательских интерфейсов. Может использоваться для разработки одностраничных и мобильных приложений.'
                },
                {
                    svgName: 'Redux',
                    description: 'Библиотека для JavaScript с открытым исходным кодом, предназначенная для управления состоянием приложения.'
                },
                {
                    svgName: 'Axios',
                    description: 'Библиотека с открытым исходным кодом, позволяющая делать HTTP-запросы.'
                },
                {
                    svgName: 'Git',
                    description: 'Бесплатная распределенная система управления версиями с открытым исходным кодом, предназначенная для быстрой и эффективной обработки любых проектов.'
                },
                {
                    svgName: 'Bootstrap',
                    description: 'Набор инструментов для создания сайтов и веб-приложений. Включает в себя HTML- и CSS-шаблоны оформления для типографики, веб-форм, кнопок, меток, блоков навигации и т.д.'
                },
                {
                    svgName: 'Material-ui',
                    description: 'Фрэймворк, предоставляющий готовые google решения для быстрой и довольно простой web разработки.'
                },
                {
                    svgName: 'Postman',
                    description: 'Платформа API, позволяющая разработчикам проектировать, создавать, тестировать и повторять свои API.'
                },
                {
                    svgName: 'Storybook',
                    description: 'Библиотека UI, которую можно использовать для документирования компонентов. Также она позволяет упорядочивать и собирать компоненты.'
                },
                {
                    svgName: 'Snapshot Testing',
                    description: 'Тесты, которые делают скриншот экрана (эталонный скриншот) и сравнивают с актуальным скриншотом, который делается во время прогона тестов.'
                },
                {
                    svgName: 'Unit Testing',
                    description: 'Процесс в программировании, позволяющий проверить на корректность отдельные модули исходного кода программы.'
                },
            ]
        },
        projectsComponent: {
            title: 'Некоторые из моих последних проектов',
            span: 'Портфолио',
            projects: [
                {
                    title: 'Social Network',
                    img: SocialNetworkImg,
                    description: 'Онлайн-платформа, которая используется для общения, знакомств, создания социальных отношений между людьми',
                },
                {
                    title: 'Todo list',
                    img: tidoListImg,
                    description: 'Список дел, которые вам нужно выполнить или того, что вы хотите сделать',
                },

            ]
        }
    },
}

//type
type StateType = {
    [key: string]: {
        headerComponent: HeaderComponentType
        skillsComponent: SkillsComponentsType
        projectsComponent: ProjectsComponentsType
    }
}

export type HeaderComponentType = {
    nav: NavType[]
    links: LinksType[]
}

export type NavType = {
    href: HrefNavType
    navName: string
}

type HrefNavType = '#home' | '#skills' | '#projects' | '#contacts'

export type LinksType = {
    href: string
    svgName: LinksNameType
}

export type SkillsComponentsType = {
    span: string
    title: string
    skills: SkillType[]
}

type SkillType = {
    svgName: SkillsNameType
    description: string
}

export type ProjectsComponentsType = {
    span: string
    title: string
    projects: ProjectType[]
}

type ProjectType = {
    title: string
    img: string
    description: string
}