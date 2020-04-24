const { headerHandler } = require('../utils/headerHandler');
const testRepoHeaders = require('../test/rawdata/testRepoHeaders.json');

describe('The headerHandler', () => {
  test('should filter out only commits', () => {
    const res = headerHandler(testRepoHeaders);
    expect(res).toEqual(15);
  });
});