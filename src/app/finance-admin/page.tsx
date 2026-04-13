import React from 'react';
import { Banknote, AlertCircle, FileText, ChevronRight, TrendingDown } from 'lucide-react';

export default function FinanceAdminPage() {
  const dues = [
    { id: '1', name: 'Hasib Rahman', stId: 'USB-2401', dueAmount: 95000, daysPast: 45, status: 'Critical' },
    { id: '2', name: 'Nusrat Jahan', stId: 'USB-2509', dueAmount: 45000, daysPast: 12, status: 'Warning' },
    { id: '3', name: 'Faisal Ahmed', stId: 'USB-2391', dueAmount: 18000, daysPast: 5, status: 'Notice' },
  ];

  return (
    <div className="flex flex-col gap-6 w-full pb-10">
      <div className="mb-2 border-b-4 border-purple-600 rounded-b-xl bg-purple-50 p-6 shadow-sm">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900">Accounts & Finance Command Center</h1>
        <p className="mt-2 text-sm text-gray-500">Monitor revenue streams, outstanding invoices, and gateway performance.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
         {/* Main Chart Placeholder */}
         <div className="lg:col-span-2 bg-white rounded-2xl border border-gray-100 shadow-sm p-6 flex flex-col group hover:shadow-md">
            <h3 className="font-bold text-gray-900 mb-6">Revenue Trajectory (Q2 2026)</h3>
            <div className="flex-1 min-h-[250px] w-full bg-gradient-to-t from-emerald-50 to-white rounded-xl border border-gray-50 flex items-end justify-between p-4 px-10 relative overflow-hidden">
               {/* Mock bars */}
               <div className="absolute inset-0 border-b border-dashed border-gray-200 mt-20 z-0"></div>
               <div className="absolute inset-0 border-b border-dashed border-gray-200 mt-40 z-0"></div>
               {[40, 60, 50, 80, 50, 95].map((h, i) => (
                 <div key={i} className="w-12 bg-purple-500 rounded-t-sm z-10 transition-all cursor-pointer hover:bg-purple-400" style={{ height: `${h}%` }}></div>
               ))}
            </div>
            <div className="flex justify-between mt-4 px-10 text-xs font-bold text-gray-400">
              <span>Jan</span><span>Feb</span><span>Mar</span><span>Apr</span><span>May</span><span>Jun</span>
            </div>
         </div>

         {/* Total Summary */}
         <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 flex flex-col gap-4">
            <div className="bg-emerald-50 text-emerald-700 p-4 rounded-xl border border-emerald-100">
               <p className="font-bold text-xs uppercase mb-1">Cleared Funds (Term 1)</p>
               <h2 className="text-3xl font-black">৳14.2M</h2>
            </div>
            <div className="bg-red-50 text-brand-accent-red p-4 rounded-xl border border-red-100 mt-auto">
               <p className="font-bold text-xs uppercase mb-1">Total Outstanding Dues</p>
               <h2 className="text-3xl font-black flex items-center gap-2">৳1.8M <TrendingDown className="w-5 h-5" /></h2>
               <p className="text-xs font-semibold mt-2 underline cursor-pointer">Generate Defaulters Report</p>
            </div>
         </div>
      </div>

      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm mt-4">
        <div className="px-6 py-5 border-b border-gray-100 flex justify-between items-center bg-gray-50/50">
          <h3 className="text-lg font-bold text-gray-900 flex items-center gap-2">
            <AlertCircle className="w-5 h-5 text-brand-accent-red" /> Attention Required: High Outstanding Dues
          </h3>
          <button className="px-4 py-2 bg-purple-600 text-white rounded-md text-xs font-bold shadow-sm">Send Bulk SMS Warn</button>
        </div>
        <table className="w-full text-left">
           <thead>
             <tr className="border-b border-gray-100 text-xs uppercase text-gray-500 bg-white">
               <th className="px-6 py-4 font-bold">Student</th>
               <th className="px-6 py-4 font-bold">ID</th>
               <th className="px-6 py-4 font-bold text-right">Amount Due</th>
               <th className="px-6 py-4 font-bold">Status</th>
               <th className="px-6 py-4 font-bold text-right">Action</th>
             </tr>
           </thead>
           <tbody className="divide-y divide-gray-50">
             {dues.map((d) => (
                <tr key={d.id} className="hover:bg-gray-50 text-sm">
                   <td className="px-6 py-4 font-bold text-gray-900">{d.name}</td>
                   <td className="px-6 py-4 text-gray-500 font-mono text-xs">{d.stId}</td>
                   <td className="px-6 py-4 font-black text-gray-900 text-right">৳{d.dueAmount.toLocaleString()}</td>
                   <td className="px-6 py-4">
                     <span className={`px-2.5 py-1 text-xs font-bold rounded-md ${d.status === 'Critical' ? 'bg-red-100 text-red-700' : d.status === 'Warning' ? 'bg-orange-100 text-orange-700' : 'bg-yellow-100 text-yellow-700'}`}>
                        {d.status} ({d.daysPast} days)
                     </span>
                   </td>
                   <td className="px-6 py-4 text-right">
                     <button className="text-purple-600 font-bold hover:underline">View Invoice</button>
                   </td>
                </tr>
             ))}
           </tbody>
        </table>
      </div>
    </div>
  );
}
