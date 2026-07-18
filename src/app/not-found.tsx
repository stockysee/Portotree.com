"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Home, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center p-6 md:p-12 overflow-hidden relative">
      {/* Decorative Orbs */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-green-400/20 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl translate-y-1/2 translate-x-1/2 pointer-events-none"></div>

      <div className="relative z-10 flex flex-col items-center text-center max-w-2xl mx-auto w-full">
        
        {/* Animated Brand Logo */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8 md:mb-12"
        >
          <img src="/logo-landscape.png" alt="PortoTree" className="h-8 md:h-10 w-auto" />
        </motion.div>

        {/* Main 404 Illustration Area */}
        <div className="relative mb-8 flex justify-center items-center h-48 md:h-64 w-full">
          {/* Big 404 Text Background */}
          <motion.h1 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", bounce: 0.5, duration: 0.8, delay: 0.2 }}
            className="absolute text-[8rem] md:text-[14rem] font-black text-green-600/5 leading-none select-none tracking-tighter"
          >
            404
          </motion.h1>

          {/* Bouncing Logo in Center */}
          <motion.div
            animate={{ y: [0, -20, 0] }}
            transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut" }}
            className="relative z-10"
          >
            <img src="/logo-portotree.png" alt="Tree Icon" className="w-24 h-24 md:w-32 md:h-32 drop-shadow-2xl" />
          </motion.div>
        </div>

        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="w-full px-4"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4 tracking-tight">
            Waduh! Anda Tersesat
          </h2>
          <p className="text-base md:text-lg text-gray-500 mb-10 max-w-md mx-auto leading-relaxed">
            Halaman yang Anda cari mungkin sudah dipindahkan, dihapus, atau memang tidak pernah ada.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/" className="w-full sm:w-auto">
              <Button size="lg" className="w-full h-14 px-8 text-base font-bold bg-green-600 hover:bg-green-700 text-white rounded-full shadow-lg hover:shadow-green-600/30 transition-all hover:-translate-y-1">
                <Home className="w-5 h-5 mr-2" />
                Kembali ke Beranda
              </Button>
            </Link>
            <Button 
              size="lg" 
              variant="outline" 
              className="w-full sm:w-auto h-14 px-8 text-base font-bold rounded-full hover:bg-slate-100 transition-all border-gray-200 text-gray-700" 
              onClick={() => window.history.back()}
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Kembali
            </Button>
          </div>
        </motion.div>

      </div>
    </div>
  );
}
