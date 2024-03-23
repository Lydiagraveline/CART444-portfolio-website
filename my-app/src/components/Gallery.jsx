import React from 'react'
import { useEffect, useState } from 'react';

//import the data and sort it by year
import { GalleryData as originalGalleryData  } from '../GalleryData'; 
const sortedGalleryData = () => {
    return [...originalGalleryData].sort((a, b) => b.year - a.year);
};
export const GalleryData = sortedGalleryData();

//the gallery
const Gallery = () => {
    const [data, setData] = useState([]);
    const [collection, setCollection] = useState([]);
  
    useEffect(() => {
        setData(GalleryData);
       
        //set categories
        setCollection([...new Set(GalleryData.map((item) => item.category))]);
    }, []);

    // filter images by category when clicked
    const gallery_filter = (itemData) => {
        const filterData = GalleryData.filter((item)=> item.category === itemData)
        setData(filterData);
    }
    
    const handleImageClick = (item) => {
        console.log('Clicked Image:', item.year);
    };
  
    return (
      <div className='galleryWrapper'>
        <div className='filterItem'>
        <ul>
            <li><button onClick={()=>setData(GalleryData)}>all</button></li>
            {
             collection.map((item, index)=> <li key={index}><button onClick={()=>{gallery_filter(item)}}>{item}</button></li>)
            }
        </ul>
        </div>
        <div className='galleryContainer' >
        {
                data.map((item, index) => 
                <div className='galleryItem' key={index} onClick={() => handleImageClick(item)}>
                    <img src={`../images/${item.image}`}  />
                </div>)
        }
        </div>  
      </div>
    );
  };

export default Gallery;
