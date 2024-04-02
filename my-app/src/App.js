import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import  Gallery  from './components/Gallery.jsx';
import GalleryFilter from './components/GalleryFilter.jsx';
import  Header from './components/Header.jsx';
import About from './components/About.jsx';
import './App.css';

import { GalleryData as originalGalleryData } from './GalleryData';

const sortedGalleryData = () => {
    return [...originalGalleryData].sort((a, b) => b.year - a.year);
};


function App() {
  const [galleryData, setGalleryData] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [collection, setCollection] = useState([]);

  useEffect(() => {
    const sortedData = sortedGalleryData();
    setGalleryData(sortedData);
    setCollection([...new Set(sortedData.map((item) => item.category))]);
  }, []);

  const sortedGalleryData = () => {
    return [...originalGalleryData].sort((a, b) => b.year - a.year);
  };

  const handleFilterChange = (category) => {
    setSelectedCategory(category);
    // Filter gallery data based on the selected category
    if (category === 'all') {
      const sortedData = sortedGalleryData();
      setGalleryData(sortedData);
    } else {
      const filteredData = sortedGalleryData().filter(item => item.category === category);
      setGalleryData(filteredData);
    }
  };

  return (
    <Router>
    <Header 
      categories={['all', ...collection]}
      selectedCategory={selectedCategory}
      handleFilterChange={handleFilterChange}
    />
    
    <Routes>

      <Route path="/" element={<Gallery galleryData={galleryData} collection={collection} />} /> {/* Default route to Gallery */}
      <Route path='/about' element={<About />} />
    </Routes>
    </Router>

  );
}

export default App;
