import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { 
  LayoutDashboard, GraduationCap, Wallet, Building2, BookOpenCheck, CalendarDays, LifeBuoy, X,
  ShieldAlert, Settings, Users, Server, Terminal, Lock, Activity, Microscope,
  UsersRound, FileDiff, CheckSquare, Search, UploadCloud,
  Receipt, BarChart3, Landmark, BookCopy, Share2, UserCheck, TrendingUp,
  Bell, User, Stethoscope, Trophy, ClipboardList, PieChart,
  BookOpen, RefreshCcw, FileText, Award, AlertTriangle, ScanLine, ShieldCheck
} from 'lucide-react';

const studentNav = [
  { name: 'Dashboard', href: '/', icon: LayoutDashboard },
  { name: 'My Profile', href: '/profile', icon: User },
  { name: 'Academics', href: '/academics', icon: GraduationCap },
  { name: 'Curriculum Guide', href: '/curriculum', icon: BookOpen },
  { name: 'Item Cards', href: '/academics/item-cards', icon: ClipboardList },
  { name: 'Exam Results', href: '/results', icon: Award },
  { name: 'My Attendance', href: '/attendance', icon: CheckSquare },
  { name: 'Class Schedule', href: '/schedule', icon: CalendarDays },
  { name: 'Finances', href: '/finances', icon: Wallet },
  { name: 'Hostel', href: '/hostel', icon: Building2 },
  { name: 'Quizzes/Exams', href: '/exams', icon: BookOpenCheck },
  { name: 'Makeup Exam', href: '/exams/makeup', icon: RefreshCcw },
  { name: 'Documents', href: '/documents', icon: FileText },
  { name: 'Library Log', href: '/library/my-log', icon: BookCopy },
  { name: 'Notice Board', href: '/notices', icon: Bell },
  { name: 'Help Center', href: '/help', icon: LifeBuoy },
];

const adminNav = [
  { name: "Principal's Desk", href: '/admin', icon: ShieldAlert },
  { name: 'Faculty & HR', href: '#', icon: Users },
  { name: 'Student Directory', href: '#', icon: GraduationCap },
  { name: 'Admissions Data', href: '#', icon: TrendingUp },
  { name: 'Financial Overview', href: '#', icon: Landmark },
  { name: 'College Settings', href: '#', icon: Settings },
];

const teacherNav = [
  { name: 'Teacher Hub', href: '/teacher', icon: LayoutDashboard },
  { name: 'My Classes', href: '#', icon: UsersRound },
  { name: 'Attendance Register', href: '/teacher/attendance', icon: CheckSquare },
  { name: 'Quiz Builder', href: '/teacher/quiz-builder', icon: BookOpenCheck },
  { name: 'Exam Grading', href: '/teacher/grading', icon: FileDiff },
  { name: 'Formative Calc', href: '/teacher/formative', icon: BarChart3 },
  { name: 'Item Cards', href: '/teacher/item-cards', icon: ClipboardList },
];

const financeNav = [
  { name: 'Finance Admin', href: '/finance-admin', icon: Landmark },
  { name: 'Data Sync', href: '/finance-admin/sync', icon: Receipt },
  { name: 'Fee Defaulters', href: '/finance-admin/defaulters', icon: AlertTriangle },
  { name: 'Revenue Reports', href: '#', icon: BarChart3 },
  { name: 'Pending Invoices', href: '#', icon: Receipt },
];

const guardianNav = [
  { name: 'Parent View', href: '/guardian', icon: UserCheck },
  { name: 'Child Progress', href: '#', icon: Activity },
  { name: 'Fee Payments', href: '#', icon: Wallet },
];

const hodNav = [
  { name: 'HOD Command Center', href: '/hod', icon: Microscope },
  { name: 'Faculty Members', href: '#', icon: UsersRound },
  { name: 'Attendance Overrides', href: '/hod/attendance-override', icon: ShieldAlert },
  { name: 'Department Analytics', href: '#', icon: BarChart3 },
  { name: 'HOD Reports', href: '#', icon: FileDiff },
];

const principalNav = [
  { name: "Principal's Dashboard", href: '/principal', icon: Stethoscope },
  { name: 'Department Overview', href: '#', icon: Microscope },
  { name: 'Enrollment Analytics', href: '#', icon: PieChart },
  { name: 'Faculty & Staff', href: '#', icon: Users },
  { name: 'Accreditation', href: '#', icon: Trophy },
  { name: 'Audit Trail', href: '#', icon: ClipboardList },
];

const libraryNav = [
  // ── Student ──
  { name: 'Library Home', href: '/library', icon: BookCopy },
  { name: 'Browse Catalog', href: '/library/catalog', icon: Search },
  { name: 'My Borrow Log', href: '/library/my-log', icon: BookOpenCheck },
  { name: 'Reading List', href: '/library/reading-list', icon: BookOpen },
  // ── Admin ──
  { name: '— Admin —', href: '#', icon: ShieldCheck, divider: true },
  { name: 'Checkout / Return', href: '/library/checkout', icon: ScanLine },
  { name: 'Analytics', href: '/library/analytics', icon: BarChart3 },
  { name: 'Upload Book', href: '/library/upload', icon: UploadCloud },
  { name: 'Recent Activity', href: '/library/activity', icon: Activity },
];

interface SidebarProps {
  sidebarOpen: boolean;
  setSidebarOpen: (open: boolean) => void;
}

export default function Sidebar({ sidebarOpen, setSidebarOpen }: SidebarProps) {
  const pathname = usePathname();

  // Dynamic context router
  let activeNav = studentNav;
  let activeTitle = "Student Portal";
  if (pathname.startsWith('/principal')) { activeNav = principalNav; activeTitle = "Principal's Office"; }
  else if (pathname.startsWith('/admin')) { activeNav = adminNav; activeTitle = "Super Admin"; }
  else if (pathname.startsWith('/teacher')) { activeNav = teacherNav; activeTitle = "Teacher Hub"; }
  else if (pathname.startsWith('/finance-admin')) { activeNav = financeNav; activeTitle = "Accounts"; }
  else if (pathname.startsWith('/guardian')) { activeNav = guardianNav; activeTitle = "Guardian"; }
  else if (pathname.startsWith('/hod')) { activeNav = hodNav; activeTitle = "Head of Dept."; }
  else if (pathname.startsWith('/library')) { activeNav = libraryNav; activeTitle = "e-Library"; }

  return (
    <>
      {sidebarOpen && (
        <div 
          className="fixed inset-0 z-40 bg-gray-900/80 lg:hidden backdrop-blur-sm transition-opacity"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      <div className={`
        fixed inset-y-0 left-0 z-50 w-72 bg-white flex flex-col border-r border-gray-200 transform transition-transform duration-300 ease-in-out shadow-xl lg:shadow-none
        ${sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
      `}>
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
              <span className="text-[10px] font-bold tracking-widest text-brand-primary-blue uppercase truncate">{activeTitle}</span>
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

        <nav className="flex flex-1 flex-col overflow-y-auto pt-6 pb-4 px-4 space-y-1.5 custom-scrollbar">
          {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
          {(activeNav as any[]).map((item) => {
            // Divider label item
            if ((item as any).divider) {
              return (
                <div key={item.name} className="pt-3 pb-1">
                  <div className="flex items-center gap-2">
                    <div className="flex-1 h-px bg-gray-100" />
                    <span className="text-[9px] font-black text-gray-400 uppercase tracking-widest">Admin</span>
                    <div className="flex-1 h-px bg-gray-100" />
                  </div>
                </div>
              );
            }
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setSidebarOpen(false)}
                className={`
                  group flex items-center gap-x-3 rounded-xl px-3 py-2.5 text-sm font-semibold transition-all duration-200
                  ${isActive 
                    ? 'bg-brand-primary-blue/10 text-brand-primary-blue shadow-sm' 
                    : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'}
                `}
              >
                <item.icon
                  className={`h-5 w-5 shrink-0 transition-colors duration-200 ${
                    isActive ? 'text-brand-primary-blue' : 'text-gray-400 group-hover:text-gray-600'
                  }`}
                  aria-hidden="true"
                />
                {item.name}
              </Link>
            );
          })}
        </nav>
        
        <div className="p-4 mt-auto">
          <div className="bg-gradient-to-br from-brand-primary-blue/5 to-brand-primary-blue/10 rounded-2xl p-4 border border-brand-primary-blue/10 shadow-sm relative overflow-hidden group hover:shadow-md transition-all">
            <div className="absolute top-0 right-0 -mt-4 -mr-4 w-16 h-16 bg-brand-primary-blue/5 rounded-full blur-xl group-hover:bg-brand-primary-blue/10 transition-colors"></div>
            <h4 className="text-sm font-bold text-gray-900 mb-1">Need help?</h4>
            <p className="text-xs font-medium text-gray-500 mb-3 leading-relaxed">Contact campus support for any technical issues.</p>
            <Link href="/help" 
              onClick={() => setSidebarOpen(false)}
              className="w-full inline-flex justify-center text-xs font-bold text-white bg-brand-primary-blue py-2.5 px-4 rounded-xl shadow-sm hover:bg-brand-primary-blue/90 hover:shadow transition-all active:scale-95">
              Contact Support
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
