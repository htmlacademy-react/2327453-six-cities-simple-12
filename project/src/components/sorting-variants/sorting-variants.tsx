import React, {useState} from 'react';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {SortingDictionary} from '../../types/sorting';
import {sortOffers} from '../../store/action';


function SortingVariants(): JSX.Element {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const dispatch = useAppDispatch();

  const currentSorting = useAppSelector((state) => state.sorting);

  function setClassName(sorting:string): string {
    let classname = 'places__option';

    if (sorting === currentSorting){
      classname += ' places__option--active';
    }

    return classname;
  }

  function sortOffersAndHideSorting (sorting:string){
    dispatch(sortOffers(sorting));
    setIsVisible(false);
  }

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by </span>
      <span className="places__sorting-type" tabIndex={0} onClick={() => setIsVisible(!isVisible)}>
        {SortingDictionary[currentSorting]}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul className={`places__options places__options--custom ${isVisible ? 'places__options--opened' : ''}`}>
        {Object.keys(SortingDictionary).map((key) => (
          <li className={setClassName(key)} tabIndex={0} onClick={() => sortOffersAndHideSorting(key)} key={key}>{SortingDictionary[key]}</li>
        ))}
      </ul>
    </form>
  );
}

export default SortingVariants;
