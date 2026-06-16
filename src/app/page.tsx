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
  CalendarCheck,
  ShieldCheck,
  Layers,
  Users,
} from 'lucide-react';
import Link from 'next/link';
import EligibilityTracker from '@/components/EligibilityTracker';
import DigitalItemCards from '@/components/DigitalItemCards';
import AcademicTranscript from '@/components/AcademicTranscript';
import {
  student,
  currentCourses,
  pendingCourses,
  phaseCompletion,
  type Course,
  type Tone,
} from '@/data/academics';

const toneStyles: Record<Tone, { pill: string; text: string }> = {
  good: { pill: 'bg-emerald-50 text-emerald-700 border-emerald-200', text: 'text-emerald-600' },
  warn: { pill: 'bg-amber-50 text-amber-700 border-amber-200', text: 'text-amber-600' },
  bad: { pill: 'bg-red-50 text-red-700 border-red-200', text: 'text-brand-accent-red' },
  info: { pill: 'bg-blue-50 text-blue-700 border-blue-200', text: 'text-brand-primary-blue' },
  neutral: { pill: 'bg-gray-100 text-gray-600 border-gray-200', text: 'text-gray-500' },
};

function CourseRows({ courses }: { courses: Course[] }) {
  return (
    <>
      {courses.map((course) => {
        const tone = toneStyles[course.tone];
        const others = course.faculty.length - 1;
        return (
          <tr key={course.code} className="hover:bg-gray-50/50 transition-colors align-top">
            {/* Course */}
            <td className="py-4 pr-4">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center text-gray-500 shrink-0 mt-0.5">
                  <BookOpen className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-sm font-bold text-gray-900">{course.name}</p>
                  <div className="flex flex-wrap items-center gap-1.5 mt-1">
                    <span className="text-[10px] font-bold text-gray-400 bg-gray-100 px-1.5 py-0.5 rounded">{course.code}</span>
                    <span className="text-[10px] font-semibold text-gray-400">{course.phase}</span>
                    <span className={`inline-flex items-center text-[10px] font-bold px-1.5 py-0.5 rounded border ${tone.pill}`}>
                      {course.statusLabel}
                    </span>
                  </div>
                  <p className="text-[11px] text-gray-400 mt-1">{course.statusNote}</p>
                </div>
              </div>
            </td>

            {/* Faculty Members */}
            <td className="py-4 pr-4">
              <Link
                href={`/academics/faculty/${course.code}`}
                className="group inline-flex flex-col"
              >
                <span className="text-sm font-medium text-gray-700 group-hover:text-brand-primary-blue transition-colors">
                  {course.faculty[0].name}
                </span>
                <span className="text-xs text-gray-400 group-hover:text-brand-primary-blue/80 inline-flex items-center gap-1 transition-colors">
                  <Users className="w-3 h-3" />
                  +{others} faculty · View
                  <ChevronRight className="w-3 h-3" />
                </span>
              </Link>
            </td>

            {/* Attendance */}
            <td className="py-4 text-center">
              <span className={`text-sm font-bold ${course.attendance < 75 ? 'text-brand-accent-red' : course.attendance < 80 ? 'text-amber-600' : 'text-brand-primary-green'}`}>
                {course.attendance}%
              </span>
            </td>

            {/* Action */}
            <td className="py-4 text-right">
              <Link
                href="/curriculum"
                className="inline-flex items-center gap-1 text-xs font-semibold text-brand-primary-blue bg-brand-primary-blue/5 hover:bg-brand-primary-blue/10 px-3 py-1.5 rounded-lg transition-colors"
              >
                Details <ChevronRight className="w-3.5 h-3.5" />
              </Link>
            </td>
          </tr>
        );
      })}
    </>
  );
}

export default function DashboardPage() {
  const completion = phaseCompletion();

  const notices = [
    { id: 1, title: 'Microbiology Item Card Makeup', type: 'Exam', date: 'Opens tomorrow, 09:00 AM', priority: 'high' },
    { id: 2, title: 'Tuition Fee Deadline', type: 'Finance', date: 'Due in 3 days', priority: 'high' },
    { id: 3, title: '3rd Professional Form Fill-up', type: 'Admin', date: 'Starts next Monday', priority: 'normal' },
  ];

  return (
    <div className="flex flex-col gap-6 w-full h-full pb-10">
      {/* 1. Welcome Banner */}
      <div className="bg-white rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center justify-between border border-gray-100 shadow-sm relative overflow-hidden">
        {/* Decorative background element */}
        <div className="absolute right-0 top-0 w-64 h-64 bg-gradient-to-tr from-transparent to-brand-primary-blue/5 rounded-full -mr-20 -mt-20 pointer-events-none" />

        <div className="flex flex-col gap-3 relative z-10">
          <h1 className="text-2xl md:text-3xl font-bold tracking-tight text-gray-900">
            Welcome back, {student.name} 👋
          </h1>
          <div className="flex flex-col gap-2">
            <p className="flex items-center gap-2 text-sm md:text-base font-semibold text-gray-700">
              <GraduationCap className="w-5 h-5 text-brand-primary-blue" />
              {student.year} · {student.phase}
              <span className="font-medium text-gray-400">— {student.phaseLabel}</span>
            </p>
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1 text-[11px] font-bold text-brand-primary-blue bg-brand-primary-blue/10 px-2.5 py-1 rounded-full">
                <CalendarCheck className="w-3 h-3" /> Session {student.session}
              </span>
              <span className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2.5 py-1 rounded-full">
                <ShieldCheck className="w-3 h-3" /> {student.enrollmentStatus} Student
              </span>
              <span className="text-[11px] font-semibold text-gray-400">{student.professionalExam}</span>
            </div>
          </div>
        </div>
        <div className="mt-4 md:mt-0 flex gap-3 relative z-10">
          <Link href="/schedule" className="px-4 py-2 bg-brand-primary-green/10 text-brand-primary-green font-semibold text-sm rounded-xl hover:bg-brand-primary-green/20 transition-colors">
            View Schedule
          </Link>
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
                <TrendingUp className="w-3 h-3 mr-1" /> Above 75%
              </span>
            </div>
          </div>
          <div className="relative w-16 h-16 flex items-center justify-center rounded-full bg-brand-primary-green/10 text-brand-primary-green ring-4 ring-brand-primary-green/5">
            <CalendarCheck className="w-8 h-8" />
          </div>
        </div>

        {/* Academic Status Widget (replaces CGPA) */}
        <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm flex items-center justify-between gap-4 group hover:shadow-md transition-shadow">
          <div className="flex-1">
            <p className="text-sm font-semibold text-gray-500 mb-1">Academic Status</p>
            <div className="flex items-baseline gap-2">
              <h2 className="text-3xl font-bold text-gray-900">{student.enrollmentStatus}</h2>
              <span className="text-xs font-bold text-emerald-600">Student</span>
            </div>
            <div className="mt-3">
              <div className="flex justify-between text-[11px] font-semibold mb-1">
                <span className="text-gray-500">{student.phase} Complete</span>
                <span className="text-brand-primary-blue">{completion}%</span>
              </div>
              <div className="w-full bg-gray-100 rounded-full h-2">
                <div
                  className="bg-gradient-to-r from-brand-primary-blue to-emerald-400 h-2 rounded-full transition-all"
                  style={{ width: `${completion}%` }}
                />
              </div>
            </div>
          </div>
          <div className="relative w-16 h-16 flex items-center justify-center rounded-full bg-emerald-50 text-emerald-600 ring-4 ring-emerald-100/60 shrink-0">
            <ShieldCheck className="w-8 h-8" />
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

          {/* 4. Registered Courses — Current + Pending */}
          <div className="bg-white rounded-2xl p-6 flex flex-col border border-gray-100 shadow-sm group hover:shadow-md transition-shadow">
            <div className="flex justify-between items-center mb-2">
              <h3 className="text-lg font-bold text-gray-900">Registered Courses</h3>
              <Link href="/academics" className="text-sm font-semibold text-brand-primary-blue hover:underline flex items-center gap-1">
                View all <ChevronRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Current Courses */}
            <div className="flex items-center gap-2 mt-4 mb-1">
              <Layers className="w-4 h-4 text-brand-primary-blue" />
              <h4 className="text-xs font-black text-gray-500 uppercase tracking-wider">Current — {student.phase} ({student.professionalExam})</h4>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="pb-3 text-sm font-semibold text-gray-500">Course Name</th>
                    <th className="pb-3 text-sm font-semibold text-gray-500">Faculty Members</th>
                    <th className="pb-3 text-sm font-semibold text-gray-500 text-center">Attendance</th>
                    <th className="pb-3 text-sm font-semibold text-gray-500 text-right">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  <CourseRows courses={currentCourses} />
                </tbody>
              </table>
            </div>

            {/* Pending / Carryover Courses */}
            {pendingCourses.length > 0 && (
              <>
                <div className="flex items-center gap-2 mt-6 mb-1">
                  <Clock className="w-4 h-4 text-amber-500" />
                  <h4 className="text-xs font-black text-gray-500 uppercase tracking-wider">Pending / Carryover — Previous Phase</h4>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse">
                    <tbody className="divide-y divide-gray-100">
                      <CourseRows courses={pendingCourses} />
                    </tbody>
                  </table>
                </div>
              </>
            )}
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

            <Link href="/notices" className="w-full mt-6 py-2.5 text-sm font-semibold text-gray-600 bg-gray-50 hover:bg-gray-100 rounded-xl transition-colors border border-gray-200 text-center">
              View all notices
            </Link>
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
        { term: '1st Term', subject: 'Community Medicine', percentage: 55 },
        { term: '2nd Term', subject: 'Pathology', percentage: 71 },
        { term: '2nd Term', subject: 'Microbiology', percentage: 66 },
      ]} />
    </div>
  );
}
