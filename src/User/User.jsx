import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import Select from 'react-select';

import { addressTrim } from '../helper';
import svgRender from '../svg/svgRender';

import './User.scss';

function User({ match }) {
  document.title = 'Donata | User';
  const { ethereum } = window;
  const [user, setUser] = useState({});
  const [account, setAccount] = useState('');
  useEffect(() => {
    //this checks whether the account already connected or not
    ethereum.request({ method: 'eth_accounts' }).then((addr) => {
      if (addr.length > 0) {
        setAccount(addr[0]);
      }
    });
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
        const rawToken = data.user[0];
        const rawTokensList = data.user[0].tokensList;
        rawTokensList.forEach((token, idx) => {
          rawTokensList[idx].value = token.address;
          rawTokensList[idx].label = token.name;
        });
        rawTokensList.unshift({
          value: 'ethereum',
          label: 'ETHEREUM',
        });
        rawToken.tokensList = rawTokensList;
        setUser(rawToken);
      });
  }, [match.params.id]);

  const connectWallet = async () => {
    if (account) {
      return;
    }
    const accounts = await ethereum.request({
      method: 'eth_requestAccounts',
    });
    const acc = accounts[0];
    setAccount(acc);
  };

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
          <h2>Show your love, Support {user.userName}!</h2>

          <div className="send-wrapper">
            <div>
              <p>Select token to send</p>
              <Select
                options={user.tokensList}
                onChange={(e) => {
                  console.log(e);
                }}
              />
            </div>
            <div>
              <p>Amount</p>
              <input type="number" placeholder="Insert the amount" />
            </div>
            <div>
              <button>Send</button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="User">
      <div className="head-section">
        <NavLink to="/front-page">
          <button>Front Page</button>
        </NavLink>
        <div>
          <button> Go to App</button>
          <button onClick={connectWallet}>
            {account ? addressTrim(account) : 'Connect Wallet'}
          </button>
        </div>
      </div>
      {renderUser()}
    </div>
  );
}

export default User;
