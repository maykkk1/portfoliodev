import React from 'react';
import { useState, useEffect } from 'react';
import HeaderContent from '../HeaderContent/HeaderContent';
import Nav from '../Nav/Nav';
import "./style.css"

//teste

const Header = () => {



  return (
    <header className='Header' id='Home'>
        <Nav/>
        <HeaderContent/>
    </header>
  );
}
export default Header;
