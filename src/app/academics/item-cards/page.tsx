'use client';

import React, { useState } from 'react';
import {
  CheckCircle2,
  Circle,
  ChevronDown,
  ChevronRight,
  ClipboardList,
  AlertTriangle,
} from 'lucide-react';
import { getCourse, currentCourses } from '@/data/academics';

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
  sections: { name: string; topics: ItemTopic[] }[];
}

/* Faculty names per subject (from the shared roster) */
const micro = getCourse('MICRO-303')!;
const path = getCourse('PATH-302')!;
const comm = getCourse('CMPH-301')!;
const mF = micro.faculty.map((f) => f.name); // [Head, Assoc(Virology), Asst(Immunology), Lecturer(Bacteriology), Demonstrator]
const pF = path.faculty.map((f) => f.name);  // [Head, Assoc(Haematology), Asst(Cytopath), Lecturer, Demonstrator]
const cF = comm.faculty.map((f) => f.name);  // [Head, Assoc, Asst(Biostat), Lecturer]

/* topic helper */
const t = (id: string, title: string, done = false, by?: string, date?: string): ItemTopic => ({
  id, title, completed: done, signedBy: by, signedDate: date,
});

/* ───────────── Microbiology — 2 Item Cards (BM&DC) ───────────── */
const MICRO_CARDS: ItemCard[] = [
  {
    id: 'm-card1',
    title: 'Item Card 1',
    subtitle: 'General Bacteriology, Parasitology, Immunology',
    sections: [
      { name: 'General Bacteriology', topics: [
        t('gb1', 'Prokaryote & Eukaryote, Cell Wall, Capsule, Flagella, Spore, Classification', true, mF[3], 'Feb 15'),
        t('gb2', 'Growth & Death of Bacteria, Growth Curve, O₂ Classification', true, mF[3], 'Feb 28'),
        t('gb3', "Pathogenesis, Exotoxin/Endotoxin, Koch's & Molecular Koch's Postulates", true, mF[0], 'Mar 10'),
        t('gb4', 'Sterilization, Disinfection, Antisepsis — Principles & Uses', true, mF[3], 'Mar 20'),
        t('gb5', 'Practical: Gram & ZN Staining, Culture Media Types', true, mF[3], 'Mar 28'),
        t('gb6', 'Antimicrobials: Mechanism, Resistance, MDR/XDR/PDR'),
        t('gb7', 'Bacterial Genetics: Plasmid, Transposons, Gene Transfer'),
      ] },
      { name: 'Parasitology', topics: [
        t('pr1', 'Introduction, Classification, Host-Parasite Relationships', true, mF[0], 'Jan 20'),
        t('pr2', 'Entamoeba, Giardia, Trichomonas — Pathogenesis, Diagnosis', true, mF[0], 'Feb 5'),
        t('pr3', 'Plasmodium — Lifecycle, Malaria, Lab Diagnosis, Treatment', true, mF[0], 'Feb 20'),
        t('pr4', 'Cestodes & Trematodes — Taenia, Echinococcus, Schistosoma'),
        t('pr5', 'Nematodes — Ascaris, Hookworm, Strongyloides, Filariasis'),
      ] },
      { name: 'Immunology', topics: [
        t('im1', 'Innate & Adaptive Immunity, Antigens, Immunoglobulins', true, mF[2], 'Mar 15'),
        t('im2', 'Complement System, MHC, Cytokines', true, mF[2], 'Apr 1'),
        t('im3', 'Hypersensitivity (I–IV), Autoimmunity, Transplant Immunology'),
        t('im4', 'Vaccines, Immunodiagnostics (ELISA, Western Blot, PCR)'),
      ] },
    ],
  },
  {
    id: 'm-card2',
    title: 'Item Card 2',
    subtitle: 'Systemic Bacteriology, Virology, Mycology & Clinical Microbiology',
    sections: [
      { name: 'Systemic Bacteriology', topics: [
        t('sb1', 'Staphylococci & Streptococci — Diseases, Lab Diagnosis', true, mF[3], 'Apr 5'),
        t('sb2', 'Neisseria, Corynebacterium, Bacillus — Diphtheria, Anthrax', true, mF[0], 'Apr 10'),
        t('sb3', 'Mycobacterium — TB Pathogenesis, GeneXpert, Leprosy'),
        t('sb4', 'Enterobacteriaceae — Salmonella, Shigella, E. coli'),
        t('sb5', 'Vibrio, Campylobacter, Helicobacter'),
        t('sb6', 'Spirochetes — Syphilis, Leptospira, Borrelia'),
        t('sb7', 'Anaerobes; Chlamydia, Rickettsia, Mycoplasma'),
      ] },
      { name: 'Virology', topics: [
        t('vr1', 'General Virology — Structure, Replication, Antiviral Agents', true, mF[1], 'Feb 10'),
        t('vr2', 'Herpes Viruses — Latency, Reactivation, Diseases', true, mF[1], 'Feb 25'),
        t('vr3', 'Hepatitis Viruses — Classification, Pathogenesis, Diagnosis'),
        t('vr4', 'HIV/AIDS, Dengue (DHF/DSS), COVID-19 & Emerging Viruses'),
      ] },
      { name: 'Mycology', topics: [
        t('my1', 'Superficial & Cutaneous Mycoses — Dermatophytosis, Candidiasis'),
        t('my2', 'Systemic & Opportunistic Mycoses — Cryptococcus, Aspergillus'),
      ] },
      { name: 'Clinical Microbiology', topics: [
        t('cm1', 'Stool, Urine, CSF Examination; Sample Collection & Transport'),
        t('cm2', 'UTI, RTI, GI, CNS Infections — Organisms & Diagnosis'),
        t('cm3', 'Hospital Acquired Infection, Biosafety, Infection Control'),
      ] },
    ],
  },
];

/* ───────────── Pathology — 4 Class-Performance Cards (Term 1A/1B, 2A/2B) ───────────── */
const PATH_CARDS: ItemCard[] = [
  {
    id: 'p-1a', title: 'Card 1A', subtitle: 'General Pathology (Term I)',
    sections: [{ name: 'General Pathology', topics: [
      t('p1a1', 'Introduction to Pathology; sample collection, preservation & processing', true, pF[0], 'Jan 18'),
      t('p1a2', 'Cellular adaptation, intracellular accumulation, calcification, aging', true, pF[2], 'Jan 25'),
      t('p1a3', 'Cell injury: reversible, hypoxic injury, free radicals', true, pF[2], 'Feb 1'),
      t('p1a4', 'Irreversible injury — Necrosis & Apoptosis', true, pF[0], 'Feb 8'),
      t('p1a5', 'Acute inflammation — cellular & vascular events, chemotaxis', true, pF[1], 'Feb 12'),
      t('p1a6', 'Chemical mediators, patterns & systemic effects of inflammation', true, pF[1], 'Feb 15'),
      t('p1a7', 'Chronic & granulomatous inflammation', true, pF[1], 'Feb 20'),
      t('p1a8', 'Healing & repair; factors affecting wound healing', true, pF[2], 'Feb 22'),
      t('p1a9', 'Haemodynamics: oedema, effusions, electrolyte disorders', true, pF[0], 'Feb 26'),
      t('p1a10', 'Hyperemia, congestion, haemorrhage, shock', true, pF[0], 'Mar 1'),
      t('p1a11', 'Haemostasis, thrombosis, embolism, infarction', true, pF[1], 'Mar 4'),
      t('p1a12', 'Neoplasia: nomenclature, benign vs malignant', true, pF[0], 'Mar 8'),
      t('p1a13', 'Features of malignancy; oncogenes & tumor suppressor genes', true, pF[0], 'Mar 10'),
      t('p1a14', 'Carcinogenesis; grading & staging of cancer', true, pF[2], 'Mar 12'),
      t('p1a15', 'Tumor immunity; laboratory diagnosis of cancer', true, pF[0], 'Mar 15'),
    ] }],
  },
  {
    id: 'p-1b', title: 'Card 1B', subtitle: 'Haematolymphoid Pathology (Term I)',
    sections: [{ name: 'Haematolymphoid System', topics: [
      t('p1b1', 'Genetics & cytogenetic disorders (Down’s, Turner’s); mutation', true, pF[1], 'Mar 18'),
      t('p1b2', 'Immunopathology: hypersensitivity, autoimmune, immunodeficiency', true, pF[1], 'Mar 20'),
      t('p1b3', 'Nutritional disorders (PEM); environmental & occupational hazards', true, pF[2], 'Mar 22'),
      t('p1b4', 'Haematology intro; Hb, RBC indices, PBF, CBC', true, pF[1], 'Mar 25'),
      t('p1b5', 'Anaemia — iron deficiency & megaloblastic; diagnosis', true, pF[1], 'Mar 28'),
      t('p1b6', 'Haemolytic anaemia — thalassemia, sickle cell', true, pF[1], 'Apr 1'),
      t('p1b7', 'Pancytopenia, aplastic anaemia', true, pF[0], 'Apr 3'),
      t('p1b8', 'WBC reactive proliferations — neutrophilia, eosinophilia', true, pF[1], 'Apr 5'),
      t('p1b9', 'Leukaemia & myelodysplastic syndrome', true, pF[0], 'Apr 8'),
      t('p1b10', 'Lymphoproliferative disorders — lymphoma, multiple myeloma', true, pF[0], 'Apr 10'),
      t('p1b11', 'Myeloproliferative disorders — polycythemia, myelofibrosis', true, pF[1], 'Apr 12'),
      t('p1b12', 'Haemorrhagic disorders — ITP, haemophilia, DIC; screening tests', true, pF[1], 'Apr 14'),
      t('p1b13', 'Blood grouping, products & transfusion hazards', true, pF[2], 'Apr 16'),
    ] }],
  },
  {
    id: 'p-2a', title: 'Card 2A', subtitle: 'Systemic Pathology I (Term II)',
    sections: [{ name: 'Systemic Pathology I', topics: [
      t('p2a1', 'Blood vessels — atherosclerosis, vasculitis; lipid profile', true, pF[2], 'Apr 20'),
      t('p2a2', 'Ischemic & hypertensive heart disease; cardiac enzymes', true, pF[0], 'Apr 22'),
      t('p2a3', 'Congenital heart disease, rheumatic fever, endocarditis', true, pF[0], 'Apr 24'),
      t('p2a4', 'Respiratory — congenital, TB, lung abscess, pneumonia', true, pF[2], 'Apr 26'),
      t('p2a5', 'Respiratory — COPD, asthma, bronchogenic carcinoma'),
      t('p2a6', 'Urinary — glomerular diseases (AGN, NS)'),
      t('p2a7', 'Urinary — pyelonephritis, calculi; renal function tests'),
      t('p2a8', 'Urinary — renal & bladder tumors, cystitis'),
      t('p2a9', 'GIT — oral cavity, salivary gland, esophagus tumors'),
      t('p2a10', 'Gastritis, peptic ulcer, gastric carcinoma'),
      t('p2a11', 'Intestine — IBD, polyps, tumors; appendicitis'),
      t('p2a12', 'Hepatobiliary — hepatitis, viral markers, LFT'),
      t('p2a13', 'Hepatobiliary — cirrhosis, portal hypertension, liver tumors'),
      t('p2a14', 'Gall bladder & pancreas — inflammation & tumors'),
    ] }],
  },
  {
    id: 'p-2b', title: 'Card 2B', subtitle: 'Systemic Pathology II (Term II)',
    sections: [{ name: 'Systemic Pathology II', topics: [
      t('p2b1', 'Male genital — testis & prostate tumors; semen analysis, PSA'),
      t('p2b2', 'Female genital — cervix, CIN, PAP smear'),
      t('p2b3', 'Female genital — uterus & ovary tumors; pregnancy test'),
      t('p2b4', 'Breast — benign & malignant tumors; ER/PR/HER-2'),
      t('p2b5', 'Endocrine — thyroid disorders & tumors'),
      t('p2b6', 'Endocrine — diabetes mellitus, OGTT'),
      t('p2b7', 'Eye/ENT/CNS — tumors, meningitis, CSF examination'),
      t('p2b8', 'Bone & joint — osteomyelitis, osteosarcoma, rheumatoid arthritis'),
      t('p2b9', 'Skin — pigmented lesions, SCC/BCC/melanoma'),
      t('p2b10', 'Autopsy; histopathology techniques'),
      t('p2b11', 'Cytopathology — FNAC, Pap smear, fluid cytology'),
      t('p2b12', 'Reference values — haematological & chemical pathology'),
    ] }],
  },
];

/* ───────────── Community Medicine — 2 Course Parts (15 topics) ───────────── */
const COMM_CARDS: ItemCard[] = [
  {
    id: 'c-p1', title: 'Part 1', subtitle: 'Concepts, Behavioural Science & Research Methodology',
    sections: [{ name: 'Part 1 — Topics 1–5', topics: [
      t('c1', 'Concept of Public Health, Community Medicine, Health & Disease', true, cF[0], 'Jan 15'),
      t('c2', 'Behavioural Science', true, cF[1], 'Jan 28'),
      t('c3', 'Health Communication & Health Education', true, cF[1], 'Feb 8'),
      t('c4', 'Medical Entomology', true, cF[3], 'Feb 18'),
      t('c5', 'Research Methodology & Biostatistics'),
    ] }],
  },
  {
    id: 'c-p2', title: 'Part 2', subtitle: 'Epidemiology, Public Health & Administration',
    sections: [{ name: 'Part 2 — Topics 6–15', topics: [
      t('c6', 'Environment & Health (water, air, waste, housing)', true, cF[1], 'Mar 2'),
      t('c7', 'Immunity, Immunization & Disinfection', true, cF[0], 'Mar 12'),
      t('c8', 'Public Health Nutrition'),
      t('c9', 'Principles of Epidemiology'),
      t('c10', 'Epidemiology of Communicable & Non-Communicable Diseases'),
      t('c11', 'MCH-FP & Demography'),
      t('c12', 'School Health Services'),
      t('c13', 'Occupational Health'),
      t('c14', 'HFA, Primary Health Care, UHC & MDG/SDG'),
      t('c15', 'Public Health Administration & Management'),
    ] }],
  },
];

const SUBJECT_CARDS: Record<string, { cardLabel: string; cards: ItemCard[] }> = {
  'MICRO-303': { cardLabel: 'Item Cards', cards: MICRO_CARDS },
  'PATH-302': { cardLabel: 'Class Performance Cards', cards: PATH_CARDS },
  'CMPH-301': { cardLabel: 'Course Parts', cards: COMM_CARDS },
};

export default function ItemCardTrackerPage() {
  const [activeCode, setActiveCode] = useState<string>('MICRO-303');
  const [expanded, setExpanded] = useState<Record<string, boolean>>({});

  const course = getCourse(activeCode)!;
  const { cardLabel, cards } = SUBJECT_CARDS[activeCode];

  const toggleSection = (key: string) => setExpanded((prev) => ({ ...prev, [key]: !prev[key] }));

  const getCardStats = (card: ItemCard) => {
    const all = card.sections.flatMap((s) => s.topics);
    const done = all.filter((x) => x.completed).length;
    return { done, total: all.length, percent: Math.round((done / all.length) * 100) };
  };

  const allTopics = cards.flatMap((c) => c.sections.flatMap((s) => s.topics));
  const overallDone = allTopics.filter((x) => x.completed).length;
  const overallPct = Math.round((overallDone / allTopics.length) * 100);

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
            <p className="text-xs font-medium text-gray-400">{course.phase} · {course.professionalExam} — formative {cardLabel.toLowerCase()}</p>
          </div>
        </div>
        <div className="flex flex-col items-start sm:items-end">
          <span className={`text-sm font-black ${overallPct === 100 ? 'text-emerald-600' : overallPct >= 50 ? 'text-brand-primary-blue' : 'text-amber-600'}`}>{overallDone}/{allTopics.length} items cleared (~{overallPct}%)</span>
          <span className="text-[11px] font-medium text-gray-400">{course.name} ({course.code})</span>
        </div>
      </div>

      {/* Subject Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-1">
        {currentCourses.map((c) => {
          const isActive = c.code === activeCode;
          return (
            <button
              key={c.code}
              onClick={() => setActiveCode(c.code)}
              className={`px-4 py-2.5 rounded-xl text-sm font-bold whitespace-nowrap transition-all border ${
                isActive
                  ? 'bg-brand-primary-blue text-white border-brand-primary-blue shadow-sm'
                  : 'bg-white text-gray-600 border-gray-200 hover:bg-gray-50'
              }`}
            >
              {c.shortName}
              <span className={`ml-2 text-[10px] font-bold px-1.5 py-0.5 rounded-full ${isActive ? 'bg-white/20' : 'bg-gray-100 text-gray-500'}`}>{SUBJECT_CARDS[c.code].cards.length}</span>
            </button>
          );
        })}
      </div>

      {/* Alert */}
      <div className="p-4 bg-amber-50 border border-amber-200 rounded-xl flex items-start gap-3">
        <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
        <div>
          <p className="text-sm font-bold text-amber-800">Complete all items to be eligible for the Third Professional Examination</p>
          <p className="text-xs text-amber-600 mt-0.5">Every topic across the {cardLabel.toLowerCase()} of {course.shortName} must be signed off before exam registration.</p>
        </div>
      </div>

      {/* Card Overview Widgets */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {cards.map((card) => {
          const stats = getCardStats(card);
          return (
            <div key={card.id} className="bg-white rounded-xl shadow-sm border border-gray-100 p-5 hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-sm font-bold text-gray-900">{card.title}</h3>
                <span className={`text-lg font-black ${stats.percent === 100 ? 'text-emerald-600' : stats.percent >= 50 ? 'text-brand-primary-blue' : 'text-amber-600'}`}>{stats.percent}%</span>
              </div>
              <p className="text-[11px] text-gray-500 mb-3 line-clamp-1">{card.subtitle}</p>
              <div className="h-2.5 bg-gray-100 rounded-full overflow-hidden mb-2">
                <div className={`h-full rounded-full transition-all ${stats.percent === 100 ? 'bg-emerald-500' : stats.percent >= 50 ? 'bg-brand-primary-blue' : 'bg-amber-500'}`} style={{ width: `${stats.percent}%` }} />
              </div>
              <p className="text-[11px] font-bold text-gray-400">{stats.done}/{stats.total} topics completed</p>
            </div>
          );
        })}
      </div>

      {/* Detailed Cards */}
      {cards.map((card) => (
        <div key={card.id} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="px-6 py-5 border-b border-gray-100">
            <h2 className="text-base font-bold text-gray-900 flex items-center gap-2">
              <ClipboardList className={`w-5 h-5 ${getCardStats(card).percent === 100 ? 'text-emerald-600' : 'text-brand-primary-blue'}`} />
              {card.title}: {card.subtitle}
            </h2>
          </div>

          {card.sections.map((section) => {
            const key = `${activeCode}-${card.id}-${section.name}`;
            const isOpen = expanded[key];
            const sectionDone = section.topics.filter((x) => x.completed).length;
            return (
              <div key={key} className="border-b border-gray-50 last:border-0">
                <button onClick={() => toggleSection(key)} className="w-full px-6 py-4 flex items-center justify-between hover:bg-slate-50 transition-colors">
                  <div className="flex items-center gap-3">
                    {isOpen ? <ChevronDown className="w-4 h-4 text-gray-400" /> : <ChevronRight className="w-4 h-4 text-gray-400" />}
                    <span className="text-sm font-bold text-gray-900">{section.name}</span>
                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${sectionDone === section.topics.length ? 'bg-emerald-50 text-emerald-700 border border-emerald-200' : 'bg-gray-100 text-gray-500'}`}>{sectionDone}/{section.topics.length}</span>
                  </div>
                  <div className="w-20 h-1.5 bg-gray-100 rounded-full overflow-hidden">
                    <div className={`h-full rounded-full ${sectionDone === section.topics.length ? 'bg-emerald-500' : 'bg-brand-primary-blue'}`} style={{ width: `${(sectionDone / section.topics.length) * 100}%` }} />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-4 space-y-2">
                    {section.topics.map((topic) => (
                      <div key={topic.id} className={`flex items-start gap-3 p-3 rounded-lg transition-colors ${topic.completed ? 'bg-emerald-50/50 border border-emerald-100/50' : 'bg-gray-50/50 border border-gray-100/50'}`}>
                        {topic.completed ? <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" /> : <Circle className="w-5 h-5 text-gray-300 shrink-0 mt-0.5" />}
                        <div className="flex-1 min-w-0">
                          <p className={`text-xs font-bold ${topic.completed ? 'text-gray-700' : 'text-gray-500'}`}>{topic.title}</p>
                          {topic.completed && topic.signedBy && (
                            <p className="text-[10px] text-emerald-600 font-medium mt-1">✓ Signed by {topic.signedBy} — {topic.signedDate}</p>
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
      ))}
    </div>
  );
}
