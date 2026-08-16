import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export const HeroSection = () => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  // Cek apakah user sudah login (memiliki token JWT di localStorage)
  useEffect(() => {
    const token = localStorage.getItem('token');
    setIsLoggedIn(!!token);
  }, []);

  return (
    <section id="beranda" className="bg-gradient-to-b from-blue-50 to-slate-50 py-20 px-4">
      <div className="max-w-4xl mx-auto text-center space-y-6">
        <span className="inline-block bg-blue-100 text-blue-700 text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider">
          Sistem Informasi Terpadu
        </span>
        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight">
          Selamat Datang di Portal Resmi <br className="hidden md:inline" />
          <span className="text-blue-600">BPPMHKP Online</span>
        </h1>
        <p className="text-slate-600 text-lg max-w-2xl mx-auto">
          Layanan penjaminan mutu dan pengendalian hasil kelautan dan perikanan secara transparan, akuntabel, dan terintegrasi.
        </p>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
        {/* Tombol Dinamis Berdasarkan Status Login */}
        <Link
          to={isLoggedIn ? '/dashboard' : '/login'}
          className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-lg shadow-md transition-all text-center"
        >
          {isLoggedIn ? 'Ke Dashboard' : 'Mulai Layanan'}
        </Link>
        <button className="bg-white hover:bg-slate-100 text-slate-700 border border-slate-300 font-medium px-6 py-3 rounded-lg transition-all cursor-pointer">
          Pelajari Lebih Lanjut
        </button>
      </div>
    </section>
  );
};