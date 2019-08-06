import React from 'react';
import { Route, Redirect, Switch } from 'react-router';
import { BrowserRouter as Router } from 'react-router-dom';
import Main from "./pages/Main/Main"
import User from "./pages/User/User"

const App = () => (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={User}/>
          <Route path="/chats" component={Main}/>
        </Switch>
      </div>
    </Router>
)
export default App;
