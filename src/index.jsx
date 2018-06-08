import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import App from './components/app.jsx';
import './styles/style.css';
import reducers from './reducers';


const store = createStore( reducers , {}, composeWithDevTools(applyMiddleware(reduxThunk)) );


ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root'));
module.hot.accept();
