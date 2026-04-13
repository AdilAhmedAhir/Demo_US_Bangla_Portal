import React from 'react';
import { UserCheck, Shield, GraduationCap, AlertCircle, PieChart } from 'lucide-react';

export default function GuardianPortal() {
  return (
    <div className="flex flex-col gap-6 w-full pb-10">
      <div className="mb-2 p-6 bg-amber-50 rounded-2xl border-b-4 border-amber-500 shadow-sm">
        <div className="flex items-center gap-2 mb-2">
           <Shield className="w-5 h-5 text-amber-600" />
           <span className="text-amber-600 font-bold text-sm tracking-wide uppercase">Parent / Guardian Portal</span>
        </div>
        <h1 className="text-3xl font-black tracking-tight text-gray-900">Guardian Dashboard</h1>
        <p className="mt-1 text-gray-600">Welcome Mr. Ahmed. You are viewing data for: <strong className="text-gray-900">Adil Ahmed (USB-2601)</strong>.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
         {/* Attendance Widget */}
         <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 flex flex-col justify-between">
           <div className="flex justify-between items-start mb-6">
              <h3 className="font-bold text-gray-900 flex items-center gap-2">
                 <UserCheck className="w-5 h-5 text-brand-primary-green" /> Attendance
              </h3>
           </div>
           <div className="text-center">
             <div className="relative inline-flex items-center justify-center">
                <svg className="w-32 h-32 transform -rotate-90">
                  <circle cx="64" cy="64" r="56" stroke="currentColor" strokeWidth="12" fill="transparent" className="text-gray-100" />
                  <circle cx="64" cy="64" r="56" stroke="currentColor" strokeWidth="12" fill="transparent" strokeDasharray="351.85" strokeDashoffset="52.77" className="text-brand-primary-green" strokeLinecap="round" />
                </svg>
                <div className="absolute flex flex-col items-center justify-center text-center">
                   <span className="text-3xl font-black text-gray-900">85%</span>
                </div>
             </div>
             <p className="text-sm font-bold text-gray-500 mt-4">Present: 45 / Total: 53</p>
           </div>
         </div>

         {/* Academic Widget */}
         <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 flex flex-col">
           <div className="flex justify-between items-start mb-4">
              <h3 className="font-bold text-gray-900 flex items-center gap-2">
                 <GraduationCap className="w-5 h-5 text-brand-primary-blue" /> Latest Result
              </h3>
           </div>
           <div className="flex-1 flex flex-col justify-center">
             <div className="p-4 bg-blue-50 rounded-xl border border-blue-100 mb-4">
               <p className="text-xs font-bold text-blue-600 mb-1 uppercase">Term 3 Final Exam</p>
               <h2 className="text-4xl font-black text-gray-900">GPA 3.82<span className="text-lg text-gray-500 font-medium">/4.0</span></h2>
             </div>
             <button className="w-full py-2 bg-gray-900 text-white font-bold rounded-lg text-sm hover:bg-gray-800 transition-colors">Download Report Card</button>
           </div>
         </div>

         {/* Finance Alert Widget */}
         <div className="bg-red-50 rounded-2xl border-2 border-red-200 shadow-sm p-6 flex flex-col justify-between">
           <div className="flex justify-between items-start mb-4">
              <h3 className="font-bold text-red-700 flex items-center gap-2">
                 <AlertCircle className="w-5 h-5" /> Pending Dues
              </h3>
           </div>
           <div>
             <p className="text-sm font-medium text-red-600 mb-1">Hostel & Mess Charge (April)</p>
             <h2 className="text-4xl font-black text-red-700 leading-tight">৳ 6,500</h2>
             <p className="text-xs font-bold text-red-500 mb-4 mt-2">Due Date passed 5 days ago.</p>
             <button className="w-full py-2.5 bg-red-600 text-white font-bold rounded-lg text-sm hover:bg-red-700 transition-colors shadow-sm">Pay Online Now</button>
           </div>
         </div>
      </div>
    </div>
  );
}
