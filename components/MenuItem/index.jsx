import React from 'react';
import { Link } from 'react-router';
import { prefixLink } from 'gatsby-helpers';

import './styles.css';

const MenuItem = (props) => (
  <Link to={prefixLink(props.url)}>
    <div id='menu-item'>
      {props.text}
    </div>
  </Link>
);

export default MenuItem;
