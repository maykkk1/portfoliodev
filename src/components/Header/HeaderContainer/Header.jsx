import React from 'react';
import HeaderContent from '../HeaderContent/HeaderContent';
import Nav from '../Nav/NavContainer/Nav';
import "./style.css"

const Header = () => {
  return (
    <header className='Header'>
        <Nav/>
        <HeaderContent/>
    </header>
  );
}
export default Header;
