import React, {
  PureComponent,
} from 'react';

export const RegisterForm = () => (
    <section>
      <form>
        <label htmlFor="email" />
        <input
          id="email"
          type="email"
          required
          defaultValue="google@gmail.com"
        />
         <label htmlFor="email" />
        <input
          id="email"
          type="email"
          required
          defaultValue="google@gmail.com"
        />
        <label htmlFor="password" />
        <input
          id="password"
          type="password"
          required
          defaultValue="Password must contain special symbols"
        />


      </form>

    <Button className="confirm">
        <button>Register</button>
    </Button>
    </section>
);
