// WeatherComponent.tsx
import { FC } from 'react';
import { MdErrorOutline } from 'react-icons/md';
import weatherIconMap, { isWeatherIconName } from '../../utils/icons';

type WeatherProps = {
  icon: string;
};

const WeatherComponent: FC<WeatherProps> = ({ icon }) => {
  if (!isWeatherIconName(icon)) {
    // Handle unknown icon gracefully
    return <MdErrorOutline />;
  }

  const IconComponent = weatherIconMap[icon];

  return <IconComponent />;
};

export default WeatherComponent;
