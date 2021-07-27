import React from 'react';

import './User.scss';

function User({ match }) {
  console.log(match.params.id);
  document.title = 'Donata | User';
  return (
    <div className="User">
      <p>User</p>
    </div>
  );
}

export default User;
