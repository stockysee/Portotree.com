import Link from 'next/link';
import { LayoutDashboard, FileText, Globe, Link as LinkIcon, Settings, User } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen bg-muted/20">
      {/* SIDEBAR */}
      <aside className="w-64 border-r bg-background hidden md:flex flex-col">
        <div className="h-16 flex items-center px-6 border-b">
          <Link href="/" className="font-bold tracking-tight text-xl">PortoTree</Link>
        </div>
        
        <nav className="flex-1 p-4 flex flex-col gap-2">
          <p className="px-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2 mt-4">Menu</p>
          <Link href="/dashboard" className="flex items-center gap-3 px-3 py-2 rounded-md bg-secondary text-secondary-foreground font-medium">
            <LayoutDashboard className="h-4 w-4" /> Overview
          </Link>
          <Link href="/dashboard/resumes" className="flex items-center gap-3 px-3 py-2 rounded-md text-muted-foreground hover:bg-muted hover:text-foreground transition-colors">
            <FileText className="h-4 w-4" /> Resumes
          </Link>
          <Link href="/dashboard/portfolio" className="flex items-center gap-3 px-3 py-2 rounded-md text-muted-foreground hover:bg-muted hover:text-foreground transition-colors">
            <Globe className="h-4 w-4" /> Portfolio
          </Link>
          <Link href="/dashboard/links" className="flex items-center gap-3 px-3 py-2 rounded-md text-muted-foreground hover:bg-muted hover:text-foreground transition-colors">
            <LinkIcon className="h-4 w-4" /> Links
          </Link>
          
          <p className="px-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2 mt-6">Settings</p>
          <Link href="/settings/profile" className="flex items-center gap-3 px-3 py-2 rounded-md text-muted-foreground hover:bg-muted hover:text-foreground transition-colors">
            <User className="h-4 w-4" /> Profile
          </Link>
          <Link href="/settings" className="flex items-center gap-3 px-3 py-2 rounded-md text-muted-foreground hover:bg-muted hover:text-foreground transition-colors">
            <Settings className="h-4 w-4" /> Preferences
          </Link>
        </nav>
      </aside>

      {/* MAIN CONTENT */}
      <div className="flex-1 flex flex-col">
        {/* TOPBAR */}
        <header className="h-16 border-b bg-background flex items-center justify-between px-6">
          <div className="md:hidden font-bold">PortoTree</div>
          <div className="ml-auto flex items-center space-x-4">
            <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">
              U
            </div>
          </div>
        </header>

        {/* PAGE CONTENT */}
        <main className="flex-1 p-6 md:p-8">
          {children}
        </main>
      </div>
    </div>
  );
}
