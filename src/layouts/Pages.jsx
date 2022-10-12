import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Animations from '../pages/Animations';
import Gallery from '../pages/Gallery';
import PriceList from '../pages/PriceList';
import Contact from '../pages/Contact';
import Home from '../pages/Home';



const Pages = () => {
    return ( 
        <>
            <Routes>

                <Route path='/' element={<Home />} />
                <Route path='/stanowiska-animacyjne' element={<Animations/>} />
                <Route path='/galeria' element={<Gallery/>} />
                <Route path='/cennik' element={<PriceList/>} />
                <Route path='/kontakt' element={<Contact/>} />

            </Routes>
        </>
     );
}
 
export default Pages;