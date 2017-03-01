import React from 'react';
import Headroom from 'react-headroom';
import { Link } from 'react-router';
import { prefixLink } from 'gatsby-helpers';

import sig from '../signature.svg';
import menu from '../menu.svg';
import '../css/styles.css';

const MenuItem = (props) => (
  <div id='menu-item'>
    <Link to={prefixLink(props.url)}>{props.text}</Link>
  </div>
);

const Menu = () => (
  <div id='menu-wrapper'>

    <button id='menu' className='bar-item'>
      <img src={menu} />
    </button>

    <div id='menu-content'>
      <MenuItem text='About Me' url='/#bravo' />
      <MenuItem text='Contact' url='/#bravo' />
      <MenuItem text='Resume' url='/#bravo' />
      <MenuItem text='Blog' url='/#bravo' />
      <MenuItem text='Projects' url='/#bravo' />
    </div>

  </div>
);

const Sig = () => (
    <Link to={prefixLink('/')} id='sig-wrapper'>
      <button id='sig' className='bar-item'>
        <img src={sig} />
      </button>
    </Link>
);

const Template = (props) => (
  <div>

    <Headroom id='header-bar'>
      <Sig />
      <Menu />
    </Headroom>

    <div id='content'>
      {props.children}
    </div>

  </div>
);

export default Template;
