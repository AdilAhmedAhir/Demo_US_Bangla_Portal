import React from 'react';
import { Calendar as CalendarIcon, Clock, MapPin, MoreVertical } from 'lucide-react';

export default function SchedulePage() {
  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
  
  const schedule = [
    { day: 'Monday', time: '08:00 AM - 09:30 AM', title: 'General Anatomy', type: 'Lecture', location: 'Gallery 1', instructor: 'Dr. Shahin' },
    { day: 'Monday', time: '10:00 AM - 12:00 PM', title: 'Biochemistry Lab', type: 'Practical', location: 'Lab 3', instructor: 'Dr. Anisur' },
    { day: 'Tuesday', time: '09:00 AM - 11:00 AM', title: 'Clinical Physiology', type: 'Lecture', location: 'Gallery 2', instructor: 'Dr. Nusrat' },
    { day: 'Wednesday', time: '08:00 AM - 10:00 AM', title: 'Community Medicine', type: 'Lecture', location: 'Gallery 1', instructor: 'Dr. Kamal' },
    { day: 'Thursday', time: '11:00 AM - 01:00 PM', title: 'Anatomy Dissection', type: 'Practical', location: 'Dissection Hall', instructor: 'Dr. Shahin' },
  ];

  return (
    <div className="flex flex-col gap-6 w-full pb-10">
      <div className="mb-2 flex flex-col sm:flex-row justify-between sm:items-end gap-4">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold tracking-tight text-gray-900">Class Schedule</h1>
          <p className="mt-2 text-sm md:text-base text-gray-500">Weekly breakdown of your lectures and practicals.</p>
        </div>
        <div className="flex items-center gap-2">
          <button className="px-4 py-2 bg-brand-primary-blue text-white rounded-xl font-bold text-sm shadow-sm hover:bg-brand-primary-blue/90 transition-colors">
            Sync Calendar
          </button>
        </div>
      </div>

      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
        <div className="px-6 py-5 border-b border-gray-100 bg-gray-50/50 flex gap-2 overflow-x-auto custom-scrollbar">
          {days.map((day, idx) => (
            <button 
              key={day} 
              className={`px-4 py-2 rounded-xl text-sm font-bold whitespace-nowrap transition-colors ${idx === 0 ? 'bg-white text-brand-primary-blue shadow-sm border border-gray-200' : 'text-gray-500 hover:text-gray-900 hover:bg-gray-100'}`}
            >
              {day}
            </button>
          ))}
        </div>
        
        <div className="p-6 flex flex-col gap-4">
          <h3 className="font-bold text-gray-900 flex items-center gap-2 mb-2">
             <CalendarIcon className="w-5 h-5 text-gray-400" /> Monday's Classes
          </h3>
          
          {schedule.filter(s => s.day === 'Monday').map((cls, idx) => (
            <div key={idx} className="flex flex-col sm:flex-row sm:items-center gap-6 p-5 rounded-2xl border border-gray-100 hover:border-brand-primary-blue/30 hover:shadow-md transition-all group bg-white">
              <div className="flex flex-col min-w-[140px] shrink-0 border-l-4 border-brand-primary-blue pl-4">
                <span className="text-sm font-bold text-gray-900 flex items-center gap-1.5">
                  <Clock className="w-4 h-4 text-gray-400" /> {cls.time.split(' - ')[0]}
                </span>
                <span className="text-xs font-semibold text-gray-500 mt-1 pl-5.5">to {cls.time.split(' - ')[1]}</span>
              </div>
              
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <span className={`text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-md ${cls.type === 'Lecture' ? 'bg-blue-100 text-blue-700' : 'bg-purple-100 text-purple-700'}`}>
                    {cls.type}
                  </span>
                </div>
                <h4 className="text-lg font-bold text-gray-900 group-hover:text-brand-primary-blue transition-colors">{cls.title}</h4>
                <p className="text-sm font-medium text-gray-500 mt-1">Prof. {cls.instructor}</p>
              </div>
              
              <div className="flex items-center gap-4 sm:flex-col sm:items-end justify-between sm:justify-start">
                <span className="flex items-center gap-1.5 text-sm font-semibold text-gray-700 bg-gray-50 px-3 py-1.5 rounded-lg border border-gray-100">
                  <MapPin className="w-4 h-4 text-brand-primary-green" /> {cls.location}
                </span>
                <button className="text-gray-400 hover:text-gray-900 p-1 hidden sm:block">
                  <MoreVertical className="w-5 h-5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
