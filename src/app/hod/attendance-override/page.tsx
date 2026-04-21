'use client';

import React, { useState } from 'react';
import {
  ShieldAlert,
  Search,
  CheckCircle2,
  Clock,
  AlertTriangle,
  ChevronDown,
  Save,
  FileText,
  UserCheck,
  Info,
  History,
  Calendar,
} from 'lucide-react';

/* ── Mock Students ─── */
const students = [
  { id: 'USB-2604', name: 'Adil Ahmed',     roll: 1,  general: 87, integrated: 92, generic: true,  status: 'eligible' as const },
  { id: 'USB-2605', name: 'Fatima Rahman',   roll: 2,  general: 96, integrated: 95, generic: true,  status: 'eligible' as const },
  { id: 'USB-2606', name: 'Hasan Mahmud',    roll: 3,  general: 73, integrated: 80, generic: true,  status: 'at-risk' as const },
  { id: 'USB-2607', name: 'Nusrat Jahan',    roll: 4,  general: 98, integrated: 100, generic: true, status: 'eligible' as const },
  { id: 'USB-2608', name: 'Rafi Islam',      roll: 5,  general: 68, integrated: 70, generic: false, status: 'ineligible' as const },
  { id: 'USB-2609', name: 'Sadia Akter',     roll: 6,  general: 85, integrated: 88, generic: true,  status: 'eligible' as const },
  { id: 'USB-2610', name: 'Tanvir Hossain',  roll: 7,  general: 76, integrated: 82, generic: true,  status: 'at-risk' as const },
  { id: 'USB-2611', name: 'Rabeya Khatun',   roll: 8,  general: 88, integrated: 85, generic: true,  status: 'eligible' as const },
];

/* ── Override Audit Log ─── */
const auditLog = [
  { id: 'OVR-001', studentId: 'USB-2606', studentName: 'Hasan Mahmud', date: 'Apr 18, 2026', category: 'General Classes', from: '73%', to: '76%', reason: 'Medical leave — 5 days approved (hospitalization)', overriddenBy: 'Dr. Amin Chowdhury (HOD)', approvedBy: 'Principal' },
  { id: 'OVR-002', studentId: 'USB-2610', studentName: 'Tanvir Hossain', date: 'Apr 15, 2026', category: 'Integrated Teaching', from: '72%', to: '78%', reason: 'Official sports duty — represented college at inter-medical cricket', overriddenBy: 'Dr. Amin Chowdhury (HOD)', approvedBy: 'Principal' },
  { id: 'OVR-003', studentId: 'USB-2608', studentName: 'Rafi Islam', date: 'Apr 10, 2026', category: 'General Classes', from: '65%', to: '68%', reason: 'Family emergency — death in family, 3 days leave', overriddenBy: 'Dr. Amin Chowdhury (HOD)', approvedBy: 'Pending' },
];

const overrideReasons = [
  'Medical leave — verified by medical certificate',
  'Official college duty (sports/events/seminars)',
  'Family emergency — verified documentation',
  'Administrative error in attendance marking',
  'Exam duty / Invigilation assignment',
  'Other (specify in notes)',
];

export default function AttendanceOverridePage() {
  const [selectedStudent, setSelectedStudent] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState<'all' | 'at-risk' | 'ineligible'>('all');
  const [showOverrideForm, setShowOverrideForm] = useState(false);
  const [selectedReason, setSelectedReason] = useState('');

  const filtered = students.filter((s) => {
    const matchesSearch = s.name.toLowerCase().includes(searchTerm.toLowerCase()) || s.id.includes(searchTerm);
    const matchesFilter = filterStatus === 'all' || s.status === filterStatus;
    return matchesSearch && matchesFilter;
  });

  const atRiskCount = students.filter((s) => s.status === 'at-risk').length;
  const ineligibleCount = students.filter((s) => s.status === 'ineligible').length;

  return (
    <div className="flex flex-col gap-6 w-full h-full pb-10">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
        <div className="flex items-center gap-2.5">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-red-500 to-red-700 flex items-center justify-center shadow-md">
            <ShieldAlert className="w-5 h-5 text-white" />
          </div>
          <div>
            <h1 className="text-xl font-black text-gray-900 tracking-tight">Attendance Override</h1>
            <p className="text-xs font-medium text-gray-400">HOD Authority — Manually adjust attendance records with audit trail</p>
          </div>
        </div>
      </div>

      {/* Authority Warning */}
      <div className="p-4 bg-amber-50 border border-amber-200 rounded-xl flex items-start gap-3">
        <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
        <div>
          <p className="text-sm font-bold text-amber-800">Administrative Override Authority</p>
          <p className="text-xs text-amber-700 mt-0.5">
            All attendance overrides are permanently logged in the audit trail and require Principal approval.
            Only use for verified medical leaves, official duties, or administrative corrections.
          </p>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 text-center">
          <p className="text-2xl font-black text-gray-900">{students.length}</p>
          <p className="text-[10px] font-bold text-gray-400 uppercase">Total Students</p>
        </div>
        <div className="bg-emerald-50 rounded-xl border border-emerald-200 p-4 text-center">
          <p className="text-2xl font-black text-emerald-700">{students.length - atRiskCount - ineligibleCount}</p>
          <p className="text-[10px] font-bold text-emerald-600 uppercase">On Track (≥80%)</p>
        </div>
        <div className="bg-amber-50 rounded-xl border border-amber-200 p-4 text-center">
          <p className="text-2xl font-black text-amber-700">{atRiskCount}</p>
          <p className="text-[10px] font-bold text-amber-600 uppercase">At Risk (75-79%)</p>
        </div>
        <div className="bg-red-50 rounded-xl border border-red-200 p-4 text-center">
          <p className="text-2xl font-black text-[#ed1c24]">{ineligibleCount}</p>
          <p className="text-[10px] font-bold text-[#ed1c24] uppercase">Ineligible (&lt;75%)</p>
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
            className="w-full pl-10 pr-4 py-2.5 text-sm font-medium bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-primary-blue/20"
          />
        </div>
        <button
          onClick={() => setFilterStatus(filterStatus === 'all' ? 'at-risk' : filterStatus === 'at-risk' ? 'ineligible' : 'all')}
          className="px-4 py-2.5 text-xs font-bold rounded-xl border border-gray-200 bg-white hover:bg-gray-50 transition-all flex items-center gap-2"
        >
          <AlertTriangle className="w-3.5 h-3.5" />
          {filterStatus === 'all' ? 'All' : filterStatus === 'at-risk' ? 'At Risk Only' : 'Ineligible Only'}
        </button>
      </div>

      {/* Student Attendance Table */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-100">
          <h2 className="text-sm font-bold text-gray-900">Student Attendance Overview — Microbiology Dept.</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-gray-50/70 border-b border-gray-100">
                <th className="px-4 py-3 text-[10px] font-bold text-gray-400 uppercase tracking-wider">Roll</th>
                <th className="px-4 py-3 text-[10px] font-bold text-gray-400 uppercase tracking-wider">Student</th>
                <th className="px-4 py-3 text-[10px] font-bold text-gray-400 uppercase tracking-wider text-center">General Classes</th>
                <th className="px-4 py-3 text-[10px] font-bold text-gray-400 uppercase tracking-wider text-center">Integrated Teaching</th>
                <th className="px-4 py-3 text-[10px] font-bold text-gray-400 uppercase tracking-wider text-center">Generic Topics</th>
                <th className="px-4 py-3 text-[10px] font-bold text-gray-400 uppercase tracking-wider text-center">Status</th>
                <th className="px-4 py-3 text-[10px] font-bold text-gray-400 uppercase tracking-wider text-center">Override</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {filtered.map((s) => (
                <tr key={s.id} className={`hover:bg-slate-50 transition-colors ${s.status === 'ineligible' ? 'bg-red-50/30' : s.status === 'at-risk' ? 'bg-amber-50/30' : ''}`}>
                  <td className="px-4 py-3 text-xs font-bold text-gray-400">{s.roll}</td>
                  <td className="px-4 py-3">
                    <p className="text-sm font-bold text-gray-900">{s.name}</p>
                    <p className="text-[10px] text-gray-400">{s.id}</p>
                  </td>
                  <td className="px-4 py-3 text-center">
                    <span className={`text-sm font-black ${s.general >= 75 ? 'text-gray-900' : 'text-[#ed1c24]'}`}>{s.general}%</span>
                    {s.general < 75 && <p className="text-[9px] text-[#ed1c24] font-bold">Below threshold</p>}
                  </td>
                  <td className="px-4 py-3 text-center">
                    <span className={`text-sm font-black ${s.integrated >= 75 ? 'text-gray-900' : 'text-[#ed1c24]'}`}>{s.integrated}%</span>
                  </td>
                  <td className="px-4 py-3 text-center">
                    {s.generic ? (
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 mx-auto" />
                    ) : (
                      <span className="text-[10px] font-bold text-[#ed1c24]">Missing</span>
                    )}
                  </td>
                  <td className="px-4 py-3 text-center">
                    <span className={`text-[10px] font-bold px-2.5 py-1 rounded-full ${
                      s.status === 'eligible' ? 'bg-emerald-50 text-emerald-700 border border-emerald-200' :
                      s.status === 'at-risk' ? 'bg-amber-50 text-amber-700 border border-amber-200' :
                      'bg-red-50 text-[#ed1c24] border border-red-200'
                    }`}>
                      {s.status === 'eligible' ? 'Eligible' : s.status === 'at-risk' ? 'At Risk' : 'Ineligible'}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-center">
                    <button
                      onClick={() => { setSelectedStudent(s.id); setShowOverrideForm(true); }}
                      className="px-3 py-1.5 text-[10px] font-bold rounded-lg bg-brand-primary-blue/10 text-brand-primary-blue hover:bg-brand-primary-blue/20 transition-all"
                    >
                      Override
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Override Form Modal */}
      {showOverrideForm && selectedStudent && (
        <div className="bg-white rounded-xl shadow-sm border-2 border-brand-primary-blue overflow-hidden">
          <div className="px-6 py-4 bg-brand-primary-blue/5 border-b border-brand-primary-blue/20 flex items-center justify-between">
            <h3 className="text-sm font-bold text-gray-900 flex items-center gap-2">
              <UserCheck className="w-4 h-4 text-brand-primary-blue" />
              Override Attendance — {students.find(s => s.id === selectedStudent)?.name}
            </h3>
            <button onClick={() => setShowOverrideForm(false)} className="text-xs font-bold text-gray-400 hover:text-gray-600">Close</button>
          </div>
          <div className="p-6 grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label className="block text-[11px] font-bold text-gray-500 uppercase tracking-wider mb-2">Category</label>
              <select className="w-full px-4 py-2.5 text-sm font-medium bg-gray-50 border border-gray-200 rounded-xl appearance-none">
                <option>General Classes</option>
                <option>Integrated Teaching</option>
                <option>Generic Topics</option>
              </select>
            </div>
            <div>
              <label className="block text-[11px] font-bold text-gray-500 uppercase tracking-wider mb-2">New Attendance %</label>
              <input type="number" placeholder="e.g., 76" className="w-full px-4 py-2.5 text-sm font-medium bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-primary-blue/20" />
            </div>
            <div className="sm:col-span-2">
              <label className="block text-[11px] font-bold text-gray-500 uppercase tracking-wider mb-2">Reason for Override</label>
              <select
                value={selectedReason}
                onChange={(e) => setSelectedReason(e.target.value)}
                className="w-full px-4 py-2.5 text-sm font-medium bg-gray-50 border border-gray-200 rounded-xl appearance-none mb-2"
              >
                <option value="">Select reason...</option>
                {overrideReasons.map((r) => <option key={r} value={r}>{r}</option>)}
              </select>
              <textarea placeholder="Additional notes..." rows={2} className="w-full px-4 py-2.5 text-sm bg-gray-50 border border-gray-200 rounded-xl resize-none focus:outline-none focus:ring-2 focus:ring-brand-primary-blue/20" />
            </div>
            <div className="sm:col-span-2 flex justify-end gap-3">
              <button onClick={() => setShowOverrideForm(false)} className="px-5 py-2.5 text-xs font-bold rounded-xl border border-gray-200 text-gray-600 hover:bg-gray-50">Cancel</button>
              <button onClick={() => setShowOverrideForm(false)} className="px-5 py-2.5 text-xs font-bold rounded-xl bg-brand-primary-blue text-white hover:bg-brand-primary-blue/90 flex items-center gap-2 shadow-sm">
                <Save className="w-3.5 h-3.5" />
                Submit Override (Requires Principal Approval)
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Audit Trail */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-100">
          <h2 className="text-sm font-bold text-gray-900 flex items-center gap-2">
            <History className="w-4 h-4 text-gray-400" />
            Override Audit Trail
          </h2>
        </div>
        <div className="divide-y divide-gray-50">
          {auditLog.map((entry) => (
            <div key={entry.id} className="px-6 py-4 flex items-start gap-4 hover:bg-slate-50 transition-colors">
              <div className="w-9 h-9 rounded-xl bg-blue-50 flex items-center justify-center shrink-0">
                <FileText className="w-4 h-4 text-brand-primary-blue" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="text-sm font-bold text-gray-900">{entry.studentName}</span>
                  <span className="text-[10px] font-bold text-gray-400">{entry.studentId}</span>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-blue-50 text-brand-primary-blue border border-blue-200">{entry.category}</span>
                </div>
                <p className="text-xs text-gray-600 mt-1">
                  <span className="font-bold text-[#ed1c24]">{entry.from}</span> → <span className="font-bold text-emerald-600">{entry.to}</span>
                  <span className="text-gray-400"> · </span>{entry.reason}
                </p>
                <p className="text-[10px] text-gray-400 mt-1">
                  {entry.overriddenBy} · {entry.date} · Approval: {' '}
                  <span className={entry.approvedBy === 'Pending' ? 'text-amber-600 font-bold' : 'text-emerald-600 font-bold'}>
                    {entry.approvedBy}
                  </span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
