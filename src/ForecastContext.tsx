// src/ForecastContext.tsx
import { createContext, FC, ReactNode, useEffect, useState } from 'react';
import { Forecast } from './interfaces/Forecast';
import { getForecast } from './weatherService';

interface ForecastContextType {
  forecast: Forecast | null;
  setLocation: (location: string) => void;
  error: string | null;
  setError: (message: string | null) => void;
}

export const ForecastContext = createContext<ForecastContextType | undefined>(
  undefined
);

interface ForecastProviderProps {
  children: ReactNode;
}

export const ForecastProvider: FC<ForecastProviderProps> = ({ children }) => {
  const [forecast, setForecast] = useState<Forecast | null>(null);
  const [location, setLocation] = useState<string>('Jerez');
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getForecast(location);
        setError(null);
        setForecast(data);
      } catch (error: any) {
        setError(error.message);
      }
    };

    fetchData();
  }, [location]);

  return (
    <ForecastContext.Provider
      value={{ forecast, setLocation, error, setError }}
    >
      {children}
    </ForecastContext.Provider>
  );
};
