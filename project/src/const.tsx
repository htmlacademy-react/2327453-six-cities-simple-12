export enum AppRoute {
  Main = '/',
  Login = '/login',
  Property = '/offer/:id',
  City = '/:city',
  NotFound = '*',
}

export const Cities = ['Paris', 'Cologne', 'Brussels', 'Amsterdam', 'Hamburg', 'Dusseldorf'];
