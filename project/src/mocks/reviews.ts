import {Reviews} from '../types/review';

export const reviews: Reviews = [
  {
    id: 1,
    user: {
      id: 15,
      isPro: false,
      name: 'Kendall',
      avatarUrl: 'https://12.react.pages.academy/static/avatar/6.jpg'
    },
    rating: 2,
    comment: 'Bathed in the nature. Completely unplugged. Unforgettable.',
    date: new Date()
  }
];
