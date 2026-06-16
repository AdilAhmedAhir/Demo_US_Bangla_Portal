import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import {
  ArrowLeft,
  Users,
  Mail,
  MapPin,
  GraduationCap,
  BadgeCheck,
  Stethoscope,
} from 'lucide-react';
import { courses, getCourse } from '@/data/academics';

export function generateStaticParams() {
  return courses.map((course) => ({ code: course.code }));
}

export default async function CourseFacultyPage({
  params,
}: {
  params: Promise<{ code: string }>;
}) {
  const { code } = await params;
  const course = getCourse(code);

  if (!course) {
    notFound();
  }

  const head = course.faculty[0];

  return (
    <div className="flex flex-col gap-6 w-full pb-10">
      {/* Back link */}
      <Link
        href="/"
        className="inline-flex items-center gap-1.5 text-sm font-semibold text-gray-500 hover:text-brand-primary-blue transition-colors w-fit"
      >
        <ArrowLeft className="w-4 h-4" /> Back to Dashboard
      </Link>

      {/* Header */}
      <div className="bg-white rounded-2xl p-6 md:p-8 border border-gray-100 shadow-sm relative overflow-hidden">
        <div className="absolute right-0 top-0 w-64 h-64 bg-gradient-to-tr from-transparent to-brand-primary-blue/5 rounded-full -mr-20 -mt-20 pointer-events-none" />
        <div className="relative z-10 flex flex-col gap-3">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-[10px] font-bold text-gray-400 bg-gray-100 px-2 py-0.5 rounded">{course.code}</span>
            <span className="inline-flex items-center gap-1 text-[11px] font-bold text-brand-primary-blue bg-brand-primary-blue/10 px-2.5 py-1 rounded-full">
              {course.phase} · {course.phaseLabel}
            </span>
            <span className="text-[11px] font-semibold text-gray-400">{course.professionalExam}</span>
          </div>
          <h1 className="text-2xl md:text-3xl font-bold tracking-tight text-gray-900">
            {course.name}
          </h1>
          <p className="flex items-center gap-2 text-sm font-medium text-gray-500">
            <Users className="w-4 h-4 text-brand-primary-blue" />
            Department Faculty — {course.faculty.length} members
          </p>
        </div>
      </div>

      {/* Head highlight */}
      <div className="bg-gradient-to-r from-brand-primary-blue to-blue-700 rounded-2xl p-6 shadow-lg text-white relative overflow-hidden">
        <div className="absolute right-0 bottom-0 opacity-10 pointer-events-none">
          <Stethoscope className="w-40 h-40 -mb-6 -mr-6" />
        </div>
        <div className="relative z-10 flex flex-col sm:flex-row sm:items-center gap-4">
          <div className="w-16 h-16 rounded-2xl bg-white/15 backdrop-blur-sm flex items-center justify-center text-2xl font-black shrink-0">
            {head.name.replace(/^(Prof\.|Dr\.)\s*/g, '').charAt(0)}
          </div>
          <div>
            <div className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider bg-white/15 px-2.5 py-1 rounded-full mb-2">
              <BadgeCheck className="w-3.5 h-3.5" /> {head.designation}
            </div>
            <h2 className="text-xl font-bold">{head.name}</h2>
            <p className="text-sm text-white/80 mt-0.5">{head.qualifications}</p>
            <p className="text-sm text-white/70 mt-1">{head.specialization}</p>
          </div>
        </div>
      </div>

      {/* Faculty grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {course.faculty.slice(1).map((member) => (
          <div
            key={member.email}
            className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm hover:shadow-md transition-shadow flex gap-4"
          >
            <div className="w-12 h-12 rounded-xl bg-brand-primary-blue/10 text-brand-primary-blue flex items-center justify-center text-lg font-black shrink-0">
              {member.name.replace(/^(Prof\.|Dr\.)\s*/g, '').charAt(0)}
            </div>
            <div className="flex flex-col gap-1 min-w-0">
              <div className="flex items-center gap-2 flex-wrap">
                <h3 className="text-sm font-bold text-gray-900">{member.name}</h3>
                <span className="text-[10px] font-bold text-brand-primary-blue bg-brand-primary-blue/5 px-2 py-0.5 rounded-full">
                  {member.designation}
                </span>
              </div>
              <p className="text-xs font-medium text-gray-500 flex items-center gap-1.5">
                <GraduationCap className="w-3.5 h-3.5 text-gray-400" /> {member.qualifications}
              </p>
              <p className="text-xs font-semibold text-gray-700">{member.specialization}</p>
              <div className="flex flex-col gap-0.5 mt-1">
                <a href={`mailto:${member.email}`} className="text-[11px] text-gray-400 hover:text-brand-primary-blue flex items-center gap-1.5 transition-colors w-fit">
                  <Mail className="w-3 h-3" /> {member.email}
                </a>
                <p className="text-[11px] text-gray-400 flex items-center gap-1.5">
                  <MapPin className="w-3 h-3" /> {member.chamber}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
