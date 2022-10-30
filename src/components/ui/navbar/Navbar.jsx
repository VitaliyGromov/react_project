import React from 'react';
import {Link} from "react-router-dom";
import MyButton from "../button/MyButton";

const Navbar = () => {
    return (
        <div className='navbar'>
            <div className='navbar__items'>
                <MyButton>
                    <Link style={{textDecoration: 'none', color: 'black'}} to='/about'>О сайте</Link>
                </MyButton>
                <MyButton>
                    <Link style={{textDecoration: 'none', color: 'black'}} to='/posts'>Посты</Link>
                </MyButton>
            </div>
        </div>
    );
};

export default Navbar;