import React from 'react';
import { useState, useEffect } from 'react';
import HeaderContent from '../HeaderContent/HeaderContent';
import Nav from '../Nav/Nav';
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
