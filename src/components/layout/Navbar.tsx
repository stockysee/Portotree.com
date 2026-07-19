"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ChevronDown, Briefcase, Layout, FileText, X } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function Navbar() {
  // Mock status login untuk simulasi UI
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showFabTooltip, setShowFabTooltip] = useState(false);
  const [isFabOpen, setIsFabOpen] = useState(false);
  const [showFab, setShowFab] = useState(false);
  const router = useRouter();

  useEffect(() => {
    // Tampilkan tombol FAB setelah 3 detik
    const fabTimer = setTimeout(() => {
      setShowFab(true);
    }, 3000);

    // Tampilkan tooltip 2 detik setelah FAB muncul (berarti 5 detik dari awal)
    const tooltipTimer = setTimeout(() => {
      setShowFabTooltip(true);
    }, 5000);

    return () => {
      clearTimeout(fabTimer);
      clearTimeout(tooltipTimer);
    };
  }, []);

  return (
    <>
      <div className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4">
        <header className="w-full max-w-7xl rounded-full border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 shadow-md">
          <div className="flex h-14 items-center justify-between px-6 md:px-8">
            <div className="flex items-center">
              <Link href="/" className="flex items-center">
                <Image 
                  src="/logo-landscape.png" 
                  alt="PortoTree" 
                  width={200} 
                  height={50} 
                  className="h-10 w-auto" 
                  priority 
                />
              </Link>
            </div>

            <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
              <DropdownMenu modal={false}>
                <DropdownMenuTrigger className="transition-colors hover:text-foreground/80 text-foreground/60 flex items-center gap-1 focus:outline-none">
                  Produk <ChevronDown className="w-4 h-4" />
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start" className="w-64 mt-4 rounded-xl p-2 shadow-xl border-slate-100">
                  <DropdownMenuItem className="cursor-pointer gap-4 p-3 rounded-lg hover:bg-slate-50">
                    <div className="bg-emerald-100/50 p-2.5 rounded-lg text-emerald-600">
                      <Briefcase className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="font-bold text-sm text-slate-800">Job Feed</div>
                      <div className="text-xs text-slate-500 mt-0.5">Cari lowongan kerja terbaru</div>
                    </div>
                  </DropdownMenuItem>
                  <DropdownMenuItem className="cursor-pointer gap-4 p-3 rounded-lg hover:bg-slate-50 mt-1">
                    <div className="bg-blue-100/50 p-2.5 rounded-lg text-blue-600">
                      <Layout className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="font-bold text-sm text-slate-800">Buat Portofolio</div>
                      <div className="text-xs text-slate-500 mt-0.5">Pamerkan karya Anda</div>
                    </div>
                  </DropdownMenuItem>
                  <DropdownMenuItem className="cursor-pointer gap-4 p-3 rounded-lg hover:bg-slate-50 mt-1">
                    <div className="bg-amber-100/50 p-2.5 rounded-lg text-amber-600">
                      <FileText className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="font-bold text-sm text-slate-800">Buat CV</div>
                      <div className="text-xs text-slate-500 mt-0.5">Bikin CV standar ATS</div>
                    </div>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
              <Link href="https://www.portotree.com/blog" target="_blank" className="transition-colors hover:text-foreground/80 text-foreground/60">Blog</Link>
              <Link href="https://www.portotree.com/about" target="_blank" className="transition-colors hover:text-foreground/80 text-foreground/60">About</Link>
            </nav>
            
            <div className="flex items-center gap-4">
              {/* Tombol Utama (Disembunyikan di Mobile) */}
              <Link href={isLoggedIn ? "/dashboard" : "/register"} className="hidden md:block">
                <Button className="rounded-full bg-green-600 hover:bg-green-700 text-white shadow-sm font-semibold px-6">
                  {isLoggedIn ? "Dashboard" : "Daftar Sekarang"}
                </Button>
              </Link>

              {/* Icon Profil User */}
              <DropdownMenu modal={false}>
                <DropdownMenuTrigger className={`rounded-full overflow-hidden border-2 transition-all focus:outline-none ${isLoggedIn ? 'border-transparent hover:border-green-500 focus:ring-2 focus:ring-green-500' : 'border-transparent hover:border-gray-300'}`}>
                  <Image 
                    src="/user.png" 
                    alt={isLoggedIn ? "Profile" : "User"} 
                    width={32} 
                    height={32} 
                    className={`w-8 h-8 object-cover ${!isLoggedIn ? 'opacity-80 hover:opacity-100 transition-opacity' : ''}`} 
                  />
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-48 mt-2 rounded-xl">
                  {isLoggedIn ? (
                    <>
                      <DropdownMenuItem 
                        onClick={() => router.push('/dashboard')} 
                        className="cursor-pointer font-medium w-full"
                      >
                        Dashboard
                      </DropdownMenuItem>
                      <DropdownMenuItem 
                        className="cursor-pointer text-red-600 focus:bg-red-50 focus:text-red-700 w-full mt-1" 
                        onClick={() => setIsLoggedIn(false)}
                      >
                        Logout
                      </DropdownMenuItem>
                    </>
                  ) : (
                    <>
                      <DropdownMenuItem 
                        className="cursor-pointer font-medium w-full"
                        onClick={() => setIsLoggedIn(true)}
                      >
                        Login
                      </DropdownMenuItem>
                      <DropdownMenuItem 
                        onClick={() => router.push('/register')} 
                        className="cursor-pointer w-full mt-1"
                      >
                        Daftar
                      </DropdownMenuItem>
                    </>
                  )}
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </header>
      </div>

      {/* Floating Navigation FAB for Mobile */}
      <AnimatePresence>
        {showFab && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="fixed bottom-6 right-6 md:hidden z-[110]"
          >
            {/* Onboarding Tooltip */}
            <AnimatePresence>
              {showFabTooltip && (
                <motion.div 
                  initial={{ opacity: 0, x: 20, scale: 0.8 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="absolute right-[68px] bottom-2 w-max bg-green-600/85 backdrop-blur-md text-white px-3.5 py-2.5 rounded-2xl shadow-xl z-50 border border-green-500/50 origin-right"
                >
                  <div className="flex items-center gap-3 justify-between">
                    <span className="font-semibold text-sm leading-none drop-shadow-sm whitespace-nowrap">Kebutuhan anda disini</span>
                    <button onClick={() => setShowFabTooltip(false)} className="text-white/80 hover:text-white shrink-0">
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                  {/* Right tail */}
                  <div className="absolute top-1/2 -right-[6px] -translate-y-1/2 w-0 h-0 border-t-[6px] border-t-transparent border-l-[6px] border-l-green-600/85 border-b-[6px] border-b-transparent backdrop-blur-md"></div>
                </motion.div>
              )}
            </AnimatePresence>

            <DropdownMenu modal={false} onOpenChange={setIsFabOpen}>
              <DropdownMenuTrigger className={`rounded-full shadow-lg focus:outline-none active:scale-95 transition-all w-14 h-14 flex items-center justify-center relative z-10 backdrop-blur-md ${
                isFabOpen 
                  ? 'bg-white/85 shadow-slate-200/50 hover:bg-slate-50/90 border border-slate-200 text-slate-700' 
                  : 'bg-green-600/85 hover:bg-green-700/85 shadow-green-600/30'
              }`}>
                {isFabOpen ? (
                  <X className="w-6 h-6 animate-in zoom-in duration-300" strokeWidth={2.5} />
                ) : (
                  <Image src="/nav.png" alt="Navigation" width={28} height={28} className="w-7 h-7 object-contain brightness-0 invert opacity-95 animate-in zoom-in duration-300" />
                )}
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" side="top" className="w-64 mb-4 rounded-xl p-2 shadow-xl border-slate-100">
            <DropdownMenuItem className="cursor-pointer gap-4 p-3 rounded-lg hover:bg-slate-50">
              <div className="bg-emerald-100/50 p-2.5 rounded-lg text-emerald-600">
                <Briefcase className="w-5 h-5" />
              </div>
              <div>
                <div className="font-bold text-sm text-slate-800">Job Feed</div>
                <div className="text-xs text-slate-500 mt-0.5">Cari lowongan kerja terbaru</div>
              </div>
            </DropdownMenuItem>
            <DropdownMenuItem className="cursor-pointer gap-4 p-3 rounded-lg hover:bg-slate-50 mt-1">
              <div className="bg-blue-100/50 p-2.5 rounded-lg text-blue-600">
                <Layout className="w-5 h-5" />
              </div>
              <div>
                <div className="font-bold text-sm text-slate-800">Buat Portofolio</div>
                <div className="text-xs text-slate-500 mt-0.5">Pamerkan karya Anda</div>
              </div>
            </DropdownMenuItem>
            <DropdownMenuItem className="cursor-pointer gap-4 p-3 rounded-lg hover:bg-slate-50 mt-1">
              <div className="bg-amber-100/50 p-2.5 rounded-lg text-amber-600">
                <FileText className="w-5 h-5" />
              </div>
              <div>
                <div className="font-bold text-sm text-slate-800">Buat CV</div>
                <div className="text-xs text-slate-500 mt-0.5">Bikin CV standar ATS</div>
              </div>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
