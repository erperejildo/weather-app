import { describe, expect, it } from 'vitest';
import { formatEpochDate, formatEpochTime } from '../utils/dateTime';

describe('dateTime utils', () => {
  describe('formatEpochDate', () => {
    it('formats a specific epoch to date', () => {
      const epoch = 1622559600;
      const formattedDate = formatEpochDate(epoch);

      expect(formattedDate).toBe('Tuesday, June 1, 2021');
    });
  });

  describe('formatEpochTime', () => {
    it('formats a specific epoch to time', () => {
      const epoch = 1622559600;
      const formattedTime = formatEpochTime(epoch);

      expect(formattedTime).toBe('15:00');
    });
  });
});
