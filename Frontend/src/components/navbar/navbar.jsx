import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Saif2 from "../../assets/saif1.jpeg";
import hospitalLogo from '../../assets/hospitalLogo.png'; // Your logo image
import { Link } from 'react-router-dom';

const Navbar = ({scrollToBook}) => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      {/* Navbar Container */}
      <div className="bg-white shadow-sm relative z-50">
        <div className="max-w-[1200px] mx-auto flex items-center justify-between px-4 py-1">
          
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <img src={hospitalLogo} alt="Logo" className="h-28 w-auto" />
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex space-x-6 text-sm font-medium text-black">
           
            <Link to="/about">About</Link>
            <Link to="/specialties">Specialties ⌄</Link>
            <Link to="/finddoctor">Find a Doctor</Link>
             <Link to="/healthpackage">Health Packages</Link>
           
            <a href="/">Resources ⌄</a>
          </div>

          {/* Desktop Button */}
          <div className="hidden lg:flex">
            <button onClick={scrollToBook}
            className="bg-blue-600 hover:bg-blue-700 text-white text-sm px-5 py-2 rounded-full flex items-center space-x-1">
              <span>📅</span>
              <span>Book an Appointment</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button onClick={() => setOpen(true)}>
              <Menu size={24} />
            </button>
          </div>
        </div>

        {/* Slide-in Mobile Menu */}
        <div
          className={`fixed top-0 left-0 h-full w-[75%] max-w-[300px] bg-white shadow-md z-50 p-5 transform transition-transform duration-300 ease-in-out ${
            open ? 'translate-x-0' : '-translate-x-full'
          }`}
        >
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-lg font-bold text-blue-600">FAIZ MENU</h2>
            <button onClick={() => setOpen(false)}>
              <X size={24} />
            </button>
          </div>

          <nav className="flex flex-col space-y-4 text-black text-sm font-medium">
            <Link to="/about">About</Link>
            <Link to="/specialties">Specialties ⌄</Link>
            <Link to="/finddoctor">Find a Doctor</Link>
             <Link to="/healthpackage">Health Packages</Link>
           
            <a href="/">Resources ⌄</a>
          </nav>
        </div>

        {/* Overlay when menu is open */}
        {open && (
          <div
            className="fixed inset-0 bg-black bg-opacity-40 z-40"
            onClick={() => setOpen(false)}
          />
        )}
      </div>
    </div>
  );
};

export default Navbar;
