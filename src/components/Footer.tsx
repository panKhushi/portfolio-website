import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-900/80 border-t border-cyan-400/20 py-8 px-6">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-gray-300 flex items-center space-x-2">
            <span>Created by</span>
            <span className="text-cyan-400 font-semibold">Khushi Panwar</span>
            <Heart size={16} className="text-red-500 fill-current" />
          </p>
          <p className="text-gray-400 text-sm">
            &copy; 2024 All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
