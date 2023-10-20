import React from 'react';
import Profile from '../../assets/images/profile.png';
import './Header.css';

const Header = () => {
    return (
        <>
        <div className='header'>
            <div>
                <a href=""><h4>Knowledge Cafe</h4></a>
            </div>
            <div>
                <a href=""><img src={Profile} alt="" srcset="" /></a>
            </div>
        </div>
        <hr className='header-line'></hr>
        </>
    );
};

export default Header;