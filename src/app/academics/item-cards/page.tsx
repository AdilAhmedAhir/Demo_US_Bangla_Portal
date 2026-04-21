'use client';

import React, { useState } from 'react';
import {
  CheckCircle2,
  Circle,
  ChevronDown,
  ChevronRight,
  ClipboardList,
  Microscope,
  Bug,
  Dna,
  Shield,
  Pill,
  FlaskConical,
  ScanSearch,
  AlertTriangle,
  Info,
} from 'lucide-react';

interface ItemTopic {
  id: string;
  title: string;
  completed: boolean;
  signedBy?: string;
  signedDate?: string;
}

interface ItemCard {
  id: string;
  title: string;
  subtitle: string;
  icon: React.ElementType;
  color: string;
  bg: string;
  sections: {
    name: string;
    topics: ItemTopic[];
  }[];
}

const itemCards: ItemCard[] = [
  {
    id: 'card1',
    title: 'Item Card 1',
    subtitle: 'General Bacteriology, Systemic Bacteriology, Immunology',
    icon: Microscope,
    color: 'text-brand-primary-blue',
    bg: 'bg-blue-50',
    sections: [
      {
        name: 'General Bacteriology',
        topics: [
          { id: 'gb1', title: 'Prokaryote & Eukaryote, Cell Wall Structure, Capsule, Flagella, Spore, Classification', completed: true, signedBy: 'Prof. Kamal Uddin', signedDate: 'Feb 15' },
          { id: 'gb2', title: 'Growth & Death of Bacteria, Growth Curve, Generation Time, O₂ Classification', completed: true, signedBy: 'Prof. Kamal Uddin', signedDate: 'Feb 28' },
          { id: 'gb3', title: 'Pathogenesis, Exotoxin/Endotoxin, Koch\'s Postulates, Molecular Koch\'s', completed: true, signedBy: 'Dr. Farzana Noor', signedDate: 'Mar 10' },
          { id: 'gb4', title: 'Sterilization, Disinfection, Antisepsis — Principles & Uses', completed: true, signedBy: 'Dr. Farzana Noor', signedDate: 'Mar 20' },
          { id: 'gb5', title: 'Practical: Gram Staining, ZN Staining, Culture Media Types', completed: true, signedBy: 'Prof. Kamal Uddin', signedDate: 'Mar 28' },
          { id: 'gb6', title: 'Antimicrobials: Mechanism, Resistance, Selective Toxicity, MDR/XDR/PDR', completed: false },
          { id: 'gb7', title: 'Bacterial Genetics: Plasmid, Transposons, Mutation, Gene Transfer', completed: false },
        ],
      },
      {
        name: 'Systemic Bacteriology',
        topics: [
          { id: 'sb1', title: 'Staphylococci & Streptococci — Classification, Diseases, Lab Diagnosis', completed: true, signedBy: 'Prof. Kamal Uddin', signedDate: 'Apr 5' },
          { id: 'sb2', title: 'Neisseria, Corynebacterium, Bacillus — Diphtheria, Anthrax', completed: true, signedBy: 'Dr. Rehana Sultana', signedDate: 'Apr 10' },
          { id: 'sb3', title: 'Mycobacterium — TB Pathogenesis, Diagnosis (Gene Xpert), Leprosy', completed: false },
          { id: 'sb4', title: 'Enterobacteriaceae — Salmonella, Shigella, E. coli', completed: false },
          { id: 'sb5', title: 'Vibrio, Campylobacter, Helicobacter', completed: false },
          { id: 'sb6', title: 'Spirochetes — Syphilis Stages, Leptospira, Borrelia', completed: false },
          { id: 'sb7', title: 'Anaerobes — Clostridium, Bacteroides; Chlamydia, Rickettsia, Mycoplasma', completed: false },
        ],
      },
      {
        name: 'Immunology',
        topics: [
          { id: 'im1', title: 'Innate & Adaptive Immunity, Antigens, Immunoglobulins', completed: true, signedBy: 'Dr. Farzana Noor', signedDate: 'Mar 15' },
          { id: 'im2', title: 'Complement System, MHC, Cytokines', completed: true, signedBy: 'Dr. Farzana Noor', signedDate: 'Apr 1' },
          { id: 'im3', title: 'Hypersensitivity (Types I-IV), Autoimmunity, Transplant Immunology', completed: false },
          { id: 'im4', title: 'Vaccines, Immunodiagnostic Tests (ELISA, Western Blot, PCR)', completed: false },
        ],
      },
    ],
  },
  {
    id: 'card2',
    title: 'Item Card 2',
    subtitle: 'Parasitology, Virology, Mycology & Clinical Microbiology',
    icon: Bug,
    color: 'text-emerald-600',
    bg: 'bg-emerald-50',
    sections: [
      {
        name: 'Parasitology',
        topics: [
          { id: 'pr1', title: 'Introduction, Classification, Host-Parasite Relationships', completed: true, signedBy: 'Prof. Kamal Uddin', signedDate: 'Jan 20' },
          { id: 'pr2', title: 'Entamoeba, Giardia, Trichomonas — Morphology, Pathogenesis, Diagnosis', completed: true, signedBy: 'Prof. Kamal Uddin', signedDate: 'Feb 5' },
          { id: 'pr3', title: 'Plasmodium — Lifecycle, Malaria Features, Lab Diagnosis, Treatment', completed: true, signedBy: 'Dr. Rehana Sultana', signedDate: 'Feb 20' },
          { id: 'pr4', title: 'Cestodes & Trematodes — Taenia, Echinococcus, Schistosoma', completed: false },
          { id: 'pr5', title: 'Nematodes — Ascaris, Hookworm, Strongyloides, Filariasis', completed: false },
        ],
      },
      {
        name: 'Virology',
        topics: [
          { id: 'vr1', title: 'General Virology — Structure, Replication, Classification, Antiviral Agents', completed: true, signedBy: 'Dr. Nazmul Haque', signedDate: 'Feb 10' },
          { id: 'vr2', title: 'Herpes Viruses — Latency, Reactivation, Diseases', completed: true, signedBy: 'Dr. Nazmul Haque', signedDate: 'Feb 25' },
          { id: 'vr3', title: 'Hepatitis Viruses — Classification, Pathogenesis, Lab Diagnosis', completed: false },
          { id: 'vr4', title: 'HIV/AIDS, Dengue (DHF/DSS), COVID-19 & Emerging Viruses', completed: false },
        ],
      },
      {
        name: 'Mycology',
        topics: [
          { id: 'my1', title: 'Superficial & Cutaneous Mycoses — Dermatophytosis, Candidiasis', completed: false },
          { id: 'my2', title: 'Systemic Mycoses — Histoplasmosis, Cryptococcal Meningitis, Opportunistic', completed: false },
        ],
      },
      {
        name: 'Clinical Microbiology',
        topics: [
          { id: 'cm1', title: 'Sample Collection, Transportation, Storage', completed: false },
          { id: 'cm2', title: 'UTI, RTI, GI, CNS Infections — Causative Organisms, Diagnosis', completed: false },
          { id: 'cm3', title: 'Hospital Acquired Infections, Biosafety, Infection Control', completed: false },
        ],
      },
    ],
  },
];

export default function ItemCardTrackerPage() {
  const [expanded, setExpanded] = useState<Record<string, boolean>>({
    'card1-General Bacteriology': true,
  });

  const toggleSection = (key: string) => {
    setExpanded((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const getCardStats = (card: ItemCard) => {
    const all = card.sections.flatMap((s) => s.topics);
    const done = all.filter((t) => t.completed).length;
    return { done, total: all.length, percent: Math.round((done / all.length) * 100) };
  };

  return (
    <div className="flex flex-col gap-6 w-full h-full pb-10">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
        <div className="flex items-center gap-2.5">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500 to-emerald-700 flex items-center justify-center shadow-md">
            <ClipboardList className="w-5 h-5 text-white" />
          </div>
          <div>
            <h1 className="text-xl font-black text-gray-900 tracking-tight">Item Card Tracker</h1>
            <p className="text-xs font-medium text-gray-400">Microbiology — Phase III Competency Progress</p>
          </div>
        </div>
      </div>

      {/* Alert */}
      <div className="p-4 bg-amber-50 border border-amber-200 rounded-xl flex items-start gap-3">
        <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
        <div>
          <p className="text-sm font-bold text-amber-800">Complete all items before exam registration</p>
          <p className="text-xs text-amber-600 mt-0.5">You must complete every topic in both item cards to be eligible for the Third Professional Examination.</p>
        </div>
      </div>

      {/* Card Overview Widgets */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {itemCards.map((card) => {
          const stats = getCardStats(card);
          const Icon = card.icon;
          return (
            <div key={card.id} className="bg-white rounded-xl shadow-sm border border-gray-100 p-5 hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-3">
                <div className={`w-11 h-11 rounded-xl ${card.bg} flex items-center justify-center`}>
                  <Icon className={`w-5 h-5 ${card.color}`} />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-sm font-bold text-gray-900">{card.title}</h3>
                  <p className="text-[11px] text-gray-500 truncate">{card.subtitle}</p>
                </div>
                <span className={`text-lg font-black ${stats.percent === 100 ? 'text-emerald-600' : stats.percent >= 50 ? 'text-brand-primary-blue' : 'text-amber-600'}`}>
                  {stats.percent}%
                </span>
              </div>
              <div className="h-2.5 bg-gray-100 rounded-full overflow-hidden mb-2">
                <div
                  className={`h-full rounded-full transition-all ${stats.percent === 100 ? 'bg-emerald-500' : stats.percent >= 50 ? 'bg-brand-primary-blue' : 'bg-amber-500'}`}
                  style={{ width: `${stats.percent}%` }}
                />
              </div>
              <p className="text-[11px] font-bold text-gray-400">{stats.done}/{stats.total} topics completed</p>
            </div>
          );
        })}
      </div>

      {/* Detailed Cards */}
      {itemCards.map((card) => {
        const Icon = card.icon;
        return (
          <div key={card.id} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="px-6 py-5 border-b border-gray-100">
              <h2 className="text-base font-bold text-gray-900 flex items-center gap-2">
                <Icon className={`w-5 h-5 ${card.color}`} />
                {card.title}: {card.subtitle}
              </h2>
            </div>

            {card.sections.map((section) => {
              const key = `${card.id}-${section.name}`;
              const isOpen = expanded[key];
              const sectionDone = section.topics.filter((t) => t.completed).length;

              return (
                <div key={key} className="border-b border-gray-50 last:border-0">
                  <button
                    onClick={() => toggleSection(key)}
                    className="w-full px-6 py-4 flex items-center justify-between hover:bg-slate-50 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      {isOpen ? <ChevronDown className="w-4 h-4 text-gray-400" /> : <ChevronRight className="w-4 h-4 text-gray-400" />}
                      <span className="text-sm font-bold text-gray-900">{section.name}</span>
                      <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                        sectionDone === section.topics.length
                          ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                          : 'bg-gray-100 text-gray-500'
                      }`}>
                        {sectionDone}/{section.topics.length}
                      </span>
                    </div>
                    <div className="w-20 h-1.5 bg-gray-100 rounded-full overflow-hidden">
                      <div
                        className={`h-full rounded-full ${sectionDone === section.topics.length ? 'bg-emerald-500' : 'bg-brand-primary-blue'}`}
                        style={{ width: `${(sectionDone / section.topics.length) * 100}%` }}
                      />
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-4 space-y-2">
                      {section.topics.map((topic) => (
                        <div
                          key={topic.id}
                          className={`flex items-start gap-3 p-3 rounded-lg transition-colors ${
                            topic.completed ? 'bg-emerald-50/50 border border-emerald-100/50' : 'bg-gray-50/50 border border-gray-100/50'
                          }`}
                        >
                          {topic.completed ? (
                            <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                          ) : (
                            <Circle className="w-5 h-5 text-gray-300 shrink-0 mt-0.5" />
                          )}
                          <div className="flex-1 min-w-0">
                            <p className={`text-xs font-bold ${topic.completed ? 'text-gray-700' : 'text-gray-500'}`}>
                              {topic.title}
                            </p>
                            {topic.completed && topic.signedBy && (
                              <p className="text-[10px] text-emerald-600 font-medium mt-1">
                                ✓ Signed by {topic.signedBy} — {topic.signedDate}
                              </p>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
}
