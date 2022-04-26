import React from 'react';
import { useState, useEffect } from 'react';
import HeaderContent from '../HeaderContent/HeaderContent';
import Nav from '../Nav/Nav';
import "./style.css"

const Header = () => {
  const [bgPosition, SetBgPosition] = useState()


  useEffect(()=>{
    setTimeout(()=>{SetBgPosition({backgroundPositionY: "bottom"})}, 400)
  }, [])


  return (
    <header className='Header' style={bgPosition}>
        <Nav/>
        <HeaderContent/>
    </header>
  );
}
export default Header;
