import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import RegisterComponent from './mproject/RegisterComponent';
import LoginComponent from './mprojetc/LoginComponent';
import ProfileComponent from './mproject/ProfileComponent';
import TaskComponent from './mproject/TaskComponent';
import { UserProvider } from './context/Usercontext';

function App() {
  return (
    <UserProvider>
      <Router>
        <Switch>
          <Route path="/register" component={RegisterComponent} />
          <Route path="/login" component={LoginComponent} />
          <Route path="/profile" component={ProfileComponent} />
          <Route path="/tasks" component={TaskComponent} />
        </Switch>
      </Router>
    </UserProvider>
  );
}
export default App;