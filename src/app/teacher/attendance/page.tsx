import React from 'react';
import { UserCheck, CheckCircle2, XCircle, Clock, Save, CalendarDays } from 'lucide-react';
import Link from 'next/link';

export default function TeacherAttendancePage() {
  const students = [
    { id: 'USB-2601', name: 'Adil Ahmed', status: 'Present' },
    { id: 'USB-2602', name: 'Nusrat Jahan', status: 'Present' },
    { id: 'USB-2603', name: 'Faisal Karim', status: 'Absent' },
    { id: 'USB-2604', name: 'Hasib Rahman', status: 'Late' },
    { id: 'USB-2605', name: 'Tarek Monsur', status: 'Present' },
    { id: 'USB-2606', name: 'Sadia Islam', status: 'Pending' },
  ];

  return (
    <div className="flex flex-col gap-6 w-full pb-10 max-w-5xl mx-auto">
      <div className="flex justify-between items-center bg-white p-4 rounded-xl border border-gray-200 shadow-sm">
         <div>
            <Link href="/teacher" className="text-sm text-brand-primary-blue hover:underline mb-1 inline-block">← Back to Dashboard</Link>
            <h1 className="text-2xl font-bold text-gray-900">Attendance Sheet</h1>
            <p className="text-sm font-medium text-gray-500">General Anatomy • MBBS Term 4 • Today 08:00 AM</p>
         </div>
         <button className="flex items-center gap-2 bg-brand-primary-green text-white px-5 py-2.5 rounded-lg font-bold shadow hover:bg-brand-primary-green/90 transition-all">
           <Save className="w-4 h-4" /> Save & Broadcast SMS Alert
         </button>
      </div>
      {/* Calendar Date Selector Layer */}
      <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-4">
        <div className="flex items-center justify-between mb-3">
           <h3 className="text-sm font-bold text-gray-900 flex items-center gap-2">
             <CalendarDays className="w-4 h-4 text-brand-primary-blue" />
             Select Date for Register
           </h3>
           <span className="text-xs font-bold text-gray-500 bg-gray-100 px-3 py-1 rounded-full">April 2026</span>
        </div>
        <div className="flex items-center gap-2 overflow-x-auto custom-scrollbar pb-2">
           {[
             { day: 'Mon', date: '9', status: 'past' },
             { day: 'Tue', date: '10', status: 'past' },
             { day: 'Wed', date: '11', status: 'past' },
             { day: 'Thu', date: '12', status: 'past' },
             { day: 'Fri', date: '13', status: 'active' },
             { day: 'Sat', date: '14', status: 'future' },
             { day: 'Sun', date: '15', status: 'future' },
           ].map((d, i) => (
             <div key={i} className={`flex flex-col items-center justify-center p-3 rounded-xl border min-w-[80px] transition-all cursor-pointer ${
               d.status === 'active' 
                 ? 'bg-brand-primary-blue text-white border-brand-primary-blue shadow-md scale-105 transform origin-bottom' 
                 : d.status === 'future'
                   ? 'bg-gray-50 border-gray-100 text-gray-300 pointer-events-none'
                   : 'bg-white border-gray-100 text-gray-500 hover:bg-gray-50 hover:border-gray-200'
             }`}>
               <span className="text-[10px] font-bold uppercase tracking-wider">{d.day}</span>
               <span className="text-xl font-black mt-1 leading-none">{d.date}</span>
               {d.status === 'past' && <div className="w-1.5 h-1.5 rounded-full bg-green-500 mt-2"></div>}
               {d.status === 'active' && <div className="w-2 h-2 rounded-full bg-white mt-1.5 animate-pulse"></div>}
             </div>
           ))}
        </div>
      </div>

      <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden border-t-4 border-t-brand-primary-blue">
        <table className="w-full text-left">
           <thead>
             <tr className="bg-gray-50 border-b border-gray-200 text-sm">
               <th className="px-6 py-4 font-black text-gray-700">Student Name</th>
               <th className="px-6 py-4 font-black text-gray-700">Student ID</th>
               <th className="px-6 py-4 font-black text-center text-gray-700">Mark Attendance</th>
             </tr>
           </thead>
           <tbody className="divide-y divide-gray-100">
             {students.map((st, i) => (
                <tr key={i} className="hover:bg-blue-50/50 transition-colors">
                  <td className="px-6 py-4">
                     <div className="flex items-center gap-3">
                       <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-xs font-bold text-gray-600">
                         {st.name.split(' ').map(n => n[0]).join('')}
                       </div>
                       <span className="font-bold text-gray-900">{st.name}</span>
                     </div>
                  </td>
                  <td className="px-6 py-4 font-mono text-sm text-gray-500">{st.id}</td>
                  <td className="px-6 py-4">
                     <div className="flex justify-center gap-2">
                       <button className={`flex items-center gap-1.5 px-4 py-2 flex-1 justify-center rounded-lg text-sm font-bold border transition-colors ${st.status === 'Present' ? 'bg-green-100 text-green-700 border-green-200 scale-105 shadow-sm' : 'bg-white text-gray-500 border-gray-200 hover:bg-gray-50'}`}>
                         <CheckCircle2 className="w-4 h-4" /> Present
                       </button>
                       <button className={`flex items-center gap-1.5 px-4 py-2 flex-1 justify-center rounded-lg text-sm font-bold border transition-colors ${st.status === 'Absent' ? 'bg-red-100 text-red-700 border-red-200 scale-105 shadow-sm' : 'bg-white text-gray-500 border-gray-200 hover:bg-gray-50'}`}>
                         <XCircle className="w-4 h-4" /> Absent
                       </button>
                       <button className={`flex items-center gap-1.5 px-4 py-2 flex-1 justify-center rounded-lg text-sm font-bold border transition-colors ${st.status === 'Late' ? 'bg-yellow-100 text-yellow-700 border-yellow-200 scale-105 shadow-sm' : 'bg-white text-gray-500 border-gray-200 hover:bg-gray-50'}`}>
                         <Clock className="w-4 h-4" /> Late
                       </button>
                     </div>
                  </td>
                </tr>
             ))}
           </tbody>
        </table>
      </div>
    </div>
  );
}
