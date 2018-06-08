import React from "react";
import { connect } from 'react-redux';
import { isAuth } from '../actions';

import Routes from '../routes';


class App extends React.Component {
    render() {
        console.log("Redux", this.props)
        return(
            <Routes/>
        )
    }
}

const mapStateToProps = ({ auth }) => ({
    auth
});


export default connect(mapStateToProps)(App);
