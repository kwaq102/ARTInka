import React from 'react';

import {animationList} from '../data/data'

import '../styles/Animations.css'

const Animations = () => {

    const list = animationList.map(el => (
        <div className="content-animation-box">
            <div className="animation-img-wrapper">
                <div>
                    <img src={el.photo} alt="" />
                </div>
            </div>
            <h4>{el.title}</h4>
            <p>{el.description}</p>
        </div>
    ))

    return ( 
        <div className='page-animations'>
            <section className="animations">
                {list}
            </section>
        </div>
     );
}
 
export default Animations