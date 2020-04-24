import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import * as serviceWorker from './serviceWorker';
import {Provider} from "react-redux";
import {store} from "./store/store";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Authorization from "./components/Authorization/Authorization";


ReactDOM.render(
    <React.StrictMode>
        <Provider store = {store}>
            <Router>
                <Switch>
                    <Route path="/" component={Authorization} exact/>
                    <Route path="/App" component={App} />
                </Switch>
            </Router>

        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
