import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { GraduationCap, Palette, Briefcase, Rocket, CheckCircle2, Globe, FileText } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function UntukSiapaPage() {
  const audiences = [
    {
      id: "fresh-grad",
      title: "Fresh Graduate",
      icon: <GraduationCap className="w-12 h-12 text-blue-600" />,
      badgeColor: "bg-blue-100 text-blue-700",
      description:
        "Memasuki dunia kerja untuk pertama kalinya memang menantang. Persaingan ketat membuat CV biasa saja tidak lagi cukup untuk menarik perhatian rekruter. PortoTree membantu Anda membangun kehadiran digital yang profesional sejak hari pertama.",
      benefits: [
        "Tampil menonjol dari ratusan pelamar lain",
        "Tunjukkan proyek kuliah dan magang secara visual",
        "Buktikan bahwa Anda melek teknologi dan profesional",
        "Kesan pertama yang kuat di mata HRD dan User"
      ]
    },
    {
      id: "creative",
      title: "Profesional Kreatif",
      icon: <Palette className="w-12 h-12 text-purple-600" />,
      badgeColor: "bg-purple-100 text-purple-700",
      description:
        "Sebagai desainer, penulis, fotografer, atau kreator konten, karya Anda adalah aset terbesar. PortoTree menyediakan wadah elegan yang fokus menonjolkan estetika dan detail dari setiap karya Anda tanpa gangguan elemen yang tidak perlu.",
      benefits: [
        "Galeri visual beresolusi tinggi yang memukau",
        "Kategorisasi portofolio berdasarkan jenis proyek",
        "Mudah dibagikan ke klien atau agensi kapan saja",
        "Desain halaman yang tidak menutupi keindahan karya asli Anda"
      ]
    },
    {
      id: "freelancer",
      title: "Freelancer",
      icon: <Briefcase className="w-12 h-12 text-amber-600" />,
      badgeColor: "bg-amber-100 text-amber-700",
      description:
        "Bagi seorang pekerja lepas, kepercayaan klien adalah segalanya. Portofolio yang tertata rapi tidak hanya menunjukkan hasil kerja Anda, tetapi juga membuktikan kredibilitas, profesionalisme, dan nilai jual Anda di pasar yang kompetitif.",
      benefits: [
        "Tingkatkan rate (harga jasa) dengan portofolio profesional",
        "Tampilkan testimoni dan hasil studi kasus klien sebelumnya",
        "Satu tautan (link) untuk semua kebutuhan promosi Anda",
        "Yakinkan calon klien lebih cepat tanpa banyak presentasi"
      ]
    },
    {
      id: "career-switcher",
      title: "Career Switcher",
      icon: <Rocket className="w-12 h-12 text-emerald-600" />,
      badgeColor: "bg-emerald-100 text-emerald-700",
      description:
        "Berpindah jalur karier berarti Anda harus meyakinkan rekruter bahwa Anda memiliki kemampuan yang relevan meski pengalaman formal Anda minim. PortoTree adalah tempat terbaik untuk memamerkan proyek personal, sertifikasi, dan bootcamp yang telah Anda selesaikan.",
      benefits: [
        "Fokus pada proyek nyata dan keahlian baru Anda, bukan masa lalu",
        "Ceritakan perjalanan transformasi karier Anda dengan menarik",
        "Buktikan kompetensi teknis melalui studi kasus terstruktur",
        "Tingkatkan peluang lolos seleksi berkas di industri baru"
      ]
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      <Navbar />

      <main className="flex-grow pt-24 md:pt-32">
        {/* HERO SECTION */}
        <section className="px-6 md:px-8 py-12 md:py-20 text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-gray-900 mb-6">
            Untuk Siapa <span className="text-green-600">PortoTree?</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
            PortoTree dirancang fleksibel untuk berbagai latar belakang. Apa pun profesi atau tujuan Anda, kami memiliki ruang untuk memamerkan potensi terbaik Anda kepada dunia.
          </p>
        </section>

        {/* ARTICLES SECTION */}
        <section className="px-6 md:px-8 py-12 max-w-5xl mx-auto space-y-24 mb-24">
          {audiences.map((item, index) => (
            <div 
              key={item.id} 
              id={item.id}
              className={`flex flex-col md:flex-row items-center gap-12 md:gap-16 ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}
            >
              {/* Icon/Visual Side */}
              <div className="w-full md:w-5/12 flex justify-center">
                <div className="relative w-64 h-64 md:w-80 md:h-80 bg-white rounded-3xl shadow-xl flex items-center justify-center p-8 border border-gray-100 group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl opacity-50"></div>
                  <div className={`relative z-10 w-24 h-24 rounded-full flex items-center justify-center ${item.badgeColor}`}>
                    {item.icon}
                  </div>
                </div>
              </div>

              {/* Content Side */}
              <div className="w-full md:w-7/12 space-y-6">
                <div className={`inline-block px-4 py-1.5 rounded-full text-sm font-bold ${item.badgeColor}`}>
                  {item.title}
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                  Maksimalkan Potensi Anda
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  {item.description}
                </p>
                <ul className="space-y-3 pt-2">
                  {item.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-start gap-3 text-gray-700">
                      <CheckCircle2 className="w-6 h-6 text-green-500 shrink-0" />
                      <span className="leading-relaxed">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </section>

        {/* CTA SECTION (Reused from Home) */}
        <section className="pt-16 pb-24 md:pt-20 bg-white border-t border-border/40">
          <div className="w-full max-w-4xl mx-auto px-6 md:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 tracking-tight mb-4">
                Apa yang Anda butuhkan saat ini?
              </h2>
              <p className="text-lg md:text-xl text-gray-500">
                Pilih jalur di bawah untuk mulai membangun identitas profesional Anda.
              </p>
            </div>
            
            <div className="grid sm:grid-cols-2 gap-6 md:gap-8 max-w-3xl mx-auto">
              <Link 
                href="/register" 
                className="group flex flex-row sm:flex-col items-center justify-start sm:justify-center p-6 sm:py-12 sm:px-8 rounded-3xl border border-green-600 bg-white text-green-600 hover:bg-green-600 hover:text-white transition-all duration-300 shadow-sm hover:shadow-md"
              >
                <div className="shrink-0 w-16 h-16 sm:w-24 sm:h-24 bg-green-100/80 group-hover:bg-white/20 text-green-600 group-hover:text-white rounded-full flex items-center justify-center mr-4 sm:mr-0 mb-0 sm:mb-6 group-hover:scale-110 transition-all duration-300">
                  <Globe className="w-8 h-8 sm:w-12 sm:h-12" strokeWidth={1.5} />
                </div>
                <span className="font-bold text-xl sm:text-2xl text-left sm:text-center">
                  Buat Portofolio
                </span>
              </Link>
              
              <Link 
                href="/register?type=cv" 
                className="group flex flex-row sm:flex-col items-center justify-start sm:justify-center p-6 sm:py-12 sm:px-8 rounded-3xl border border-blue-600 bg-white text-blue-600 hover:bg-blue-600 hover:text-white transition-all duration-300 shadow-sm hover:shadow-md"
              >
                <div className="shrink-0 w-16 h-16 sm:w-24 sm:h-24 bg-blue-100/80 group-hover:bg-white/20 text-blue-600 group-hover:text-white rounded-full flex items-center justify-center mr-4 sm:mr-0 mb-0 sm:mb-6 group-hover:scale-110 transition-all duration-300">
                  <FileText className="w-8 h-8 sm:w-12 sm:h-12" strokeWidth={1.5} />
                </div>
                <span className="font-bold text-xl sm:text-2xl text-left sm:text-center">
                  Buat CV
                </span>
              </Link>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
