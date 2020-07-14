import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter as Router, Route } from "react-router-dom"
import { Provider } from "react-redux"
import { createStore, applyMiddleware } from "redux"
import thunk from "redux-thunk"
import { composeWithDevTools } from "redux-devtools-extension"

import App from "./App"
import rootReducer from "./reducers/index"
import * as serviceWorker from "./serviceWorker"

import "bootstrap/dist/css/bootstrap.css"
import "./index.css";

ReactDOM.render(

    <Provider store={ createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk))) }>
        <Router>
            <Route exact path="/" component={ () => <App /> } />
        </Router>
    </Provider>,

    document.getElementById("root")
)

serviceWorker.unregister()
