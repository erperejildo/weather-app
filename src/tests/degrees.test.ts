import { describe, expect, it } from 'vitest';
import { fahrenheitToCelsius } from '../utils/degrees';

describe('degrees utils', () => {
  describe('fahrenheitToCelsius', () => {
    it('converts 77°F to 25°C (rounded)', () => {
      const fahrenheit = 77;
      const celsius = fahrenheitToCelsius(fahrenheit);

      expect(celsius).toBe(25);
    });

    it('converts 32°F to 0°C (exact)', () => {
      const fahrenheit = 32;
      const celsius = fahrenheitToCelsius(fahrenheit);

      expect(celsius).toBe(0);
    });

    it('converts negative Fahrenheit values correctly', () => {
      const fahrenheit = -10;
      const celsius = fahrenheitToCelsius(fahrenheit);

      expect(celsius).toBe(-23);
    });
  });
});
