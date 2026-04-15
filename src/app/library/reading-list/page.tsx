import React from 'react';
import { BookOpen, BookmarkCheck, Clock, Star, Trash2, Eye } from 'lucide-react';
import Link from 'next/link';

export default function ReadingListPage() {
  const savedBooks = [
    { title: "Gray's Anatomy for Students", author: "Richard L. Drake", category: "Anatomy", cover: "bg-blue-600", progress: 24, totalPages: 1168, lastRead: "2 hours ago", rating: 4.9 },
    { title: "Guyton & Hall Medical Physiology", author: "John E. Hall", category: "Physiology", cover: "bg-red-800", progress: 156, totalPages: 1116, lastRead: "Yesterday", rating: 4.8 },
    { title: "Robbins Basic Pathology", author: "Vinay Kumar", category: "Pathology", cover: "bg-purple-800", progress: 0, totalPages: 952, lastRead: "Not started", rating: 4.7 },
    { title: "KD Tripathi Pharmacology", author: "KD Tripathi", category: "Pharmacology", cover: "bg-rose-700", progress: 312, totalPages: 964, lastRead: "3 days ago", rating: 4.7 },
    { title: "Langman's Medical Embryology", author: "T.W. Sadler", category: "Embryology", cover: "bg-teal-700", progress: 88, totalPages: 410, lastRead: "1 week ago", rating: 4.6 },
  ];

  return (
    <div className="flex flex-col gap-6 w-full pb-10">
      <div>
        <Link href="/library" className="text-sm text-brand-primary-blue hover:underline mb-1 inline-block font-bold">← Library Home</Link>
        <h1 className="text-3xl font-black tracking-tight text-gray-900">My Reading List</h1>
        <p className="mt-1 text-sm text-gray-500 font-medium">Books you have saved or started reading. Pick up right where you left off.</p>
      </div>

      {/* Stats Strip */}
      <div className="grid grid-cols-3 gap-4">
        <div className="bg-white rounded-xl p-4 border border-gray-100 shadow-sm text-center">
          <p className="text-2xl font-black text-gray-900">5</p>
          <p className="text-[11px] font-bold text-gray-400 uppercase">Saved Books</p>
        </div>
        <div className="bg-white rounded-xl p-4 border border-gray-100 shadow-sm text-center">
          <p className="text-2xl font-black text-brand-primary-blue">3</p>
          <p className="text-[11px] font-bold text-gray-400 uppercase">In Progress</p>
        </div>
        <div className="bg-white rounded-xl p-4 border border-gray-100 shadow-sm text-center">
          <p className="text-2xl font-black text-emerald-600">1</p>
          <p className="text-[11px] font-bold text-gray-400 uppercase">Not Started</p>
        </div>
      </div>

      {/* Book List */}
      <div className="flex flex-col gap-4">
        {savedBooks.map((book, i) => {
          const pct = book.totalPages > 0 ? Math.round((book.progress / book.totalPages) * 100) : 0;
          return (
            <div key={i} className="bg-white rounded-2xl border border-gray-100 shadow-sm p-4 sm:p-5 flex flex-col sm:flex-row gap-4 hover:shadow-md transition-all group">
              {/* Mini Cover */}
              <div className={`${book.cover} w-full sm:w-20 h-28 sm:h-auto rounded-xl flex items-center justify-center shrink-0`}>
                <BookOpen className="w-6 h-6 text-white/50" />
              </div>

              {/* Details */}
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-2">
                  <div className="min-w-0">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-brand-primary-blue">{book.category}</span>
                    <h3 className="font-bold text-gray-900 text-base leading-snug truncate">{book.title}</h3>
                    <p className="text-xs text-gray-500 font-medium mt-0.5">{book.author}</p>
                  </div>
                  <button className="p-2 text-gray-300 hover:text-red-500 hover:bg-red-50 rounded-lg transition shrink-0" title="Remove from list">
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>

                {/* Progress Bar */}
                <div className="mt-3">
                  <div className="flex items-center justify-between text-xs font-bold text-gray-500 mb-1.5">
                    <span>Page {book.progress} / {book.totalPages}</span>
                    <span className={pct > 0 ? 'text-brand-primary-blue' : 'text-gray-400'}>{pct}% complete</span>
                  </div>
                  <div className="w-full bg-gray-100 rounded-full h-2">
                    <div className="bg-brand-primary-blue h-2 rounded-full transition-all" style={{ width: `${pct}%` }}></div>
                  </div>
                </div>

                {/* Footer Meta */}
                <div className="flex items-center justify-between mt-3">
                  <div className="flex items-center gap-3 text-[11px] text-gray-400 font-bold">
                    <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {book.lastRead}</span>
                    <span className="flex items-center gap-1"><Star className="w-3 h-3 text-amber-400 fill-amber-400" /> {book.rating}</span>
                  </div>
                  <Link href="/library/reader" className="text-xs font-bold text-white bg-brand-primary-blue px-4 py-1.5 rounded-lg hover:bg-blue-700 transition shadow-sm">
                    {pct > 0 ? 'Continue Reading' : 'Start Reading'}
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
