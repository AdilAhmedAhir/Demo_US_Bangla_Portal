'use client';

import React, { useState } from 'react';
import {
  Calculator,
  Users,
  CheckCircle2,
  XCircle,
  AlertTriangle,
  Download,
  ChevronDown,
  Info,
  BarChart3,
  Search,
} from 'lucide-react';

/* ── Formative Calculation Rules (from Microbiology PDF) ─── */
const termMarkScale = [
  { min: 80, max: 100, marks: 5.0 },
  { min: 75, max: 79,  marks: 4.5 },
  { min: 70, max: 74,  marks: 4.0 },
  { min: 65, max: 69,  marks: 3.5 },
  { min: 60, max: 64,  marks: 3.0 },
  { min: 0,  max: 59,  marks: 0.0 },
];

const getTermFormativeMark = (percent: number): number => {
  for (const row of termMarkScale) {
    if (percent >= row.min) return row.marks;
  }
  return 0;
};

const getAttendanceMark = (percent: number): number => {
  if (percent >= 90) return 3;
  if (percent >= 80) return 2;
  if (percent >= 75) return 1;
  return -1; // ineligible
};

const getIntegratedMark = (percent: number): number => {
  if (percent >= 90) return 1;
  if (percent >= 75) return 0.5;
  return -1; // ineligible
};

/* ── Mock Batch Data ─── */
interface StudentFormative {
  id: string;
  name: string;
  roll: number;
  term1Percent: number;
  term2Percent: number;
  generalAttendance: number;
  integratedAttendance: number;
  genericCompleted: boolean;
}

const mockStudents: StudentFormative[] = [
  { id: 'USB-2604', name: 'Adil Ahmed',       roll: 1,  term1Percent: 78, term2Percent: 82, generalAttendance: 92, integratedAttendance: 95, genericCompleted: true },
  { id: 'USB-2605', name: 'Fatima Rahman',     roll: 2,  term1Percent: 85, term2Percent: 88, generalAttendance: 96, integratedAttendance: 90, genericCompleted: true },
  { id: 'USB-2606', name: 'Hasan Mahmud',      roll: 3,  term1Percent: 62, term2Percent: 68, generalAttendance: 78, integratedAttendance: 80, genericCompleted: true },
  { id: 'USB-2607', name: 'Nusrat Jahan',      roll: 4,  term1Percent: 90, term2Percent: 92, generalAttendance: 98, integratedAttendance: 100, genericCompleted: true },
  { id: 'USB-2608', name: 'Rafi Islam',        roll: 5,  term1Percent: 55, term2Percent: 58, generalAttendance: 72, integratedAttendance: 70, genericCompleted: false },
  { id: 'USB-2609', name: 'Sadia Akter',       roll: 6,  term1Percent: 74, term2Percent: 76, generalAttendance: 85, integratedAttendance: 88, genericCompleted: true },
  { id: 'USB-2610', name: 'Tanvir Hossain',    roll: 7,  term1Percent: 70, term2Percent: 72, generalAttendance: 90, integratedAttendance: 92, genericCompleted: true },
  { id: 'USB-2611', name: 'Rabeya Khatun',     roll: 8,  term1Percent: 68, term2Percent: 75, generalAttendance: 88, integratedAttendance: 85, genericCompleted: true },
  { id: 'USB-2612', name: 'Imran Chowdhury',   roll: 9,  term1Percent: 82, term2Percent: 79, generalAttendance: 94, integratedAttendance: 91, genericCompleted: true },
  { id: 'USB-2613', name: 'Maliha Tasnim',     roll: 10, term1Percent: 60, term2Percent: 63, generalAttendance: 76, integratedAttendance: 74, genericCompleted: true },
];

export default function FormativeCalculatorPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedBatch, setSelectedBatch] = useState('Batch 16');

  const filteredStudents = mockStudents.filter(
    (s) => s.name.toLowerCase().includes(searchTerm.toLowerCase()) || s.id.includes(searchTerm)
  );

  const calculateFormative = (student: StudentFormative) => {
    const term1Mark = getTermFormativeMark(student.term1Percent);
    const term2Mark = getTermFormativeMark(student.term2Percent);
    const avgTermMark = (term1Mark + term2Mark) / 2;
    const termMarks5 = Math.min(avgTermMark, 5);

    const generalMark = getAttendanceMark(student.generalAttendance);
    const integratedMark = getIntegratedMark(student.integratedAttendance);
    const genericMark = student.genericCompleted ? 1 : 0;

    const isIneligible = generalMark === -1 || integratedMark === -1;
    const attendanceTotal = isIneligible ? -1 : generalMark + (integratedMark === -1 ? 0 : integratedMark) + genericMark;
    const total = isIneligible ? -1 : termMarks5 + attendanceTotal;
    const eligible = !isIneligible && total >= 6;

    return { term1Mark, term2Mark, avgTermMark, termMarks5, generalMark, integratedMark, genericMark, attendanceTotal, total, eligible, isIneligible };
  };

  const stats = {
    total: filteredStudents.length,
    eligible: filteredStudents.filter((s) => calculateFormative(s).eligible).length,
    ineligible: filteredStudents.filter((s) => !calculateFormative(s).eligible).length,
  };

  return (
    <div className="flex flex-col gap-6 w-full h-full pb-10">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
        <div className="flex items-center gap-2.5">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-violet-500 to-purple-700 flex items-center justify-center shadow-md">
            <Calculator className="w-5 h-5 text-white" />
          </div>
          <div>
            <h1 className="text-xl font-black text-gray-900 tracking-tight">Formative Assessment Calculator</h1>
            <p className="text-xs font-medium text-gray-400">Auto-calculate formative marks using BMDC rules — Microbiology</p>
          </div>
        </div>
        <button className="px-4 py-2.5 text-xs font-bold rounded-lg bg-brand-primary-blue text-white hover:bg-brand-primary-blue/90 transition-all flex items-center gap-2 shadow-sm">
          <Download className="w-3.5 h-3.5" />
          Export Report
        </button>
      </div>

      {/* Rule Summary */}
      <div className="p-4 bg-blue-50 border border-blue-200 rounded-xl">
        <p className="text-xs font-bold text-brand-primary-blue mb-2">Formative Marks = Term Exams (5) + Attendance (5) = 10 Total</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-[11px] text-gray-600">
          <div><strong>Term Exams (5 marks):</strong> Average of 2 terms → ≥80%=5, 75-79%=4.5, 70-74%=4, 65-69%=3.5, 60-64%=3</div>
          <div><strong>Attendance (5 marks):</strong> General (3) + Integrated (1) + Generic (1). Below 75% = Ineligible</div>
        </div>
        <p className="text-[11px] text-[#ed1c24] font-bold mt-2">
          ⚠ Minimum 6 marks required for exam eligibility. Must score ≥3 from terms + ≥3 from attendance.
        </p>
      </div>

      {/* Stats Widgets */}
      <div className="grid grid-cols-3 gap-4">
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 text-center">
          <p className="text-2xl font-black text-gray-900">{stats.total}</p>
          <p className="text-[10px] font-bold text-gray-400 uppercase">Total Students</p>
        </div>
        <div className="bg-emerald-50 rounded-xl border border-emerald-200 p-4 text-center">
          <p className="text-2xl font-black text-emerald-700">{stats.eligible}</p>
          <p className="text-[10px] font-bold text-emerald-600 uppercase">Eligible</p>
        </div>
        <div className="bg-red-50 rounded-xl border border-red-200 p-4 text-center">
          <p className="text-2xl font-black text-[#ed1c24]">{stats.ineligible}</p>
          <p className="text-[10px] font-bold text-[#ed1c24] uppercase">At Risk / Ineligible</p>
        </div>
      </div>

      {/* Filters */}
      <div className="flex items-center gap-3">
        <div className="relative flex-1 max-w-sm">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <input
            type="text"
            placeholder="Search by name or ID..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 text-sm font-medium bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-primary-blue/20 focus:border-brand-primary-blue"
          />
        </div>
        <div className="relative">
          <select className="pl-4 pr-8 py-2.5 text-sm font-bold bg-white border border-gray-200 rounded-xl appearance-none focus:outline-none focus:ring-2 focus:ring-brand-primary-blue/20">
            <option>Batch 16</option>
            <option>Batch 15</option>
          </select>
          <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-gray-400 pointer-events-none" />
        </div>
      </div>

      {/* Results Table */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-gray-50/70 border-b border-gray-100">
                <th className="px-4 py-3 text-[10px] font-bold text-gray-400 uppercase tracking-wider">Roll</th>
                <th className="px-4 py-3 text-[10px] font-bold text-gray-400 uppercase tracking-wider">Student</th>
                <th className="px-3 py-3 text-[10px] font-bold text-gray-400 uppercase tracking-wider text-center">Term 1</th>
                <th className="px-3 py-3 text-[10px] font-bold text-gray-400 uppercase tracking-wider text-center">Term 2</th>
                <th className="px-3 py-3 text-[10px] font-bold text-blue-500 uppercase tracking-wider text-center">Term (5)</th>
                <th className="px-3 py-3 text-[10px] font-bold text-gray-400 uppercase tracking-wider text-center">Gen. Att.</th>
                <th className="px-3 py-3 text-[10px] font-bold text-gray-400 uppercase tracking-wider text-center">Int. Att.</th>
                <th className="px-3 py-3 text-[10px] font-bold text-gray-400 uppercase tracking-wider text-center">Gen.</th>
                <th className="px-3 py-3 text-[10px] font-bold text-emerald-500 uppercase tracking-wider text-center">Att. (5)</th>
                <th className="px-3 py-3 text-[10px] font-bold text-gray-900 uppercase tracking-wider text-center font-black">Total</th>
                <th className="px-4 py-3 text-[10px] font-bold text-gray-400 uppercase tracking-wider text-center">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {filteredStudents.map((student) => {
                const f = calculateFormative(student);
                return (
                  <tr key={student.id} className={`hover:bg-slate-50 transition-colors ${!f.eligible ? 'bg-red-50/30' : ''}`}>
                    <td className="px-4 py-3 text-xs font-bold text-gray-400">{student.roll}</td>
                    <td className="px-4 py-3">
                      <p className="text-sm font-bold text-gray-900">{student.name}</p>
                      <p className="text-[10px] text-gray-400">{student.id}</p>
                    </td>
                    <td className="px-3 py-3 text-center text-xs font-bold text-gray-700">{student.term1Percent}%</td>
                    <td className="px-3 py-3 text-center text-xs font-bold text-gray-700">{student.term2Percent}%</td>
                    <td className="px-3 py-3 text-center text-sm font-black text-brand-primary-blue">{f.termMarks5.toFixed(1)}</td>
                    <td className="px-3 py-3 text-center text-xs font-bold text-gray-700">{student.generalAttendance}%</td>
                    <td className="px-3 py-3 text-center text-xs font-bold text-gray-700">{student.integratedAttendance}%</td>
                    <td className="px-3 py-3 text-center text-xs font-bold text-gray-700">{student.genericCompleted ? '✓' : '✗'}</td>
                    <td className="px-3 py-3 text-center text-sm font-black text-emerald-600">
                      {f.isIneligible ? <span className="text-[#ed1c24]">N/A</span> : f.attendanceTotal.toFixed(1)}
                    </td>
                    <td className="px-3 py-3 text-center">
                      <span className={`text-base font-black ${f.isIneligible ? 'text-[#ed1c24]' : f.total >= 6 ? 'text-gray-900' : 'text-amber-600'}`}>
                        {f.isIneligible ? '—' : f.total.toFixed(1)}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-center">
                      {f.eligible ? (
                        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[9px] font-bold bg-emerald-50 text-emerald-700 border border-emerald-200">
                          <CheckCircle2 className="w-2.5 h-2.5" /> Eligible
                        </span>
                      ) : f.isIneligible ? (
                        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[9px] font-bold bg-red-50 text-[#ed1c24] border border-red-200">
                          <XCircle className="w-2.5 h-2.5" /> Ineligible
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[9px] font-bold bg-amber-50 text-amber-700 border border-amber-200">
                          <AlertTriangle className="w-2.5 h-2.5" /> At Risk
                        </span>
                      )}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
