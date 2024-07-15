import { forwardRef, useContext } from 'react';
import { CiCloudSun, CiDroplet } from 'react-icons/ci';
import { FiWind } from 'react-icons/fi';
import { MdOutlineVisibility } from 'react-icons/md';
import { ForecastContext } from '../../ForecastContext';
import { formatEpochDate, formatEpochTime } from '../../utils/dateTime';
import { fahrenheitToCelsius } from '../../utils/degrees';
import WeatherComponent from '../icon-weather/icon-weather';
import { Search } from '../search/search';
import './details.scss';

const Details = forwardRef<HTMLInputElement>(() => {
  const context = useContext(ForecastContext);

  if (!context || !context.forecast) return;

  return (
    <div className="details">
      <Search />
      <div className="title">
        {context.forecast.currentConditions.conditions}
      </div>
      <div className="daily-details">
        <div>Cloud Cover</div>
        <div>
          {/* NOTE: This API didn't provide some design info, so I had to addapt the style */}
          {context.forecast.currentConditions.cloudcover}%
          <CiCloudSun />
        </div>
        <div>Visibility</div>
        <div>
          {context.forecast.currentConditions.visibility}%
          <MdOutlineVisibility />
        </div>
        <div>Humidity</div>
        <div>
          {context.forecast.currentConditions.humidity}%
          <CiDroplet />
        </div>
        <div>Wind</div>
        <div>
          {context.forecast.currentConditions.windspeed}km/h
          <FiWind />
        </div>
      </div>
      {context.forecast.days.map((day, index) => (
        <div className="hourly" key={index}>
          <div className="icon">
            <WeatherComponent icon={day.icon} />
          </div>
          <div className="time">
            {/* NOTE: this part changes a bit since this API only returns days and no time
            so I adjusted the design a little bit */}
            {formatEpochTime(day.datetimeEpoch)}{' '}
            {formatEpochDate(day.datetimeEpoch)}
            <p>{day.conditions}</p>
          </div>
          <div className="degrees">{fahrenheitToCelsius(day.temp)}°</div>
        </div>
      ))}
    </div>
  );
});
Details.displayName = 'Weather Details';

export { Details };
