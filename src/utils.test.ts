import { buildExpiredDate } from './utils';

describe('utils', () => {
  describe('buildExpiredDate', () => {
    test('the day should alway be `7`', () => {
      const date = new Date('2022-12-01');
      expect(buildExpiredDate(date)).toMatchInlineSnapshot(`"2023-07-07"`);
    });
    test('month entered should be seven months later', () => {
      const date = new Date('2023-01-01');
      expect(buildExpiredDate(date)).toMatchInlineSnapshot(`"2023-08-07"`);
    });
    test('should return two digit month with leading 0', () => {
      const date = new Date('2022-02-01');
      expect(buildExpiredDate(date)).toMatchInlineSnapshot(`"2023-09-07"`);
    });
    test('should return correct two digit month', () => {
      const date = new Date('2022-3-01');
      expect(buildExpiredDate(date)).toMatchInlineSnapshot(`"2023-10-07"`);
    });
  });
});
