import React from 'react';
import { NavLink } from 'react-router-dom';

import donataBg from '../assets/donata-bg.png';
import donataLogo from '../assets/donata-logo.png';
import tokenomics from '../assets/tokenomics.png';

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
          <a
            href="https://app.donata.social"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button>Launch App</button>
          </a>
        </div>
      </header>
      <section className="top">
        <div className="top-section">
          <div>
            <h1>Receive or send any ERC20</h1>
            <p>
              DONATA make it easy to send and receive ERC20 token donation. It's efficient and intuitive.
            </p>
            <NavLink to="/front-page" target="_blank" className="to-front">
              Front Page
            </NavLink>
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
                go.
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
              <h2>Ease of Use</h2>
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
              <h2>Deflationary Token</h2>
              <p>
                Donata token (DNTA) holding will be needed for certain platform features. Every fees paid to get verified checkmark will be used to buyback and burn DNTA.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="tokenomics">
        <div className="wrapper-parent">
          <div className="tokenomics-grid">
            <div className="tokenomics-img">
              <div>
                <h2>1,000,000 Max Supply</h2>
                <p>Fixed supply, no more can be minted.</p>
              </div>

              <img src={tokenomics} alt="tokenomics-illustration" />
            </div>
            <div>
              <h1>Tokenomics</h1>
              <div className="tokenomics-list">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-circle-dashed"
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
                  <path d="M8.56 3.69a9 9 0 0 0 -2.92 1.95" />
                  <path d="M3.69 8.56a9 9 0 0 0 -.69 3.44" />
                  <path d="M3.69 15.44a9 9 0 0 0 1.95 2.92" />
                  <path d="M8.56 20.31a9 9 0 0 0 3.44 .69" />
                  <path d="M15.44 20.31a9 9 0 0 0 2.92 -1.95" />
                  <path d="M20.31 15.44a9 9 0 0 0 .69 -3.44" />
                  <path d="M20.31 8.56a9 9 0 0 0 -1.95 -2.92" />
                  <path d="M15.44 3.69a9 9 0 0 0 -3.44 -.69" />
                </svg>
                <p>20,000 team allocations (2%)</p>
              </div>
              <div className="tokenomics-list">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-circle-dashed"
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
                  <path d="M8.56 3.69a9 9 0 0 0 -2.92 1.95" />
                  <path d="M3.69 8.56a9 9 0 0 0 -.69 3.44" />
                  <path d="M3.69 15.44a9 9 0 0 0 1.95 2.92" />
                  <path d="M8.56 20.31a9 9 0 0 0 3.44 .69" />
                  <path d="M15.44 20.31a9 9 0 0 0 2.92 -1.95" />
                  <path d="M20.31 15.44a9 9 0 0 0 .69 -3.44" />
                  <path d="M20.31 8.56a9 9 0 0 0 -1.95 -2.92" />
                  <path d="M15.44 3.69a9 9 0 0 0 -3.44 -.69" />
                </svg>
                <p>490,000 presale (49%)</p>
              </div>
              <div className="tokenomics-list">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-circle-dashed"
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
                  <path d="M8.56 3.69a9 9 0 0 0 -2.92 1.95" />
                  <path d="M3.69 8.56a9 9 0 0 0 -.69 3.44" />
                  <path d="M3.69 15.44a9 9 0 0 0 1.95 2.92" />
                  <path d="M8.56 20.31a9 9 0 0 0 3.44 .69" />
                  <path d="M15.44 20.31a9 9 0 0 0 2.92 -1.95" />
                  <path d="M20.31 15.44a9 9 0 0 0 .69 -3.44" />
                  <path d="M20.31 8.56a9 9 0 0 0 -1.95 -2.92" />
                  <path d="M15.44 3.69a9 9 0 0 0 -3.44 -.69" />
                </svg>
                <p>490,000 uniswap liquidity (49%)</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="platform-user">
        <div className="wrapper-parent">
          <h3>Who can use the platorfm?</h3>
          <div className="flex-template">
            <div>
              <h2>Anyone can use Donata Platform</h2>
            </div>
            <p>
              No matter who you are, Donata provides you an easy to use,
              intiuitive way of sending and receiving any ERC20 token donation.
            </p>
          </div>
          <div className="user-box-parent">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-confetti"
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
                <path d="M4 5h2" />
                <path d="M5 4v2" />
                <path d="M11.5 4l-.5 2" />
                <path d="M18 5h2" />
                <path d="M19 4v2" />
                <path d="M15 9l-1 1" />
                <path d="M18 13l2 -.5" />
                <path d="M18 19h2" />
                <path d="M19 18v2" />
                <path d="M14 16.518l-6.518 -6.518l-4.39 9.58a1.003 1.003 0 0 0 1.329 1.329l9.579 -4.39z" />
              </svg>
              <p>Streamer</p>
            </div>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-brand-tiktok"
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
                <path d="M9 12a4 4 0 1 0 4 4v-12a5 5 0 0 0 5 5" />
              </svg>
              <p>Influencer</p>
            </div>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-affiliate"
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
                <path d="M5.931 6.936l1.275 4.249m5.607 5.609l4.251 1.275" />
                <path d="M11.683 12.317l5.759 -5.759" />
                <circle cx="5.5" cy="5.5" r="1.5" />
                <circle cx="18.5" cy="5.5" r="1.5" />
                <circle cx="18.5" cy="18.5" r="1.5" />
                <circle cx="8.5" cy="15.5" r="4.5" />
              </svg>
              <p>Organization</p>
            </div>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-currency-cent"
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
                <path d="M16.007 7.54a5.965 5.965 0 0 0 -4.008 -1.54a5.996 5.996 0 0 0 -5.992 6c0 3.314 2.682 6 5.992 6a5.965 5.965 0 0 0 4.004 -1.536" />
                <path d="M12 20v-2" />
                <path d="M12 6v-2" />
              </svg>
              <p>Crypto Project</p>
            </div>
          </div>
        </div>
      </section>
      <footer>
        <div className="wrapper-parent">
          <a
            href="https://github.com/donatadefi"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-brand-github"
              width="40"
              height="40"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="#ff4495"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" />
            </svg>
          </a>
          <a
            href="https://t.me/donata_community"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-brand-telegram"
              width="40"
              height="40"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="#ff4495"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M15 10l-4 4l6 6l4 -16l-18 7l4 2l2 6l3 -4" />
            </svg>
          </a>
        </div>
      </footer>
    </div>
  );
}

export default Home;
