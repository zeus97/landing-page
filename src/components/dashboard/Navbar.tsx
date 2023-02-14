import React, { useState, useEffect } from 'react'
import '../../styles/Navbar.css';

function Navbar() {

  const [scrollnav, setScrollnav] = useState<boolean>(false);

  const handleScrollNav = ()=>{
    if(window.scrollY >= 100){
      setScrollnav(true);
    }else{
      setScrollnav(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll',handleScrollNav);
  
    return () => {
      window.removeEventListener('scroll',handleScrollNav);
    }
  }, [])
  


  return (
    <header className={scrollnav ? 'scroll-nav' : ''}>
        <nav>
            <a href='#home'><span>BB</span></a>
            <ul>
                <a href='#home'><li>Home</li></a>
                <a href='#signup-form'><li>Sign up</li></a>
            </ul>
            <div>
              <i className="bi bi-facebook"></i>
              <i className="bi bi-instagram"></i>
              <i className="bi bi-twitter"></i>
            </div>
        </nav>
    </header>
  )
}

export default Navbar