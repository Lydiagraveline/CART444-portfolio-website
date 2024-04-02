import React, { useEffect, useState } from 'react';
import GalleryFilter from './GalleryFilter';

const Gallery = ({ galleryData,  collection, handleFilterChange,  selectedCategory }) => {
//   const [data, setData] = useState([]);
//   const [collection, setCollection] = useState([]);
  const [clickedImage, setClickedImage] = useState(null);
//   const [selectedCategory, setSelectedCategory] = useState('all');

//   useEffect(() => {
//     setData(galleryData);
//     setCollection([...new Set(galleryData.map((item) => item.category))]);
//   }, [galleryData]);

//   const handleFilterChange = (category) => {
//     setSelectedCategory(category);
//     if (category === 'all') {
//       setData(galleryData);
//     } else {
//       const filteredData = galleryData.filter(item => item.category === category);
//       setData(filteredData);
//     }
//   };

  const handleImageClick = (item) => {
    setClickedImage(item);
    console.log(item.category);
  };

  const closeModal = () => {
    setClickedImage(null);
  };

//   const photos = galleryData.map(item => ({
//     src: `../images/${item.image}`,
//   }));

  return (
    <div className='gallery'>
        {/* <GalleryFilter
        categories={['all', ...collection]}
         selectedCategory={selectedCategory}
         onChange={handleFilterChange}
      /> */}
      <div className='container'>
        {galleryData.map((item, index) =>
          <div className='galleryItem' key={index} onClick={() => handleImageClick(item)}>
            <img src={`../images/${item.image}`} />
            <p>{item.medium}</p>
          </div>
        )}
      </div>

       {/* pop-up */}
         {clickedImage && (
                <div className="modalBackground" onClick={closeModal}>
                    <div className="modalContent">
                        <img src={`../images/${clickedImage.image}`} alt={clickedImage.title} />
                        <div className="artPieceInfo">
                            <h2>{clickedImage.title}</h2>
                              {/* button for external project link, if it exists */}
                         {clickedImage.link && (
                         <a href={clickedImage.link} target="_blank" rel="noopener noreferrer" className="projectLinkButton">View Project</a>
                        )}
                                <p>{clickedImage.year}</p>
                                <p>{clickedImage.medium}</p>
                                <p>{clickedImage.dimensions}</p>
                                <p>{clickedImage.description}</p>
                         </div>
                        <button onClick={closeModal}>Close</button>
                    </div>
                </div>
            )}
            {/* pop-up */}
      
    </div>
  );
};

export default Gallery;


// import React from 'react'
// import { useEffect, useState } from 'react';

// //import the data and sort it by year
// import { GalleryData as originalGalleryData  } from '../GalleryData'; 
// import GalleryFilter from './GalleryFilter';
// const sortedGalleryData = () => {
//     return [...originalGalleryData].sort((a, b) => b.year - a.year);
// };
// export const GalleryData = sortedGalleryData();

// //the gallery
// const Gallery = ({ galleryData }) => {
//     const [data, setData] = useState([]);
//     const [collection, setCollection] = useState([]);
//     const [clickedImage, setClickedImage] = useState(null);
//     const [selectedCategory, setSelectedCategory] = useState('all'); // Add selectedCategory state variable

//     useEffect(() => {
//         setData(GalleryData);
//         //set categories
//         setCollection([...new Set(GalleryData.map((item) => item.category))]);
//     }, []);

//     // radio group category filter
//     const gallery_filter = (category) => {
//         setSelectedCategory(category);
//         if (category === 'all') {
//             setData(sortedGalleryData());
//         } else {
//             const filteredData = GalleryData.filter(item => item.category === category);
//             setData(filteredData);
//         }
//     };
    
//     const handleImageClick = (item) => {

//             setClickedImage(item);
//             console.log(item.category);
//     };

//     const closeModal = () => {
//         setClickedImage(null);
//     };

//     const photos = GalleryData.map(item => ({
//         src: `../images/${item.image}`, // Assuming your images are stored in the images folder
//         // width: item.width, // Width of the image
//         // height: item.height, // Height of the image
//       }));
  
//     return (
//       <div className='gallery'>
//         <div >
//         <div className='radioContainer'>
      
//                     <ul>
//                     <li>
//                         <label className="radio-button">
//                             <input
//                                 type="radio"
//                                 value="all"
//                                 checked={selectedCategory === 'all'}
//                                 onChange={() => gallery_filter('all')}
//                             />
//                            <div className="radio-circle"></div>
//                            <span> All </span>
//                         </label>
//                     </li>
//                     {collection.map((item, index) => (
//                         <li key={index}>
//                             <label className="radio-button">
//                                 <input
//                                     type="radio"
//                                     value={item}
//                                     checked={selectedCategory === item}
//                                     onChange={() => gallery_filter(item)}
//                                 />
//                                 <div className="radio-circle"></div>
//                                 <span> {item} </span>
//                             </label>
//                         </li>
//                     ))}
//                 </ul>
//         </div>
//         </div>

//         <div className='container' >
//         {
//         data.map((item, index) =>       
//         <div className='galleryItem' key={index} onClick={() => handleImageClick(item)}>
//         <img src={`../images/${item.image}`}  />
//         <p>{item.medium}</p>
//         </div>
//         )
//         }
//         </div>  

//         {/* pop-up */}
//         {clickedImage && (
//                 <div className="modalBackground" onClick={closeModal}>
//                     <div className="modalContent">
//                         <img src={`../images/${clickedImage.image}`} alt={clickedImage.title} />
//                         <div className="artPieceInfo">
//                             <h2>{clickedImage.title}</h2>
//                               {/* button for external project link, if it exists */}
//                          {clickedImage.link && (
//                          <a href={clickedImage.link} target="_blank" rel="noopener noreferrer" className="projectLinkButton">View Project</a>
//                         )}
//                                 <p>{clickedImage.year}</p>
//                                 <p>{clickedImage.medium}</p>
//                                 <p>{clickedImage.dimensions}</p>
//                                 <p>{clickedImage.description}</p>
//                          </div>
//                         <button onClick={closeModal}>Close</button>
//                     </div>
//                 </div>
//             )}
//             {/* pop-up */}
//       </div>
//     );
//   };

// export default Gallery;
