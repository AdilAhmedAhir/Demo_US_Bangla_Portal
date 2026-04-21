'use client';

import React, { useState } from 'react';
import {
  ClipboardList,
  CheckCircle2,
  Circle,
  Download,
  Search,
  ChevronDown,
  Users,
  Pen,
  Save,
  Info,
  Eye,
  Filter,
} from 'lucide-react';

/* ── Item Card Topics (from Microbiology curriculum) ─── */
const cardTopics = {
  'Card 1': [
    { id: 'gb1', section: 'General Bacteriology', topic: 'Prokaryote/Eukaryote, Cell Wall, Capsule, Flagella, Spore, Classification' },
    { id: 'gb2', section: 'General Bacteriology', topic: 'Growth/Death, Growth Curve, Generation Time, O₂ Classification' },
    { id: 'gb3', section: 'General Bacteriology', topic: 'Pathogenesis, Exotoxin/Endotoxin, Koch\'s Postulates' },
    { id: 'gb4', section: 'General Bacteriology', topic: 'Sterilization, Disinfection, Antisepsis — Methods & Principles' },
    { id: 'gb5', section: 'General Bacteriology', topic: 'Practical: Gram Staining, ZN Staining, Culture Media' },
    { id: 'gb6', section: 'General Bacteriology', topic: 'Antimicrobials: Mechanism, Resistance, MDR/XDR/PDR' },
    { id: 'gb7', section: 'General Bacteriology', topic: 'Bacterial Genetics: Plasmid, Transposons, Mutation' },
    { id: 'sb1', section: 'Systemic Bacteriology', topic: 'Staphylococci, Streptococci — Classification, Diseases' },
    { id: 'sb2', section: 'Systemic Bacteriology', topic: 'Neisseria, Corynebacterium, Bacillus' },
    { id: 'sb3', section: 'Systemic Bacteriology', topic: 'Mycobacterium TB, Leprosy' },
    { id: 'im1', section: 'Immunology', topic: 'Innate/Adaptive Immunity, Antigens, Immunoglobulins' },
    { id: 'im2', section: 'Immunology', topic: 'Complement, MHC, Cytokines' },
    { id: 'im3', section: 'Immunology', topic: 'Hypersensitivity, Autoimmunity, Transplant Immunology' },
    { id: 'im4', section: 'Immunology', topic: 'Vaccines, ELISA, Western Blot, PCR' },
  ],
  'Card 2': [
    { id: 'pr1', section: 'Parasitology', topic: 'Introduction, Classification, Host-Parasite Relations' },
    { id: 'pr2', section: 'Parasitology', topic: 'Entamoeba, Giardia, Trichomonas' },
    { id: 'pr3', section: 'Parasitology', topic: 'Plasmodium — Malaria, Lab Diagnosis' },
    { id: 'pr4', section: 'Parasitology', topic: 'Cestodes, Trematodes — Taenia, Echinococcus' },
    { id: 'pr5', section: 'Parasitology', topic: 'Nematodes, Filariasis' },
    { id: 'vr1', section: 'Virology', topic: 'General Virology, Antiviral Agents' },
    { id: 'vr2', section: 'Virology', topic: 'Herpes Viruses, Latency, Reactivation' },
    { id: 'vr3', section: 'Virology', topic: 'Hepatitis Viruses' },
    { id: 'vr4', section: 'Virology', topic: 'HIV, Dengue, COVID-19, Emerging Viruses' },
    { id: 'my1', section: 'Mycology', topic: 'Superficial/Cutaneous/Systemic Mycoses' },
    { id: 'cm1', section: 'Clinical Microbiology', topic: 'Sample Collection, Transport' },
    { id: 'cm2', section: 'Clinical Microbiology', topic: 'UTI, RTI, GI, CNS Infections' },
  ],
};

/* ── Mock Student Roster ─── */
interface StudentCard {
  id: string;
  name: string;
  roll: number;
  completedTopics: Record<string, boolean>;
}

const mockStudents: StudentCard[] = [
  { id: 'USB-2604', name: 'Adil Ahmed',     roll: 1,  completedTopics: { gb1: true, gb2: true, gb3: true, gb4: true, gb5: true, im1: true, im2: true, pr1: true, pr2: true, pr3: true, vr1: true, vr2: true, sb1: true, sb2: true } },
  { id: 'USB-2605', name: 'Fatima Rahman',   roll: 2,  completedTopics: { gb1: true, gb2: true, gb3: true, gb4: true, gb5: true, gb6: true, gb7: true, im1: true, im2: true, im3: true, im4: true, sb1: true, sb2: true, sb3: true, pr1: true, pr2: true, pr3: true, pr4: true, pr5: true, vr1: true, vr2: true, vr3: true, vr4: true, my1: true, cm1: true, cm2: true } },
  { id: 'USB-2606', name: 'Hasan Mahmud',    roll: 3,  completedTopics: { gb1: true, gb2: true, gb3: true, im1: true, pr1: true, vr1: true } },
  { id: 'USB-2607', name: 'Nusrat Jahan',    roll: 4,  completedTopics: { gb1: true, gb2: true, gb3: true, gb4: true, gb5: true, gb6: true, im1: true, im2: true, im3: true, sb1: true, sb2: true, pr1: true, pr2: true, pr3: true, pr4: true, vr1: true, vr2: true, vr3: true, my1: true } },
  { id: 'USB-2608', name: 'Rafi Islam',      roll: 5,  completedTopics: { gb1: true, gb2: true, pr1: true } },
];

export default function TeacherItemCardPage() {
  const [selectedCard, setSelectedCard] = useState<'Card 1' | 'Card 2'>('Card 1');
  const [selectedStudent, setSelectedStudent] = useState<string>('USB-2604');
  const [searchTerm, setSearchTerm] = useState('');
  const [editMode, setEditMode] = useState(false);

  const currentTopics = cardTopics[selectedCard];
  const filteredStudents = mockStudents.filter(
    (s) => s.name.toLowerCase().includes(searchTerm.toLowerCase()) || s.id.includes(searchTerm)
  );
  const student = mockStudents.find((s) => s.id === selectedStudent);

  const getStudentProgress = (s: StudentCard, card: 'Card 1' | 'Card 2') => {
    const topics = cardTopics[card];
    const completed = topics.filter((t) => s.completedTopics[t.id]).length;
    return { completed, total: topics.length, percent: Math.round((completed / topics.length) * 100) };
  };

  // Group current topics by section
  const sections = Array.from(new Set(currentTopics.map((t) => t.section)));

  return (
    <div className="flex flex-col gap-6 w-full h-full pb-10">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
        <div className="flex items-center gap-2.5">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-teal-500 to-teal-700 flex items-center justify-center shadow-md">
            <ClipboardList className="w-5 h-5 text-white" />
          </div>
          <div>
            <h1 className="text-xl font-black text-gray-900 tracking-tight">Item Card Management</h1>
            <p className="text-xs font-medium text-gray-400">Sign off student competency completion — Microbiology</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => setEditMode(!editMode)}
            className={`px-4 py-2.5 text-xs font-bold rounded-lg transition-all flex items-center gap-2 ${
              editMode
                ? 'bg-amber-500 text-white hover:bg-amber-600'
                : 'border border-gray-200 text-gray-600 hover:bg-gray-50'
            }`}
          >
            {editMode ? <Save className="w-3.5 h-3.5" /> : <Pen className="w-3.5 h-3.5" />}
            {editMode ? 'Save Changes' : 'Edit Mode'}
          </button>
          <button className="px-4 py-2.5 text-xs font-bold rounded-lg bg-brand-primary-blue text-white hover:bg-brand-primary-blue/90 transition-all flex items-center gap-2 shadow-sm">
            <Download className="w-3.5 h-3.5" />
            Export PDF
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Student Roster */}
        <div className="lg:col-span-4 bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="px-4 py-4 border-b border-gray-100">
            <div className="relative mb-3">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-gray-400" />
              <input
                type="text"
                placeholder="Search student..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-9 pr-3 py-2 text-xs font-medium bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-primary-blue/20 focus:border-brand-primary-blue"
              />
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-bold text-gray-400 uppercase">Batch 16</span>
              <span className="text-[10px] font-bold text-gray-400">·</span>
              <span className="text-[10px] font-bold text-gray-400">{filteredStudents.length} students</span>
            </div>
          </div>
          <div className="max-h-[500px] overflow-y-auto custom-scrollbar">
            {filteredStudents.map((s) => {
              const card1 = getStudentProgress(s, 'Card 1');
              const card2 = getStudentProgress(s, 'Card 2');
              const isSelected = selectedStudent === s.id;
              return (
                <button
                  key={s.id}
                  onClick={() => setSelectedStudent(s.id)}
                  className={`w-full px-4 py-3 flex items-center gap-3 transition-all text-left border-b border-gray-50 ${
                    isSelected ? 'bg-blue-50/50 border-l-2 border-l-brand-primary-blue' : 'hover:bg-gray-50'
                  }`}
                >
                  <div className="flex-1 min-w-0">
                    <p className="text-xs font-bold text-gray-900 truncate">{s.name}</p>
                    <p className="text-[10px] text-gray-400">{s.id} · Roll {s.roll}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="text-right">
                      <div className="w-12 h-1.5 bg-gray-100 rounded-full overflow-hidden mb-0.5">
                        <div className={`h-full rounded-full ${card1.percent === 100 ? 'bg-emerald-500' : 'bg-brand-primary-blue'}`} style={{ width: `${card1.percent}%` }} />
                      </div>
                      <div className="w-12 h-1.5 bg-gray-100 rounded-full overflow-hidden">
                        <div className={`h-full rounded-full ${card2.percent === 100 ? 'bg-emerald-500' : 'bg-teal-500'}`} style={{ width: `${card2.percent}%` }} />
                      </div>
                    </div>
                    {card1.percent === 100 && card2.percent === 100 ? (
                      <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                    ) : (
                      <span className="text-[10px] font-black text-gray-400">
                        {Math.round((card1.completed + card2.completed) / (card1.total + card2.total) * 100)}%
                      </span>
                    )}
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Item Card Detail */}
        <div className="lg:col-span-8">
          {student && (
            <div className="space-y-5">
              {/* Student Header */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-5 flex items-center justify-between">
                <div>
                  <h2 className="text-base font-bold text-gray-900">{student.name}</h2>
                  <p className="text-xs text-gray-500">{student.id} · Batch 16 · Roll {student.roll}</p>
                </div>
                <div className="flex items-center gap-2">
                  {(['Card 1', 'Card 2'] as const).map((card) => {
                    const prog = getStudentProgress(student, card);
                    return (
                      <button
                        key={card}
                        onClick={() => setSelectedCard(card)}
                        className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                          selectedCard === card
                            ? 'bg-brand-primary-blue text-white shadow-sm'
                            : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                        }`}
                      >
                        {card} ({prog.completed}/{prog.total})
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Topics by Section */}
              {sections.map((section) => {
                const sectionTopics = currentTopics.filter((t) => t.section === section);
                const completed = sectionTopics.filter((t) => student.completedTopics[t.id]).length;
                return (
                  <div key={section} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                    <div className="px-5 py-4 border-b border-gray-100 flex items-center justify-between">
                      <div>
                        <h3 className="text-sm font-bold text-gray-900">{section}</h3>
                        <p className="text-[10px] text-gray-400 mt-0.5">{completed}/{sectionTopics.length} completed</p>
                      </div>
                      <div className="w-16 h-2 bg-gray-100 rounded-full overflow-hidden">
                        <div
                          className={`h-full rounded-full ${completed === sectionTopics.length ? 'bg-emerald-500' : 'bg-brand-primary-blue'}`}
                          style={{ width: `${(completed / sectionTopics.length) * 100}%` }}
                        />
                      </div>
                    </div>
                    <div className="divide-y divide-gray-50">
                      {sectionTopics.map((topic) => {
                        const isCompleted = student.completedTopics[topic.id] || false;
                        return (
                          <div key={topic.id} className={`px-5 py-3 flex items-center gap-3 ${editMode ? 'hover:bg-blue-50/30 cursor-pointer' : ''}`}>
                            {isCompleted ? (
                              <CheckCircle2 className="w-4.5 h-4.5 text-emerald-500 shrink-0" />
                            ) : (
                              <Circle className={`w-4.5 h-4.5 shrink-0 ${editMode ? 'text-brand-primary-blue' : 'text-gray-300'}`} />
                            )}
                            <span className={`text-xs font-medium flex-1 ${isCompleted ? 'text-gray-700' : 'text-gray-500'}`}>
                              {topic.topic}
                            </span>
                            {isCompleted && !editMode && (
                              <span className="text-[9px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-md">Signed</span>
                            )}
                            {editMode && !isCompleted && (
                              <span className="text-[9px] font-bold text-brand-primary-blue bg-blue-50 px-2 py-0.5 rounded-md">Click to sign</span>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
