const axios = require('axios');
const { userMapper } = require('./userMapper');

const baseUrl = 'https://api.github.com/';

const fetchUser = async (username) => {
  const { data } = await axios.get(`${baseUrl}users/${username.toLowerCase()}`);
  return Promise.resolve(userMapper(data));
};

module.exports = {
  fetchUser,
};
