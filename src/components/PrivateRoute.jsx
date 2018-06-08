import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

const PrivateRoute = ( {component: Component, isAuth, ...rest} ) => (
    <Route {...rest} render={(props) => (
        isAuth
            ? <Component {...props} />
            : <Redirect to={{
                pathname: '/login',
                state: props.location
                }}/>
    )}/>
);

const mapStateToProps = ({ auth }) => ({
    isAuth : auth.isAuth
});

export default connect(mapStateToProps)(PrivateRoute);
