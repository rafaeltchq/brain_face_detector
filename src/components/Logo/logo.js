import React from 'react';
import "./logo.css";
import Brain from './brain.png';

const Logo = () => {
    return (
        // <div className='ma4 mt0'>
            <div className='divLogo'>
                <img src={ Brain } alt='logo'/>
            </div>
        // </div>
    );
};

export default Logo;