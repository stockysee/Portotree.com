export default function PortofolioHub() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-slate-800 mb-4">PortoTree Portofolio</h1>
        <p className="text-slate-600 mb-8 max-w-md mx-auto">
          Pilih tipe portofolio yang ingin Anda buat untuk masa depan karir yang lebih cemerlang.
        </p>
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <a href="/personal" className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors">
            Untuk Personal
          </a>
          <a href="/company" className="px-6 py-3 bg-emerald-600 text-white font-medium rounded-lg hover:bg-emerald-700 transition-colors">
            Untuk Perusahaan
          </a>
        </div>
      </div>
    </div>
  );
}
