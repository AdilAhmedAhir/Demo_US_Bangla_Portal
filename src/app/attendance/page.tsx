'use client';

import React, { useState } from 'react';
import {
  CheckCircle2,
  XCircle,
  Clock,
  AlertTriangle,
  CalendarDays,
  TrendingUp,
  BarChart3,
  ChevronLeft,
  ChevronRight,
  Info,
  Filter,
} from 'lucide-react';

type AttendanceStatus = 'present' | 'absent' | 'late' | 'excused' | null;

interface SubjectAttendance {
  name: string;
  code: string;
  total: number;
  attended: number;
  absent: number;
  late: number;
  percentage: number;
  threshold: number;
  shortageRisk: boolean;
}

const subjects: SubjectAttendance[] = [
  { name: 'General Anatomy',     code: 'ANAT-101', total: 48, attended: 42, absent: 4, late: 2, percentage: 91.7, threshold: 75, shortageRisk: false },
  { name: 'Physiology',          code: 'PHYS-101', total: 44, attended: 39, absent: 3, late: 2, percentage: 88.6, threshold: 75, shortageRisk: false },
  { name: 'Biochemistry',        code: 'BIOC-101', total: 40, attended: 34, absent: 5, late: 1, percentage: 85.0, threshold: 75, shortageRisk: false },
  { name: 'Microbiology',        code: 'MICR-201', total: 36, attended: 28, absent: 6, late: 2, percentage: 77.8, threshold: 75, shortageRisk: true },
  { name: 'Community Medicine',  code: 'COMM-101', total: 30, attended: 27, absent: 2, late: 1, percentage: 90.0, threshold: 75, shortageRisk: false },
  { name: 'Pharmacology',        code: 'PHAR-201', total: 32, attended: 23, absent: 7, late: 2, percentage: 71.9, threshold: 75, shortageRisk: true },
];

/* Calendar mock — April 2026 */
const calendarDays: (AttendanceStatus | null)[][] = [
  [null, null, 'present', 'present', 'present', null, null],
  ['present', 'present', 'absent', 'present', 'present', null, null],
  ['present', 'late', 'present', 'present', 'present', null, null],
  ['present', 'present', 'present', 'excused', 'present', null, null],
  ['present', 'present', null, null, null, null, null],
];
const dayLabels = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
const statusColors: Record<string, string> = {
  present: 'bg-emerald-500',
  absent:  'bg-[#ed1c24]',
  late:    'bg-amber-500',
  excused: 'bg-brand-primary-blue',
};

const overallStats = {
  totalClasses: 230,
  attended: 193,
  absent: 27,
  late: 10,
  percentage: 83.9,
};

export default function StudentAttendancePage() {
  return (
    <div className="flex flex-col gap-6 w-full h-full pb-10">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
        <div>
          <div className="flex items-center gap-2.5 mb-1">
            <div className="w-9 h-9 rounded-xl bg-emerald-50 ring-2 ring-emerald-100 flex items-center justify-center">
              <CheckCircle2 className="w-4.5 h-4.5 text-emerald-600" />
            </div>
            <div>
              <h1 className="text-xl font-black text-gray-900 tracking-tight">My Attendance</h1>
              <p className="text-xs font-medium text-gray-400">Phase I — Spring 2026 Semester</p>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button className="px-4 py-2.5 text-xs font-bold rounded-lg border border-gray-200 text-gray-600 hover:bg-gray-50 transition-all flex items-center gap-2">
            <BarChart3 className="w-3.5 h-3.5" />
            Download Report
          </button>
        </div>
      </div>

      {/* Overall Stats */}
      <div className="grid grid-cols-2 sm:grid-cols-5 gap-4">
        <div className="bg-white rounded-xl p-5 border border-gray-100 shadow-sm text-center hover:shadow-md transition-shadow">
          <p className="text-2xl font-black text-gray-900">{overallStats.totalClasses}</p>
          <p className="text-[11px] font-bold text-gray-400 uppercase tracking-wider mt-1">Total Classes</p>
        </div>
        <div className="bg-white rounded-xl p-5 border border-gray-100 shadow-sm text-center hover:shadow-md transition-shadow">
          <p className="text-2xl font-black text-emerald-600">{overallStats.attended}</p>
          <p className="text-[11px] font-bold text-gray-400 uppercase tracking-wider mt-1">Present</p>
        </div>
        <div className="bg-white rounded-xl p-5 border border-gray-100 shadow-sm text-center hover:shadow-md transition-shadow">
          <p className="text-2xl font-black text-[#ed1c24]">{overallStats.absent}</p>
          <p className="text-[11px] font-bold text-gray-400 uppercase tracking-wider mt-1">Absent</p>
        </div>
        <div className="bg-white rounded-xl p-5 border border-gray-100 shadow-sm text-center hover:shadow-md transition-shadow">
          <p className="text-2xl font-black text-amber-500">{overallStats.late}</p>
          <p className="text-[11px] font-bold text-gray-400 uppercase tracking-wider mt-1">Late</p>
        </div>
        <div className="col-span-2 sm:col-span-1 bg-white rounded-xl p-5 border border-gray-100 shadow-sm text-center hover:shadow-md transition-shadow">
          <p className={`text-2xl font-black ${overallStats.percentage >= 75 ? 'text-emerald-600' : 'text-[#ed1c24]'}`}>
            {overallStats.percentage}%
          </p>
          <p className="text-[11px] font-bold text-gray-400 uppercase tracking-wider mt-1">Overall</p>
        </div>
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Subject-wise Breakdown — 2 cols */}
        <div className="lg:col-span-2 bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="px-6 py-5 border-b border-gray-100 flex items-center justify-between">
            <div>
              <h2 className="text-base font-bold text-gray-900 flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-brand-primary-blue" />
                Subject-wise Attendance
              </h2>
              <p className="text-xs text-gray-500 font-medium mt-0.5">Minimum 75% required for exam eligibility</p>
            </div>
          </div>
          <div className="divide-y divide-gray-50">
            {subjects.map((subj) => {
              const isLow = subj.percentage < subj.threshold;
              const isWarn = subj.shortageRisk && !isLow;
              return (
                <div key={subj.code} className="px-6 py-4 hover:bg-slate-50 transition-colors">
                  <div className="flex items-start justify-between gap-4 mb-2">
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2">
                        <h3 className="text-sm font-bold text-gray-900">{subj.name}</h3>
                        {isLow && (
                          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold bg-red-50 text-[#ed1c24] border border-red-200">
                            <XCircle className="w-3 h-3" />
                            Below Threshold
                          </span>
                        )}
                        {isWarn && (
                          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold bg-amber-50 text-amber-700 border border-amber-200">
                            <AlertTriangle className="w-3 h-3" />
                            At Risk
                          </span>
                        )}
                      </div>
                      <p className="text-[11px] font-medium text-gray-400 mt-0.5">{subj.code} • {subj.attended}/{subj.total} classes attended</p>
                    </div>
                    <span className={`text-lg font-black ${isLow ? 'text-[#ed1c24]' : isWarn ? 'text-amber-600' : 'text-emerald-600'}`}>
                      {subj.percentage}%
                    </span>
                  </div>
                  <div className="h-2.5 bg-gray-100 rounded-full overflow-hidden">
                    <div
                      className={`h-full rounded-full transition-all ${
                        isLow ? 'bg-[#ed1c24]' : isWarn ? 'bg-amber-500' : 'bg-emerald-500'
                      }`}
                      style={{ width: `${subj.percentage}%` }}
                    />
                  </div>
                  <div className="flex items-center gap-4 mt-2">
                    <span className="text-[10px] font-bold text-emerald-600">{subj.attended} Present</span>
                    <span className="text-[10px] font-bold text-[#ed1c24]">{subj.absent} Absent</span>
                    <span className="text-[10px] font-bold text-amber-500">{subj.late} Late</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Calendar Heatmap — 1 col */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden flex flex-col">
          <div className="px-6 py-5 border-b border-gray-100 flex items-center justify-between">
            <h2 className="text-base font-bold text-gray-900 flex items-center gap-2">
              <CalendarDays className="w-5 h-5 text-violet-600" />
              April 2026
            </h2>
            <div className="flex items-center gap-1">
              <button className="p-1.5 rounded-lg hover:bg-gray-100 text-gray-400 transition-colors">
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button className="p-1.5 rounded-lg hover:bg-gray-100 text-gray-400 transition-colors">
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
          <div className="p-5 flex-1">
            {/* Day Headers */}
            <div className="grid grid-cols-7 gap-1.5 mb-2">
              {dayLabels.map((d) => (
                <div key={d} className="text-center text-[10px] font-bold text-gray-400 uppercase">
                  {d}
                </div>
              ))}
            </div>
            {/* Calendar Grid */}
            <div className="space-y-1.5">
              {calendarDays.map((week, wIdx) => (
                <div key={wIdx} className="grid grid-cols-7 gap-1.5">
                  {week.map((status, dIdx) => {
                    const dayNum = wIdx * 7 + dIdx - 1; // offset for April starting on Wednesday
                    const actualDay = dayNum >= 0 && dayNum < 30 ? dayNum + 1 : null;
                    return (
                      <div
                        key={dIdx}
                        className={`aspect-square rounded-lg flex items-center justify-center text-[11px] font-bold transition-all ${
                          status
                            ? `${statusColors[status]} text-white`
                            : actualDay
                            ? 'bg-gray-50 text-gray-300'
                            : ''
                        }`}
                        title={status ? status.charAt(0).toUpperCase() + status.slice(1) : ''}
                      >
                        {status ? '' : ''}
                      </div>
                    );
                  })}
                </div>
              ))}
            </div>

            {/* Legend */}
            <div className="flex items-center justify-center gap-4 mt-5 pt-4 border-t border-gray-100">
              {[
                { label: 'Present', color: 'bg-emerald-500' },
                { label: 'Absent',  color: 'bg-[#ed1c24]' },
                { label: 'Late',    color: 'bg-amber-500' },
                { label: 'Excused', color: 'bg-brand-primary-blue' },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-1.5">
                  <div className={`w-2.5 h-2.5 rounded-sm ${item.color}`} />
                  <span className="text-[10px] font-bold text-gray-500">{item.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Warning Banner */}
          <div className="mx-5 mb-5 p-3.5 bg-amber-50 border border-amber-200 rounded-xl flex items-start gap-2.5">
            <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
            <div>
              <p className="text-xs font-bold text-amber-800">Attendance Warning</p>
              <p className="text-[11px] text-amber-600 mt-0.5">
                Pharmacology attendance is <strong>below 75%</strong>. You need 9 more classes without absence to reach eligibility.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
