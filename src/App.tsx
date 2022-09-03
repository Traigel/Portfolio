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
            <Header headerComponent={state['ru'].headerComponent}/>
            <Main/>
            <Skills skillsComponent={state['ru'].skillsComponent}/>
            <MyProjects projectsComponent={state['ru'].projectsComponent}/>
            <DistantWork/>
            <Contacts/>
            <Footer/>
        </div>
    );
}

export default App;
