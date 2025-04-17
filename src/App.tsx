import React, { useEffect } from 'react';
import './App.scss';
import Home from './pages/home';
import AboutProject from './pages/about-project/about-project';
import { useRoutes } from 'react-router-dom';
import { initSmoothScroll } from './utils/smoothScroll';

function App() {
  useEffect(() => {
    const lenis = initSmoothScroll();

    return () => {
      lenis.destroy();
    };
  }, []);

  const element = useRoutes([
    {
      path: '/',
      element: <Home />,
    },
    {
      path: 'about/:id',
      element: <AboutProject />,
    },
  ]);
  if (!element) return null;

  return <>{React.cloneElement(element, { key: location.pathname })}</>;
}

export default App;
