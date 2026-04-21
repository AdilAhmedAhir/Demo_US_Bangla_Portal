'use client';

import React, { useState } from 'react';
import {
  FileText,
  Download,
  Clock,
  CheckCircle2,
  Package,
  Send,
  GraduationCap,
  ScrollText,
  ShieldCheck,
  Award,
  Printer,
  Eye,
  ChevronRight,
  Info,
  Sparkles,
} from 'lucide-react';

/* ── Document Types ─── */
const documentTypes = [
  {
    id: 'provisional',
    title: 'Provisional Certificate',
    description: 'Certifies completion of MBBS program pending final results publication',
    icon: GraduationCap,
    color: 'text-emerald-600',
    bg: 'bg-emerald-50',
    processingTime: '3–5 working days',
    fee: '৳500',
    available: true,
  },
  {
    id: 'transcript',
    title: 'Academic Transcript',
    description: 'Official record of all subjects, marks, GPA per phase with university seal',
    icon: ScrollText,
    color: 'text-brand-primary-blue',
    bg: 'bg-blue-50',
    processingTime: '5–7 working days',
    fee: '৳1,000',
    available: true,
  },
  {
    id: 'character',
    title: 'Character Certificate',
    description: 'Certifies good conduct and character during the period of study',
    icon: ShieldCheck,
    color: 'text-violet-600',
    bg: 'bg-violet-50',
    processingTime: '2–3 working days',
    fee: '৳300',
    available: true,
  },
  {
    id: 'completion',
    title: 'Course Completion Certificate',
    description: 'Confirms completion of all academic requirements for the MBBS degree',
    icon: Award,
    color: 'text-amber-600',
    bg: 'bg-amber-50',
    processingTime: '5–7 working days',
    fee: '৳800',
    available: true,
  },
  {
    id: 'bonafide',
    title: 'Bonafide Certificate',
    description: 'Confirms current enrollment status — useful for visa, scholarships, etc.',
    icon: FileText,
    color: 'text-sky-600',
    bg: 'bg-sky-50',
    processingTime: '1–2 working days',
    fee: '৳200',
    available: true,
  },
  {
    id: 'noc',
    title: 'No Objection Certificate (NOC)',
    description: 'For appearing in external exams, transferring, or other institutional purposes',
    icon: ScrollText,
    color: 'text-rose-600',
    bg: 'bg-rose-50',
    processingTime: '3–5 working days',
    fee: '৳400',
    available: false,
  },
];

/* ── Past Requests ─── */
const pastRequests = [
  {
    id: 'DOC-2026-018',
    type: 'Bonafide Certificate',
    requestDate: 'Apr 10, 2026',
    status: 'ready' as const,
    readyDate: 'Apr 12, 2026',
    copies: 2,
  },
  {
    id: 'DOC-2026-012',
    type: 'Academic Transcript',
    requestDate: 'Mar 20, 2026',
    status: 'collected' as const,
    readyDate: 'Mar 27, 2026',
    copies: 3,
  },
  {
    id: 'DOC-2025-045',
    type: 'Character Certificate',
    requestDate: 'Dec 5, 2025',
    status: 'collected' as const,
    readyDate: 'Dec 8, 2025',
    copies: 1,
  },
];

const statusConfig = {
  processing: { label: 'Processing',  color: 'text-amber-700',        bg: 'bg-amber-50',   border: 'border-amber-200', icon: Clock },
  ready:      { label: 'Ready',       color: 'text-emerald-700',      bg: 'bg-emerald-50', border: 'border-emerald-200', icon: CheckCircle2 },
  collected:  { label: 'Collected',   color: 'text-brand-primary-blue', bg: 'bg-blue-50',    border: 'border-blue-200', icon: Package },
};

export default function DocumentsPage() {
  const [selectedDoc, setSelectedDoc] = useState<string | null>(null);
  const [copies, setCopies] = useState(1);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleRequest = (docId: string) => {
    setSelectedDoc(null);
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 4000);
  };

  return (
    <div className="flex flex-col gap-6 w-full h-full pb-10">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
        <div className="flex items-center gap-2.5">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-violet-500 to-purple-700 flex items-center justify-center shadow-md">
            <FileText className="w-5 h-5 text-white" />
          </div>
          <div>
            <h1 className="text-xl font-black text-gray-900 tracking-tight">Document Center</h1>
            <p className="text-xs font-medium text-gray-400">Request certificates, transcripts & official documents</p>
          </div>
        </div>
      </div>

      {/* Success Toast */}
      {showSuccess && (
        <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-xl flex items-center gap-3">
          <CheckCircle2 className="w-5 h-5 text-emerald-600" />
          <span className="text-sm font-bold text-emerald-700">Document request submitted! You'll be notified when it's ready for collection.</span>
        </div>
      )}

      {/* Ready for Collection Alert */}
      {pastRequests.some(r => r.status === 'ready') && (
        <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-xl flex items-start gap-3">
          <Sparkles className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
          <div>
            <p className="text-sm font-bold text-emerald-800">Document Ready for Collection!</p>
            <p className="text-xs text-emerald-700 mt-0.5">
              Your <strong>Bonafide Certificate</strong> (DOC-2026-018) is ready. Collect from the Administrative Office, Ground Floor.
            </p>
          </div>
        </div>
      )}

      {/* Document Grid */}
      <div>
        <h2 className="text-sm font-bold text-gray-900 mb-3">Available Documents</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {documentTypes.map((doc) => {
            const Icon = doc.icon;
            const isSelected = selectedDoc === doc.id;
            return (
              <div key={doc.id} className="relative">
                <div
                  className={`bg-white rounded-xl shadow-sm border overflow-hidden transition-all cursor-pointer hover:shadow-md ${
                    isSelected ? 'border-brand-primary-blue ring-2 ring-brand-primary-blue/20' : 'border-gray-100'
                  } ${!doc.available ? 'opacity-50' : ''}`}
                  onClick={() => doc.available && setSelectedDoc(isSelected ? null : doc.id)}
                >
                  <div className="p-5">
                    <div className="flex items-start gap-3 mb-3">
                      <div className={`w-11 h-11 rounded-xl ${doc.bg} flex items-center justify-center shrink-0`}>
                        <Icon className={`w-5 h-5 ${doc.color}`} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-sm font-bold text-gray-900">{doc.title}</h3>
                        <p className="text-[11px] text-gray-500 mt-0.5 line-clamp-2">{doc.description}</p>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1.5">
                        <Clock className="w-3 h-3 text-gray-400" />
                        <span className="text-[10px] font-bold text-gray-400">{doc.processingTime}</span>
                      </div>
                      <span className="text-xs font-black text-gray-900">{doc.fee}</span>
                    </div>
                  </div>

                  {/* Request Panel (expanded) */}
                  {isSelected && (
                    <div className="px-5 pb-5 pt-3 border-t border-gray-100 bg-blue-50/30">
                      <div className="flex items-center gap-3 mb-3">
                        <label className="text-xs font-bold text-gray-600">Copies:</label>
                        <div className="flex items-center gap-1.5">
                          <button
                            onClick={(e) => { e.stopPropagation(); setCopies(Math.max(1, copies - 1)); }}
                            className="w-7 h-7 rounded-lg bg-white border border-gray-200 text-sm font-bold text-gray-700 flex items-center justify-center hover:bg-gray-50"
                          >
                            −
                          </button>
                          <span className="w-8 text-center text-sm font-black text-gray-900">{copies}</span>
                          <button
                            onClick={(e) => { e.stopPropagation(); setCopies(Math.min(5, copies + 1)); }}
                            className="w-7 h-7 rounded-lg bg-white border border-gray-200 text-sm font-bold text-gray-700 flex items-center justify-center hover:bg-gray-50"
                          >
                            +
                          </button>
                        </div>
                        <span className="text-xs font-bold text-gray-500 ml-auto">
                          Total: ৳{parseInt(doc.fee.replace(/[৳,]/g, '')) * copies}
                        </span>
                      </div>
                      <button
                        onClick={(e) => { e.stopPropagation(); handleRequest(doc.id); }}
                        className="w-full py-2.5 rounded-xl bg-brand-primary-blue text-white text-xs font-bold hover:bg-brand-primary-blue/90 transition-all flex items-center justify-center gap-2 active:scale-[0.98]"
                      >
                        <Send className="w-3.5 h-3.5" />
                        Request Document
                      </button>
                    </div>
                  )}
                </div>
                {!doc.available && (
                  <div className="absolute top-3 right-3">
                    <span className="text-[9px] font-bold px-2 py-0.5 rounded-full bg-gray-200 text-gray-500">Requires Approval</span>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Request History */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="px-6 py-5 border-b border-gray-100">
          <h2 className="text-base font-bold text-gray-900 flex items-center gap-2">
            <Clock className="w-5 h-5 text-gray-400" />
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
                    <p className="text-sm font-bold text-gray-900">{req.type}</p>
                    <p className="text-[10px] text-gray-400 mt-0.5">
                      Ref: {req.id} · Requested: {req.requestDate} · Copies: {req.copies}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className={`text-[10px] font-bold px-2.5 py-1 rounded-full ${st.bg} ${st.color} border ${st.border}`}>
                    {st.label}
                  </span>
                  {req.status === 'ready' && (
                    <button className="text-[10px] font-bold px-3 py-1.5 rounded-lg bg-emerald-500 text-white hover:bg-emerald-600 transition-all">
                      Mark Collected
                    </button>
                  )}
                  <ChevronRight className="w-4 h-4 text-gray-300" />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Info */}
      <div className="p-4 bg-gray-50 border border-gray-200 rounded-xl flex items-start gap-2.5">
        <Info className="w-4 h-4 text-gray-400 shrink-0 mt-0.5" />
        <p className="text-xs text-gray-500">
          Documents can be collected from the <strong>Administrative Office, Ground Floor</strong>. 
          Bring your student ID card for verification. For urgent requests, contact the Admin Office directly.
        </p>
      </div>
    </div>
  );
}
