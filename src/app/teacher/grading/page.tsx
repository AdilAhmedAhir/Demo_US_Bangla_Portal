'use client';

import React from 'react';
import {
  ClipboardCheck,
  Send,
  Users,
  BarChart3,
  Clock,
  CheckCircle2,
  AlertTriangle,
  XCircle,
  Eye,
  ChevronDown,
  FileText,
  Timer,
  TrendingUp,
} from 'lucide-react';

type SubmissionStatus = 'graded' | 'pending' | 'absent';

interface StudentSubmission {
  id: string;
  name: string;
  submittedAt: string;
  status: SubmissionStatus;
  mcqScore: number | null;
  mcqTotal: number;
  saqGrade: number | null;
  saqTotal: number;
  finalPct: number | null;
}

const submissions: StudentSubmission[] = [
  {
    id: 'USB-2604',
    name: 'Adil Ahmed',
    submittedAt: '10m ago',
    status: 'graded',
    mcqScore: 4,
    mcqTotal: 5,
    saqGrade: 17,
    saqTotal: 20,
    finalPct: 84,
  },
  {
    id: 'USB-2612',
    name: 'Rahima Akter',
    submittedAt: '22m ago',
    status: 'graded',
    mcqScore: 5,
    mcqTotal: 5,
    saqGrade: 18,
    saqTotal: 20,
    finalPct: 92,
  },
  {
    id: 'USB-2618',
    name: 'Tanvir Hasan',
    submittedAt: '35m ago',
    status: 'pending',
    mcqScore: 3,
    mcqTotal: 5,
    saqGrade: null,
    saqTotal: 20,
    finalPct: null,
  },
  {
    id: 'USB-2625',
    name: 'Nadia Islam',
    submittedAt: '1h ago',
    status: 'graded',
    mcqScore: 3,
    mcqTotal: 5,
    saqGrade: 9,
    saqTotal: 20,
    finalPct: 48,
  },
  {
    id: 'USB-2631',
    name: 'Ariful Karim',
    submittedAt: '—',
    status: 'absent',
    mcqScore: null,
    mcqTotal: 5,
    saqGrade: null,
    saqTotal: 20,
    finalPct: null,
  },
  {
    id: 'USB-2638',
    name: 'Faria Sultana',
    submittedAt: '48m ago',
    status: 'pending',
    mcqScore: 4,
    mcqTotal: 5,
    saqGrade: null,
    saqTotal: 20,
    finalPct: null,
  },
];

const statusConfig: Record<SubmissionStatus, { label: string; color: string; bg: string; border: string; icon: React.ElementType }> = {
  graded:  { label: 'Graded',  color: 'text-emerald-700', bg: 'bg-emerald-50', border: 'border-emerald-200', icon: CheckCircle2 },
  pending: { label: 'Pending', color: 'text-amber-700',   bg: 'bg-amber-50',   border: 'border-amber-200',   icon: Clock },
  absent:  { label: 'Absent',  color: 'text-[#ed1c24]',   bg: 'bg-red-50',     border: 'border-red-200',     icon: XCircle },
};

function getGradeColor(pct: number | null) {
  if (pct === null) return 'text-gray-400';
  if (pct >= 80) return 'text-emerald-700';
  if (pct >= 60) return 'text-brand-primary-blue';
  return 'text-[#ed1c24]';
}

function getGradeBg(pct: number | null) {
  if (pct === null) return '';
  if (pct >= 80) return 'bg-emerald-50 border-emerald-200';
  if (pct >= 60) return 'bg-blue-50 border-blue-200';
  return 'bg-red-50 border-red-200';
}

export default function GradingPage() {
  const totalStudents = 50;
  const submitted = submissions.filter(s => s.status !== 'absent').length;
  const graded = submissions.filter(s => s.status === 'graded').length;
  const pendingCount = submissions.filter(s => s.status === 'pending').length;
  const avgScore = Math.round(
    submissions
      .filter(s => s.finalPct !== null)
      .reduce((sum, s) => sum + (s.finalPct ?? 0), 0) /
    submissions.filter(s => s.finalPct !== null).length
  );

  return (
    <div className="flex flex-col gap-6 w-full h-full pb-10">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
        <div>
          <div className="flex items-center gap-2.5 mb-1">
            <div className="w-9 h-9 rounded-xl bg-brand-primary-blue/10 flex items-center justify-center">
              <ClipboardCheck className="w-4.5 h-4.5 text-brand-primary-blue" />
            </div>
            <div>
              <h1 className="text-xl font-black text-gray-900 tracking-tight">Grading & Results</h1>
              <p className="text-xs font-medium text-gray-400">General Bacteriology Prelim — April 28, 2026</p>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-2.5">
          <div className="relative">
            <button className="px-4 py-2.5 text-xs font-bold rounded-lg border border-gray-200 text-gray-600 hover:bg-gray-50 transition-colors flex items-center gap-1.5">
              <ChevronDown className="w-3.5 h-3.5" />
              Filter by Status
            </button>
          </div>
          <button className="px-5 py-2.5 text-xs font-bold rounded-lg bg-brand-primary-blue text-white hover:bg-brand-primary-blue/90 transition-all flex items-center gap-2 shadow-sm active:scale-95">
            <Send className="w-3.5 h-3.5" />
            Publish Results to Students
          </button>
        </div>
      </div>

      {/* Summary Widgets */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="bg-white rounded-xl p-5 border border-gray-100 shadow-sm flex items-center gap-4 hover:shadow-md transition-shadow">
          <div className="w-12 h-12 rounded-xl bg-blue-50 ring-2 ring-blue-100 flex items-center justify-center shrink-0">
            <Users className="w-5.5 h-5.5 text-brand-primary-blue" />
          </div>
          <div>
            <p className="text-2xl font-black text-gray-900 leading-none">
              {submitted}<span className="text-sm font-bold text-gray-400">/{totalStudents}</span>
            </p>
            <p className="text-[11px] font-bold text-gray-400 uppercase tracking-wider mt-1">Submissions</p>
          </div>
        </div>

        <div className="bg-white rounded-xl p-5 border border-gray-100 shadow-sm flex items-center gap-4 hover:shadow-md transition-shadow">
          <div className="w-12 h-12 rounded-xl bg-emerald-50 ring-2 ring-emerald-100 flex items-center justify-center shrink-0">
            <TrendingUp className="w-5.5 h-5.5 text-emerald-600" />
          </div>
          <div>
            <p className="text-2xl font-black text-gray-900 leading-none">
              {avgScore}%
            </p>
            <p className="text-[11px] font-bold text-gray-400 uppercase tracking-wider mt-1">Average Score</p>
          </div>
        </div>

        <div className="bg-white rounded-xl p-5 border border-gray-100 shadow-sm flex items-center gap-4 hover:shadow-md transition-shadow">
          <div className="w-12 h-12 rounded-xl bg-amber-50 ring-2 ring-amber-100 flex items-center justify-center shrink-0">
            <Clock className="w-5.5 h-5.5 text-amber-600" />
          </div>
          <div>
            <p className="text-2xl font-black text-amber-600 leading-none">
              {pendingCount}
            </p>
            <p className="text-[11px] font-bold text-gray-400 uppercase tracking-wider mt-1">Pending Reviews</p>
          </div>
        </div>
      </div>

      {/* Grading Roster */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="px-6 py-5 border-b border-gray-100 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <h2 className="text-base font-bold text-gray-900 flex items-center gap-2">
              <FileText className="w-5 h-5 text-brand-primary-blue" />
              Grading Roster
            </h2>
            <p className="text-xs text-gray-500 font-medium mt-1">
              {graded} of {submitted} submissions graded • {pendingCount} need manual SAQ scoring
            </p>
          </div>
          <div className="flex items-center gap-3">
            {Object.entries(statusConfig).map(([key, cfg]) => {
              const Icon = cfg.icon;
              return (
                <div key={key} className="flex items-center gap-1.5">
                  <Icon className={`w-3 h-3 ${cfg.color}`} />
                  <span className="text-[10px] font-bold text-gray-400 capitalize">{cfg.label}</span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Progress indicator */}
        <div className="px-6 py-2.5 bg-gray-50/50 border-b border-gray-100 flex items-center gap-3">
          <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider shrink-0">Grading Progress</span>
          <div className="flex-1 h-2 bg-gray-100 rounded-full overflow-hidden">
            <div
              className="h-full bg-emerald-500 rounded-full transition-all duration-500"
              style={{ width: `${(graded / submitted) * 100}%` }}
            />
          </div>
          <span className="text-[10px] font-black text-gray-500">{Math.round((graded / submitted) * 100)}%</span>
        </div>

        {/* Data Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-gray-50/70 border-b border-gray-100">
                <th className="px-6 py-3.5 text-[11px] font-bold text-gray-400 uppercase tracking-wider">Student ID</th>
                <th className="px-6 py-3.5 text-[11px] font-bold text-gray-400 uppercase tracking-wider">Name</th>
                <th className="px-6 py-3.5 text-[11px] font-bold text-gray-400 uppercase tracking-wider text-center">Submission</th>
                <th className="px-6 py-3.5 text-[11px] font-bold text-gray-400 uppercase tracking-wider text-center">MCQ Score</th>
                <th className="px-6 py-3.5 text-[11px] font-bold text-gray-400 uppercase tracking-wider text-center">
                  SAQ Grade
                  <span className="block text-[9px] font-medium text-gray-300 normal-case tracking-normal mt-0.5">Manual Entry</span>
                </th>
                <th className="px-6 py-3.5 text-[11px] font-bold text-gray-400 uppercase tracking-wider text-center">Final %</th>
                <th className="px-6 py-3.5 text-[11px] font-bold text-gray-400 uppercase tracking-wider text-center">Status</th>
                <th className="px-6 py-3.5 text-[11px] font-bold text-gray-400 uppercase tracking-wider text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {submissions.map((student, idx) => {
                const isEven = idx % 2 === 1;
                const cfg = statusConfig[student.status];
                const StatusIcon = cfg.icon;
                const isAbsent = student.status === 'absent';
                const isPending = student.status === 'pending';

                return (
                  <tr
                    key={student.id}
                    className={`hover:bg-slate-100/60 transition-colors ${isEven ? 'bg-slate-50' : 'bg-white'} ${isAbsent ? 'opacity-60' : ''}`}
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
                        <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-xs font-black text-gray-500 shrink-0">
                          {student.name.split(' ').map(n => n[0]).join('')}
                        </div>
                        <span className="text-sm font-bold text-gray-900">{student.name}</span>
                      </div>
                    </td>

                    {/* Submitted At */}
                    <td className="px-6 py-4 text-center">
                      {isAbsent ? (
                        <span className="text-xs font-bold text-gray-400">—</span>
                      ) : (
                        <div className="flex items-center justify-center gap-1.5">
                          <Timer className="w-3 h-3 text-gray-400" />
                          <span className="text-xs font-semibold text-gray-500">{student.submittedAt}</span>
                        </div>
                      )}
                    </td>

                    {/* MCQ Score */}
                    <td className="px-6 py-4 text-center">
                      {student.mcqScore !== null ? (
                        <span className="text-sm font-black text-gray-700">
                          {student.mcqScore}<span className="text-xs font-bold text-gray-400">/{student.mcqTotal}</span>
                        </span>
                      ) : (
                        <span className="text-xs font-bold text-gray-300">—</span>
                      )}
                    </td>

                    {/* SAQ Grade — Manual Input */}
                    <td className="px-6 py-4 text-center">
                      {isAbsent ? (
                        <span className="text-xs font-bold text-gray-300">—</span>
                      ) : isPending ? (
                        <div className="inline-flex items-center">
                          <input
                            type="number"
                            placeholder="—"
                            min={0}
                            max={student.saqTotal}
                            className="w-16 text-center text-sm font-bold text-gray-900 bg-amber-50 border-2 border-amber-300 rounded-lg py-1.5 focus:outline-none focus:ring-2 focus:ring-brand-primary-blue/30 focus:border-brand-primary-blue transition-all animate-pulse"
                          />
                          <span className="text-xs font-bold text-gray-400 ml-1.5">/{student.saqTotal}</span>
                        </div>
                      ) : (
                        <span className="text-sm font-black text-gray-700">
                          {student.saqGrade}<span className="text-xs font-bold text-gray-400">/{student.saqTotal}</span>
                        </span>
                      )}
                    </td>

                    {/* Final Percentage */}
                    <td className="px-6 py-4 text-center">
                      {student.finalPct !== null ? (
                        <span className={`inline-flex items-center px-2.5 py-1 rounded-lg text-sm font-black border ${getGradeBg(student.finalPct)} ${getGradeColor(student.finalPct)}`}>
                          {student.finalPct}%
                        </span>
                      ) : isAbsent ? (
                        <span className="text-xs font-bold text-[#ed1c24]">0%</span>
                      ) : (
                        <span className="text-xs font-bold text-gray-300 italic">Awaiting</span>
                      )}
                    </td>

                    {/* Status Badge */}
                    <td className="px-6 py-4 text-center">
                      <span className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-bold border ${cfg.bg} ${cfg.border} ${cfg.color}`}>
                        <StatusIcon className="w-3 h-3" />
                        {cfg.label}
                      </span>
                    </td>

                    {/* Action */}
                    <td className="px-6 py-4 text-right">
                      {!isAbsent && (
                        <button className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-bold border border-gray-300 text-gray-600 hover:border-brand-primary-blue hover:text-brand-primary-blue hover:bg-blue-50 active:scale-95 transition-all">
                          <Eye className="w-3.5 h-3.5" />
                          Review
                        </button>
                      )}
                      {isAbsent && (
                        <span className="inline-flex items-center gap-1 px-3 py-2 rounded-lg text-xs font-bold text-gray-300 border border-gray-200 cursor-not-allowed">
                          <AlertTriangle className="w-3.5 h-3.5" />
                          No Submission
                        </span>
                      )}
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
            Showing {submissions.length} of {totalStudents} students
          </p>
          <div className="flex items-center gap-4">
            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">
              Auto-save enabled
            </p>
            <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
          </div>
        </div>
      </div>
    </div>
  );
}
