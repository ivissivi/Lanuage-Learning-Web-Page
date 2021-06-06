import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Homepage from './pages';
import Login from './pages/login';
import Registration from './pages/registration';
import Contacts from './pages/contacts';

import ENG from './components/EnglishHomepage/index.js';
import LV from './components/LatvianHomepage/index.js';
import RU from './components/RussianHomepage/index.js';

import ENGquiz from './components/EnglishHomepage/EnglishQuiz/index.js';
import ENGquizEasy from './components/EnglishHomepage/EnglishQuiz/EnglishQuizEasy/index.js';
import ENGquizMedium from './components/EnglishHomepage/EnglishQuiz/EnglishQuizMedium/index.js';
import ENGquizHard from './components/EnglishHomepage/EnglishQuiz/EnglishQuizHard/index.js';

import LVquiz from './components/LatvianHomepage/LatvianQuiz/index.js';
import LVquizEasy from './components/LatvianHomepage/LatvianQuiz/LatvianQuizEasy/index.js';
import LVquizMedium from './components/LatvianHomepage/LatvianQuiz/LatvianQuizMedium/index.js';
import LVquizHard from './components/LatvianHomepage/LatvianQuiz/LatvianQuizHard/index.js';

import RUquiz from './components/RussianHomepage/RussianQuiz/index.js';
import RUquizEasy from './components/RussianHomepage/RussianQuiz/RussianQuizEasy/index.js';
import RUquizMedium from './components/RussianHomepage/RussianQuiz/RussianQuizMedium/index.js';
import RUquizHard from './components/RussianHomepage/RussianQuiz/RussianQuizHard/index.js';


function App() {

  return (
    <Router>
      <Switch>
        <Route path="/" component={Homepage} exact/>
        <Route path="/contacts" component={Contacts} exact/>
        <Route path="/registration" component={Registration} exact/>
        <Route path="/login" component={Login} exact/>

        <Route path="/ENG" component={ENG} exact/>
        <Route path="/ENGquiz" component={ENGquiz} exact/>
        <Route path="/ENGquizEasy" component={ENGquizEasy} exact/>
        <Route path="/ENGquizMedium" component={ENGquizMedium} exact/>
        <Route path="/ENGquizHard" component={ENGquizHard} exact/>

        <Route path="/LV" component={LV} exact/>
        <Route path="/LVquiz" component={LVquiz} exact/>
        <Route path="/LVquizEasy" component={LVquizEasy} exact/>
        <Route path="/LVquizMedium" component={LVquizMedium} exact/>
        <Route path="/LVquizHard" component={LVquizHard} exact/>

        <Route path="/RU" component={RU} exact/>
        <Route path="/RUquiz" component={RUquiz} exact/>
        <Route path="/RUquizEasy" component={RUquizEasy} exact/>
        <Route path="/RUquizMedium" component={RUquizMedium} exact/>
        <Route path="/RUquizHard" component={RUquizHard} exact/>
      </Switch>
    </Router>
  );
};

export default App;
