import React from 'react';
import { UserCheck, CheckCircle2, XCircle, Clock, Save } from 'lucide-react';
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
