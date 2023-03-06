import {render, screen} from '@testing-library/react';
import App from './app';

test('Renders expected place cards', () => {
  const placeCardsCount = 5;

  render(<App placeCardsCount={placeCardsCount}/>);

  const articles = screen.getAllByRole('article');

  expect(articles.length).toBe(placeCardsCount);
});
