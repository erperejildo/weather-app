import { BsCloudFog2, BsSnow } from 'react-icons/bs';
import { GoCloud, GoSun } from 'react-icons/go';
import {
  IoCloudyNightOutline,
  IoMoonOutline,
  IoRainyOutline,
} from 'react-icons/io5';

const weatherIconMap = {
  sunny: GoSun,
  'clear-day': GoSun,
  'clear-night': IoMoonOutline,
  rain: IoRainyOutline,
  snow: BsSnow,
  mist: BsCloudFog2,
  cloudy: GoCloud,
  'partly-cloudy-day': GoCloud,
  'partly-cloudy-night': IoCloudyNightOutline,
};

export type WeatherIconName = keyof typeof weatherIconMap;

export function isWeatherIconName(icon: string): icon is WeatherIconName {
  return icon in weatherIconMap;
}

export default weatherIconMap;
