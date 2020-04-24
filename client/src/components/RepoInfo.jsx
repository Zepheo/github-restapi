import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Doughnut } from 'react-chartjs-2';
import '../styles/RepoInfo.css'

import colors from '../utils/colors';

const baseUrl = '/api/users';

const RepoInfo = ({username, reposCount}) => {
  const [ repos, setRepos ] = useState(undefined);
  const [ topTenRepos, setTopTenRepos ] = useState(undefined);

  const commitColors = [
    '#6f9c33',
    '#f9c232',
    '#f7941d',
    '#f36523',
    '#cb4c57',
    '#9d405f',
    '#5d4d96',
    '#15588d',
    '#467386',
    '#2b8a84'
  ]

  useEffect(() => {
    const fetchRepos = async () => {
      const { data } = await axios.get(`${baseUrl}/${username}/repos`);
      const topten = data.map(r => r.repos.map(r => ({name: r.name, commitCount: r.commitCount}))).flat().slice(0,10);
      setTopTenRepos(topten);
      setRepos(data);
        
    };
    fetchRepos();
  },[username]);

  if (!repos) {
    return (
      <section>
        Loading....
      </section>
    );
  }

  const chartOptions = {
    legend: {
      position: 'left',
      labels: {
        boxWidth: 12
      }
    },
    responsive: true,
    maintainAspectRatio: false,
  }

  return (
    <section className='chart-container'>
      <div className="repo-per-language-container">
        <Doughnut
          data={{
            labels: repos.map(r => r.language),
            datasets: [{
              data: repos.map(r => r.count),
              backgroundColor: repos.map(r => colors[r.language].color)
            }]
          }}
          options={chartOptions} 
        />
      </div>
      <div className="commits-per-language-container">
        <Doughnut
          data={{
            labels: repos.map(r => r.language),
            datasets: [{
              data: repos.map(r => r.commitsForLanguage),
              backgroundColor: repos.map(r => colors[r.language].color)
            }]
          }}
          options={chartOptions} 
        />      
      </div>
      <div className="top-ten-repo-commits">
        <Doughnut
          data={{
            labels: topTenRepos.map(r => r.name),
            datasets: [{
              data: topTenRepos.map(r => r.commitCount),
              backgroundColor: commitColors
            }]
          }}
          options={chartOptions} 
        />
      </div>
    </section>
  )
}

export default RepoInfo;
