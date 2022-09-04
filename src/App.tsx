import React, {useState} from 'react';
import './App.scss';
import {Header} from "./components/header/Header";
import {Main} from "./components/main/Main";
import {Skills} from "./components/skills/Skills";
import {MyProjects} from "./components/myProjects/MyProjects";
import {DistantWork} from "./components/distantWork/DistantWork";
import {Contacts} from "./components/contacts/Contacts";
import {Footer} from "./components/footer/Footer";
import {state} from "./bll/state"
import {AboutMe} from "./components/aboutMe/AboutMe";

function App() {

    const [language, setLanguage] = useState<LanguageType>('en')
    console.log('app')
    return (
        <div className="App">
            <Header
                headerComponent={state[language].headerComponent}
                callback={setLanguage}
                language={language}
            />
            <Main mainComponent={state[language].mainComponent}/>
            <AboutMe aboutMeComponent={state[language].aboutMeComponent}/>
            <Skills skillsComponent={state[language].skillsComponent}/>
            <MyProjects projectsComponent={state[language].projectsComponent}/>
            <DistantWork/>
            <Contacts/>
            <Footer/>
        </div>
    );
}

export default App;

//type
export type LanguageType = 'en' | 'ru'