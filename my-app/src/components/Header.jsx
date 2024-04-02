
//Header.jsx

import React from 'react';
import { Link, useLocation } from 'react-router-dom'; // Import Link and useLocation
import GalleryFilter from './GalleryFilter'; // Import GalleryFilter component
import './Radio.css';


const Header = ({ categories, selectedCategory, handleFilterChange, handleAboutChange, selectedAboutCategory }) => {
  const location = useLocation(); // Get the current location

  return (
    <header className="header">
      <div className="header-left">
        <Link to="/">Lydia Graveline</Link>
      </div>
      {location.pathname === '/' && ( // Conditionally render the radio buttons only when the path is '/'
        <div className="header-center">
        <GalleryFilter
         categories={categories}
         selectedCategory={selectedCategory}
         onChange={handleFilterChange}
      />
        </div>
      )}
        {location.pathname === '/about' && ( // Conditionally render the radio buttons only when the path is '/'=
          <div className='radioContainer'>
          <ul>
          <li>
          <label className="radio-button">
          <input type="radio" name="About" value="Bip" checked={selectedAboutCategory === 'Bio'} onChange={() => handleAboutChange('Bio')}></input>
          <div className="radio-circle"></div>
          <span>Bio</span>
          </label>
          </li>
 
          <li>
          <label className="radio-button">
          <input type="radio" name="About" value="Contact"checked={selectedAboutCategory === 'Contact'} onChange={() => handleAboutChange('Contact')}></input>
          <div className="radio-circle"></div>
          <span>Contact</span>
          </label>
          </li>
          </ul>
         </div>
      )}
      <div className="header-right">
        <Link to="/about">About</Link>
      </div>
    </header>
  );
};

export default Header;
