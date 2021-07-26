import React from 'react';

import donataLogo from '../assets/donata-logo.png';

import './FrontPage.scss';
function FrontPage() {
  document.title = 'Donata | Front Page';
  return (
    <div className="FrontPage">
      <header>
        <div>
          <a href="/" target="_blank">
            <div>
              <img src={donataLogo} alt="donata-logo" />
              <h1>DONATA</h1>
            </div>
          </a>
        </div>
        <div className="input-div">
          <input placeholder="Search wallet address" />
        </div>
      </header>
    </div>
  );
}

export default FrontPage;
