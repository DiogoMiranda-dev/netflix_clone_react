import React from 'react';
import './Header.css';

export default ({ black }) => {
  return (
    <header className={black ? 'black' : ''}>
      <div className="header--logo">
        <img src="http://pngimg.com/uploads/netflix/netflix_PNG25.png" />
      </div>
      <div className="header--user">
        <img src="https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png" />
      </div>
    </header>
  );
};
