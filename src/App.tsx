import { useContext, useEffect, useState } from 'react';
import './App.scss';
import { CurrentWeather } from './components/current-weather/current-weather';
import { Details } from './components/details/detaisl';
import { Logo } from './components/logo/logo';
import { Search } from './components/search/search';
import { ForecastContext } from './ForecastContext';

function App() {
  const [shrinkHeader, setShrinkHeader] = useState(false);
  const context = useContext(ForecastContext);

  if (!context) return;

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      setShrinkHeader(position > 50);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [location]);

  const getHeaderClassName = () => {
    return shrinkHeader ? 'fixed-wrapper shrink' : 'fixed-wrapper';
  };

  return (
    <div className="app">
      <div className={getHeaderClassName()}>
        <Logo />
        {!shrinkHeader && <Search />}
        <CurrentWeather />
      </div>
      <Details />
    </div>
  );
}

export default App;
