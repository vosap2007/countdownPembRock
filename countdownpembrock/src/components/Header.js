import React from 'react';
import { ReactSVG } from 'react-svg';
import logo from '../assets/images/logo.svg';
import logo_sh from '../assets/images/logo_sh.svg';
import sum from '../assets/images/sum.svg';

function Header() {
  return (
    <header className="header">
      <a href="/">
        <ReactSVG src={logo} className="logo" />
      </a>
      <div className="block_sum">
        <ReactSVG src={logo_sh} className="logo_sh" />
        <ReactSVG src={sum} className="sum" />
        <p className="block_sum_text">$ 0.1</p>
      </div>
    </header>
  );
}

export default Header;
