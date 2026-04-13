'use client'

import React from 'react';
import { ShieldAlert, Users, TrendingUp, AlertTriangle, MessageSquare, Landmark, GraduationCap, UserCheck, Award, BookOpen } from 'lucide-react';
import { AreaChart, Area, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

export default function PrincipalPortal() {
  const revenueData = [
    { month: 'Jan', collected: 38, expected: 42 },
    { month: 'Feb', collected: 40, expected: 42 },
    { month: 'Mar', collected: 39, expected: 44 },
    { month: 'Apr', collected: 41, expected: 45 },
    { month: 'May', collected: 43, expected: 45 },
    { month: 'Jun', collected: 35, expected: 48 },
    { month: 'Jul', collected: 44, expected: 48 },
  ];

  const attendanceData = [
    { dept: 'Anatomy', rate: 92 },
    { dept: 'Physiology', rate: 88 },
    { dept: 'Biochem', rate: 85 },
    { dept: 'Pathology', rate: 90 },
    { dept: 'Pharma', rate: 87 },
    { dept: 'Micro', rate: 91 },
  ];

  const pieData = [
    { name: 'Present', value: 3820, color: '#059669' },
    { name: 'Late', value: 280, color: '#F59E0B' },
    { name: 'Absent', value: 191, color: '#EF4444' },
  ];

  const topTeachers = [
    { name: 'Dr. Shahin Rahman', dept: 'Anatomy', rating: 4.9, classes: 48, attendance: '100%' },
    { name: 'Dr. Fatima Akter', dept: 'Physiology', rating: 4.8, classes: 45, attendance: '98%' },
    { name: 'Dr. Kamal Hossain', dept: 'Pathology', rating: 4.7, classes: 46, attendance: '100%' },
    { name: 'Dr. Nusrat Begum', dept: 'Pharmacology', rating: 4.6, classes: 44, attendance: '96%' },
  ];

  return (
    <div className="flex flex-col gap-6 w-full pb-10 max-w-[1400px]">
      {/* Principal Header */}
      <div className="mb-2 bg-slate-900 text-white rounded-2xl p-6 shadow-xl flex flex-col md:flex-row justify-between md:items-center relative overflow-hidden ring-1 ring-white/10">
        <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 blur-3xl rounded-full translate-x-1/2 -translate-y-1/2"></div>
        <div className="relative z-10">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold border border-emerald-500/30 text-emerald-400 mb-3 bg-emerald-500/10 backdrop-blur-sm">
            <ShieldAlert className="w-3.5 h-3.5" /> Principal Board Level Clearance
          </span>
          <h1 className="text-3xl sm:text-4xl font-black tracking-tight text-white mb-2">Office of the Principal</h1>
          <p className="text-sm text-slate-400 max-w-xl leading-relaxed">Executive oversight of student performance, faculty evaluation, financial health, and campus operations.</p>
        </div>
        <div className="mt-6 md:mt-0 relative z-10 flex gap-6 md:flex-col md:text-right text-left">
           <div>
             <p className="text-[10px] text-emerald-400 tracking-widest font-bold uppercase">Board Pass Rate</p>
             <p className="text-3xl font-black text-white font-mono leading-none mt-1">94.8%</p>
           </div>
           <div>
             <p className="text-[10px] text-emerald-400 tracking-widest font-bold uppercase mt-2">Active Students</p>
             <p className="text-3xl font-black text-emerald-400 font-mono leading-none mt-1">4,291</p>
           </div>
        </div>
      </div>

      {/* Quick Metrics Row */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
        <div className="bg-white rounded-xl p-4 border border-slate-100 shadow-sm">
           <p className="text-[11px] font-bold text-slate-400 uppercase mb-1">Total Students</p>
           <h2 className="text-2xl font-black text-slate-900">4,291</h2>
        </div>
        <div className="bg-white rounded-xl p-4 border border-slate-100 shadow-sm">
           <p className="text-[11px] font-bold text-slate-400 uppercase mb-1">Total Faculty</p>
           <h2 className="text-2xl font-black text-slate-900">312</h2>
        </div>
        <div className="bg-white rounded-xl p-4 border border-slate-100 shadow-sm">
           <p className="text-[11px] font-bold text-emerald-500 uppercase mb-1">Attendance Today</p>
           <h2 className="text-2xl font-black text-emerald-600">89%</h2>
        </div>
        <div className="bg-white rounded-xl p-4 border border-slate-100 shadow-sm">
           <p className="text-[11px] font-bold text-slate-400 uppercase mb-1">Avg CGPA</p>
           <h2 className="text-2xl font-black text-slate-900">3.41</h2>
        </div>
        <div className="bg-white rounded-xl p-4 border border-slate-100 shadow-sm">
           <p className="text-[11px] font-bold text-red-500 uppercase mb-1">Due Fees</p>
           <h2 className="text-2xl font-black text-red-600">৳1.8M</h2>
        </div>
        <div className="bg-white rounded-xl p-4 border border-slate-100 shadow-sm">
           <p className="text-[11px] font-bold text-slate-400 uppercase mb-1">New Admissions</p>
           <h2 className="text-2xl font-black text-slate-900">824</h2>
        </div>
      </div>

      {/* Row 2: Revenue Chart + Student Attendance Pie */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white rounded-2xl border border-slate-200 shadow-sm p-6 overflow-hidden">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-base font-black text-slate-900 flex items-center gap-2">
                 <Landmark className="w-5 h-5 text-emerald-600" /> Revenue: Collected vs Expected (Lakhs)
              </h3>
              <div className="flex gap-3">
                <span className="flex items-center gap-1.5 text-xs font-bold text-slate-500"><div className="w-2.5 h-2.5 rounded-sm bg-emerald-500"></div> Collected</span>
                <span className="flex items-center gap-1.5 text-xs font-bold text-slate-500"><div className="w-2.5 h-2.5 rounded-sm bg-slate-300"></div> Expected</span>
              </div>
            </div>
            <div className="h-[260px] w-full">
               <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={revenueData} barGap={4}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E5E7EB" />
                    <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#64748b', fontWeight: 700 }} dy={10} />
                    <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#64748b' }} />
                    <Tooltip contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)', fontWeight: 'bold' }} />
                    <Bar dataKey="expected" fill="#CBD5E1" radius={[6, 6, 0, 0]} barSize={28} />
                    <Bar dataKey="collected" fill="#059669" radius={[6, 6, 0, 0]} barSize={28} />
                  </BarChart>
               </ResponsiveContainer>
            </div>
        </div>

        {/* Student Attendance Pie Chart */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6">
          <h3 className="text-base font-black text-slate-900 flex items-center gap-2 mb-4">
             <UserCheck className="w-5 h-5 text-brand-primary-blue" /> Student Attendance (Today)
          </h3>
          <div className="h-[200px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie data={pieData} cx="50%" cy="50%" innerRadius={55} outerRadius={85} paddingAngle={4} dataKey="value" strokeWidth={0}>
                  {pieData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip contentStyle={{ borderRadius: '10px', border: 'none', boxShadow: '0 2px 8px rgba(0,0,0,0.1)', fontWeight: 'bold' }} />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="flex justify-center gap-4 mt-2">
            {pieData.map((entry, i) => (
              <div key={i} className="flex items-center gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: entry.color }}></div>
                <span className="text-xs font-bold text-slate-600">{entry.name} ({entry.value})</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Row 3: Dept Attendance Bar + Teacher Performance Table */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Department-wise Attendance */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 overflow-hidden">
          <h3 className="text-base font-black text-slate-900 flex items-center gap-2 mb-6">
             <BookOpen className="w-5 h-5 text-purple-600" /> Attendance Rate by Department (%)
          </h3>
          <div className="h-[250px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={attendanceData} layout="vertical" barCategoryGap={12}>
                <CartesianGrid strokeDasharray="3 3" horizontal={false} stroke="#E5E7EB" />
                <XAxis type="number" domain={[70, 100]} axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#64748b' }} />
                <YAxis type="category" dataKey="dept" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#334155', fontWeight: 700 }} width={80} />
                <Tooltip contentStyle={{ borderRadius: '10px', border: 'none', boxShadow: '0 2px 8px rgba(0,0,0,0.1)', fontWeight: 'bold' }} />
                <Bar dataKey="rate" fill="#7C3AED" radius={[0, 8, 8, 0]} barSize={22} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Teacher Performance Leaderboard */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
          <div className="px-6 py-5 border-b border-slate-100 bg-slate-50/50">
            <h3 className="text-base font-black text-slate-900 flex items-center gap-2">
               <Award className="w-5 h-5 text-amber-500" /> Top Faculty Performance (Term)
            </h3>
          </div>
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-slate-100 text-[11px] uppercase text-slate-400">
                <th className="px-6 py-3 font-bold">Faculty</th>
                <th className="px-4 py-3 font-bold text-center">Rating</th>
                <th className="px-4 py-3 font-bold text-center">Classes</th>
                <th className="px-4 py-3 font-bold text-center">Attend.</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
              {topTeachers.map((t, i) => (
                <tr key={i} className="hover:bg-slate-50 transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-bold ${i === 0 ? 'bg-amber-500' : i === 1 ? 'bg-slate-400' : i === 2 ? 'bg-amber-700' : 'bg-slate-300'}`}>
                        {i + 1}
                      </div>
                      <div>
                        <p className="font-bold text-slate-900 text-sm">{t.name}</p>
                        <p className="text-[11px] text-slate-400 font-medium">{t.dept}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-4 text-center">
                    <span className="text-sm font-black text-amber-600">{t.rating}</span>
                    <span className="text-amber-400 text-xs"> ★</span>
                  </td>
                  <td className="px-4 py-4 text-center font-bold text-sm text-slate-700">{t.classes}</td>
                  <td className="px-4 py-4 text-center">
                    <span className={`text-xs font-bold px-2 py-1 rounded ${t.attendance === '100%' ? 'bg-emerald-50 text-emerald-700' : 'bg-amber-50 text-amber-700'}`}>{t.attendance}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Row 4: Admissions Growth + Department Heads Chat */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
         <div className="lg:col-span-2 bg-white rounded-2xl border border-slate-200 shadow-sm p-6 overflow-hidden">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-base font-black text-slate-900 flex items-center gap-2">
                 <TrendingUp className="w-5 h-5 text-brand-primary-blue" /> Admissions Growth Trend (2026)
              </h3>
            </div>
            <div className="h-[250px] w-full">
               <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={revenueData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                    <defs>
                      <linearGradient id="colorAdmissions" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#0072bc" stopOpacity={0.8}/>
                        <stop offset="95%" stopColor="#0072bc" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E5E7EB" />
                    <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#64748b', fontWeight: 700 }} dy={10} />
                    <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#64748b' }} />
                    <Tooltip contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)', fontWeight: 'bold' }} />
                    <Area type="monotone" dataKey="collected" stroke="#0072bc" strokeWidth={3} fillOpacity={1} fill="url(#colorAdmissions)" name="Admissions" />
                  </AreaChart>
               </ResponsiveContainer>
            </div>
         </div>

         {/* Department Heads Chat */}
         <div className="bg-slate-50 rounded-2xl border border-slate-200 shadow-sm flex flex-col overflow-hidden h-[370px]">
           <div className="px-5 py-4 bg-white border-b border-slate-200 flex items-center justify-between">
             <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                <MessageSquare className="w-4 h-4 text-brand-primary-blue" /> Department Heads
             </h3>
             <span className="relative flex w-2 h-2">
                <span className="animate-ping absolute inline-flex h-2 w-2 rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
             </span>
           </div>
           <div className="flex-1 p-4 overflow-y-auto space-y-3 text-xs font-sans">
              <div className="bg-emerald-50 border border-emerald-100 text-emerald-900 p-3 rounded-xl rounded-tl-none max-w-[90%] shadow-sm">
                 <strong className="block text-emerald-700 mb-1">Dr. Shahin (Anatomy) [10:41]</strong>
                 All Year 2 mid-term results uploaded. No major anomalies detected.
              </div>
              <div className="flex justify-end">
                <div className="bg-slate-900 text-slate-100 p-3 rounded-xl rounded-tr-none max-w-[90%] shadow-sm leading-relaxed">
                   <strong className="block text-white mb-1">Principal (You) [10:45]</strong>
                   Excellent. Will generate the Guardian SMS blast at noon.
                </div>
              </div>
              <div className="bg-amber-50 border border-amber-200 text-amber-900 p-3 rounded-xl rounded-tl-none max-w-[90%] shadow-sm">
                 <strong className="block text-amber-700 mb-1">Chief Admin [10:47]</strong>
                 Hostel block B maintenance underway. 120 students notified via app push.
              </div>
              <div className="bg-white border border-slate-200 text-slate-800 p-3 rounded-xl rounded-tl-none max-w-[90%] shadow-sm">
                 <strong className="block text-slate-500 mb-1">Accounts Head [10:48]</strong>
                 14 students flagged critical (45+ days overdue). Report attached.
              </div>
           </div>
         </div>
      </div>

      {/* Row 5: Alerts Banner */}
      <div className="bg-amber-50 border-2 border-amber-200 rounded-2xl p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="flex items-start gap-3">
          <AlertTriangle className="w-6 h-6 text-amber-600 shrink-0 mt-0.5" />
          <div>
            <h4 className="font-bold text-amber-900">Attention Required</h4>
            <p className="text-sm text-amber-700 mt-0.5">14 students have outstanding tuition dues exceeding 45 days. 3 faculty members had below 80% class attendance this term.</p>
          </div>
        </div>
        <button className="bg-amber-600 hover:bg-amber-700 text-white px-5 py-2.5 rounded-lg text-sm font-bold shadow-sm transition-colors whitespace-nowrap">
          Generate Full Report
        </button>
      </div>
    </div>
  );
}
