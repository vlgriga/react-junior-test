import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


import Main from './components/main.jsx';
import Login from './components/login.jsx';
import News from './components/news.jsx';
import Profile from './components/profile.jsx';
import NotFound from './components/notFound.jsx';
import Header from './components/header.jsx';
import PrivateRoute from './components/PrivateRoute.jsx';


class Routes extends React.Component {
    render() {
        return(
            <Router>
                <div>
                    <Header/>
                    <Switch>
                        {routes.map( route => {
                            return route.isPrivate
                                ?   <PrivateRoute {...route}/>
                                :   <Route
                                        key={route.path}
                                        path={route.path}
                                        component={route.component}
                                        exact={route.isExact}
                                    />
                        })}
                    </Switch>
                </div>
            </Router>
        )
    }
}

export default Routes;

const routes =   [
    {
        isExact: true,
        path: '/',
        component: Main
    },
    {
        isExact: false,
        path: '/login',
        component: Login
    },
    {
        isExact: false,
        path: '/news',
        component: News
    },
    {
        isExact: false,
        path: '/profile',
        component: Profile,
        isPrivate: true
    },
    {
        component: NotFound,
    }
];


