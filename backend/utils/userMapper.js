const { timeSince } = require('./timeSince');

const userMapper = (user) => {
  const {
    avatar_url,
    created_at,
    login,
    public_repos,
    html_url,
  } = user;

  return {
    avatar: avatar_url,
    name: login,
    repos: public_repos,
    githubUrl: html_url,
    timeOnGithub: timeSince(created_at),
  };
};

module.exports.userMapper = userMapper;
