import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import NotFound from "./not-found";
import Home from "./home";
import Login from "./components/login/login";
import Historial from "./components/datos-academicos/historial-academico";
import Horario from "./components/datos-academicos/horario-seccion";
import { Layout } from './containers';
// Import Simple Line Icons Set
import 'simple-line-icons/css/simple-line-icons.css';
import '../styles/styles.css';

class App extends Component {
    render = () => (
        <Router>
            <div>
                <Switch>
                    <Route exact path="/Login" name="Login Page" component={Login} />
                    <Route path="/" component={Layout} />
                    <Route component={NotFound}/>
                </Switch>
            </div>
        </Router>
    )
}

export default App;