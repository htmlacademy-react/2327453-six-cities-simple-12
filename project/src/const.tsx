export enum AppRoute {
  Main = '/',
  Login = '/login',
  Property = '/:city/offers/:id',
  City = '/:city',
  NotFound = '*',
}

export const Cities = ['Paris', 'Cologne', 'Brussels', 'Amsterdam', 'Hamburg', 'Dusseldorf'];

export enum APIRoute {
  Offers = '/hotels',
  Reviews = '/comments',
  Login = '/login',
  Logout = '/logout'
}

export const TIMEOUT_SHOW_ERROR = 2000;
