const commitHandler = (events) => {
  const commits = events.filter(e => e.type ==='PushEvent').map(e => ({
    date: e.created_at,
    numOfCommits: e.payload.commits.length,
    commits: e.commits
  }));
  return commits;
};

module.exports.commitHandler = commitHandler;