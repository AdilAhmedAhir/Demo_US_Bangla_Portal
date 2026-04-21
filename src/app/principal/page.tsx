'use client';

import React from 'react';
import {
  GraduationCap,
  Users,
  TrendingUp,
  Banknote,
  Award,
  AlertTriangle,
  ArrowUpRight,
  ArrowDownRight,
  BarChart3,
  BookOpenCheck,
  Building2,
  CalendarDays,
  ChevronRight,
  ClipboardCheck,
  Eye,
  Microscope,
  PieChart,
  ShieldCheck,
  Stethoscope,
  Trophy,
} from 'lucide-react';

/* ── Stat cards ─── */
const kpiCards = [
  { label: 'Total Enrollment',  value: '2,847',  change: '+12%', trend: 'up',   icon: GraduationCap, color: 'bg-brand-primary-blue',  bg: 'bg-blue-50',  ring: 'ring-blue-100',  text: 'text-brand-primary-blue' },
  { label: 'Faculty & Staff',   value: '184',    change: '+3',   trend: 'up',   icon: Users,          color: 'bg-emerald-600',         bg: 'bg-emerald-50', ring: 'ring-emerald-100', text: 'text-emerald-600' },
  { label: 'Pass Rate (2025)',   value: '94.2%',  change: '+2.1%',trend: 'up',   icon: Award,          color: 'bg-amber-500',           bg: 'bg-amber-50',  ring: 'ring-amber-100', text: 'text-amber-600' },
  { label: 'Revenue (Monthly)',  value: '৳3.4Cr', change: '-1.8%',trend: 'down', icon: Banknote,       color: 'bg-violet-600',          bg: 'bg-violet-50', ring: 'ring-violet-100', text: 'text-violet-600' },
];

/* ── Department data ─── */
const departments = [
  { name: 'Anatomy',          head: 'Dr. Samira Begum',    faculty: 14, students: 480, passRate: 96.1 },
  { name: 'Physiology',       head: 'Dr. Amin Chowdhury',  faculty: 11, students: 480, passRate: 93.4 },
  { name: 'Biochemistry',     head: 'Dr. Farzana Noor',    faculty: 9,  students: 480, passRate: 91.7 },
  { name: 'Microbiology',     head: 'Prof. Kamal Uddin',   faculty: 12, students: 320, passRate: 94.8 },
  { name: 'Pharmacology',     head: 'Dr. Nazmul Haque',    faculty: 10, students: 320, passRate: 89.3 },
  { name: 'Pathology',        head: 'Dr. Rehana Sultana',  faculty: 13, students: 320, passRate: 92.5 },
  { name: 'Community Medicine', head: 'Dr. Rafiq Islam',   faculty: 8,  students: 480, passRate: 97.2 },
];

/* ── Recent actions ─── */
const recentActions = [
  { action: 'Exam results published for Phase I (Batch 16)',  by: 'Exam Controller',  time: '2h ago',  icon: ClipboardCheck, color: 'text-emerald-600', bg: 'bg-emerald-50' },
  { action: 'New faculty onboarded — Dept. of Surgery',       by: 'HR Admin',         time: '5h ago',  icon: Users,          color: 'text-brand-primary-blue', bg: 'bg-blue-50' },
  { action: 'Fee collection report generated for April',      by: 'Finance Office',   time: '1d ago',  icon: Banknote,       color: 'text-violet-600', bg: 'bg-violet-50' },
  { action: '14 students flagged for attendance shortage',     by: 'System Auto',      time: '1d ago',  icon: AlertTriangle,  color: 'text-amber-600',  bg: 'bg-amber-50' },
  { action: 'Library catalog updated — 45 new e-books',       by: 'Librarian',        time: '2d ago',  icon: BookOpenCheck,  color: 'text-teal-600',   bg: 'bg-teal-50' },
];

/* ── Alerts ─── */
const criticalAlerts = [
  { title: '23 students below 75% attendance',  severity: 'high',   action: 'Review List' },
  { title: 'Fee collection at 68% for April',   severity: 'medium', action: 'View Report' },
  { title: 'Phase II exam schedule pending approval', severity: 'low', action: 'Approve' },
];

export default function PrincipalDashboard() {
  return (
    <div className="flex flex-col gap-6 w-full h-full pb-10">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
        <div>
          <div className="flex items-center gap-2.5 mb-1">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-brand-primary-blue to-blue-700 flex items-center justify-center shadow-md">
              <Stethoscope className="w-5 h-5 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-black text-gray-900 tracking-tight">Principal&apos;s Dashboard</h1>
              <p className="text-xs font-medium text-gray-400">
                US Bangla Medical College — Academic Year 2025-26
              </p>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button className="px-4 py-2.5 text-xs font-bold rounded-lg border border-gray-200 text-gray-600 hover:bg-gray-50 transition-all flex items-center gap-2">
            <BarChart3 className="w-3.5 h-3.5" />
            Export Report
          </button>
          <button className="px-5 py-2.5 text-xs font-bold rounded-lg bg-brand-primary-blue text-white hover:bg-brand-primary-blue/90 transition-all flex items-center gap-2 shadow-sm active:scale-95">
            <Eye className="w-3.5 h-3.5" />
            View Audit Trail
          </button>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {kpiCards.map((kpi) => {
          const Icon = kpi.icon;
          const isUp = kpi.trend === 'up';
          return (
            <div
              key={kpi.label}
              className="bg-white rounded-xl p-5 border border-gray-100 shadow-sm hover:shadow-md transition-all group"
            >
              <div className="flex items-start justify-between mb-3">
                <div className={`w-11 h-11 rounded-xl ${kpi.bg} ring-2 ${kpi.ring} flex items-center justify-center`}>
                  <Icon className={`w-5 h-5 ${kpi.text}`} />
                </div>
                <span className={`inline-flex items-center gap-0.5 text-[11px] font-bold px-2 py-0.5 rounded-full ${
                  isUp ? 'bg-emerald-50 text-emerald-700' : 'bg-red-50 text-[#ed1c24]'
                }`}>
                  {isUp ? <ArrowUpRight className="w-3 h-3" /> : <ArrowDownRight className="w-3 h-3" />}
                  {kpi.change}
                </span>
              </div>
              <p className="text-2xl font-black text-gray-900 leading-none">{kpi.value}</p>
              <p className="text-[11px] font-bold text-gray-400 uppercase tracking-wider mt-1">{kpi.label}</p>
            </div>
          );
        })}
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Department Performance — 2 cols */}
        <div className="lg:col-span-2 bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="px-6 py-5 border-b border-gray-100 flex items-center justify-between">
            <div>
              <h2 className="text-base font-bold text-gray-900 flex items-center gap-2">
                <Microscope className="w-5 h-5 text-brand-primary-blue" />
                Department Performance
              </h2>
              <p className="text-xs text-gray-500 font-medium mt-0.5">Academic year 2025-26 pass rates & faculty allocation</p>
            </div>
            <button className="text-xs font-bold text-brand-primary-blue hover:text-brand-primary-blue/80 flex items-center gap-1 transition-colors">
              View All <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-gray-50/70 border-b border-gray-100">
                  <th className="px-6 py-3 text-[11px] font-bold text-gray-400 uppercase tracking-wider">Department</th>
                  <th className="px-6 py-3 text-[11px] font-bold text-gray-400 uppercase tracking-wider">Head</th>
                  <th className="px-6 py-3 text-[11px] font-bold text-gray-400 uppercase tracking-wider text-center">Faculty</th>
                  <th className="px-6 py-3 text-[11px] font-bold text-gray-400 uppercase tracking-wider text-center">Students</th>
                  <th className="px-6 py-3 text-[11px] font-bold text-gray-400 uppercase tracking-wider">Pass Rate</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {departments.map((dept, idx) => (
                  <tr key={dept.name} className={`hover:bg-slate-50 transition-colors ${idx % 2 === 1 ? 'bg-slate-50/50' : ''}`}>
                    <td className="px-6 py-3.5">
                      <span className="text-sm font-bold text-gray-900">{dept.name}</span>
                    </td>
                    <td className="px-6 py-3.5">
                      <span className="text-xs font-semibold text-gray-500">{dept.head}</span>
                    </td>
                    <td className="px-6 py-3.5 text-center">
                      <span className="text-sm font-bold text-gray-700">{dept.faculty}</span>
                    </td>
                    <td className="px-6 py-3.5 text-center">
                      <span className="text-sm font-bold text-gray-700">{dept.students}</span>
                    </td>
                    <td className="px-6 py-3.5">
                      <div className="flex items-center gap-2.5">
                        <div className="flex-1 h-2 bg-gray-100 rounded-full overflow-hidden max-w-[100px]">
                          <div
                            className={`h-full rounded-full ${dept.passRate >= 95 ? 'bg-emerald-500' : dept.passRate >= 90 ? 'bg-brand-primary-blue' : 'bg-amber-500'}`}
                            style={{ width: `${dept.passRate}%` }}
                          />
                        </div>
                        <span className={`text-xs font-black ${dept.passRate >= 95 ? 'text-emerald-600' : dept.passRate >= 90 ? 'text-brand-primary-blue' : 'text-amber-600'}`}>
                          {dept.passRate}%
                        </span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Critical Alerts — 1 col */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden flex flex-col">
          <div className="px-6 py-5 border-b border-gray-100">
            <h2 className="text-base font-bold text-gray-900 flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-amber-500" />
              Alerts & Actions
            </h2>
            <p className="text-xs text-gray-500 font-medium mt-0.5">Items requiring your attention</p>
          </div>
          <div className="flex-1 p-4 space-y-3">
            {criticalAlerts.map((alert, idx) => (
              <div
                key={idx}
                className={`p-4 rounded-xl border flex items-start justify-between gap-3 ${
                  alert.severity === 'high'   ? 'bg-red-50 border-red-200' :
                  alert.severity === 'medium' ? 'bg-amber-50 border-amber-200' :
                                                'bg-blue-50 border-blue-200'
                }`}
              >
                <div className="flex items-start gap-2.5">
                  <div className={`w-2 h-2 rounded-full mt-1.5 shrink-0 ${
                    alert.severity === 'high' ? 'bg-[#ed1c24]' :
                    alert.severity === 'medium' ? 'bg-amber-500' : 'bg-brand-primary-blue'
                  }`} />
                  <p className="text-xs font-bold text-gray-800">{alert.title}</p>
                </div>
                <button className={`text-[10px] font-bold px-2.5 py-1.5 rounded-lg whitespace-nowrap transition-all active:scale-95 ${
                  alert.severity === 'high'   ? 'bg-[#ed1c24] text-white hover:bg-red-700' :
                  alert.severity === 'medium' ? 'bg-amber-500 text-white hover:bg-amber-600' :
                                                'bg-brand-primary-blue text-white hover:bg-brand-primary-blue/90'
                }`}>
                  {alert.action}
                </button>
              </div>
            ))}
          </div>

          {/* Quick Stats inside alert card */}
          <div className="px-6 py-4 border-t border-gray-100 bg-gray-50/50">
            <div className="grid grid-cols-2 gap-3">
              <div className="text-center">
                <p className="text-lg font-black text-gray-900">7</p>
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Departments</p>
              </div>
              <div className="text-center">
                <p className="text-lg font-black text-gray-900">16</p>
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Active Batches</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enrollment Overview + Recent Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Enrollment by Phase */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="px-6 py-5 border-b border-gray-100">
            <h2 className="text-base font-bold text-gray-900 flex items-center gap-2">
              <PieChart className="w-5 h-5 text-violet-600" />
              Enrollment by Phase
            </h2>
          </div>
          <div className="p-6 space-y-4">
            {[
              { phase: 'Phase I (Pre-Clinical)',  count: 960,  total: 2847, color: 'bg-brand-primary-blue' },
              { phase: 'Phase II (Para-Clinical)', count: 640,  total: 2847, color: 'bg-emerald-500' },
              { phase: 'Phase III (Clinical)',     count: 800,  total: 2847, color: 'bg-amber-500' },
              { phase: 'Internship',               count: 447,  total: 2847, color: 'bg-violet-500' },
            ].map((item) => (
              <div key={item.phase}>
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-xs font-bold text-gray-700">{item.phase}</span>
                  <span className="text-xs font-black text-gray-900">{item.count}</span>
                </div>
                <div className="h-2.5 bg-gray-100 rounded-full overflow-hidden">
                  <div
                    className={`h-full rounded-full ${item.color} transition-all`}
                    style={{ width: `${(item.count / item.total) * 100}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
          <div className="px-6 py-3.5 border-t border-gray-100 bg-gray-50/50 text-center">
            <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Total: 2,847 Students</span>
          </div>
        </div>

        {/* Recent Activity — 2 cols */}
        <div className="lg:col-span-2 bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="px-6 py-5 border-b border-gray-100 flex items-center justify-between">
            <div>
              <h2 className="text-base font-bold text-gray-900 flex items-center gap-2">
                <CalendarDays className="w-5 h-5 text-brand-primary-green" />
                Recent Institutional Activity
              </h2>
              <p className="text-xs text-gray-500 font-medium mt-0.5">Latest actions across departments</p>
            </div>
          </div>
          <div className="divide-y divide-gray-50">
            {recentActions.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={idx} className="px-6 py-4 flex items-center gap-4 hover:bg-slate-50 transition-colors">
                  <div className={`w-10 h-10 rounded-xl ${item.bg} flex items-center justify-center shrink-0`}>
                    <Icon className={`w-4.5 h-4.5 ${item.color}`} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-bold text-gray-900 truncate">{item.action}</p>
                    <p className="text-[11px] font-medium text-gray-400">{item.by}</p>
                  </div>
                  <span className="text-[11px] font-semibold text-gray-400 whitespace-nowrap">{item.time}</span>
                </div>
              );
            })}
          </div>
          <div className="px-6 py-3.5 border-t border-gray-100 bg-gray-50/50 flex items-center justify-between">
            <span className="text-xs font-bold text-gray-400">Showing latest 5 activities</span>
            <button className="text-xs font-bold text-brand-primary-blue hover:text-brand-primary-blue/80 flex items-center gap-1 transition-colors">
              View Full Log <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>

      {/* Accreditation Banner */}
      <div className="bg-gradient-to-r from-brand-primary-blue to-blue-700 rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-lg">
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
            <Trophy className="w-7 h-7 text-white" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-white">BMDC Accreditation Status: Active</h3>
            <p className="text-sm font-medium text-white/70">Next review scheduled for December 2026 — all compliance metrics on track.</p>
          </div>
        </div>
        <button className="px-5 py-2.5 bg-white text-brand-primary-blue text-sm font-bold rounded-xl hover:bg-white/90 transition-all active:scale-95 shadow-sm flex items-center gap-2">
          <ShieldCheck className="w-4 h-4" />
          View Compliance
        </button>
      </div>
    </div>
  );
}
