import React from 'react';
import './index.css';


const Navbar = () => {
    return (
      <div className='navbar'>
          <div><a href='/profile'>Profile</a></div>
          <div><a href='/dialogs'>Messages</a></div>
          <div><a href='/news'>News</a></div>
          <div><a href='/music'>Music</a></div>
          <div><a href='/settings'>Settings</a></div>
      </div>
    );
  }
  
  export default Navbar;