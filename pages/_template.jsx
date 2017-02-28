import React from 'react';
import Headroom from 'react-headroom';
import { Link } from 'react-router';
import { prefixLink } from 'gatsby-helpers';

import sig from '../signature.svg';
import menu from '../menu2.svg';
import '../css/styles.css';

const Menu = () => (
  <Link to={prefixLink('/travisk/')}>
    <button id='menu' className='bar-item'>
      <img src={menu} />
    </button>
  </Link>
);

const Sig = () => (
  <Link to={prefixLink('/')}>
    <button id='sig' className='bar-item'>
      <img src={sig} />      
    </button>
  </Link>
);

const Template = (props) => (
  <div>
    <Headroom id='headroom'>
      <Sig />
      <Menu />
    </Headroom>

    <div id='wrapper'>{props.children}</div>

  </div>
);

export default Template;
