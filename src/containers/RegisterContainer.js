import React from 'react';
import { Redirect } from 'react-router-dom';

import Auth from '../components/Auth';
import RegisterForm from '../components/RegisterForm';

import { connect } from 'react-redux';
import { register, login } from '../actions/auth';

const RegisterContainer = (props) => {
  function onSubmit(data) {
    console.log(data);
    props.register(data);
  };

  if (props.isAuthenticated) {
    return <Redirect to="/" />;
  };

  return (
    <Auth>
      <RegisterForm
        submit={onSubmit}
      />
    </Auth>
  );
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { register })(RegisterContainer);
