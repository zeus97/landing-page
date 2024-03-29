import React, { useState, useEffect, useRef } from 'react'
import '../../styles/Navbar.css';

function Navbar() {
  const list = useRef<HTMLUListElement>(null);
  const [scrollnav, setScrollnav] = useState<boolean>(false);

  const handleScrollNav = ()=>{
    if(window.scrollY >= 100){
      setScrollnav(true);
    }else{
      setScrollnav(false);
    }
  };

  const handleShowList = ()=>{
    if (list.current != null){
      let d = list.current.style.display;
      if (d == 'flex'){
        list.current.style.display = '';
      }else {list.current.style.display = 'flex';}

    }
  }

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
            <ul ref={list} className={scrollnav ? 'scroll-nav' : ''}>
                <a href='#home' onClick={handleShowList}><li>Home</li></a>
                <a href='#signup-form' onClick={handleShowList}><li>Sign up</li></a>
            </ul>
            <div>
              <i className="bi bi-list burger" onClick={handleShowList}></i>
              <i className="bi bi-facebook socials" title='Facebook'></i>
              <i className="bi bi-instagram socials" title='Instagram'></i>
              <i className="bi bi-twitter socials" title='Twitter'></i>
            </div>
        </nav>
    </header>
  )
}

export default Navbar