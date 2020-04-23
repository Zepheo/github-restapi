const axios = require('axios');
const { userMapper } = require('./userMapper');
const { commitHandler } = require('./commitHandler');
const testUser = require('../test/rawdata/testUser.json')
const testUserEvents = require('../test/rawdata/testUserEvents.json')

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

module.exports = {
  fetchUser,
  fetchUserCommits
};
