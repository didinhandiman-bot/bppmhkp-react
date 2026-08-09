export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 flex flex-col font-sans">
      {/* 1. NAVBAR */}
      <header className="bg-white shadow-xs border-b border-slate-200 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="bg-blue-600 text-white font-bold px-3 py-1.5 rounded-lg text-lg">
              BPPMHKP
            </div>
            <span className="font-semibold text-slate-700 hidden sm:inline">
              Official Portal
            </span>
          </div>
          <nav className="flex gap-6 text-sm font-medium text-slate-600">
            <a href="#beranda" className="hover:text-blue-600 transition-colors">Beranda</a>
            <a href="#layanan" className="hover:text-blue-600 transition-colors">Layanan</a>
            <a href="#tentang" className="hover:text-blue-600 transition-colors">Tentang</a>
            <a href="#kontak" className="hover:text-blue-600 transition-colors">Kontak</a>
          </nav>
        </div>
      </header>

      {/* 2. HERO SECTION */}
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
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-lg shadow-md transition-all cursor-pointer">
              Mulai Layanan
            </button>
            <button className="bg-white hover:bg-slate-100 text-slate-700 border border-slate-300 font-medium px-6 py-3 rounded-lg transition-all cursor-pointer">
              Pelajari Lebih Lanjut
            </button>
          </div>
        </div>
      </section>

      {/* 3. FEATURE CARDS */}
      <section id="layanan" className="py-16 px-4 max-w-6xl mx-auto w-full">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900">Layanan Unggulan</h2>
          <p className="text-slate-600 mt-2">Kemudahan akses informasi dan sertifikasi dalam satu pintu</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-xs hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center font-bold text-xl mb-4">
              01
            </div>
            <h3 className="text-xl font-semibold mb-2 text-slate-900">Sertifikasi Mutu</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Pengajuan dan verifikasi dokumen sertifikat mutu hasil perikanan secara digital dan cepat.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-xs hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-lg flex items-center justify-center font-bold text-xl mb-4">
              02
            </div>
            <h3 className="text-xl font-semibold mb-2 text-slate-900">Pengujian Laboratorium</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Layanan uji mutu organoleptik, mikrobiologi, dan kimia dengan standar terakreditasi.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-xs hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-amber-100 text-amber-600 rounded-lg flex items-center justify-center font-bold text-xl mb-4">
              03
            </div>
            <h3 className="text-xl font-semibold mb-2 text-slate-900">Konsultasi & Informasi</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Pusat bantuan dan regulasi terkini terkait standar ekspor dan domestik hasil perikanan.
            </p>
          </div>
        </div>
      </section>

      {/* 4. FOOTER */}
      <footer className="mt-auto bg-slate-900 text-slate-400 py-8 text-center text-sm border-t border-slate-800">
        <div className="max-w-6xl mx-auto px-4">
          <p>© {new Date().getFullYear()} BPPMHKP Online. Hak Cipta Dilindungi Undang-Undang.</p>
        </div>
      </footer>
    </div>
  );
}