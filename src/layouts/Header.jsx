import React from 'react';

import { photosOnSlider } from '../data/data';

import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import '../styles/Header.css'

const Header = () => {
    const settings = {
        autoplay: true,
        autoplaySpeed: 10000,
        speed: 3000,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1
      };

    const photos = photosOnSlider.map(photo => (
        <img class="img-slider" src={photo.photo} alt= {photo.title}/>
    ))

    return ( 
        <div className="header">
            <h1>
                <strong>Artystyczne malowanie twarzy</strong>
                <strong>ARTinka - Justyna Baran</strong>
            </h1>
            <Slider {...settings}>
                {photos}
           </Slider>
        </div>
     );
}
 
export default Header;