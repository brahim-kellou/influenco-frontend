import React, { Component } from 'react';

import Header from '../components/Header';

import { connect } from 'react-redux';
import { logout } from '../actions/auth';

const HeaderContainer = (props) => {
  return (
    <Header
      auth={props.auth}
      logout={props.logout}
    />
  );
}

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps, { logout })(HeaderContainer);
