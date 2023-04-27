import Main from '../../pages/main/main';
import {Route, Routes} from 'react-router-dom';
import Login from '../../pages/login/login';
import Property from '../../pages/property/property';
import NotFound from '../../pages/not-found/not-found';
import {AppRoute} from '../../const';
import {useScrollToTop} from '../../hooks/use-scroll-to-top';
import {useAppSelector} from "../../hooks";
import LoadingScreen from "../../pages/loading-screen/loading-screen";

function App(): JSX.Element {
  useScrollToTop();

  const isOffersLoadingInProgress = useAppSelector((state) => state.isOffersLoadingInProgress);

  if (isOffersLoadingInProgress) {
    return <LoadingScreen />
  }

  return (
    <Routes>
      <Route path={AppRoute.Main} element={<Main />} />
      <Route path={AppRoute.City} element={<Main />} />
      <Route path={AppRoute.Login} element={<Login />} />
      <Route path={AppRoute.Property} element={<Property />} />
      <Route path={AppRoute.NotFound} element={<NotFound />} />
    </Routes>
  );
}

export default App;
