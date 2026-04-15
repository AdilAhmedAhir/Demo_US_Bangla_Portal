import React from 'react';
import { BookOpen, Search, Lock, DownloadCloud, Star, Eye, Filter, SlidersHorizontal } from 'lucide-react';
import Link from 'next/link';

export default function LibraryCatalog() {
  const allBooks = [
    { title: "Gray's Anatomy for Students", author: "Richard L. Drake", category: "Anatomy", cover: "bg-blue-600", edition: "4th Edition", pages: 1168, readers: 342, rating: 4.9, year: 2024 },
    { title: "Guyton & Hall Medical Physiology", author: "John E. Hall", category: "Physiology", cover: "bg-red-800", edition: "14th Edition", pages: 1116, readers: 289, rating: 4.8, year: 2023 },
    { title: "Robbins Basic Pathology", author: "Vinay Kumar", category: "Pathology", cover: "bg-purple-800", edition: "10th Edition", pages: 952, readers: 215, rating: 4.7, year: 2022 },
    { title: "Netter's Clinical Anatomy", author: "John T. Hansen", category: "Anatomy", cover: "bg-emerald-700", edition: "4th Edition", pages: 624, readers: 198, rating: 4.8, year: 2023 },
    { title: "Langman's Medical Embryology", author: "T.W. Sadler", category: "Embryology", cover: "bg-teal-700", edition: "14th Edition", pages: 410, readers: 176, rating: 4.6, year: 2024 },
    { title: "Harper's Illustrated Biochemistry", author: "Victor W. Rodwell", category: "Biochemistry", cover: "bg-amber-700", edition: "32nd Edition", pages: 832, readers: 204, rating: 4.5, year: 2023 },
    { title: "Snell's Clinical Neuroanatomy", author: "Ryan Splittgerber", category: "Anatomy", cover: "bg-slate-700", edition: "8th Edition", pages: 544, readers: 154, rating: 4.6, year: 2024 },
    { title: "KD Tripathi Pharmacology", author: "KD Tripathi", category: "Pharmacology", cover: "bg-rose-700", edition: "8th Edition", pages: 964, readers: 312, rating: 4.7, year: 2022 },
    { title: "Jawetz Medical Microbiology", author: "Geo F. Brooks", category: "Microbiology", cover: "bg-cyan-700", edition: "28th Edition", pages: 880, readers: 189, rating: 4.5, year: 2023 },
    { title: "Park's Preventive Medicine", author: "K. Park", category: "Community Med.", cover: "bg-lime-700", edition: "26th Edition", pages: 934, readers: 143, rating: 4.4, year: 2024 },
    { title: "Principles of Surgery - Schwartz", author: "F. Charles Brunicardi", category: "Surgery", cover: "bg-orange-800", edition: "11th Edition", pages: 2088, readers: 98, rating: 4.8, year: 2024 },
    { title: "Harrison's Internal Medicine", author: "J. Larry Jameson", category: "Medicine", cover: "bg-indigo-800", edition: "21st Edition", pages: 3512, readers: 267, rating: 4.9, year: 2023 },
  ];

  const departments = ['All', 'Anatomy', 'Physiology', 'Biochemistry', 'Pathology', 'Pharmacology', 'Microbiology', 'Surgery', 'Medicine'];

  return (
    <div className="flex flex-col gap-6 w-full pb-10">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <Link href="/library" className="text-sm text-brand-primary-blue hover:underline mb-1 inline-block font-bold">← Library Home</Link>
          <h1 className="text-3xl font-black tracking-tight text-gray-900">Book Catalog</h1>
          <p className="mt-1 text-sm text-gray-500 font-medium">Showing <strong className="text-gray-900">134 books</strong> across 8 departments</p>
        </div>
        <div className="flex items-center gap-3">
          <div className="relative w-full sm:w-72 font-sans">
            <input 
              type="text" 
              placeholder="Search by title, author, ISBN..." 
              className="w-full pl-10 pr-4 py-2.5 bg-white border border-gray-300 rounded-xl text-sm focus:outline-none focus:border-brand-primary-blue focus:ring-1 focus:ring-brand-primary-blue/20 transition-all font-medium text-gray-700 shadow-sm"
            />
            <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-3" />
          </div>
          <button className="p-2.5 bg-white border border-gray-300 rounded-xl hover:bg-gray-50 transition shadow-sm">
            <SlidersHorizontal className="w-4 h-4 text-gray-600" />
          </button>
        </div>
      </div>

      {/* Department Filter Pills */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 custom-scrollbar">
        <Filter className="w-4 h-4 text-gray-400 shrink-0" />
        {departments.map((dept, i) => (
          <button key={i} className={`px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap transition-all ${
            i === 0 
              ? 'bg-gray-900 text-white shadow-sm'
              : 'bg-white border border-gray-200 text-gray-600 hover:bg-gray-50 hover:border-gray-300'
          }`}>
            {dept}
          </button>
        ))}
      </div>

      {/* Book Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        {allBooks.map((book, idx) => (
          <div key={idx} className="bg-white rounded-2xl border border-gray-100 shadow-sm flex flex-col overflow-hidden group hover:shadow-lg transition-all">
            <div className={`h-40 w-full ${book.cover} flex flex-col items-center justify-center p-4 text-center relative`}>
               <div className="absolute top-2.5 right-2.5 bg-black/40 backdrop-blur-sm text-white text-[9px] font-bold px-2 py-1 rounded-md flex items-center gap-1">
                 <Lock className="w-2.5 h-2.5" /> DRM
               </div>
               <div className="absolute top-2.5 left-2.5 bg-white/20 backdrop-blur-sm text-white text-[9px] font-bold px-2 py-1 rounded-md">{book.edition}</div>
               <BookOpen className="w-7 h-7 text-white/40 mb-2" />
               <h3 className="text-white font-serif font-bold text-sm leading-tight line-clamp-2">{book.title}</h3>
            </div>
            <div className="p-4 flex flex-col flex-1">
               <span className="text-[10px] font-bold uppercase tracking-wider text-brand-primary-blue mb-1">{book.category} • {book.year}</span>
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
                 <button className="p-2 bg-gray-100 text-gray-400 rounded-lg cursor-not-allowed" title="Download disabled">
                   <DownloadCloud className="w-4 h-4" />
                 </button>
               </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-center gap-2 pt-4">
        <button className="px-3 py-2 bg-white border border-gray-200 rounded-lg text-sm font-bold text-gray-500 hover:bg-gray-50">Prev</button>
        <button className="px-3 py-2 bg-gray-900 text-white rounded-lg text-sm font-bold shadow-sm">1</button>
        <button className="px-3 py-2 bg-white border border-gray-200 rounded-lg text-sm font-bold text-gray-500 hover:bg-gray-50">2</button>
        <button className="px-3 py-2 bg-white border border-gray-200 rounded-lg text-sm font-bold text-gray-500 hover:bg-gray-50">3</button>
        <button className="px-3 py-2 bg-white border border-gray-200 rounded-lg text-sm font-bold text-gray-500 hover:bg-gray-50">Next</button>
      </div>
    </div>
  );
}
