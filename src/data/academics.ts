/**
 * Academic data model for the US Bangla Medical College student portal.
 *
 * Source of truth: BMDC-validated MBBS curriculum mapping + US Bangla phase/exam
 * mind-maps (see docs / Downloads PDFs). The MBBS programme runs as FOUR phases,
 * each ending in a Professional MBBS examination, then a 1-year internship:
 *
 *   Phase I   — Pre-Clinical        (1.5 yr) → First  Professional (1300 marks)
 *   Phase II  — Para-Clinical Pt 1  (1 yr)   → Second Professional (600 marks)
 *   Phase III — Para-Clinical Pt 2  (1 yr)   → Third  Professional (900 marks)   ← current student
 *   Phase IV  — Clinical            (1.5 yr) → Final  Professional (1500 marks)
 *
 * A "4th Year / Phase III" student is in Para-Clinical Part 2, currently taking
 * Community Medicine & Public Health, Pathology, and Microbiology.
 *
 * NOTE: faculty rosters and the "Session 2022–23" / "Regular" enrollment label are
 * portal conventions (not in the source PDFs) — realistic demo data, easily edited.
 */

export type Tone = 'good' | 'warn' | 'bad' | 'info' | 'neutral';
export type CourseStanding = 'current' | 'pending';

export interface Faculty {
  name: string;
  designation: string;
  qualifications: string;
  specialization: string;
  email: string;
  chamber: string;
}

export interface Course {
  code: string;
  name: string;
  shortName: string;
  phase: string;              // e.g. "Phase III"
  phaseLabel: string;         // e.g. "Para-Clinical Part 2"
  professionalExam: string;   // e.g. "Third Professional MBBS"
  standing: CourseStanding;
  attendance: number;         // %
  progress: number;           // syllabus / item-card progress %
  statusLabel: string;
  tone: Tone;
  statusNote: string;
  faculty: Faculty[];
}

export interface StudentProfile {
  name: string;
  studentId: string;
  year: string;          // "4th Year"
  phase: string;         // "Phase III"
  phaseLabel: string;    // "Para-Clinical Part 2"
  professionalExam: string;
  session: string;       // "2022–23"
  enrollmentStatus: string; // "Regular"
  attendance: number;
  currentBalance: number;
}

export const student: StudentProfile = {
  name: 'Adil Student',
  studentId: 'USB-MBBS-1947',
  year: '4th Year',
  phase: 'Phase III',
  phaseLabel: 'Para-Clinical Part 2',
  professionalExam: 'Third Professional MBBS',
  session: '2022–23',
  enrollmentStatus: 'Regular',
  attendance: 85,
  currentBalance: 45000,
};

const cmphFaculty: Faculty[] = [
  { name: 'Prof. Dr. Mahbubur Rahman', designation: 'Professor & Head', qualifications: 'MBBS, MPH, FCPS (Community Medicine)', specialization: 'Epidemiology & Public Health', email: 'mahbub.rahman@usbmc.edu.bd', chamber: 'Room 302, Academic Block B' },
  { name: 'Dr. Farhana Akter', designation: 'Associate Professor', qualifications: 'MBBS, MPH', specialization: 'Health Economics', email: 'farhana.akter@usbmc.edu.bd', chamber: 'Room 304, Academic Block B' },
  { name: 'Dr. Saiful Islam', designation: 'Assistant Professor', qualifications: 'MBBS, MPH (Biostatistics)', specialization: 'Biostatistics & Research', email: 'saiful.islam@usbmc.edu.bd', chamber: 'Room 306, Academic Block B' },
  { name: 'Dr. Nazia Hossain', designation: 'Lecturer', qualifications: 'MBBS, MPhil (part)', specialization: 'Community Field Practice', email: 'nazia.hossain@usbmc.edu.bd', chamber: 'Room 308, Academic Block B' },
];

const pathFaculty: Faculty[] = [
  { name: 'Prof. Dr. Abdul Karim', designation: 'Professor & Head', qualifications: 'MBBS, M.Phil (Pathology), FCPS', specialization: 'Histopathology', email: 'abdul.karim@usbmc.edu.bd', chamber: 'Room 210, Pathology Block' },
  { name: 'Dr. Shirin Sultana', designation: 'Associate Professor', qualifications: 'MBBS, M.Phil (Pathology)', specialization: 'Haematology', email: 'shirin.sultana@usbmc.edu.bd', chamber: 'Room 212, Pathology Block' },
  { name: 'Dr. Rafiqul Islam', designation: 'Assistant Professor', qualifications: 'MBBS, M.Phil (Pathology)', specialization: 'Cytopathology', email: 'rafiqul.islam@usbmc.edu.bd', chamber: 'Room 214, Pathology Block' },
  { name: 'Dr. Sabrina Yeasmin', designation: 'Lecturer', qualifications: 'MBBS, M.Phil (part)', specialization: 'Clinical Pathology Lab', email: 'sabrina.yeasmin@usbmc.edu.bd', chamber: 'Room 216, Pathology Block' },
  { name: 'Dr. Imran Hossain', designation: 'Demonstrator', qualifications: 'MBBS', specialization: 'Practical & OSPE Coordination', email: 'imran.hossain@usbmc.edu.bd', chamber: 'Lab 2, Pathology Block' },
];

const microFaculty: Faculty[] = [
  { name: 'Prof. Dr. Nasreen Begum', designation: 'Professor & Head', qualifications: 'MBBS, M.Phil (Microbiology), PhD', specialization: 'Clinical Microbiology', email: 'nasreen.begum@usbmc.edu.bd', chamber: 'Room 118, Microbiology Block' },
  { name: 'Dr. Kamrul Hasan', designation: 'Associate Professor', qualifications: 'MBBS, M.Phil (Microbiology)', specialization: 'Virology', email: 'kamrul.hasan@usbmc.edu.bd', chamber: 'Room 120, Microbiology Block' },
  { name: 'Dr. Mehjabin Chowdhury', designation: 'Assistant Professor', qualifications: 'MBBS, M.Phil (Microbiology)', specialization: 'Immunology', email: 'mehjabin.chowdhury@usbmc.edu.bd', chamber: 'Room 122, Microbiology Block' },
  { name: 'Dr. Asaduzzaman Khan', designation: 'Lecturer', qualifications: 'MBBS, M.Phil (part)', specialization: 'Bacteriology', email: 'asad.khan@usbmc.edu.bd', chamber: 'Room 124, Microbiology Block' },
  { name: 'Dr. Sharmin Akhter', designation: 'Demonstrator', qualifications: 'MBBS', specialization: 'Parasitology & Mycology Lab', email: 'sharmin.akhter@usbmc.edu.bd', chamber: 'Lab 1, Microbiology Block' },
];

const pharFaculty: Faculty[] = [
  { name: 'Prof. Dr. Golam Mostafa', designation: 'Professor & Head', qualifications: 'MBBS, M.Phil (Pharmacology), FCPS', specialization: 'Clinical Pharmacology', email: 'golam.mostafa@usbmc.edu.bd', chamber: 'Room 405, Academic Block A' },
  { name: 'Dr. Rebeca Sultana', designation: 'Associate Professor', qualifications: 'MBBS, M.Phil (Pharmacology)', specialization: 'Therapeutics', email: 'rebeca.sultana@usbmc.edu.bd', chamber: 'Room 407, Academic Block A' },
  { name: 'Dr. Habibur Rahman', designation: 'Assistant Professor', qualifications: 'MBBS, M.Phil (Pharmacology)', specialization: 'Pharmacovigilance', email: 'habibur.rahman@usbmc.edu.bd', chamber: 'Room 409, Academic Block A' },
];

const fmtFaculty: Faculty[] = [
  { name: 'Prof. Dr. Anwar Hossain', designation: 'Professor & Head', qualifications: 'MBBS, DFM, FCPS (Forensic Medicine)', specialization: 'Forensic Pathology', email: 'anwar.hossain@usbmc.edu.bd', chamber: 'Room 109, Morgue Block' },
  { name: 'Dr. Selina Parvin', designation: 'Associate Professor', qualifications: 'MBBS, DFM', specialization: 'Toxicology', email: 'selina.parvin@usbmc.edu.bd', chamber: 'Room 111, Morgue Block' },
  { name: 'Dr. Moinul Islam', designation: 'Lecturer', qualifications: 'MBBS, M.Phil (part)', specialization: 'Medical Jurisprudence', email: 'moinul.islam@usbmc.edu.bd', chamber: 'Room 113, Morgue Block' },
];

export const courses: Course[] = [
  // ── Current — Phase III (Third Professional MBBS) ──
  {
    code: 'CMPH-301',
    name: 'Community Medicine & Public Health',
    shortName: 'Community Medicine',
    phase: 'Phase III',
    phaseLabel: 'Para-Clinical Part 2',
    professionalExam: 'Third Professional MBBS',
    standing: 'current',
    attendance: 81,
    progress: 40,
    statusLabel: 'Action Needed',
    tone: 'bad',
    statusNote: 'Item exam failed — makeup pending',
    faculty: cmphFaculty,
  },
  {
    code: 'PATH-302',
    name: 'Pathology',
    shortName: 'Pathology',
    phase: 'Phase III',
    phaseLabel: 'Para-Clinical Part 2',
    professionalExam: 'Third Professional MBBS',
    standing: 'current',
    attendance: 88,
    progress: 78,
    statusLabel: 'On Track',
    tone: 'good',
    statusNote: 'All item cards cleared',
    faculty: pathFaculty,
  },
  {
    code: 'MICRO-303',
    name: 'Microbiology',
    shortName: 'Microbiology',
    phase: 'Phase III',
    phaseLabel: 'Para-Clinical Part 2',
    professionalExam: 'Third Professional MBBS',
    standing: 'current',
    attendance: 84,
    progress: 45,
    statusLabel: 'At Risk',
    tone: 'warn',
    statusNote: '3 of 7 item cards cleared',
    faculty: microFaculty,
  },
  // ── Pending / Carryover — Phase II (Second Professional MBBS) ──
  {
    code: 'PHAR-201',
    name: 'Pharmacology & Therapeutics',
    shortName: 'Pharmacology',
    phase: 'Phase II',
    phaseLabel: 'Para-Clinical Part 1',
    professionalExam: 'Second Professional MBBS',
    standing: 'pending',
    attendance: 90,
    progress: 70,
    statusLabel: 'Carryover',
    tone: 'info',
    statusNote: 'Referred in practical — re-sit scheduled',
    faculty: pharFaculty,
  },
  {
    code: 'FMT-202',
    name: 'Forensic Medicine & Toxicology',
    shortName: 'Forensic Medicine',
    phase: 'Phase II',
    phaseLabel: 'Para-Clinical Part 1',
    professionalExam: 'Second Professional MBBS',
    standing: 'pending',
    attendance: 86,
    progress: 85,
    statusLabel: 'Improvement',
    tone: 'neutral',
    statusNote: 'Improvement exam pending',
    faculty: fmtFaculty,
  },
];

export const currentCourses: Course[] = courses.filter((c) => c.standing === 'current');
export const pendingCourses: Course[] = courses.filter((c) => c.standing === 'pending');

export function getCourse(code: string): Course | undefined {
  return courses.find((c) => c.code === code);
}

/** Phase III completion %, averaged across the current (Phase III) courses' progress. */
export function phaseCompletion(): number {
  if (currentCourses.length === 0) return 0;
  const total = currentCourses.reduce((sum, c) => sum + c.progress, 0);
  return Math.round(total / currentCourses.length);
}
