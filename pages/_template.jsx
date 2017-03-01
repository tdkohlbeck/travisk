import React from 'react';
import Headroom from 'react-headroom';
import { Link } from 'react-router';
import { prefixLink } from 'gatsby-helpers';

import Sig from '../Signature.jsx'
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
  <div id='menu-wrapper'>

    <button id='menu' className='bar-item'>
      {'MENU'}
    </button>

    <div id='menu-content'>
      <MenuItem text='ABOUT ME' url='/#bravo' />
      <MenuItem text='CONTACT' url='/#bravo' />
      <MenuItem text='RESUME' url='/#bravo' />
      <MenuItem text='BLOG' url='/#bravo' />
      <MenuItem text='PROJECTS' url='/#bravo' />
    </div>

  </div>
);

const SigButton = () => (
    <Link to={prefixLink('/')} id='sig-wrapper'>
      <button id='sig-button' className='bar-item'>
        <Sig id='sig' />
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
