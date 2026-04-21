import React from 'react';
import { 
  GraduationCap, 
  AlertCircle, 
  Building,
  UtensilsCrossed,
  BookOpen,
  ChevronRight,
  Bell,
  Clock,
  TrendingUp,
  CalendarCheck
} from 'lucide-react';
import Link from 'next/link';
import EligibilityTracker from '@/components/EligibilityTracker';
import DigitalItemCards from '@/components/DigitalItemCards';
import AcademicTranscript from '@/components/AcademicTranscript';

export default function DashboardPage() {
  const student = {
    name: "Adil Student",
    term: "Term 4 - MBBS",
    attendance: 85,
    cgpa: "3.85",
    currentBalance: 45000,
  };

  const courses = [
    { id: 'MBB-401', name: 'General Anatomy', professor: 'Dr. Shahin Rahman', attendance: 88, status: 'Active' },
    { id: 'MBB-402', name: 'Clinical Physiology', professor: 'Dr. Nusrat Jahan', attendance: 92, status: 'Active' },
    { id: 'MBB-403', name: 'Biochemistry II', professor: 'Dr. Anisur Miah', attendance: 78, status: 'Warning' },
  ];

  const notices = [
    { id: 1, title: 'Anatomy Prelim Quiz', type: 'Exam', date: 'Opens tomorrow, 09:00 AM', priority: 'high' },
    { id: 2, title: 'Tuition Fee Deadline', type: 'Finance', date: 'Due in 3 days', priority: 'high' },
    { id: 3, title: 'Library Renovation', type: 'Admin', date: 'Starts next Monday', priority: 'normal' },
  ];

  return (
    <div className="flex flex-col gap-6 w-full h-full pb-10">
      {/* 1. Welcome Banner */}
      <div className="bg-white rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center justify-between border border-gray-100 shadow-sm relative overflow-hidden">
        {/* Decorative background element */}
        <div className="absolute right-0 top-0 w-64 h-64 bg-gradient-to-tr from-transparent to-brand-primary-blue/5 rounded-full -mr-20 -mt-20 pointer-events-none" />
        
        <div className="flex flex-col gap-2 relative z-10">
          <h1 className="text-2xl md:text-3xl font-bold tracking-tight text-gray-900">
            Welcome back, {student.name} 👋
          </h1>
          <p className="flex items-center gap-2 text-sm md:text-base font-medium text-gray-500">
            <GraduationCap className="w-5 h-5 text-brand-primary-blue" />
            {student.term}
          </p>
        </div>
        <div className="mt-4 md:mt-0 flex gap-3 relative z-10">
          <button className="px-4 py-2 bg-brand-primary-green/10 text-brand-primary-green font-semibold text-sm rounded-xl hover:bg-brand-primary-green/20 transition-colors">
            View Schedule
          </button>
        </div>
      </div>

      {/* 2. Top Metrics */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Attendance Widget */}
        <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm flex items-center justify-between group hover:shadow-md transition-shadow">
          <div>
            <p className="text-sm font-semibold text-gray-500 mb-1">Overall Attendance</p>
            <div className="flex items-baseline gap-2">
              <h2 className="text-3xl font-bold text-gray-900">{student.attendance}%</h2>
              <span className="text-xs font-medium text-brand-primary-green flex items-center">
                <TrendingUp className="w-3 h-3 mr-1" /> On track
              </span>
            </div>
          </div>
          <div className="relative w-16 h-16 flex items-center justify-center rounded-full bg-brand-primary-green/10 text-brand-primary-green ring-4 ring-brand-primary-green/5">
            <CalendarCheck className="w-8 h-8" />
          </div>
        </div>

        {/* CGPA Widget */}
        <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm flex items-center justify-between group hover:shadow-md transition-shadow">
          <div>
            <p className="text-sm font-semibold text-gray-500 mb-1">Current CGPA</p>
            <div className="flex items-baseline gap-2">
              <h2 className="text-3xl font-bold text-gray-900">{student.cgpa}</h2>
              <span className="text-xs font-medium text-brand-primary-blue">Top 15%</span>
            </div>
          </div>
          <div className="relative w-16 h-16 flex items-center justify-center rounded-full bg-brand-primary-blue/10 text-brand-primary-blue ring-4 ring-brand-primary-blue/5">
            <GraduationCap className="w-8 h-8" />
          </div>
        </div>

        {/* Finance Alert Widget */}
        <div className="bg-gradient-to-br from-white to-brand-accent-red/5 rounded-2xl p-6 border border-brand-accent-red/20 shadow-sm flex items-center justify-between group hover:shadow-md transition-shadow relative overflow-hidden">
          <div className="absolute top-0 right-0 p-3">
             <AlertCircle className="w-5 h-5 text-brand-accent-red animate-pulse" />
          </div>
          <div>
            <p className="text-sm font-bold text-brand-accent-red mb-1">Current Balance</p>
            <div className="flex items-baseline gap-2">
              <h2 className="text-3xl font-bold text-gray-900 flex items-center">
                ৳{student.currentBalance.toLocaleString()}
              </h2>
            </div>
            <p className="text-xs font-semibold text-brand-accent-red mt-1 flex items-center">
              Due: Last Friday
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 flex flex-col gap-6">
          
          {/* 3. Hostel & Mess Status */}
          <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm group hover:shadow-md transition-shadow">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-lg font-bold text-gray-900">Hostel & Mess Status</h3>
              <Link href="/hostel" className="text-sm font-semibold text-brand-primary-blue hover:underline">
                Manage
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex p-4 rounded-xl border border-gray-100 bg-gray-50/50 items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center">
                    <Building className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-medium text-gray-500">Room Status</p>
                    <p className="text-sm font-bold text-gray-900">Block B - Room 204</p>
                  </div>
                </div>
              </div>
              <div className="flex p-4 rounded-xl border border-gray-100 bg-gray-50/50 items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center">
                    <UtensilsCrossed className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-medium text-gray-500">Meal Plan</p>
                    <p className="text-sm font-bold text-gray-900">Standard (Active)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 4. Registered Courses List */}
          <div className="bg-white rounded-2xl p-6 flex flex-col border border-gray-100 shadow-sm group hover:shadow-md transition-shadow">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-lg font-bold text-gray-900">Registered Courses</h3>
              <Link href="/academics" className="text-sm font-semibold text-brand-primary-blue hover:underline flex items-center gap-1">
                View all <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="pb-3 text-sm font-semibold text-gray-500">Course Name</th>
                    <th className="pb-3 text-sm font-semibold text-gray-500">Lead Professor</th>
                    <th className="pb-3 text-sm font-semibold text-gray-500 text-center">Attendance</th>
                    <th className="pb-3 text-sm font-semibold text-gray-500 text-right">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {courses.map((course) => (
                    <tr key={course.id} className="hover:bg-gray-50/50 transition-colors">
                      <td className="py-4">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center text-gray-500">
                            <BookOpen className="w-4 h-4" />
                          </div>
                          <div>
                            <p className="text-sm font-bold text-gray-900">{course.name}</p>
                            <p className="text-xs text-gray-500">{course.id}</p>
                          </div>
                        </div>
                      </td>
                      <td className="py-4">
                        <p className="text-sm font-medium text-gray-700">{course.professor}</p>
                      </td>
                      <td className="py-4 text-center">
                        <div className="inline-flex items-center gap-2">
                          <span className={`text-sm font-bold ${course.attendance < 80 ? 'text-brand-accent-red' : 'text-brand-primary-green'}`}>
                            {course.attendance}%
                          </span>
                        </div>
                      </td>
                      <td className="py-4 text-right">
                        <button className="text-xs font-semibold text-brand-primary-blue bg-brand-primary-blue/5 hover:bg-brand-primary-blue/10 px-3 py-1.5 rounded-lg transition-colors">
                          Details
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* 5. Notice Board / Quizzes */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm h-full group hover:shadow-md transition-shadow flex flex-col">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-lg font-bold text-gray-900 flex items-center gap-2">
                <Bell className="w-5 h-5 text-brand-primary-blue" />
                Notice Board
              </h3>
            </div>
            
            <div className="flex-1 flex flex-col gap-4">
              {notices.map((notice) => (
                <div 
                  key={notice.id} 
                  className={`
                    p-4 rounded-xl border relative overflow-hidden transition-colors hover:shadow-sm
                    ${notice.priority === 'high' 
                      ? 'bg-red-50/50 border-red-100' 
                      : 'bg-gray-50/50 border-gray-100'}
                  `}
                >
                  {notice.priority === 'high' && (
                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-brand-accent-red"></div>
                  )}
                  
                  <div className="flex justify-between items-start mb-2">
                    <span className={`
                      text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md
                      ${notice.type === 'Exam' ? 'bg-purple-100 text-purple-700' : 
                        notice.type === 'Finance' ? 'bg-red-100 text-red-700' : 
                        'bg-blue-100 text-blue-700'}
                    `}>
                      {notice.type}
                    </span>
                  </div>
                  
                  <h4 className="text-sm font-bold text-gray-900 mb-1">{notice.title}</h4>
                  <p className="text-xs font-medium text-gray-500 flex items-center gap-1.5 mt-2">
                    <Clock className="w-3.5 h-3.5" />
                    {notice.date}
                  </p>
                </div>
              ))}
            </div>
            
            <button className="w-full mt-6 py-2.5 text-sm font-semibold text-gray-600 bg-gray-50 hover:bg-gray-100 rounded-xl transition-colors border border-gray-200">
              View all notices
            </button>
          </div>
        </div>

      </div>

      {/* 6. Eligibility Tracker */}
      <EligibilityTracker termExamScore={3.5} attendancePercent={82} attendanceScore={2.0} />

      {/* 7. Microbiology Digital Item Cards */}
      <DigitalItemCards />

      {/* 8. Academic Transcript */}
      <AcademicTranscript cgpa={4.50} results={[
        { term: '1st Term', subject: 'Microbiology', percentage: 78 },
        { term: '1st Term', subject: 'Pathology', percentage: 62 },
        { term: '1st Term', subject: 'Pharmacology', percentage: 85 },
        { term: '1st Term', subject: 'Community Medicine', percentage: 55 },
        { term: '1st Term', subject: 'Forensic Medicine', percentage: 71 },
      ]} />
    </div>
  );
}
