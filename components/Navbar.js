import './Navbar.css';
import React, {useEffect, useState} from 'react';

function Navbar() {
  const [show, handleShow] = useState([]);
  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
    });
    return () => {
      window.removeEventListener('scroll');
    };
  }, []);

  return (
    <div className={`nav ${show && 'nav_black'}`}>
      <img
        className='nav_logo'
        alt='Netflix Logo'
        src='https://images.amcnetworks.com/amc.com/wp-content/uploads/2015/06/amc-logo-gold-redesign-1200x707.jpg'
      />

      <a href='https://github.com/imnotharsha'>
        <img
          className='nav_avatar'
          alt='Netflix Avatar'
          src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRZcKR3b2Q6L7kLv3kV04kBtcs-FaYRsYfxRQ&usqp=CAU'
        />
      </a>
    </div>
  );
}

export default Navbar;
