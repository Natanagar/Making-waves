import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from '@reach/router';

const LoginForm = (props) => {
  const { handleSubmit } = props;
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="email">Email</label>
        <Field name="inputName" component="input" type="email" />

      </div>
      <div>
        <label htmlFor="password">
          <Field name="inputName" component="input" type="password" />
        </label>
        <section>
          <span>Passwords must be at least 8 characters long. The password must contain at least three character categories among the following: Uppercase characters (A-Z) Lowercase characters (a-z)</span>
        </section>
      </div>
      <button onSubmit={handleSubmit}>Confirm</button>
      <Link to="register"><section>Register</section></Link>

    </form>
  );
};

const LoginFormAuth = reduxForm({
  // a unique name for the form
  form: 'login',
})(LoginForm);
export default LoginFormAuth;
