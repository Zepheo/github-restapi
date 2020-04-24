const axios = require('axios');
const { userMapper } = require('./userMapper');
const { commitHandler } = require('./commitHandler');
const { repoHandler } = require('./repoHandler');
const { headerHandler } = require('./headerHandler');
const testUser = require('../test/rawdata/testUser.json')
const testUserEvents = require('../test/rawdata/testUserEvents.json')
const testUserRepos = require('../test/rawdata/testUserRepos.json');
const testRepoHeaders = require('../test/rawdata/testRepoHeaders.json');

const baseUrl = 'https://api.github.com/';

const fetchUser = async (username) => {
  // const { data } = await axios.get(`${baseUrl}users/${username.toLowerCase()}`);
  // return Promise.resolve(userMapper(data));
  return Promise.resolve(userMapper(testUser));
};

const fetchUserCommits = async (username) => {
  // const { data } = await axios.get(`${baseUrl}users/${username.toLowerCase()}/events?per_page=100`);
  // return Promise.resolve(commitHandler(data));
  return Promise.resolve(commitHandler(testUserEvents));
};

const fetchUserRepos = async (username) => {
  // const { data } = await axios.get(`${baseUrl}users/${username.toLowerCase()}/repos?per_page=100`);
  // const reposWithCommitCount = await Promise.all(data.map(async (r)=> ({...r, commitCount: await fetchRepoCommits(r)})));
  const reposWithCommitCount = await Promise.all(testUserRepos.map(async (r)=> ({...r, commitCount: await fetchRepoCommits(r)})));
  return Promise.resolve(repoHandler(reposWithCommitCount));
};

const fetchRepoCommits = async (repo) => {
  // const { headers } = await axios.get(`${repo.commits_url.replace('{/sha}', '')}?per_page=1`);
  // return Promise.resolve(headerHandler(headers));
  return Promise.resolve(headerHandler(testRepoHeaders));
};



module.exports = {
  fetchUser,
  fetchUserCommits,
  fetchUserRepos,
  fetchRepoCommits
};
