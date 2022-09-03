import React from 'react';
import './App.scss';
import {Header} from "./components/header/Header";
import {Main} from "./components/main/Main";
import {Skills} from "./components/skills/Skills";
import {MyProjects} from "./components/myProjects/MyProjects";
import {DistantWork} from "./components/distantWork/DistantWork";
import {Contacts} from "./components/contacts/Contacts";
import {Footer} from "./components/footer/Footer";
import {state} from "./bll/state"

function App() {
    return (
        <div className="App">
            <Header/>
            <Main/>
            <Skills skillsComponents={state['ru'].skillsComponents}/>
            <MyProjects projectsComponents={state['ru'].projectsComponents}/>
            <DistantWork/>
            <Contacts/>
            <Footer/>
        </div>
    );
}

export default App;
