import {LinksNameType, SkillsNameType} from "../common/svgSelector/SvgSelector";
import myPhoto from '../assets/image/photo.jpg'
import bgImg from '../assets/image/intro-bg-2.jpg'
import SocialNetworkImg from '../assets/image/SocialNetwork.jpg'
import tidoListImg from '../assets/image/Todolist.jpg';
import LearningCardsImg from '../assets/image/LearningCards.png';

const headerLinks: LinksType[] = [
    {href: 'https://github.com/Traihel', svgName: 'GitHub'},
    {href: 'https://www.instagram.com/vova_tron/', svgName: 'Instagram'},
    {href: 'https://www.linkedin.com/in/vladimir-traihel/', svgName: 'Linkedin'},
]

const contactsLinks: LinksType[] = [
    {href: 'https://github.com/Traihel', svgName: 'GitHub'},
    {href: 'https://www.instagram.com/vova_tron/', svgName: 'Instagram'},
    {href: 'https://www.linkedin.com/in/vladimir-traihel/', svgName: 'Linkedin'},
    {href: 'https://vk.com/grodno1993', svgName: 'VK'},
    {href: 'https://www.codewars.com/users/Traihel', svgName: 'CodeWars'},
]

const arrSkills: string[] = ['React', 'JavaScript', 'Redux', 'TypeScript', 'Formik', 'Axios', 'Material-ui', 'Bootstrap', 'HTML/CSS', 'SASS/LESS', 'Storybook', 'Postman', 'Unit Testing', 'Git']

const call: string = '+375 (29) 887-75-03'

export const state: StateType = {
    en: {
        headerComponent: {
            menuName: 'Menu',
            nav: [
                {href: '#home', navName: 'Home'},
                {href: '#about', navName: 'About'},
                {href: '#skills', navName: 'Skills'},
                {href: '#projects', navName: 'Portfolio'},
                {href: '#contacts', navName: 'Contact'},
            ],
            headerLinks
        },
        mainComponent: {
            h1: `Hi, I'm a developer`,
            arrSkills,
            location: 'based in Grodno, Belarus.',
            a1: 'View My Works',
            a2: 'Contact Me',
            photo: myPhoto
        },
        aboutMeComponent: {
            span: 'About Me',
            title: 'Know Me More',
            h2: `Hi, I'm `,
            name: 'Vladimir Traihel',
            aboutMe: 'I\'m a developer with experience building SPAs using React/Redux/TypeScript/HTML&CSS/SCSS. I like to develop applications that bring real value to the end user. Now I am improving my skills in this area and expanding my knowledge with new technologies (Node.js). I spend my free time reading educational literature, as well as improving my English.',
            contacts: [
                {title: 'Name:', info: 'Vladimir Traihel'},
                {title: 'Email:', info: 'Vovatraigel@gmail.com'},
                {title: 'Date of birth:', info: '17 September, 1993'},
                {title: 'From:', info: 'Grodno, Belarus.'},
            ]
        },
        skillsComponent: {
            span: 'What I Do?',
            title: 'How I can help your next project',
            skills: [
                {
                    svgName: 'React',
                    description: 'An open source JavaScript library for developing user interfaces. Can be used to develop single page and mobile applications.'
                },
                {
                    svgName: 'Redux',
                    description: 'An open source JavaScript library for managing application state.'
                },
                {
                    svgName: 'JavaScript',
                    description: 'Multi-paradigm programming language. Supports object-oriented, imperative and functional styles. Is one of the core technologies of the World Wide Web'
                },
                {
                    svgName: 'TypeScript',
                    description: 'A programming language introduced by Microsoft in 2012 and positioned as a web application development tool that extends the capabilities of JavaScript.'
                },
                {
                    svgName: 'Formik',
                    description: 'A library that helps you work with forms. It simplifies getting data from a form, validating data, displaying error messages, and more.'
                },
                {
                    svgName: 'Axios',
                    description: 'An open source library that allows you to make HTTP requests.'
                },
                {
                    svgName: 'Material-ui',
                    description: 'A framework that produces ready-made Google solutions for fast and fairly simple web development.'
                },
                {
                    svgName: 'Bootstrap',
                    description: 'A set of tools for creating sites and web applications. Includes HTML and CSS design templates for typography, web forms, buttons, labels, navigation blocks, and more.'
                },
                {
                    svgName: 'HTML',
                    description: 'The standard markup language for documents designed to be displayed in a web browser.'
                },
                {
                    svgName: 'CSS',
                    description: 'A Style sheet language used for describing the presentation of a document written in a markup language such as HTML or XML'
                },
                {
                    svgName: 'SASS',
                    description: 'A CSS-based metalanguage designed to increase the abstraction level of CSS code and simplify cascading style sheet files.'
                },
                {
                    svgName: 'LESS',
                    description: 'Dynamic style language. It was influenced by the Sass style language, and in turn influenced its new "SCSS" syntax.'
                },
                {
                    svgName: 'Storybook',
                    description: 'A UI library that can be used to document components. It also allows you to organize and assemble components.'
                },
                {
                    svgName: 'Postman',
                    description: 'An API platform that allows developers to design, build, test, and iterate their APIs.'
                },
                {
                    svgName: 'Snapshot Testing',
                    description: 'Tests that take a screenshot of the screen (reference screenshot) and compare it with the actual screenshot that is taken during the test run.'
                },
                {
                    svgName: 'Unit Testing',
                    description: 'The process of programming, checking the correctness of individual modules of the source code of programs.'
                },
                {
                    svgName: 'Git',
                    description: 'A free and open source distributed version control system designed to process any project quickly and efficiently.'
                },
            ]
        },
        projectsComponent: {
            span: 'Portfolio',
            title: 'Some of my most recent projects',
            projects: [
                {
                    title: 'Social Network',
                    img: SocialNetworkImg,
                    description: 'An online platform that is used for communication, dating, creating social relationships between people...',
                    href: 'https://github.com/Traihel/Social-network-TS'
                },
                {
                    title: 'Todo list',
                    img: tidoListImg,
                    description: 'A list of things you need to do or want to do. When a task is completed, it is usually crossed off the list...',
                    href: 'https://github.com/Traihel/ToDoList-TS'
                },
                {
                    title: 'Learning Cards',
                    img: LearningCardsImg,
                    description: 'Is a card bearing information, which is intended to be used as an aid in memorization. Flashcards are often used to memorize vocabulary, historical dates...',
                    href: 'https://github.com/Traihel/cards-nya-front-2-0'
                },

            ]
        },
        distantWorkComponent: {
            title: 'Interested in working with me?',
            a: 'Hire Me!',
            bgImg
        },
        contactsComponent: {
            title: 'Let\'s get in touch',
            p: 'Please share as much info, as possible so we can get the most out of our first catch-up. I will be glad to work with you if my skills and experience suit you. Willing to talk over the phone or in person.',
            h3: 'Call:',
            call,
            contactsLinks,
            name: 'What is Your Name:',
            email: 'Your Email Address:',
            formMessage: 'How can I Help you?:',
            button: 'Send'

        },
        footerComponent: {
            copyright: 'Copyright © 2022. All Rights Reserved.',
            designed: 'Developed by Traihel Vladimir'
        }
    },
    ru: {
        headerComponent: {
            menuName: 'Меню',
            nav: [
                {href: '#home', navName: 'Главная'},
                {href: '#about', navName: 'Обо мне'},
                {href: '#skills', navName: 'Скилы'},
                {href: '#projects', navName: 'Проекты'},
                {href: '#contacts', navName: 'Контакты'},
            ],
            headerLinks
        },
        mainComponent: {
            h1: `Привет`,
            arrSkills,
            location: 'Гродно, Беларусь.',
            a1: 'Мои работы',
            a2: 'Связаться со мной',
            photo: myPhoto
        },
        aboutMeComponent: {
            span: 'Обо мне',
            title: 'Узнать обо мне больше',
            h2: 'Привет, меня зовут ',
            name: 'Владимир Трайгель',
            aboutMe: 'Я – разработчик, имеющий опыт создания SPA с использованием React/Redux/TypeScript/HTML&CSS/SCSS. Мне нравится разрабатывать приложения, которые приносят реальную пользу конечному пользователю. Сейчас совершенствую свои навыки в этом направление и расширяю знания новыми технологиями (Node.js). Свободное время провожу за чтением обучающей литературы, а также улучшением английского языка.',
            contacts: [
                {title: 'Имя:', info: 'Владимир Трайгель'},
                {title: 'Email:', info: 'Vovatraigel@gmail.com'},
                {title: 'Дата рождения:', info: '17.09.1993'},
                {title: 'Из:', info: 'Гродно, Беларусь.'},
            ]
        },
        skillsComponent: {
            span: 'Что я умею?',
            title: 'Мои навыки',
            skills: [
                {
                    svgName: 'React',
                    description: 'JavaScript-библиотека с открытым исходным кодом для разработки пользовательских интерфейсов. Может использоваться для разработки одностраничных и мобильных приложений.'
                },
                {
                    svgName: 'Redux',
                    description: 'Библиотека для JavaScript с открытым исходным кодом, предназначенная для управления состоянием приложения.'
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
                    svgName: 'Formik',
                    description: 'Библиотека, помогающая работать с формами. Она упрощает получение данных из формы, валидацию данных, вывод сообщений об ошибках и многое другое.'
                },
                {
                    svgName: 'Axios',
                    description: 'Библиотека с открытым исходным кодом, позволяющая делать HTTP-запросы.'
                },
                {
                    svgName: 'Material-ui',
                    description: 'Фрэймворк, предоставляющий готовые google решения для быстрой и довольно простой web разработки.'
                },
                {
                    svgName: 'Bootstrap',
                    description: 'Набор инструментов для создания сайтов и веб-приложений. Включает в себя HTML- и CSS-шаблоны оформления для типографики, веб-форм, кнопок, меток, блоков навигации и т.д.'
                },
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
                    svgName: 'Storybook',
                    description: 'Библиотека UI, которую можно использовать для документирования компонентов. Также она позволяет упорядочивать и собирать компоненты.'
                },
                {
                    svgName: 'Postman',
                    description: 'Платформа API, позволяющая разработчикам проектировать, создавать, тестировать и повторять свои API.'
                },
                {
                    svgName: 'Snapshot Testing',
                    description: 'Тесты, которые делают скриншот экрана (эталонный скриншот) и сравнивают с актуальным скриншотом, который делается во время прогона тестов.'
                },
                {
                    svgName: 'Unit Testing',
                    description: 'Процесс в программировании, позволяющий проверить на корректность отдельные модули исходного кода программы.'
                },
                {
                    svgName: 'Git',
                    description: 'Бесплатная распределенная система управления версиями с открытым исходным кодом, предназначенная для быстрой и эффективной обработки любых проектов.'
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
                    description: 'Онлайн-платформа, которая используется для общения, знакомств, создания социальных отношений между людьми...',
                    href: 'https://github.com/Traihel/Social-network-TS'
                },
                {
                    title: 'Todo list',
                    img: tidoListImg,
                    description: 'Список дел, которые вам нужно выполнить или того, что вы хотите сделать. При выполнении задачи, её обычно вычеркивают из списка...',
                    href: 'https://github.com/Traihel/ToDoList-TS'
                },
                {
                    title: 'Learning Cards',
                    img: LearningCardsImg,
                    description: 'Представляет собой карточку с информацией, которая предназначена для помощи в запоминании. Карточки часто используются для запоминания лексики, исторических дат...',
                    href: 'https://github.com/Traihel/cards-nya-front-2-0'
                },
            ]
        },
        distantWorkComponent: {
            title: 'Заинтересованы работать со мной?',
            a: 'Связаться со мной',
            bgImg
        },
        contactsComponent: {
            title: 'Контакты',
            p: 'Пожалуйста, поделитесь как можно большей информацией, чтобы мы могли получить максимальную отдачу от нашей первой встречи. Буду рад работать с вами, если мои навыки и опыт подойдут вам. Готов пообщаться по телефону или лично.',
            h3: 'Тел:',
            call,
            contactsLinks,
            name: 'Ваше имя:',
            email: 'Адрес электронной почты:',
            formMessage: 'Чем я могу помочь?:',
            button: 'Отправить'
        },
        footerComponent: {
            copyright: 'Copyright © 2022. Все права защищены.',
            designed: 'Разработал Трайгель Владимир'
        }
    },
}

//type
type StateType = {
    [key: string]: {
        headerComponent: HeaderComponentType
        mainComponent: MainComponentType
        aboutMeComponent: AboutMeComponent
        skillsComponent: SkillsComponentsType
        projectsComponent: ProjectsComponentsType
        distantWorkComponent: DistantWorkComponentType
        contactsComponent: ContactsComponentType
        footerComponent: FooterComponentType
    }
}

export type HeaderComponentType = {
    menuName: string
    nav: NavType[]
    headerLinks: LinksType[]
}

export type NavType = {
    href: HrefNavType
    navName: string
}

type HrefNavType = '#home' | '#skills' | '#projects' | '#contacts' | '#about'

export type LinksType = {
    href: string
    svgName: LinksNameType
}

export type MainComponentType = {
    h1: string
    arrSkills: string[]
    location: string
    a1: string
    a2: string
    photo: string
}

export type AboutMeComponent = {
    span: string
    title: string
    h2: string
    name: string
    aboutMe: string
    contacts: ContactsType[]
}

type ContactsType = {
    title: string
    info: string
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
    href: string
}

export type DistantWorkComponentType = {
    title: string
    a: string
    bgImg: string
}

export type ContactsComponentType = {
    title: string
    p: string
    h3: string
    call: string
    contactsLinks: LinksType[]
    name: string
    email: string
    formMessage: string
    button: string
}

export type FooterComponentType = {
    copyright: string
    designed: string
}