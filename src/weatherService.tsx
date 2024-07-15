import { Forecast } from './interfaces/Forecast';

// STEPS:
// create an account here: https://www.visualcrossing.com
// create an .env file in the root of the project with this content:
// VITE_WEATHER_API_KEY=YOU_KEY_HERE
const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;
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
