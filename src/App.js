import React from 'react';
import {Link, Route, Switch} from 'react-router-dom';
import QuestionsMainContainer from './containers/QuestionsMainContainer'
import GameContainer from "./containers/GameContainer";

function App() {
  return (
      <div className="container">
          <div className="row m-3">
            <Link className="btn btn-info m-auto" to="/0">Kvíz</Link>
            <Link className="btn btn-warning m-auto" to="/questions">Kérdések</Link>
          </div>

          <Switch className="row">
              <Route component={QuestionsMainContainer} path="/questions"/>
              <Route component={GameContainer} path="/"/>
          </Switch>
      </div>
  );
}

export default App;
