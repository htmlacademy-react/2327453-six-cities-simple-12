import {useAppSelector} from '../../hooks';
import {AppRoute} from '../../const';
import React, {MouseEvent} from 'react';
import {Link} from 'react-router-dom';
import {logout} from '../../store/api-actions';
import {store} from '../../store';

function Header(): JSX.Element {
  const isAuthorized = useAppSelector((state) => state.authorizationStatus);
  const user = useAppSelector((state) => state.user);

  return (
    <header className='header'>
      <div className='container'>
        <div className='header__wrapper'>
          <div className='header__left'>
            <a className='header__logo-link header__logo-link--active' href="/">
              <img className='header__logo' src='img/logo.svg' alt='6 cities logo' width='81' height='41' />
            </a>
          </div>
          <nav className='header__nav'>
            <ul className='header__nav-list'>
              {
                isAuthorized && user ?
                  <>
                    <li className='header__nav-item user'>
                      <div className='header__nav-profile'>
                        <div className='header__avatar-wrapper user__avatar-wrapper' style={{backgroundImage: `url(${user.avatarUrl})`}}></div>
                        <span className='header__user-name user__name'>{user.email}</span>
                      </div>
                    </li>
                    <li className='header__nav-item'>
                      <a className='header__nav-link' href='#' onClick={(event: MouseEvent<HTMLElement>) => {
                        event.preventDefault();
                        store.dispatch(logout());
                      }}
                      >
                        <span className='header__signout'>Sign out</span>
                      </a>
                    </li>
                  </>
                  :
                  <li className='header__nav-item'>
                    <Link className='header__nav-link' to={AppRoute.Login}>
                      <div className='header__avatar-wrapper user__avatar-wrapper'></div>
                      <span className='header__signout'>Sign in</span>
                    </Link>
                  </li>
              }
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
