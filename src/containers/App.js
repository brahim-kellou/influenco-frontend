import React, { useEffect } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';

import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';

import Header from './HeaderContainer';
import Home from './HomeContainer';
import Login from './LoginContainer';
import Register from './RegisterContainer';
import InfluencerList from './InfluencerListContainer';
import Influencer from './InfluencerContainer';
import Trends from './TrendsContainer';
import Analytics from './AnalyticsContainer';
import PrivateRoute from './PrivateRoute';

import AskButton from '../components/AskButton';

import store from '../store';
import { loadUser } from '../actions/auth';



const theme = createMuiTheme({
  palette: {
    primary: {
      // main: '#1424ff',
      main: '#0d0de6',
    },
    secondary: {
      // main: '#ff141c',
      main: '#ff4331',
    },
  },

});

const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  });

  return (
    <div class="app">
      <Provider store={store}>
        <Router>
          <ThemeProvider theme={theme}>
            <Header />
            <div className="h-100">
              <Switch>
                <PrivateRoute exact path="/influencers" component={InfluencerList} />
                <Route exact path="/" component={Home} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/register" component={Register} />
                <Route exact path="/influencers/:username" component={Influencer} />
                <Route exact path="/trends" component={Trends} />
                <Route exact path="/twitter-analytics" render={() => <Analytics type="twitter" />} />
                <Route exact path="/instagram-analytics" render={() => <Analytics type="instagram" />} />
              </Switch>
            </div>
            <AskButton />
          </ThemeProvider>
        </Router>
      </Provider>
    </div>
  )
}

export default App;


