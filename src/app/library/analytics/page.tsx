'use client';

import React, { useState } from 'react';
import {
  BarChart3,
  BookCopy,
  TrendingUp,
  Users,
  Download,
  Calendar,
  Monitor,
  BookOpen,
  Award,
  Clock,
  AlertTriangle,
  ArrowUpRight,
  ArrowDownRight,
} from 'lucide-react';

/* ── Mock Analytics ─── */
const monthlyBorrows = [
  { month: 'Oct', borrows: 145, returns: 120 },
  { month: 'Nov', borrows: 163, returns: 148 },
  { month: 'Dec', borrows: 98,  returns: 105 },
  { month: 'Jan', borrows: 187, returns: 160 },
  { month: 'Feb', borrows: 210, returns: 195 },
  { month: 'Mar', borrows: 234, returns: 220 },
  { month: 'Apr', borrows: 178, returns: 155 },
];

const topBorrowedBooks = [
  { rank: 1, title: 'Jawetz Medical Microbiology', author: 'Jawetz et al.', borrows: 48, category: 'Microbiology' },
  { rank: 2, title: 'Robbins Pathologic Basis of Disease', author: 'Kumar et al.', borrows: 42, category: 'Pathology' },
  { rank: 3, title: 'Park\'s Preventive & Social Medicine', author: 'K. Park', borrows: 38, category: 'Community Med' },
  { rank: 4, title: 'Ananthanarayan Microbiology', author: 'Paniker', borrows: 35, category: 'Microbiology' },
  { rank: 5, title: 'Guyton Medical Physiology', author: 'Hall', borrows: 30, category: 'Physiology' },
];

const deptUsage = [
  { dept: 'Phase III (Micro/Patho/CM)', borrows: 520, percent: 42 },
  { dept: 'Phase II (Pharma/Forensic)',   borrows: 310, percent: 25 },
  { dept: 'Phase I (Anatomy/Physio)',     borrows: 250, percent: 20 },
  { dept: 'Faculty & Staff',             borrows: 160, percent: 13 },
];

const overdueBooks = [
  { studentId: 'USB-2606', student: 'Hasan Mahmud', book: 'Jawetz Microbiology', dueDate: 'Apr 5, 2026', overdueDays: 16 },
  { studentId: 'USB-2608', student: 'Rafi Islam', book: 'Robbins Pathology', dueDate: 'Mar 28, 2026', overdueDays: 24 },
  { studentId: 'USB-2510', student: 'Karim Uddin', book: 'Harrison\'s Internal Medicine', dueDate: 'Apr 10, 2026', overdueDays: 11 },
];

export default function LibraryAnalyticsPage() {
  const maxBorrows = Math.max(...monthlyBorrows.map((m) => m.borrows));

  return (
    <div className="flex flex-col gap-6 w-full h-full pb-10">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
        <div className="flex items-center gap-2.5">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-700 flex items-center justify-center shadow-md">
            <BarChart3 className="w-5 h-5 text-white" />
          </div>
          <div>
            <h1 className="text-xl font-black text-gray-900 tracking-tight">Library Analytics</h1>
            <p className="text-xs font-medium text-gray-400">Usage statistics, inventory metrics & borrowing trends</p>
          </div>
        </div>
        <button className="px-4 py-2.5 text-xs font-bold rounded-lg bg-brand-primary-blue text-white hover:bg-brand-primary-blue/90 transition-all flex items-center gap-2 shadow-sm">
          <Download className="w-3.5 h-3.5" />
          Export Report
        </button>
      </div>

      {/* Inventory KPIs */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-5">
          <div className="flex items-center gap-2 mb-2">
            <BookCopy className="w-4 h-4 text-brand-primary-blue" />
            <span className="text-[10px] font-bold text-gray-400 uppercase">Physical Books</span>
          </div>
          <p className="text-2xl font-black text-gray-900">12,847</p>
          <p className="text-[10px] font-bold text-emerald-600 flex items-center gap-0.5 mt-1">
            <ArrowUpRight className="w-3 h-3" /> +124 this semester
          </p>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-5">
          <div className="flex items-center gap-2 mb-2">
            <Monitor className="w-4 h-4 text-violet-600" />
            <span className="text-[10px] font-bold text-gray-400 uppercase">Digital Books</span>
          </div>
          <p className="text-2xl font-black text-gray-900">3,200+</p>
          <p className="text-[10px] font-bold text-emerald-600 flex items-center gap-0.5 mt-1">
            <ArrowUpRight className="w-3 h-3" /> +48 e-books added
          </p>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-5">
          <div className="flex items-center gap-2 mb-2">
            <Users className="w-4 h-4 text-emerald-600" />
            <span className="text-[10px] font-bold text-gray-400 uppercase">Active Readers</span>
          </div>
          <p className="text-2xl font-black text-gray-900">342</p>
          <p className="text-[10px] font-bold text-emerald-600 flex items-center gap-0.5 mt-1">
            <ArrowUpRight className="w-3 h-3" /> 78% of students
          </p>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-5">
          <div className="flex items-center gap-2 mb-2">
            <AlertTriangle className="w-4 h-4 text-amber-600" />
            <span className="text-[10px] font-bold text-gray-400 uppercase">Overdue</span>
          </div>
          <p className="text-2xl font-black text-amber-700">{overdueBooks.length}</p>
          <p className="text-[10px] font-bold text-[#ed1c24] flex items-center gap-0.5 mt-1">
            <ArrowDownRight className="w-3 h-3" /> Needs follow-up
          </p>
        </div>
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Monthly Borrow/Return Chart */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="px-6 py-5 border-b border-gray-100">
            <h2 className="text-base font-bold text-gray-900 flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-brand-primary-blue" />
              Monthly Borrow vs Return
            </h2>
          </div>
          <div className="p-6">
            <div className="flex items-end gap-3 h-48">
              {monthlyBorrows.map((m) => (
                <div key={m.month} className="flex-1 flex flex-col items-center gap-1">
                  <div className="w-full flex items-end gap-0.5 h-40">
                    <div className="flex-1 bg-brand-primary-blue rounded-t-md transition-all" style={{ height: `${(m.borrows / maxBorrows) * 100}%` }} />
                    <div className="flex-1 bg-emerald-400 rounded-t-md transition-all" style={{ height: `${(m.returns / maxBorrows) * 100}%` }} />
                  </div>
                  <span className="text-[10px] font-bold text-gray-400">{m.month}</span>
                </div>
              ))}
            </div>
            <div className="flex items-center justify-center gap-6 mt-4">
              <div className="flex items-center gap-1.5">
                <div className="w-3 h-3 rounded-sm bg-brand-primary-blue" />
                <span className="text-[10px] font-bold text-gray-500">Borrows</span>
              </div>
              <div className="flex items-center gap-1.5">
                <div className="w-3 h-3 rounded-sm bg-emerald-400" />
                <span className="text-[10px] font-bold text-gray-500">Returns</span>
              </div>
            </div>
          </div>
        </div>

        {/* Department Usage */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="px-6 py-5 border-b border-gray-100">
            <h2 className="text-base font-bold text-gray-900 flex items-center gap-2">
              <Users className="w-5 h-5 text-violet-600" />
              Usage by Department
            </h2>
          </div>
          <div className="p-6 space-y-4">
            {deptUsage.map((dept) => (
              <div key={dept.dept}>
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-xs font-bold text-gray-700">{dept.dept}</span>
                  <span className="text-xs font-black text-gray-900">{dept.borrows} <span className="text-gray-400 font-bold">({dept.percent}%)</span></span>
                </div>
                <div className="h-3 bg-gray-100 rounded-full overflow-hidden">
                  <div className="h-full rounded-full bg-gradient-to-r from-brand-primary-blue to-violet-500" style={{ width: `${dept.percent}%` }} />
                </div>
              </div>
            ))}
            <div className="pt-2 text-center">
              <span className="text-xs font-bold text-gray-400">Total borrows this semester: <strong className="text-gray-700">1,240</strong></span>
            </div>
          </div>
        </div>
      </div>

      {/* Most Borrowed & Overdue */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Top Borrowed Books */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="px-6 py-5 border-b border-gray-100">
            <h2 className="text-base font-bold text-gray-900 flex items-center gap-2">
              <Award className="w-5 h-5 text-amber-500" />
              Most Borrowed Books
            </h2>
          </div>
          <div className="divide-y divide-gray-50">
            {topBorrowedBooks.map((book) => (
              <div key={book.rank} className="px-6 py-3.5 flex items-center gap-4 hover:bg-slate-50 transition-colors">
                <span className={`w-7 h-7 rounded-full flex items-center justify-center text-[10px] font-black ${
                  book.rank === 1 ? 'bg-amber-100 text-amber-700' :
                  book.rank === 2 ? 'bg-gray-200 text-gray-600' :
                  book.rank === 3 ? 'bg-orange-100 text-orange-700' :
                  'bg-gray-100 text-gray-400'
                }`}>{book.rank}</span>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-bold text-gray-900 truncate">{book.title}</p>
                  <p className="text-[10px] text-gray-400">{book.author} · {book.category}</p>
                </div>
                <span className="text-sm font-black text-brand-primary-blue">{book.borrows}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Overdue Books */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="px-6 py-5 border-b border-gray-100">
            <h2 className="text-base font-bold text-gray-900 flex items-center gap-2">
              <Clock className="w-5 h-5 text-[#ed1c24]" />
              Overdue Books
            </h2>
          </div>
          <div className="divide-y divide-gray-50">
            {overdueBooks.map((item) => (
              <div key={item.studentId + item.book} className="px-6 py-4 flex items-center justify-between hover:bg-red-50/30 transition-colors">
                <div>
                  <p className="text-sm font-bold text-gray-900">{item.book}</p>
                  <p className="text-[10px] text-gray-500">{item.student} ({item.studentId})</p>
                  <p className="text-[10px] text-gray-400">Due: {item.dueDate}</p>
                </div>
                <span className="text-sm font-black text-[#ed1c24] bg-red-50 px-3 py-1 rounded-full border border-red-200">
                  {item.overdueDays}d
                </span>
              </div>
            ))}
          </div>
          {overdueBooks.length === 0 && (
            <div className="p-8 text-center text-sm text-gray-400">No overdue books ✓</div>
          )}
        </div>
      </div>

      {/* Digital vs Physical Comparison */}
      <div className="bg-gradient-to-r from-brand-primary-blue to-blue-700 rounded-2xl p-6 shadow-lg">
        <h2 className="text-lg font-bold text-white mb-4">📊 Digital vs Physical Library Usage</h2>
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-5 border border-white/20 text-center">
            <BookCopy className="w-8 h-8 text-white/80 mx-auto mb-2" />
            <p className="text-3xl font-black text-white">72%</p>
            <p className="text-xs font-bold text-white/60 mt-1">Physical Library Usage</p>
            <p className="text-[10px] text-white/40 mt-0.5">892 borrows this semester</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-5 border border-white/20 text-center">
            <Monitor className="w-8 h-8 text-white/80 mx-auto mb-2" />
            <p className="text-3xl font-black text-white">28%</p>
            <p className="text-xs font-bold text-white/60 mt-1">Digital Library Usage</p>
            <p className="text-[10px] text-white/40 mt-0.5">348 accesses this semester</p>
          </div>
        </div>
      </div>
    </div>
  );
}
