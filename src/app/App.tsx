import {Link, Route, Routes} from 'react-router-dom';
import {Suspense} from 'react';
import './styles/index.scss'
import {useTheme} from "app/providers/ThemeProvider";
import {classNames} from "shared/lib/classNames/classNames";
import {AboutPage} from "pages/AboutPage";
import {MainPage} from "pages/MainPage";

const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={classNames('app', {}, [theme])}>
      <button onClick={toggleTheme}>TOGGLE</button>
      <Link to={'/'}>Main</Link>
      <Link to={'/about'}>About</Link>

      <Suspense fallback={<div>Загрузка...</div>}>
        <Routes>
            <Route path={'/'} element={<MainPage />} />
            <Route path={'/about'} element={<AboutPage />}/>
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
