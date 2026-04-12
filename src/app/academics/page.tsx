import React from 'react';
import { BookOpen, FileText, CheckCircle2, Clock, PlayCircle } from 'lucide-react';

export default function AcademicsPage() {
  const currentCourses = [
    { id: 'MBB-401', name: 'General Anatomy', instructor: 'Dr. Shahin Rahman', credits: 4, progress: 65 },
    { id: 'MBB-402', name: 'Clinical Physiology', instructor: 'Dr. Nusrat Jahan', credits: 4, progress: 40 },
    { id: 'MBB-403', name: 'Biochemistry II', instructor: 'Dr. Anisur Miah', credits: 3, progress: 85 },
    { id: 'MBB-404', name: 'Community Medicine', instructor: 'Dr. Kamal Hossain', credits: 3, progress: 20 },
  ];

  return (
    <div className="flex flex-col gap-6 w-full pb-10">
      <div className="mb-2">
        <h1 className="text-2xl md:text-3xl font-bold tracking-tight text-gray-900">Academics</h1>
        <p className="mt-2 text-sm md:text-base text-gray-500">Manage your coursework, syllabus, and academic progress.</p>
      </div>

      {/* Progress Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm flex flex-col gap-2">
          <p className="text-sm font-semibold text-gray-500">Term Progress</p>
          <div className="flex items-baseline gap-2">
            <h2 className="text-3xl font-bold text-gray-900">Week 6</h2>
            <span className="text-sm font-medium text-gray-500">/ 14</span>
          </div>
          <div className="w-full bg-gray-100 rounded-full h-2.5 mt-2">
            <div className="bg-brand-primary-blue h-2.5 rounded-full" style={{ width: '42%' }}></div>
          </div>
        </div>
        <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm flex flex-col gap-2">
           <p className="text-sm font-semibold text-gray-500">Completed Credits</p>
           <h2 className="text-3xl font-bold text-gray-900">86 <span className="text-sm font-normal text-gray-500">cr</span></h2>
        </div>
        <div className="bg-brand-primary-green/5 rounded-2xl p-6 border border-brand-primary-green/20 shadow-sm flex items-center justify-between">
           <div>
             <p className="text-sm font-bold text-brand-primary-green mb-1">Academic Status</p>
             <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2">
               <CheckCircle2 className="w-5 h-5 text-brand-primary-green" /> Good Standing
             </h2>
           </div>
        </div>
      </div>

      {/* Course List */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm mt-4 overflow-hidden">
        <div className="px-6 py-5 border-b border-gray-100 flex justify-between items-center bg-gray-50/50">
          <h3 className="text-lg font-bold text-gray-900">Current Semester Courses</h3>
          <button className="text-sm font-semibold text-brand-primary-blue hover:underline">Download Transcript</button>
        </div>
        <div className="divide-y divide-gray-100">
          {currentCourses.map((course) => (
            <div key={course.id} className="p-6 flex flex-col md:flex-row md:items-center justify-between gap-6 hover:bg-gray-50/30 transition-colors">
              <div className="flex items-start gap-4 flex-1">
                <div className="w-12 h-12 rounded-xl bg-gray-100 flex items-center justify-center text-gray-500 shrink-0">
                  <BookOpen className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-gray-900 mb-1">{course.name}</h4>
                  <div className="flex flex-wrap items-center gap-3 text-xs font-medium text-gray-500">
                    <span className="bg-gray-100 px-2.5 py-0.5 rounded-full">{course.id}</span>
                    <span className="flex items-center gap-1.5"><FileText className="w-3.5 h-3.5" /> {course.credits} Credits</span>
                    <span className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5" /> {course.instructor}</span>
                  </div>
                </div>
              </div>
              <div className="flex flex-col md:items-end gap-3 w-full md:w-64">
                <div className="flex justify-between w-full text-xs font-semibold">
                  <span className="text-gray-500">Syllabus Progress</span>
                  <span className="text-brand-primary-blue">{course.progress}%</span>
                </div>
                <div className="w-full bg-gray-100 rounded-full h-2">
                  <div className="bg-gradient-to-r from-brand-primary-blue to-teal-400 h-2 rounded-full" style={{ width: `${course.progress}%` }}></div>
                </div>
                <div className="flex gap-2 w-full mt-2">
                  <button className="flex-1 py-2 text-xs font-semibold text-gray-600 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors flex items-center justify-center gap-1.5">
                    <FileText className="w-3 h-3" /> Material
                  </button>
                  <button className="flex-1 py-2 text-xs font-semibold text-white bg-brand-primary-blue rounded-lg hover:bg-brand-primary-blue/90 transition-colors shadow-sm flex items-center justify-center gap-1.5">
                    <PlayCircle className="w-3 h-3" /> Continue
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
