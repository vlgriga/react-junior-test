import React from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import { userAuth } from "../actions";
import {  Redirect } from 'react-router-dom';


class Login extends React.Component {

    constructor(props) {
        super(props);
        this.inputLogin = React.createRef();
        this.inputPassword = React.createRef();
    };


    componentDidMount() {
        this.inputLogin.current.focus();
    };

    loginSubmit = (event) => {
        event.preventDefault();
        const login = this.inputLogin.current.value;
        const pass = this.inputPassword.current.value;
        this.props.dispatch(userAuth(login, pass))
    };

    render() {
        const { auth: {isAuth, error}, location:{ state } } = this.props;

        if(isAuth)
            return <Redirect to={state || '/'}/>;

        return(
            <div className='wrapper-container'>
                <h3>Login Component</h3>
                <form onSubmit={this.loginSubmit}>
                    <input type="text" ref={this.inputLogin}/><br/>
                    <input type="password" ref={this.inputPassword}/><br/>
                    <Button type="submit">Login</Button>
                    {error && <p>{error}</p>}
                </form>
            </div>
        )
    }
}

const mapStateToProps = ({ auth }) => ({
    auth
});

export default connect(mapStateToProps)(Login);
