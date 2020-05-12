import React, { useEffect } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';

import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';

import Header from './HeaderContainer';
import Login from './LoginContainer';
import Register from './RegisterContainer';
import InfluencerList from './InfluencerListContainer';
import Influencer from './InfluencerContainer';
import PrivateRoute from './PrivateRoute';

import AskButton from './components/AskButton';

import store from '../store';
import { loadUser } from '../actions/auth';


const theme = createMuiTheme({
  palette: {
    primary: {
      // main: '#1424ff',
      main: '#6200ea',
    },
    secondary: {
      // main: '#ff141c',
      main: '#ea6d00',
    },
  },

});

const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  });

  return (
    <Provider store={store}>
      <Router>
        <ThemeProvider theme={theme}>
          <Header />
          <Switch>
            <PrivateRoute exact path="/influencers" component={InfluencerList} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route excat path="/influencers/:username" component={Influencer} />
          </Switch>
          <AskButton />
        </ThemeProvider>
      </Router>
    </Provider>
  )
}

export default App;


