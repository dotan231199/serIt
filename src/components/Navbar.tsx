import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const links = [
    { name: 'Trang chủ', href: '/' },
    { name: 'Giới thiệu', href: '/about' },
    { name: 'Ngành nghề', href: '/careers' },
    { name: 'Lộ trình', href: '/roadmap' },
    { name: 'Trắc nghiệm', href: '/quiz' },
    { name: 'Tin tức', href: '/news' },
    { name: 'Hỏi đáp', href: '/faq' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 w-full bg-slate-900/95 backdrop-blur-sm z-50 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2">
            <img src="/logo.png" alt="TechServ Logo" className="h-8 w-8 object-cover rounded-md" />
            <span className="text-white font-bold text-xl tracking-tight">TechServ</span>
          </Link>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {links.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className={`${
                    isActive(link.href) 
                      ? 'text-white bg-slate-800' 
                      : 'text-slate-300 hover:text-white hover:bg-slate-800/50'
                  } px-3 py-2 rounded-md text-sm font-medium transition-all`}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                to="/contact"
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Tư vấn ngay
              </Link>
            </div>
          </div>
          
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-300 hover:text-white p-2"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-slate-900 border-b border-slate-800">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {links.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                onClick={() => setIsOpen(false)}
                className={`${
                  isActive(link.href) 
                    ? 'text-white bg-slate-800' 
                    : 'text-slate-300 hover:text-white'
                } block px-3 py-2 rounded-md text-base font-medium`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setIsOpen(false)}
              className="bg-blue-600 text-white block px-3 py-2 rounded-md text-base font-medium mt-4 text-center"
            >
              Tư vấn ngay
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
