import React from 'react';
import { Building, DoorClosed, Utensils, Wrench, ShieldCheck, MailPlus } from 'lucide-react';

export default function HostelPage() {
  return (
    <div className="flex flex-col gap-6 w-full pb-10">
      <div className="mb-2">
        <h1 className="text-2xl md:text-3xl font-bold tracking-tight text-gray-900">Hostel Management</h1>
        <p className="mt-2 text-sm md:text-base text-gray-500">Manage your room details, mess schedule, and submit requests.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Room Info */}
        <div className="lg:col-span-2 bg-white rounded-2xl p-6 md:p-8 border border-gray-100 shadow-sm flex flex-col group hover:shadow-md transition-shadow relative overflow-hidden">
          <div className="absolute right-0 top-0 opacity-[0.03] pointer-events-none -mr-10 -mt-10">
            <Building className="w-64 h-64" />
          </div>
          
          <div className="flex justify-between items-start mb-6">
            <div>
               <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-brand-primary-blue/10 text-brand-primary-blue mb-3">
                <ShieldCheck className="w-3.5 h-3.5" /> Checked In
              </span>
              <h2 className="text-2xl font-bold text-gray-900">Block B - Room 204</h2>
              <p className="text-gray-500 text-sm mt-1">Male Wing, 2nd Floor</p>
            </div>
            <div className="w-16 h-16 bg-gray-50 rounded-2xl border border-gray-100 flex items-center justify-center shadow-inner">
               <DoorClosed className="w-8 h-8 text-gray-400" />
            </div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-auto">
            <div className="bg-gray-50 rounded-xl p-4 border border-gray-100">
              <p className="text-xs text-gray-500 font-semibold mb-1">Room Type</p>
              <p className="text-sm font-bold text-gray-900">Double Shared</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-4 border border-gray-100">
              <p className="text-xs text-gray-500 font-semibold mb-1">Roommate</p>
              <p className="text-sm font-bold text-gray-900">Hasib Rahman</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-4 border border-gray-100">
              <p className="text-xs text-gray-500 font-semibold mb-1">Rent</p>
              <p className="text-sm font-bold text-gray-900">৳4,500/mo</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-4 border border-gray-100">
              <p className="text-xs text-gray-500 font-semibold mb-1">WiFi Status</p>
              <p className="text-sm font-bold text-brand-primary-green">Active (100Mbps)</p>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm flex flex-col gap-4">
          <h3 className="font-bold text-gray-900 mb-2">Quick Actions</h3>
          
          <button className="flex items-center gap-4 w-full p-4 rounded-xl border border-gray-200 hover:border-brand-primary-blue hover:bg-brand-primary-blue/5 transition-colors group text-left">
            <div className="w-10 h-10 rounded-full bg-blue-100 text-brand-primary-blue flex items-center justify-center shrink-0">
              <Wrench className="w-5 h-5" />
            </div>
            <div>
              <p className="font-bold text-sm text-gray-900 group-hover:text-brand-primary-blue transition-colors">Submit Maintenance Request</p>
              <p className="text-xs text-gray-500 mt-0.5">Report broken lights, AC, plumbing.</p>
            </div>
          </button>
          
          <button className="flex items-center gap-4 w-full p-4 rounded-xl border border-gray-200 hover:border-brand-primary-green hover:bg-brand-primary-green/5 transition-colors group text-left">
            <div className="w-10 h-10 rounded-full bg-green-100 text-brand-primary-green flex items-center justify-center shrink-0">
              <MailPlus className="w-5 h-5" />
            </div>
            <div>
              <p className="font-bold text-sm text-gray-900 group-hover:text-brand-primary-green transition-colors">Leave Application</p>
              <p className="text-xs text-gray-500 mt-0.5">Apply for weekend/holiday leave.</p>
            </div>
          </button>
        </div>
      </div>

      {/* Mess Schedule */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm mt-4 p-6">
        <div className="flex items-center gap-2 mb-6">
          <Utensils className="w-5 h-5 text-gray-400" />
          <h3 className="text-lg font-bold text-gray-900">Today&apos;s Mess Menu</h3>
          <span className="ml-auto inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold bg-brand-primary-green/10 text-brand-primary-green">
            Plan: Standard (Active)
          </span>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-5 rounded-xl border-2 border-gray-100 bg-gray-50 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-1 h-full bg-orange-400"></div>
            <p className="text-sm font-bold text-gray-900 mb-2 border-b border-gray-200 pb-2">Breakfast (07:30 - 09:30 AM)</p>
            <ul className="text-sm text-gray-600 list-disc list-inside space-y-1">
              <li>Ruti / Paratha</li>
              <li>Mixed Vegetable</li>
              <li>Boiled Egg</li>
              <li>Tea</li>
            </ul>
          </div>
          
          <div className="p-5 rounded-xl border-2 border-brand-primary-blue/30 bg-brand-primary-blue/5 relative overflow-hidden shadow-sm">
            <div className="absolute top-0 left-0 w-1 h-full bg-brand-primary-blue"></div>
            <p className="text-sm font-bold text-brand-primary-blue mb-2 border-b border-brand-primary-blue/20 pb-2">Lunch (01:00 - 03:30 PM)</p>
            <ul className="text-sm font-medium text-gray-800 list-disc list-inside space-y-1">
              <li>Plain Rice</li>
              <li>Chicken Curry</li>
              <li>Lentils (Dal)</li>
              <li>Salad</li>
            </ul>
            <div className="absolute top-3 right-3 flex items-center justify-center w-6 h-6 rounded-full bg-brand-primary-blue/20">
              <div className="w-2 h-2 rounded-full bg-brand-primary-blue animate-pulse"></div>
            </div>
          </div>
          
          <div className="p-5 rounded-xl border-2 border-gray-100 bg-gray-50 relative overflow-hidden">
             <div className="absolute top-0 left-0 w-1 h-full bg-purple-500"></div>
            <p className="text-sm font-bold text-gray-900 mb-2 border-b border-gray-200 pb-2">Dinner (08:00 - 10:00 PM)</p>
            <ul className="text-sm text-gray-600 list-disc list-inside space-y-1">
              <li>Fried Rice</li>
              <li>Beef Bhuna</li>
              <li>Vegetable Setup</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
