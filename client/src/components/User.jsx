import React, { useState } from 'react';
import axios from 'axios';
import UserInfo from './UserInfo';
import RepoInfo from './RepoInfo';
import '../styles/User.css';

const baseUrl = '/api/users';

const User = () => {
  const [searched, setSearched] = useState(false);
  const [user, setUser] = useState(undefined);

  const search = async (event) => {
    event.preventDefault();
    const searchValue = document.getElementById('username').value;
    document.getElementById('searchForm').reset();
    
    const { data:userInfo } = await axios.get(`${baseUrl}/${searchValue}`);
    
    setSearched(true);
    setUser(userInfo);
  };

  return (
    <>
      <form
        className='search-form'
        id='searchForm'
        onSubmit={(e) => search(e)}>
        <input 
          type='search'
          className='search-form-username'
          name='username'
          id='username'
          placeholder='Username...'
          required
        />
        <input
          className='search-form-submit'
          type='submit'
          value='Search'
        />
      </form>
      {searched ?
        !user ?
        <section>
          Loading...
        </section>:
        <section className='user-info-container'>
          <UserInfo user={user} />
          <RepoInfo username={user.name} reposCount={user.repos}/>
        </section>:
        <></>
      }
    </>
  )
}

export default User
