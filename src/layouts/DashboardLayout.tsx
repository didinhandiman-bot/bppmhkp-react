import { useEffect, useState } from 'react';
import { Outlet, useNavigate, Link, useLocation } from 'react-router-dom';
import { logoutUser, type UserProfile } from '../services/authService';

export const DashboardLayout = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [user, setUser] = useState<UserProfile | null>(null);

  // Ambil data profil dari localStorage saat pertama kali layout dimuat
  useEffect(() => {
    const userRaw = localStorage.getItem('user');
    if (userRaw) {
      try {
        setUser(JSON.parse(userRaw));
      } catch (e) {
        setUser(null);
      }
    }
  }, []);

  // Handler Fungsi Logout Utama
  const handleLogout = () => {
    // 1. Hapus token JWT dan data user dari localStorage
    logoutUser();

    // 2. Arahkan kembali ke halaman login (dengan replace agar tidak bisa di-back browser)
    navigate('/login', { replace: true });
  };

  return (
    <div className="flex min-h-screen bg-slate-100">
      {/* Sidebar Kiri */}
      <aside className="w-64 bg-slate-900 text-white p-4 hidden md:flex flex-col">
        <h2 className="text-xl font-bold mb-6">BPPMHKP App</h2>
        <nav className="space-y-2 flex-1">
          <Link
            to="/dashboard"
            className={`block py-2 px-4 rounded transition-colors ${
              location.pathname === '/dashboard'
                ? 'bg-blue-600 text-white'
                : 'text-slate-300 hover:bg-slate-800'
            }`}
          >
            Dashboard
          </Link>
          <Link
            to="/layanan"
            className={`block py-2 px-4 rounded transition-colors ${
              location.pathname === '/layanan'
                ? 'bg-blue-600 text-white'
                : 'text-slate-300 hover:bg-slate-800'
            }`}
          >
            Layanan Saya
          </Link>
        </nav>
      </aside>

      {/* Area Konten Utama */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Top Navbar Header */}
        <header className="bg-white border-b border-slate-200 px-6 py-4 flex justify-between items-center shadow-xs">
          <span className="font-semibold text-slate-800">
            Selamat Datang, {user?.nama || 'User'}
          </span>
          
          {/* Tombol Logout Aktif */}
          <button
            onClick={handleLogout}
            className="text-sm font-semibold text-red-600 hover:text-red-700 hover:bg-red-50 px-3 py-1.5 rounded-lg transition-colors cursor-pointer"
          >
            Logout
          </button>
        </header>

        {/* Konten Halaman (DashboardPage / LayananPage) */}
        <main className="p-6 flex-1 overflow-y-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
};