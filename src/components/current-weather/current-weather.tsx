import { forwardRef, useContext } from 'react';
import { ForecastContext } from '../../ForecastContext';
import { formatEpochDate, formatEpochTime } from '../../utils/dateTime';
import { fahrenheitToCelsius } from '../../utils/degrees';
import WeatherComponent from '../icon-weather/icon-weather';
import './current-weather.scss';

const CurrentWeather = forwardRef<HTMLInputElement>(() => {
  const context = useContext(ForecastContext);

  if (!context || !context.forecast) return;

  return (
    <div className="current-weather">
      <div className="icon">
        <WeatherComponent icon={context.forecast.currentConditions.icon} />
      </div>
      <div className="degrees">
        {fahrenheitToCelsius(context.forecast.currentConditions.temp)}°
        <span>C</span>
      </div>
      <div className="location">
        <p>{context.forecast.address}</p>
        <div>
          {formatEpochTime(context.forecast.currentConditions.datetimeEpoch)}
        </div>
        <div>
          {formatEpochDate(context.forecast.currentConditions.datetimeEpoch)}
        </div>
      </div>
    </div>
  );
});
CurrentWeather.displayName = 'Current Weather';

export { CurrentWeather };
