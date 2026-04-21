'use client';

import React, { useState } from 'react';
import {
  RefreshCcw,
  FileText,
  Upload,
  Clock,
  CheckCircle2,
  XCircle,
  AlertTriangle,
  ChevronRight,
  Send,
  CalendarDays,
  Info,
} from 'lucide-react';

/* ── Mock Past Requests ─── */
const pastRequests = [
  {
    id: 'MKP-2026-001',
    subject: 'Pathology',
    component: 'Written (SAQ/SEQ)',
    reason: 'Medical emergency — hospitalization during exam week',
    submittedDate: 'Mar 15, 2026',
    status: 'approved' as const,
    examDate: 'Apr 20, 2026',
  },
  {
    id: 'MKP-2025-014',
    subject: 'Pharmacology',
    component: 'Practical (OSPE)',
    reason: 'Failed OSPE component — scored 28/50 (56%)',
    submittedDate: 'Nov 8, 2025',
    status: 'completed' as const,
    examDate: 'Dec 5, 2025',
  },
];

const statusConfig = {
  submitted: { label: 'Under Review', color: 'text-amber-700', bg: 'bg-amber-50', border: 'border-amber-200', icon: Clock },
  approved:  { label: 'Approved',     color: 'text-emerald-700', bg: 'bg-emerald-50', border: 'border-emerald-200', icon: CheckCircle2 },
  rejected:  { label: 'Rejected',     color: 'text-[#ed1c24]', bg: 'bg-red-50', border: 'border-red-200', icon: XCircle },
  completed: { label: 'Completed',    color: 'text-brand-primary-blue', bg: 'bg-blue-50', border: 'border-blue-200', icon: CheckCircle2 },
};

const phase3Subjects = [
  'Community Medicine & Public Health',
  'Pathology',
  'Microbiology',
];

const examComponents = [
  'Written — MCQ (MT/F + SBA)',
  'Written — SAQ / SEQ',
  'Structured Oral Examination (SOE)',
  'Practical — OSPE',
  'Practical — Traditional',
  'Full Subject (All Components)',
];

const reasonTemplates = [
  'I failed this component and would like to reattempt.',
  'I was unable to attend due to medical reasons.',
  'I missed the exam due to a family emergency.',
  'Other (please specify below)',
];

export default function MakeupExamPage() {
  const [selectedSubject, setSelectedSubject] = useState('');
  const [selectedComponent, setSelectedComponent] = useState('');
  const [selectedReason, setSelectedReason] = useState('');
  const [customReason, setCustomReason] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 4000);
  };

  return (
    <div className="flex flex-col gap-6 w-full h-full pb-10">
      {/* Header */}
      <div className="flex items-center gap-2.5">
        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center shadow-md">
          <RefreshCcw className="w-5 h-5 text-white" />
        </div>
        <div>
          <h1 className="text-xl font-black text-gray-900 tracking-tight">Makeup Exam Request</h1>
          <p className="text-xs font-medium text-gray-400">Request a reattempt for failed or missed exam components</p>
        </div>
      </div>

      {/* Info Banner */}
      <div className="p-4 bg-blue-50 border border-blue-200 rounded-xl flex items-start gap-3">
        <Info className="w-5 h-5 text-brand-primary-blue shrink-0 mt-0.5" />
        <div>
          <p className="text-sm font-bold text-gray-900">Makeup Exam Policy</p>
          <p className="text-xs text-gray-600 mt-1">
            Students who fail any component (Written/Oral/Practical) must pass the supplementary exam. 
            Pass marks: <strong>60% of total marks</strong> per component. Requests are reviewed by the Exam Controller 
            and require HOD approval. Processing time: 3–5 working days.
          </p>
        </div>
      </div>

      {/* Success Toast */}
      {showSuccess && (
        <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-xl flex items-center gap-3 animate-pulse">
          <CheckCircle2 className="w-5 h-5 text-emerald-600" />
          <span className="text-sm font-bold text-emerald-700">Request submitted successfully! Reference: MKP-2026-002</span>
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
        {/* Request Form */}
        <div className="lg:col-span-3 bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="px-6 py-5 border-b border-gray-100">
            <h2 className="text-base font-bold text-gray-900 flex items-center gap-2">
              <Send className="w-5 h-5 text-orange-500" />
              Submit New Request
            </h2>
          </div>
          <form onSubmit={handleSubmit} className="p-6 space-y-5">
            {/* Subject */}
            <div>
              <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">
                Subject <span className="text-[#ed1c24]">*</span>
              </label>
              <select
                value={selectedSubject}
                onChange={(e) => setSelectedSubject(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm font-medium text-gray-900 bg-white focus:outline-none focus:ring-2 focus:ring-brand-primary-blue/20 focus:border-brand-primary-blue transition-all"
                required
              >
                <option value="">Select subject...</option>
                {phase3Subjects.map((s) => <option key={s} value={s}>{s}</option>)}
              </select>
            </div>

            {/* Component */}
            <div>
              <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">
                Failed / Missed Component <span className="text-[#ed1c24]">*</span>
              </label>
              <select
                value={selectedComponent}
                onChange={(e) => setSelectedComponent(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm font-medium text-gray-900 bg-white focus:outline-none focus:ring-2 focus:ring-brand-primary-blue/20 focus:border-brand-primary-blue transition-all"
                required
              >
                <option value="">Select component...</option>
                {examComponents.map((c) => <option key={c} value={c}>{c}</option>)}
              </select>
            </div>

            {/* Reason */}
            <div>
              <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">
                Reason <span className="text-[#ed1c24]">*</span>
              </label>
              <div className="space-y-2 mb-3">
                {reasonTemplates.map((r) => (
                  <label key={r} className={`flex items-center gap-3 p-3 rounded-xl border cursor-pointer transition-all ${
                    selectedReason === r ? 'border-brand-primary-blue bg-blue-50/50' : 'border-gray-200 hover:bg-gray-50'
                  }`}>
                    <input
                      type="radio"
                      name="reason"
                      value={r}
                      checked={selectedReason === r}
                      onChange={(e) => setSelectedReason(e.target.value)}
                      className="accent-brand-primary-blue"
                    />
                    <span className="text-sm font-medium text-gray-700">{r}</span>
                  </label>
                ))}
              </div>
              {selectedReason.includes('Other') && (
                <textarea
                  value={customReason}
                  onChange={(e) => setCustomReason(e.target.value)}
                  placeholder="Describe your reason in detail..."
                  rows={3}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm font-medium text-gray-900 focus:outline-none focus:ring-2 focus:ring-brand-primary-blue/20 focus:border-brand-primary-blue transition-all resize-none"
                  required
                />
              )}
            </div>

            {/* Upload */}
            <div>
              <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">
                Supporting Documents (Optional)
              </label>
              <div className="border-2 border-dashed border-gray-200 rounded-xl p-6 text-center hover:border-brand-primary-blue/30 hover:bg-blue-50/30 transition-all cursor-pointer">
                <Upload className="w-6 h-6 text-gray-400 mx-auto mb-2" />
                <p className="text-xs font-bold text-gray-500">Drop medical certificate, leave letter, etc.</p>
                <p className="text-[10px] text-gray-400 mt-1">PDF, JPG, PNG — Max 5MB</p>
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-3.5 rounded-xl bg-gradient-to-r from-brand-primary-blue to-blue-700 text-white text-sm font-bold hover:opacity-90 transition-all shadow-md active:scale-[0.98]"
            >
              Submit Makeup Request
            </button>
          </form>
        </div>

        {/* Timeline / Process */}
        <div className="lg:col-span-2 space-y-5">
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-5">
            <h3 className="text-sm font-bold text-gray-900 mb-4 flex items-center gap-2">
              <CalendarDays className="w-4 h-4 text-violet-600" />
              Request Timeline
            </h3>
            <div className="space-y-4">
              {[
                { step: 1, label: 'Submit Request', desc: 'Fill form & upload documents', done: true },
                { step: 2, label: 'HOD Review', desc: 'Department head validates eligibility', done: false },
                { step: 3, label: 'Exam Controller Approval', desc: 'Schedule & logistics confirmation', done: false },
                { step: 4, label: 'Exam Scheduled', desc: 'Date, venue & admit card issued', done: false },
                { step: 5, label: 'Reattempt Complete', desc: 'Results merged with transcript', done: false },
              ].map((item, idx) => (
                <div key={item.step} className="flex items-start gap-3">
                  <div className="flex flex-col items-center">
                    <div className={`w-7 h-7 rounded-full flex items-center justify-center text-[10px] font-black ${
                      item.done ? 'bg-emerald-500 text-white' : 'bg-gray-100 text-gray-400 border border-gray-200'
                    }`}>
                      {item.done ? '✓' : item.step}
                    </div>
                    {idx < 4 && <div className="w-0.5 h-6 bg-gray-200 mt-1" />}
                  </div>
                  <div>
                    <p className="text-xs font-bold text-gray-900">{item.label}</p>
                    <p className="text-[10px] text-gray-500">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="p-4 bg-amber-50 border border-amber-200 rounded-xl">
            <p className="text-xs font-bold text-amber-800 flex items-center gap-1.5 mb-1">
              <AlertTriangle className="w-3.5 h-3.5" />
              Important
            </p>
            <p className="text-[11px] text-amber-700">
              If a student fails a term exam, they must pass the supplementary term exam before appearing in the Third Professional Examination.
            </p>
          </div>
        </div>
      </div>

      {/* Past Requests */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="px-6 py-5 border-b border-gray-100">
          <h2 className="text-base font-bold text-gray-900 flex items-center gap-2">
            <FileText className="w-5 h-5 text-gray-400" />
            Your Request History
          </h2>
        </div>
        <div className="divide-y divide-gray-50">
          {pastRequests.map((req) => {
            const st = statusConfig[req.status];
            const StIcon = st.icon;
            return (
              <div key={req.id} className="px-6 py-4 flex items-center justify-between hover:bg-slate-50 transition-colors">
                <div className="flex items-center gap-4">
                  <div className={`w-9 h-9 rounded-xl ${st.bg} flex items-center justify-center`}>
                    <StIcon className={`w-4 h-4 ${st.color}`} />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-gray-900">{req.subject} — {req.component}</p>
                    <p className="text-[11px] text-gray-500 mt-0.5">{req.reason}</p>
                    <p className="text-[10px] text-gray-400 mt-0.5">Submitted: {req.submittedDate} · Ref: {req.id}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className={`text-[10px] font-bold px-2.5 py-1 rounded-full ${st.bg} ${st.color} border ${st.border}`}>
                    {st.label}
                  </span>
                  {req.examDate && (
                    <span className="text-[10px] font-bold text-gray-400">Exam: {req.examDate}</span>
                  )}
                  <ChevronRight className="w-4 h-4 text-gray-300" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
