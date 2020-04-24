const repoHandler = (repos) => {
  const merged = [];

  repos.forEach((item) => {
    const existing = merged.filter((v) => {
      return v.language === item.language;
    });
    const mapped = repoMapper(item)

    if (existing.length) {
      const existingIndex = merged.indexOf(existing[0]);
      merged[existingIndex].count += 1;
      merged[existingIndex].commitsForLanguage += mapped.commitCount;
      merged[existingIndex].repos = [...merged[existingIndex].repos, mapped]
    } else {
      
      merged.push({
        language: item.language,
        count: 1,
        commitsForLanguage: mapped.commitCount,
        repos: [mapped]
      });
    }
  });
  
  return merged;
};

const repoMapper = (repo) => {
  const { name, size, created_at, updated_at, commits_url, html_url, commitCount } = repo;
  
  const mappedRepo = {
    name: name,
    size: size,
    created: created_at,
    lastUpdated: updated_at,
    commitsUrl: commits_url.replace('{/sha}', ''),
    githubUrl: html_url,
    commitCount: commitCount
  };
    
  return mappedRepo;
};

module.exports.repoHandler = repoHandler;
