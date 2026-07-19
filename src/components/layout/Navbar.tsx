"use client";

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function Navbar() {
  // Mock status login untuk simulasi UI
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const router = useRouter();

  return (
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
            <Link href="#features" className="transition-colors hover:text-foreground/80 text-foreground/60">Fitur</Link>
            <Link href="#templates" className="transition-colors hover:text-foreground/80 text-foreground/60">Template</Link>
            <Link href="#pricing" className="transition-colors hover:text-foreground/80 text-foreground/60">Harga</Link>
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
  );
}
