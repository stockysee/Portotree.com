import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export function Navbar() {
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

          <nav className="hidden md:flex items-center space-x-8 text-sm font-medium">
            <Link href="#features" className="transition-colors hover:text-foreground/80 text-foreground/60">Fitur</Link>
            <Link href="#templates" className="transition-colors hover:text-foreground/80 text-foreground/60">Template</Link>
            <Link href="#pricing" className="transition-colors hover:text-foreground/80 text-foreground/60">Harga</Link>
          </nav>
          
          <div className="flex items-center space-x-2">
            <Link href="/register">
              <Button className="rounded-full">Daftar Sekarang</Button>
            </Link>
          </div>
        </div>
      </header>
    </div>
  );
}
