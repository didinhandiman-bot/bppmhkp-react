import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  // Cek apakah user punya token JWT di localStorage
  useEffect(() => {
    const token = localStorage.getItem('token');
    setIsLoggedIn(!!token);
  }, []);

  return (
    <header className="bg-white border-b border-slate-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* Logo & Judul Brand */}
          <Link to="/" className="flex items-center space-x-3">
            <div className="bg-blue-600 text-white font-bold px-2.5 py-1 rounded-lg text-sm">
              BPPMHKP
            </div>
            <span className="font-bold text-slate-900 text-lg hidden sm:inline">
              Portal Layanan Mutu
            </span>
          </Link>

          {/* Menu Navigasi Tengah */}
          <nav className="hidden md:flex space-x-8 text-sm font-medium text-slate-600">
            <a href="#beranda" className="hover:text-blue-600 transition-colors">
              Beranda
            </a>
            <a href="#layanan" className="hover:text-blue-600 transition-colors">
              Layanan
            </a>
            <a href="#tentang" className="hover:text-blue-600 transition-colors">
              Tentang Kami
            </a>
          </nav>

          {/* Tombol Aksi Kanan (Dinamis) */}
          <div className="flex items-center space-x-4">
            {isLoggedIn ? (
              <Link
                to="/dashboard"
                className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-4 py-2 rounded-lg transition-colors shadow-xs"
              >
                Ke Dashboard
              </Link>
            ) : (
              <Link
                to="/login"
                className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-4 py-2 rounded-lg transition-colors shadow-xs"
              >
                Masuk
              </Link>
            )}
          </div>

        </div>
      </div>
    </header>
  );
};