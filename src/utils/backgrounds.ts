import { Background } from '../interfaces/Background';

export const weatherBgMap: { [key: string]: Background } = {
  sunny: { label: 'sunny.jpg', theme: 'light' },
  'clear-day': { label: 'sunny.jpg', theme: 'light' },
  'clear-night': { label: 'night.jpg', theme: 'dark' },
  rain: { label: 'rainy.jpg', theme: 'dark' },
  snow: { label: 'snow.jpg', theme: 'light' },
  mist: { label: 'misty.jpg', theme: 'light' },
  cloudy: { label: 'cloudy.jpg', theme: 'light' },
  'partly-cloudy-day': { label: 'cloudy.jpg', theme: 'light' },
  'partly-cloudy-night': { label: 'cloudy-night.jpg', theme: 'dark' },

  default: { label: 'sunny.jpg', theme: 'light' },
};
