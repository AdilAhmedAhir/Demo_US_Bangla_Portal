'use client';

import React, { useState } from 'react';
import {
  PlusCircle,
  CheckSquare,
  Settings,
  Send,
  Clock,
  Calendar,
  BookOpen,
  GripVertical,
  CircleDot,
  Type,
  Trash2,
  Copy,
  ChevronDown,
  FileText,
  CheckCircle2,
  Circle,
  Hash,
} from 'lucide-react';

export default function QuizBuilderPage() {
  const [activeQuestion, setActiveQuestion] = useState<number | null>(0);

  return (
    <div className="flex flex-col gap-6 w-full h-full pb-10">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2.5 mb-1">
            <div className="w-9 h-9 rounded-xl bg-brand-primary-blue/10 flex items-center justify-center">
              <CheckSquare className="w-4.5 h-4.5 text-brand-primary-blue" />
            </div>
            <div>
              <h1 className="text-xl font-black text-gray-900 tracking-tight">Assessment Builder</h1>
              <p className="text-xs font-medium text-gray-400">Create preliminary quizzes and term exams</p>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-2.5">
          <button className="px-4 py-2.5 text-xs font-bold rounded-lg border border-gray-200 text-gray-600 hover:bg-gray-50 transition-colors flex items-center gap-1.5">
            <Settings className="w-3.5 h-3.5" />
            Settings
          </button>
          <button className="px-5 py-2.5 text-xs font-bold rounded-lg bg-brand-primary-green text-white hover:bg-brand-primary-green/90 transition-all flex items-center gap-2 shadow-sm active:scale-95">
            <Send className="w-3.5 h-3.5" />
            Publish Assessment
          </button>
        </div>
      </div>

      {/* Configuration Panel */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-100 flex items-center gap-2">
          <Settings className="w-4 h-4 text-gray-400" />
          <h2 className="text-sm font-bold text-gray-900">Assessment Configuration</h2>
        </div>
        <div className="p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {/* Title */}
          <div className="sm:col-span-2">
            <label className="block text-[11px] font-bold text-gray-500 uppercase tracking-wider mb-2">
              Assessment Title
            </label>
            <div className="relative">
              <FileText className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                defaultValue="General Bacteriology Prelim"
                className="w-full pl-10 pr-4 py-3 text-sm font-semibold text-gray-900 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-primary-blue/30 focus:border-brand-primary-blue transition-all placeholder:text-gray-400"
              />
            </div>
          </div>

          {/* Target Course */}
          <div>
            <label className="block text-[11px] font-bold text-gray-500 uppercase tracking-wider mb-2">
              Target Course
            </label>
            <div className="relative">
              <BookOpen className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <select className="w-full pl-10 pr-10 py-3 text-sm font-semibold text-gray-900 bg-gray-50 border border-gray-200 rounded-xl appearance-none focus:outline-none focus:ring-2 focus:ring-brand-primary-blue/30 focus:border-brand-primary-blue transition-all">
                <option>General Bacteriology</option>
                <option>Systemic Bacteriology</option>
                <option>Immunology</option>
                <option>Parasitology</option>
              </select>
              <ChevronDown className="absolute right-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
            </div>
          </div>

          {/* Time Limit */}
          <div>
            <label className="block text-[11px] font-bold text-gray-500 uppercase tracking-wider mb-2">
              Time Limit
            </label>
            <div className="relative">
              <Clock className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <select className="w-full pl-10 pr-10 py-3 text-sm font-semibold text-gray-900 bg-gray-50 border border-gray-200 rounded-xl appearance-none focus:outline-none focus:ring-2 focus:ring-brand-primary-blue/30 focus:border-brand-primary-blue transition-all">
                <option>30 Minutes</option>
                <option>45 Minutes</option>
                <option>60 Minutes</option>
                <option>90 Minutes</option>
                <option>No Limit</option>
              </select>
              <ChevronDown className="absolute right-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
            </div>
          </div>

          {/* Schedule Date */}
          <div>
            <label className="block text-[11px] font-bold text-gray-500 uppercase tracking-wider mb-2">
              Schedule Date
            </label>
            <div className="relative">
              <Calendar className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="date"
                defaultValue="2026-04-28"
                className="w-full pl-10 pr-4 py-3 text-sm font-semibold text-gray-900 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-primary-blue/30 focus:border-brand-primary-blue transition-all"
              />
            </div>
          </div>

          {/* Schedule Time */}
          <div>
            <label className="block text-[11px] font-bold text-gray-500 uppercase tracking-wider mb-2">
              Start Time
            </label>
            <div className="relative">
              <Clock className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="time"
                defaultValue="09:00"
                className="w-full pl-10 pr-4 py-3 text-sm font-semibold text-gray-900 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-primary-blue/30 focus:border-brand-primary-blue transition-all"
              />
            </div>
          </div>

          {/* Total Marks */}
          <div>
            <label className="block text-[11px] font-bold text-gray-500 uppercase tracking-wider mb-2">
              Total Marks
            </label>
            <div className="relative">
              <Hash className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="number"
                defaultValue={25}
                className="w-full pl-10 pr-4 py-3 text-sm font-semibold text-gray-900 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-primary-blue/30 focus:border-brand-primary-blue transition-all"
              />
            </div>
          </div>

          {/* Question Count indicator */}
          <div>
            <label className="block text-[11px] font-bold text-gray-500 uppercase tracking-wider mb-2">
              Questions
            </label>
            <div className="flex items-center gap-3 py-3 px-3.5 bg-brand-primary-blue/5 border border-brand-primary-blue/20 rounded-xl">
              <CheckSquare className="w-4 h-4 text-brand-primary-blue" />
              <span className="text-sm font-black text-brand-primary-blue">2 Questions</span>
              <span className="text-[10px] font-bold text-gray-400 ml-auto">Draft</span>
            </div>
          </div>
        </div>
      </div>

      {/* Question Builder */}
      <div className="flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <h2 className="text-sm font-bold text-gray-900 flex items-center gap-2">
            <FileText className="w-4 h-4 text-brand-primary-blue" />
            Questions
          </h2>
          <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Drag to reorder</span>
        </div>

        {/* Question 1 — Multiple Choice */}
        <div
          className={`bg-white rounded-xl shadow-sm border-2 overflow-hidden transition-all cursor-pointer ${
            activeQuestion === 0 ? 'border-brand-primary-blue shadow-md' : 'border-gray-100 hover:border-gray-200'
          }`}
          onClick={() => setActiveQuestion(0)}
        >
          {/* Question Header */}
          <div className="px-5 py-4 flex items-center justify-between border-b border-gray-100 bg-gray-50/50">
            <div className="flex items-center gap-3">
              <div className="cursor-grab text-gray-300 hover:text-gray-500 transition-colors">
                <GripVertical className="w-4 h-4" />
              </div>
              <span className="text-xs font-black text-white bg-brand-primary-blue px-2.5 py-1 rounded-lg">
                Q1
              </span>
              <div className="flex items-center gap-1.5 px-2.5 py-1 bg-purple-50 border border-purple-200 rounded-lg">
                <CircleDot className="w-3 h-3 text-purple-600" />
                <span className="text-[10px] font-bold text-purple-600">Multiple Choice</span>
              </div>
              <span className="text-[10px] font-bold text-gray-400">5 marks</span>
            </div>
            <div className="flex items-center gap-1.5">
              <button className="p-1.5 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors">
                <Copy className="w-3.5 h-3.5" />
              </button>
              <button className="p-1.5 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors">
                <Trash2 className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Question Body */}
          <div className="p-5">
            <p className="text-sm font-bold text-gray-900 mb-5 leading-relaxed">
              Which of the following is a Gram-positive bacteria?
            </p>

            <div className="space-y-2.5">
              {[
                { label: 'Escherichia coli', isCorrect: false },
                { label: 'Staphylococcus aureus', isCorrect: true },
                { label: 'Pseudomonas aeruginosa', isCorrect: false },
                { label: 'Neisseria meningitidis', isCorrect: false },
              ].map((option, idx) => (
                <div
                  key={idx}
                  className={`
                    flex items-center gap-3 px-4 py-3 rounded-xl border-2 transition-all
                    ${option.isCorrect
                      ? 'bg-emerald-50 border-emerald-300'
                      : 'bg-white border-gray-100 hover:border-gray-200'
                    }
                  `}
                >
                  <div className={`
                    w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0
                    ${option.isCorrect
                      ? 'border-emerald-500 bg-emerald-500'
                      : 'border-gray-300'
                    }
                  `}>
                    {option.isCorrect && (
                      <CheckCircle2 className="w-3.5 h-3.5 text-white" />
                    )}
                  </div>
                  <span className={`text-sm font-semibold ${option.isCorrect ? 'text-emerald-800' : 'text-gray-700'}`}>
                    {String.fromCharCode(65 + idx)}. {option.label}
                  </span>
                  {option.isCorrect && (
                    <span className="ml-auto text-[10px] font-black text-emerald-600 bg-emerald-100 px-2 py-0.5 rounded-md uppercase tracking-wider">
                      Correct Answer
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Question 2 — Short Answer */}
        <div
          className={`bg-white rounded-xl shadow-sm border-2 overflow-hidden transition-all cursor-pointer ${
            activeQuestion === 1 ? 'border-brand-primary-blue shadow-md' : 'border-gray-100 hover:border-gray-200'
          }`}
          onClick={() => setActiveQuestion(1)}
        >
          {/* Question Header */}
          <div className="px-5 py-4 flex items-center justify-between border-b border-gray-100 bg-gray-50/50">
            <div className="flex items-center gap-3">
              <div className="cursor-grab text-gray-300 hover:text-gray-500 transition-colors">
                <GripVertical className="w-4 h-4" />
              </div>
              <span className="text-xs font-black text-white bg-brand-primary-blue px-2.5 py-1 rounded-lg">
                Q2
              </span>
              <div className="flex items-center gap-1.5 px-2.5 py-1 bg-amber-50 border border-amber-200 rounded-lg">
                <Type className="w-3 h-3 text-amber-600" />
                <span className="text-[10px] font-bold text-amber-600">Short Answer</span>
              </div>
              <span className="text-[10px] font-bold text-gray-400">20 marks</span>
            </div>
            <div className="flex items-center gap-1.5">
              <button className="p-1.5 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors">
                <Copy className="w-3.5 h-3.5" />
              </button>
              <button className="p-1.5 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors">
                <Trash2 className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Question Body */}
          <div className="p-5">
            <p className="text-sm font-bold text-gray-900 mb-5 leading-relaxed">
              Describe the clinical significance of a Z-N stain.
            </p>

            <div className="relative">
              <textarea
                placeholder="Students will type their answer here..."
                rows={4}
                disabled
                className="w-full px-4 py-3 text-sm text-gray-400 bg-gray-50 border-2 border-dashed border-gray-200 rounded-xl resize-none cursor-not-allowed"
              />
              <div className="absolute bottom-3 right-3 flex items-center gap-1.5 text-gray-300">
                <Type className="w-3.5 h-3.5" />
                <span className="text-[10px] font-bold">Answer Area</span>
              </div>
            </div>

            <div className="mt-3 flex items-center gap-4">
              <div className="flex items-center gap-2 text-[10px] font-bold text-gray-400">
                <Circle className="w-3 h-3" />
                Min. 100 words
              </div>
              <div className="flex items-center gap-2 text-[10px] font-bold text-gray-400">
                <Circle className="w-3 h-3" />
                Max. 500 words
              </div>
            </div>
          </div>
        </div>

        {/* Add New Question Dropzone */}
        <button className="
          w-full py-8 rounded-xl border-2 border-dashed border-brand-primary-blue/30
          bg-brand-primary-blue/[0.02]
          hover:bg-brand-primary-blue/5 hover:border-brand-primary-blue/50
          active:scale-[0.99]
          transition-all
          flex flex-col items-center justify-center gap-2 group
        ">
          <div className="w-10 h-10 rounded-xl bg-brand-primary-blue/10 flex items-center justify-center group-hover:bg-brand-primary-blue/20 transition-colors">
            <PlusCircle className="w-5 h-5 text-brand-primary-blue" />
          </div>
          <span className="text-sm font-bold text-brand-primary-blue">Add New Question</span>
          <span className="text-[10px] font-medium text-gray-400">
            Multiple Choice  •  Short Answer  •  True/False  •  Essay
          </span>
        </button>
      </div>
    </div>
  );
}
