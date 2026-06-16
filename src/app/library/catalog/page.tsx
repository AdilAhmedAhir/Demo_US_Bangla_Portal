'use client';

import React, { useMemo, useState } from 'react';
import { Search, DownloadCloud, Star, Eye, Filter, X, BookOpen } from 'lucide-react';
import Link from 'next/link';
import BookCover from '@/components/BookCover';
import {
  books,
  PHASES,
  subjectsForPhase,
  countByPhase,
  totalBooks,
  totalSubjects,
  type Phase,
} from '@/data/library';

type PhaseFilter = 'All' | Phase;
type SortKey = 'subject' | 'title' | 'rating' | 'readers';

export default function LibraryCatalog() {
  const [query, setQuery] = useState('');
  const [phase, setPhase] = useState<PhaseFilter>('All');
  const [subject, setSubject] = useState('All');
  const [sort, setSort] = useState<SortKey>('subject');

  const subjectOptions = useMemo(() => subjectsForPhase(phase), [phase]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    const list = books.filter((b) => {
      if (phase !== 'All' && b.phase !== phase) return false;
      if (subject !== 'All' && b.subject !== subject) return false;
      if (q && !`${b.title} ${b.author} ${b.subject} ${b.edition ?? ''}`.toLowerCase().includes(q)) return false;
      return true;
    });
    const sorted = [...list];
    if (sort === 'title') sorted.sort((a, b) => a.title.localeCompare(b.title));
    else if (sort === 'rating') sorted.sort((a, b) => b.rating - a.rating);
    else if (sort === 'readers') sorted.sort((a, b) => b.readers - a.readers);
    else sorted.sort((a, b) => PHASES.indexOf(a.phase) - PHASES.indexOf(b.phase) || a.subject.localeCompare(b.subject) || a.title.localeCompare(b.title));
    return sorted;
  }, [query, phase, subject, sort]);

  const selectPhase = (p: PhaseFilter) => {
    setPhase(p);
    setSubject('All'); // reset subject when phase changes
  };

  const hasFilters = query !== '' || phase !== 'All' || subject !== 'All';
  const clearAll = () => { setQuery(''); setPhase('All'); setSubject('All'); };

  return (
    <div className="flex flex-col gap-6 w-full pb-10">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <Link href="/library" className="text-sm text-brand-primary-blue hover:underline mb-1 inline-block font-bold">← Library Home</Link>
          <h1 className="text-3xl font-black tracking-tight text-gray-900">Book Catalog</h1>
          <p className="mt-1 text-sm text-gray-500 font-medium">
            <strong className="text-gray-900">{totalBooks}</strong> e-books across <strong className="text-gray-900">{totalSubjects}</strong> subjects · BMDC MBBS curriculum
          </p>
        </div>
        <div className="flex items-center gap-3">
          <div className="relative w-full sm:w-72 font-sans">
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search title, author, edition..."
              className="w-full pl-10 pr-9 py-2.5 bg-white border border-gray-300 rounded-xl text-sm focus:outline-none focus:border-brand-primary-blue focus:ring-1 focus:ring-brand-primary-blue/20 transition-all font-medium text-gray-700 shadow-sm"
            />
            <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-3" />
            {query && (
              <button onClick={() => setQuery('')} className="absolute right-3 top-2.5 p-0.5 text-gray-400 hover:text-gray-600" aria-label="Clear search">
                <X className="w-4 h-4" />
              </button>
            )}
          </div>
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value as SortKey)}
            className="py-2.5 px-3 bg-white border border-gray-300 rounded-xl text-sm font-semibold text-gray-600 shadow-sm focus:outline-none focus:border-brand-primary-blue cursor-pointer"
            aria-label="Sort books"
          >
            <option value="subject">By Phase & Subject</option>
            <option value="title">Title A–Z</option>
            <option value="rating">Top Rated</option>
            <option value="readers">Most Read</option>
          </select>
        </div>
      </div>

      {/* Phase filter pills */}
      <div className="flex items-center gap-2 overflow-x-auto pb-1 custom-scrollbar">
        <Filter className="w-4 h-4 text-gray-400 shrink-0" />
        {(['All', ...PHASES] as PhaseFilter[]).map((p) => {
          const active = phase === p;
          return (
            <button
              key={p}
              onClick={() => selectPhase(p)}
              className={`px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap transition-all flex items-center gap-1.5 ${
                active ? 'bg-gray-900 text-white shadow-sm' : 'bg-white border border-gray-200 text-gray-600 hover:bg-gray-50 hover:border-gray-300'
              }`}
            >
              {p}
              <span className={`text-[10px] px-1.5 py-0.5 rounded-full ${active ? 'bg-white/20' : 'bg-gray-100 text-gray-500'}`}>{countByPhase(p)}</span>
            </button>
          );
        })}
      </div>

      {/* Subject sub-filter */}
      <div className="flex flex-wrap items-center gap-2 -mt-2">
        <button
          onClick={() => setSubject('All')}
          className={`px-3 py-1.5 rounded-lg text-[11px] font-bold transition-all ${subject === 'All' ? 'bg-brand-primary-blue text-white' : 'bg-white border border-gray-200 text-gray-500 hover:bg-gray-50'}`}
        >
          All Subjects
        </button>
        {subjectOptions.map((s) => (
          <button
            key={s}
            onClick={() => setSubject(s)}
            className={`px-3 py-1.5 rounded-lg text-[11px] font-bold transition-all ${subject === s ? 'bg-brand-primary-blue text-white' : 'bg-white border border-gray-200 text-gray-500 hover:bg-gray-50'}`}
          >
            {s}
          </button>
        ))}
      </div>

      {/* Result count + clear */}
      <div className="flex items-center justify-between -mt-2">
        <p className="text-sm font-semibold text-gray-500">
          Showing <strong className="text-gray-900">{filtered.length}</strong> {filtered.length === 1 ? 'book' : 'books'}
          {phase !== 'All' && <> in <strong className="text-gray-900">{phase}</strong></>}
          {subject !== 'All' && <> · {subject}</>}
        </p>
        {hasFilters && (
          <button onClick={clearAll} className="text-xs font-bold text-brand-primary-blue hover:underline flex items-center gap-1">
            <X className="w-3 h-3" /> Clear filters
          </button>
        )}
      </div>

      {/* Book grid */}
      {filtered.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {filtered.map((book) => (
            <div key={book.id} className="bg-white rounded-2xl border border-gray-100 shadow-sm flex flex-col overflow-hidden group hover:shadow-lg transition-all">
              <BookCover book={book} className="h-44" />
              <div className="p-4 flex flex-col flex-1">
                <span className="text-[10px] font-bold uppercase tracking-wider text-brand-primary-blue mb-1">{book.subject} • {book.year}</span>
                <h4 className="font-bold text-gray-900 leading-snug mb-0.5 text-sm line-clamp-2">{book.title}</h4>
                <p className="text-xs text-gray-500 font-medium mb-3">{book.author}</p>

                <div className="flex items-center gap-3 text-[11px] text-gray-400 font-bold mb-3">
                  <span className="flex items-center gap-1"><Star className="w-3 h-3 text-amber-400 fill-amber-400" /> {book.rating}</span>
                  <span className="flex items-center gap-1"><Eye className="w-3 h-3" /> {book.readers}</span>
                  <span>{book.pages.toLocaleString()} pg</span>
                </div>

                <div className="mt-auto flex gap-2">
                  <Link href={`/library/reader?id=${book.id}`} className="flex-1 bg-brand-primary-blue text-white py-2 rounded-lg text-xs font-bold hover:bg-blue-700 transition shadow-sm text-center">
                    Read Online
                  </Link>
                  <button className="p-2 bg-gray-100 text-gray-400 rounded-lg cursor-not-allowed" title="Download disabled — DRM protected">
                    <DownloadCloud className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center py-20 text-center">
          <div className="w-14 h-14 rounded-2xl bg-gray-100 flex items-center justify-center mb-4">
            <BookOpen className="w-7 h-7 text-gray-400" />
          </div>
          <h3 className="text-base font-bold text-gray-900">No books match your filters</h3>
          <p className="text-sm text-gray-500 mt-1 max-w-sm">Try a different phase or subject, or clear the search.</p>
          <button onClick={clearAll} className="mt-4 px-4 py-2 bg-brand-primary-blue text-white text-sm font-bold rounded-xl hover:bg-blue-700 transition">
            Clear all filters
          </button>
        </div>
      )}
    </div>
  );
}
