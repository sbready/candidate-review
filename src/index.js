import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './ducks/store';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Router from './router';


ReactDOM.render(
    <Provider store={ store }>
        <HashRouter>
         <MuiThemeProvider>
                <Router />
          </MuiThemeProvider> 
        </HashRouter>
    </Provider>,
     document.getElementById('root'));

