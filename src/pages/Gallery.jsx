import React, {useState} from 'react';

import {photos} from '../data/gallery.js';

import Popup from '../components/Popup';

// import '../styles/Modal.css'
import '../styles/Gallery.css'

const Gallery = () => {

    const [clickedImg, setClickedImg] = useState(null);
    const [currentIndex, setCurrentIndex] = useState(null);

    const handelClick = (el,i) => { 
        setCurrentIndex(i);
        setClickedImg(el.linkBig);
    };

    const hanleRotationRight = () => {
        const totalLength = photos.length;

        if(currentIndex + 1 >= totalLength) {
            setCurrentIndex(0);
            const newUrl = photos[0].linkBig;
            setClickedImg(newUrl);
            return;
        }

        const newIndex = currentIndex + 1;
        const newUrl = photos.filter(photo => photos.indexOf(photo) === newIndex);
        const newItem = newUrl[0].linkBig;
        setClickedImg(newItem);
        setCurrentIndex(newIndex);
    };

    const hanleRotationLeft = () => {
        const totalLength = photos.length;

        if(currentIndex === 0) {
            setCurrentIndex(totalLength - 1);
            const newUrl = photos[totalLength - 1].linkBig;
            setClickedImg(newUrl);
            return;
        }
        const newIndex = currentIndex - 1;
        const newUrl = photos.filter(photo => photos.indexOf(photo) === newIndex);

        const newItem = newUrl[0].linkBig;
        setClickedImg(newItem);
        setCurrentIndex(newIndex);
    }

    const showPhotos = photos.map((photo, i)=>(
        <div key={i} className="wrapper-img">
            <img 
            src={photo.link} 
            alt={photo.text} 
            onClick={()=>handelClick(photo, i)}
            />
        </div>
    ));

    console.log(clickedImg);


    return ( 
        <div className="page-gallery">
           <h2>Galeria</h2>
            <div className='gallery'>
                {showPhotos}
                {clickedImg && (
                    <Popup 
                    clickedImg={clickedImg} 
                    hanleRotationRight={hanleRotationRight} 
                    hanleRotationLeft={hanleRotationLeft}
                    setClickedImg={setClickedImg}
                    />
                )}
            </div>
        </div>
     );
}
 
export default Gallery;