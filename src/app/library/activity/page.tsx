import React from 'react';
import { BookOpen, Eye, Upload, Star, Clock, User, Search } from 'lucide-react';
import Link from 'next/link';

export default function LibraryActivityPage() {
  const activities = [
    { type: 'read', user: 'Adil Ahmed', action: "opened Gray's Anatomy for Students", detail: 'Page 24 — Chapter 1: The Body', time: '2 hours ago', icon: Eye, color: 'bg-blue-50 text-blue-600 border-blue-100' },
    { type: 'upload', user: 'Dr. Shahin Rahman', action: 'uploaded a new book', detail: 'Snell\'s Clinical Neuroanatomy — 8th Edition', time: '5 hours ago', icon: Upload, color: 'bg-emerald-50 text-emerald-600 border-emerald-100' },
    { type: 'read', user: 'Nusrat Jahan', action: 'finished reading Chapter 12', detail: 'Guyton & Hall Medical Physiology', time: '6 hours ago', icon: Eye, color: 'bg-blue-50 text-blue-600 border-blue-100' },
    { type: 'bookmark', user: 'Hasib Rahman', action: "bookmarked Robbins Basic Pathology", detail: 'Added to reading list', time: 'Yesterday', icon: Star, color: 'bg-amber-50 text-amber-600 border-amber-100' },
    { type: 'upload', user: 'Admin Library', action: 'bulk uploaded 8 new PDFs', detail: 'Pharmacology, Microbiology, and Surgery department materials', time: 'Yesterday', icon: Upload, color: 'bg-emerald-50 text-emerald-600 border-emerald-100' },
    { type: 'read', user: 'Faisal Karim', action: 'started reading KD Tripathi Pharmacology', detail: 'Page 1 — Introduction to Pharmacology', time: '2 days ago', icon: Eye, color: 'bg-blue-50 text-blue-600 border-blue-100' },
    { type: 'search', user: 'Tarek Monsur', action: 'searched for "Cardiac Physiology"', detail: '3 results found', time: '2 days ago', icon: Search, color: 'bg-purple-50 text-purple-600 border-purple-100' },
    { type: 'read', user: 'Sadia Islam', action: "completed Park's Preventive Medicine", detail: 'All 934 pages read — 100% complete', time: '3 days ago', icon: Eye, color: 'bg-blue-50 text-blue-600 border-blue-100' },
  ];

  return (
    <div className="flex flex-col gap-6 w-full pb-10">
      <div>
        <Link href="/library" className="text-sm text-brand-primary-blue hover:underline mb-1 inline-block font-bold">← Library Home</Link>
        <h1 className="text-3xl font-black tracking-tight text-gray-900">Recent Activity</h1>
        <p className="mt-1 text-sm text-gray-500 font-medium">A live feed of reading sessions, uploads, and bookmarks across the library.</p>
      </div>

      {/* Activity Feed */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-100 bg-gray-50/50 flex items-center justify-between">
          <h3 className="text-sm font-bold text-gray-900 flex items-center gap-2">
            <Clock className="w-4 h-4 text-gray-500" /> Activity Timeline
          </h3>
          <span className="text-xs font-bold text-gray-400">Last 7 days</span>
        </div>

        <div className="divide-y divide-gray-50">
          {activities.map((a, i) => (
            <div key={i} className="px-6 py-4 flex items-start gap-4 hover:bg-gray-50/50 transition-colors">
              {/* Icon */}
              <div className={`w-9 h-9 rounded-lg ${a.color} border flex items-center justify-center shrink-0 mt-0.5`}>
                <a.icon className="w-4 h-4" />
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0">
                <p className="text-sm text-gray-800">
                  <strong className="font-bold text-gray-900">{a.user}</strong>{' '}{a.action}
                </p>
                <p className="text-xs text-gray-500 font-medium mt-0.5">{a.detail}</p>
              </div>

              {/* Time */}
              <span className="text-[11px] font-bold text-gray-400 whitespace-nowrap shrink-0 mt-1">{a.time}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
