import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { ForecastProvider } from './ForecastContext.tsx';
import './index.scss';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <ForecastProvider>
    <App />
  </ForecastProvider>
);
