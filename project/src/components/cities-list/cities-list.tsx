import React from 'react';
import {useAppSelector} from '../../hooks';
import {Link, useParams} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import {changeCity, getOffers} from '../../store/action';

type CitiesListProps = {
  citiesNames: string[];
}

function CitiesList(props: CitiesListProps): JSX.Element {
  const {citiesNames} = props;
  const dispatch = useDispatch();

  const tabsClassName = 'locations__item-link tabs__item ';
  const activeTabClassName = 'tabs__item--active';

  let currentCity = useAppSelector((state) => state.cityName);

  const params = useParams();
  const cityParam = params.city;

  if (cityParam !== undefined) {
    currentCity = cityParam;
    dispatch(changeCity(cityParam));
    dispatch(getOffers());
  }

  return (
    <section className="locations container">
      <ul className="locations__list tabs__list">
        {
          citiesNames.map((city) =>
          {
            let className = tabsClassName;

            if(currentCity === city)
            {className += activeTabClassName;}

            return (
              <li className="locations__item" key={city}>
                <Link className={className} to={`/${city}`}>
                  <span>{city}</span>
                </Link>
              </li>
            );
          })
        }
      </ul>
    </section>
  );
}

export default CitiesList;
