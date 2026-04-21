'use client';

import React, { useState } from 'react';
import { 
  ScanLine, 
  Search, 
  UserPlus, 
  BookCopy, 
  AlertCircle,
  CheckCircle2,
  CalendarDays,
  X
} from 'lucide-react';
import Link from 'next/link';

export default function BookCheckoutPage() {
  const [studentId, setStudentId] = useState('');
  const [bookId, setBookId] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);

  const handleCheckout = (e: React.FormEvent) => {
    e.preventDefault();
    if (studentId && bookId) {
      setShowSuccess(true);
      setTimeout(() => setShowSuccess(false), 3000);
      setStudentId('');
      setBookId('');
    }
  };

  return (
    <div className="flex flex-col gap-6 w-full pb-10 h-full">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
        <div className="flex items-center gap-2.5">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center shadow-md">
            <ScanLine className="w-5 h-5 text-white" />
          </div>
          <div>
            <h1 className="text-xl font-black text-gray-900 tracking-tight">Offline Book Checkout</h1>
            <p className="text-xs font-medium text-gray-400">Issue physical books to students and staff</p>
          </div>
        </div>
        <Link href="/library/analytics" className="px-4 py-2.5 text-xs font-bold rounded-lg bg-white border border-gray-200 text-gray-700 hover:bg-gray-50 transition-all shadow-sm">
          View Checkouts
        </Link>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        {/* Checkout Form */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="p-6 border-b border-gray-100 bg-gray-50/50">
            <h2 className="text-base font-bold text-gray-900">Issue Book</h2>
            <p className="text-xs text-gray-500 mt-1">Scan or enter the Student ID and Book reference.</p>
          </div>
          <div className="p-6">
            {showSuccess && (
              <div className="mb-6 p-4 rounded-xl bg-emerald-50 border border-emerald-200 flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-bold text-emerald-800">Checkout Successful!</p>
                  <p className="text-xs text-emerald-600 mt-0.5">Book has been issued. Due in 14 days.</p>
                </div>
              </div>
            )}

            <form onSubmit={handleCheckout} className="space-y-6">
              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">Student ID / Faculty ID</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <UserPlus className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="text"
                    value={studentId}
                    onChange={(e) => setStudentId(e.target.value)}
                    className="block w-full pl-11 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm font-bold text-gray-900 placeholder-gray-400 focus:bg-white focus:ring-2 focus:ring-brand-primary-blue/20 focus:border-brand-primary-blue transition-all"
                    placeholder="e.g. USB-2601"
                    required
                  />
                  <div className="absolute inset-y-0 right-0 pr-2 flex items-center">
                    <button type="button" className="p-1.5 text-gray-400 hover:text-brand-primary-blue bg-white rounded border border-gray-200 shadow-sm text-[10px] font-bold">SCAN ID</button>
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">Book ISBN / Ref ID</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <BookCopy className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="text"
                    value={bookId}
                    onChange={(e) => setBookId(e.target.value)}
                    className="block w-full pl-11 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm font-bold text-gray-900 placeholder-gray-400 focus:bg-white focus:ring-2 focus:ring-brand-primary-blue/20 focus:border-brand-primary-blue transition-all"
                    placeholder="e.g. 978-0123456789"
                    required
                  />
                  <div className="absolute inset-y-0 right-0 pr-2 flex items-center">
                    <button type="button" className="p-1.5 text-gray-400 hover:text-brand-primary-blue bg-white rounded border border-gray-200 shadow-sm text-[10px] font-bold">SCAN BOOK</button>
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full flex justify-center items-center gap-2 py-3.5 px-4 border border-transparent rounded-xl shadow-sm text-sm font-bold text-white bg-brand-primary-blue hover:bg-brand-primary-blue/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-primary-blue transition-all"
                >
                  Confirm Checkout
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Info Column */}
        <div className="space-y-6">
          <div className="bg-blue-50/50 rounded-2xl border border-blue-100 p-6">
            <h3 className="text-sm font-bold text-brand-primary-blue flex items-center gap-2 mb-4">
              <CalendarDays className="w-4 h-4" /> Circulation Rules
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2.5 text-xs text-gray-600 font-medium">
                <div className="w-1.5 h-1.5 rounded-full bg-brand-primary-blue shrink-0 mt-1.5"></div>
                Students may borrow up to exactly 3 books simultaneously.
              </li>
              <li className="flex items-start gap-2.5 text-xs text-gray-600 font-medium">
                <div className="w-1.5 h-1.5 rounded-full bg-brand-primary-blue shrink-0 mt-1.5"></div>
                Standard borrowing period is 14 days from checkout.
              </li>
              <li className="flex items-start gap-2.5 text-xs text-gray-600 font-medium">
                <div className="w-1.5 h-1.5 rounded-full bg-brand-primary-blue shrink-0 mt-1.5"></div>
                Faculty borrowing period is extended to 30 days.
              </li>
              <li className="flex items-start gap-2.5 text-xs text-gray-600 font-medium">
                <div className="w-1.5 h-1.5 rounded-full bg-brand-primary-blue shrink-0 mt-1.5"></div>
                Overdue fines accrue at Tk. 10 per day past the due date.
              </li>
            </ul>
          </div>

          <div className="bg-amber-50 rounded-2xl border border-amber-200 p-6 flex gap-4">
            <AlertCircle className="w-5 h-5 text-amber-600 shrink-0" />
            <div>
              <h3 className="text-sm font-bold text-amber-800">Scanner Not Working?</h3>
              <p className="text-xs text-amber-700 mt-1 leading-relaxed">
                If the barcode scanner is offline, manually type the Student ID and the 13-digit ISBN located on the back cover of the book. 
                Contact IT support for hardware replacement.
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
