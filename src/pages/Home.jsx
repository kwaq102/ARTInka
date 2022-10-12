import React from 'react';

import AboutInHomePage from '../components/AboutInHomePage';

const Home = () => {
    return ( 
        <>
            <div className="home-page">
                
                <AboutInHomePage/>
                <secion>
                    WItaj na naszej stronie albo zakłądka o mnie
                </secion>
                <section>
                    COś o eventach
                </section>
                <section>
                    o justnie
                </section>
            </div>
        </>
     );
}
 
export default Home;