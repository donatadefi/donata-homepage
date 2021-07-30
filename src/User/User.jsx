import React, { useEffect, useState } from 'react';

import svgRender from '../svg/svgRender';

import './User.scss';

function User({ match }) {
  document.title = 'Donata | User';
  const [user, setUser] = useState({});
  useEffect(() => {
    fetch('http://localhost:5000/address', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        address: match.params.id,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        setUser(data.user[0]);
      });
  }, [match.params.id]);

  const renderUser = () => {
    if (!user.id) {
      return;
    }
    if (user.tokensList) {
    }
    const renderSocials = () => {
      for (const key in user.socials) {
        if (user.socials[key]) {
          return (
            <div key={key}>
              <a
                href={user.socials[key]}
                target="_blank"
                rel="noopener noreferrer"
              >
                {svgRender[`${key}`]()}
              </a>
            </div>
          );
        }
      }
    };

    return (
      <div className="user-wrapper">
        <div className="user-flex">
          <div>
            <img src={user.photoUrl} alt="" />
          </div>
          <div>
            <h1>{user.userName}</h1>
            <p className="desc">{user.description}</p>
            <a
              href={`https://etherscan.io/address/${user.id}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              {user.id}
            </a>
          </div>
        </div>
        <div className="user-socmed">{renderSocials()}</div>

        <div className="token-send">
          <h2>Show your love, Support {user.userName}</h2>
          <p>Select token to send</p>
          <select name="" id="">
            <option value="eth">Ethereum</option>
            {user.tokensList &&
              user.tokensList.map((token) => {
                return (
                  <option value="" key={token.address}>
                    {token.name}
                  </option>
                );
              })}
          </select>
        </div>
      </div>
    );
  };
  return <div className="User">{renderUser()}</div>;
}

export default User;
