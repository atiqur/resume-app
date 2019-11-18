import React from 'react';
import Moment from 'react-moment';

import Logo from '../../assets/images/logo.png';

import './header.styles.css';

const Header = () => (
  <div className='header'>
    <div className='container-logo'>
      <img className='logo' src={Logo} alt='Gen Links Logo' />
    </div>
    <div className='date'>
      Date: <Moment format='DD-MM-YYYY'>{Date.now()}</Moment>
    </div>
  </div>
);

export default Header;
