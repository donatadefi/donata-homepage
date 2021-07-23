import React from 'react';

import donataBg from '../assets/donata-bg.png';
import donataLogo from '../assets/donata-logo.png';

import './Home.scss';

function Home() {
  return (
    <div className="Home">
      <header>
        <div className="header-flex wrapper-header">
          <div>
            <img src={donataLogo} alt="donata-logo" />
            <h1>DONATA</h1>
          </div>
          <button>Launch App</button>
        </div>
      </header>
      <section className="top">
        <div className="top-section">
          <div>
            <h1>Receive or send any ERC20</h1>
            <p>
              Donata make it easy to send and receive ERC20 token, intuitively.
            </p>
          </div>
          <div>
            <img src={donataBg} alt="donata-background" />
          </div>
        </div>
      </section>
      <section className="offer">
        <div className="wrapper-parent">
          <h1>What we offer</h1>
          <div className="offer-grid">
            <div>
              <div className="circle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-wallet"
                  width="60"
                  height="60"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="#ff4495"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M17 8v-3a1 1 0 0 0 -1 -1h-10a2 2 0 0 0 0 4h12a1 1 0 0 1 1 1v3m0 4v3a1 1 0 0 1 -1 1h-12a2 2 0 0 1 -2 -2v-12" />
                  <path d="M20 12v4h-4a2 2 0 0 1 0 -4h4" />
                </svg>
              </div>
              <h2>Decentralization</h2>
              <p>
                You don't have to login or provide any credentials to use the
                platform. Just connect your MetaMask wallet and you're good to
                go, ready to accept donation.
              </p>
            </div>
            <div>
              <div className="circle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-shield-lock"
                  width="60"
                  height="60"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="#ff4495"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M12 3a12 12 0 0 0 8.5 3a12 12 0 0 1 -8.5 15a12 12 0 0 1 -8.5 -15a12 12 0 0 0 8.5 -3" />
                  <circle cx="12" cy="11" r="1" />
                  <line x1="12" y1="12" x2="12" y2="14.5" />
                </svg>
              </div>
              <h2>Control</h2>
              <p>
                You are in control of your donation, no middleman. The donation
                will directly goes to your wallet, Donata won't charge anything.
              </p>
            </div>
            <div>
              <div className="circle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-access-point"
                  width="60"
                  height="60"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="#ff4495"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <line x1="12" y1="12" x2="12" y2="12.01" />
                  <path d="M14.828 9.172a4 4 0 0 1 0 5.656" />
                  <path d="M17.657 6.343a8 8 0 0 1 0 11.314" />
                  <path d="M9.168 14.828a4 4 0 0 1 0 -5.656" />
                  <path d="M6.337 17.657a8 8 0 0 1 0 -11.314" />
                </svg>
              </div>
              <h2>Easy</h2>
              <p>
                You don't have to setup anything, connect your wallet and you
                are ready to accept any ERC20 tokens as donation.
              </p>
            </div>
            <div>
              <div className="circle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-lock"
                  width="60"
                  height="60"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="#ff4495"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <rect x="5" y="11" width="14" height="10" rx="2" />
                  <circle cx="12" cy="16" r="1" />
                  <path d="M8 11v-4a4 4 0 0 1 8 0v4" />
                </svg>
              </div>
              <h2>Secure</h2>
              <p>
                You are the only one who can access your donation funds because
                the donation goes directly to your wallet.
              </p>
            </div>
            <div>
              <div className="circle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-key"
                  width="60"
                  height="60"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="#ff4495"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <circle cx="8" cy="15" r="4" />
                  <line x1="10.85" y1="12.15" x2="19" y2="4" />
                  <line x1="18" y1="5" x2="20" y2="7" />
                  <line x1="15" y1="8" x2="17" y2="10" />
                </svg>
              </div>
              <h2>Trustless</h2>
              <p>
                Your supporter don't need to login or provide any credentials,
                they just connect their wallet and send donation directly to
                you.
              </p>
            </div>
            <div>
              <div className="circle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-cash"
                  width="60"
                  height="60"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="#ff4495"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <rect x="7" y="9" width="14" height="10" rx="2" />
                  <circle cx="14" cy="14" r="2" />
                  <path d="M17 9v-2a2 2 0 0 0 -2 -2h-10a2 2 0 0 0 -2 2v6a2 2 0 0 0 2 2h2" />
                </svg>
              </div>
              <h2>Deflationary</h2>
              <p>
                Donata token will be used to pay for premium subscription of the
                platform. Every subscription paid will be used to buyback and
                burn the token.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="tokenomics">
        <div className="wrapper-parent">
          <h1>Tokenomics</h1>
        </div>
      </section>
    </div>
  );
}

export default Home;
