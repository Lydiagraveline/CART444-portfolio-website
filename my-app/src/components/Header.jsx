import React from 'react';
import { Link, useLocation } from 'react-router-dom'; // Import Link and useLocation
import GalleryFilter from './GalleryFilter'; // Import GalleryFilter component

const Header = ({ categories, selectedCategory, handleFilterChange }) => {
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
      <div className="header-right">
        <Link to="/about">About</Link>
      </div>
    </header>
  );
};

export default Header;




// import React, { useEffect, useRef } from 'react';

// const Header = () => {
//   const headerRef = useRef(null);

//   useEffect(() => {
//     const updateScaling = () => {
//       const headerWidth = headerRef.current.offsetWidth;
//       const h1 = headerRef.current.querySelector('h1');
//       const h1Width = h1.offsetWidth;
//       const scaleX = headerWidth / h1Width;
//       h1.style.transform = 'scaleX(' + scaleX + ')';
//     };

//     updateScaling(); // Call the function initially

//     const handleResize = () => {
//       updateScaling(); // Call the function whenever the window is resized
//     };

//     window.addEventListener('resize', handleResize);

//     // Clean up the event listener when the component unmounts
//     return () => {
//       window.removeEventListener('resize', handleResize);
//     };
//   }, []); // Empty dependency array to run the effect only once

//   return (
//     <header ref={headerRef}>
//       <h1 className="stretch">Lydia Graveline</h1>
//     </header>
//   );
// };

// export default Header;