'use client';

import React, { useState } from 'react';
import {
  UploadCloud,
  FileSpreadsheet,
  CheckCircle2,
  XCircle,
  Clock,
  Download,
  RefreshCw,
  ArrowUpRight,
  Database,
  ShieldCheck,
  Info,
  Trash2,
} from 'lucide-react';

type SyncStatus = 'success' | 'failed' | 'processing';

interface SyncRecord {
  id: number;
  date: string;
  fileName: string;
  fileSize: string;
  recordsUpdated: number | null;
  failureReason: string | null;
  status: SyncStatus;
  uploadedBy: string;
}

const syncHistory: SyncRecord[] = [
  {
    id: 1,
    date: 'Apr 17, 2026 — 10:04 AM',
    fileName: 'April_Week3_Payments.xlsx',
    fileSize: '2.4 MB',
    recordsUpdated: 142,
    failureReason: null,
    status: 'success',
    uploadedBy: 'Accounts Dept.',
  },
  {
    id: 2,
    date: 'Apr 10, 2026 — 09:31 AM',
    fileName: 'April_Week2_Payments.csv',
    fileSize: '1.8 MB',
    recordsUpdated: 128,
    failureReason: null,
    status: 'success',
    uploadedBy: 'Accounts Dept.',
  },
  {
    id: 3,
    date: 'Apr 03, 2026 — 11:15 AM',
    fileName: 'April_Week1_Payments.xlsx',
    fileSize: '2.1 MB',
    recordsUpdated: null,
    failureReason: 'Formatting Error — Column "Student ID" not found in row headers.',
    status: 'failed',
    uploadedBy: 'Accounts Dept.',
  },
  {
    id: 4,
    date: 'Mar 27, 2026 — 10:50 AM',
    fileName: 'March_Week4_Payments.xlsx',
    fileSize: '3.0 MB',
    recordsUpdated: 156,
    failureReason: null,
    status: 'success',
    uploadedBy: 'Accounts Dept.',
  },
];

const statusConfig: Record<SyncStatus, { label: string; color: string; bg: string; border: string; icon: React.ElementType }> = {
  success:    { label: 'Success',    color: 'text-emerald-700', bg: 'bg-emerald-50', border: 'border-emerald-200', icon: CheckCircle2 },
  failed:     { label: 'Failed',     color: 'text-[#ed1c24]',   bg: 'bg-red-50',     border: 'border-red-200',     icon: XCircle },
  processing: { label: 'Processing', color: 'text-amber-700',   bg: 'bg-amber-50',   border: 'border-amber-200',   icon: Clock },
};

export default function FinanceSyncPage() {
  const [isDragging, setIsDragging] = useState(false);

  const totalSynced = syncHistory.filter(s => s.status === 'success').reduce((sum, s) => sum + (s.recordsUpdated ?? 0), 0);
  const successCount = syncHistory.filter(s => s.status === 'success').length;
  const failedCount = syncHistory.filter(s => s.status === 'failed').length;

  return (
    <div className="flex flex-col gap-6 w-full h-full pb-10">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
        <div>
          <div className="flex items-center gap-2.5 mb-1">
            <div className="w-9 h-9 rounded-xl bg-brand-primary-green/10 flex items-center justify-center">
              <Database className="w-4.5 h-4.5 text-brand-primary-green" />
            </div>
            <div>
              <h1 className="text-xl font-black text-gray-900 tracking-tight">Financial Data Synchronization</h1>
              <p className="text-xs font-medium text-gray-400 max-w-lg">
                Upload the weekly bank or merchant Excel sheet to update student payment statuses automatically.
              </p>
            </div>
          </div>
        </div>
        <button className="px-5 py-2.5 text-xs font-bold rounded-lg bg-brand-primary-green text-white hover:bg-brand-primary-green/90 transition-all flex items-center gap-2 shadow-sm active:scale-95 shrink-0">
          <Download className="w-3.5 h-3.5" />
          Download Template
        </button>
      </div>

      {/* Stats Row */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="bg-white rounded-xl p-5 border border-gray-100 shadow-sm flex items-center gap-4 hover:shadow-md transition-shadow">
          <div className="w-12 h-12 rounded-xl bg-emerald-50 ring-2 ring-emerald-100 flex items-center justify-center shrink-0">
            <CheckCircle2 className="w-5.5 h-5.5 text-emerald-600" />
          </div>
          <div>
            <p className="text-2xl font-black text-gray-900 leading-none">{totalSynced}</p>
            <p className="text-[11px] font-bold text-gray-400 uppercase tracking-wider mt-1">Records Synced</p>
          </div>
        </div>

        <div className="bg-white rounded-xl p-5 border border-gray-100 shadow-sm flex items-center gap-4 hover:shadow-md transition-shadow">
          <div className="w-12 h-12 rounded-xl bg-blue-50 ring-2 ring-blue-100 flex items-center justify-center shrink-0">
            <FileSpreadsheet className="w-5.5 h-5.5 text-brand-primary-blue" />
          </div>
          <div>
            <p className="text-2xl font-black text-gray-900 leading-none">
              {successCount}<span className="text-sm font-bold text-gray-400">/{syncHistory.length}</span>
            </p>
            <p className="text-[11px] font-bold text-gray-400 uppercase tracking-wider mt-1">Successful Uploads</p>
          </div>
        </div>

        <div className="bg-white rounded-xl p-5 border border-gray-100 shadow-sm flex items-center gap-4 hover:shadow-md transition-shadow">
          <div className="w-12 h-12 rounded-xl bg-red-50 ring-2 ring-red-100 flex items-center justify-center shrink-0">
            <XCircle className="w-5.5 h-5.5 text-[#ed1c24]" />
          </div>
          <div>
            <p className="text-2xl font-black text-[#ed1c24] leading-none">{failedCount}</p>
            <p className="text-[11px] font-bold text-gray-400 uppercase tracking-wider mt-1">Failed Syncs</p>
          </div>
        </div>
      </div>

      {/* Dropzone */}
      <div
        onDragOver={(e) => { e.preventDefault(); setIsDragging(true); }}
        onDragLeave={() => setIsDragging(false)}
        onDrop={(e) => { e.preventDefault(); setIsDragging(false); }}
        className={`
          relative rounded-2xl border-2 border-dashed transition-all duration-300 cursor-pointer
          ${isDragging
            ? 'border-brand-primary-green bg-brand-primary-green/5 shadow-lg shadow-brand-primary-green/10'
            : 'border-gray-300 bg-white hover:border-brand-primary-green/50 hover:bg-brand-primary-green/[0.02]'
          }
        `}
      >
        <label className="flex flex-col items-center justify-center py-16 px-6 cursor-pointer">
          <input type="file" accept=".xlsx,.xls,.csv" className="hidden" />

          <div className={`
            w-20 h-20 rounded-2xl flex items-center justify-center mb-5 transition-all duration-300
            ${isDragging
              ? 'bg-brand-primary-green/20 scale-110'
              : 'bg-gray-100'
            }
          `}>
            <UploadCloud className={`w-9 h-9 transition-colors duration-300 ${isDragging ? 'text-brand-primary-green' : 'text-gray-400'}`} />
          </div>

          <p className="text-sm font-bold text-gray-700 mb-1.5">
            Drag & drop your <span className="text-brand-primary-green">.xlsx</span> or <span className="text-brand-primary-green">.csv</span> bank statement here
          </p>
          <p className="text-xs font-medium text-gray-400 mb-5">
            or click to browse from your computer
          </p>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1.5 px-3 py-1.5 bg-gray-50 border border-gray-200 rounded-lg">
              <FileSpreadsheet className="w-3.5 h-3.5 text-emerald-600" />
              <span className="text-[10px] font-bold text-gray-500">.xlsx</span>
            </div>
            <div className="flex items-center gap-1.5 px-3 py-1.5 bg-gray-50 border border-gray-200 rounded-lg">
              <FileSpreadsheet className="w-3.5 h-3.5 text-blue-600" />
              <span className="text-[10px] font-bold text-gray-500">.csv</span>
            </div>
            <div className="flex items-center gap-1.5 px-3 py-1.5 bg-gray-50 border border-gray-200 rounded-lg">
              <ShieldCheck className="w-3.5 h-3.5 text-gray-400" />
              <span className="text-[10px] font-bold text-gray-500">Max 10 MB</span>
            </div>
          </div>
        </label>
      </div>

      {/* Info Banner */}
      <div className="flex items-start gap-3 px-5 py-3.5 bg-blue-50 border border-blue-100 rounded-xl">
        <Info className="w-4 h-4 text-brand-primary-blue shrink-0 mt-0.5" />
        <div>
          <p className="text-xs font-bold text-brand-primary-blue">Required File Format</p>
          <p className="text-[11px] text-blue-600/80 mt-0.5 leading-relaxed">
            The spreadsheet must contain the following columns in order: <strong>Student ID</strong>, <strong>Student Name</strong>, <strong>Amount (BDT)</strong>, <strong>Payment Date</strong>, and <strong>Transaction Ref</strong>. Download the template above for the exact structure.
          </p>
        </div>
      </div>

      {/* Sync History Table */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="px-6 py-5 border-b border-gray-100 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <h2 className="text-base font-bold text-gray-900 flex items-center gap-2">
              <RefreshCw className="w-5 h-5 text-brand-primary-blue" />
              Recent Syncs
            </h2>
            <p className="text-xs text-gray-500 font-medium mt-1">
              History of all uploaded bank statements and their processing results
            </p>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-gray-50/70 border-b border-gray-100">
                <th className="px-6 py-3.5 text-[11px] font-bold text-gray-400 uppercase tracking-wider">Date</th>
                <th className="px-6 py-3.5 text-[11px] font-bold text-gray-400 uppercase tracking-wider">File Name</th>
                <th className="px-6 py-3.5 text-[11px] font-bold text-gray-400 uppercase tracking-wider text-center">Size</th>
                <th className="px-6 py-3.5 text-[11px] font-bold text-gray-400 uppercase tracking-wider text-center">Records Updated</th>
                <th className="px-6 py-3.5 text-[11px] font-bold text-gray-400 uppercase tracking-wider text-center">Status</th>
                <th className="px-6 py-3.5 text-[11px] font-bold text-gray-400 uppercase tracking-wider text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {syncHistory.map((record, idx) => {
                const isEven = idx % 2 === 1;
                const cfg = statusConfig[record.status];
                const StatusIcon = cfg.icon;
                const isFailed = record.status === 'failed';

                return (
                  <tr
                    key={record.id}
                    className={`hover:bg-slate-100/60 transition-colors ${isEven ? 'bg-slate-50' : 'bg-white'}`}
                  >
                    {/* Date */}
                    <td className="px-6 py-4">
                      <span className="text-xs font-semibold text-gray-600">{record.date}</span>
                    </td>

                    {/* File Name */}
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className={`w-9 h-9 rounded-lg flex items-center justify-center shrink-0 ${
                          record.fileName.endsWith('.csv') ? 'bg-blue-50' : 'bg-emerald-50'
                        }`}>
                          <FileSpreadsheet className={`w-4 h-4 ${
                            record.fileName.endsWith('.csv') ? 'text-blue-600' : 'text-emerald-600'
                          }`} />
                        </div>
                        <div>
                          <p className="text-sm font-bold text-gray-900">{record.fileName}</p>
                          <p className="text-[10px] font-medium text-gray-400">Uploaded by {record.uploadedBy}</p>
                        </div>
                      </div>
                    </td>

                    {/* Size */}
                    <td className="px-6 py-4 text-center">
                      <span className="text-xs font-semibold text-gray-500">{record.fileSize}</span>
                    </td>

                    {/* Records */}
                    <td className="px-6 py-4 text-center">
                      {record.recordsUpdated !== null ? (
                        <span className="text-sm font-black text-gray-700">{record.recordsUpdated}</span>
                      ) : (
                        <span className="text-xs font-bold text-[#ed1c24]">—</span>
                      )}
                    </td>

                    {/* Status */}
                    <td className="px-6 py-4 text-center">
                      <div className="flex flex-col items-center gap-1">
                        <span className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-bold border ${cfg.bg} ${cfg.border} ${cfg.color}`}>
                          <StatusIcon className="w-3 h-3" />
                          {cfg.label}
                        </span>
                        {isFailed && record.failureReason && (
                          <span className="text-[10px] font-medium text-red-400 max-w-[200px] truncate" title={record.failureReason}>
                            {record.failureReason}
                          </span>
                        )}
                      </div>
                    </td>

                    {/* Action */}
                    <td className="px-6 py-4 text-right">
                      <div className="flex items-center justify-end gap-1.5">
                        {isFailed ? (
                          <button className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-bold border border-amber-300 text-amber-700 bg-amber-50 hover:bg-amber-100 active:scale-95 transition-all">
                            <RefreshCw className="w-3.5 h-3.5" />
                            Retry
                          </button>
                        ) : (
                          <button className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-bold border border-gray-300 text-gray-600 hover:border-brand-primary-blue hover:text-brand-primary-blue hover:bg-blue-50 active:scale-95 transition-all">
                            <ArrowUpRight className="w-3.5 h-3.5" />
                            View Log
                          </button>
                        )}
                        <button className="p-2 rounded-lg text-gray-400 hover:text-red-500 hover:bg-red-50 transition-colors">
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        <div className="px-6 py-3.5 bg-gray-50/50 border-t border-gray-100 flex items-center justify-between">
          <p className="text-xs font-bold text-gray-400">
            Showing {syncHistory.length} sync records
          </p>
          <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">
            Last sync: Apr 17, 2026
          </p>
        </div>
      </div>
    </div>
  );
}
