import React from 'react';
import { Field, reduxForm } from 'redux-form';

const LoginForm = (props) => {
  const { handleSubmit } = props;
  return (
    <form onSubmit={handleSubmit}>
      <Field name="inputName" component="input" type="email" />
      <Field name="inputName" component="input" type="password" />
    </form>
  );
};

const LoginFormAuth = reduxForm({
  // a unique name for the form
  form: 'contact',
})(LoginForm);
export default LoginFormAuth;
