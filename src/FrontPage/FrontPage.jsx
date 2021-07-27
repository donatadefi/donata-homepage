import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

import { addressTrim, descTrim } from '../helper';
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

          <NavLink to="/" className="user-name">
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
            <input placeholder="Search wallet address" />
          </div>
        </div>
      </header>

      <div className="users">
        {renderUsers()}
        <div>
          <img
            src="https://www.planetbuddies.com/media/catalog/product/cache/6c07725d11cf11164242a71cef72688e/p/e/pepper-the-penguin-speaker.jpg"
            alt=""
          />
          <div className="desc-wrapper">
            <p className="desc">
              {descTrim(
                'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet, explicabo ab distinctio hic unde amet vel excepturi ullam quasi dolore porro asperiores quis minus exercitationem nobis reiciendis repudiandae deleniti. Omnis neque explicabo officia quasi magnam qui, officiis sint fugiat id doloremque inventore maxime modi aspernatur similique cumque amet eligendi eius.'
              )}
            </p>
            <p>{addressTrim('0x3457ysuys74hfy746yyusi0oslpG7uYkisdujsjd89')}</p>
          </div>

          <NavLink to="/" className="user-name">
            {' '}
            <p>Donata Project</p>
          </NavLink>
        </div>
        <div>
          <img
            src="https://graphicriver.img.customer.envatousercontent.com/files/312723276/gr.jpg?auto=compress%2Cformat&q=80&fit=crop&crop=top&max-h=8000&max-w=590&s=a090fc89d2a502b1bc04e5acef2711b2"
            alt=""
          />
          <div className="desc-wrapper">
            <p className="desc">
              {descTrim(
                'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet, explicabo ab distinctio hic unde amet vel excepturi ullam quasi dolore porro asperiores quis minus exercitationem nobis reiciendis repudiandae deleniti. Omnis neque explicabo officia quasi magnam qui, officiis sint fugiat id doloremque inventore maxime modi aspernatur similique cumque amet eligendi eius.'
              )}
            </p>
            <p>{addressTrim('0x3457ysuys74hfy746yyusi0oslpG7uYkisdujsjd89')}</p>
          </div>

          <NavLink to="/" className="user-name">
            {' '}
            <p>Donata Project</p>
          </NavLink>
        </div>
        <div>
          <img
            src="https://graphicriver.img.customer.envatousercontent.com/files/312723276/gr.jpg?auto=compress%2Cformat&q=80&fit=crop&crop=top&max-h=8000&max-w=590&s=a090fc89d2a502b1bc04e5acef2711b2"
            alt=""
          />
          <div className="desc-wrapper">
            <p className="desc">
              {descTrim(
                'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet, explicabo ab distinctio hic unde amet vel excepturi ullam quasi dolore porro asperiores quis minus exercitationem nobis reiciendis repudiandae deleniti. Omnis neque explicabo officia quasi magnam qui, officiis sint fugiat id doloremque inventore maxime modi aspernatur similique cumque amet eligendi eius.'
              )}
            </p>
            <p>{addressTrim('0x3457ysuys74hfy746yyusi0oslpG7uYkisdujsjd89')}</p>
          </div>

          <NavLink to="/" className="user-name">
            {' '}
            <p>Donata Project</p>
          </NavLink>
        </div>
        <div>
          <img
            src="https://graphicriver.img.customer.envatousercontent.com/files/312723276/gr.jpg?auto=compress%2Cformat&q=80&fit=crop&crop=top&max-h=8000&max-w=590&s=a090fc89d2a502b1bc04e5acef2711b2"
            alt=""
          />
          <div className="desc-wrapper">
            <p className="desc">
              {descTrim(
                'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet, explicabo ab distinctio hic unde amet vel excepturi ullam quasi dolore porro asperiores quis minus exercitationem nobis reiciendis repudiandae deleniti. Omnis neque explicabo officia quasi magnam qui, officiis sint fugiat id doloremque inventore maxime modi aspernatur similique cumque amet eligendi eius.'
              )}
            </p>
            <p>{addressTrim('0x3457ysuys74hfy746yyusi0oslpG7uYkisdujsjd89')}</p>
          </div>

          <NavLink to="/" className="user-name">
            {' '}
            <p>Donata Project</p>
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default FrontPage;
