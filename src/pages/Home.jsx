import React from 'react';

import AboutInHomePage from '../components/AboutInHomePage';
import Services from '../components/Services';
import Advantages from '../components/Advantages';
import Certificates from '../components/Certificates';

const Home = () => {
    return ( 
        <>
            <div className="home-page">
                
                <AboutInHomePage/>
                <Services />
                <Advantages />
                <Certificates />

            </div>
        </>
     );
}
 
export default Home;