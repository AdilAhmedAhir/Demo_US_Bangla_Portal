'use client';

import React from 'react';
import { ShieldCheck, AlertTriangle, BookOpenCheck, CalendarCheck, Info } from 'lucide-react';

interface EligibilityTrackerProps {
  termExamScore: number;     // out of 5.0
  attendancePercent: number; // e.g. 82
  attendanceScore: number;   // out of 5.0 (assigned by institution)
}

export default function EligibilityTracker({
  termExamScore = 3.5,
  attendancePercent = 82,
  attendanceScore = 2.0,
}: EligibilityTrackerProps) {
  const totalScore = Math.round((termExamScore + attendanceScore) * 10) / 10;
  const isEligible = totalScore >= 6;
  const progressPercent = Math.min((totalScore / 10) * 100, 100);

  // SVG circular gauge settings
  const RADIUS = 58;
  const CIRCUMFERENCE = 2 * Math.PI * RADIUS;
  const strokeOffset = CIRCUMFERENCE - (progressPercent / 100) * CIRCUMFERENCE;

  const accentColor = isEligible ? '#39b54a' : '#F59E0B';
  const accentBg = isEligible ? 'bg-emerald-50' : 'bg-amber-50';
  const accentBorder = isEligible ? 'border-emerald-200' : 'border-amber-200';
  const accentTextLight = isEligible ? 'text-emerald-600' : 'text-amber-600';

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
      {/* Header */}
      <div className="px-6 py-5 border-b border-gray-100 flex items-center justify-between">
        <h3 className="text-base font-bold text-gray-900 flex items-center gap-2">
          <BookOpenCheck className="w-5 h-5 text-brand-primary-blue" />
          3rd Professional Exam Eligibility
        </h3>
        <div
          className={`
            inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold border transition-colors
            ${isEligible
              ? 'bg-emerald-50 text-emerald-700 border-emerald-200'
              : 'bg-red-50 text-red-700 border-red-200'
            }
          `}
        >
          {isEligible ? (
            <ShieldCheck className="w-3.5 h-3.5" />
          ) : (
            <AlertTriangle className="w-3.5 h-3.5" />
          )}
          Status: {isEligible ? 'Eligible' : 'At Risk'}
        </div>
      </div>

      {/* Body */}
      <div className="p-6">
        {/* Circular Gauge + context */}
        <div className="flex flex-col items-center mb-8">
          <div className="relative w-[148px] h-[148px]">
            <svg
              className="w-full h-full -rotate-90"
              viewBox="0 0 132 132"
            >
              {/* Track */}
              <circle
                cx="66"
                cy="66"
                r={RADIUS}
                fill="none"
                stroke="#F1F5F9"
                strokeWidth="14"
              />
              {/* Progress */}
              <circle
                cx="66"
                cy="66"
                r={RADIUS}
                fill="none"
                stroke={accentColor}
                strokeWidth="14"
                strokeLinecap="round"
                strokeDasharray={CIRCUMFERENCE}
                strokeDashoffset={strokeOffset}
                className="transition-all duration-700 ease-out"
              />
            </svg>

            {/* Center label */}
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="text-3xl font-black text-gray-900 leading-none">
                {totalScore.toFixed(1)}
              </span>
              <span className="text-[11px] font-bold text-gray-400 uppercase tracking-wider mt-1">
                / 10.0
              </span>
            </div>
          </div>

          {/* Threshold indicator */}
          <p className="text-xs font-semibold text-gray-500 mt-4 flex items-center gap-1.5">
            <Info className="w-3.5 h-3.5" />
            Minimum required: <span className="font-black text-gray-700">6.0</span> Formative Marks
          </p>
        </div>

        {/* Breakdown Stats */}
        <div className="grid grid-cols-2 gap-4">
          {/* Term Exams */}
          <div className={`rounded-xl p-4 border ${accentBorder} ${accentBg} relative overflow-hidden`}>
            <div className="flex items-center gap-2 mb-3">
              <BookOpenCheck className={`w-4 h-4 ${accentTextLight}`} />
              <span className={`text-[11px] font-bold uppercase tracking-wider ${accentTextLight}`}>
                Term Exams
              </span>
            </div>
            <div className="flex items-baseline gap-1.5">
              <span className="text-2xl font-black text-gray-900">{termExamScore.toFixed(1)}</span>
              <span className="text-sm font-bold text-gray-400">/ 5.0</span>
            </div>
            {/* Mini progress bar */}
            <div className="mt-3 w-full bg-white/80 rounded-full h-1.5">
              <div
                className="h-1.5 rounded-full transition-all duration-500"
                style={{
                  width: `${(termExamScore / 5) * 100}%`,
                  backgroundColor: accentColor,
                }}
              />
            </div>
          </div>

          {/* Attendance */}
          <div className={`rounded-xl p-4 border ${accentBorder} ${accentBg} relative overflow-hidden`}>
            <div className="flex items-center gap-2 mb-3">
              <CalendarCheck className={`w-4 h-4 ${accentTextLight}`} />
              <span className={`text-[11px] font-bold uppercase tracking-wider ${accentTextLight}`}>
                Class Attendance
              </span>
            </div>
            <div className="flex items-baseline gap-1.5">
              <span className="text-2xl font-black text-gray-900">{attendancePercent}%</span>
              <span className="text-xs font-bold text-gray-400 ml-1">
                ({attendanceScore.toFixed(1)} / 5.0)
              </span>
            </div>
            {/* Mini progress bar */}
            <div className="mt-3 w-full bg-white/80 rounded-full h-1.5">
              <div
                className="h-1.5 rounded-full transition-all duration-500"
                style={{
                  width: `${(attendanceScore / 5) * 100}%`,
                  backgroundColor: accentColor,
                }}
              />
            </div>
            {attendancePercent <= 75 && (
              <p className="mt-2 text-[10px] font-bold text-red-600 flex items-center gap-1">
                <AlertTriangle className="w-3 h-3" /> Below 75% threshold
              </p>
            )}
          </div>
        </div>

        {/* Contextual message */}
        {!isEligible && (
          <div className="mt-5 bg-amber-50 border border-amber-200 rounded-lg p-3.5 flex items-start gap-2.5">
            <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
            <p className="text-xs font-medium text-amber-800 leading-relaxed">
              You need <strong className="font-black">{(6 - totalScore).toFixed(1)} more marks</strong> to
              reach the eligibility threshold. Focus on upcoming term exams and
              maintaining attendance above 75%.
            </p>
          </div>
        )}

        {isEligible && (
          <div className="mt-5 bg-emerald-50 border border-emerald-200 rounded-lg p-3.5 flex items-start gap-2.5">
            <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
            <p className="text-xs font-medium text-emerald-800 leading-relaxed">
              You have met the minimum formative marks requirement. Continue maintaining your performance for a strong final standing.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
