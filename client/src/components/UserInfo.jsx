import React from 'react'
import '../styles/UserInfo.css';
import CommitChart from './CommitChart';

export const UserInfo = ({user}) => {
  return (
    <section className="user-info">
      <div className="user-container">
        <img className='user-info-img' src={user.avatar} alt='Userimg'/>
        <div className="user-info-text">
          <p>Username: {user.name}</p>
          <p>Public repositories: {user.repos}</p>
          <p>Time on github: {user.timeOnGithub}</p>
          <a href={user.githubUrl}>View profile on GitHub</a>
        </div>
        <div className="user-info-chart">
          <CommitChart username={user.name} />
        </div>
      </div>
    </section>
  )
};

export default UserInfo;
