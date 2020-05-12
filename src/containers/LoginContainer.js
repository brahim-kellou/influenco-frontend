import React from 'react';
import { Redirect } from 'react-router-dom';

import Auth from '../components/Auth';
import LoginForm from '../components/LoginForm';

import { connect } from 'react-redux';
import { login } from '../actions/auth';

const LoginContainer = (props) => {
  function onSubmit(data) {
    console.log(data);
    props.login(data)
  };

  if (props.isAuthenticated) {
    return <Redirect to="/" />;
  };

  return (
    <Auth>
      <LoginForm
        submit={onSubmit}
      />
    </Auth>
  );
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { login })(LoginContainer);
