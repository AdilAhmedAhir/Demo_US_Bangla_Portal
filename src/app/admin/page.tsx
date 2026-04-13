'use client'

import React from 'react';
import { ShieldAlert, Server, Users, Activity, TrendingUp, AlertTriangle, Terminal, Send, SearchCode } from 'lucide-react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

export default function AdminPortal() {
  const perfData = [
    { time: '00:00', load: 30, traffic: 400 },
    { time: '04:00', load: 15, traffic: 200 },
    { time: '08:00', load: 85, traffic: 1200 },
    { time: '12:00', load: 95, traffic: 2400 },
    { time: '16:00', load: 60, traffic: 1800 },
    { time: '20:00', load: 45, traffic: 800 },
    { time: '23:59', load: 25, traffic: 350 },
  ];

  return (
    <div className="flex flex-col gap-6 w-full pb-10 max-w-[1400px]">
      <div className="mb-2 bg-gray-900 text-white rounded-2xl p-6 shadow-xl flex flex-col md:flex-row justify-between md:items-center relative overflow-hidden ring-1 ring-white/10">
        <div className="absolute top-0 right-0 w-64 h-64 bg-brand-primary-blue/20 blur-3xl rounded-full translate-x-1/2 -translate-y-1/2"></div>
        <div className="relative z-10">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold border border-green-500/30 text-green-400 mb-3 bg-green-500/10 backdrop-blur-sm">
            <ShieldAlert className="w-3.5 h-3.5" /> High-Level Root Clearance
          </span>
          <h1 className="text-3xl sm:text-4xl font-black tracking-tight text-white mb-2">Global Command</h1>
          <p className="text-sm text-gray-400 max-w-xl leading-relaxed">Direct manipulation terminal for PostgreSQL infrastructure, IAM routing, and active system resource monitoring.</p>
        </div>
        <div className="mt-6 md:mt-0 relative z-10 flex gap-4 md:flex-col md:text-right text-left">
           <div>
             <p className="text-xs text-brand-primary-blue tracking-widest font-mono font-bold uppercase">DB Uptime</p>
             <p className="text-2xl sm:text-3xl font-bold text-white font-mono tracking-widest leading-none mt-1">99.98%</p>
           </div>
           <div>
             <p className="text-xs text-brand-primary-blue tracking-widest font-mono font-bold uppercase mt-2">Active Connections</p>
             <p className="text-2xl sm:text-3xl font-bold text-emerald-400 font-mono tracking-widest leading-none mt-1">4,291</p>
           </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm flex flex-col">
           <div className="flex justify-between items-center mb-4">
             <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center text-brand-primary-blue border border-blue-100">
               <Activity className="w-5 h-5" />
             </div>
             <span className="text-xs font-bold text-emerald-500 bg-emerald-50 px-2 py-1 rounded">+12%</span>
           </div>
           <p className="text-sm font-bold text-gray-500 mb-1">API Requests (24h)</p>
           <h2 className="text-3xl font-black text-gray-900 clamp">1.2M</h2>
        </div>
        <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm flex flex-col">
           <div className="flex justify-between items-center mb-4">
             <div className="w-10 h-10 rounded-lg bg-purple-50 flex items-center justify-center text-purple-600 border border-purple-100">
               <TrendingUp className="w-5 h-5" />
             </div>
             <span className="text-xs font-bold text-emerald-500 bg-emerald-50 px-2 py-1 rounded">Stable</span>
           </div>
           <p className="text-sm font-bold text-gray-500 mb-1">Monthly Cloud Spend</p>
           <h2 className="text-3xl font-black text-gray-900 clamp">$4,250</h2>
        </div>
        <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm flex flex-col">
           <div className="flex justify-between items-center mb-4">
             <div className="w-10 h-10 rounded-lg bg-orange-50 flex items-center justify-center text-orange-600 border border-orange-100">
               <AlertTriangle className="w-5 h-5" />
             </div>
             <span className="text-xs font-bold text-orange-500 bg-orange-50 px-2 py-1 rounded">2 Unresolved</span>
           </div>
           <p className="text-sm font-bold text-gray-500 mb-1">System Anomalies</p>
           <h2 className="text-3xl font-black text-gray-900 clamp">7</h2>
        </div>
        <div className="bg-gray-900 rounded-2xl p-5 shadow-lg flex flex-col justify-center relative overflow-hidden">
           <div className="relative z-10">
             <Terminal className="w-8 h-8 text-brand-primary-green mb-4" />
             <p className="text-sm font-bold text-gray-300 mb-1">Emergency Actions</p>
             <button className="text-xs w-full py-2 bg-red-600 hover:bg-red-700 text-white font-bold rounded-lg transition-colors mt-2">Force Clear Cache</button>
           </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
         {/* Live Chart Section */}
         <div className="lg:col-span-2 bg-white rounded-2xl border border-gray-200 shadow-sm p-6 overflow-hidden">
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-lg font-black text-gray-900 flex items-center gap-2">
                 <Server className="w-5 h-5 text-brand-primary-blue" /> Cluster Resource Allocation
              </h3>
              <div className="flex gap-2">
                <span className="flex items-center gap-1.5 text-xs font-bold text-gray-600"><div className="w-2 h-2 rounded-full bg-brand-primary-blue"></div> Server Load %</span>
                <span className="flex items-center gap-1.5 text-xs font-bold text-gray-600"><div className="w-2 h-2 rounded-full bg-brand-primary-green"></div> Network Traffic (GB)</span>
              </div>
            </div>
            
            <div className="h-[300px] w-full">
               <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={perfData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                    <defs>
                      <linearGradient id="colorLoad" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#0072bc" stopOpacity={0.8}/>
                        <stop offset="95%" stopColor="#0072bc" stopOpacity={0}/>
                      </linearGradient>
                      <linearGradient id="colorTraffic" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#39b54a" stopOpacity={0.8}/>
                        <stop offset="95%" stopColor="#39b54a" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E5E7EB" />
                    <XAxis dataKey="time" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#6B7280' }} dy={10} />
                    <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#6B7280' }} />
                    <Tooltip 
                      contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)', fontWeight: 'bold' }}
                      itemStyle={{ color: '#111827' }}
                    />
                    <Area type="monotone" dataKey="traffic" stroke="#39b54a" strokeWidth={3} fillOpacity={1} fill="url(#colorTraffic)" />
                    <Area type="monotone" dataKey="load" stroke="#0072bc" strokeWidth={3} fillOpacity={1} fill="url(#colorLoad)" />
                  </AreaChart>
               </ResponsiveContainer>
            </div>
         </div>

         {/* Ops Terminal / Live Chat */}
         <div className="bg-gray-50 rounded-2xl border border-gray-200 shadow-sm flex flex-col overflow-hidden h-[410px]">
           <div className="px-5 py-4 bg-white border-b border-gray-200 flex items-center justify-between">
             <h3 className="text-sm font-bold text-gray-900 flex items-center gap-2">
                <SearchCode className="w-4 h-4 text-brand-primary-green" /> DevOps / Master Sec Chat
             </h3>
             <span className="flex w-2 h-2">
                <span className="animate-ping absolute inline-flex h-2 w-2 rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
             </span>
           </div>
           
           <div className="flex-1 p-4 overflow-y-auto space-y-4 text-xs font-mono">
              <div className="bg-blue-100/50 border border-blue-200 text-blue-900 p-3 rounded-lg rounded-tl-none max-w-[90%] shadow-sm">
                 <strong className="block text-blue-700 mb-1">System Bot [10:41]</strong>
                 Backups completed successfully to S3 bucket /usbm-vault/.
              </div>
              
              <div className="flex justify-end">
                <div className="bg-gray-900 text-green-400 p-3 rounded-lg rounded-tr-none max-w-[90%] shadow-sm leading-relaxed">
                   <strong className="block text-white mb-1">Sys Admin (You) [10:45]</strong>
                   Acknowledge. Proceed with indexing new Term 4 syllabus records.
                </div>
              </div>

              <div className="bg-red-50 border border-red-200 text-red-900 p-3 rounded-lg rounded-tl-none max-w-[90%] shadow-sm">
                 <strong className="block text-red-700 mb-1">WAF Alert [10:47]</strong>
                 Detected multiple failed requests targeting /api/auth. Temporarily blacklisted IP range 192.168.* 
              </div>

              <div className="bg-white border border-gray-200 text-gray-800 p-3 rounded-lg rounded-tl-none max-w-[90%] shadow-sm">
                 <strong className="block text-gray-500 mb-1">Ops Lead M.Hasan [10:48]</strong>
                 I am reviewing the WAF logs now. Traffic looks standard. Might be a false flag from ISP load balancer.
              </div>
           </div>

           <div className="px-3 pb-3 bg-gray-50">
             <div className="relative">
               <input 
                 type="text" 
                 placeholder="Terminal CMD or message..." 
                 className="w-full bg-white border border-gray-300 rounded-lg pl-3 pr-10 py-2.5 text-xs font-mono focus:ring-2 focus:ring-brand-primary-blue focus:border-brand-primary-blue shadow-sm outline-none"
               />
               <button className="absolute right-2 top-2 p-1 bg-brand-primary-blue text-white rounded cursor-pointer hover:bg-blue-700 transition-colors">
                  <Send className="w-3.5 h-3.5 transform -translate-x-0.5" />
               </button>
             </div>
           </div>
         </div>
      </div>
    </div>
  );
}
