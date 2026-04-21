'use client';

import React from 'react';
import { GraduationCap, TrendingUp, Award, AlertTriangle } from 'lucide-react';

interface TermResult {
  term: string;
  subject: string;
  percentage: number;
}

interface AcademicTranscriptProps {
  cgpa: number;
  results: TermResult[];
}

/** US Bangla Medical College GPA Scale */
function percentToGrade(pct: number): { letter: string; gpa: string; tier: 'excellent' | 'good' | 'pass' | 'fail' } {
  if (pct >= 80) return { letter: 'A+', gpa: '5.00', tier: 'excellent' };
  if (pct >= 75) return { letter: 'A',  gpa: '4.50', tier: 'excellent' };
  if (pct >= 70) return { letter: 'A-', gpa: '4.00', tier: 'good' };
  if (pct >= 65) return { letter: 'B+', gpa: '3.50', tier: 'good' };
  if (pct >= 60) return { letter: 'B',  gpa: '3.00', tier: 'pass' };
  return               { letter: 'F',  gpa: '0.00', tier: 'fail' };
}

function cgpaToLetter(cgpa: number): { letter: string; tier: 'excellent' | 'good' | 'pass' | 'fail' } {
  if (cgpa >= 5.0)  return { letter: 'A+', tier: 'excellent' };
  if (cgpa >= 4.50) return { letter: 'A',  tier: 'excellent' };
  if (cgpa >= 4.00) return { letter: 'A-', tier: 'good' };
  if (cgpa >= 3.50) return { letter: 'B+', tier: 'good' };
  if (cgpa >= 3.00) return { letter: 'B',  tier: 'pass' };
  return                    { letter: 'F',  tier: 'fail' };
}

const tierStyles = {
  excellent: { text: 'text-emerald-700', bg: 'bg-emerald-50', border: 'border-emerald-200', badge: 'bg-emerald-100 text-emerald-700' },
  good:      { text: 'text-brand-primary-blue', bg: 'bg-blue-50', border: 'border-blue-200', badge: 'bg-blue-100 text-blue-700' },
  pass:      { text: 'text-gray-700', bg: 'bg-gray-50', border: 'border-gray-200', badge: 'bg-gray-100 text-gray-600' },
  fail:      { text: 'text-[#ed1c24]', bg: 'bg-red-50', border: 'border-red-200', badge: 'bg-red-100 text-red-700' },
};

const DEFAULT_RESULTS: TermResult[] = [
  { term: '1st Term', subject: 'Microbiology',      percentage: 78 },
  { term: '1st Term', subject: 'Pathology',         percentage: 62 },
  { term: '1st Term', subject: 'Pharmacology',      percentage: 85 },
  { term: '1st Term', subject: 'Community Medicine', percentage: 55 },
  { term: '1st Term', subject: 'Forensic Medicine',  percentage: 71 },
];

export default function AcademicTranscript({
  cgpa = 4.50,
  results = DEFAULT_RESULTS,
}: AcademicTranscriptProps) {
  const cgpaInfo = cgpaToLetter(cgpa);
  const cgpaTierStyle = tierStyles[cgpaInfo.tier];
  const hasFailing = results.some(r => r.percentage < 60);

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
      {/* Header */}
      <div className="px-6 py-5 border-b border-gray-100 flex items-center justify-between">
        <h3 className="text-base font-bold text-gray-900 flex items-center gap-2">
          <GraduationCap className="w-5 h-5 text-brand-primary-blue" />
          Academic Standing
        </h3>
        <button className="text-xs font-bold text-brand-primary-blue hover:underline">
          Full Transcript →
        </button>
      </div>

      {/* CGPA Hero Block */}
      <div className="px-6 pt-6 pb-5">
        <div className={`rounded-xl p-5 border ${cgpaTierStyle.border} ${cgpaTierStyle.bg} flex items-center justify-between relative overflow-hidden`}>
          {/* Decorative element */}
          <div className="absolute right-0 top-0 w-32 h-32 rounded-full opacity-[0.07] -mr-8 -mt-8 pointer-events-none">
            <Award className="w-full h-full" />
          </div>

          <div className="flex items-center gap-5 relative z-10">
            {/* Large CGPA */}
            <div className="flex flex-col items-center">
              <span className={`text-5xl font-black leading-none tracking-tight ${cgpaTierStyle.text}`}>
                {cgpa.toFixed(2)}
              </span>
              <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mt-1.5">
                CGPA
              </span>
            </div>

            {/* Divider */}
            <div className="w-px h-14 bg-gray-200/80" />

            {/* Letter Grade */}
            <div className="flex flex-col">
              <span className={`text-3xl font-black leading-none ${cgpaTierStyle.text}`}>
                {cgpaInfo.letter}
              </span>
              <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mt-1.5">
                Letter Grade
              </span>
            </div>
          </div>

          {/* Trend indicator */}
          <div className="flex flex-col items-end relative z-10">
            <div className="flex items-center gap-1.5 text-emerald-600">
              <TrendingUp className="w-4 h-4" />
              <span className="text-sm font-black">+0.12</span>
            </div>
            <span className="text-[10px] font-bold text-gray-400 mt-1">vs. previous term</span>
          </div>
        </div>
      </div>

      {/* GPA Scale Reference */}
      <div className="px-6 pb-4">
        <div className="flex flex-wrap gap-2">
          {[
            { label: 'A+ (5.00)', range: '≥80%', color: 'bg-emerald-100 text-emerald-700 border-emerald-200' },
            { label: 'A (4.50)',  range: '75-79%', color: 'bg-emerald-50 text-emerald-600 border-emerald-200' },
            { label: 'A- (4.00)', range: '70-74%', color: 'bg-blue-50 text-blue-600 border-blue-200' },
            { label: 'B+ (3.50)', range: '65-69%', color: 'bg-blue-50 text-blue-500 border-blue-100' },
            { label: 'B (3.00)',  range: '60-64%', color: 'bg-gray-100 text-gray-600 border-gray-200' },
            { label: 'F (0.00)',  range: '<60%',   color: 'bg-red-50 text-red-600 border-red-200' },
          ].map((g) => (
            <span
              key={g.label}
              className={`text-[10px] font-bold px-2 py-1 rounded-md border ${g.color}`}
            >
              {g.label} {g.range}
            </span>
          ))}
        </div>
      </div>

      {/* Results Table */}
      <div className="border-t border-gray-100">
        <div className="px-6 py-3.5 bg-gray-50/70 border-b border-gray-100">
          <h4 className="text-xs font-bold text-gray-500 uppercase tracking-wider">
            Recent Term Finals
          </h4>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-gray-100">
                <th className="px-6 py-3 text-[11px] font-bold text-gray-400 uppercase tracking-wider">Term</th>
                <th className="px-6 py-3 text-[11px] font-bold text-gray-400 uppercase tracking-wider">Subject</th>
                <th className="px-6 py-3 text-[11px] font-bold text-gray-400 uppercase tracking-wider text-center">Percentage</th>
                <th className="px-6 py-3 text-[11px] font-bold text-gray-400 uppercase tracking-wider text-right">Grade</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {results.map((res, idx) => {
                const grade = percentToGrade(res.percentage);
                const style = tierStyles[grade.tier];
                const isEven = idx % 2 === 1;

                return (
                  <tr
                    key={`${res.term}-${res.subject}`}
                    className={`hover:bg-slate-100/60 transition-colors ${isEven ? 'bg-slate-50' : 'bg-white'}`}
                  >
                    <td className="px-6 py-3.5">
                      <span className="text-xs font-bold text-gray-500 bg-gray-100 px-2 py-0.5 rounded-md">
                        {res.term}
                      </span>
                    </td>
                    <td className="px-6 py-3.5">
                      <span className="text-sm font-bold text-gray-900">{res.subject}</span>
                    </td>
                    <td className="px-6 py-3.5 text-center">
                      <span className={`text-sm font-black ${grade.tier === 'fail' ? 'text-[#ed1c24]' : 'text-gray-900'}`}>
                        {res.percentage}%
                      </span>
                    </td>
                    <td className="px-6 py-3.5 text-right">
                      <span className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-bold border ${style.badge} ${style.border}`}>
                        {grade.tier === 'fail' && <AlertTriangle className="w-3 h-3" />}
                        {grade.letter} ({grade.gpa})
                      </span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      {/* Failing warning */}
      {hasFailing && (
        <div className="px-6 py-3.5 bg-red-50 border-t border-red-100 flex items-start gap-2.5">
          <AlertTriangle className="w-4 h-4 text-[#ed1c24] shrink-0 mt-0.5" />
          <p className="text-xs font-medium text-red-700 leading-relaxed">
            You have <strong className="font-black">failing grades</strong> in one or more subjects.
            Contact your academic advisor for remedial options before the next term.
          </p>
        </div>
      )}
    </div>
  );
}
