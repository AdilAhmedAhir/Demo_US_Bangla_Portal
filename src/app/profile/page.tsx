'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import {
  User,
  Mail,
  Phone,
  MapPin,
  Calendar,
  IdCard,
  GraduationCap,
  Building2,
  Heart,
  Shield,
  Edit3,
  Download,
  ChevronRight,
  Copy,
  CheckCircle2,
  Clock,
  Droplet,
} from 'lucide-react';

const studentData = {
  name: 'Adil Ahmed',
  id: 'USB-2604',
  batch: 'Batch 16 (2024-2029)',
  phase: 'Phase I — Pre-Clinical',
  department: 'MBBS',
  session: '2024-2025',
  enrollDate: 'January 15, 2024',
  status: 'Active',
  email: 'adil.ahmed@usbangla.edu.bd',
  phone: '+880 1712-345678',
  dob: 'March 22, 2005',
  bloodGroup: 'B+',
  nationality: 'Bangladeshi',
  nidNo: '1234 5678 9012',
  address: '45/A, Mirpur-10, Dhaka-1216, Bangladesh',
  guardian: {
    name: 'Md. Karim Ahmed',
    relation: 'Father',
    phone: '+880 1819-876543',
    occupation: 'Business',
  },
  emergency: {
    name: 'Fatema Begum',
    relation: 'Mother',
    phone: '+880 1612-112233',
  },
};

const academicSnapshot = [
  { label: 'Current CGPA',    value: '3.72', sub: 'out of 4.00' },
  { label: 'Credits Earned',  value: '42',   sub: 'of 240 total' },
  { label: 'Attendance',      value: '87%',  sub: 'above threshold' },
  { label: 'Pending Dues',    value: '৳0',   sub: 'fully cleared' },
];

export default function StudentProfilePage() {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(studentData.id);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="flex flex-col gap-6 w-full h-full pb-10">
      {/* Profile Header Card */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        {/* Banner */}
        <div className="h-32 bg-gradient-to-r from-brand-primary-blue via-blue-600 to-blue-700 relative">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE4YzMuMzE0IDAgNi0yLjY4NiA2LTZzLTIuNjg2LTYtNi02LTYgMi42ODYtNiA2IDIuNjg2IDYgNiA2em0wIDIwYzMuMzE0IDAgNi0yLjY4NiA2LTZzLTIuNjg2LTYtNi02LTYgMi42ODYtNiA2IDIuNjg2IDYgNiA2em0tMjAgMGMzLjMxNCAwIDYtMi42ODYgNi02cy0yLjY4Ni02LTYtNi02IDIuNjg2LTYgNiAyLjY4NiA2IDYgNnptMC0yMGMzLjMxNCAwIDYtMi42ODYgNi02cy0yLjY4Ni02LTYtNi02IDIuNjg2LTYgNiAyLjY4NiA2IDYgNnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-30" />
        </div>

        {/* Profile Info */}
        <div className="px-6 sm:px-8 pb-6 -mt-14 relative">
          <div className="flex flex-col sm:flex-row sm:items-end gap-5">
            {/* Avatar */}
            <div className="w-28 h-28 rounded-2xl border-4 border-white shadow-lg bg-gradient-to-br from-brand-primary-blue to-blue-700 flex items-center justify-center text-white text-3xl font-black">
              AA
            </div>

            {/* Name & Meta */}
            <div className="flex-1 pt-2">
              <div className="flex items-center gap-3 flex-wrap">
                <h1 className="text-2xl font-black text-gray-900 tracking-tight">{studentData.name}</h1>
                <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-bold bg-emerald-50 text-emerald-700 border border-emerald-200">
                  <CheckCircle2 className="w-3 h-3" />
                  {studentData.status}
                </span>
              </div>
              <div className="flex items-center gap-4 mt-2 flex-wrap">
                <button onClick={handleCopy} className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-primary-blue hover:text-brand-primary-blue/80 transition-colors">
                  <IdCard className="w-3.5 h-3.5" />
                  {studentData.id}
                  {copied ? <CheckCircle2 className="w-3 h-3 text-emerald-500" /> : <Copy className="w-3 h-3" />}
                </button>
                <span className="text-xs font-semibold text-gray-400 flex items-center gap-1">
                  <GraduationCap className="w-3.5 h-3.5" />
                  {studentData.department}
                </span>
                <span className="text-xs font-semibold text-gray-400 flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5" />
                  {studentData.batch}
                </span>
              </div>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-2 shrink-0">
              <button className="px-4 py-2.5 text-xs font-bold rounded-lg border border-gray-200 text-gray-600 hover:bg-gray-50 transition-all flex items-center gap-2">
                <Download className="w-3.5 h-3.5" />
                ID Card
              </button>
              <button className="px-4 py-2.5 text-xs font-bold rounded-lg bg-brand-primary-blue text-white hover:bg-brand-primary-blue/90 transition-all flex items-center gap-2 shadow-sm active:scale-95">
                <Edit3 className="w-3.5 h-3.5" />
                Edit Profile
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Academic Snapshot */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {academicSnapshot.map((stat) => (
          <div key={stat.label} className="bg-white rounded-xl p-5 border border-gray-100 shadow-sm text-center hover:shadow-md transition-shadow">
            <p className="text-2xl font-black text-gray-900 leading-none">{stat.value}</p>
            <p className="text-[11px] font-bold text-gray-400 uppercase tracking-wider mt-1">{stat.label}</p>
            <p className="text-[10px] font-medium text-gray-300 mt-0.5">{stat.sub}</p>
          </div>
        ))}
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Personal Information */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="px-6 py-5 border-b border-gray-100">
            <h2 className="text-base font-bold text-gray-900 flex items-center gap-2">
              <User className="w-5 h-5 text-brand-primary-blue" />
              Personal Information
            </h2>
          </div>
          <div className="p-6 space-y-4">
            {[
              { icon: Mail,     label: 'Email',        value: studentData.email },
              { icon: Phone,    label: 'Mobile',       value: studentData.phone },
              { icon: Calendar, label: 'Date of Birth', value: studentData.dob },
              { icon: Droplet,  label: 'Blood Group',  value: studentData.bloodGroup },
              { icon: Shield,   label: 'NID / Birth Cert', value: studentData.nidNo },
              { icon: MapPin,   label: 'Permanent Address', value: studentData.address },
            ].map((field) => {
              const Icon = field.icon;
              return (
                <div key={field.label} className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-gray-50 flex items-center justify-center shrink-0 mt-0.5">
                    <Icon className="w-3.5 h-3.5 text-gray-400" />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">{field.label}</p>
                    <p className="text-sm font-semibold text-gray-800 mt-0.5">{field.value}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Academic + Guardian */}
        <div className="flex flex-col gap-6">
          {/* Academic Details */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="px-6 py-5 border-b border-gray-100">
              <h2 className="text-base font-bold text-gray-900 flex items-center gap-2">
                <GraduationCap className="w-5 h-5 text-emerald-600" />
                Academic Details
              </h2>
            </div>
            <div className="p-6 space-y-4">
              {[
                { label: 'Program',         value: studentData.department },
                { label: 'Current Phase',    value: studentData.phase },
                { label: 'Session',          value: studentData.session },
                { label: 'Enrollment Date',  value: studentData.enrollDate },
              ].map((field) => (
                <div key={field.label} className="flex items-center justify-between py-2 border-b border-gray-50 last:border-0">
                  <span className="text-xs font-bold text-gray-400">{field.label}</span>
                  <span className="text-sm font-bold text-gray-900">{field.value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Guardian Information */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="px-6 py-5 border-b border-gray-100">
              <h2 className="text-base font-bold text-gray-900 flex items-center gap-2">
                <Heart className="w-5 h-5 text-rose-500" />
                Guardian Information
              </h2>
            </div>
            <div className="p-6 space-y-5">
              {/* Primary */}
              <div className="p-4 bg-blue-50 border border-blue-100 rounded-xl">
                <p className="text-[10px] font-bold text-brand-primary-blue uppercase tracking-wider mb-2">Primary Guardian</p>
                <p className="text-sm font-bold text-gray-900">{studentData.guardian.name}</p>
                <div className="flex items-center gap-4 mt-1.5">
                  <span className="text-xs font-medium text-gray-500">{studentData.guardian.relation}</span>
                  <span className="text-xs font-medium text-gray-500">•</span>
                  <span className="text-xs font-semibold text-brand-primary-blue">{studentData.guardian.phone}</span>
                </div>
                <p className="text-[11px] font-medium text-gray-400 mt-1">{studentData.guardian.occupation}</p>
              </div>

              {/* Emergency */}
              <div className="p-4 bg-rose-50 border border-rose-100 rounded-xl">
                <p className="text-[10px] font-bold text-rose-600 uppercase tracking-wider mb-2">Emergency Contact</p>
                <p className="text-sm font-bold text-gray-900">{studentData.emergency.name}</p>
                <div className="flex items-center gap-4 mt-1.5">
                  <span className="text-xs font-medium text-gray-500">{studentData.emergency.relation}</span>
                  <span className="text-xs font-medium text-gray-500">•</span>
                  <span className="text-xs font-semibold text-rose-600">{studentData.emergency.phone}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
