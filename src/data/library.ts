/**
 * e-Library catalog for US Bangla Medical College.
 *
 * Books are the standard Bangladesh MBBS (BMDC) curriculum texts, organised by
 * the 4-phase / Professional-exam structure (see src/data/academics.ts):
 *   Phase I  (1st Prof) — Anatomy, Physiology, Biochemistry
 *   Phase II (2nd Prof) — Pharmacology, Forensic Medicine
 *   Phase III(3rd Prof) — Pathology, Microbiology, Community Medicine
 *   Phase IV (Final)    — Medicine, Paediatrics, Surgery, Obs & Gynae, Ophthalmology, ENT
 *
 * Covers are rendered as designed placeholders (see components/BookCover.tsx). To
 * use a real cover image for a book, set its `coverUrl` — the component shows the
 * image when it loads and falls back to the designed cover otherwise.
 */

export type Phase = 'Phase I' | 'Phase II' | 'Phase III' | 'Phase IV';

export interface Book {
  id: string;
  title: string;
  author: string;
  edition?: string;
  subject: string;
  phase: Phase;
  professional: string;
  year: number;
  pages: number;
  rating: number;
  readers: number;
  coverUrl?: string;
  available: boolean; // physical copies available for checkout
}

export const PHASES: Phase[] = ['Phase I', 'Phase II', 'Phase III', 'Phase IV'];

/** Subject → phase + professional exam + cover styling (Tailwind class literals). */
export const SUBJECTS: Record<string, { phase: Phase; professional: string; gradient: string; tag: string }> = {
  'Anatomy':                    { phase: 'Phase I',   professional: '1st Professional',  gradient: 'from-blue-600 to-blue-900',       tag: 'bg-blue-50 text-blue-700 border-blue-200' },
  'Physiology':                 { phase: 'Phase I',   professional: '1st Professional',  gradient: 'from-rose-600 to-red-900',        tag: 'bg-rose-50 text-rose-700 border-rose-200' },
  'Biochemistry':               { phase: 'Phase I',   professional: '1st Professional',  gradient: 'from-amber-500 to-amber-800',     tag: 'bg-amber-50 text-amber-700 border-amber-200' },
  'Pharmacology':               { phase: 'Phase II',  professional: '2nd Professional',  gradient: 'from-pink-600 to-rose-900',       tag: 'bg-pink-50 text-pink-700 border-pink-200' },
  'Forensic Medicine':          { phase: 'Phase II',  professional: '2nd Professional',  gradient: 'from-slate-600 to-slate-900',     tag: 'bg-slate-100 text-slate-700 border-slate-200' },
  'Pathology':                  { phase: 'Phase III', professional: '3rd Professional',  gradient: 'from-purple-600 to-purple-900',   tag: 'bg-purple-50 text-purple-700 border-purple-200' },
  'Microbiology':               { phase: 'Phase III', professional: '3rd Professional',  gradient: 'from-cyan-600 to-teal-900',       tag: 'bg-cyan-50 text-cyan-700 border-cyan-200' },
  'Community Medicine':         { phase: 'Phase III', professional: '3rd Professional',  gradient: 'from-lime-600 to-green-900',      tag: 'bg-lime-50 text-lime-700 border-lime-200' },
  'Medicine':                   { phase: 'Phase IV',  professional: 'Final Professional', gradient: 'from-indigo-600 to-indigo-900',  tag: 'bg-indigo-50 text-indigo-700 border-indigo-200' },
  'Paediatrics':                { phase: 'Phase IV',  professional: 'Final Professional', gradient: 'from-sky-500 to-sky-800',        tag: 'bg-sky-50 text-sky-700 border-sky-200' },
  'Surgery':                    { phase: 'Phase IV',  professional: 'Final Professional', gradient: 'from-orange-600 to-orange-900',  tag: 'bg-orange-50 text-orange-700 border-orange-200' },
  'Obstetrics & Gynaecology':   { phase: 'Phase IV',  professional: 'Final Professional', gradient: 'from-fuchsia-600 to-pink-900',   tag: 'bg-fuchsia-50 text-fuchsia-700 border-fuchsia-200' },
  'Ophthalmology':              { phase: 'Phase IV',  professional: 'Final Professional', gradient: 'from-emerald-600 to-emerald-900', tag: 'bg-emerald-50 text-emerald-700 border-emerald-200' },
  'ENT':                        { phase: 'Phase IV',  professional: 'Final Professional', gradient: 'from-violet-600 to-violet-900',  tag: 'bg-violet-50 text-violet-700 border-violet-200' },
};

export const DEFAULT_SUBJECT_STYLE = { gradient: 'from-gray-600 to-gray-900', tag: 'bg-gray-100 text-gray-700 border-gray-200' };

export function subjectStyle(subject: string) {
  const s = SUBJECTS[subject];
  return s ? { gradient: s.gradient, tag: s.tag } : DEFAULT_SUBJECT_STYLE;
}

function mk(
  title: string,
  author: string,
  subject: string,
  edition: string | undefined,
  year: number,
  pages: number,
  rating: number,
  readers: number,
  available = true,
): Book {
  const meta = SUBJECTS[subject];
  const id = title
    .toLowerCase()
    .replace(/&/g, 'and')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '')
    .slice(0, 48);
  return {
    id,
    title,
    author,
    edition,
    subject,
    phase: meta.phase,
    professional: meta.professional,
    year,
    pages,
    rating,
    readers,
    available,
  };
}

export const books: Book[] = [
  // ── Phase I — Anatomy ──
  mk("Vishram Singh's Textbook of Anatomy", 'Vishram Singh', 'Anatomy', '4th Edition', 2024, 1300, 4.8, 312),
  mk("B.D. Chaurasia's Human Anatomy", 'B.D. Chaurasia', 'Anatomy', '10th Edition', 2023, 1420, 4.9, 488),
  mk('Clinical Anatomy by Snell', 'Richard S. Snell', 'Anatomy', '11th Edition', 2023, 768, 4.7, 254),
  mk("Netter's Atlas of Human Anatomy", 'Frank H. Netter', 'Anatomy', '8th Edition', 2024, 672, 4.9, 401),
  mk("Junqueira's Basic Histology", 'Anthony L. Mescher', 'Anatomy', '16th Edition', 2023, 568, 4.6, 187),
  mk("Langman's Medical Embryology", 'T.W. Sadler', 'Anatomy', '15th Edition', 2024, 416, 4.6, 176),
  mk('Datta — Textbook of Anatomy', 'A.K. Datta', 'Anatomy', undefined, 2022, 980, 4.4, 142),
  mk('Datta — General Anatomy', 'A.K. Datta', 'Anatomy', undefined, 2021, 420, 4.3, 119),
  mk("Mannan's Dissection", 'A.K.M. A. Mannan', 'Anatomy', undefined, 2020, 360, 4.2, 96),

  // ── Phase I — Physiology ──
  mk('Guyton & Hall Textbook of Medical Physiology', 'John E. Hall', 'Physiology', '15th Edition', 2024, 1152, 4.9, 372),
  mk("Ganong's Review of Medical Physiology", 'Kim E. Barrett', 'Physiology', '27th Edition', 2023, 768, 4.7, 233),
  mk('Indu Khurana Textbook of Medical Physiology', 'Indu Khurana', 'Physiology', '4th Edition', 2023, 1280, 4.5, 168),
  mk('BRS Physiology (Board Review Series)', 'Linda S. Costanzo', 'Physiology', '9th Edition', 2022, 352, 4.6, 201),

  // ── Phase I — Biochemistry ──
  mk("Harper's Illustrated Biochemistry", 'Victor W. Rodwell', 'Biochemistry', '32nd Edition', 2023, 832, 4.6, 224),
  mk('Lippincott Illustrated Reviews: Biochemistry', 'Denise R. Ferrier', 'Biochemistry', '9th Edition', 2024, 600, 4.7, 198),
  mk('Satyanarayana Biochemistry', 'U. Satyanarayana', 'Biochemistry', '6th Edition', 2022, 788, 4.5, 176),

  // ── Phase II — Pharmacology ──
  mk('K.D. Tripathi Essentials of Medical Pharmacology', 'K.D. Tripathi', 'Pharmacology', '10th Edition', 2024, 1080, 4.8, 341),
  mk('Basic & Clinical Pharmacology', 'Bertram G. Katzung', 'Pharmacology', '16th Edition', 2023, 1280, 4.7, 212),
  mk('Lippincott Illustrated Reviews: Pharmacology', 'Karen Whalen', 'Pharmacology', '8th Edition', 2023, 680, 4.7, 226),
  mk('Pharmacology for Medical Graduates', 'Tara V. Shanbhag & Smita Shenoy', 'Pharmacology', '6th Edition', 2023, 560, 4.4, 134),

  // ── Phase II — Forensic Medicine ──
  mk('The Essentials of Forensic Medicine and Toxicology', 'K.S. Narayan Reddy', 'Forensic Medicine', '36th Edition', 2026, 720, 4.6, 158),
  mk("Parikh's Textbook of Medical Jurisprudence, Forensic Medicine and Toxicology", 'B.V. Subrahmanyam & C.K. Parikh', 'Forensic Medicine', '9th Edition', 2022, 640, 4.4, 112),
  mk('Textbook of Forensic Medicine and Toxicology', 'Nagesh Kumar Rao', 'Forensic Medicine', '4th Edition', 2023, 540, 4.3, 98),

  // ── Phase III — Pathology ──
  mk('Robbins Basic Pathology', 'Vinay Kumar', 'Pathology', '11th Edition', 2023, 952, 4.8, 296),
  mk('Harsh Mohan Textbook of Pathology', 'Harsh Mohan', 'Pathology', '9th Edition', 2023, 960, 4.7, 248),
  mk('Robbins & Cotran Pathologic Basis of Disease', 'Vinay Kumar', 'Pathology', '11th Edition', 2024, 1400, 4.9, 219),

  // ── Phase III — Microbiology ──
  mk("Ananthanarayan & Paniker's Textbook of Microbiology", 'Reba Kanungo', 'Microbiology', '12th Edition', 2024, 728, 4.7, 263),
  mk('Murray Medical Microbiology', 'Patrick R. Murray', 'Microbiology', '10th Edition', 2023, 880, 4.6, 174),
  mk('Apurba Sastry Essentials of Medical Microbiology', 'Apurba S. Sastry', 'Microbiology', '4th Edition', 2024, 720, 4.6, 188),
  mk('Lange Review of Medical Microbiology and Immunology', 'Warren Levinson', 'Microbiology', '16th Edition', 2022, 800, 4.5, 142),

  // ── Phase III — Community Medicine ──
  mk("Park's Textbook of Preventive & Social Medicine", 'K. Park', 'Community Medicine', '28th Edition', 2024, 1080, 4.8, 357),
  mk('Rashid, Khabir & Hyder — Community Medicine', 'Rashid, Khabir & Hyder', 'Community Medicine', undefined, 2022, 620, 4.4, 156),

  // ── Phase IV — Medicine ──
  mk("Davidson's Principles and Practice of Medicine", 'Stuart H. Ralston', 'Medicine', '25th Edition', 2024, 1440, 4.9, 388),
  mk("Harrison's Principles of Internal Medicine", 'J. Larry Jameson', 'Medicine', '22nd Edition', 2023, 4512, 4.9, 274),

  // ── Phase IV — Paediatrics ──
  mk('Nelson Textbook of Pediatrics', 'Robert M. Kliegman', 'Paediatrics', '22nd Edition', 2024, 4100, 4.8, 197),
  mk('Ghai Essential Pediatrics', 'Vinod K. Paul & Arvind Bagga', 'Paediatrics', '10th Edition', 2023, 800, 4.6, 211),
  mk('Step on to Pediatrics', 'Md. Abid Hossain Mollah', 'Paediatrics', '6th Edition', 2023, 520, 4.5, 165),

  // ── Phase IV — Surgery ──
  mk("Bailey & Love's Short Practice of Surgery", 'Williams, O’Connell & McCaskie', 'Surgery', '29th Edition', 2023, 1600, 4.8, 263),
  mk("Apley's System of Orthopaedics & Fractures", 'Ashley Blom', 'Surgery', '10th Edition', 2024, 1024, 4.6, 142),

  // ── Phase IV — Obstetrics & Gynaecology ──
  mk("D.C. Dutta's Textbook of Obstetrics", 'Hiralal Konar (ed.)', 'Obstetrics & Gynaecology', '10th Edition', 2023, 760, 4.7, 238),
  mk("D.C. Dutta's Textbook of Gynaecology", 'Hiralal Konar (ed.)', 'Obstetrics & Gynaecology', '9th Edition', 2023, 620, 4.7, 224),
  mk('Williams Obstetrics', 'F. Gary Cunningham', 'Obstetrics & Gynaecology', '27th Edition', 2024, 1328, 4.7, 156),

  // ── Phase IV — Ophthalmology ──
  mk('A.K. Khurana Comprehensive Ophthalmology', 'A.K. Khurana', 'Ophthalmology', '8th Edition', 2023, 612, 4.6, 178),
  mk("Kanski's Clinical Ophthalmology", 'Brad Bowling', 'Ophthalmology', '10th Edition', 2024, 950, 4.7, 134),

  // ── Phase IV — ENT ──
  mk('Diseases of Ear, Nose and Throat and Head & Neck Surgery', 'P.L. Dhingra & Shruti Dhingra', 'ENT', '8th Edition', 2023, 540, 4.6, 192),
];

export const SUBJECTS_BY_PHASE: Record<Phase, string[]> = PHASES.reduce((acc, phase) => {
  acc[phase] = Object.keys(SUBJECTS).filter((s) => SUBJECTS[s].phase === phase);
  return acc;
}, {} as Record<Phase, string[]>);

export function subjectsForPhase(phase: 'All' | Phase): string[] {
  if (phase === 'All') return Object.keys(SUBJECTS);
  return SUBJECTS_BY_PHASE[phase];
}

export function countByPhase(phase: 'All' | Phase): number {
  if (phase === 'All') return books.length;
  return books.filter((b) => b.phase === phase).length;
}

export function getBook(id: string): Book | undefined {
  return books.find((b) => b.id === id);
}

export const totalBooks = books.length;
export const totalSubjects = Object.keys(SUBJECTS).length;
