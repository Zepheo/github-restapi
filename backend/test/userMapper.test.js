const { userMapper } = require('../utils/userMapper');
const rawUserInfo = require('./rawdata/testUser.json');

describe('userMapper', () => {
  test('should map the data with the information needed', () => {
    const user = userMapper(rawUserInfo);
    expect(user).toHaveProperty('name');
    expect(user).toHaveProperty('avatar');
    expect(user).toHaveProperty('repos');
    expect(user).toHaveProperty('timeOnGithub');
    expect(user).toHaveProperty('githubUrl');
  });
});