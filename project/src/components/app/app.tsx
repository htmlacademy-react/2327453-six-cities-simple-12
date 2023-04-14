import Main from '../../pages/main/main';
import {Route, Routes} from 'react-router-dom';
import Login from '../../pages/login/login';
import Property from '../../pages/property/property';
import NotFound from '../../pages/not-found/not-found';
import {AppRoute} from '../../const';
import {Reviews} from '../../types/review';
import {useScrollToTop} from '../../hooks/use-scroll-to-top';

type AppProps = {
  reviews: Reviews;
}

function App({ reviews } : AppProps): JSX.Element {
  useScrollToTop();
  return (
    <Routes>
      <Route path={AppRoute.Main} element={<Main />} />
      <Route path={AppRoute.City} element={<Main />} />
      <Route path={AppRoute.Login} element={<Login />} />
      <Route path={AppRoute.Property} element={<Property reviews={reviews} />} />
      <Route path={AppRoute.NotFound} element={<NotFound />} />
    </Routes>
  );
}

export default App;
