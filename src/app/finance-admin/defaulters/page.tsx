'use client';

import React, { useState } from 'react';
import {
  AlertTriangle,
  Download,
  Search,
  ChevronDown,
  Send,
  Users,
  Wallet,
  TrendingUp,
  Filter,
  Mail,
  MessageSquare,
  Phone,
} from 'lucide-react';

/* ── Mock Defaulters ─── */
interface Defaulter {
  id: string;
  name: string;
  roll: number;
  batch: string;
  department: string;
  tuitionDue: number;
  hostelDue: number;
  messDue: number;
  otherDue: number;
  totalDue: number;
  lastPaymentDate: string;
  monthsBehind: number;
  phone: string;
}

const defaulters: Defaulter[] = [
  { id: 'USB-2604', name: 'Adil Ahmed',       roll: 1,  batch: '16', department: 'Phase III', tuitionDue: 25000,  hostelDue: 8000,  messDue: 5000,  otherDue: 2000,  totalDue: 40000,  lastPaymentDate: 'Mar 15, 2026', monthsBehind: 1, phone: '+8801712345601' },
  { id: 'USB-2606', name: 'Hasan Mahmud',     roll: 3,  batch: '16', department: 'Phase III', tuitionDue: 50000,  hostelDue: 16000, messDue: 10000, otherDue: 4000,  totalDue: 80000,  lastPaymentDate: 'Jan 20, 2026', monthsBehind: 3, phone: '+8801712345603' },
  { id: 'USB-2608', name: 'Rafi Islam',       roll: 5,  batch: '16', department: 'Phase III', tuitionDue: 75000,  hostelDue: 24000, messDue: 15000, otherDue: 6000,  totalDue: 120000, lastPaymentDate: 'Nov 5, 2025',  monthsBehind: 5, phone: '+8801712345605' },
  { id: 'USB-2510', name: 'Karim Uddin',      roll: 10, batch: '15', department: 'Phase II',  tuitionDue: 25000,  hostelDue: 0,     messDue: 5000,  otherDue: 1000,  totalDue: 31000,  lastPaymentDate: 'Feb 28, 2026', monthsBehind: 2, phone: '+8801712345610' },
  { id: 'USB-2512', name: 'Meherun Nesa',     roll: 12, batch: '15', department: 'Phase II',  tuitionDue: 100000, hostelDue: 32000, messDue: 20000, otherDue: 8000,  totalDue: 160000, lastPaymentDate: 'Sep 15, 2025', monthsBehind: 7, phone: '+8801712345612' },
  { id: 'USB-2415', name: 'Rafiqul Islam',    roll: 15, batch: '14', department: 'Phase I',   tuitionDue: 50000,  hostelDue: 8000,  messDue: 5000,  otherDue: 2000,  totalDue: 65000,  lastPaymentDate: 'Dec 10, 2025', monthsBehind: 4, phone: '+8801712345615' },
];

const formatCurrency = (amount: number) =>
  `৳${amount.toLocaleString('en-IN')}`;

export default function FeeDefaultersPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState<'totalDue' | 'monthsBehind'>('totalDue');

  const filtered = defaulters
    .filter((d) => d.name.toLowerCase().includes(searchTerm.toLowerCase()) || d.id.includes(searchTerm))
    .sort((a, b) => sortBy === 'totalDue' ? b.totalDue - a.totalDue : b.monthsBehind - a.monthsBehind);

  const totalOutstanding = defaulters.reduce((s, d) => s + d.totalDue, 0);
  const criticalCount = defaulters.filter((d) => d.monthsBehind >= 3).length;

  return (
    <div className="flex flex-col gap-6 w-full h-full pb-10">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
        <div className="flex items-center gap-2.5">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-red-500 to-rose-700 flex items-center justify-center shadow-md">
            <Wallet className="w-5 h-5 text-white" />
          </div>
          <div>
            <h1 className="text-xl font-black text-gray-900 tracking-tight">Fee Defaulters</h1>
            <p className="text-xs font-medium text-gray-400">Students with outstanding payment balances</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button className="px-4 py-2.5 text-xs font-bold rounded-lg border border-gray-200 text-gray-600 hover:bg-gray-50 transition-all flex items-center gap-2">
            <Send className="w-3.5 h-3.5" />
            Send Reminders
          </button>
          <button className="px-4 py-2.5 text-xs font-bold rounded-lg bg-brand-primary-blue text-white hover:bg-brand-primary-blue/90 transition-all flex items-center gap-2 shadow-sm">
            <Download className="w-3.5 h-3.5" />
            Export Excel
          </button>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4">
          <p className="text-[10px] font-bold text-gray-400 uppercase mb-1">Total Defaulters</p>
          <p className="text-2xl font-black text-gray-900">{defaulters.length}</p>
        </div>
        <div className="bg-red-50 rounded-xl border border-red-200 p-4">
          <p className="text-[10px] font-bold text-[#ed1c24] uppercase mb-1">Total Outstanding</p>
          <p className="text-2xl font-black text-[#ed1c24]">{formatCurrency(totalOutstanding)}</p>
        </div>
        <div className="bg-amber-50 rounded-xl border border-amber-200 p-4">
          <p className="text-[10px] font-bold text-amber-600 uppercase mb-1">Critical (3+ Months)</p>
          <p className="text-2xl font-black text-amber-700">{criticalCount}</p>
        </div>
        <div className="bg-blue-50 rounded-xl border border-blue-200 p-4">
          <p className="text-[10px] font-bold text-brand-primary-blue uppercase mb-1">Avg. Overdue</p>
          <p className="text-2xl font-black text-brand-primary-blue">{formatCurrency(Math.round(totalOutstanding / defaulters.length))}</p>
        </div>
      </div>

      {/* Filters */}
      <div className="flex items-center gap-3 flex-wrap">
        <div className="relative flex-1 max-w-sm">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <input
            type="text"
            placeholder="Search by name or ID..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 text-sm font-medium bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-primary-blue/20"
          />
        </div>
        <button
          onClick={() => setSortBy(sortBy === 'totalDue' ? 'monthsBehind' : 'totalDue')}
          className="px-4 py-2.5 text-xs font-bold rounded-xl border border-gray-200 bg-white hover:bg-gray-50 flex items-center gap-2"
        >
          <TrendingUp className="w-3.5 h-3.5" />
          Sort: {sortBy === 'totalDue' ? 'Amount ↓' : 'Months Behind ↓'}
        </button>
      </div>

      {/* Defaulters Table */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-gray-50/70 border-b border-gray-100">
                <th className="px-4 py-3 text-[10px] font-bold text-gray-400 uppercase tracking-wider">Student</th>
                <th className="px-3 py-3 text-[10px] font-bold text-gray-400 uppercase tracking-wider text-center">Batch</th>
                <th className="px-3 py-3 text-[10px] font-bold text-gray-400 uppercase tracking-wider text-right">Tuition</th>
                <th className="px-3 py-3 text-[10px] font-bold text-gray-400 uppercase tracking-wider text-right">Hostel</th>
                <th className="px-3 py-3 text-[10px] font-bold text-gray-400 uppercase tracking-wider text-right">Mess</th>
                <th className="px-3 py-3 text-[10px] font-bold text-gray-400 uppercase tracking-wider text-right">Other</th>
                <th className="px-3 py-3 text-[10px] font-bold text-[#ed1c24] uppercase tracking-wider text-right">Total Due</th>
                <th className="px-3 py-3 text-[10px] font-bold text-gray-400 uppercase tracking-wider text-center">Behind</th>
                <th className="px-4 py-3 text-[10px] font-bold text-gray-400 uppercase tracking-wider text-center">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {filtered.map((d) => (
                <tr key={d.id} className={`hover:bg-slate-50 transition-colors ${d.monthsBehind >= 3 ? 'bg-red-50/30' : ''}`}>
                  <td className="px-4 py-3">
                    <p className="text-sm font-bold text-gray-900">{d.name}</p>
                    <p className="text-[10px] text-gray-400">{d.id} · Roll {d.roll}</p>
                  </td>
                  <td className="px-3 py-3 text-center text-xs font-bold text-gray-700">{d.batch}</td>
                  <td className="px-3 py-3 text-right text-xs font-bold text-gray-700">{formatCurrency(d.tuitionDue)}</td>
                  <td className="px-3 py-3 text-right text-xs font-bold text-gray-700">{d.hostelDue > 0 ? formatCurrency(d.hostelDue) : '—'}</td>
                  <td className="px-3 py-3 text-right text-xs font-bold text-gray-700">{formatCurrency(d.messDue)}</td>
                  <td className="px-3 py-3 text-right text-xs font-bold text-gray-700">{formatCurrency(d.otherDue)}</td>
                  <td className="px-3 py-3 text-right text-sm font-black text-[#ed1c24]">{formatCurrency(d.totalDue)}</td>
                  <td className="px-3 py-3 text-center">
                    <span className={`text-xs font-black px-2 py-0.5 rounded-full ${
                      d.monthsBehind >= 3 ? 'bg-red-100 text-[#ed1c24]' : 'bg-amber-100 text-amber-700'
                    }`}>
                      {d.monthsBehind} mo
                    </span>
                  </td>
                  <td className="px-4 py-3 text-center">
                    <div className="flex items-center justify-center gap-1.5">
                      <button className="p-1.5 text-gray-400 hover:text-brand-primary-blue hover:bg-blue-50 rounded-lg transition-all" title="Send SMS">
                        <MessageSquare className="w-3.5 h-3.5" />
                      </button>
                      <button className="p-1.5 text-gray-400 hover:text-brand-primary-blue hover:bg-blue-50 rounded-lg transition-all" title="Send Email">
                        <Mail className="w-3.5 h-3.5" />
                      </button>
                      <button className="p-1.5 text-gray-400 hover:text-brand-primary-blue hover:bg-blue-50 rounded-lg transition-all" title="Call">
                        <Phone className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr className="bg-gray-50 font-bold border-t-2 border-gray-200">
                <td className="px-4 py-3 text-sm font-black text-gray-900" colSpan={2}>Grand Total ({defaulters.length} students)</td>
                <td className="px-3 py-3 text-right text-xs font-black text-gray-900">{formatCurrency(defaulters.reduce((s, d) => s + d.tuitionDue, 0))}</td>
                <td className="px-3 py-3 text-right text-xs font-black text-gray-900">{formatCurrency(defaulters.reduce((s, d) => s + d.hostelDue, 0))}</td>
                <td className="px-3 py-3 text-right text-xs font-black text-gray-900">{formatCurrency(defaulters.reduce((s, d) => s + d.messDue, 0))}</td>
                <td className="px-3 py-3 text-right text-xs font-black text-gray-900">{formatCurrency(defaulters.reduce((s, d) => s + d.otherDue, 0))}</td>
                <td className="px-3 py-3 text-right text-base font-black text-[#ed1c24]">{formatCurrency(totalOutstanding)}</td>
                <td colSpan={2}></td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    </div>
  );
}
