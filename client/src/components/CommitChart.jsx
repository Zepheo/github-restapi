import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { Line } from 'react-chartjs-2';

const baseUrl = '/api/users';

export const CommitChart = ({username}) => {
  const [ commits, setCommits ] = useState(undefined);

  useEffect(() => {
    const fetchCommits = async () => {
      const { data } = await axios.get(`${baseUrl}/${username}/commits`);
      setCommits(data);
    };
    fetchCommits();
  },[username]);

  if (!commits) {
    return <div></div>;
  }

  return (
    <Line 
      data={{
        labels: commits.map(c => c.date),
        datasets: [{
          label: '# of commits',
          data: commits.map(c => c.numOfCommits),
        }]
      }}
      options={{
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          yAxes: [{
            ticks: {
              stepSize: 1,
              beginAtZero: true,
            }
          }],
          xAxes: [{
            display: false
          }]
        },
        legend: {
          position: 'bottom',
          align: 'end'
        },
        elements: {
          line: {
            tension: 0
          }
        }
      }}
    />
  );
};

export default CommitChart;