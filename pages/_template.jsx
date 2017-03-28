import React from 'react';
import Headroom from 'react-headroom';
import { Link } from 'react-router';
import { prefixLink } from 'gatsby-helpers';

import Logo from '../components/Logo';
import Menu from '../components/Menu';

import '../css/styles.css';

const Template = (props) => (
  <div>

    <Headroom id='header-bar'>
      <Logo className='bar-item' />
      <Menu className='bar-item' />
    </Headroom>

    <div id='content'>
      {props.children}
    </div>

  </div>
);

export default Template;
