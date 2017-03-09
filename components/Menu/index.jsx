import React from 'react';

import MenuItem from '../MenuItem';
import './styles.css';

const Menu = () => (
  <div id='menu'>

    <button id='menu-button' className='bar-item'>
      {'Menu'}
    </button>

    <div id='menu-content'>
      <MenuItem text='About Me' url='/about/' />
      <MenuItem text='Blog' url='/blog/' />
      <MenuItem text='Contact' url='/contact/' />
      <MenuItem text='Resume' url='/resume/' />
      <MenuItem text='Projects' url='/projects/' />
    </div>

  </div>
);

export default Menu;
