
//Header.jsx

import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom'; // Import Link and useLocation
import GalleryFilter from './GalleryFilter'; // Import GalleryFilter component
import './Radio.css';
import classnames from "classnames";


const Header = ({ categories, selectedCategory, handleFilterChange, handleAboutChange, selectedAboutCategory }) => {
  const location = useLocation(); // Get the current location
  const [isHidden, setIsHidden] = useState(true);
  const [headerTestHeight, setHeaderTestHeight] = useState(0);

  const updateHeaderHeight = () => {
    const headerTestElement = document.querySelector('.headerTest');
    if (headerTestElement) {
      setHeaderTestHeight(headerTestElement.clientHeight);
    }
  };
  
  const toggleHeader = () => {
    setIsHidden(!isHidden);
     updateHeaderHeight();
    console.log(headerTestHeight);
  };

  function handleScrollChange() {
    if (window.scrollY !== 0) {
      setIsHidden(true);
    }
  }

  useEffect(() => {
    updateHeaderHeight();
      // Listen for resize events to update the height
      window.addEventListener('resize', updateHeaderHeight);

    window.addEventListener("scroll", handleScrollChange);
    return () => {
      window.removeEventListener("scroll", handleScrollChange);
      window.removeEventListener('resize', updateHeaderHeight);
    };
  }, []); // only add event listener on mount & clean on unmount

  const headerStyle = {
    //  marginTop: !isHidden ? '0px' : null,
      // top: isHidden ? 0 :  headerTestHeight 
      transform: `translateY(${isHidden ? 0 : headerTestHeight}px)`,
      // backgroundColor: !isHidden && window.scrollY === 0 ? 'red' : 'blue',
      marginTop: !isHidden && window.scrollY === 0 ? `0px` : null
  };

    const testStyle = {
      // marginTop: isHidden && window.scrollY === 0 ? 0 : null

  };
  return (
    // <div className="background-container" style={headerStyle}>
    <header style={headerStyle}        
    className={classnames("header", {
        "hidden": isHidden
    })}>
            <div       
            className={classnames("headerTest", {
              "header-hidden": isHidden
            })}
      >
      <div className={`headerTop`}>
      {/* <p>header top</p> */}
        {/* <div className='containertest'> */}
        {/* <p>containertest</p> */}
          <div 
              className={classnames("about-section", {
              "about-hidden": isHidden
            }) }>
          <p>about-section</p>
          <p>information about Lydia Graveline.</p>
          <p>information about Lydia Graveline.</p>
          <p>information about Lydia Graveline.</p>
          <p>Contact</p>
          <p>Contact</p>
          {/* <p>Contact</p> */}
          </div>
        {/* </div> */}
      </div>
      </div>
      
       {/* <p>header</p> */}
      <div className='headerBottom '  >

      <div className="header-left">
        <div id="logo">
        <Link to="/">Lydia Graveline</Link>
        </div>
        <div id="category">
        {location.pathname === '/' && ( // Conditionally render the radio buttons only when the path is '/'
        <GalleryFilter
         categories={categories}
         selectedCategory={selectedCategory}
         onChange={handleFilterChange}
        />
      )}
      {/* <button onClick={toggleHeader}>
        {isHidden ? "Show Header" : "Hide Header"}
      </button> */}
      </div>
      </div>
      <div className="header-right">
      <Link to="#" onClick={() => {toggleHeader(); updateHeaderHeight();}}>About</Link>
      </div>  
      </div>

        {/* {location.pathname === '/about' && ( // Conditionally render the radio buttons only when the path is '/'=
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
      )} */}



      {/* <div className="header-right">
        <Link to="/about">About</Link>
      </div> */}



    </header>
    //  </div>
  );
};

export default Header;
