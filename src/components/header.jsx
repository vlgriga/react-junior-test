import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';

import { signOut } from '../actions';

class Header extends React.Component {

    rightButton = () => {
        const { history, dispatch, isAuth } = this.props;
        return isAuth
            ? <Button onClick={() => dispatch(signOut(history))}>SignOut</Button>
            : <Link to={'/login'} className="navbar-buttons">Login</Link>
    };

    render() {
        return(
            <div>
                <AppBar position="static" color="default">
                    <Toolbar>
                        <Link to='/' className="navbar-buttons">Main</Link><br/>
                        <Link to='/news' className="navbar-buttons">News</Link><br/>
                        <Link to='/profile' className="navbar-buttons">Profile</Link><br/>
                        {this.rightButton()}
                    </Toolbar>
                </AppBar>
            </div>
        )
    }
}

const mapStateToProps = ({ auth }) => ({
    isAuth : auth.isAuth
});

export default connect(mapStateToProps)(Header);
