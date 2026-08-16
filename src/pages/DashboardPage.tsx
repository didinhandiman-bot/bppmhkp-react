import React, { useEffect, useState } from 'react';
import { getMeApi, type UserProfile } from '../services/authService';

// Interface Data Statistik Dashboard
interface DashboardStats {
  permohonanAktif: number;
  sertifikatSelesai: number;
  pengujianProsedur: number;
}

// Sub-komponen StatCard untuk modularitas & reusability
interface StatCardProps {
  title: string;
  value: number;
  textColor: string;
  badgeBg: string;
}

const StatCard: React.FC<StatCardProps> = ({ title, value, textColor, badgeBg }) => (
  <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-xs hover:shadow-md transition-all">
    <div className="flex justify-between items-start">
      <span className="text-sm text-slate-500 font-medium">{title}</span>
      <span className={`px-2.5 py-1 rounded-full text-xs font-semibold ${badgeBg} ${textColor}`}>
        Aktif
      </span>
    </div>
    <p className={`text-3xl font-bold ${textColor} mt-3`}>{value}</p>
  </div>
);

export const DashboardPage = () => {
  const [user, setUser] = useState<UserProfile | null>(null);
  const [stats, setStats] = useState<DashboardStats>({
    permohonanAktif: 0,
    sertifikatSelesai: 0,
    pengujianProsedur: 0,
  });
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>('');

  // Fungsi Fetch Data dari API Backend
  const loadDashboardData = async () => {
    setLoading(true);
    setError('');

    try {
      // 1. Ambil Profil User Terautentikasi dari Express (GET /api/auth/me)
      const resProfile = await getMeApi();
      if (resProfile.success) {
        setUser(resProfile.data);
      }

      // 2. Simulasi Data Statistik (Dapat diganti dengan endpoint API statistik backend nantinya)
      setStats({
        permohonanAktif: 12,
        sertifikatSelesai: 48,
        pengujianProsedur: 3,
      });
    } catch (err: any) {
      const message = err.response?.data?.message || 'Gagal memuat data dari server backend.';
      setError(message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadDashboardData();
  }, []);

  // 1. STATE LOADING (Skeleton Loader)
  if (loading) {
    return (
      <div className="space-y-6 animate-pulse">
        {/* Banner Skeleton */}
        <div className="bg-slate-200 h-28 rounded-xl w-full"></div>

        {/* Stat Cards Skeleton */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-slate-200 h-32 rounded-xl"></div>
          <div className="bg-slate-200 h-32 rounded-xl"></div>
          <div className="bg-slate-200 h-32 rounded-xl"></div>
        </div>

        {/* Content Skeleton */}
        <div className="bg-slate-200 h-48 rounded-xl w-full"></div>
      </div>
    );
  }

  // 2. STATE ERROR
  if (error) {
    return (
      <div className="bg-red-50 border border-red-200 rounded-xl p-6 text-center space-y-4">
        <h3 className="text-lg font-bold text-red-800">Terjadi Kesalahan</h3>
        <p className="text-sm text-red-600">{error}</p>
        <button
          onClick={loadDashboardData}
          className="bg-red-600 hover:bg-red-700 text-white font-medium px-4 py-2 rounded-lg text-sm transition-colors cursor-pointer"
        >
          Coba Muat Ulang
        </button>
      </div>
    );
  }

  // 3. STATE UTAMA (Data Berhasil Dibuat)
  return (
    <div className="space-y-6">
      {/* Welcome Card & User Profile Greeting */}
      <div className="bg-gradient-to-r from-blue-900 to-blue-700 p-6 rounded-xl text-white shadow-md flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold">
            Selamat Datang, {user?.nama || 'Pengguna'}!
          </h1>
          <p className="text-blue-100 mt-1 text-sm">
            Sistem Informasi Terpadu Layanan BPPMHKP • Role:{' '}
            <span className="font-semibold capitalize">{user?.role || 'User'}</span>
          </p>
        </div>
        <div className="hidden sm:block text-right">
          <span className="text-xs bg-blue-800/60 px-3 py-1.5 rounded-full border border-blue-400/30">
            {user?.email}
          </span>
        </div>
      </div>

      {/* Ringkasan Statistik */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <StatCard
          title="Permohonan Aktif"
          value={stats.permohonanAktif}
          textColor="text-blue-600"
          badgeBg="bg-blue-50"
        />
        <StatCard
          title="Sertifikat Selesai"
          value={stats.sertifikatSelesai}
          textColor="text-emerald-600"
          badgeBg="bg-emerald-50"
        />
        <StatCard
          title="Pengujian Prosedur"
          value={stats.pengujianProsedur}
          textColor="text-amber-600"
          badgeBg="bg-amber-50"
        />
      </div>

      {/* Section Ringkasan Aktivitas Terbaru */}
      <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-xs space-y-4">
        <h2 className="text-lg font-bold text-slate-900">Aktivitas Terkini</h2>
        <div className="divide-y divide-slate-100">
          <div className="py-3 flex justify-between items-center text-sm">
            <div>
              <p className="font-medium text-slate-800">Pengajuan Sertifikasi Mutu #0942</p>
              <p className="text-xs text-slate-500">Diverifikasi oleh tim teknis</p>
            </div>
            <span className="text-xs text-slate-400">Hari ini, 10:45</span>
          </div>
          <div className="py-3 flex justify-between items-center text-sm">
            <div>
              <p className="font-medium text-slate-800">Pembaruan Dokumen Pengujian #0811</p>
              <p className="text-xs text-slate-500">Status berubah ke "Selesai"</p>
            </div>
            <span className="text-xs text-slate-400">Kemarin, 14:20</span>
          </div>
        </div>
      </div>
    </div>
  );
};