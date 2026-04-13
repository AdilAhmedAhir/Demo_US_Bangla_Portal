import React from 'react';
import { Users, FileDiff, TestTube, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function TeacherPage() {
  const classes = [
    { id: 'MBB-401', name: 'General Anatomy (Group A)', time: '08:00 AM Today', students: 85, room: 'Gallery 1' },
    { id: 'MBB-401', name: 'General Anatomy (Group B)', time: '11:00 AM Today', students: 80, room: 'Gallery 2' },
  ];

  return (
    <div className="flex flex-col gap-6 w-full pb-10">
      <div className="mb-2 p-6 bg-gradient-to-r from-teal-600 to-emerald-800 rounded-2xl shadow-md text-white flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Teacher Portal</h1>
          <p className="mt-1 text-teal-100 font-medium">Welcome back, Dr. Shahin Rahman. You have 2 lectures today.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
         {/* Direct Action - Attendance */}
         <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
            <h3 className="font-bold text-gray-900 mb-6 flex items-center gap-2">
               <Users className="w-5 h-5 text-brand-primary-blue" /> Today's Classes (Attendance Pending)
            </h3>
            <div className="flex flex-col gap-4">
              {classes.map((cls, idx) => (
                <div key={idx} className="flex justify-between items-center p-4 rounded-xl border border-gray-200 hover:border-brand-primary-blue transition-colors">
                  <div>
                    <h4 className="font-bold text-gray-900">{cls.name}</h4>
                    <p className="text-xs text-gray-500 font-bold mt-1 uppercase">{cls.time} • {cls.room}</p>
                  </div>
                  <Link href="/teacher/attendance" className="px-4 py-2 bg-brand-primary-blue text-white rounded-lg text-sm font-bold shadow-sm hover:bg-brand-primary-blue/90 flex items-center gap-2">
                    Take Attendance <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              ))}
            </div>
         </div>

         {/* Grading & Exams */}
         <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
            <h3 className="font-bold text-gray-900 mb-6 flex items-center gap-2">
               <FileDiff className="w-5 h-5 text-orange-500" /> Pending Grading
            </h3>
            <div className="p-4 rounded-xl border-2 border-orange-100 bg-orange-50 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
               <div>
                  <h4 className="font-bold text-orange-900">Anatomy Prelim Quiz 1</h4>
                  <p className="text-sm font-medium text-orange-700 mt-1">42 submissions pending review.</p>
               </div>
               <button className="px-4 py-2 bg-orange-500 text-white font-bold rounded-lg shadow-sm text-sm whitespace-nowrap">Grade Now</button>
            </div>

            <div className="mt-8 border-t border-gray-100 pt-6">
               <button className="w-full py-4 border-2 border-dashed border-gray-300 rounded-xl font-bold text-gray-500 hover:text-brand-primary-blue hover:border-brand-primary-blue hover:bg-blue-50 transition-all flex flex-col items-center justify-center gap-2">
                 <TestTube className="w-6 h-6" />
                 Create New Quiz / Exam Module
               </button>
            </div>
         </div>
      </div>
    </div>
  );
}
