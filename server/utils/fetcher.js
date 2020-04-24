const axios = require('axios');
const { userMapper } = require('./userMapper');
const { commitHandler } = require('./commitHandler');
const { repoHandler } = require('./repoHandler');
const testUser = require('../test/rawdata/testUser.json')
const testUserEvents = require('../test/rawdata/testUserEvents.json')
const testUserRepos = require('../test/rawdata/testUserRepos.json');

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
  // return Promise.resolve(repoHandler(data));
  return Promise.resolve(repoHandler(testUserRepos));
};



module.exports = {
  fetchUser,
  fetchUserCommits,
  fetchUserRepos
};
