export const Sorting = {
  popular: 'popular',
  priceLowToHigh: 'priceLowToHigh',
  priceHighToLow: 'priceHighToLow',
  topRatedFirst: 'topRatedFirst'
} as const;

export const SortingDictionary = {
  [Sorting.popular]: 'Popular',
  [Sorting.priceLowToHigh]: 'Price: low to high',
  [Sorting.priceHighToLow]: 'Price: high to low',
  [Sorting.topRatedFirst]: 'Top rated first'
};
