import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { 
  LayoutDashboard, 
  GraduationCap, 
  Wallet, 
  Building2, 
  BookOpenCheck,
  CalendarDays,
  LifeBuoy,
  X
} from 'lucide-react';

const navigation = [
  { name: 'Dashboard', href: '/', icon: LayoutDashboard },
  { name: 'Academics', href: '/academics', icon: GraduationCap },
  { name: 'Class Schedule', href: '/schedule', icon: CalendarDays },
  { name: 'Finances', href: '/finances', icon: Wallet },
  { name: 'Hostel', href: '/hostel', icon: Building2 },
  { name: 'Quizzes/Exams', href: '/exams', icon: BookOpenCheck },
  { name: 'Help Center', href: '/help', icon: LifeBuoy },
];

interface SidebarProps {
  sidebarOpen: boolean;
  setSidebarOpen: (open: boolean) => void;
}

export default function Sidebar({ sidebarOpen, setSidebarOpen }: SidebarProps) {
  const pathname = usePathname();

  return (
    <>
      {/* Mobile sidebar backdrop */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 z-40 bg-gray-900/80 lg:hidden backdrop-blur-sm transition-opacity"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div className={`
        fixed inset-y-0 left-0 z-50 w-72 bg-white flex flex-col border-r border-gray-200 transform transition-transform duration-300 ease-in-out shadow-xl lg:shadow-none
        ${sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
      `}>
        {/* Logo container */}
        <div className="flex h-20 shrink-0 items-center justify-between px-6 border-b border-gray-100 bg-white">
          <Link href="/" className="flex items-center gap-3 w-full">
            <div className="relative w-10 h-10 flex shrink-0 items-center justify-center bg-white rounded-lg border border-gray-200 overflow-hidden shadow-sm">
              <Image 
                src="/logo.png" 
                alt="US Bangla Medical College Logo" 
                width={32} 
                height={32}
                className="object-contain"
              />
            </div>
            <div className="flex flex-col overflow-hidden">
              <span className="text-[15px] font-bold text-gray-900 leading-tight truncate">US Bangla</span>
              <span className="text-[10px] font-bold tracking-widest text-brand-primary-blue uppercase truncate">Medical College</span>
            </div>
          </Link>
          <button 
            type="button" 
            className="lg:hidden p-2 -mr-2 text-gray-400 hover:text-gray-500 hover:bg-gray-100 rounded-lg transition-colors"
            onClick={() => setSidebarOpen(false)}
          >
            <X className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex flex-1 flex-col overflow-y-auto pt-6 pb-4 px-4 space-y-1.5 custom-scrollbar">
          {navigation.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.name}
                href={item.href}
                className={`
                  group flex items-center gap-x-3 rounded-xl px-3 py-2.5 text-sm font-semibold transition-all duration-200
                  ${isActive 
                    ? 'bg-brand-primary-green/10 text-brand-primary-green shadow-sm' 
                    : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'}
                `}
              >
                <item.icon
                  className={`h-5 w-5 shrink-0 transition-colors duration-200 ${
                    isActive ? 'text-brand-primary-green' : 'text-gray-400 group-hover:text-gray-600'
                  }`}
                  aria-hidden="true"
                />
                {item.name}
              </Link>
            );
          })}
        </nav>
        
        {/* Help / Support Card at bottom */}
        <div className="p-4 mt-auto">
          <div className="bg-gradient-to-br from-brand-primary-blue/5 to-brand-primary-blue/10 rounded-2xl p-4 border border-brand-primary-blue/10 shadow-sm relative overflow-hidden group hover:shadow-md transition-all">
            <div className="absolute top-0 right-0 -mt-4 -mr-4 w-16 h-16 bg-brand-primary-blue/5 rounded-full blur-xl group-hover:bg-brand-primary-blue/10 transition-colors"></div>
            <h4 className="text-sm font-bold text-gray-900 mb-1">Need help?</h4>
            <p className="text-xs font-medium text-gray-500 mb-3 leading-relaxed">Contact campus support for any technical issues.</p>
            <Link href="/help" className="w-full inline-flex justify-center text-xs font-bold text-white bg-brand-primary-blue py-2.5 px-4 rounded-xl shadow-sm hover:bg-brand-primary-blue/90 hover:shadow transition-all active:scale-95">
              Contact Support
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
