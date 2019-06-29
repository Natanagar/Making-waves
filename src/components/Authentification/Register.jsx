import React from 'react';
import { Field, reduxForm } from 'redux-form';

const RegisterForm = (props) => {
  const { handleSubmit } = props;
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="firstName">Full Name</label>
        <Field name="firstName" component="input" type="text" />
      </div>

      <div>
        <label htmlFor="firstName">Username</label>
        <Field name="firstName" component="input" type="text" />
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <Field name="email" component="input" type="email" />
      </div>
      <div>
        <label htmlFor="email">Email Confirmation</label>
        <Field name="email" component="input" type="email" />
      </div>
      <div>
        <label htmlFor="email">Password</label>
        <Field name="email" component="input" type="email" />
        <section>
          <span>Passwords must be at least 8 characters long. The password must contain at least three character categories among the following: Uppercase characters (A-Z) Lowercase characters (a-z)</span>
        </section>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

const RegisterFormHOC = reduxForm({
  // a unique name for the form
  form: 'register',
})(RegisterForm);

export default RegisterFormHOC;
