import {Link} from 'react-router-dom';
import {AppRoute} from '../../const';
import React from 'react';
import Header from '../../components/header/header';

function NotFound(): JSX.Element {
  return (
    <>
      <Header />
      <main className="page__main page__main--property">
        <section className="property">
          <div className="property__container container">
            <div className="property__wrapper">
              <div className="property__name-wrapper">
                <h2>404 Not Found</h2>
                <Link to={AppRoute.Main}>Go to main page</Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default NotFound;
