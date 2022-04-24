import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import TitleComponent from '../pages/title';
import { removeUser } from '../redux/actions/user';

const Header = () => {
  const dispatch = useDispatch();
  const handleClickLogout = () => {
    dispatch(removeUser());
  };

  return (
    <nav className='navbar navbar-expand navbar-dark bg-dark static-top'>
      <TitleComponent title='Doctor Appointment App '></TitleComponent>

      <Link to={'/'} className='navbar-brand mr-1'>
        Doctor Appointment App
      </Link>

      <form className='d-none d-md-inline-block form-inline ml-auto mr-0 mr-md-3 my-2 my-md-0'></form>

      <ul className='navbar-nav ml-auto ml-md-0'>
        <li className='nav-item dropdown no-arrow'>
          <Link
            to={'#'}
            className='nav-link dropdown-toggle'
            id='userDropdown'
            role='button'
            data-toggle='dropdown'
            aria-haspopup='true'
            aria-expanded='false'
          >
            <i className='fas fa-user-circle fa-fw'></i>
          </Link>
          <div className='dropdown-menu dropdown-menu-right' aria-labelledby='userDropdown'>
            <Link
              to={'#'}
              onClick={handleClickLogout}
              className='dropdown-item'
              data-toggle='modal'
              data-target='#logoutModal'
            >
              Logout
            </Link>
          </div>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
