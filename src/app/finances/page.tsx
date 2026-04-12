import React from 'react';
import { Wallet, Download, Clock, CheckCircle2, History, CreditCard } from 'lucide-react';

export default function FinancesPage() {
  const transactions = [
    { id: 'TRX-9482', description: 'Tuition Fee - Term 4 Installment 1', date: 'April 02, 2026', amount: 45000, status: 'Completed' },
    { id: 'TRX-9481', description: 'Hostel Rent - April', date: 'March 28, 2026', amount: 8500, status: 'Completed' },
    { id: 'TRX-9210', description: 'Lab Equipment Fee', date: 'January 15, 2026', amount: 3000, status: 'Completed' },
  ];

  return (
    <div className="flex flex-col gap-6 w-full pb-10">
      <div className="mb-2 flex justify-between items-end">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold tracking-tight text-gray-900">Student Finances</h1>
          <p className="mt-2 text-sm md:text-base text-gray-500">View and manage your outstanding balances and payment history.</p>
        </div>
        <button className="hidden sm:flex items-center gap-2 px-4 py-2 bg-gray-50 text-gray-700 rounded-xl border border-gray-200 font-semibold text-sm hover:bg-gray-100 transition-colors cursor-pointer hover:shadow-sm">
          <Download className="w-4 h-4" /> Download Statement
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Alert Card */}
        <div className="lg:col-span-2 bg-gradient-to-br from-brand-accent-red to-[#c9181f] rounded-2xl p-6 md:p-8 flex items-center justify-between text-white shadow-md relative overflow-hidden group hover:shadow-lg transition-all">
          <div className="absolute right-0 top-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none" />
          <div className="relative z-10">
            <p className="text-white/80 font-semibold text-sm mb-1">Current Outstanding Balance</p>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-2">৳45,000</h2>
            <p className="text-white/90 text-sm flex items-center gap-1.5 font-medium">
              <Clock className="w-4 h-4" /> Due: Last Friday
            </p>
          </div>
          <div className="relative z-10 flex flex-col gap-3">
            <button className="px-6 py-3 bg-white text-brand-accent-red font-bold text-sm rounded-xl shadow-sm hover:shadow active:scale-95 transition-all flex items-center gap-2">
              <CreditCard className="w-4 h-4" /> Pay Now
            </button>
          </div>
        </div>

        {/* Breakdown Card */}
        <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm flex flex-col">
          <h3 className="font-bold text-gray-900 mb-4">Fee Breakdown</h3>
          <div className="flex-1 flex flex-col gap-4">
            <div className="flex justify-between items-center text-sm">
              <span className="text-gray-500">Tuition</span>
              <span className="font-bold text-gray-900">৳35,000</span>
            </div>
            <div className="flex justify-between items-center text-sm">
              <span className="text-gray-500">Hostel & Mess</span>
              <span className="font-bold text-gray-900">৳8,500</span>
            </div>
            <div className="flex justify-between items-center text-sm">
              <span className="text-gray-500">Late Fine</span>
              <span className="font-bold text-brand-accent-red">৳1,500</span>
            </div>
            <div className="w-full h-px bg-gray-100 my-2"></div>
            <div className="flex justify-between items-center text-sm">
              <span className="font-semibold text-gray-900">Total</span>
              <span className="font-bold text-gray-900 text-lg">৳45,000</span>
            </div>
          </div>
        </div>
      </div>

      {/* Transaction History */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm mt-4 overflow-hidden">
        <div className="px-6 py-5 border-b border-gray-100 flex items-center gap-2 bg-gray-50/50">
          <History className="w-5 h-5 text-gray-400" />
          <h3 className="text-lg font-bold text-gray-900">Recent Transactions</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-gray-100">
                <th className="px-6 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">Date</th>
                <th className="px-6 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">Description</th>
                <th className="px-6 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">Transaction ID</th>
                <th className="px-6 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wider text-right">Amount</th>
                <th className="px-6 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wider text-right">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {transactions.map((trx) => (
                <tr key={trx.id} className="hover:bg-gray-50/50 transition-colors">
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{trx.date}</td>
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">{trx.description}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 font-mono text-xs">{trx.id}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-gray-900 text-right">৳{trx.amount.toLocaleString()}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-right">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold bg-brand-primary-green/10 text-brand-primary-green">
                      <CheckCircle2 className="w-3 h-3" /> {trx.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
