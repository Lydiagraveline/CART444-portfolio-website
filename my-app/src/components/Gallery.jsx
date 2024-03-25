import React from 'react'
import { useEffect, useState } from 'react';
// import Projects from './Projects';

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
    const [clickedImage, setClickedImage] = useState(null);
  
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
        // window.open(`/projects/bed`, '_blank');
        // Check if the clicked image belongs to the "analog" category
        if (item.category === "analog") {
             setClickedImage(item);
            console.log(item.category);
        } else {
             setClickedImage(null); // Reset clickedImage if clicked image is not from "analog" category
        }
    };

    const closeModal = () => {
        setClickedImage(null);
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
        {clickedImage && clickedImage.category === "analog" && (
                <div className="modalBackground" onClick={closeModal}>
                    <div className="modalContent">
                        <img src={`../images/${clickedImage.image}`} alt={clickedImage.title} />
                        <div className="artPieceInfo">
                            <h2>{clickedImage.title}</h2>
                                <p>{clickedImage.year}</p>
                                <p>{clickedImage.medium}</p>
                                <p>{clickedImage.dimensions}</p>
                                <p>{clickedImage.description}</p>
                         </div>
                        <button onClick={closeModal}>Close</button>
                    </div>
                </div>
            )}
      </div>
    );
  };

export default Gallery;
