import { Forecast } from './interfaces/Forecast';

// not necessary since it has to be public in url
// but in case we'd need to keep it secret this is how
// const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;
const API_KEY = 'JK6YJ4UGPEWCWGCS26XUZAGH9';
const BASE_URL =
  'https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/';

export const getForecast = async (location: string): Promise<Forecast> => {
  try {
    const response = await fetch(
      `${BASE_URL}${location}?key=${API_KEY}&contentType=json`
    );
    if (!response.ok) {
      throw new Error(
        'Something wrong happened. Could you check the city again?'
      );
    }
    const data: Forecast = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
};
