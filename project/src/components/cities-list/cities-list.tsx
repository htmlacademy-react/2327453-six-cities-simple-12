import React from 'react';
import {useAppSelector} from '../../hooks';

type CitiesListProps = {
  citiesNames: string[];
}

function CitiesList(props: CitiesListProps): JSX.Element {
  const {citiesNames} = props;

  const currentCity = useAppSelector((state) => state.cityName);

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
                <a className={className}>
                  <span>{city}</span>
                </a>
              </li>
            );
          })
        }
      </ul>
    </section>
  );
}

export default CitiesList;
