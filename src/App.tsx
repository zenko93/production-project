import {Link, Route, Routes} from 'react-router-dom';
import './index.scss'
import {MainPageAsync} from "./pages/MainPage/MainPage.async";
import {AboutPageAsync} from "./pages/AboutPage/AboutPage.async";
import { Suspense } from 'react';

const App = () => {
  return (
    <div className='app'>
      <Link to={'/'}>Main</Link>
      <Link to={'/about'}>About</Link>

      <Suspense fallback={<div>Загрузка...</div>}>
        <Routes>
            <Route path={'/'} element={<MainPageAsync />} />
            <Route path={'/about'} element={<AboutPageAsync />}/>
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
