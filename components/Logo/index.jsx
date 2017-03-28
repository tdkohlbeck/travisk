import React from 'react';
import { Link } from 'react-router';
import { prefixLink } from 'gatsby-helpers';

import Sig from '../Signature';
import './styles.css';


const Logo = () => (
  <Link to={prefixLink('/')} id='logo'>
    <button>
      <Sig />
    </button>
  </Link>
);

export default Logo;
