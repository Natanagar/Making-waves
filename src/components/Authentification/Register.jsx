import React from 'react';
import { Field, reduxForm } from 'redux-form';

const RegisterForm = (props) => {
  const { handleSubmit } = props;
  console.log(handleSubmit);
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="firstName">Full Name</label>
        <Field
          name="firstName"
          component="input"
          type="text"
          placeholder="First Name"
        />
      </div>

      <div>
        <label htmlFor="Username">Username</label>
        <Field
          name="Username"
          component="input"
          type="text"
          placeholder="Username"
        />
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <Field
          name="email"
          component="input"
          type="email"
          placeholder="email"
        />
      </div>
      <div>
        <label htmlFor="email">Email Confirmation</label>
        <Field
          name="email"
          component="input"
          type="email"
          placeholder="confirm email"
        />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <Field
          name="password"
          component="input"
          type="password"
          placeholder="Password"
        />
        <section>
          <span>Passwords must be at least 8 characters long. The password must contain at least three character categories among the following: Uppercase characters (A-Z) Lowercase characters (a-z)</span>
        </section>
      </div>
      <button
        type="submit"
        onSubmit={handleSubmit}
      >
        Submit
      </button>
    </form>
  );
};

const RegisterFormHOC = reduxForm({
  // a unique name for the form
  form: 'register',
})(RegisterForm);


export default RegisterFormHOC;
