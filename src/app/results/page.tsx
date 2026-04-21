'use client';

import React from 'react';
import {
  Award,
  Download,
  CheckCircle2,
  XCircle,
  TrendingUp,
  FileText,
  BarChart3,
  ChevronRight,
  Info,
  Printer,
} from 'lucide-react';

/* ── GPA lookup ─── */
const getGrade = (percent: number) => {
  if (percent >= 80) return { letter: 'A+', gp: 5.0, color: 'text-emerald-700', bg: 'bg-emerald-50', border: 'border-emerald-200' };
  if (percent >= 75) return { letter: 'A',  gp: 4.5, color: 'text-blue-700',    bg: 'bg-blue-50',    border: 'border-blue-200' };
  if (percent >= 70) return { letter: 'A-', gp: 4.0, color: 'text-sky-700',     bg: 'bg-sky-50',     border: 'border-sky-200' };
  if (percent >= 65) return { letter: 'B+', gp: 3.5, color: 'text-amber-700',   bg: 'bg-amber-50',   border: 'border-amber-200' };
  if (percent >= 60) return { letter: 'B',  gp: 3.0, color: 'text-orange-700',  bg: 'bg-orange-50',  border: 'border-orange-200' };
  return               { letter: 'F',  gp: 0.0, color: 'text-[#ed1c24]',  bg: 'bg-red-50',     border: 'border-red-200' };
};

/* ── Term Results ─── */
interface SubjectResult {
  name: string;
  written: { mcq: number; saqSeq: number; formative: number; total: number; outOf: number };
  oral: { board1: number; board2: number; total: number; outOf: number };
  practical: { ospe: number; traditional: number; notebook: number; integrated: number; total: number; outOf: number };
  grandTotal: number;
  outOf: number;
}

const results: SubjectResult[] = [
  {
    name: 'Community Medicine & Public Health',
    written:   { mcq: 16, saqSeq: 52, formative: 8, total: 76, outOf: 100 },
    oral:      { board1: 42, board2: 38, total: 80, outOf: 100 },
    practical: { ospe: 40, traditional: 34, notebook: 4, integrated: 4, total: 82, outOf: 100 },
    grandTotal: 238, outOf: 300,
  },
  {
    name: 'Pathology',
    written:   { mcq: 14, saqSeq: 48, formative: 7, total: 69, outOf: 100 },
    oral:      { board1: 38, board2: 40, total: 78, outOf: 100 },
    practical: { ospe: 38, traditional: 30, notebook: 4, integrated: 5, total: 77, outOf: 100 },
    grandTotal: 224, outOf: 300,
  },
  {
    name: 'Microbiology',
    written:   { mcq: 15, saqSeq: 45, formative: 8, total: 68, outOf: 100 },
    oral:      { board1: 40, board2: 42, total: 82, outOf: 100 },
    practical: { ospe: 42, traditional: 32, notebook: 5, integrated: 4, total: 83, outOf: 100 },
    grandTotal: 233, outOf: 300,
  },
];

/* ── Formative Breakdown (for info panel) ─── */
const formativeDetails = {
  termExam1: 4.5,
  termExam2: 5.0,
  avgTermExam: 4.75,
  generalAttendance: 3,
  integratedAttendance: 1,
  genericTopics: 1,
  totalAttendance: 5,
  grandFormative: 9.75,
};

export default function ExamResultsPage() {
  const overallTotal = results.reduce((sum, r) => sum + r.grandTotal, 0);
  const overallOutOf = results.reduce((sum, r) => sum + r.outOf, 0);
  const overallPercent = Math.round((overallTotal / overallOutOf) * 100 * 10) / 10;
  const overallGrade = getGrade(overallPercent);
  const allPassed = results.every((r) => {
    const wp = (r.written.total / r.written.outOf) * 100;
    const op = (r.oral.total / r.oral.outOf) * 100;
    const pp = (r.practical.total / r.practical.outOf) * 100;
    return wp >= 60 && op >= 60 && pp >= 60;
  });

  return (
    <div className="flex flex-col gap-6 w-full h-full pb-10">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
        <div className="flex items-center gap-2.5">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-500 to-amber-700 flex items-center justify-center shadow-md">
            <Award className="w-5 h-5 text-white" />
          </div>
          <div>
            <h1 className="text-xl font-black text-gray-900 tracking-tight">Exam Results</h1>
            <p className="text-xs font-medium text-gray-400">Third Professional MBBS — Phase III</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button className="px-4 py-2.5 text-xs font-bold rounded-lg border border-gray-200 text-gray-600 hover:bg-gray-50 transition-all flex items-center gap-2">
            <Printer className="w-3.5 h-3.5" />
            Print
          </button>
          <button className="px-4 py-2.5 text-xs font-bold rounded-lg bg-brand-primary-blue text-white hover:bg-brand-primary-blue/90 transition-all flex items-center gap-2 shadow-sm active:scale-95">
            <Download className="w-3.5 h-3.5" />
            Download Transcript
          </button>
        </div>
      </div>

      {/* Overall Result Banner */}
      <div className={`rounded-2xl p-6 shadow-sm border-2 ${allPassed ? 'bg-emerald-50 border-emerald-200' : 'bg-red-50 border-red-200'}`}>
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className={`w-16 h-16 rounded-2xl flex items-center justify-center ${allPassed ? 'bg-emerald-500' : 'bg-[#ed1c24]'} text-white shadow-md`}>
              {allPassed ? <CheckCircle2 className="w-8 h-8" /> : <XCircle className="w-8 h-8" />}
            </div>
            <div>
              <h2 className={`text-2xl font-black ${allPassed ? 'text-emerald-800' : 'text-[#ed1c24]'}`}>
                {allPassed ? 'PASSED' : 'FAILED'}
              </h2>
              <p className="text-sm font-medium text-gray-600 mt-0.5">
                Third Professional MBBS Examination — May 2026
              </p>
            </div>
          </div>
          <div className="flex items-center gap-6">
            <div className="text-center">
              <p className="text-3xl font-black text-gray-900">{overallTotal}<span className="text-lg text-gray-400">/{overallOutOf}</span></p>
              <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Total Marks</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-black text-gray-900">{overallPercent}%</p>
              <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Overall</p>
            </div>
            <div className="text-center">
              <div className={`inline-flex px-4 py-2 rounded-xl ${overallGrade.bg} border ${overallGrade.border}`}>
                <span className={`text-2xl font-black ${overallGrade.color}`}>{overallGrade.letter}</span>
              </div>
              <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mt-1">GPA {overallGrade.gp.toFixed(2)}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Subject-wise Detailed Results */}
      {results.map((subj) => {
        const totalPercent = Math.round((subj.grandTotal / subj.outOf) * 100 * 10) / 10;
        const grade = getGrade(totalPercent);
        const writtenPercent = Math.round((subj.written.total / subj.written.outOf) * 100);
        const oralPercent = Math.round((subj.oral.total / subj.oral.outOf) * 100);
        const practicalPercent = Math.round((subj.practical.total / subj.practical.outOf) * 100);

        return (
          <div key={subj.name} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="px-6 py-5 border-b border-gray-100 flex items-center justify-between">
              <div>
                <h3 className="text-base font-bold text-gray-900">{subj.name}</h3>
                <p className="text-xs text-gray-500 font-medium mt-0.5">Total: {subj.grandTotal}/{subj.outOf} ({totalPercent}%)</p>
              </div>
              <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-xl ${grade.bg} border ${grade.border}`}>
                <span className={`text-lg font-black ${grade.color}`}>{grade.letter}</span>
                <span className="text-xs font-bold text-gray-500">GPA {grade.gp.toFixed(2)}</span>
              </div>
            </div>

            <div className="p-5 grid grid-cols-1 sm:grid-cols-3 gap-4">
              {/* Written */}
              <div className="p-4 rounded-xl bg-blue-50/50 border border-blue-100/50">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-bold text-brand-primary-blue uppercase tracking-wider">Written</span>
                  <span className={`text-xs font-black px-2 py-0.5 rounded-full ${writtenPercent >= 60 ? 'bg-emerald-100 text-emerald-700' : 'bg-red-100 text-[#ed1c24]'}`}>
                    {writtenPercent >= 60 ? 'Pass' : 'Fail'}
                  </span>
                </div>
                <p className="text-xl font-black text-gray-900 mb-2">{subj.written.total}<span className="text-sm text-gray-400">/{subj.written.outOf}</span></p>
                <div className="space-y-1.5 text-[11px]">
                  <div className="flex justify-between"><span className="text-gray-500">MCQ (MT/F + SBA)</span><span className="font-bold text-gray-700">{subj.written.mcq}/20</span></div>
                  <div className="flex justify-between"><span className="text-gray-500">SAQ + SEQ</span><span className="font-bold text-gray-700">{subj.written.saqSeq}/70</span></div>
                  <div className="flex justify-between"><span className="text-gray-500">Formative</span><span className="font-bold text-gray-700">{subj.written.formative}/10</span></div>
                </div>
              </div>

              {/* Oral */}
              <div className="p-4 rounded-xl bg-emerald-50/50 border border-emerald-100/50">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-bold text-emerald-700 uppercase tracking-wider">Oral (SOE)</span>
                  <span className={`text-xs font-black px-2 py-0.5 rounded-full ${oralPercent >= 60 ? 'bg-emerald-100 text-emerald-700' : 'bg-red-100 text-[#ed1c24]'}`}>
                    {oralPercent >= 60 ? 'Pass' : 'Fail'}
                  </span>
                </div>
                <p className="text-xl font-black text-gray-900 mb-2">{subj.oral.total}<span className="text-sm text-gray-400">/{subj.oral.outOf}</span></p>
                <div className="space-y-1.5 text-[11px]">
                  <div className="flex justify-between"><span className="text-gray-500">Board I (10 × 5)</span><span className="font-bold text-gray-700">{subj.oral.board1}/50</span></div>
                  <div className="flex justify-between"><span className="text-gray-500">Board II (10 × 5)</span><span className="font-bold text-gray-700">{subj.oral.board2}/50</span></div>
                </div>
              </div>

              {/* Practical */}
              <div className="p-4 rounded-xl bg-amber-50/50 border border-amber-100/50">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-bold text-amber-700 uppercase tracking-wider">Practical</span>
                  <span className={`text-xs font-black px-2 py-0.5 rounded-full ${practicalPercent >= 60 ? 'bg-emerald-100 text-emerald-700' : 'bg-red-100 text-[#ed1c24]'}`}>
                    {practicalPercent >= 60 ? 'Pass' : 'Fail'}
                  </span>
                </div>
                <p className="text-xl font-black text-gray-900 mb-2">{subj.practical.total}<span className="text-sm text-gray-400">/{subj.practical.outOf}</span></p>
                <div className="space-y-1.5 text-[11px]">
                  <div className="flex justify-between"><span className="text-gray-500">OSPE (10 stations)</span><span className="font-bold text-gray-700">{subj.practical.ospe}/50</span></div>
                  <div className="flex justify-between"><span className="text-gray-500">Traditional</span><span className="font-bold text-gray-700">{subj.practical.traditional}/40</span></div>
                  <div className="flex justify-between"><span className="text-gray-500">Notebook</span><span className="font-bold text-gray-700">{subj.practical.notebook}/5</span></div>
                  <div className="flex justify-between"><span className="text-gray-500">Integrated</span><span className="font-bold text-gray-700">{subj.practical.integrated}/5</span></div>
                </div>
              </div>
            </div>
          </div>
        );
      })}

      {/* GPA Summary Card */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="px-6 py-5 border-b border-gray-100">
          <h2 className="text-base font-bold text-gray-900 flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-brand-primary-blue" />
            GPA Summary — Phase III
          </h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-gray-50/70 border-b border-gray-100">
                <th className="px-6 py-3 text-[11px] font-bold text-gray-400 uppercase tracking-wider">Subject</th>
                <th className="px-4 py-3 text-[11px] font-bold text-gray-400 uppercase tracking-wider text-center">Marks</th>
                <th className="px-4 py-3 text-[11px] font-bold text-gray-400 uppercase tracking-wider text-center">Percentage</th>
                <th className="px-4 py-3 text-[11px] font-bold text-gray-400 uppercase tracking-wider text-center">Grade</th>
                <th className="px-4 py-3 text-[11px] font-bold text-gray-400 uppercase tracking-wider text-center">GPA</th>
                <th className="px-4 py-3 text-[11px] font-bold text-gray-400 uppercase tracking-wider text-center">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {results.map((subj) => {
                const pct = Math.round((subj.grandTotal / subj.outOf) * 100 * 10) / 10;
                const g = getGrade(pct);
                return (
                  <tr key={subj.name} className="hover:bg-slate-50">
                    <td className="px-6 py-3.5 text-sm font-bold text-gray-900">{subj.name}</td>
                    <td className="px-4 py-3.5 text-center text-sm font-bold text-gray-700">{subj.grandTotal}/{subj.outOf}</td>
                    <td className="px-4 py-3.5 text-center text-sm font-black text-gray-900">{pct}%</td>
                    <td className="px-4 py-3.5 text-center">
                      <span className={`inline-flex px-2 py-0.5 rounded-full text-xs font-black ${g.bg} ${g.color} border ${g.border}`}>{g.letter}</span>
                    </td>
                    <td className="px-4 py-3.5 text-center text-sm font-black text-gray-900">{g.gp.toFixed(2)}</td>
                    <td className="px-4 py-3.5 text-center">
                      <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-50 text-emerald-700 border border-emerald-200">
                        <CheckCircle2 className="w-3 h-3" /> Passed
                      </span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <div className="px-6 py-4 bg-gradient-to-r from-brand-primary-blue to-blue-700 flex items-center justify-between">
          <span className="text-sm font-bold text-white/70">Cumulative GPA (Phase III)</span>
          <span className="text-2xl font-black text-white">
            {(results.reduce((sum, r) => sum + getGrade(Math.round((r.grandTotal / r.outOf) * 100)).gp, 0) / results.length).toFixed(2)}
          </span>
        </div>
      </div>

      {/* Info Note */}
      <div className="p-4 bg-blue-50 border border-blue-200 rounded-xl flex items-start gap-2.5">
        <Info className="w-4 h-4 text-brand-primary-blue shrink-0 mt-0.5" />
        <p className="text-xs text-gray-600">
          Results are published using the official BMDC GPA system. Students must pass each component (Written, Oral, Practical) separately with ≥60% to pass a subject. GPA is reflected on the official academic transcript.
        </p>
      </div>
    </div>
  );
}
