'use client';

import React, { useState } from 'react';
import {
  ScanLine,
  CheckCircle2,
  Clock,
  AlertTriangle,
  BookOpen,
  UserCheck,
  ShieldCheck,
  Search,
  BookCopy,
} from 'lucide-react';
import Link from 'next/link';

/* Mock outstanding list */
const outstanding = [
  { ref: 'CHK-001', student: 'Adil Ahmed', id: 'USB-2601', book: 'Jawetz Medical Microbiology', issued: 'Apr 10', due: 'Apr 24', status: 'active', days: 0 },
  { ref: 'CHK-002', student: 'Hasan Mahmud', id: 'USB-2606', book: 'Robbins Pathology', issued: 'Mar 28', due: 'Apr 5', status: 'overdue', days: 16 },
  { ref: 'CHK-003', student: 'Rafi Islam', id: 'USB-2608', book: "Guyton Physiology", issued: 'Mar 15', due: 'Mar 29', status: 'overdue', days: 23 },
  { ref: 'CHK-004', student: 'Nusrat Jahan', id: 'USB-2710', book: "Park's Preventive Medicine", issued: 'Apr 14', due: 'Apr 28', status: 'active', days: 0 },
];

type Role = 'student' | 'admin';

export default function CheckoutPage() {
  const [role, setRole] = useState<Role>('admin');
  const [tab, setTab] = useState<'checkout' | 'return'>('checkout');

  const [studentId, setStudentId] = useState('');
  const [bookId, setBookId] = useState('');
  const [returnRef, setReturnRef] = useState('');
  const [condition, setCondition] = useState('Good condition');
  const [checkoutOk, setCheckoutOk] = useState(false);
  const [returnOk, setReturnOk] = useState(false);

  const [search, setSearch] = useState('');

  const filtered = outstanding.filter(o =>
    o.student.toLowerCase().includes(search.toLowerCase()) ||
    o.ref.toLowerCase().includes(search.toLowerCase()) ||
    o.id.toLowerCase().includes(search.toLowerCase())
  );

  const handleCheckout = (e: React.FormEvent) => {
    e.preventDefault();
    setCheckoutOk(true); setStudentId(''); setBookId('');
    setTimeout(() => setCheckoutOk(false), 4000);
  };

  const handleReturn = (e: React.FormEvent) => {
    e.preventDefault();
    setReturnOk(true); setReturnRef('');
    setTimeout(() => setReturnOk(false), 4000);
  };

  return (
    <div className="flex flex-col gap-6 w-full pb-10 h-full">
      {/* Header + Role Switcher */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex items-center gap-2.5">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center shadow-md">
            <ScanLine className="w-5 h-5 text-white" />
          </div>
          <div>
            <h1 className="text-xl font-black text-gray-900 tracking-tight">Book Checkout &amp; Return</h1>
            <p className="text-xs font-medium text-gray-400">Issue or receive physical library books</p>
          </div>
        </div>
        <div className="flex items-center bg-gray-100 rounded-2xl p-1 gap-1 self-start sm:self-auto">
          <button onClick={() => setRole('student')} className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold transition-all ${role === 'student' ? 'bg-white shadow-md text-brand-primary-blue' : 'text-gray-500 hover:text-gray-700'}`}>
            <UserCheck className="w-3.5 h-3.5" /> Student View
          </button>
          <button onClick={() => setRole('admin')} className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold transition-all ${role === 'admin' ? 'bg-white shadow-md text-indigo-600' : 'text-gray-500 hover:text-gray-700'}`}>
            <ShieldCheck className="w-3.5 h-3.5" /> Admin View
          </button>
        </div>
      </div>

      {/* ── STUDENT VIEW ── */}
      {role === 'student' && (
        <div className="flex flex-col items-center justify-center gap-6 py-12">
          <div className="w-16 h-16 rounded-full bg-blue-50 border border-blue-100 flex items-center justify-center">
            <BookCopy className="w-7 h-7 text-brand-primary-blue" />
          </div>
          <div className="text-center">
            <h2 className="text-xl font-black text-gray-900 mb-2">Your Borrow History</h2>
            <p className="text-sm text-gray-500 max-w-md">To check your borrowed books and return status, visit your personal Library Log where you can see all active and past checkouts.</p>
          </div>
          <Link href="/library/my-log" className="px-6 py-3 rounded-xl bg-brand-primary-blue text-white text-sm font-bold hover:bg-brand-primary-blue/90 transition-all shadow-sm flex items-center gap-2">
            <BookOpen className="w-4 h-4" /> Go to My Library Log
          </Link>
        </div>
      )}

      {/* ── ADMIN VIEW ── */}
      {role === 'admin' && (
        <div className="flex flex-col gap-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Form card */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
              <div className="flex border-b border-gray-100">
                <button
                  onClick={() => setTab('checkout')}
                  className={`flex-1 py-4 text-sm font-bold flex items-center justify-center gap-2 transition-colors ${tab === 'checkout' ? 'text-brand-primary-blue border-b-2 border-brand-primary-blue bg-blue-50/30' : 'text-gray-500 hover:bg-gray-50'}`}
                >
                  <ScanLine className="w-4 h-4" /> Issue Book
                </button>
                <button
                  onClick={() => setTab('return')}
                  className={`flex-1 py-4 text-sm font-bold flex items-center justify-center gap-2 transition-colors ${tab === 'return' ? 'text-emerald-600 border-b-2 border-emerald-500 bg-emerald-50/30' : 'text-gray-500 hover:bg-gray-50'}`}
                >
                  <CheckCircle2 className="w-4 h-4" /> Return Book
                </button>
              </div>
              <div className="p-6">
                {tab === 'checkout' ? (
                  <form onSubmit={handleCheckout} className="space-y-5">
                    {checkoutOk && (
                      <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 flex gap-3">
                        <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                        <div>
                          <p className="text-sm font-bold text-emerald-800">Book Issued!</p>
                          <p className="text-xs text-emerald-600 mt-0.5">Due in 14 days. Record added to log.</p>
                        </div>
                      </div>
                    )}
                    <div>
                      <label className="block text-xs font-bold text-gray-600 uppercase tracking-wider mb-2">Student / Faculty ID</label>
                      <input type="text" value={studentId} onChange={e => setStudentId(e.target.value)} placeholder="e.g. USB-2601" required className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm font-bold text-gray-900 placeholder-gray-400 focus:bg-white focus:ring-2 focus:ring-brand-primary-blue/20 focus:border-brand-primary-blue transition-all" />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-gray-600 uppercase tracking-wider mb-2">Book ISBN / Ref ID</label>
                      <input type="text" value={bookId} onChange={e => setBookId(e.target.value)} placeholder="e.g. 978-0123456789 or BK-0041" required className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm font-bold text-gray-900 placeholder-gray-400 focus:bg-white focus:ring-2 focus:ring-brand-primary-blue/20 focus:border-brand-primary-blue transition-all" />
                    </div>
                    <button type="submit" className="w-full py-3.5 rounded-xl bg-brand-primary-blue text-white text-sm font-bold hover:bg-brand-primary-blue/90 transition-all shadow-sm">
                      Confirm Checkout →
                    </button>
                    <p className="text-center text-[10px] text-gray-400">Students: 14 days · Faculty: 30 days · Fine: Tk. 10/day overdue</p>
                  </form>
                ) : (
                  <form onSubmit={handleReturn} className="space-y-5">
                    {returnOk && (
                      <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 flex gap-3">
                        <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                        <div>
                          <p className="text-sm font-bold text-emerald-800">Book Returned!</p>
                          <p className="text-xs text-emerald-600 mt-0.5">Inventory updated. Fines calculated if applicable.</p>
                        </div>
                      </div>
                    )}
                    <div>
                      <label className="block text-xs font-bold text-gray-600 uppercase tracking-wider mb-2">Checkout Reference ID</label>
                      <input type="text" value={returnRef} onChange={e => setReturnRef(e.target.value)} placeholder="e.g. CHK-001" required className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm font-bold text-gray-900 placeholder-gray-400 focus:bg-white focus:ring-2 focus:ring-emerald-400/20 focus:border-emerald-500 transition-all" />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-gray-600 uppercase tracking-wider mb-2">Book Condition</label>
                      <select value={condition} onChange={e => setCondition(e.target.value)} className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm font-bold text-gray-900 focus:ring-2 focus:ring-emerald-400/20 focus:border-emerald-500 transition-all">
                        <option>Good condition</option>
                        <option>Minor wear</option>
                        <option>Damaged — fine applicable</option>
                        <option>Lost — full replacement cost</option>
                      </select>
                    </div>
                    <button type="submit" className="w-full py-3.5 rounded-xl bg-emerald-600 text-white text-sm font-bold hover:bg-emerald-700 transition-all shadow-sm">
                      Confirm Return →
                    </button>
                  </form>
                )}
              </div>
            </div>

            {/* Circulation rules */}
            <div className="space-y-4">
              <div className="bg-blue-50 rounded-2xl border border-blue-100 p-5">
                <h3 className="text-sm font-bold text-brand-primary-blue mb-3 flex items-center gap-2"><Clock className="w-4 h-4" /> Loan Rules</h3>
                <ul className="space-y-2.5">
                  {[
                    'Students: max 3 books at a time, 14-day loan',
                    'Faculty: max 5 books at a time, 30-day loan',
                    'Overdue fine: Tk. 10 per day after due date',
                    'Lost book: student pays full replacement cost',
                    'Renewal: once, for 7 additional days',
                  ].map((rule, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs text-gray-600 font-medium">
                      <div className="w-1.5 h-1.5 rounded-full bg-brand-primary-blue shrink-0 mt-1.5"></div>
                      {rule}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-amber-50 rounded-2xl border border-amber-200 p-5 flex gap-3">
                <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-bold text-amber-800">Scanner Offline?</p>
                  <p className="text-xs text-amber-700 mt-1 leading-relaxed">Type Student ID and the 13-digit ISBN manually. Contact IT support (Ext: 110) for hardware replacement.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Outstanding Table */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="px-6 py-4 border-b border-gray-100 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <h3 className="text-sm font-bold text-gray-900">Current Outstanding Books</h3>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-gray-400" />
                <input
                  type="text"
                  value={search}
                  onChange={e => setSearch(e.target.value)}
                  placeholder="Search student or ref..."
                  className="pl-9 pr-4 py-2 text-xs font-bold bg-gray-50 border border-gray-200 rounded-xl text-gray-700 placeholder-gray-400 focus:ring-2 focus:ring-brand-primary-blue/20 focus:border-brand-primary-blue transition-all w-56"
                />
              </div>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="bg-gray-50/70 border-b border-gray-100">
                    <th className="px-5 py-3 text-[10px] font-bold text-gray-400 text-center uppercase">Ref</th>
                    <th className="px-5 py-3 text-[10px] font-bold text-gray-400 uppercase">Student</th>
                    <th className="px-5 py-3 text-[10px] font-bold text-gray-400 uppercase">Book</th>
                    <th className="px-5 py-3 text-[10px] font-bold text-gray-400 text-center uppercase">Issued</th>
                    <th className="px-5 py-3 text-[10px] font-bold text-gray-400 text-center uppercase">Due</th>
                    <th className="px-5 py-3 text-[10px] font-bold text-gray-400 text-center uppercase">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-50">
                  {filtered.map((o, i) => (
                    <tr key={i} className="hover:bg-slate-50 transition-colors">
                      <td className="px-5 py-3.5 text-xs font-black text-gray-400 text-center">{o.ref}</td>
                      <td className="px-5 py-3.5">
                        <p className="text-sm font-bold text-gray-900">{o.student}</p>
                        <p className="text-[10px] text-gray-400">{o.id}</p>
                      </td>
                      <td className="px-5 py-3.5 text-sm font-bold text-gray-700">{o.book}</td>
                      <td className="px-5 py-3.5 text-xs font-bold text-gray-500 text-center">{o.issued}</td>
                      <td className={`px-5 py-3.5 text-xs font-bold text-center ${o.status === 'overdue' ? 'text-[#ed1c24]' : 'text-gray-700'}`}>{o.due}</td>
                      <td className="px-5 py-3.5 text-center">
                        {o.status === 'overdue' ? (
                          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-red-50 text-[#ed1c24] border border-red-200 text-[10px] font-bold">
                            <AlertTriangle className="w-2.5 h-2.5" /> {o.days}d overdue
                          </span>
                        ) : (
                          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-blue-50 text-brand-primary-blue border border-blue-200 text-[10px] font-bold">
                            <Clock className="w-2.5 h-2.5" /> Active
                          </span>
                        )}
                      </td>
                    </tr>
                  ))}
                  {filtered.length === 0 && (
                    <tr>
                      <td colSpan={6} className="px-5 py-8 text-center text-sm font-bold text-gray-400">No results found</td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
