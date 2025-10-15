import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Instagram, Facebook, Linkedin } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Me', path: '/about' },
    // Updated Blog link to be an external link
    { name: 'Blog', path: `https://${import.meta.env.VITE_HASHNODE_HOST}`, external: true },
    { name: 'Get in Touch', path: '/contact' },
  ];

  const socialLinks = [
    { icon: <Instagram size={18} />, url: 'https://instagram.com/' },
    { icon: <Facebook size={18} />, url: 'https://facebook.com/' },
    { icon: <Linkedin size={18} />, url: 'https://linkedin.com/' },
  ];

  const renderNavLink = (link: { name: string; path: string; external?: boolean }, isMobile = false) => {
    const className = isMobile
      ? `text-sm font-medium py-2 transition-colors hover:text-gray-500 ${location.pathname === link.path && !link.external ? 'text-black' : 'text-gray-600'}`
      : `text-sm font-medium transition-colors hover:text-gray-500 ${location.pathname === link.path && !link.external ? 'text-black' : 'text-gray-600'}`;

    if (link.external) {
      return (
        <a
          key={link.name}
          href={link.path}
          target="_blank"
          rel="noopener noreferrer"
          className={className}
          onClick={closeMenu}
        >
          {link.name}
        </a>
      );
    }

    return (
      <Link key={link.path} to={link.path} className={className} onClick={closeMenu}>
        {link.name}
      </Link>
    );
  };

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-sm py-3' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto px-4 md:px-6">
        <nav className="flex justify-between items-center">
          <Link to="/" className="text-2xl font-medium text-gray-800 hover:text-gray-600">
            Psikolog Duygu Aksoy
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="flex items-center space-x-6">
              {navLinks.map((link) => renderNavLink(link))}
            </div>
            <div className="flex items-center space-x-4 border-l pl-4 border-gray-200">
              {socialLinks.map((social, index) => (
                <a key={index} href={social.url} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-800 transition-colors">
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <button onClick={toggleMenu} className="md:hidden text-gray-600 hover:text-gray-900 focus:outline-none">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white absolute top-full left-0 w-full shadow-lg py-4 px-6">
          <div className="flex flex-col space-y-4">
            {navLinks.map((link) => renderNavLink(link, true))}
            <div className="flex items-center space-x-4 pt-2 border-t border-gray-100">
              {socialLinks.map((social, index) => (
                <a key={index} href={social.url} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-800 transition-colors">
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
