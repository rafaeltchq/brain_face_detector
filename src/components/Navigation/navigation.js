import React from 'react';
import Logo from "../Logo/logo";
import "./navigation.css";
const Navigation = ({ signedIn, onChangeRoute }) => {
    return (
        <nav className='navbar '>
            <Logo />
            <ul className='flex justify-center'>
            {signedIn ?
                <li onClick={() => onChangeRoute('signin')} className='pointer white mh3 dim'>Signout</li> :
                <><li onClick={() => onChangeRoute('register')} className='pointer white mh3 dim'>Register</li>
                <li onClick={() => onChangeRoute('signin')} className='pointer white mh3 dim'>Sign In</li></>
            }
            </ul>
        </nav>
    );
};

export default Navigation;