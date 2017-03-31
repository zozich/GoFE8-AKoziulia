import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import App from './containers/App'
import Admin from './components/Admin'
import Genre from './components/Genre'
import Home from './components/Home'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'

render(
    <Router history={browserHistory}>
        <Route path='/' component={App}>
            <IndexRoute component={Home} />
            <Route path='admin' component={Admin} />
            <Route path='genre' component={Genre} />
        </Route>
    </Router>,
    document.getElementById('root')
)
