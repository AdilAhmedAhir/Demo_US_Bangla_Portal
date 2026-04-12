import React from 'react';
import { BookOpenCheck, Calendar, Trophy, FileQuestion, ArrowRight } from 'lucide-react';

export default function ExamsPage() {
  const upcomingExams = [
    { title: 'Anatomy Prelim Quiz', date: 'April 13, 2026', time: '09:00 AM', duration: '45 mins', type: 'Quiz', status: 'Ready' },
    { title: 'Physiology Mid-term', date: 'April 20, 2026', time: '10:00 AM', duration: '2 Hours', type: 'Exam', status: 'Upcoming' },
    { title: 'Biochemistry Practical Viva', date: 'April 25, 2026', time: '01:30 PM', duration: '15 mins', type: 'Viva', status: 'Upcoming' },
  ];

  const pastResults = [
    { title: 'Anatomy Intro Quiz', score: 85, total: 100, date: 'Mar 10' },
    { title: 'Community Med Term 1', score: 72, total: 100, date: 'Feb 25' },
    { title: 'Physiology Quiz 1', score: 90, total: 100, date: 'Feb 15' },
  ];

  return (
    <div className="flex flex-col gap-6 w-full pb-10">
      <div className="mb-2">
        <h1 className="text-2xl md:text-3xl font-bold tracking-tight text-gray-900">Quizzes & Exams</h1>
        <p className="mt-2 text-sm md:text-base text-gray-500">Track your schedule and review past performance.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Upcoming List */}
        <div className="lg:col-span-2 bg-white rounded-2xl border border-gray-100 shadow-sm flex flex-col group hover:shadow-md transition-shadow">
          <div className="px-6 py-5 border-b border-gray-100 flex items-center justify-between bg-gray-50/50">
            <h3 className="text-lg font-bold text-gray-900 flex items-center gap-2">
              <Calendar className="w-5 h-5 text-brand-primary-blue" /> Scheduled Assessments
            </h3>
          </div>
          <div className="p-6 flex flex-col gap-4">
            {upcomingExams.map((exam, idx) => (
              <div key={idx} className={`p-5 rounded-xl border flex flex-col sm:flex-row sm:items-center justify-between gap-4 transition-all hover:shadow-sm ${exam.status === 'Ready' ? 'border-brand-primary-green bg-brand-primary-green/5' : 'border-gray-200 bg-white'}`}>
                <div className="flex gap-4">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${exam.status === 'Ready' ? 'bg-brand-primary-green text-white shadow-sm' : 'bg-gray-100 text-gray-500'}`}>
                    <FileQuestion className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-md bg-gray-200 text-gray-700">
                        {exam.type}
                      </span>
                      {exam.status === 'Ready' && (
                        <span className="flex w-2 h-2 rounded-full bg-brand-primary-green animate-pulse"></span>
                      )}
                    </div>
                    <h4 className="font-bold text-gray-900">{exam.title}</h4>
                    <p className="text-xs font-medium text-gray-500 mt-1">
                      {exam.date} • {exam.time} • {exam.duration}
                    </p>
                  </div>
                </div>
                <div>
                  {exam.status === 'Ready' ? (
                       <button className="w-full sm:w-auto px-5 py-2.5 bg-brand-primary-green text-white font-bold text-sm rounded-xl shadow-[0_4px_14px_0_rgba(57,181,74,0.39)] hover:shadow-[0_6px_20px_rgba(57,181,74,0.23)] hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2">
                         Take Quiz <ArrowRight className="w-4 h-4" />
                       </button>
                  ) : (
                      <button className="w-full sm:w-auto px-5 py-2.5 bg-gray-100 text-gray-500 font-bold text-sm rounded-xl cursor-not-allowed hidden sm:block">
                        Opens Soon
                      </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Performance Side-panel */}
        <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm flex flex-col h-full">
          <div className="flex justify-between items-center mb-6 border-b border-gray-100 pb-4">
              <h3 className="text-lg font-bold text-gray-900 flex items-center gap-2">
                <Trophy className="w-5 h-5 text-yellow-500" /> Recent Results
              </h3>
          </div>
          
          <div className="flex-1 flex flex-col gap-5">
            {pastResults.map((res, idx) => {
              const percentage = (res.score / res.total) * 100;
              return (
                <div key={idx}>
                  <div className="flex justify-between items-center mb-2 text-sm">
                    <span className="font-semibold text-gray-800">{res.title}</span>
                    <span className={`font-bold ${percentage >= 80 ? 'text-brand-primary-green' : percentage >= 70 ? 'text-brand-primary-blue' : 'text-orange-500'}`}>
                      {percentage}%
                    </span>
                  </div>
                  <div className="w-full bg-gray-100 rounded-full h-2">
                    <div 
                      className={`h-2 rounded-full ${percentage >= 80 ? 'bg-brand-primary-green' : percentage >= 70 ? 'bg-brand-primary-blue' : 'bg-orange-500'}`} 
                      style={{ width: `${percentage}%` }}>
                    </div>
                  </div>
                  <p className="text-[10px] text-right text-gray-500 font-medium mt-1">{res.date}</p>
                </div>
              );
            })}
          </div>
          
          <button className="w-full mt-6 py-2.5 text-sm font-semibold text-brand-primary-blue bg-brand-primary-blue/5 hover:bg-brand-primary-blue/10 rounded-xl transition-colors">
            View Complete Record
          </button>
        </div>

      </div>
    </div>
  );
}
