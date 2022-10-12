import React from 'react';

import justyna from '../imgs/justyna.jpg';
import justyna2 from '../imgs/justyna2.jpg';
import justyna3 from '../imgs/justyna3.jpg';

import '../styles/AboutInHomePage.css'

const AboutInHomePage = () => {
    return ( 
        <section className="about-in-home-page">
            <div className="wrapper-about-in-home-page">
                <div className="content-about-in-home-page">
                    <h2>Witaj!</h2>
                    <p>
                    <span>Mam na imię Justyna, dla znajomych Justa, Tinka, Dżasta, jak kto woli. Jestem magistrem pedagogiki opiekuńczo-wychowawczej z arteterapią. Od zawsze interesowała mnie sztuka, szczególnie dziedzina malarstwa.</span> Malowanie twarzy pasjonuje mnie już od wielu lat, ostatnio zaczęłam szkolić się w kierunku face paintingu na wyższym poziomie. Dla Was zamierzam się szkolić u najlepszych profesjonalistów. Oprócz malowania interesuję się też różnymi atrakcjami eventowymi, które są uwielbiane przez dzieci. Bo to przecież dzięki nim to wszystko stworzyłam.
                    </p>
                </div>

                <div className="photos-about-in-home-page">

                    <img src={justyna} alt="" />
                    <img src={justyna2} alt="" />
                    <img src={justyna3} alt="" />

                </div>
            </div>
            <button>SPRAWDŹ</button>
        </section>
     );
}
 
export default AboutInHomePage;