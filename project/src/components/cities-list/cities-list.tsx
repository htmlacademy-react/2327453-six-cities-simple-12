import React from "react";
import {useDispatch} from "react-redux";
import {useAppSelector} from "../../hooks";

type CitiesListProps = {
  citiesNames: string[];
}

function CitiesList(props: CitiesListProps): JSX.Element {
  const {citiesNames} = props;

  const dispatch = useDispatch();
  const currentCity = useAppSelector((state) => state.cityName);

  const tabsClassName = `locations__item-link tabs__item `;
  const activeTabClassName = 'tabs__item--active';

  return (
    <section className="locations container">
      <ul className="locations__list tabs__list">
        {
          citiesNames.map((city) =>
          {
            let className = tabsClassName;

            if(currentCity === city)
              className += activeTabClassName;

            return (
              <li className="locations__item" key={city}>
                <a className={className}>
                  <span>city</span>
                </a>
              </li>
            );
          })
        }
        <li className="locations__item">
          <a className="locations__item-link tabs__item" href="/#">
            <span>Paris</span>
          </a>
        </li>
        <li className="locations__item">
          <a className="locations__item-link tabs__item" href="/#">
            <span>Cologne</span>
          </a>
        </li>
        <li className="locations__item">
          <a className="locations__item-link tabs__item" href="/#">
            <span>Brussels</span>
          </a>
        </li>
        <li className="locations__item">
          <a className="locations__item-link tabs__item tabs__item--active">
            <span>Amsterdam</span>
          </a>
        </li>
        <li className="locations__item">
          <a className="locations__item-link tabs__item" href="/#">
            <span>Hamburg</span>
          </a>
        </li>
        <li className="locations__item">
          <a className="locations__item-link tabs__item" href="/#">
            <span>Dusseldorf</span>
          </a>
        </li>
      </ul>
    </section>
  );
}
