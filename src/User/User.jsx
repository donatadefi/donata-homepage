import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import Select from 'react-select';
import Web3 from 'web3';

import { addressTrim, deviceType } from '../helper';
import svgRender from '../svg/svgRender';
import checkLogo from '../assets/check.png';


import './User.scss';

function User({ match }) {
  document.title = 'Donata | User';
  const { ethereum } = window;
  const [user, setUser] = useState({});
  const [account, setAccount] = useState('');
  const [selectedToken, setSelectedToken] = useState('');
  const [tokenAmount, setTokenAmount] = useState('');
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    //this checks whether the account already connected or not
    if (ethereum) {
      ethereum.request({ method: 'eth_accounts' }).then((addr) => {
        if (addr.length > 0) {
          setAccount(addr[0]);
        }
      });
    }

    fetch('https://donatadefi.finance/address', {
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
        //wow, i am setting tokensList silently here
        rawTokensList.forEach((token, idx) => {
          rawTokensList[idx].value = token.address;
          rawTokensList[idx].label = token.symbol;
          rawTokensList[idx].decimals = token.decimals;
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

    //device is desktop but no mm installed
    if (!ethereum && deviceType() === 'desktop') {
      return;
    }

    //device is desktop and mm installed
    if (deviceType() === 'desktop' && ethereum) {
      const accounts = await ethereum.request({
        method: 'eth_requestAccounts',
      });
      const acc = accounts[0];
      setAccount(acc);
    }
    //device is mobile and no ethereum (still in browser)
    if (deviceType() != 'desktop' && !ethereum) {
      setOpenModal(true);
    }

    //device is mobile and inside mm
    if (deviceType() != 'desktop' && ethereum) {
      const accounts = await ethereum.request({
        method: 'eth_requestAccounts',
      });
      const acc = accounts[0];
      setAccount(acc);
    }
  };

  const sendToken = () => {
    if (!selectedToken || !tokenAmount) {
      return;
    }
    if (selectedToken.value === 'ethereum') {
      ethereum
        .request({
          method: 'eth_sendTransaction',
          params: [
            {
              from: account,
              to: user.id,
              value: parseInt(
                Web3.utils.toWei(String(tokenAmount), 'ether')
              ).toString(16),
            },
          ],
        })
        .then((txHash) => console.log(txHash))
        .catch((error) => console.error);
    } else {
      let web3 = new Web3(ethereum);
      let tokenAddress = selectedToken.value;
      let toAddress = user.id;
      let fromAddress = account;
      // Use BigNumber
      let amount = Web3.utils.toBN(tokenAmount);
      let minABI = [
        // transfer
        {
          constant: false,
          inputs: [
            {
              name: '_to',
              type: 'address',
            },
            {
              name: '_value',
              type: 'uint256',
            },
          ],
          name: 'transfer',
          outputs: [
            {
              name: '',
              type: 'bool',
            },
          ],
          type: 'function',
        },
      ];

      let decimals = web3.utils.toBN(Number(selectedToken.decimals));
      // Get ERC20 Token contract instance
      let contract = new web3.eth.Contract(minABI, tokenAddress);
      // calculate ERC20 token amount
      let value = amount.mul(web3.utils.toBN(10).pow(decimals));
      // call transfer function
      contract.methods
        .transfer(toAddress, value)
        .send({ from: fromAddress })
        .on('receipt', function (hash) {
          console.log(hash);
        });
    }
  };

  const renderSocials = () => {
    const keys = Object.keys(user.socials);
    const theDiv = keys.map((key, index)=> {
      if(user.socials[key]){
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
      
    });

    return <>{theDiv}</>
  };

  const renderUser = () => {
    if (!user.id) {
      return;
    }
    if (user.tokensList) {
    }
    

    return (
      <div className="user-wrapper">
        <div className="user-flex">
          <div>
            <img src={user.photoUrl} alt="" />
          </div>
          <div>
            <div className="title-flex">
            <h1>{user.userName}</h1>
            <img src={checkLogo} alt="verified-user" />
              
            </div>
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
                  setSelectedToken(e);
                }}
              />
            </div>
            <div>
              <p>Amount</p>
              <input
                type="number"
                placeholder="Insert the amount"
                onChange={(e) => setTokenAmount(e.target.value)}
              />
            </div>
            <div>
              <button onClick={() => sendToken()}>Send</button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="User">
      <div className="modal" style={{ display: openModal ? 'block' : 'none' }}>
        <div>
          <a
            href={`https://metamask.app.link/dapp/donata-homepage.web.app/user/${match.params.id}`}
            className="btn"
          >
            Open MetaMask
          </a>
          <a
            href="https://metamask.io"
            target="_blank"
            rel="noopener noreferrer"
          >
            Install MetaMask
          </a>
          <p onClick={() => setOpenModal(false)}>close</p>
        </div>
      </div>
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
