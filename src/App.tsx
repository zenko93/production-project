import {Link, Route, Routes} from 'react-router-dom';
import {MainPageAsync} from "./pages/MainPage/MainPage.async";
import {AboutPageAsync} from "./pages/AboutPage/AboutPage.async";
import {Suspense} from 'react';
import './styles/index.scss'
import {useTheme} from "./theme/useTheme";
import {classNames} from "./helpers/classNames/classNames";

const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={classNames('app', {}, [theme])}>
      <button onClick={toggleTheme}>TOGGLE</button>
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
