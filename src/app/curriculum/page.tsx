'use client';

import React, { useState } from 'react';
import {
  BookOpenCheck,
  GraduationCap,
  Award,
  Clock,
  BarChart3,
  ChevronDown,
  ChevronRight,
  AlertTriangle,
  CheckCircle2,
  FileText,
  Microscope,
  Brain,
  Target,
  Beaker,
  Stethoscope,
  ShieldCheck,
  Info,
} from 'lucide-react';

/* ── GPA Scale ─── */
const gpaScale = [
  { range: '80% and above', letter: 'A+', gp: '4.00', color: 'bg-emerald-500', text: 'text-emerald-700', bg: 'bg-emerald-50' },
  { range: '75% to < 80%',  letter: 'A',  gp: '3.75', color: 'bg-blue-500',    text: 'text-blue-700',    bg: 'bg-blue-50' },
  { range: '70% to < 75%',  letter: 'A-', gp: '3.50', color: 'bg-sky-500',     text: 'text-sky-700',     bg: 'bg-sky-50' },
  { range: '65% to < 70%',  letter: 'B+', gp: '3.25', color: 'bg-amber-500',   text: 'text-amber-700',   bg: 'bg-amber-50' },
  { range: '60% to < 65%',  letter: 'B',  gp: '3.00', color: 'bg-orange-500',  text: 'text-orange-700',  bg: 'bg-orange-50' },
  { range: 'Below 60%',     letter: 'F',  gp: '0.00', color: 'bg-[#ed1c24]',   text: 'text-[#ed1c24]',   bg: 'bg-red-50' },
];

/* ── Phase III Subjects ─── */
const subjects = [
  { name: 'Community Medicine & Public Health', written: 90, oral: 100, practical: 100, formative: 10, total: 300 },
  { name: 'Pathology',                         written: 90, oral: 100, practical: 100, formative: 10, total: 300 },
  { name: 'Microbiology',                      written: 90, oral: 100, practical: 100, formative: 10, total: 300 },
];

/* ── Marks Breakdown (Microbiology detailed) ─── */
const writtenBreakdown = [
  { label: 'MCQ (MT/F)', marks: 10, desc: 'Multiple True/False — 10 questions' },
  { label: 'MCQ (SBA)',  marks: 10, desc: 'Single Best Answer — 10 questions' },
  { label: 'SAQ',        marks: 52, desc: 'Short Answer Questions — ~75% of the 70-mark block' },
  { label: 'SEQ',        marks: 18, desc: 'Structured Essay Questions — ~25% of the 70-mark block' },
];

const practicalBreakdown = [
  { label: 'OSPE',                 marks: 50, desc: '10 stations × 5 marks — 2 min per station' },
  { label: 'Traditional Practical', marks: 40, desc: '1-2 experiments per student' },
  { label: 'Practical Notebook',   marks: 5,  desc: 'Content, regularity, cleanliness' },
  { label: 'Integrated Teaching',  marks: 5,  desc: '9 case reports across Phase III' },
];

/* ── Teaching Hours ─── */
const teachingHours = [
  { subject: 'Community Medicine & Public Health', lecture: 110, tutorial: 155, practical: 'COME', total: '265h + 30d' },
  { subject: 'Pathology', lecture: 60, tutorial: 54, practical: '27', total: '141' },
  { subject: 'Microbiology', lecture: 87, tutorial: 38, practical: '30', total: '155' },
];

/* ── Written Paper — Question Types (official BM&DC weighting) ─── */
const cognitiveBreakdown = [
  { label: 'MCQ (MTF 50% + SBA 50%)', percent: 20, color: 'bg-brand-primary-blue', icon: Target },
  { label: 'SAQ — Short Answer',       percent: 52, color: 'bg-emerald-500',        icon: FileText },
  { label: 'SEQ — Structured Essay',   percent: 18, color: 'bg-amber-500',          icon: BookOpenCheck },
  { label: 'Formative Assessment',     percent: 10, color: 'bg-violet-500',         icon: BarChart3 },
];

/* ── Eligibility Requirements ─── */
const eligibilityReqs = [
  { label: 'Passed the Second Professional examination', icon: CheckCircle2 },
  { label: 'Complete all Item Card topics',          icon: CheckCircle2 },
  { label: '≥ 75% attendance in all class categories', icon: CheckCircle2 },
  { label: 'Pass all term examinations',              icon: CheckCircle2 },
  { label: 'Minimum 6/10 formative marks',            icon: CheckCircle2 },
  { label: 'Complete integrated teaching assignments', icon: CheckCircle2 },
];

/* ── Formative Scale ─── */
const formativeScale = [
  { range: '≥ 80%',       marks: '5.0' },
  { range: '75% – 79%',   marks: '4.5' },
  { range: '70% – 74%',   marks: '4.0' },
  { range: '65% – 69%',   marks: '3.5' },
  { range: '60% – 64%',   marks: '3.0' },
];

const attendanceScale = [
  { category: 'General Classes', ranges: [{ r: '≥ 90%', m: '3' }, { r: '80–89%', m: '2' }, { r: '75–79%', m: '1' }, { r: '< 75%', m: 'Ineligible' }] },
  { category: 'Integrated Teaching', ranges: [{ r: '≥ 90%', m: '1' }, { r: '75–89%', m: '0.5' }, { r: '< 75%', m: 'Ineligible' }] },
  { category: 'Generic Topics', ranges: [{ r: 'Mandatory', m: '1' }] },
];

export default function CurriculumGuidePage() {
  const [expandedSection, setExpandedSection] = useState<string | null>('marks');

  const toggle = (id: string) => setExpandedSection(expandedSection === id ? null : id);

  return (
    <div className="flex flex-col gap-6 w-full h-full pb-10">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
        <div className="flex items-center gap-2.5">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-brand-primary-blue to-blue-700 flex items-center justify-center shadow-md">
            <BookOpenCheck className="w-5 h-5 text-white" />
          </div>
          <div>
            <h1 className="text-xl font-black text-gray-900 tracking-tight">Curriculum & Exam Guide</h1>
            <p className="text-xs font-medium text-gray-400">Third Professional MBBS — Phase III Examination Structure</p>
          </div>
        </div>
        <span className="px-3 py-2 text-xs font-bold text-brand-primary-blue bg-blue-50 rounded-lg border border-blue-100">
          Total Phase III Marks: 900
        </span>
      </div>

      {/* GPA Scale Card */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="px-6 py-5 border-b border-gray-100">
          <h2 className="text-base font-bold text-gray-900 flex items-center gap-2">
            <Award className="w-5 h-5 text-amber-500" />
            Official GPA Grading Scale
          </h2>
          <p className="text-xs text-gray-500 font-medium mt-0.5">As defined by BMDC for Third Professional Examination</p>
        </div>
        <div className="p-6">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {gpaScale.map((grade) => (
              <div key={grade.letter} className={`${grade.bg} rounded-xl p-4 text-center border border-gray-100`}>
                <div className={`w-10 h-10 rounded-full ${grade.color} text-white font-black text-sm flex items-center justify-center mx-auto mb-2`}>
                  {grade.letter}
                </div>
                <p className="text-lg font-black text-gray-900">{grade.gp}</p>
                <p className="text-[10px] font-bold text-gray-500 mt-0.5">{grade.range}</p>
              </div>
            ))}
          </div>
          <div className="mt-4 p-3 bg-amber-50 border border-amber-200 rounded-xl flex items-start gap-2">
            <Info className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
            <p className="text-xs font-medium text-amber-800">
              Pass marks: <strong>60% of total marks</strong>. Students must pass Written, Oral, and Practical separately.
            </p>
          </div>
        </div>
      </div>

      {/* Subjects & Marks Distribution */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="px-6 py-5 border-b border-gray-100">
          <h2 className="text-base font-bold text-gray-900 flex items-center gap-2">
            <FileText className="w-5 h-5 text-brand-primary-blue" />
            Phase III Examination — Marks Distribution
          </h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-gray-50/70 border-b border-gray-100">
                <th className="px-6 py-3 text-[11px] font-bold text-gray-400 uppercase tracking-wider">Subject</th>
                <th className="px-4 py-3 text-[11px] font-bold text-gray-400 uppercase tracking-wider text-center">Written</th>
                <th className="px-4 py-3 text-[11px] font-bold text-gray-400 uppercase tracking-wider text-center">Oral (SOE)</th>
                <th className="px-4 py-3 text-[11px] font-bold text-gray-400 uppercase tracking-wider text-center">Practical</th>
                <th className="px-4 py-3 text-[11px] font-bold text-gray-400 uppercase tracking-wider text-center">Formative</th>
                <th className="px-4 py-3 text-[11px] font-bold text-gray-400 uppercase tracking-wider text-center">Total</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {subjects.map((subj) => (
                <tr key={subj.name} className="hover:bg-slate-50 transition-colors">
                  <td className="px-6 py-4"><span className="text-sm font-bold text-gray-900">{subj.name}</span></td>
                  <td className="px-4 py-4 text-center"><span className="text-sm font-bold text-brand-primary-blue">{subj.written}</span></td>
                  <td className="px-4 py-4 text-center"><span className="text-sm font-bold text-emerald-600">{subj.oral}</span></td>
                  <td className="px-4 py-4 text-center"><span className="text-sm font-bold text-amber-600">{subj.practical}</span></td>
                  <td className="px-4 py-4 text-center"><span className="text-sm font-bold text-violet-600">{subj.formative}</span></td>
                  <td className="px-4 py-4 text-center"><span className="text-base font-black text-gray-900">{subj.total}</span></td>
                </tr>
              ))}
              <tr className="bg-gray-50 font-bold">
                <td className="px-6 py-4 text-sm font-black text-gray-900">Grand Total</td>
                <td className="px-4 py-4 text-center text-sm font-black text-brand-primary-blue">270</td>
                <td className="px-4 py-4 text-center text-sm font-black text-emerald-600">300</td>
                <td className="px-4 py-4 text-center text-sm font-black text-amber-600">300</td>
                <td className="px-4 py-4 text-center text-sm font-black text-violet-600">30</td>
                <td className="px-4 py-4 text-center text-lg font-black text-gray-900">900</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Detailed Breakdown Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Written Exam Breakdown */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="px-6 py-5 border-b border-gray-100">
            <h2 className="text-base font-bold text-gray-900 flex items-center gap-2">
              <FileText className="w-5 h-5 text-brand-primary-blue" />
              Written Exam Breakdown
            </h2>
            <p className="text-xs text-gray-500 font-medium mt-0.5">Per subject — 90 marks (MCQ 20 + SAQ/SEQ 70)</p>
          </div>
          <div className="p-5 space-y-3">
            {writtenBreakdown.map((item) => (
              <div key={item.label} className="flex items-center justify-between p-3 bg-blue-50/50 rounded-lg border border-blue-100/50">
                <div>
                  <p className="text-sm font-bold text-gray-900">{item.label}</p>
                  <p className="text-[11px] text-gray-500 mt-0.5">{item.desc}</p>
                </div>
                <span className="text-lg font-black text-brand-primary-blue">{item.marks}</span>
              </div>
            ))}
            <div className="p-3 bg-violet-50 rounded-lg border border-violet-100 text-center">
              <span className="text-xs font-bold text-violet-700">+ Formative Assessment: 10 marks</span>
            </div>
          </div>
        </div>

        {/* Practical Exam Breakdown */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="px-6 py-5 border-b border-gray-100">
            <h2 className="text-base font-bold text-gray-900 flex items-center gap-2">
              <Beaker className="w-5 h-5 text-amber-500" />
              Practical Exam Breakdown
            </h2>
            <p className="text-xs text-gray-500 font-medium mt-0.5">Per subject — 100 marks</p>
          </div>
          <div className="p-5 space-y-3">
            {practicalBreakdown.map((item) => (
              <div key={item.label} className="flex items-center justify-between p-3 bg-amber-50/50 rounded-lg border border-amber-100/50">
                <div>
                  <p className="text-sm font-bold text-gray-900">{item.label}</p>
                  <p className="text-[11px] text-gray-500 mt-0.5">{item.desc}</p>
                </div>
                <span className="text-lg font-black text-amber-600">{item.marks}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Teaching Hours & Cognitive Domain */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Teaching Hours */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="px-6 py-5 border-b border-gray-100">
            <h2 className="text-base font-bold text-gray-900 flex items-center gap-2">
              <Clock className="w-5 h-5 text-violet-600" />
              Phase III Teaching Hours
            </h2>
            <p className="text-xs text-gray-500 font-medium mt-0.5">Lecture / Tutorial / Practical hours per subject</p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-gray-50/70 border-b border-gray-100">
                  <th className="px-5 py-2.5 text-[10px] font-bold text-gray-400 uppercase tracking-wider">Subject</th>
                  <th className="px-2 py-2.5 text-[10px] font-bold text-gray-400 uppercase tracking-wider text-center">Lec</th>
                  <th className="px-2 py-2.5 text-[10px] font-bold text-gray-400 uppercase tracking-wider text-center">Tut</th>
                  <th className="px-2 py-2.5 text-[10px] font-bold text-gray-400 uppercase tracking-wider text-center">Prac</th>
                  <th className="px-3 py-2.5 text-[10px] font-bold text-gray-400 uppercase tracking-wider text-center">Total</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {teachingHours.map((s) => (
                  <tr key={s.subject} className="hover:bg-slate-50">
                    <td className="px-5 py-3 text-xs font-bold text-gray-900">{s.subject}</td>
                    <td className="px-2 py-3 text-center text-sm font-bold text-brand-primary-blue">{s.lecture}</td>
                    <td className="px-2 py-3 text-center text-sm font-bold text-emerald-600">{s.tutorial}</td>
                    <td className="px-2 py-3 text-center text-sm font-bold text-amber-600">{s.practical}</td>
                    <td className="px-3 py-3 text-center text-sm font-black text-gray-900">{s.total}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="px-6 py-3 bg-gray-50 text-center border-t border-gray-100">
            <span className="text-[11px] font-bold text-gray-500">+ 18 hrs Integrated Teaching · COME = 30-day Community-Based Medical Education</span>
          </div>
        </div>

        {/* Cognitive Domain */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="px-6 py-5 border-b border-gray-100">
            <h2 className="text-base font-bold text-gray-900 flex items-center gap-2">
              <Brain className="w-5 h-5 text-rose-500" />
              Written Paper — Question Types
            </h2>
            <p className="text-xs text-gray-500 font-medium mt-0.5">Composition of the 100-mark written paper (MCQ 20% · SAQ/SEQ 70% · Formative 10%)</p>
          </div>
          <div className="p-6 space-y-4">
            {cognitiveBreakdown.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.label} className="flex items-center gap-4">
                  <div className={`w-11 h-11 rounded-xl ${item.color}/10 flex items-center justify-center`}>
                    <Icon className={`w-5 h-5 ${item.color === 'bg-brand-primary-blue' ? 'text-brand-primary-blue' : item.color === 'bg-emerald-500' ? 'text-emerald-600' : item.color === 'bg-violet-500' ? 'text-violet-600' : 'text-amber-600'}`} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-sm font-bold text-gray-700">{item.label}</span>
                      <span className="text-lg font-black text-gray-900">{item.percent}%</span>
                    </div>
                    <div className="h-2.5 bg-gray-100 rounded-full overflow-hidden">
                      <div className={`h-full rounded-full ${item.color}`} style={{ width: `${item.percent}%` }} />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Formative Assessment Calculation */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="px-6 py-5 border-b border-gray-100">
          <h2 className="text-base font-bold text-gray-900 flex items-center gap-2">
            <BarChart3 className="w-5 h-5 text-emerald-600" />
            Formative Assessment — How Your 10 Marks Are Calculated
          </h2>
        </div>
        <div className="p-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Term Exam Marks */}
            <div>
              <h3 className="text-sm font-bold text-gray-900 mb-3 flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-brand-primary-blue text-white text-[10px] font-bold flex items-center justify-center">5</span>
                From Term Exams (Average of 2 terms)
              </h3>
              <div className="space-y-2">
                {formativeScale.map((item) => (
                  <div key={item.range} className="flex items-center justify-between p-2.5 bg-blue-50/50 rounded-lg border border-blue-100/50">
                    <span className="text-xs font-bold text-gray-700">{item.range} marks</span>
                    <span className="text-sm font-black text-brand-primary-blue">{item.marks}/5</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Attendance Marks */}
            <div>
              <h3 className="text-sm font-bold text-gray-900 mb-3 flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-emerald-600 text-white text-[10px] font-bold flex items-center justify-center">5</span>
                From Attendance
              </h3>
              {attendanceScale.map((cat) => (
                <div key={cat.category} className="mb-3">
                  <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-1.5">{cat.category}</p>
                  <div className="space-y-1.5">
                    {cat.ranges.map((r, idx) => (
                      <div key={idx} className="flex items-center justify-between p-2 bg-emerald-50/50 rounded-lg border border-emerald-100/50">
                        <span className="text-xs font-bold text-gray-700">{r.r}</span>
                        <span className={`text-xs font-black ${r.m === 'Ineligible' ? 'text-[#ed1c24]' : 'text-emerald-600'}`}>{r.m}{r.m !== 'Ineligible' ? ' marks' : ''}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Eligibility Requirements */}
      <div className="bg-gradient-to-r from-brand-primary-blue to-blue-700 rounded-2xl p-6 shadow-lg">
        <h2 className="text-lg font-bold text-white flex items-center gap-2 mb-4">
          <ShieldCheck className="w-6 h-6" />
          Eligibility Requirements — Third Professional Examination
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {eligibilityReqs.map((req, idx) => (
            <div key={idx} className="flex items-center gap-3 p-3 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
              <req.icon className="w-5 h-5 text-emerald-300 shrink-0" />
              <span className="text-sm font-medium text-white/90">{req.label}</span>
            </div>
          ))}
          <div className="flex items-center gap-3 p-3 bg-[#ed1c24]/20 backdrop-blur-sm rounded-xl border border-[#ed1c24]/30">
            <AlertTriangle className="w-5 h-5 text-[#ed1c24] shrink-0" />
            <span className="text-sm font-bold text-white">Failing any requirement = <strong>Ineligible</strong></span>
          </div>
        </div>
      </div>
    </div>
  );
}
