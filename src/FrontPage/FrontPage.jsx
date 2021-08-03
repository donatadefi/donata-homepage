import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

import { addressTrim } from '../helper';
import donataLogo from '../assets/donata-logo.png';

import './FrontPage.scss';
function FrontPage() {
  document.title = 'Donata | Front Page';

  const [users, setUsers] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [loadingState, setLoadingState] = useState(false);
  useEffect(() => {
    fetch('https://donatedefi.finance/users')
      .then((res) => res.json())
      .then((data) => {
        setUsers(data.data);
      });
  }, []);

  const searchAddress = (val) => {
    if (!val) {
      setLoadingState(true);
      fetch('https://donatedefi.finance/users')
        .then((res) => res.json())
        .then((data) => {
          setUsers(data.data);
          setLoadingState(false);
        });
    }

    setSearchValue(val);
  };

  const submitSearch = (e) => {
    e.preventDefault();
    if (!searchValue) {
      return;
    }
    setLoadingState(true);

    fetch('https://donatedefi.finance/address', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      cache: 'no-cache',
      body: JSON.stringify({ address: searchValue.toLowerCase() }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (!data.user) {
          setUsers([]);
          setLoadingState(false);
        } else {
          setUsers(data.user);
          setLoadingState(false);
        }
      });
  };

  const renderUsers = () => {
    return users.map((user) => {
      return (
        <div key={user.id}>
          <img src={user.photoUrl} alt="" />
          <div className="desc-wrapper">
            <p className="desc">{user.description}</p>
            <a
              href={`https://etherscan.io/address/${user.id}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              {addressTrim(user.id)}
            </a>
          </div>

          <NavLink
            to={`/user/${user.id}`}
            className="user-name"
            target="_blank"
          >
            <p>{user.userName}</p>
          </NavLink>
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
            <form onSubmit={submitSearch}>
              <input
                placeholder="Search wallet address (Enter to search)"
                onChange={(e) => searchAddress(e.target.value)}
                value={searchValue}
              />
            </form>
          </div>
        </div>
      </header>
      {loadingState ? <p>loading...</p> : ''}
      <div className="users">{renderUsers()}</div>
    </div>
  );
}

export default FrontPage;
