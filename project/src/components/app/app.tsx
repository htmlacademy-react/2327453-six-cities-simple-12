import Main from '../../pages/main/main';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Login from "../../pages/login/login";
import Property from "../../pages/property/property";
import NotFound from "../../pages/not-found/not-found";

type AppProps = {
  placeCardsCount : number;
}

function App({ placeCardsCount } : AppProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Main placeCardsCount={placeCardsCount} />} />
        <Route path='/login' element={<Login />} />
        <Route path='/offer/:id' element={<Property />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
