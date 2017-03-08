import React from 'react';
import Headroom from 'react-headroom';
import { Link } from 'react-router';
import { prefixLink } from 'gatsby-helpers';

import Sig from '../Signature.jsx';
import menu from '../menu.svg';
import '../css/styles.css';

const MenuItem = (props) => (
  <Link to={prefixLink(props.url)}>
    <div id='menu-item'>
      {props.text}
    </div>
  </Link>
);

const Menu = () => (
  <div id='menu'>

    <button id='menu-button' className='bar-item'>
      {'Menu'}
    </button>

    <div id='menu-content'>
      <MenuItem text='About Me' url='/#bravo' />
      <MenuItem text='Blog' url='/#bravo' />
      <MenuItem text='Contact' url='/#bravo' />
      <MenuItem text='Resume' url='/#bravo' />
      <MenuItem text='Projects' url='/#bravo' />
    </div>

  </div>
);

const SigButton = () => (
    <Link to={prefixLink('/')} id='logo'>
      <button id='logo-button' className='bar-item'>
        <Sig id='logo-sig' />
      </button>
    </Link>
);

const Template = (props) => (
  <div>

    <Headroom id='header-bar'>
      <SigButton />
      <Menu />
    </Headroom>

    <div id='content'>
      {props.children}
    </div>

  </div>
);

export default Template;
