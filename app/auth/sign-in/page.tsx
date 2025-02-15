import styles from './page.module.scss';

import { useId } from 'react';

export default function SignInPage() {
  const usernameFieldId = useId();
  const passwordFieldId = useId();

  return (
    <section>
    <h2>Sign In Page</h2>
    <form>
      <div>
        <label htmlFor={usernameFieldId}>Email</label>
        <input id={usernameFieldId} type="email"/>
      </div>
      <div>
        <label htmlFor={passwordFieldId}>Password</label>
        <input id={passwordFieldId} type="password"/>
      </div>
    </form>
  </section>
  );
}
