'use client';
import { useState, useEffect } from 'react';
import { LinkedIn, Translate } from '@mui/icons-material';
import Button from './Button';

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleScroll = () => {
    if (window.scrollY > lastScrollY) {
      setIsVisible(false);
    } else {
      setIsVisible(true);
    }
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 bg-white shadow transition-transform duration-300 ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}>
      <div className="mx-6 md:mx-12 my-2 flex items-center justify-between">
        <a href="#maindiv" className="flex-shrink-0">
          <img
            src="https://supreme-group.vercel.app/static/media/logo.68f5b8493efb88f7cd65756bf67a1f5b.svg"
            alt="logo"
            width="144"
            height="44"
          />
        </a>

        <div className="flex items-center space-x-4">
          <Button className="px-4 py-2 border rounded-full hover:bg-gray-100 transition">Contact Us</Button>
          <a href="https://www.linkedin.com/company/supreme-group-company/" target="_blank" rel="noreferrer" className="text-gray-600 hover:text-gray-800 transition">
            <LinkedIn className="w-6 h-6" />
          </a>
          <div className="flex items-center space-x-1 cursor-pointer">
            <Translate className="w-6 h-6 text-gray-600 hover:text-gray-800 transition" />
            <span className="text-sm font-semibold">ENG</span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
