import Header from '../../components/header/header';
import React, {ChangeEvent, FormEvent, useState} from 'react';
import {Credentials} from '../../types/credentials';
import {store} from '../../store';
import {authenticate} from '../../store/api-actions';
import {useAppSelector} from '../../hooks';
import {Navigate} from 'react-router-dom';
import {AppRoute} from '../../const';

function Login(): JSX.Element {
  const user = useAppSelector((state) => state.user);

  const [credentials, setCredentials] = useState<Credentials>({});

  const onInputChangeHandler = ({target} : ChangeEvent<HTMLInputElement>) => {
    const {name, value } = target;
    setCredentials({...credentials, [name]:value});
  };

  if (user)
  {
    return <Navigate to={AppRoute.Main}/>;
  }

  return (
    <>
      <Header />
      <main className="page page--gray page--login page__main page__main--login">
        <div className="page__login-container container">
          <section className="login">
            <h1 className="login__title">Sign in</h1>
            <form className="login__form form" action="#" method="post"
              onSubmit={(event: FormEvent<HTMLFormElement>) => {
                event.preventDefault();
                store.dispatch(authenticate(credentials));
              }}
            >
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">E-mail</label>
                <input className="login__input form__input" type="email" name="email" placeholder="Email" required onChange={onInputChangeHandler} />
              </div>
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">Password</label>
                <input className="login__input form__input" type="password" name="password" placeholder="Password" required onChange={onInputChangeHandler} />
              </div>
              <button className="login__submit form__submit button" type="submit">Sign in</button>
            </form>
          </section>
          <section className="locations locations--login locations--current">
            <div className="locations__item">
              <a className="locations__item-link" href="/#">
                <span>Amsterdam</span>
              </a>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}

export default Login;
