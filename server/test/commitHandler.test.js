const { commitHandler } = require('../utils/commitHandler');
const testUserEvents = require('../test/rawdata/testUserEvents.json');

describe('The commitHandler', () => {
  test('should filter out only commits', () => {
    const res = commitHandler(testUserEvents);
    expect(res.length).toEqual(5);
  });
  test('should have properties: date, numOfCommits, commits', () => {
    const res = commitHandler(testUserEvents);
    expect(res[0]).toHaveProperty('date');
    expect(res[0]).toHaveProperty('numOfCommits');
    expect(res[0]).toHaveProperty('commits');
  });
  test('should put all commits with same dat in the same object', () => {
    const res = commitHandler(testUserEvents);
    
    const duplicates = res.filter((e, i) => {  
      if (i < res.length-2) {
        if (e.date === res[i+1].date) return e;
      }
    });
    expect(duplicates.length).toEqual(0);
  });
});