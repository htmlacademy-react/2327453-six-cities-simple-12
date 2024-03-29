import React from 'react';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {Link} from 'react-router-dom';
import {changeCity} from '../../store/action';

type CitiesListProps = {
  citiesNames: string[];
}

function CitiesList(props: CitiesListProps): JSX.Element {
  const {citiesNames} = props;

  const dispatch = useAppDispatch();
  const currentCity = useAppSelector((state) => state.cityName);

  const tabsClassName = 'locations__item-link tabs__item ';
  const activeTabClassName = 'tabs__item--active';

  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {
            citiesNames.map((cityName) =>
            {
              let className = tabsClassName;

              if(currentCity === cityName)
              {className += activeTabClassName;}

              return (
                <li className="locations__item" key={cityName}>
                  <Link className={className} to={`/${cityName}`} onClick={() => {
                    dispatch(changeCity(cityName));
                  }}
                  >
                    <span>{cityName}</span>
                  </Link>
                </li>
              );
            })
          }
        </ul>
      </section>
    </div>
  );
}

export default CitiesList;
