import React from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';

export default () => {
  const location = useLocation();
  console.log(location);
  return (
    <div id='wrapper'>
      <ul className='sidebar navbar-nav'>
        <li className='nav-item'>
          <Link to={'/appointments'} className='nav-link'>
            <i className='far fa-fw fa-calendar-alt'></i>
            <span>&nbsp;My Appointments</span>
          </Link>
        </li>
        <li className='nav-item active'>
          <Link to={'/profile'} className='nav-link'>
            <i className='fa fa-user'></i>
            <span>&nbsp;Manage Profile</span>
          </Link>
        </li>
      </ul>
    </div>
  );
};
