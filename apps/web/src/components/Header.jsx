import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Beranda' },
    { path: '/tentang-kami', label: 'Tentang Kami' },
    { path: '/kurikulum', label: 'Kurikulum' },
    { path: '/satuan-pendidikan', label: 'Satuan Pendidikan' },
    { path: '/program-unggulan', label: 'Program Unggulan' },
    { path: '/visi-misi', label: 'Visi Misi' },
    { path: '/sejarah', label: 'Sejarah' },
    { path: '/ppdb', label: 'PPDB' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <header className="bg-primary text-primary-foreground shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo and Name */}
          <Link to="/" className="flex items-center hover:opacity-90 transition-opacity">
            <img 
              src="https://horizons-cdn.hostinger.com/07101319-d5f6-4933-b56d-107b4fe8d8d8/67998fa38301c46170c20e506e74f9a2.png" 
              alt="Logo PPTQ-H Hidayatullah Ternate & Tidore" 
              className="h-12 sm:h-16 w-auto object-contain"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  isActive(item.path)
                    ? 'bg-accent text-accent-foreground'
                    : 'hover:bg-primary-foreground/10'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden text-primary-foreground hover:bg-primary-foreground/10"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="lg:hidden pb-4 space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsMenuOpen(false)}
                className={`block px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 ${
                  isActive(item.path)
                    ? 'bg-accent text-accent-foreground'
                    : 'hover:bg-primary-foreground/10'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
