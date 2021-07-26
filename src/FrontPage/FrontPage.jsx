import React, { useEffect, useState } from 'react';

import { addressTrim } from '../helper';
import donataLogo from '../assets/donata-logo.png';

import './FrontPage.scss';
function FrontPage() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch('http://localhost:5000/users')
      .then((res) => res.json())
      .then((data) => {
        setUsers(data.data);
        console.log(data);
      });
  }, []);
  document.title = 'Donata | Front Page';

  const renderUsers = () => {
    return users.map((user) => {
      return (
        <div key={user.id}>
          <img src={user.photoUrl} alt="" />

          <p>{user.description}</p>
          <p>{addressTrim(user.id)}</p>
          <p>{user.userName}</p>
        </div>
      );
    });
  };
  return (
    <div className="FrontPage">
      <header>
        <div>
          <a href="/" target="_blank">
            <div className="title-logo">
              <img src={donataLogo} alt="donata-logo" />
              <h1>DONATA</h1>
            </div>
          </a>
          <div className="input-div">
            <input placeholder="Search wallet address" />
          </div>
        </div>
      </header>

      <div className="users">{renderUsers()}</div>
    </div>
  );
}

export default FrontPage;
