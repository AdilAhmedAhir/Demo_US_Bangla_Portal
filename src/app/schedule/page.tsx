'use client';

import React, { useState } from 'react';
import { Calendar as CalendarIcon, Clock, MapPin, MoreVertical } from 'lucide-react';
import { weeklySchedule, scheduleDays, type ScheduleDay } from '@/data/academics';

const lectureTypes = new Set(['Lecture', 'Tutorial']);

export default function SchedulePage() {
  const [selectedDay, setSelectedDay] = useState<ScheduleDay>(scheduleDays[0]);
  const classes = weeklySchedule[selectedDay];

  return (
    <div className="flex flex-col gap-6 w-full pb-10">
      <div className="mb-2 flex flex-col sm:flex-row justify-between sm:items-end gap-4">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold tracking-tight text-gray-900">Class Schedule</h1>
          <p className="mt-2 text-sm md:text-base text-gray-500">Weekly breakdown of your Phase III lectures, practicals, and clinical postings.</p>
        </div>
        <div className="flex items-center gap-2">
          <button className="px-4 py-2 bg-brand-primary-blue text-white rounded-xl font-bold text-sm shadow-sm hover:bg-brand-primary-blue/90 transition-colors">
            Sync Calendar
          </button>
        </div>
      </div>

      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
        <div className="px-6 py-5 border-b border-gray-100 bg-gray-50/50 flex gap-2 overflow-x-auto custom-scrollbar">
          {scheduleDays.map((day) => (
            <button
              key={day}
              onClick={() => setSelectedDay(day)}
              className={`px-4 py-2 rounded-xl text-sm font-bold whitespace-nowrap transition-colors ${day === selectedDay ? 'bg-white text-brand-primary-blue shadow-sm border border-gray-200' : 'text-gray-500 hover:text-gray-900 hover:bg-gray-100'}`}
            >
              {day}
            </button>
          ))}
        </div>

        <div className="p-6 flex flex-col gap-4">
          <h3 className="font-bold text-gray-900 flex items-center gap-2 mb-2">
             <CalendarIcon className="w-5 h-5 text-gray-400" /> {selectedDay}&apos;s Classes
          </h3>

          {classes.length === 0 ? (
            <p className="text-sm font-medium text-gray-500">No scheduled classes for {selectedDay}.</p>
          ) : (
            classes.map((cls, idx) => (
              <div key={idx} className="flex flex-col sm:flex-row sm:items-center gap-6 p-5 rounded-2xl border border-gray-100 hover:border-brand-primary-blue/30 hover:shadow-md transition-all group bg-white">
                <div className="flex flex-col min-w-[140px] shrink-0 border-l-4 border-brand-primary-blue pl-4">
                  <span className="text-sm font-bold text-gray-900 flex items-center gap-1.5">
                    <Clock className="w-4 h-4 text-gray-400" /> {cls.time.split(' – ')[0]}
                  </span>
                  <span className="text-xs font-semibold text-gray-500 mt-1 pl-5.5">to {cls.time.split(' – ')[1]}</span>
                </div>

                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className={`text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-md ${lectureTypes.has(cls.type) ? 'bg-blue-100 text-blue-700' : 'bg-purple-100 text-purple-700'}`}>
                      {cls.type}
                    </span>
                    {cls.code !== '—' && (
                      <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-md bg-gray-100 text-gray-600">
                        {cls.code}
                      </span>
                    )}
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 group-hover:text-brand-primary-blue transition-colors">{cls.subject}</h4>
                  <p className="text-sm font-medium text-gray-500 mt-1">{cls.faculty}</p>
                </div>

                <div className="flex items-center gap-4 sm:flex-col sm:items-end justify-between sm:justify-start">
                  <span className="flex items-center gap-1.5 text-sm font-semibold text-gray-700 bg-gray-50 px-3 py-1.5 rounded-lg border border-gray-100">
                    <MapPin className="w-4 h-4 text-brand-primary-green" /> {cls.room}
                  </span>
                  <button className="text-gray-400 hover:text-gray-900 p-1 hidden sm:block">
                    <MoreVertical className="w-5 h-5" />
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
