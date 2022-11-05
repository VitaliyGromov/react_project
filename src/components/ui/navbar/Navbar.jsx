import React from 'react';
import {NavLink} from "react-router-dom";

const Navbar = () => {
    const setActive = ({isActive}) => isActive ? 'active__link link' : 'link';
    return (
        <div className='navbar'>
            <div className='navbar__items'>
                <NavLink className={setActive} to='/'>Dashboard</NavLink>
                <NavLink className={setActive} to='/about'>О сайте</NavLink>
                <NavLink className={setActive} to='/posts'>Посты</NavLink>
            </div>
        </div>
    );
};

export default Navbar;