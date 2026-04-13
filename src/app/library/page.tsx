import React from 'react';
import { BookOpen, Search, Lock, DownloadCloud } from 'lucide-react';

export default function LibraryPage() {
  const books = [
    { title: "Gray's Anatomy for Students", author: "Richard L. Drake", category: "Anatomy", cover: "bg-blue-600" },
    { title: "Guyton and Hall Textbook of Medical Physiology", author: "John E. Hall", category: "Physiology", cover: "bg-red-800" },
    { title: "Robbins Basic Pathology", author: "Vinay Kumar", category: "Pathology", cover: "bg-purple-800" },
    { title: "Netter's Clinical Anatomy", author: "John T. Hansen", category: "Anatomy", cover: "bg-emerald-700" },
  ];

  return (
    <div className="flex flex-col gap-6 w-full pb-10">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-2">
        <div>
          <h1 className="text-3xl font-black tracking-tight text-gray-900">Digital Library</h1>
          <p className="mt-1 text-sm text-gray-500 font-medium">Access your textbooks online. DRM protected.</p>
        </div>
        <div className="relative max-w-sm w-full font-sans">
          <input 
            type="text" 
            placeholder="Search by book title or ISBN..." 
            className="w-full pl-10 pr-4 py-2.5 bg-white border-2 border-gray-200 rounded-xl text-sm focus:outline-none focus:border-brand-primary-blue focus:ring-1 focus:ring-brand-primary-blue/20 transition-all font-medium text-gray-700"
          />
          <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-3" />
        </div>
      </div>

      <div className="bg-yellow-50 rounded-xl p-4 border border-yellow-200 flex items-start gap-3">
        <Lock className="w-5 h-5 text-yellow-600 shrink-0 mt-0.5" />
        <p className="text-sm text-yellow-800 font-medium leading-relaxed">
          <strong className="font-bold">Digital Rights Protection:</strong> All library materials are securely hosted. You can read them flawlessly using our online Web Viewer. Downloading PDFs for offline storage is disabled to comply with international copyright laws.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {books.map((book, idx) => (
          <div key={idx} className="bg-white rounded-2xl border border-gray-100 shadow-sm flex flex-col overflow-hidden group">
            {/* Mock Book Cover */}
            <div className={`h-48 w-full ${book.cover} flex flex-col items-center justify-center p-4 text-center relative border-b-4 border-black/10`}>
               <div className="absolute top-2 right-2 bg-black/30 backdrop-blur-sm text-white text-[10px] font-bold px-2 py-1 rounded">DRM Locked</div>
               <BookOpen className="w-10 h-10 text-white/50 mb-3" />
               <h3 className="text-white font-serif font-bold text-lg leading-tight">{book.title}</h3>
            </div>
            <div className="p-5 flex flex-col flex-1">
               <span className="text-[10px] font-bold uppercase tracking-wider text-brand-primary-blue mb-1">{book.category}</span>
               <h4 className="font-bold text-gray-900 leading-snug mb-1 line-clamp-2">{book.title}</h4>
               <p className="text-xs text-gray-500 font-medium">{book.author}</p>
               
               <div className="mt-auto pt-4 flex gap-2">
                 <button className="flex-1 bg-brand-primary-blue text-white py-2 rounded-lg text-xs font-bold hover:bg-blue-700 transition shadow-sm">
                   Read Online
                 </button>
                 <button className="p-2 bg-gray-100 text-gray-400 rounded-lg cursor-not-allowed group relative" title="Download disabled">
                   <DownloadCloud className="w-4 h-4" />
                   <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-gray-900 text-white text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition whitespace-nowrap pointer-events-none">Download Disabled</span>
                 </button>
               </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
