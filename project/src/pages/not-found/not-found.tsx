import {Link} from 'react-router-dom';
import {AppRoute, Cities} from '../../const';
import CitiesList from '../../components/cities-list/cities-list';
import React from 'react';

function NotFound(): JSX.Element {
  return (
    <main className="page__main page__main--property">
      <div className="tabs">
        <CitiesList citiesNames={Cities} />
      </div>
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
  );
}

export default NotFound;
