import React from 'react';
import { BookOpen, Search, Lock, DownloadCloud, UploadCloud, BookCopy, Users, TrendingUp, Eye, Star, Clock } from 'lucide-react';
import Link from 'next/link';

export default function LibraryPage() {
  const featuredBooks = [
    { title: "Gray's Anatomy for Students", author: "Richard L. Drake", category: "Anatomy", cover: "bg-blue-600", edition: "4th Edition", pages: 1168, readers: 342, rating: 4.9 },
    { title: "Guyton & Hall Medical Physiology", author: "John E. Hall", category: "Physiology", cover: "bg-red-800", edition: "14th Edition", pages: 1116, readers: 289, rating: 4.8 },
    { title: "Robbins Basic Pathology", author: "Vinay Kumar", category: "Pathology", cover: "bg-purple-800", edition: "10th Edition", pages: 952, readers: 215, rating: 4.7 },
    { title: "Netter's Clinical Anatomy", author: "John T. Hansen", category: "Anatomy", cover: "bg-emerald-700", edition: "4th Edition", pages: 624, readers: 198, rating: 4.8 },
  ];

  const recentlyAdded = [
    { title: "Langman's Medical Embryology", author: "T.W. Sadler", category: "Embryology", date: "Apr 12, 2026" },
    { title: "Harper's Illustrated Biochemistry", author: "Victor W. Rodwell", category: "Biochemistry", date: "Apr 10, 2026" },
    { title: "Snell's Clinical Neuroanatomy", author: "Ryan Splittgerber", category: "Anatomy", date: "Apr 8, 2026" },
  ];

  const categories = [
    { name: 'Anatomy', count: 24, color: 'bg-blue-500' },
    { name: 'Physiology', count: 18, color: 'bg-red-500' },
    { name: 'Biochemistry', count: 12, color: 'bg-amber-500' },
    { name: 'Pathology', count: 15, color: 'bg-purple-500' },
    { name: 'Pharmacology', count: 20, color: 'bg-emerald-500' },
    { name: 'Microbiology', count: 11, color: 'bg-pink-500' },
    { name: 'Community Med.', count: 8, color: 'bg-teal-500' },
    { name: 'Forensic Med.', count: 6, color: 'bg-orange-500' },
  ];

  return (
    <div className="flex flex-col gap-6 w-full pb-10">
      {/* Hero Header */}
      <div className="bg-gradient-to-br from-indigo-900 via-purple-900 to-slate-900 rounded-2xl p-6 md:p-8 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-72 h-72 bg-purple-500/20 blur-3xl rounded-full translate-x-1/3 -translate-y-1/3"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-blue-500/20 blur-3xl rounded-full -translate-x-1/3 translate-y-1/3"></div>
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <BookCopy className="w-5 h-5 text-purple-300" />
              <span className="text-xs font-bold tracking-widest uppercase text-purple-300">US Bangla Medical College</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-black tracking-tight mb-2">Digital Library Portal</h1>
            <p className="text-sm text-purple-200 max-w-lg leading-relaxed">
              Access 100+ curated medical textbooks, journals, and reference materials. Read securely online with our DRM-protected viewer. No downloads — no piracy.
            </p>
          </div>
          <div className="flex gap-3">
            <Link href="/library/catalog" className="bg-white text-purple-900 px-5 py-3 rounded-xl font-bold text-sm hover:bg-purple-50 transition shadow-lg flex items-center gap-2">
              <Search className="w-4 h-4" /> Browse Catalog
            </Link>
            <Link href="/library/upload" className="bg-white/10 border border-white/20 backdrop-blur-sm text-white px-5 py-3 rounded-xl font-bold text-sm hover:bg-white/20 transition flex items-center gap-2">
              <UploadCloud className="w-4 h-4" /> Upload Book
            </Link>
          </div>
        </div>
      </div>

      {/* Stats Row */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        <div className="bg-white rounded-xl p-4 border border-gray-100 shadow-sm flex items-center gap-3">
          <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center text-blue-600 border border-blue-100">
            <BookOpen className="w-5 h-5" />
          </div>
          <div>
            <p className="text-2xl font-black text-gray-900">134</p>
            <p className="text-[11px] font-bold text-gray-400 uppercase">Total Books</p>
          </div>
        </div>
        <div className="bg-white rounded-xl p-4 border border-gray-100 shadow-sm flex items-center gap-3">
          <div className="w-10 h-10 bg-emerald-50 rounded-lg flex items-center justify-center text-emerald-600 border border-emerald-100">
            <Users className="w-5 h-5" />
          </div>
          <div>
            <p className="text-2xl font-black text-gray-900">2,847</p>
            <p className="text-[11px] font-bold text-gray-400 uppercase">Active Readers</p>
          </div>
        </div>
        <div className="bg-white rounded-xl p-4 border border-gray-100 shadow-sm flex items-center gap-3">
          <div className="w-10 h-10 bg-purple-50 rounded-lg flex items-center justify-center text-purple-600 border border-purple-100">
            <Eye className="w-5 h-5" />
          </div>
          <div>
            <p className="text-2xl font-black text-gray-900">18.4K</p>
            <p className="text-[11px] font-bold text-gray-400 uppercase">Monthly Views</p>
          </div>
        </div>
        <div className="bg-white rounded-xl p-4 border border-gray-100 shadow-sm flex items-center gap-3">
          <div className="w-10 h-10 bg-amber-50 rounded-lg flex items-center justify-center text-amber-600 border border-amber-100">
            <TrendingUp className="w-5 h-5" />
          </div>
          <div>
            <p className="text-2xl font-black text-gray-900">8</p>
            <p className="text-[11px] font-bold text-gray-400 uppercase">Categories</p>
          </div>
        </div>
      </div>

      {/* DRM Notice */}
      <div className="bg-amber-50 rounded-xl p-4 border border-amber-200 flex items-start gap-3">
        <Lock className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
        <p className="text-sm text-amber-800 font-medium leading-relaxed">
          <strong className="font-bold">DRM Protected Library:</strong> All materials are rendered through our secure online viewer. Students can read seamlessly on any device but downloading PDFs for offline use is disabled to protect intellectual property and comply with copyright laws.
        </p>
      </div>

      {/* Categories Grid */}
      <div>
        <h2 className="text-lg font-black text-gray-900 mb-4">Browse by Department</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {categories.map((cat, i) => (
            <Link href="/library/catalog" key={i} className="bg-white rounded-xl border border-gray-100 shadow-sm p-4 flex items-center gap-3 hover:shadow-md hover:border-gray-200 transition-all cursor-pointer group">
              <div className={`w-3 h-8 rounded-full ${cat.color}`}></div>
              <div>
                <h3 className="font-bold text-gray-900 text-sm group-hover:text-brand-primary-blue transition-colors">{cat.name}</h3>
                <p className="text-xs text-gray-400 font-bold">{cat.count} Books</p>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Featured Books */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-black text-gray-900">Featured Textbooks</h2>
          <Link href="/library/catalog" className="text-sm font-bold text-brand-primary-blue hover:underline">View All →</Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {featuredBooks.map((book, idx) => (
            <div key={idx} className="bg-white rounded-2xl border border-gray-100 shadow-sm flex flex-col overflow-hidden group hover:shadow-lg transition-all">
              <div className={`h-44 w-full ${book.cover} flex flex-col items-center justify-center p-4 text-center relative`}>
                 <div className="absolute top-2.5 right-2.5 bg-black/40 backdrop-blur-sm text-white text-[9px] font-bold px-2 py-1 rounded-md flex items-center gap-1">
                   <Lock className="w-2.5 h-2.5" /> DRM
                 </div>
                 <div className="absolute top-2.5 left-2.5 bg-white/20 backdrop-blur-sm text-white text-[9px] font-bold px-2 py-1 rounded-md">{book.edition}</div>
                 <BookOpen className="w-8 h-8 text-white/40 mb-2" />
                 <h3 className="text-white font-serif font-bold text-base leading-tight line-clamp-3">{book.title}</h3>
              </div>
              <div className="p-4 flex flex-col flex-1">
                 <span className="text-[10px] font-bold uppercase tracking-wider text-brand-primary-blue mb-1">{book.category}</span>
                 <h4 className="font-bold text-gray-900 leading-snug mb-0.5 text-sm line-clamp-1">{book.title}</h4>
                 <p className="text-xs text-gray-500 font-medium mb-3">{book.author}</p>
                 
                 <div className="flex items-center gap-3 text-[11px] text-gray-400 font-bold mb-3">
                   <span className="flex items-center gap-1"><Star className="w-3 h-3 text-amber-400 fill-amber-400" /> {book.rating}</span>
                   <span className="flex items-center gap-1"><Eye className="w-3 h-3" /> {book.readers}</span>
                   <span>{book.pages} pg</span>
                 </div>
                 
                 <div className="mt-auto flex gap-2">
                   <Link href="/library/reader" className="flex-1 bg-brand-primary-blue text-white py-2 rounded-lg text-xs font-bold hover:bg-blue-700 transition shadow-sm text-center">
                     Read Online
                   </Link>
                   <button className="p-2 bg-gray-100 text-gray-400 rounded-lg cursor-not-allowed relative group/dl" title="Download disabled">
                     <DownloadCloud className="w-4 h-4" />
                     <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-gray-900 text-white text-[10px] px-2 py-1 rounded opacity-0 group-hover/dl:opacity-100 transition whitespace-nowrap pointer-events-none">Disabled</span>
                   </button>
                 </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Recently Added */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
        <div className="px-6 py-5 border-b border-gray-100 bg-gray-50/50 flex items-center justify-between">
          <h3 className="text-base font-black text-gray-900 flex items-center gap-2">
            <Clock className="w-5 h-5 text-brand-primary-green" /> Recently Added
          </h3>
        </div>
        <div className="divide-y divide-gray-50">
          {recentlyAdded.map((b, i) => (
            <div key={i} className="px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors">
              <div className="flex items-center gap-4">
                <div className="w-10 h-12 bg-gradient-to-b from-slate-700 to-slate-800 rounded flex items-center justify-center">
                  <BookOpen className="w-4 h-4 text-white/50" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-sm">{b.title}</h4>
                  <p className="text-xs text-gray-500 font-medium">{b.author} • {b.category}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-xs text-gray-400 font-bold hidden sm:block">{b.date}</span>
                <Link href="/library/reader" className="text-xs font-bold text-brand-primary-blue hover:underline">Read →</Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
