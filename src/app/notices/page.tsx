'use client';

import React, { useState } from 'react';
import {
  Bell,
  Pin,
  Calendar,
  ChevronRight,
  Search,
  Filter,
  AlertTriangle,
  Info,
  Megaphone,
  FileText,
  Clock,
  Eye,
  Paperclip,
  BookOpenCheck,
  Building2,
  Users,
} from 'lucide-react';

type NoticeCategory = 'all' | 'exam' | 'academic' | 'administrative' | 'event';
type NoticePriority = 'urgent' | 'important' | 'normal';

interface Notice {
  id: number;
  title: string;
  excerpt: string;
  category: NoticeCategory;
  priority: NoticePriority;
  date: string;
  author: string;
  department: string;
  pinned: boolean;
  hasAttachment: boolean;
  views: number;
}

const notices: Notice[] = [
  {
    id: 1,
    title: 'Phase I Professional Examination Schedule — May 2026',
    excerpt: 'The Phase I professional examination for Batch 15 will commence from May 12, 2026. All eligible students must collect their admit cards from the Exam Controller\'s office by May 5, 2026.',
    category: 'exam',
    priority: 'urgent',
    date: 'Apr 20, 2026',
    author: 'Exam Controller',
    department: 'Examination Cell',
    pinned: true,
    hasAttachment: true,
    views: 892,
  },
  {
    id: 2,
    title: 'Revised Class Schedule for Microbiology — Batch 16',
    excerpt: 'Due to the national holiday on April 25th, the Microbiology practical sessions for Batch 16 have been rescheduled to April 27th (Sunday). Please check the updated timetable.',
    category: 'academic',
    priority: 'important',
    date: 'Apr 19, 2026',
    author: 'Prof. Kamal Uddin',
    department: 'Dept. of Microbiology',
    pinned: true,
    hasAttachment: false,
    views: 456,
  },
  {
    id: 3,
    title: 'Tuition Fee Payment Deadline Extended to April 30',
    excerpt: 'The deadline for tuition fee payment for the Spring 2026 semester has been extended to April 30, 2026. Students with outstanding dues will not be eligible for appearing in the upcoming examinations.',
    category: 'administrative',
    priority: 'urgent',
    date: 'Apr 18, 2026',
    author: 'Finance Office',
    department: 'Accounts Department',
    pinned: false,
    hasAttachment: true,
    views: 1204,
  },
  {
    id: 4,
    title: 'Annual Sports Day 2026 — Registration Open',
    excerpt: 'The Annual Sports Day will be held on May 20, 2026 at the USBMC ground. Students can register for Cricket, Football, Badminton, Table Tennis, and Athletics through their class representatives.',
    category: 'event',
    priority: 'normal',
    date: 'Apr 17, 2026',
    author: 'Student Affairs',
    department: 'Co-curricular Activities',
    pinned: false,
    hasAttachment: false,
    views: 320,
  },
  {
    id: 5,
    title: 'Guest Lecture: Advances in Immunotherapy — Dr. Sarah Khan',
    excerpt: 'The Department of Pharmacology invites all students to a guest lecture by Dr. Sarah Khan (Johns Hopkins University) on "Advances in Cancer Immunotherapy" on April 28, 2026 at 3:00 PM in the auditorium.',
    category: 'academic',
    priority: 'normal',
    date: 'Apr 16, 2026',
    author: 'Dr. Nazmul Haque',
    department: 'Dept. of Pharmacology',
    pinned: false,
    hasAttachment: true,
    views: 287,
  },
  {
    id: 6,
    title: 'Hostel Maintenance Work — Block C Water Supply',
    excerpt: 'The water supply to Block C of the boys\' hostel will be temporarily suspended on April 22 from 8:00 AM to 2:00 PM for pump maintenance. Residents are advised to store water in advance.',
    category: 'administrative',
    priority: 'important',
    date: 'Apr 15, 2026',
    author: 'Hostel Warden',
    department: 'Hostel Administration',
    pinned: false,
    hasAttachment: false,
    views: 178,
  },
];

const categories: { id: NoticeCategory; label: string; icon: React.ElementType }[] = [
  { id: 'all',            label: 'All Notices',    icon: Bell },
  { id: 'exam',           label: 'Examinations',   icon: BookOpenCheck },
  { id: 'academic',       label: 'Academic',        icon: FileText },
  { id: 'administrative', label: 'Administrative', icon: Building2 },
  { id: 'event',          label: 'Events',          icon: Users },
];

const priorityConfig: Record<NoticePriority, { label: string; color: string; bg: string; border: string; dot: string }> = {
  urgent:    { label: 'Urgent',    color: 'text-[#ed1c24]',         bg: 'bg-red-50',     border: 'border-red-200',     dot: 'bg-[#ed1c24]' },
  important: { label: 'Important', color: 'text-amber-700',         bg: 'bg-amber-50',   border: 'border-amber-200',   dot: 'bg-amber-500' },
  normal:    { label: 'Normal',    color: 'text-brand-primary-blue', bg: 'bg-blue-50',    border: 'border-blue-200',    dot: 'bg-brand-primary-blue' },
};

export default function NoticeBoardPage() {
  const [activeCategory, setActiveCategory] = useState<NoticeCategory>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredNotices = notices.filter((n) => {
    const matchesCategory = activeCategory === 'all' || n.category === activeCategory;
    const matchesSearch = n.title.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const pinnedNotices = filteredNotices.filter(n => n.pinned);
  const regularNotices = filteredNotices.filter(n => !n.pinned);

  return (
    <div className="flex flex-col gap-6 w-full h-full pb-10">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
        <div>
          <div className="flex items-center gap-2.5 mb-1">
            <div className="w-9 h-9 rounded-xl bg-amber-50 ring-2 ring-amber-100 flex items-center justify-center">
              <Megaphone className="w-4.5 h-4.5 text-amber-600" />
            </div>
            <div>
              <h1 className="text-xl font-black text-gray-900 tracking-tight">Notice Board</h1>
              <p className="text-xs font-medium text-gray-400">Official circulars, announcements & schedules</p>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-xs font-bold text-gray-400 px-3 py-2 bg-gray-50 rounded-lg border border-gray-100">
            {notices.length} Notices
          </span>
        </div>
      </div>

      {/* Search & Filter Bar */}
      <div className="flex flex-col sm:flex-row gap-3">
        <div className="relative flex-1">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <input
            type="text"
            placeholder="Search notices..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 text-sm font-semibold text-gray-900 bg-white border-2 border-gray-200 rounded-xl focus:outline-none focus:border-brand-primary-blue focus:ring-0 transition-all placeholder:text-gray-400 placeholder:font-medium"
          />
        </div>
        <div className="flex items-center gap-1.5 p-1 bg-gray-100 rounded-xl overflow-x-auto">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-bold whitespace-nowrap transition-all ${
                  isActive
                    ? 'bg-white shadow-sm text-brand-primary-blue'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                {cat.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Pinned Notices */}
      {pinnedNotices.length > 0 && (
        <div>
          <h2 className="text-[11px] font-bold text-gray-400 uppercase tracking-widest mb-3 flex items-center gap-1.5">
            <Pin className="w-3.5 h-3.5" />
            Pinned
          </h2>
          <div className="space-y-3">
            {pinnedNotices.map((notice) => {
              const pcfg = priorityConfig[notice.priority];
              return (
                <div
                  key={notice.id}
                  className={`bg-white rounded-xl border-2 ${pcfg.border} shadow-sm p-5 hover:shadow-md transition-all cursor-pointer group`}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-2 flex-wrap">
                        <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold border ${pcfg.bg} ${pcfg.border} ${pcfg.color}`}>
                          <span className={`w-1.5 h-1.5 rounded-full ${pcfg.dot}`} />
                          {pcfg.label}
                        </span>
                        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold bg-gray-100 text-gray-500">
                          <Pin className="w-2.5 h-2.5" />
                          Pinned
                        </span>
                        {notice.hasAttachment && (
                          <span className="inline-flex items-center gap-1 text-[10px] font-bold text-gray-400">
                            <Paperclip className="w-3 h-3" />
                            Attachment
                          </span>
                        )}
                      </div>
                      <h3 className="text-base font-bold text-gray-900 group-hover:text-brand-primary-blue transition-colors">
                        {notice.title}
                      </h3>
                      <p className="text-xs font-medium text-gray-500 mt-1.5 leading-relaxed line-clamp-2">
                        {notice.excerpt}
                      </p>
                      <div className="flex items-center gap-4 mt-3 flex-wrap">
                        <span className="text-[11px] font-semibold text-gray-400 flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          {notice.date}
                        </span>
                        <span className="text-[11px] font-semibold text-gray-400">
                          {notice.author} — {notice.department}
                        </span>
                        <span className="text-[11px] font-semibold text-gray-400 flex items-center gap-1">
                          <Eye className="w-3 h-3" />
                          {notice.views} views
                        </span>
                      </div>
                    </div>
                    <ChevronRight className="w-5 h-5 text-gray-300 group-hover:text-brand-primary-blue transition-colors shrink-0 mt-1" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Regular Notices */}
      <div>
        <h2 className="text-[11px] font-bold text-gray-400 uppercase tracking-widest mb-3 flex items-center gap-1.5">
          <Clock className="w-3.5 h-3.5" />
          Recent Notices
        </h2>
        <div className="space-y-3">
          {regularNotices.map((notice) => {
            const pcfg = priorityConfig[notice.priority];
            return (
              <div
                key={notice.id}
                className="bg-white rounded-xl border border-gray-100 shadow-sm p-5 hover:shadow-md hover:border-gray-200 transition-all cursor-pointer group"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-2 flex-wrap">
                      <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold border ${pcfg.bg} ${pcfg.border} ${pcfg.color}`}>
                        <span className={`w-1.5 h-1.5 rounded-full ${pcfg.dot}`} />
                        {pcfg.label}
                      </span>
                      {notice.hasAttachment && (
                        <span className="inline-flex items-center gap-1 text-[10px] font-bold text-gray-400">
                          <Paperclip className="w-3 h-3" />
                          Attachment
                        </span>
                      )}
                    </div>
                    <h3 className="text-sm font-bold text-gray-900 group-hover:text-brand-primary-blue transition-colors">
                      {notice.title}
                    </h3>
                    <p className="text-xs font-medium text-gray-500 mt-1.5 leading-relaxed line-clamp-2">
                      {notice.excerpt}
                    </p>
                    <div className="flex items-center gap-4 mt-3 flex-wrap">
                      <span className="text-[11px] font-semibold text-gray-400 flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {notice.date}
                      </span>
                      <span className="text-[11px] font-semibold text-gray-400">
                        {notice.author}
                      </span>
                      <span className="text-[11px] font-semibold text-gray-400 flex items-center gap-1">
                        <Eye className="w-3 h-3" />
                        {notice.views}
                      </span>
                    </div>
                  </div>
                  <ChevronRight className="w-5 h-5 text-gray-300 group-hover:text-brand-primary-blue transition-colors shrink-0 mt-1" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
