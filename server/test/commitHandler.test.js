const { commitHandler } = require('../utils/commitHandler');
const testUserEvents = require('../test/rawdata/testUserEvents.json');

describe('The commitHandler', () => {
  test('should filter out only commits', () => {
    const res = commitHandler(testUserEvents);
    expect(res.length).toEqual(11);
  });
  test('should have properties: date, numOfCommits, commits', () => {
    const res = commitHandler(testUserEvents);
    expect(res[0]).toHaveProperty('date');
    expect(res[0]).toHaveProperty('numOfCommits');
    expect(res[0]).toHaveProperty('commits');
  });
});