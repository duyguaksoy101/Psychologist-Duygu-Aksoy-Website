import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Mail, Phone } from 'lucide-react';
const Footer = () => {
  const currentYear = new Date().getFullYear();
  // Use optional chaining to safely access environment variable
  const blogUrl = `https://${import.meta.env?.VITE_HASHNODE_HOST || 'blog.example.com'}`;
  return <footer className="bg-gray-50 py-12 mt-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <Link to="/" className="text-xl font-medium text-gray-800 mb-4 block">
              Psikolog Duygu Aksoy
            </Link>
            <p className="text-gray-600 mt-2 mb-6 text-sm max-w-xs">
              Zaman zaman hepimiz, tek başımıza baş etmekte zorlandığımız dönemlerden geçeriz. Bu süreçlerde size eşlik edecek profesyonel psikolojik danışmanlık desteği sunuyorum.
            </p>
            <div className="flex space-x-4">
              <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-800">
                <Instagram size={20} />
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-800 uppercase tracking-wider mb-4">
              Sayfalar
            </h3>
            <div className="flex flex-col space-y-2">
              <Link to="/" className="text-gray-600 hover:text-gray-800 text-sm">
                Ana Sayfa
              </Link>
              <Link to="/about" className="text-gray-600 hover:text-gray-800 text-sm">
                Hakkımda
              </Link>
              {/* Updated blog link to point to Hashnode */}
              <a href={blogUrl} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-800 text-sm">
                Blog
              </a>
              <Link to="/contact" className="text-gray-600 hover:text-gray-800 text-sm">
                İletişim
              </Link>
            </div>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-800 uppercase tracking-wider mb-4">
              İletişim
            </h3>
            <div className="flex flex-col space-y-3">
              <div className="flex items-center space-x-3">
                <Phone size={18} className="text-gray-600" />
                <span className="text-gray-600 text-sm">+90 505 818 92 65</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={18} className="text-gray-600" />
                <span className="text-gray-600 text-sm">
                  duyguaksoy101@gmail.com
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-200 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            © {currentYear} Psikolog Duygu Aksoy. Tüm hakları saklıdır.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/privacy" className="text-gray-500 hover:text-gray-800 text-sm">
              Gizlilik Politikası
            </Link>
            <Link to="/terms" className="text-gray-500 hover:text-gray-800 text-sm">
              Kullanım Şartları
            </Link>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;
