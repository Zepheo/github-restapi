const { repoHandler } = require('../utils/repoHandler');
const testUserRepos = require('./rawdata/testUserRepos.json');

describe('the repoHandler', () => {
  test(`should collect the repos and return them in an object like so [
    {
      language: "JavaScript",
      count: 5,
      repos: []
    },
    {
      language: "TypeScript",
      count: 1,
      repos: []
    }
  ]`, () => {
    const res = repoHandler(testUserRepos);
    expect(res[0]).toHaveProperty('language');
    expect(res[0]).toHaveProperty('count');
    expect(res[0]).toHaveProperty('repos');
    expect(res[0]).toHaveProperty('commitsForLanguage');
    expect(Array.isArray(res[0].repos)).toBe(true);
  });
  test('should give correct values for language and count', () => {
    const res = repoHandler(testUserRepos);
    expect(res[0].language).toBe('JavaScript');
    expect(res[0].count).toBe(4);
    expect(res[0].commitsForLanguage).toBe(56);
    expect(res[1].language).toBe('TypeScript');
    expect(res[1].count).toBe(1);
  });
  
  test(`should give correct information in repos {
    ...,
    repos: [
      {
        name: "ex",
        size: 187,
        created: "2020-04-03",
        lastUpdated: "2020-04-15",
        commitsUrl: "githubapiaddr",
        githubUrl: "githubwebaddr",
        commitCount: 14
      },
      {},
      {},
      {},
      {},
    ]
  }`, () => {
    const res = repoHandler(testUserRepos);    
    expect(res[0].repos[0]).toHaveProperty('name');
    expect(res[0].repos[0]).toHaveProperty('size');
    expect(res[0].repos[0]).toHaveProperty('created');
    expect(res[0].repos[0]).toHaveProperty('lastUpdated');
    expect(res[0].repos[0]).toHaveProperty('commitsUrl');
    expect(res[0].repos[0]).toHaveProperty('githubUrl');
    expect(res[0].repos[0]).toHaveProperty('commitCount');
  });
});
