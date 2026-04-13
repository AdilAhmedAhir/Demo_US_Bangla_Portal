import React from 'react';
import { ShieldAlert, Server, Users, Activity, TrendingUp, AlertTriangle } from 'lucide-react';

export default function AdminPortal() {
  return (
    <div className="flex flex-col gap-6 w-full pb-10">
      <div className="mb-2 bg-gray-900 text-white rounded-2xl p-6 shadow-md flex justify-between items-center bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]">
        <div>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-white/20 text-white mb-3 backdrop-blur-sm">
            <ShieldAlert className="w-3.5 h-3.5" /> Super Admin Credentials Active
          </span>
          <h1 className="text-3xl font-bold tracking-tight text-white drop-shadow-sm">System Command Center</h1>
          <p className="mt-2 text-sm text-gray-200">Global overview across all campus portals and database integrity.</p>
        </div>
        <div className="text-right hidden sm:block">
           <p className="text-sm text-gray-400 font-mono">System Up Time</p>
           <p className="text-2xl font-bold text-green-400 font-mono tracking-widest leading-none mt-1">99.98%</p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white rounded-2xl p-6 border-b-4 border-b-brand-primary-blue shadow-sm hover:shadow-md transition-shadow">
          <div className="flex justify-between items-start">
             <div>
               <p className="text-sm font-bold text-gray-500 mb-1">Total Active Students</p>
               <h2 className="text-3xl font-black text-gray-900">4,281</h2>
             </div>
             <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-brand-primary-blue">
               <Users className="w-5 h-5" />
             </div>
          </div>
        </div>
        <div className="bg-white rounded-2xl p-6 border-b-4 border-b-brand-primary-green shadow-sm hover:shadow-md transition-shadow">
          <div className="flex justify-between items-start">
             <div>
               <p className="text-sm font-bold text-gray-500 mb-1">Total Staff & Teachers</p>
               <h2 className="text-3xl font-black text-gray-900">312</h2>
             </div>
             <div className="w-10 h-10 rounded-full bg-green-50 flex items-center justify-center text-brand-primary-green">
               <Users className="w-5 h-5" />
             </div>
          </div>
        </div>
        <div className="bg-white rounded-2xl p-6 border-b-4 border-b-emerald-500 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex justify-between items-start">
             <div>
               <p className="text-sm font-bold text-gray-500 mb-1">Collected Revenue (Mo)</p>
               <h2 className="text-3xl font-black text-gray-900">৳8.4M</h2>
             </div>
             <div className="w-10 h-10 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-500">
               <TrendingUp className="w-5 h-5" />
             </div>
          </div>
        </div>
        <div className="bg-white rounded-2xl p-6 border-b-4 border-b-brand-accent-red shadow-sm hover:shadow-md transition-shadow">
          <div className="flex justify-between items-start">
             <div>
               <p className="text-sm font-bold text-gray-500 mb-1">Server Resource Load</p>
               <h2 className="text-3xl font-black text-brand-accent-red">82%</h2>
             </div>
             <div className="w-10 h-10 rounded-full bg-red-50 flex items-center justify-center text-brand-accent-red">
               <Server className="w-5 h-5" />
             </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
         <div className="bg-white rounded-2xl border border-gray-100 shadow-sm">
           <div className="px-6 py-5 border-b border-gray-100">
             <h3 className="text-base font-bold text-gray-900 flex items-center gap-2">
                <Activity className="w-5 h-5 text-purple-500" /> Recent System Logs (PostgreSQL)
             </h3>
           </div>
           <div className="p-6">
              <ul className="space-y-4 font-mono text-xs">
                <li className="flex gap-4 p-3 bg-gray-50 rounded-lg">
                  <span className="text-gray-400 whitespace-nowrap">10:42 AM</span>
                  <span className="text-brand-primary-green font-bold">[AUTH]</span>
                  <span className="text-gray-700">Teacher Dr. Shahin logged in via 2FA.</span>
                </li>
                <li className="flex gap-4 p-3 bg-gray-50 rounded-lg">
                  <span className="text-gray-400 whitespace-nowrap">10:39 AM</span>
                  <span className="text-brand-primary-blue font-bold">[FINANCE]</span>
                  <span className="text-gray-700">Payment Gateway webhook received TRX-9281. Row updated.</span>
                </li>
                <li className="flex gap-4 p-3 bg-red-50 border border-red-100 rounded-lg">
                  <span className="text-gray-400 whitespace-nowrap">10:30 AM</span>
                  <span className="text-brand-accent-red font-bold">[WARN]</span>
                  <span className="text-gray-800">Multiple failed login attempts for student id: USB-1829. IP Blocked.</span>
                </li>
                <li className="flex gap-4 p-3 bg-gray-50 rounded-lg">
                  <span className="text-gray-400 whitespace-nowrap">10:15 AM</span>
                  <span className="text-indigo-500 font-bold">[SMS]</span>
                  <span className="text-gray-700">Triggered 45 attendance absence alerts via API.</span>
                </li>
              </ul>
           </div>
         </div>
      </div>
    </div>
  );
}
