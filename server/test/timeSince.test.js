const { timeSince } = require('../utils/timeSince');

describe('timeSince', () => {
  test('should return a string', () => {
    const res = timeSince('2020-04-13T09:48:04Z');
    expect(res).toEqual('10 days');
  });

  test('should return a string', () => {
    const res = timeSince('2020-01-13T09:48:04Z');
    expect(res).toEqual('3 months');
  });

  test('should return a string', () => {
    const res = timeSince('2019-01-13T09:48:04Z');
    expect(res).toEqual('1 year');
  });
});
