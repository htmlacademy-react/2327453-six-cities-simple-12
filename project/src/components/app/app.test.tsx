import {render, screen} from '@testing-library/react';
import App from './app';

test('Renders expected place cards', () => {
  const placeCardsCount = 5;

  const {container} = render(<App placeCardsCount={placeCardsCount}/>);

  const placeCards = container.getElementsByClassName('place-card')

  expect(placeCards.length).toBe(2);
});
