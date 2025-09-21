import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-[#017979] text-white mt-auto">
      <div className="container mx-auto px-4 pb-0">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 pt-8 items-start">
          {/* Logo and Institute Name - Full width on small screens */}
          <div className="col-span-2 md:col-span-1 flex flex-col justify-center items-center mb-4 md:mb-0">
            <Link to="/" className="flex items-center justify-center mb-3 text-body-emphasis no-underline">
              <img src="/assets/photos/parakram_logo.png" alt="logo" className="w-32 md:w-40 h-auto m-4 md:mb-4" />
            </Link>
            <p className="text-[#7fe40b] text-base md:text-xl font-medium font-['Times_New_Roman'] text-center">
              Dr D Y Patil Institute of Technology Pimpri, Pune.
            </p>
            <div className="flex justify-center mt-2">
              <i className="fa-brands fa-instagram fa-2x md:fa-3x mx-2"></i>
              <i className="fa-brands fa-linkedin fa-2x md:fa-3x mx-2"></i>
              <i className="fa-brands fa-github fa-2x md:fa-3x mx-2"></i>
            </div>
          </div>
          
          {/* Empty column - Hidden on small screens */}
          <div className="hidden md:block md:col-span-1"></div>
          
          {/* Indoor Games - Half width on small screens */}
          <div className="flex flex-col md:justify-center h-full">
            <h5 className="text-[#f4f4f4] mb-2 md:mb-4 text-lg md:text-xl">Indoor Games</h5>
            <ul className="list-none p-0">
              <li className="mb-1 md:mb-2"><Link to="/sports" className="no-underline text-[#030202] hover:text-[#eef5f5] text-sm md:text-base">Chess</Link></li>
              <li className="mb-1 md:mb-2"><Link to="/sports" className="no-underline text-[#030202] hover:text-[#eef5f5] text-sm md:text-base">Carrom</Link></li>
              <li className="mb-1 md:mb-2"><Link to="/sports" className="no-underline text-[#030202] hover:text-[#eef5f5] text-sm md:text-base">Checkers</Link></li>
              <li className="mb-1 md:mb-2"><Link to="/sports" className="no-underline text-[#030202] hover:text-[#eef5f5] text-sm md:text-base">Monopoly</Link></li>
            </ul>
          </div>

          {/* Outdoor Games - Half width on small screens */}
          <div className="flex flex-col md:justify-center h-full">
            <h5 className="text-[#f4f4f4] mb-2 md:mb-4 text-lg md:text-xl">Outdoor Games</h5>
            <ul className="list-none p-0">
              <li className="mb-1 md:mb-2"><Link to="/sports" className="no-underline text-[#030202] hover:text-[#eef5f5] text-sm md:text-base">Cricket</Link></li>
              <li className="mb-1 md:mb-2"><Link to="/sports" className="no-underline text-[#030202] hover:text-[#eef5f5] text-sm md:text-base">Football</Link></li>
              <li className="mb-1 md:mb-2"><Link to="/sports" className="no-underline text-[#030202] hover:text-[#eef5f5] text-sm md:text-base">Volleyball</Link></li>
              <li className="mb-1 md:mb-2"><Link to="/sports" className="no-underline text-[#030202] hover:text-[#eef5f5] text-sm md:text-base">Kabaddi</Link></li>
            </ul>
          </div>

          {/* Main Links - Half width on small screens */}
          <div className="flex flex-col md:justify-center h-full col-span-2 md:col-span-1 mt-2 md:mt-0">
            <h5 className="text-[#f4f4f4] mb-2 md:mb-4 text-lg md:text-xl text-center md:text-left">Main</h5>
            <ul className="list-none p-0 flex flex-wrap justify-around md:block">
              <li className="mb-1 md:mb-2 mx-2 md:mx-0"><Link to="/" className="no-underline text-[#030202] hover:text-[#eef5f5] text-sm md:text-base">Home</Link></li>
              <li className="mb-1 md:mb-2 mx-2 md:mx-0"><Link to="/" className="no-underline text-[#030202] hover:text-[#eef5f5] text-sm md:text-base">Features</Link></li>
              <li className="mb-1 md:mb-2 mx-2 md:mx-0"><Link to="/" className="no-underline text-[#030202] hover:text-[#eef5f5] text-sm md:text-base">Pricing</Link></li>
              <li className="mb-1 md:mb-2 mx-2 md:mx-0"><Link to="/" className="no-underline text-[#030202] hover:text-[#eef5f5] text-sm md:text-base">FAQs</Link></li>
              <li className="mb-1 md:mb-2 mx-2 md:mx-0"><Link to="/" className="no-underline text-[#030202] hover:text-[#eef5f5] text-sm md:text-base">About</Link></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10 mt-4">
          <p className="text-center text-[#f4f4f4] text-sm py-4 mb-0">© 2025 PARAKRAM Sports Club. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;





