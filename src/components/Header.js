import React, { useRef, useEffect } from 'react';
import './Header.css';

const Header = () => {
    const headerRef = useRef(null);
  
    useEffect(() => {
      const sticky = headerRef.current.offsetTop;
  
      const handleScroll = () => {
        if (window.pageYOffset >= sticky) {
          headerRef.current.classList.add("sticky");
        } else {
          headerRef.current.classList.remove("sticky");
        }
      };
  
      window.addEventListener("scroll", handleScroll);
  
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, []);
  
    return (
      <div className='nav' ref={headerRef}>
        <div className="logo">
          English<span>2</span>SQL
        </div>
       
      </div>
    );
  };

  export default Header;