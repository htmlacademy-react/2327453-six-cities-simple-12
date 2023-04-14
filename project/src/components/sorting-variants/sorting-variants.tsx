import React from 'react';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {Sorting} from '../../types/sorting';
import {sortOffers} from '../../store/action';


function SortingVariants(): JSX.Element {
  const dispatch = useAppDispatch();

  const currentSorting = useAppSelector((state) => state.sorting);

  function setClassName(sorting:string): string {
    let classname = 'places__option';

    if (sorting === currentSorting){
      classname += ' places__option--active';
    }

    return classname;
  }

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span className="places__sorting-type" tabIndex={0}>
                Popular
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul className="places__options places__options--custom places__options--opened">
        <li className={setClassName(Sorting.popular)} tabIndex={0} onClick={() => dispatch(sortOffers(Sorting.popular))}>Popular</li>
        <li className={setClassName(Sorting.priceLowToHigh)} tabIndex={0} onClick={() => dispatch(sortOffers(Sorting.priceLowToHigh))}>Price: low to high</li>
        <li className={setClassName(Sorting.priceHighToLow)} tabIndex={0} onClick={() => dispatch(sortOffers(Sorting.priceHighToLow))}>Price: high to low</li>
        <li className={setClassName(Sorting.topRatedFirst)} tabIndex={0} onClick={() => dispatch(sortOffers(Sorting.topRatedFirst))}>Top rated first</li>
      </ul>
    </form>
  );
}

export default SortingVariants;
