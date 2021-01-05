import React from 'react';
import Question from './Question'
import './App.css';
import CheckAnswer from './CheckAnswer'; 
import { Provider } from './Context';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './style.css';
import Instruction from './Instruction';

function App() {
  return (
    <Provider>
      <Router>
        <div className="main">
          <Switch>
            <Route exact path='/' component={Instruction} />
            <Route exact path='/quiz' component={Question}/>
            <Route exact path='/checkAnswer' component={CheckAnswer}/>
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
