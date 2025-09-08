import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  // Handle scrolling effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Handle menu toggle
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Close menu when route changes
  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  return (
    <div id="header" className="pb-1 mb-1">
      <nav className={`fixed top-0 w-full z-[1000] transition-all duration-600 ${
        scrolled ? 'bg-transparent backdrop-blur-md py-2.5 px-5' : 'bg-transparent py-5 px-10'
      }`}>
        <Link to="/" className="no-underline">
          <p className={`transition-all duration-300 ${
            scrolled ? 'text-[35px]' : 'text-[45px]'
          } font-medium text-[#103d01] font-['Trebuchet_MS',_'Lucida_Sans_Unicode',_'Lucida_Grande',_'Lucida_Sans',_Arial,_sans-serif]`}>
            SPORT Club
          </p>
        </Link>
        <ul 
          id="sidemenu" 
          className={`${menuOpen ? 'right-0' : 'right-[-200px]'} md:static fixed top-0 w-[200px] md:w-auto h-[50vh] md:h-auto bg-[#017979] md:bg-transparent pt-[50px] md:pt-0 transition-all duration-500 z-[2] md:flex`}
        >
          <li className="md:inline-block block md:mx-5 my-2.5 md:my-0 mx-6"><Link to="/home" className="nav-link">Home</Link></li>
          <li className="md:inline-block block md:mx-5 my-2.5 md:my-0 mx-6"><Link to="/updates" className="nav-link">Updates</Link></li>
          <li className="md:inline-block block md:mx-5 my-2.5 md:my-0 mx-6"><Link to="/login" className="nav-link">Registration</Link></li>
          <li className="md:inline-block block md:mx-5 my-2.5 md:my-0 mx-6"><Link to="/sports" className="nav-link">Sports</Link></li>
          <li className="md:inline-block block md:mx-5 my-2.5 md:my-0 mx-6"><Link to="/gallery" className="nav-link">Gallery</Link></li>
          <li className="md:inline-block block md:mx-5 my-2.5 md:my-0 mx-6"><Link to="/members" className="nav-link">Members</Link></li>
          <i 
            className="fas-icons fa-solid fa-rectangle-xmark absolute top-6 left-6 cursor-pointer md:hidden"
            onClick={toggleMenu}
          ></i>
        </ul>
        <i 
          className="fas-icons fa-solid fa-bars text-2xl md:hidden cursor-pointer" 
          onClick={toggleMenu}
        ></i>
      </nav>
    </div>
  );
};

export default Header;
