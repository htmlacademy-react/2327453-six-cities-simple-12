import Main from '../../pages/Main/main';

type AppProps = {
  placeCardsCount : number;
}

function App({ placeCardsCount } : AppProps): JSX.Element {
  return <Main placeCardsCount={placeCardsCount}/>;
}

export default App;
