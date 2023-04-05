import React from 'react';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {Link, useParams} from 'react-router-dom';
import {changeCity, getOffers} from '../../store/action';

type CitiesListProps = {
  citiesNames: string[];
}

function CitiesList(props: CitiesListProps): JSX.Element {
  const {citiesNames} = props;

  const dispatch = useAppDispatch();
  const currentCity = useAppSelector((state) => state.cityName);

  const {city} = useParams();

  if (city !== undefined)
  {
    dispatch(changeCity(city));
  }

  const tabsClassName = 'locations__item-link tabs__item ';
  const activeTabClassName = 'tabs__item--active';

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
                <Link className={className} to={`/${city}`} onClick={() => {
                  dispatch(changeCity(city));
                  dispatch(getOffers());
                }}
                >
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
