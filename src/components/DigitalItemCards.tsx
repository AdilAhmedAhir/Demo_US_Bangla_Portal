'use client';

import React, { useState } from 'react';
import { CheckCircle2, Clock, XCircle, Microscope, FlaskConical, AlertTriangle } from 'lucide-react';

type SubjectStatus = 'Cleared' | 'Pending' | 'Failed';

interface Subject {
  name: string;
  status: SubjectStatus;
  examDate?: string;
}

interface CardData {
  label: string;
  subjects: Subject[];
}

const CARD_DATA: CardData[] = [
  {
    label: 'Card 1',
    subjects: [
      { name: 'General Bacteriology', status: 'Cleared', examDate: 'Mar 22, 2026' },
      { name: 'Systemic Bacteriology', status: 'Failed', examDate: 'Apr 05, 2026' },
      { name: 'Immunology', status: 'Pending' },
    ],
  },
  {
    label: 'Card 2',
    subjects: [
      { name: 'Parasitology', status: 'Cleared', examDate: 'Mar 18, 2026' },
      { name: 'Virology', status: 'Pending' },
      { name: 'Mycology', status: 'Cleared', examDate: 'Mar 25, 2026' },
      { name: 'Clinical Microbiology', status: 'Failed', examDate: 'Apr 08, 2026' },
    ],
  },
];

const statusConfig: Record<SubjectStatus, { icon: React.ElementType; color: string; bg: string; label: string }> = {
  Cleared: { icon: CheckCircle2, color: 'text-emerald-600', bg: 'bg-emerald-50 border-emerald-200', label: 'Cleared' },
  Pending: { icon: Clock, color: 'text-gray-400', bg: 'bg-gray-50 border-gray-200', label: 'Pending' },
  Failed:  { icon: XCircle, color: 'text-red-600', bg: 'bg-red-50 border-red-200', label: 'Failed' },
};

export default function DigitalItemCards() {
  const [activeTab, setActiveTab] = useState(0);
  const activeCard = CARD_DATA[activeTab];

  const totalSubjects = CARD_DATA.flatMap(c => c.subjects);
  const clearedCount = totalSubjects.filter(s => s.status === 'Cleared').length;
  const failedCount = totalSubjects.filter(s => s.status === 'Failed').length;
  const allCleared = totalSubjects.every(s => s.status === 'Cleared');

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
      {/* Header */}
      <div className="px-6 py-5 border-b border-gray-100 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div>
          <h3 className="text-base font-bold text-gray-900 flex items-center gap-2">
            <Microscope className="w-5 h-5 text-brand-primary-blue" />
            Microbiology — Digital Item Cards
          </h3>
          <p className="text-xs text-gray-500 font-medium mt-1">
            Clear all items across both cards to be eligible for Term Finals.
          </p>
        </div>

        {/* Summary Badge */}
        <div className={`
          inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold border shrink-0
          ${allCleared
            ? 'bg-emerald-50 text-emerald-700 border-emerald-200'
            : failedCount > 0
              ? 'bg-red-50 text-red-700 border-red-200'
              : 'bg-amber-50 text-amber-700 border-amber-200'
          }
        `}>
          {allCleared ? (
            <CheckCircle2 className="w-3.5 h-3.5" />
          ) : failedCount > 0 ? (
            <AlertTriangle className="w-3.5 h-3.5" />
          ) : (
            <Clock className="w-3.5 h-3.5" />
          )}
          {clearedCount}/{totalSubjects.length} Cleared
        </div>
      </div>

      {/* Tab Switcher */}
      <div className="px-6 pt-4 pb-0 flex gap-1 bg-gray-50/50 border-b border-gray-100">
        {CARD_DATA.map((card, idx) => {
          const isActive = activeTab === idx;
          const cardCleared = card.subjects.filter(s => s.status === 'Cleared').length;
          const cardFailed = card.subjects.some(s => s.status === 'Failed');

          return (
            <button
              key={idx}
              onClick={() => setActiveTab(idx)}
              className={`
                relative px-5 py-3 text-sm font-bold rounded-t-lg transition-all
                ${isActive
                  ? 'bg-white text-gray-900 border border-gray-200 border-b-white -mb-px shadow-sm z-10'
                  : 'text-gray-500 hover:text-gray-700 hover:bg-gray-100/80'
                }
              `}
            >
              <span className="flex items-center gap-2">
                <FlaskConical className={`w-4 h-4 ${isActive ? 'text-brand-primary-blue' : 'text-gray-400'}`} />
                {card.label}
                <span className={`
                  text-[10px] font-bold px-1.5 py-0.5 rounded-md
                  ${cardFailed
                    ? 'bg-red-100 text-red-600'
                    : cardCleared === card.subjects.length
                      ? 'bg-emerald-100 text-emerald-600'
                      : 'bg-gray-200 text-gray-500'
                  }
                `}>
                  {cardCleared}/{card.subjects.length}
                </span>
              </span>
            </button>
          );
        })}
      </div>

      {/* Subject List */}
      <div className="divide-y divide-gray-100">
        {activeCard.subjects.map((subject, idx) => {
          const config = statusConfig[subject.status];
          const StatusIcon = config.icon;
          const isEven = idx % 2 === 1;

          return (
            <div
              key={subject.name}
              className={`
                px-6 py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 transition-colors
                ${isEven ? 'bg-slate-50' : 'bg-white'}
                hover:bg-slate-100/60
              `}
            >
              {/* Left: Subject info */}
              <div className="flex items-center gap-4">
                <div className={`
                  w-9 h-9 rounded-lg flex items-center justify-center shrink-0 border
                  ${config.bg}
                `}>
                  <StatusIcon className={`w-4.5 h-4.5 ${config.color}`} />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-gray-900">{subject.name}</h4>
                  {subject.examDate && (
                    <p className="text-[11px] text-gray-400 font-medium mt-0.5">
                      Exam: {subject.examDate}
                    </p>
                  )}
                </div>
              </div>

              {/* Right: Status + Action */}
              <div className="flex items-center gap-3 sm:ml-auto pl-13 sm:pl-0">
                <span className={`
                  inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-bold border
                  ${config.bg} ${config.color}
                `}>
                  <StatusIcon className="w-3 h-3" />
                  {config.label}
                </span>

                {subject.status === 'Failed' && (
                  <button className="
                    px-3 py-1.5 text-[11px] font-bold rounded-lg
                    border border-gray-300 text-gray-600
                    hover:border-brand-accent-red hover:text-brand-accent-red hover:bg-red-50
                    active:scale-95
                    transition-all
                  ">
                    Request Makeup
                  </button>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Footer status */}
      {failedCount > 0 && (
        <div className="px-6 py-3.5 bg-red-50 border-t border-red-100 flex items-start gap-2.5">
          <AlertTriangle className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
          <p className="text-xs font-medium text-red-700 leading-relaxed">
            You have <strong className="font-black">{failedCount} failed item{failedCount > 1 ? 's' : ''}</strong> across
            your cards. Request a Makeup Exam for each to become eligible for Term Finals.
          </p>
        </div>
      )}

      {allCleared && (
        <div className="px-6 py-3.5 bg-emerald-50 border-t border-emerald-100 flex items-start gap-2.5">
          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
          <p className="text-xs font-medium text-emerald-700 leading-relaxed">
            All items cleared across both cards. You are eligible to sit for Term Finals.
          </p>
        </div>
      )}
    </div>
  );
}
