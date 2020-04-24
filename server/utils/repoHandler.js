const repoHandler = (repos) => {
  const merged = [];

  repos.forEach((item) => {
    const existing = merged.filter((v) => {
      return v.language === item.language;
    });

    if (existing.length) {
      const existingIndex = merged.indexOf(existing[0]);
      merged[existingIndex].count += 1;
      merged[existingIndex].repos = [...merged[existingIndex].repos, repoMapper(item)]
    } else {
      merged.push({
        language: item.language,
        count: 1,
        repos: [repoMapper(item)]
      });
    }
  });
  
  return merged;
};

const repoMapper = (repo) => ({
  name: repo.name,
  size: repo.size,
  created: repo.created_at,
  lastUpdated: repo.updated_at,
  commitsUrl: repo.commits_url,
  githubUrl: repo.html_url
});

module.exports.repoHandler = repoHandler;
