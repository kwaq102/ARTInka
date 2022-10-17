import React from 'react';

import AboutInHomePage from '../components/AboutInHomePage';
import Services from '../components/Services';
import Advantages from '../components/Advantages';

const Home = () => {
    return ( 
        <>
            <div className="home-page">
                
                <AboutInHomePage/>
                <Services />
                <Advantages />

            </div>
        </>
     );
}
 
export default Home;