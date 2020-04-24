import React from 'react'
import '../styles/UserInfo.css';
import CommitChart from './CommitChart';

export const UserInfo = ({user}) => {
  return (
    <div className="user-container">
      <img className='user-info-img' src={user.avatar} alt='Userimg'/>
      <div className="user-info-text">
        <p><i className="fas fa-user-astronaut"></i>  {user.name}</p>
        <p><i className="fas fa-database"></i> Public repositories {user.repos}</p>
        <p><i className="fas fa-clock"></i>  Been on github for {user.timeOnGithub}</p>
        <a href={user.githubUrl}><i className="fas fa-external-link-alt"></i>  View profile on GitHub</a>
      </div>
      <div className="user-info-chart">
        <CommitChart username={user.name} />
      </div>
    </div>
  )
};

export default UserInfo;
