import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-[#017979] text-white py-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4 py-4 my-4">
          <div className="mb-3 text-center">
            <Link to="/" className="flex items-center justify-center mb-3 text-body-emphasis no-underline">
              <img src="/assets/photos/parakram_logo.png" alt="logo" className="w-40 h-auto mb-4 ml-8" />
            </Link>
            <p className="text-[#7fe40b] text-xl font-medium font-['Times_New_Roman']">
              Dr D Y Patil Institute of Technology Pimpri, Pune.
            </p>
            <div className="flex justify-center mt-3">
              <i className="fa-brands fa-instagram fa-3x mx-2"></i>
              <i className="fa-brands fa-linkedin fa-3x mx-2"></i>
              <i className="fa-brands fa-github fa-3x mx-2"></i>
            </div>
          </div>
          
          <div className="mb-3"></div>
          
          <div className="mb-3">
            <h5 className="text-[#f4f4f4] mb-4">Indoor Games</h5>
            <ul className="list-none p-0">
              <li className="mb-2"><Link to="/sports" className="no-underline text-[#030202] hover:text-[#eef5f5]">Chess</Link></li>
              <li className="mb-2"><Link to="/sports" className="no-underline text-[#030202] hover:text-[#eef5f5]">Carrom</Link></li>
              <li className="mb-2"><Link to="/sports" className="no-underline text-[#030202] hover:text-[#eef5f5]">Checkers</Link></li>
              <li className="mb-2"><Link to="/sports" className="no-underline text-[#030202] hover:text-[#eef5f5]">Monopoly</Link></li>
              <li className="mb-2"><Link to="/sports" className="no-underline text-[#030202] hover:text-[#eef5f5]">About</Link></li>
            </ul>
          </div>

          <div className="mb-3">
            <h5 className="text-[#f4f4f4] mb-4">Outdoor Games</h5>
            <ul className="list-none p-0">
              <li className="mb-2"><Link to="/sports" className="no-underline text-[#030202] hover:text-[#eef5f5]">Cricket</Link></li>
              <li className="mb-2"><Link to="/sports" className="no-underline text-[#030202] hover:text-[#eef5f5]">Football</Link></li>
              <li className="mb-2"><Link to="/sports" className="no-underline text-[#030202] hover:text-[#eef5f5]">Volleyball</Link></li>
              <li className="mb-2"><Link to="/sports" className="no-underline text-[#030202] hover:text-[#eef5f5]">Baseball</Link></li>
              <li className="mb-2"><Link to="/sports" className="no-underline text-[#030202] hover:text-[#eef5f5]">Kabaddi</Link></li>
            </ul>
          </div>

          <div className="mb-3">
            <h5 className="text-[#f4f4f4] mb-4">Main</h5>
            <ul className="list-none p-0">
              <li className="mb-2"><Link to="/" className="no-underline text-[#030202] hover:text-[#eef5f5]">Home</Link></li>
              <li className="mb-2"><Link to="/" className="no-underline text-[#030202] hover:text-[#eef5f5]">Features</Link></li>
              <li className="mb-2"><Link to="/" className="no-underline text-[#030202] hover:text-[#eef5f5]">Pricing</Link></li>
              <li className="mb-2"><Link to="/" className="no-underline text-[#030202] hover:text-[#eef5f5]">FAQs</Link></li>
              <li className="mb-2"><Link to="/" className="no-underline text-[#030202] hover:text-[#eef5f5]">About</Link></li>
            </ul>
          </div>
        </div>
        <div className="col mb-5"></div>
        <p className="text-center text-[#f4f4f4] text-sm">© 2025 Your Company. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;