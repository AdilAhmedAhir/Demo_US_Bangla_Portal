'use client';

import React, { useState } from 'react';
import {
  BookCopy,
  ScanLine,
  Search,
  BarChart3,
  UploadCloud,
  BookOpenCheck,
  Activity,
  BookOpen,
  Clock,
  AlertTriangle,
  CheckCircle2,
  TrendingUp,
  Users,
  Eye,
  Star,
  ArrowRight,
  UserCheck,
  ShieldCheck,
} from 'lucide-react';
import Link from 'next/link';

/* ────────────────────────────────────────────────────────── */
/* Mock data                                                   */
/* ────────────────────────────────────────────────────────── */
const featuredBooks = [
  { title: "Jawetz Medical Microbiology", author: "Jawetz et al.", category: "Microbiology", cover: "from-blue-600 to-blue-800", readers: 48, rating: 4.8 },
  { title: "Robbins Basic Pathology", author: "Vinay Kumar", category: "Pathology", cover: "from-purple-600 to-purple-900", readers: 42, rating: 4.7 },
  { title: "Guyton Medical Physiology", author: "John E. Hall", category: "Physiology", cover: "from-red-600 to-red-900", readers: 38, rating: 4.9 },
  { title: "Park's Preventive Medicine", author: "K. Park", category: "Community Med", cover: "from-emerald-600 to-emerald-900", readers: 35, rating: 4.6 },
];

const recentlyAdded = [
  { title: "Langman's Medical Embryology", author: "T.W. Sadler", date: "Apr 12, 2026" },
  { title: "Harper's Illustrated Biochemistry", author: "Victor W. Rodwell", date: "Apr 10, 2026" },
  { title: "Snell's Clinical Neuroanatomy", author: "Ryan Splittgerber", date: "Apr 8, 2026" },
];

const myBorrows = [
  { title: 'Jawetz Medical Microbiology', dueDate: 'Apr 24, 2026', status: 'active' },
  { title: "Robbins Pathologic Basis of Disease", dueDate: 'Mar 29, 2026', status: 'overdue' },
];

const outstandingBooks = [
  { student: 'Hasan Mahmud', id: 'USB-2606', book: 'Jawetz Microbiology', due: 'Apr 5', days: 16 },
  { student: 'Rafi Islam', id: 'USB-2608', book: 'Robbins Pathology', due: 'Mar 28', days: 24 },
  { student: 'Karim Uddin', id: 'USB-2510', book: "Harrison's Principles", due: 'Apr 10', days: 11 },
];

/* ────────────────────────────────────────────────────────── */
/* Component                                                   */
/* ────────────────────────────────────────────────────────── */
type Role = 'student' | 'admin';

export default function LibraryHubPage() {
  const [role, setRole] = useState<Role>('student');

  return (
    <div className="flex flex-col gap-6 w-full pb-10 h-full">

      {/* ── Role Switcher ── */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-black text-gray-900 tracking-tight">Library Portal</h1>
          <p className="text-xs font-medium text-gray-400 mt-0.5">US Bangla Medical College &amp; Hospital</p>
        </div>

        {/* Role pill */}
        <div className="flex items-center bg-gray-100 rounded-2xl p-1 gap-1 self-start sm:self-auto">
          <button
            onClick={() => setRole('student')}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold transition-all ${
              role === 'student'
                ? 'bg-white shadow-md text-brand-primary-blue'
                : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            <UserCheck className="w-4 h-4" />
            Student View
          </button>
          <button
            onClick={() => setRole('admin')}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold transition-all ${
              role === 'admin'
                ? 'bg-white shadow-md text-indigo-600'
                : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            <ShieldCheck className="w-4 h-4" />
            Admin View
          </button>
        </div>
      </div>

      {/* ── STUDENT VIEW ── */}
      {role === 'student' && <StudentView />}

      {/* ── ADMIN VIEW ── */}
      {role === 'admin' && <AdminView />}
    </div>
  );
}

/* ────────────────────────────────────────────────────────── */
/* Student View                                                */
/* ────────────────────────────────────────────────────────── */
function StudentView() {
  return (
    <div className="flex flex-col gap-6">
      {/* Hero */}
      <div className="bg-gradient-to-br from-indigo-900 via-purple-900 to-slate-900 rounded-2xl p-6 md:p-8 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-72 h-72 bg-purple-500/20 blur-3xl rounded-full translate-x-1/3 -translate-y-1/3" />
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-blue-500/20 blur-3xl rounded-full -translate-x-1/3 translate-y-1/3" />
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <BookCopy className="w-5 h-5 text-purple-300" />
              <span className="text-xs font-bold tracking-widest uppercase text-purple-300">e-Library</span>
            </div>
            <h2 className="text-3xl font-black tracking-tight mb-2">Your Library, Anytime</h2>
            <p className="text-sm text-purple-200 max-w-lg leading-relaxed">
              Access 100+ curated medical textbooks online. Track your physical checkouts, manage your reading list, and request books directly from here.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link href="/library/catalog" className="bg-white text-purple-900 px-5 py-3 rounded-xl font-bold text-sm hover:bg-purple-50 transition shadow-lg flex items-center gap-2">
              <Search className="w-4 h-4" /> Browse Catalog
            </Link>
            <Link href="/library/my-log" className="bg-white/10 border border-white/20 text-white px-5 py-3 rounded-xl font-bold text-sm hover:bg-white/20 transition flex items-center gap-2">
              <BookOpen className="w-4 h-4" /> My Borrow Log
            </Link>
          </div>
        </div>
      </div>

      {/* My Active Borrows */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-100 flex items-center justify-between">
          <h3 className="text-sm font-bold text-gray-900 flex items-center gap-2">
            <Clock className="w-4 h-4 text-brand-primary-blue" /> My Current Borrows
          </h3>
          <Link href="/library/my-log" className="text-xs font-bold text-brand-primary-blue hover:underline flex items-center gap-1">
            View All <ArrowRight className="w-3 h-3" />
          </Link>
        </div>
        <div className="divide-y divide-gray-50">
          {myBorrows.map((b, i) => (
            <div key={i} className="px-6 py-3.5 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-indigo-50 border border-indigo-100 flex items-center justify-center shrink-0">
                  <BookOpen className="w-3.5 h-3.5 text-indigo-500" />
                </div>
                <div>
                  <p className="text-sm font-bold text-gray-900">{b.title}</p>
                  <p className="text-[10px] text-gray-400 font-medium">Due: {b.dueDate}</p>
                </div>
              </div>
              {b.status === 'overdue' ? (
                <span className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-red-50 text-[#ed1c24] border border-red-200 flex items-center gap-1">
                  <AlertTriangle className="w-3 h-3" /> Overdue
                </span>
              ) : (
                <span className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-blue-50 text-brand-primary-blue border border-blue-200 flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3" /> Reading
                </span>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Quick Links grid */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {[
          { label: 'Browse Catalog', icon: Search, href: '/library/catalog', color: 'from-blue-500 to-blue-600' },
          { label: 'My Borrow Log', icon: BookCopy, href: '/library/my-log', color: 'from-indigo-500 to-indigo-600' },
          { label: 'Reading List', icon: BookOpenCheck, href: '/library/reading-list', color: 'from-violet-500 to-violet-600' },
          { label: 'Recent Activity', icon: Activity, href: '/library/activity', color: 'from-slate-500 to-slate-600' },
        ].map(item => (
          <Link key={item.label} href={item.href}
            className={`bg-gradient-to-br ${item.color} text-white rounded-2xl p-5 flex flex-col gap-3 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all`}>
            <item.icon className="w-5 h-5" />
            <span className="text-xs font-bold">{item.label}</span>
          </Link>
        ))}
      </div>

      {/* Featured Books */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-base font-bold text-gray-900">Most Read This Semester</h3>
          <Link href="/library/catalog" className="text-xs font-bold text-brand-primary-blue hover:underline flex items-center gap-1">
            View All <ArrowRight className="w-3 h-3" />
          </Link>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {featuredBooks.map((book, i) => (
            <div key={i} className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden hover:shadow-md hover:-translate-y-0.5 transition-all">
              <div className={`bg-gradient-to-br ${book.cover} h-28 flex items-end p-3`}>
                <span className="text-[9px] font-bold bg-white/20 text-white px-2 py-0.5 rounded-full">{book.category}</span>
              </div>
              <div className="p-3">
                <p className="text-xs font-black text-gray-900 leading-tight mb-1 line-clamp-2">{book.title}</p>
                <p className="text-[9px] text-gray-500 mb-2">{book.author}</p>
                <div className="flex items-center justify-between">
                  <span className="text-[9px] font-bold text-gray-400 flex items-center gap-0.5"><Eye className="w-2.5 h-2.5" /> {book.readers}</span>
                  <span className="text-[9px] font-bold text-amber-600 flex items-center gap-0.5"><Star className="w-2.5 h-2.5" /> {book.rating}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Recently Added */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-100">
          <h3 className="text-sm font-bold text-gray-900">Recently Added to the Library</h3>
        </div>
        <div className="divide-y divide-gray-50">
          {recentlyAdded.map((book, i) => (
            <div key={i} className="px-6 py-3.5 flex items-center justify-between hover:bg-slate-50 transition-colors">
              <div>
                <p className="text-sm font-bold text-gray-900">{book.title}</p>
                <p className="text-[10px] text-gray-400">{book.author}</p>
              </div>
              <span className="text-[10px] text-gray-400 font-bold">{book.date}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ────────────────────────────────────────────────────────── */
/* Admin View                                                  */
/* ────────────────────────────────────────────────────────── */
function AdminView() {
  const [studentId, setStudentId] = useState('');
  const [bookId, setBookId] = useState('');
  const [returnRef, setReturnRef] = useState('');
  const [activeTab, setActiveTab] = useState<'checkout' | 'return'>('checkout');
  const [checkoutSuccess, setCheckoutSuccess] = useState(false);
  const [returnSuccess, setReturnSuccess] = useState(false);

  const handleCheckout = (e: React.FormEvent) => {
    e.preventDefault();
    if (studentId && bookId) {
      setCheckoutSuccess(true);
      setStudentId(''); setBookId('');
      setTimeout(() => setCheckoutSuccess(false), 4000);
    }
  };

  const handleReturn = (e: React.FormEvent) => {
    e.preventDefault();
    if (returnRef) {
      setReturnSuccess(true);
      setReturnRef('');
      setTimeout(() => setReturnSuccess(false), 4000);
    }
  };

  return (
    <div className="flex flex-col gap-6">
      {/* KPI Strip */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4">
          <p className="text-[10px] font-bold text-gray-400 uppercase mb-1">Total Inventory</p>
          <p className="text-2xl font-black text-gray-900">12,847</p>
          <p className="text-[10px] text-emerald-600 font-bold mt-1">Physical books</p>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4">
          <p className="text-[10px] font-bold text-gray-400 uppercase mb-1">Currently Checked Out</p>
          <p className="text-2xl font-black text-brand-primary-blue">178</p>
          <p className="text-[10px] text-gray-400 font-bold mt-1">Active borrows</p>
        </div>
        <div className="bg-red-50 rounded-xl border border-red-200 p-4">
          <p className="text-[10px] font-bold text-[#ed1c24] uppercase mb-1">Overdue</p>
          <p className="text-2xl font-black text-[#ed1c24]">3</p>
          <p className="text-[10px] text-[#ed1c24] font-bold mt-1">Needs follow-up</p>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4">
          <p className="text-[10px] font-bold text-gray-400 uppercase mb-1">Active Readers</p>
          <p className="text-2xl font-black text-gray-900">342</p>
          <p className="text-[10px] text-gray-400 font-bold mt-1">This semester</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Checkout / Return Form */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          {/* Tab headers */}
          <div className="flex border-b border-gray-100">
            <button
              onClick={() => setActiveTab('checkout')}
              className={`flex-1 py-4 text-sm font-bold flex items-center justify-center gap-2 transition-colors ${
                activeTab === 'checkout'
                  ? 'text-brand-primary-blue border-b-2 border-brand-primary-blue bg-blue-50/30'
                  : 'text-gray-500 hover:text-gray-700 hover:bg-gray-50'
              }`}
            >
              <ScanLine className="w-4 h-4" /> Issue Book
            </button>
            <button
              onClick={() => setActiveTab('return')}
              className={`flex-1 py-4 text-sm font-bold flex items-center justify-center gap-2 transition-colors ${
                activeTab === 'return'
                  ? 'text-emerald-600 border-b-2 border-emerald-500 bg-emerald-50/30'
                  : 'text-gray-500 hover:text-gray-700 hover:bg-gray-50'
              }`}
            >
              <CheckCircle2 className="w-4 h-4" /> Return Book
            </button>
          </div>

          <div className="p-6">
            {activeTab === 'checkout' ? (
              <form onSubmit={handleCheckout} className="space-y-5">
                {checkoutSuccess && (
                  <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-bold text-emerald-800">Book Issued Successfully!</p>
                      <p className="text-xs text-emerald-600 mt-0.5">Due date set to 14 days from today.</p>
                    </div>
                  </div>
                )}
                <div>
                  <label className="block text-xs font-bold text-gray-600 uppercase tracking-wider mb-2">Student / Faculty ID</label>
                  <input
                    type="text"
                    value={studentId}
                    onChange={e => setStudentId(e.target.value)}
                    placeholder="e.g. USB-2601"
                    required
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm font-bold text-gray-900 placeholder-gray-400 focus:bg-white focus:ring-2 focus:ring-brand-primary-blue/20 focus:border-brand-primary-blue transition-all"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-600 uppercase tracking-wider mb-2">Book ISBN / Ref ID</label>
                  <input
                    type="text"
                    value={bookId}
                    onChange={e => setBookId(e.target.value)}
                    placeholder="e.g. 978-0123456789"
                    required
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm font-bold text-gray-900 placeholder-gray-400 focus:bg-white focus:ring-2 focus:ring-brand-primary-blue/20 focus:border-brand-primary-blue transition-all"
                  />
                </div>
                <button type="submit" className="w-full py-3.5 rounded-xl bg-brand-primary-blue text-white text-sm font-bold hover:bg-brand-primary-blue/90 transition-all shadow-sm">
                  Confirm Checkout →
                </button>
                <div className="text-[10px] text-gray-400 text-center">Standard loan period: 14 days for students · 30 days for faculty</div>
              </form>
            ) : (
              <form onSubmit={handleReturn} className="space-y-5">
                {returnSuccess && (
                  <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-bold text-emerald-800">Book Returned Successfully!</p>
                      <p className="text-xs text-emerald-600 mt-0.5">Record updated and inventory restored.</p>
                    </div>
                  </div>
                )}
                <div>
                  <label className="block text-xs font-bold text-gray-600 uppercase tracking-wider mb-2">Checkout Reference ID</label>
                  <input
                    type="text"
                    value={returnRef}
                    onChange={e => setReturnRef(e.target.value)}
                    placeholder="e.g. CHK-001"
                    required
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm font-bold text-gray-900 placeholder-gray-400 focus:bg-white focus:ring-2 focus:ring-emerald-400/20 focus:border-emerald-500 transition-all"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-600 uppercase tracking-wider mb-2">Book Condition</label>
                  <select className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm font-bold text-gray-900 focus:ring-2 focus:ring-emerald-400/20 focus:border-emerald-500 transition-all">
                    <option>Good condition</option>
                    <option>Minor wear</option>
                    <option>Damaged — fine applicable</option>
                  </select>
                </div>
                <button type="submit" className="w-full py-3.5 rounded-xl bg-emerald-600 text-white text-sm font-bold hover:bg-emerald-700 transition-all shadow-sm">
                  Confirm Return →
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Overdue / Outstanding */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-100 flex items-center justify-between">
            <h3 className="text-sm font-bold text-gray-900 flex items-center gap-2">
              <AlertTriangle className="w-4 h-4 text-amber-500" /> Overdue & Outstanding
            </h3>
            <Link href="/library/analytics" className="text-xs font-bold text-brand-primary-blue hover:underline flex items-center gap-1">
              Full Analytics <ArrowRight className="w-3 h-3" />
            </Link>
          </div>
          <div className="divide-y divide-gray-50">
            {outstandingBooks.map((item, i) => (
              <div key={i} className="px-6 py-4 flex items-center justify-between hover:bg-red-50/20 transition-colors">
                <div>
                  <p className="text-sm font-bold text-gray-900">{item.book}</p>
                  <p className="text-[10px] text-gray-500">{item.student} · {item.id}</p>
                  <p className="text-[10px] text-gray-400">Due: {item.due}</p>
                </div>
                <span className="text-sm font-black text-[#ed1c24] bg-red-50 px-3 py-1 rounded-full border border-red-200">
                  {item.days}d
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Admin Quick Links */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {[
          { label: 'Checkout / Return', icon: ScanLine, href: '/library/checkout', color: 'from-indigo-500 to-indigo-700' },
          { label: 'Analytics', icon: BarChart3, href: '/library/analytics', color: 'from-blue-500 to-blue-700' },
          { label: 'Upload Book', icon: UploadCloud, href: '/library/upload', color: 'from-violet-500 to-violet-700' },
          { label: 'Recent Activity', icon: Activity, href: '/library/activity', color: 'from-slate-500 to-slate-700' },
        ].map(item => (
          <Link key={item.label} href={item.href}
            className={`bg-gradient-to-br ${item.color} text-white rounded-2xl p-5 flex flex-col gap-3 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all`}>
            <item.icon className="w-5 h-5" />
            <span className="text-xs font-bold">{item.label}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
