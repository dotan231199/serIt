import React from 'react';
import { Facebook, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-900 py-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-2">
          <img src="/logo.jpg" alt="ServIT Logo" className="h-8 w-8 object-cover rounded-md" />
          <span className="text-white font-bold text-2xl tracking-tight">ServIT</span>
        </div>
        <p className="text-slate-400 text-sm text-center md:text-left">
          © {new Date().getFullYear()} ServIT. Nền tảng định hướng nghề nghiệp IT Services.
        </p>
        <div className="flex gap-4">
          <a href="#" className="text-slate-400 hover:text-white transition-colors">
            <Facebook className="h-6 w-6" />
          </a>
          <a href="#" className="text-slate-400 hover:text-white transition-colors">
            <Linkedin className="h-6 w-6" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
