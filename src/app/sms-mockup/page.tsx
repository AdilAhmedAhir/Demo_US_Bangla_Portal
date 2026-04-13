import React from 'react';
import { Smartphone, Send, Signal, Wifi, BatteryFull } from 'lucide-react';
import Link from 'next/link';

export default function SmsMockupPage() {
  return (
    <div className="flex flex-col gap-6 w-full pb-10 min-h-[80vh] items-center justify-center relative">
      <Link href="/" className="absolute top-0 left-0 text-brand-primary-blue text-sm font-bold hover:underline">← Back to Portal</Link>
      
      <div className="text-center max-w-lg mb-4">
         <h1 className="text-3xl font-black tracking-tight text-gray-900 mb-2">Automated SMS Gateway</h1>
         <p className="text-gray-500 font-medium">When an event triggers (like missing attendance or fees due), the system instantly pushes a branded SMS alert to the student or guardian's phone.</p>
      </div>

      {/* iPhone Frame Mockup */}
      <div className="relative w-[320px] h-[650px] bg-white rounded-[50px] border-[12px] border-gray-900 shadow-2xl overflow-hidden shadow-gray-900/20">
         {/* Notch */}
         <div className="absolute top-0 inset-x-0 h-6 bg-gray-900 rounded-b-3xl w-40 mx-auto z-20"></div>
         
         {/* Status Bar */}
         <div className="flex justify-between items-center px-6 pt-3 pb-2 bg-gray-100/80 backdrop-blur-sm z-10 relative text-[10px] font-bold">
            <span>9:41</span>
            <div className="flex items-center gap-1.5">
               <Signal className="w-3 h-3" />
               <Wifi className="w-3 h-3" />
               <BatteryFull className="w-4 h-4" />
            </div>
         </div>

         {/* iMessage Header */}
         <div className="bg-gray-100/90 backdrop-blur-md pb-3 pt-2 text-center border-b border-gray-200 z-10 relative">
            <div className="w-10 h-10 rounded-full bg-gray-300 mx-auto flex items-center justify-center text-gray-600 mb-1">
               <Smartphone className="w-5 h-5" />
            </div>
            <h2 className="text-[11px] font-bold text-gray-900">US Bangla Medical College</h2>
            <p className="text-[9px] text-gray-500 font-medium">Enterprise SMS Gateway</p>
         </div>

         {/* Chat Body */}
         <div className="p-4 bg-gray-50 h-[500px] overflow-y-auto flex flex-col gap-4">
            <p className="text-center text-[10px] text-gray-400 font-bold mt-2 mb-2">Today 11:20 AM</p>
            
            {/* Bubble 1: Attendance Warning */}
            <div className="flex justify-start">
               <div className="bg-gray-200 text-black p-3 rounded-2xl rounded-tl-sm text-[13px] leading-snug w-[85%] relative shadow-sm">
                 <strong className="block mb-1 text-red-600">⚠ ATTENDANCE ALERT</strong>
                 <span>US Bangla Medical College: Student Adil Ahmed (USB-2601) was marked ABSENT for General Anatomy today. Please clarify with administration.</span>
               </div>
            </div>

            <p className="text-center text-[10px] text-gray-400 font-bold mt-2 mb-2">Today 2:15 PM</p>

            {/* Bubble 2: Payment Reminder */}
            <div className="flex justify-start">
               <div className="bg-gray-200 text-black p-3 rounded-2xl rounded-tl-sm text-[13px] leading-snug w-[85%] relative shadow-sm">
                 <strong className="block mb-1 text-purple-700">💰 FINANCE NOTICE</strong>
                 <span>US Bangla Portal: Your Term 4 tuition fee of Tk 95,000 is due in 3 days. Please login to portal to avoid late fees. Link: demo.usbm.edu/pay</span>
               </div>
            </div>
         </div>

         {/* iMessage Input Bar */}
         <div className="absolute bottom-0 w-full bg-gray-100/90 backdrop-blur px-4 pt-3 pb-8 border-t border-gray-200">
            <div className="flex items-center gap-2">
               <div className="flex-1 bg-white border border-gray-300 rounded-full h-8 px-4 flex items-center text-[13px] text-gray-400">
                  Text Message
               </div>
               <div className="w-8 h-8 rounded-full bg-brand-primary-green flex items-center justify-center text-white">
                  <Send className="w-3.5 h-3.5 transform -translate-x-0.5" />
               </div>
            </div>
         </div>
      </div>
    </div>
  );
}
