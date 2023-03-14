import React,{useContext} from 'react';
import  AuthContext  from '../../store/StateContext';
import classes from './Navigation.module.css';

const Navigation = () => {

  const cxt=useContext(AuthContext);
  return (
    <nav className={classes.nav}>
      <ul>
        {cxt.isLoggedIn && (
          <li>
            <a href="/">Users</a>
          </li>
        )}
        {cxt.isLoggedIn && (
          <li>
            <a href="/">Admin</a>
          </li>
        )}
        {cxt.isLoggedIn && (
          <li>
            <button onClick={cxt.onLogout}>Logout</button>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navigation;
