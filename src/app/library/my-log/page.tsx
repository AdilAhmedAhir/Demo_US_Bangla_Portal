'use client';

import React, { useState } from 'react';
import { 
  BookCopy, 
  Search, 
  Clock, 
  CheckCircle2, 
  AlertTriangle,
  BookOpen,
  Calendar
} from 'lucide-react';
import Link from 'next/link';

// Mock student checkout log
const myLog = [
  { id: 'CHK-001', title: 'Jawetz Medical Microbiology', author: 'Jawetz et al.', checkoutDate: 'Apr 10, 2026', dueDate: 'Apr 24, 2026', status: 'active', returnDate: null },
  { id: 'CHK-002', title: "Robbins Pathologic Basis of Disease", author: 'Kumar et al.', checkoutDate: 'Mar 15, 2026', dueDate: 'Mar 29, 2026', status: 'overdue', returnDate: null },
  { id: 'CHK-003', title: "Guyton Medical Physiology", author: 'Hall', checkoutDate: 'Jan 5, 2026', dueDate: 'Jan 19, 2026', status: 'returned', returnDate: 'Jan 18, 2026' },
  { id: 'CHK-004', title: "Ananthanarayan Microbiology", author: 'Paniker', checkoutDate: 'Dec 10, 2025', dueDate: 'Dec 24, 2025', status: 'returned', returnDate: 'Dec 22, 2025' },
];

export default function MyLibraryLogPage() {
  const [filter, setFilter] = useState<'all' | 'active' | 'returned' | 'overdue'>('all');

  const filteredLogs = myLog.filter(log => {
    if (filter === 'all') return true;
    return log.status === filter;
  });

  const activeCount = myLog.filter(l => l.status === 'active').length;
  const overdueCount = myLog.filter(l => l.status === 'overdue').length;

  return (
    <div className="flex flex-col gap-6 w-full pb-10 h-full">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
        <div className="flex items-center gap-2.5">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-blue-600 flex items-center justify-center shadow-md">
            <BookCopy className="w-5 h-5 text-white" />
          </div>
          <div>
            <h1 className="text-xl font-black text-gray-900 tracking-tight">My Library Log</h1>
            <p className="text-xs font-medium text-gray-400">Track your physical book checkouts and due dates</p>
          </div>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 flex flex-col justify-between">
          <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Total Borrowed</p>
          <p className="text-2xl font-black text-gray-900">{myLog.length}</p>
        </div>
        <div className="bg-blue-50 rounded-xl border border-blue-200 p-4 flex flex-col justify-between">
          <p className="text-[10px] font-bold text-brand-primary-blue uppercase tracking-widest mb-1">Currently Holding</p>
          <p className="text-2xl font-black text-brand-primary-blue">{activeCount + overdueCount}</p>
        </div>
        <div className="bg-red-50 rounded-xl border border-red-200 p-4 flex flex-col justify-between">
          <p className="text-[10px] font-bold text-[#ed1c24] uppercase tracking-widest mb-1">Overdue Books</p>
          <p className="text-2xl font-black text-[#ed1c24]">{overdueCount}</p>
        </div>
        <div className="bg-emerald-50 rounded-xl border border-emerald-200 p-4 flex flex-col justify-between">
          <p className="text-[10px] font-bold text-emerald-600 uppercase tracking-widest mb-1">Successfully Returned</p>
          <p className="text-2xl font-black text-emerald-700">{myLog.filter(l => l.status === 'returned').length}</p>
        </div>
      </div>

      {/* Filters */}
      <div className="flex items-center gap-2 overflow-x-auto pb-1 custom-scrollbar">
        {(['all', 'active', 'overdue', 'returned'] as const).map(f => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap capitalize ${
              filter === f
                ? 'bg-brand-primary-blue text-white shadow-sm'
                : 'bg-white border border-gray-200 text-gray-600 hover:bg-gray-50'
            }`}
          >
            {f === 'all' ? 'All Logs' : f}
          </button>
        ))}
      </div>

      {/* Log List */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-gray-50/70 border-b border-gray-100">
                <th className="px-5 py-3 text-[10px] font-bold text-gray-400 text-center uppercase tracking-wider">Ref ID</th>
                <th className="px-5 py-3 text-[10px] font-bold text-gray-400 uppercase tracking-wider">Book Name</th>
                <th className="px-5 py-3 text-[10px] font-bold text-gray-400 text-center uppercase tracking-wider">Checkout Date</th>
                <th className="px-5 py-3 text-[10px] font-bold text-gray-400 text-center uppercase tracking-wider">Due Date</th>
                <th className="px-5 py-3 text-[10px] font-bold text-gray-400 text-center uppercase tracking-wider">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50 flex-1">
              {filteredLogs.length > 0 ? (
                filteredLogs.map(log => (
                  <tr key={log.id} className="hover:bg-slate-50 transition-colors">
                    <td className="px-5 py-4 text-xs font-bold text-gray-400 text-center">{log.id}</td>
                    <td className="px-5 py-4">
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 rounded bg-gray-100 border border-gray-200 flex items-center justify-center shrink-0">
                          <BookOpen className="w-3.5 h-3.5 text-gray-400" />
                        </div>
                        <div>
                          <p className="text-sm font-bold text-gray-900">{log.title}</p>
                          <p className="text-[10px] font-medium text-gray-500">{log.author}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-5 py-4 text-center">
                      <span className="text-xs font-bold text-gray-700">{log.checkoutDate}</span>
                    </td>
                    <td className="px-5 py-4 text-center">
                      <span className={`text-xs font-bold ${log.status === 'overdue' ? 'text-[#ed1c24]' : 'text-gray-700'}`}>
                        {log.dueDate}
                      </span>
                    </td>
                    <td className="px-5 py-4 text-center">
                      {log.status === 'active' && (
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-blue-50 text-brand-primary-blue border border-blue-200 text-[10px] font-bold">
                          <Clock className="w-3 h-3" /> Reading
                        </span>
                      )}
                      {log.status === 'overdue' && (
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-red-50 text-[#ed1c24] border border-red-200 text-[10px] font-bold">
                          <AlertTriangle className="w-3 h-3" /> Overdue
                        </span>
                      )}
                      {log.status === 'returned' && (
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 text-[10px] font-bold">
                          <CheckCircle2 className="w-3 h-3" /> {log.returnDate}
                        </span>
                      )}
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={5} className="px-5 py-10 text-center">
                    <BookCopy className="w-8 h-8 text-gray-300 mx-auto mb-2" />
                    <p className="text-sm font-bold text-gray-500">No checkout logs found</p>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
