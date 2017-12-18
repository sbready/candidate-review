import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App';
import { HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './ducks/store';
// import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Router from './router';
import * as Colors from 'material-ui/styles/colors';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { fade } from 'material-ui/utils/colorManipulator'

   const muiTheme = getMuiTheme({
  palette: {
    textColor: Colors.darkBlack,
    primary1Color: fade(Colors.blueGrey500, 0.84),
    primary2Color: Colors.blueGrey200,
    accent1Color: fade(Colors.red400, 0.64),
    pickerHeaderColor: fade(Colors.pinkA400, 0.05),
  },
  appBar: {
    height: 60,
  },
});

ReactDOM.render(
    <Provider store={ store }>
        <HashRouter>
         <MuiThemeProvider muiTheme={muiTheme}>
                <Router/>
          </MuiThemeProvider> 
        </HashRouter>
    </Provider>,
     document.getElementById('root'));

