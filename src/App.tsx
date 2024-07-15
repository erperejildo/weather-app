import { useContext, useEffect, useState } from 'react';
import './App.scss';
import { CurrentWeather } from './components/current-weather/current-weather';
import { Details } from './components/details/detaisl';
import { Logo } from './components/logo/logo';
import { Search } from './components/search/search';
import { ForecastContext } from './ForecastContext';
import { Background } from './interfaces/Background';
import { weatherBgMap } from './utils/backgrounds';

function App() {
  const [shrinkHeader, setShrinkHeader] = useState(false);
  const [theme, setTheme] = useState('light');
  const context = useContext(ForecastContext);

  if (!context) return;

  useEffect(() => {
    if (context?.forecast) {
      const icon = context.forecast.currentConditions.icon;
      const weatherBg: Background =
        weatherBgMap[icon] || weatherBgMap['default'];
      document.body.style.backgroundImage = `url(backgrounds/${weatherBg.label})`;
      setTheme(weatherBg.theme);
    }
  }, [context.forecast]);

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
    <div className={`app ${theme}`}>
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
