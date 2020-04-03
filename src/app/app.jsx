import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import './app.scss';
import Main from './pages/main';
import Signup from './pages/signup';
import Login from './pages/login';
import Chat from './components/chat';

const App = () => {
    return (
        <div className="app">
            <Router>
                <Switch>
                    <Route exact path="/" component={Main} />
                    <Route path="/login" component={Login} />
                    <Route path="/signup" component={Signup} />
                </Switch>
            </Router>
            <Chat />
        </div>
    )
}

export default App
