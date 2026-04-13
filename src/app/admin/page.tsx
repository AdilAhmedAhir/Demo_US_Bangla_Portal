'use client'

import React from 'react';
import { ShieldAlert, Users, Activity, TrendingUp, AlertTriangle, MessageSquare, Landmark, CheckCircle2, GraduationCap } from 'lucide-react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

export default function PrincipalPortal() {
  const perfData = [
    { month: 'Jan', enrollment: 120, revenue: 45 },
    { month: 'Feb', enrollment: 120, revenue: 42 },
    { month: 'Mar', enrollment: 450, revenue: 120 },
    { month: 'Apr', enrollment: 480, revenue: 140 },
    { month: 'May', enrollment: 490, revenue: 145 },
    { month: 'Jun', enrollment: 850, revenue: 290 },
    { month: 'Jul', enrollment: 910, revenue: 310 },
  ];

  return (
    <div className="flex flex-col gap-6 w-full pb-10 max-w-[1400px]">
      <div className="mb-2 bg-slate-900 text-white rounded-2xl p-6 shadow-xl flex flex-col md:flex-row justify-between md:items-center relative overflow-hidden ring-1 ring-white/10">
        <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 blur-3xl rounded-full translate-x-1/2 -translate-y-1/2"></div>
        <div className="relative z-10">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold border border-emerald-500/30 text-emerald-400 mb-3 bg-emerald-500/10 backdrop-blur-sm">
            <ShieldAlert className="w-3.5 h-3.5" /> Principal Board Level Clearance
          </span>
          <h1 className="text-3xl sm:text-4xl font-black tracking-tight text-white mb-2">Office of the Principal</h1>
          <p className="text-sm text-slate-400 max-w-xl leading-relaxed">Executive oversight dashboard covering total admissions, board pass rates, faculty attendance, and core institutional operations.</p>
        </div>
        <div className="mt-6 md:mt-0 relative z-10 flex gap-4 md:flex-col md:text-right text-left">
           <div>
             <p className="text-xs text-brand-primary-green tracking-widest font-mono font-bold uppercase">Overall Board Pass Rate</p>
             <p className="text-2xl sm:text-3xl font-bold text-white font-serif tracking-widest leading-none mt-1">94.8%</p>
           </div>
           <div>
             <p className="text-xs text-brand-primary-green tracking-widest font-mono font-bold uppercase mt-2">Current Active Students</p>
             <p className="text-2xl sm:text-3xl font-bold text-emerald-400 font-mono tracking-widest leading-none mt-1">4,291</p>
           </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white rounded-2xl p-5 border border-slate-100 shadow-sm flex flex-col">
           <div className="flex justify-between items-center mb-4">
             <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center text-blue-600 border border-blue-100">
               <GraduationCap className="w-5 h-5" />
             </div>
             <span className="text-xs font-bold text-emerald-500 bg-emerald-50 px-2 py-1 rounded">+12% YoY</span>
           </div>
           <p className="text-sm font-bold text-slate-500 mb-1">New Admissions (YTD)</p>
           <h2 className="text-3xl font-black text-slate-900 clamp">824</h2>
        </div>
        <div className="bg-white rounded-2xl p-5 border border-slate-100 shadow-sm flex flex-col">
           <div className="flex justify-between items-center mb-4">
             <div className="w-10 h-10 rounded-lg bg-emerald-50 flex items-center justify-center text-emerald-600 border border-emerald-100">
               <Landmark className="w-5 h-5" />
             </div>
             <span className="text-xs font-bold text-emerald-500 bg-emerald-50 px-2 py-1 rounded">On Track</span>
           </div>
           <p className="text-sm font-bold text-slate-500 mb-1">Total Expected Fees (Term)</p>
           <h2 className="text-3xl font-black text-slate-900 clamp">৳42.5M</h2>
        </div>
        <div className="bg-white rounded-2xl p-5 border border-slate-100 shadow-sm flex flex-col">
           <div className="flex justify-between items-center mb-4">
             <div className="w-10 h-10 rounded-lg bg-purple-50 flex items-center justify-center text-purple-600 border border-purple-100">
               <Users className="w-5 h-5" />
             </div>
             <span className="text-xs font-bold text-emerald-500 bg-emerald-50 px-2 py-1 rounded">98% Present</span>
           </div>
           <p className="text-sm font-bold text-slate-500 mb-1">Active Faculty / Staff Today</p>
           <h2 className="text-3xl font-black text-slate-900 clamp">312</h2>
        </div>
        <div className="bg-slate-900 rounded-2xl p-5 shadow-lg flex flex-col justify-center relative overflow-hidden">
           <div className="relative z-10 text-center">
             <AlertTriangle className="w-8 h-8 text-amber-500 mx-auto mb-3" />
             <p className="text-sm font-bold text-slate-300 mb-1">Critical Incidents</p>
             <h2 className="text-xl font-bold text-white">0 Reports</h2>
           </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
         {/* Live Chart Section */}
         <div className="lg:col-span-2 bg-white rounded-2xl border border-slate-200 shadow-sm p-6 overflow-hidden">
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-lg font-black text-slate-900 flex items-center gap-2">
                 <TrendingUp className="w-5 h-5 text-emerald-600" /> Admissions & Financial Growth
              </h3>
              <div className="flex gap-2">
                <span className="flex items-center gap-1.5 text-xs font-bold text-slate-600"><div className="w-2 h-2 rounded-full bg-emerald-600"></div> Admissions Volume</span>
                <span className="flex items-center gap-1.5 text-xs font-bold text-slate-600"><div className="w-2 h-2 rounded-full bg-blue-600"></div> Revenue Tranche (K)</span>
              </div>
            </div>
            
            <div className="h-[300px] w-full">
               <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={perfData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                    <defs>
                      <linearGradient id="colorAdmissions" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#059669" stopOpacity={0.8}/>
                        <stop offset="95%" stopColor="#059669" stopOpacity={0}/>
                      </linearGradient>
                      <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#2563EB" stopOpacity={0.8}/>
                        <stop offset="95%" stopColor="#2563EB" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E5E7EB" />
                    <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#64748b' }} dy={10} />
                    <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#64748b' }} />
                    <Tooltip 
                      contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)', fontWeight: 'bold' }}
                      itemStyle={{ color: '#0f172a' }}
                    />
                    <Area type="monotone" dataKey="enrollment" stroke="#059669" strokeWidth={3} fillOpacity={1} fill="url(#colorAdmissions)" />
                    <Area type="monotone" dataKey="revenue" stroke="#2563EB" strokeWidth={3} fillOpacity={1} fill="url(#colorRevenue)" />
                  </AreaChart>
               </ResponsiveContainer>
            </div>
         </div>

         {/* Principal & Department Heads Chat */}
         <div className="bg-slate-50 rounded-2xl border border-slate-200 shadow-sm flex flex-col overflow-hidden h-[410px]">
           <div className="px-5 py-4 bg-white border-b border-slate-200 flex items-center justify-between">
             <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                <MessageSquare className="w-4 h-4 text-brand-primary-blue" /> Department Heads Comms
             </h3>
             <span className="flex w-2 h-2">
                <span className="animate-ping absolute inline-flex h-2 w-2 rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
             </span>
           </div>
           
           <div className="flex-1 p-4 overflow-y-auto space-y-4 text-xs font-sans">
              <div className="bg-emerald-50 border border-emerald-100 text-emerald-900 p-3 rounded-xl rounded-tl-none max-w-[90%] shadow-sm">
                 <strong className="block text-emerald-700 mb-1">Dr. Shahin (Anatomy) [10:41]</strong>
                 Good morning Principal, all Year 2 mid-term results have been successfully uploaded to the portal lock. No major anomalies.
              </div>
              
              <div className="flex justify-end">
                <div className="bg-slate-900 text-slate-100 p-3 rounded-xl rounded-tr-none max-w-[90%] shadow-sm leading-relaxed">
                   <strong className="block text-white mb-1">Principal (You) [10:45]</strong>
                   Excellent work Doctor. Will generate the Guardian SMS blast at noon.
                </div>
              </div>

              <div className="bg-amber-50 border border-amber-200 text-amber-900 p-3 rounded-xl rounded-tl-none max-w-[90%] shadow-sm">
                 <strong className="block text-amber-700 mb-1">Chief Admin Officer [10:47]</strong>
                 Hostel block B is undergoing emergency water maintenance. Sent out app notifications to the 120 affected students. Expected fix in 2 hrs.
              </div>

              <div className="bg-white border border-slate-200 text-slate-800 p-3 rounded-xl rounded-tl-none max-w-[90%] shadow-sm">
                 <strong className="block text-slate-500 mb-1">Accounts Head [10:48]</strong>
                 Sending over the Term dues defaulters list shortly. We have 14 students flagged in the critical zone (45+ days late).
              </div>
           </div>
         </div>
      </div>
    </div>
  );
}
