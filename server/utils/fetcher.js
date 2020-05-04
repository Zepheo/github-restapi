const axios = require('axios');
const { userMapper } = require('./userMapper');
const { commitHandler } = require('./commitHandler');
const { repoHandler } = require('./repoHandler');
const { headerHandler } = require('./headerHandler');

require('dotenv').config();
const baseUrl = 'https://api.github.com/';
const options = {
  headers: {
    Authorization: `token ${process.env.GIT_TOKEN}`
  }
};


const fetchUser = async (username) => {
  const { data } = await axios.get(`${baseUrl}users/${username.toLowerCase()}`, options);
  return Promise.resolve(userMapper(data));
};

const fetchUserCommits = async (username) => {
  const { data } = await axios.get(`${baseUrl}users/${username.toLowerCase()}/events?per_page=100`, options);
  return Promise.resolve(commitHandler(data));
};

const fetchUserRepos = async (username) => {
  const { data } = await axios.get(`${baseUrl}users/${username.toLowerCase()}/repos?per_page=100`, options);
  const reposWithCommitCount = await Promise.all(data.map(async (r)=> ({...r, commitCount: await fetchRepoCommits(r)})));
  return Promise.resolve(repoHandler(reposWithCommitCount));
};

const fetchRepoCommits = async (repo) => {
  const { headers } = await axios.get(`${repo.commits_url.replace('{/sha}', '')}?per_page=1`, options);
  return Promise.resolve(headerHandler(headers));
};

module.exports = {
  fetchUser,
  fetchUserCommits,
  fetchUserRepos,
  fetchRepoCommits
};
