const commitHandler = (events) => {
  const commits = events.filter(e => e.type ==='PushEvent').map(e => ({
    date: e.created_at.split('T')[0],
    numOfCommits: e.payload.commits.length,
    commits: e.payload.commits
  }));
  return mergeDates(commits).reverse();
};

const mergeDates = (commits) => {
  const merged = [];

  commits.forEach((item) => {
    const existing = merged.filter((v) => {
      return v.date === item.date;
    });

    if (existing.length) {
      const existingIndex = merged.indexOf(existing[0]);
      merged[existingIndex].numOfCommits += item.numOfCommits;
      merged[existingIndex].commits = [...merged[existingIndex].commits, ...item.commits]
    } else {
      merged.push(item);
    }
  });
  
  return merged;
};

module.exports.commitHandler = commitHandler;