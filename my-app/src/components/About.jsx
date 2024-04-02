// About.jsx
import React, { useEffect, useState } from 'react';

const About = ({ selectedCategory }) => {
  // Define state variable to hold the text to display
  const [aboutText, setAboutText] = useState('');

  // Set the aboutText based on the selected category
  useEffect(() => {
    if (selectedCategory === 'Bio') {
      setAboutText('This is the Bio text.');
    } else if (selectedCategory === 'Contact') {
      setAboutText('This is the Contact text.');
    }
  }, [selectedCategory]); // Run this effect whenever selectedCategory changes

  return (
    <div>
      <h2>About Me</h2>
      <p>{aboutText}</p>
    </div>
  );
};

export default About;

