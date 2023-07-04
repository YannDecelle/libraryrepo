
const getrandomnumber = require('../index');

describe('getrandomnumber', () => {
  it('returns a random number between 0 and 99', () => {
    const randomNumber = getrandomnumber();
    expect(randomNumber).toBeGreaterThanOrEqual(0);
    expect(randomNumber).toBeLessThan(100);
  });

  it('returns an integer', () => {
    const randomNumber = getrandomnumber();
    expect(Number.isInteger(randomNumber)).toBe(true);
  });
});
