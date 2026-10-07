import React from 'react';
import { Github, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="w-full border-t border-white/10 py-8 mt-12 bg-black/20 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="flex flex-col items-center md:items-start text-sm text-gray-400">
          <p className="font-medium text-white mb-1">Designed & built by Devika Singh</p>
          <p>&copy; {new Date().getFullYear()} Devika Singh. All rights reserved.</p>
        </div>
        
        <div className="flex items-center gap-6">
          <a href="https://github.com" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition-colors p-2 hover:bg-white/5 rounded-full">
            <span className="sr-only">GitHub</span>
            <Github size={20} />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-[#0077b5] transition-colors p-2 hover:bg-white/5 rounded-full">
            <span className="sr-only">LinkedIn</span>
            <Linkedin size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
