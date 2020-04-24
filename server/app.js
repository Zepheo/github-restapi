const express = require('express');
const bodyParser = require('body-parser');
const { fetchUser, fetchUserCommits, fetchUserRepos } = require('./utils/fetcher');

const app = express();

app.use(bodyParser.json());
app.use((req, res, next) => {
  console.log(req.url);
  next();
});

app.get('/api/users/:username', async (req, res) => {
  const { params: { username } } = req;
  const user = await fetchUser(username);

  res.json(user);
});

app.get('/api/users/:username/commits', async (req, res) => {
  const { params: { username } } = req;
  const user = await fetchUserCommits(username);

  res.json(user);
});

app.get('/api/users/:username/repos', async (req, res) => {
  const { params: { username } } = req;
  const user = await fetchUserRepos(username);

  res.json(user);
});

app.get('/api', (req, res) => {
  res.json({ foo: 'bar' });
});

module.exports = app;
