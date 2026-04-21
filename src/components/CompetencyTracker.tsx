import React from 'react';
import {
  Target,
  BookOpen,
  CheckCircle2,
  Circle,
  ArrowRight,
  Microscope,
  ShieldCheck,
  Pill,
  Trash2,
  FlaskConical,
  Stethoscope,
  Clock,
  Truck,
} from 'lucide-react';

interface Competency {
  name: string;
  mastery: number; // 0–100
  icon: React.ElementType;
}

interface ItemCardDelivery {
  subject: string;
  card: string;
  status: 'Delivered' | 'In Progress' | 'Scheduled';
  sessions?: string;
}

const competencies: Competency[] = [
  { name: 'Aetiopathogenesis of microbial diseases', mastery: 88, icon: Microscope },
  { name: 'Appropriate antimicrobial selection', mastery: 72, icon: Pill },
  { name: 'Biosafety & medical waste disposal', mastery: 95, icon: Trash2 },
  { name: 'Specimen collection & transport', mastery: 64, icon: FlaskConical },
  { name: 'Interpretation of lab investigations', mastery: 80, icon: Stethoscope },
  { name: 'Hospital infection control measures', mastery: 91, icon: ShieldCheck },
];

const itemCardDelivery: ItemCardDelivery[] = [
  { subject: 'General Bacteriology', card: 'Card 1', status: 'Delivered', sessions: '12/12' },
  { subject: 'Systemic Bacteriology', card: 'Card 1', status: 'In Progress', sessions: '8/14' },
  { subject: 'Immunology', card: 'Card 1', status: 'Scheduled', sessions: '0/10' },
  { subject: 'Parasitology', card: 'Card 2', status: 'In Progress', sessions: '6/11' },
  { subject: 'Virology', card: 'Card 2', status: 'Scheduled', sessions: '0/9' },
  { subject: 'Mycology', card: 'Card 2', status: 'Scheduled', sessions: '0/7' },
];

const statusConfig: Record<ItemCardDelivery['status'], { color: string; bg: string; border: string; icon: React.ElementType }> = {
  'Delivered':   { color: 'text-emerald-700', bg: 'bg-emerald-50', border: 'border-emerald-200', icon: CheckCircle2 },
  'In Progress': { color: 'text-brand-primary-blue', bg: 'bg-blue-50', border: 'border-blue-200', icon: Clock },
  'Scheduled':   { color: 'text-gray-500', bg: 'bg-gray-50', border: 'border-gray-200', icon: Circle },
};

function getMasteryColor(pct: number) {
  if (pct >= 85) return { bar: 'bg-emerald-500', text: 'text-emerald-700', ring: 'ring-emerald-100' };
  if (pct >= 70) return { bar: 'bg-brand-primary-blue', text: 'text-brand-primary-blue', ring: 'ring-blue-100' };
  if (pct >= 50) return { bar: 'bg-amber-500', text: 'text-amber-700', ring: 'ring-amber-100' };
  return { bar: 'bg-red-500', text: 'text-[#ed1c24]', ring: 'ring-red-100' };
}

export default function CompetencyTracker() {
  const avgMastery = Math.round(competencies.reduce((s, c) => s + c.mastery, 0) / competencies.length);
  const delivered = itemCardDelivery.filter(i => i.status === 'Delivered').length;

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
      {/* Header */}
      <div className="px-6 py-5 border-b border-gray-100 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div>
          <h2 className="text-base font-bold text-gray-900 flex items-center gap-2">
            <Target className="w-5 h-5 text-brand-primary-blue" />
            Curriculum Progress: Learning Outcomes & Competencies
          </h2>
          <p className="text-xs text-gray-500 font-medium mt-1">
            Outcome-based tracking for the current academic term.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <div className="text-right">
            <p className="text-lg font-black text-gray-900 leading-none">{avgMastery}%</p>
            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mt-0.5">Avg. Mastery</p>
          </div>
          <div className="w-px h-8 bg-gray-200" />
          <div className="text-right">
            <p className="text-lg font-black text-emerald-700 leading-none">{delivered}/{itemCardDelivery.length}</p>
            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mt-0.5">Delivered</p>
          </div>
        </div>
      </div>

      {/* 2-Column Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 divide-y lg:divide-y-0 lg:divide-x divide-gray-100">
        {/* Left Column — Knowledge & Skills */}
        <div className="p-6">
          <div className="flex items-center gap-2 mb-5">
            <div className="w-7 h-7 rounded-lg bg-blue-50 flex items-center justify-center">
              <BookOpen className="w-4 h-4 text-brand-primary-blue" />
            </div>
            <h3 className="text-sm font-bold text-gray-900">Core Competencies — Cohort Mastery</h3>
          </div>

          <div className="space-y-4">
            {competencies.map((comp) => {
              const colors = getMasteryColor(comp.mastery);
              const Icon = comp.icon;

              return (
                <div key={comp.name} className="group">
                  <div className="flex items-center justify-between mb-1.5">
                    <div className="flex items-center gap-2.5">
                      <div className={`w-6 h-6 rounded-md bg-gray-50 ring-1 ${colors.ring} flex items-center justify-center shrink-0`}>
                        <Icon className={`w-3.5 h-3.5 ${colors.text}`} />
                      </div>
                      <span className="text-xs font-bold text-gray-700 leading-tight">{comp.name}</span>
                    </div>
                    <span className={`text-xs font-black ${colors.text} tabular-nums`}>{comp.mastery}%</span>
                  </div>
                  <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                    <div
                      className={`h-full rounded-full ${colors.bar} transition-all duration-500`}
                      style={{ width: `${comp.mastery}%` }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Column — Item Card Delivery */}
        <div className="p-6">
          <div className="flex items-center gap-2 mb-5">
            <div className="w-7 h-7 rounded-lg bg-emerald-50 flex items-center justify-center">
              <Truck className="w-4 h-4 text-emerald-600" />
            </div>
            <h3 className="text-sm font-bold text-gray-900">Item Card Delivery Status</h3>
          </div>

          <div className="space-y-2.5">
            {itemCardDelivery.map((item) => {
              const cfg = statusConfig[item.status];
              const StatusIcon = cfg.icon;

              return (
                <div
                  key={item.subject}
                  className="flex items-center justify-between p-3 rounded-lg border border-gray-100 bg-white hover:bg-slate-50 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-8 h-8 rounded-lg ${cfg.bg} border ${cfg.border} flex items-center justify-center shrink-0`}>
                      <StatusIcon className={`w-4 h-4 ${cfg.color}`} />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-gray-900">{item.subject}</h4>
                      <p className="text-[10px] font-bold text-gray-400 mt-0.5">
                        {item.card}
                        {item.sessions && (
                          <span className="text-gray-300 mx-1.5">•</span>
                        )}
                        {item.sessions && `${item.sessions} sessions`}
                      </p>
                    </div>
                  </div>

                  <span className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-bold border ${cfg.bg} ${cfg.border} ${cfg.color}`}>
                    <StatusIcon className="w-3 h-3" />
                    {item.status}
                  </span>
                </div>
              );
            })}
          </div>

          {/* Legend */}
          <div className="mt-5 pt-4 border-t border-gray-100 flex flex-wrap gap-4">
            {Object.entries(statusConfig).map(([label, cfg]) => {
              const Icon = cfg.icon;
              return (
                <div key={label} className="flex items-center gap-1.5">
                  <Icon className={`w-3 h-3 ${cfg.color}`} />
                  <span className="text-[10px] font-bold text-gray-400">{label}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
