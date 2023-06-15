import React from 'react';
import logo from '../images/logo.svg';

function Header() {
    return (
        <div>
            <header className="header">
                <img src={logo} alt="Логотип сайта" className="header__logo"/>
            </header>
        </div>
    );
}

export default Header;