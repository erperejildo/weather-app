export interface Forecast {
  address: string;
  alerts: Array<any>;
  currentConditions: CurrentConditions;
  file: string;
  days: Array<Days>;
  description: string;
  latitude: number;
  longitude: number;
  queryCost: number;
  resolvedAddress: string;
  stations: { [key: string]: Stations };
  timezone: string;
  tzoffset: number;
}

interface Days {
  cloudcover: number;
  conditions: string;
  datetime: string;
  datetimeEpoch: number;
  description: string;
  dew: number;
  feelslike: number;
  feelslikemax: number;
  feelslikemin: number;
  hours: Array<any>;
  humidity: number;
  icon: string;
  moonphase: number;
  precip: number;
  precipcover: number;
  precipprob: number;
  preciptype: Array<string>;
  pressure: number;
  severerisk: number;
  snow: number;
  snowdepth: number;
  solarenergy: number;
  solarradiation: number;
  source: string;
  stations: Array<string>;
  sunrise: string;
  sunriseEpoch: number;
  sunset: string;
  sunsetEpoch: number;
  temp: number;
  tempmax: number;
  tempmin: number;
  uvindex: number;
  visibility: number;
  winddir: number;
  windgust: number;
  windspeed: number;
}

interface Stations {
  distance: number;
  latitude: number;
  longitude: number;
  useCount: number;
  id: string;
  name: string;
  quality: number;
  contribution: number;
}

interface CurrentConditions {
  cloudcover: number;
  conditions: string;
  datetime: string;
  datetimeEpoch: number;
  dew: number;
  feelslike: number;
  humidity: number;
  icon: string;
  moonphase: number;
  precip: number;
  precipprob: number;
  preciptype: any;
  pressure: number;
  snow: number;
  snowdepth: number;
  solarenergy: number;
  solarradiation: number;
  source: string;
  stations: Array<string>;
  sunrise: string;
  sunriseEpoch: number;
  sunset: string;
  sunsetEpoch: number;
  temp: number;
  uvindex: number;
  visibility: number;
  winddir: number;
  windgust: number;
  windspeed: number;
}
