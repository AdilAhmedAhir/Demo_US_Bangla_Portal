import React from 'react';
import CompetencyTracker from '@/components/CompetencyTracker';
import {
  Microscope,
  ShieldAlert,
  Users,
  AlertTriangle,
  SlidersHorizontal,
  TrendingDown,
  UserCheck,
  Clock,
  FileWarning,
  BarChart3,
  CalendarCheck,
  GraduationCap,
} from 'lucide-react';

export default function HODPage() {
  const atRiskStudents = [
    { id: 'USB-2612', name: 'Rahima Akter',   attendance: 72, totalClasses: 50, attended: 36, shortfall: 2  },
    { id: 'USB-2618', name: 'Tanvir Hasan',   attendance: 68, totalClasses: 50, attended: 34, shortfall: 4  },
    { id: 'USB-2625', name: 'Nadia Islam',     attendance: 74, totalClasses: 50, attended: 37, shortfall: 1  },
    { id: 'USB-2631', name: 'Ariful Karim',    attendance: 70, totalClasses: 50, attended: 35, shortfall: 3  },
  ];

  const departmentStats = [
    { label: 'Total Students', value: '124', icon: Users, color: 'text-brand-primary-blue', bg: 'bg-blue-50 ring-blue-100' },
    { label: 'Below 75%', value: `${atRiskStudents.length}`, icon: AlertTriangle, color: 'text-[#ed1c24]', bg: 'bg-red-50 ring-red-100' },
    { label: 'Avg. Attendance', value: '81%', icon: CalendarCheck, color: 'text-emerald-600', bg: 'bg-emerald-50 ring-emerald-100' },
    { label: 'Pending Reviews', value: '7', icon: Clock, color: 'text-amber-600', bg: 'bg-amber-50 ring-amber-100' },
  ];

  const recentOverrides = [
    { studentId: 'USB-2605', name: 'Salma Khatun', date: 'Apr 18, 2026', from: '73%', to: '76%', reason: 'Medical Leave (Documented)' },
    { studentId: 'USB-2609', name: 'Imran Hossain', date: 'Apr 15, 2026', from: '71%', to: '75%', reason: 'Institutional Event Duty' },
  ];

  return (
    <div className="flex flex-col gap-6 w-full h-full pb-10">
      {/* Hero Banner */}
      <div className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 rounded-2xl p-8 md:p-10 relative overflow-hidden shadow-lg">
        {/* Decorative elements */}
        <div className="absolute right-0 top-0 w-80 h-80 bg-brand-primary-blue/10 rounded-full -mr-20 -mt-20 blur-3xl pointer-events-none" />
        <div className="absolute left-1/2 bottom-0 w-60 h-60 bg-emerald-500/5 rounded-full -mb-32 blur-2xl pointer-events-none" />
        <div className="absolute right-8 top-8 opacity-[0.04]">
          <Microscope className="w-32 h-32" strokeWidth={1} />
        </div>

        <div className="relative z-10">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-xl bg-brand-primary-blue/20 flex items-center justify-center">
              <Microscope className="w-5 h-5 text-brand-primary-blue" />
            </div>
            <span className="text-xs font-bold text-brand-primary-blue uppercase tracking-widest">
              Department Portal
            </span>
          </div>
          <h1 className="text-2xl md:text-3xl font-black text-white tracking-tight mb-2">
            Microbiology Department Command Center
          </h1>
          <p className="text-sm md:text-base font-medium text-gray-400">
            Prof. Ruksana Raihan — <span className="text-gray-300">Head of Department</span>
          </p>
        </div>
      </div>

      {/* Department Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {departmentStats.map((stat) => {
          const Icon = stat.icon;
          return (
            <div
              key={stat.label}
              className="bg-white rounded-xl p-5 border border-gray-100 shadow-sm flex items-center gap-4 hover:shadow-md transition-shadow"
            >
              <div className={`w-12 h-12 rounded-xl ${stat.bg} ring-2 flex items-center justify-center shrink-0`}>
                <Icon className={`w-5.5 h-5.5 ${stat.color}`} />
              </div>
              <div>
                <p className="text-2xl font-black text-gray-900 leading-none">{stat.value}</p>
                <p className="text-[11px] font-bold text-gray-400 uppercase tracking-wider mt-1">{stat.label}</p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Attendance Exceptions & Overrides — Core Feature */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        {/* Section Header */}
        <div className="px-6 py-5 border-b border-gray-100 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <h2 className="text-base font-bold text-gray-900 flex items-center gap-2">
              <ShieldAlert className="w-5 h-5 text-[#ed1c24]" />
              Attendance Exceptions & Overrides
            </h2>
            <p className="text-xs text-gray-500 font-medium mt-1">
              Students currently below the 75% eligibility threshold for term finals.
            </p>
          </div>
          <div className="flex items-center gap-2">
            <button className="px-3.5 py-2 text-xs font-bold rounded-lg border border-gray-200 text-gray-600 hover:bg-gray-50 transition-colors flex items-center gap-1.5">
              <FileWarning className="w-3.5 h-3.5" />
              Export Report
            </button>
            <button className="px-3.5 py-2 text-xs font-bold rounded-lg bg-brand-primary-blue text-white hover:bg-brand-primary-blue/90 transition-colors flex items-center gap-1.5 shadow-sm">
              <BarChart3 className="w-3.5 h-3.5" />
              Analytics
            </button>
          </div>
        </div>

        {/* At-Risk Alert Banner */}
        <div className="px-6 py-3 bg-red-50 border-b border-red-100 flex items-center gap-2.5">
          <AlertTriangle className="w-4 h-4 text-[#ed1c24] shrink-0" />
          <p className="text-xs font-semibold text-red-800">
            <strong className="font-black">{atRiskStudents.length} students</strong> are currently at risk of being ineligible for the
            upcoming 3rd Professional Exam. Review and take appropriate action.
          </p>
        </div>

        {/* Data Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-gray-50/70 border-b border-gray-100">
                <th className="px-6 py-3.5 text-[11px] font-bold text-gray-400 uppercase tracking-wider">Student ID</th>
                <th className="px-6 py-3.5 text-[11px] font-bold text-gray-400 uppercase tracking-wider">Name</th>
                <th className="px-6 py-3.5 text-[11px] font-bold text-gray-400 uppercase tracking-wider text-center">Attendance</th>
                <th className="px-6 py-3.5 text-[11px] font-bold text-gray-400 uppercase tracking-wider text-center">Classes</th>
                <th className="px-6 py-3.5 text-[11px] font-bold text-gray-400 uppercase tracking-wider text-center">Shortfall</th>
                <th className="px-6 py-3.5 text-[11px] font-bold text-gray-400 uppercase tracking-wider text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {atRiskStudents.map((student, idx) => {
                const isEven = idx % 2 === 1;
                const severityColor = student.attendance < 70
                  ? 'bg-red-100 text-[#ed1c24] border-red-200'
                  : 'bg-amber-100 text-amber-700 border-amber-200';

                return (
                  <tr
                    key={student.id}
                    className={`hover:bg-slate-100/60 transition-colors ${isEven ? 'bg-slate-50' : 'bg-white'}`}
                  >
                    {/* Student ID */}
                    <td className="px-6 py-4">
                      <span className="text-xs font-black text-gray-500 bg-gray-100 px-2.5 py-1 rounded-md tracking-wide">
                        {student.id}
                      </span>
                    </td>

                    {/* Name */}
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-xs font-black text-gray-500">
                          {student.name.split(' ').map(n => n[0]).join('')}
                        </div>
                        <span className="text-sm font-bold text-gray-900">{student.name}</span>
                      </div>
                    </td>

                    {/* Current Attendance - Highlighted in Red */}
                    <td className="px-6 py-4 text-center">
                      <span className="text-lg font-black text-[#ed1c24]">
                        {student.attendance}%
                      </span>
                    </td>

                    {/* Classes Breakdown */}
                    <td className="px-6 py-4 text-center">
                      <span className="text-sm font-semibold text-gray-500">
                        {student.attended}/{student.totalClasses}
                      </span>
                    </td>

                    {/* Shortfall */}
                    <td className="px-6 py-4 text-center">
                      <span className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-bold border ${severityColor}`}>
                        <TrendingDown className="w-3 h-3" />
                        -{student.shortfall} classes
                      </span>
                    </td>

                    {/* Action Button */}
                    <td className="px-6 py-4 text-right">
                      <button className="
                        inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg
                        text-xs font-bold
                        border border-gray-300 text-gray-600
                        hover:border-brand-primary-blue hover:text-brand-primary-blue hover:bg-blue-50
                        active:scale-95
                        transition-all
                      ">
                        <SlidersHorizontal className="w-3.5 h-3.5" />
                        Adjust Record
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        {/* Table Footer */}
        <div className="px-6 py-3.5 bg-gray-50/50 border-t border-gray-100 flex items-center justify-between">
          <p className="text-xs font-bold text-gray-400">
            Showing {atRiskStudents.length} of {atRiskStudents.length} at-risk students
          </p>
          <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">
            Threshold: 75% minimum required
          </p>
        </div>
      </div>

      {/* Recent Override History */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="px-6 py-5 border-b border-gray-100">
          <h2 className="text-base font-bold text-gray-900 flex items-center gap-2">
            <UserCheck className="w-5 h-5 text-emerald-600" />
            Recent Override History
          </h2>
          <p className="text-xs text-gray-500 font-medium mt-1">
            Attendance adjustments made by the HOD this semester.
          </p>
        </div>

        <div className="divide-y divide-gray-100">
          {recentOverrides.map((override, idx) => (
            <div
              key={override.studentId + override.date}
              className={`px-6 py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 ${idx % 2 === 1 ? 'bg-slate-50' : 'bg-white'} hover:bg-slate-100/60 transition-colors`}
            >
              <div className="flex items-center gap-4">
                <div className="w-9 h-9 rounded-lg bg-emerald-50 border border-emerald-200 flex items-center justify-center shrink-0">
                  <UserCheck className="w-4.5 h-4.5 text-emerald-600" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h4 className="text-sm font-bold text-gray-900">{override.name}</h4>
                    <span className="text-[10px] font-bold text-gray-400 bg-gray-100 px-2 py-0.5 rounded-md">
                      {override.studentId}
                    </span>
                  </div>
                  <p className="text-[11px] text-gray-400 font-medium mt-0.5">
                    {override.reason} • {override.date}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2 pl-13 sm:pl-0">
                <span className="text-xs font-bold text-[#ed1c24] bg-red-50 border border-red-200 px-2 py-1 rounded-md">
                  {override.from}
                </span>
                <span className="text-xs font-bold text-gray-400">→</span>
                <span className="text-xs font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-1 rounded-md">
                  {override.to}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Competency Tracker */}
      <CompetencyTracker />

      {/* Quick Actions Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <button className="bg-white rounded-xl p-5 border border-gray-100 shadow-sm hover:shadow-md hover:border-brand-primary-blue/30 transition-all group text-left">
          <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center mb-3 group-hover:bg-brand-primary-blue/10 transition-colors">
            <GraduationCap className="w-5 h-5 text-brand-primary-blue" />
          </div>
          <h4 className="text-sm font-bold text-gray-900">Item Card Reviews</h4>
          <p className="text-xs text-gray-500 font-medium mt-1">Review and approve makeup exam requests from students.</p>
        </button>

        <button className="bg-white rounded-xl p-5 border border-gray-100 shadow-sm hover:shadow-md hover:border-emerald-300 transition-all group text-left">
          <div className="w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center mb-3 group-hover:bg-emerald-100 transition-colors">
            <BarChart3 className="w-5 h-5 text-emerald-600" />
          </div>
          <h4 className="text-sm font-bold text-gray-900">Department Analytics</h4>
          <p className="text-xs text-gray-500 font-medium mt-1">View detailed performance metrics and attendance trends.</p>
        </button>

        <button className="bg-white rounded-xl p-5 border border-gray-100 shadow-sm hover:shadow-md hover:border-amber-300 transition-all group text-left">
          <div className="w-10 h-10 rounded-xl bg-amber-50 flex items-center justify-center mb-3 group-hover:bg-amber-100 transition-colors">
            <FileWarning className="w-5 h-5 text-amber-600" />
          </div>
          <h4 className="text-sm font-bold text-gray-900">Generate HOD Report</h4>
          <p className="text-xs text-gray-500 font-medium mt-1">Export attendance and academic reports for the Dean&apos;s office.</p>
        </button>
      </div>
    </div>
  );
}
