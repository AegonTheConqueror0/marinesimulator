import React from 'react';
import { motion } from 'motion/react';
import { Heart, Users, Compass, Shield, Award, Calendar, BookOpen, Star, FileText } from 'lucide-react';

interface AcknowledgementStationProps {
  onBackToOverview: () => void;
}

interface BatchMember {
  name: string;
  role: string;
  category: 'management' | 'operational' | 'medical-it';
  desc?: string;
}

const BATCH_MEMBERS: BatchMember[] = [
  { name: 'Capt. Jaysie Burgos Tan', role: 'Captain / Master Mariner', category: 'management', desc: 'Deck Department Leader' },
  { name: 'Master Jerry Sumalpong Losdoc', role: 'Master Mariner', category: 'management', desc: 'Vessel Operations Chief' },
  { name: 'Chief Officer Kenley Jake Chua Deniega', role: 'Chief Officer', category: 'management', desc: 'Navigation Oversight & Stability' },
  { name: 'Chief Officer Herbert Jeffrey Adimos Macal', role: 'Chief Officer', category: 'management', desc: 'Cargo Operations Coordinator' },
  { name: 'Second Engineer Joperth Kibitzer Bascon Guardaquivil', role: 'Second Engineer', category: 'management', desc: 'Propulsion & Power Systems' },
  { name: 'Second Officer Armando Jr. Peza Cemine', role: 'Second Officer', category: 'operational', desc: 'Bridge Watchkeeping Officer' },
  { name: 'Second Officer Arthur Gregory Haradji Racosalem', role: 'Second Officer', category: 'operational', desc: 'Electronic Navigation Officer' },
  { name: 'Third Engineer Christian John Paluga Basalo', role: 'Third Engineer', category: 'operational', desc: 'Auxiliary Machinery Supervision' },
  { name: 'Third Engineer Aga Dominic Doroy Caalaman', role: 'Third Engineer', category: 'operational', desc: 'Generators & Electrical Systems' },
  { name: 'Third Engineer Brex Darwin Lao Intia', role: 'Third Engineer', category: 'operational', desc: 'Maintenance & Lubrication Specialist' },
  { name: 'Third Officer MC Jarlem Bardo Pejera', role: 'Third Officer', category: 'operational', desc: 'Safety Equipment & Watchkeeping' },
  { name: 'Third Officer Paul Anthony Trinidad Salvador', role: 'Third Officer', category: 'operational', desc: 'Lifesaving Appliances Superintendent' },
  { name: 'Fourth Engineer Princess Lee Rendon Paba', role: 'Fourth Engineer', category: 'operational', desc: 'Watchkeeping & Auxiliary Systems' },
  { name: 'Able Bodied Seaman Carl Vincent Terencio Reyes', role: 'Able Bodied Seaman', category: 'operational', desc: 'Deck Maintenance & Helmsman' },
  { name: 'Information Technology Specialist Edgardo Jr. Barba Rojas', role: 'IT Specialist / DevOps Designer', category: 'medical-it', desc: 'Simulation Systems Architect' },
  { name: 'Nurse Khrystell Ann Seniel Maceda', role: 'Maritime Nurse', category: 'medical-it', desc: 'Medical Care & First Aid Instructor' },
  { name: 'Nurse Czarenaflor Sango Silva', role: 'Maritime Nurse', category: 'medical-it', desc: 'Health Administration & Safety Officer' },
  { name: 'Second Assistant Engineer John Carlo Simbajon Bacalso', role: 'Second Assistant Engineer', category: 'operational', desc: 'Machinery Control Operations' }
];

export default function AcknowledgementStation({ onBackToOverview }: AcknowledgementStationProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      className="space-y-6 animate-fade-in"
      id="acknowledgement-portal"
    >
      {/* Visual Title Header Card */}
      <div className="glass-panel p-6 rounded-xl border border-marine-800 bg-marine-900/65 relative overflow-hidden">
        {/* Abstract background gradient rings */}
        <div className="absolute right-0 top-0 w-80 h-80 bg-indigo-500/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute left-1/3 top-1/2 w-48 h-48 bg-emerald-500/5 rounded-full blur-2xl pointer-events-none" />

        <div className="flex flex-col md:flex-row items-start justify-between gap-6">
          <div className="space-y-2">
            <span className="text-[10px] uppercase font-mono tracking-widest text-[#22d3ee] font-bold bg-cyan-950/80 px-2.5 py-1 rounded border border-cyan-800/60 inline-flex items-center gap-1.5 shadow-sm">
              <Award className="w-3.5 h-3.5 text-cyan-400" />
              IMO MODEL COURSE 6.09 ACADEMIC REGISTER
            </span>
            <h2 className="font-display text-2xl md:text-3.5xl font-black text-white tracking-tight uppercase">
              Project Acknowledgement
            </h2>
            <p className="text-xs md:text-sm text-slate-300 leading-relaxed max-w-4xl">
              Honoring the collective efforts, dedication, and professional commitment of my fellow instructors 
              and specialists in bringing the Integrated Ship Operations Simulator to life.
            </p>
          </div>
          <button
            onClick={onBackToOverview}
            className="px-4 py-2 bg-slate-950 hover:bg-slate-900 border border-slate-800 hover:border-slate-700 text-xs font-bold uppercase text-slate-300 rounded-lg transition-all duration-200 cursor-pointer shadow-md flex items-center gap-2 shrink-0 self-start md:self-center"
          >
            ← Exit to Terminal Lobby
          </button>
        </div>
      </div>

      {/* Main Structural Columns: Texts & Photos */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* LEFT COLUMN: Narrative and Symbolic Backstory & Image Frame (span 7) */}
        <div className="lg:col-span-7 space-y-6">
          
          {/* Main Statement Box */}
          <div className="glass-panel p-5 rounded-xl border border-marine-800 bg-marine-900/40 space-y-4">
            <div className="flex items-center gap-2 border-b border-marine-800 pb-2">
              <BookOpen className="w-4.5 h-4.5 text-cyan-400" />
              <h3 className="font-display font-bold text-xs text-white uppercase tracking-wider">Course Training Context</h3>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              This project was developed solely for the completion requirements of the{' '}
              <strong className="text-white font-semibold">
                International Maritime Organization (IMO) Model Course 6.09 – Training Course for Instructors
              </strong>
              . It serves as an educational and instructional resource designed to support the enhancement of 
              maritime teaching and training methodologies.
            </p>
          </div>

          {/* Premium Framed Group Image Template */}
          <div className="glass-panel p-4 rounded-xl border border-marine-800 bg-slate-950/80 flex flex-col items-stretch shadow-xl">
            <div className="flex items-center justify-between mb-3 text-[10px] font-mono text-slate-500">
              <span className="flex items-center gap-1">
                <Users className="w-3.5 h-3.5 text-indigo-400" /> COHORT PORTRAIT: BATCH "AERITH"
              </span>
              <span>SIMULATION SUITE</span>
            </div>
            
            {/* The Image Container with polished frame */}
            <div className="relative border-4 border-marine-900 bg-slate-900 rounded-lg overflow-hidden group shadow-[inset_0_4px_12px_rgba(0,0,0,0.8)] aspect-[16/9]">
              <img
                src="/src/assets/images/batch_aerith_cohort_1781747400363.jpg"
                alt="Maritime Instructors Cohort Batch Aerith"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-3 left-4 right-4 text-center">
                <span className="text-[10px] sm:text-xs font-mono font-bold text-cyan-400 tracking-widest uppercase text-shadow">
                  Batch "Aerith"
                </span>
              </div>
            </div>
            
            <p className="text-[11px] text-slate-400 font-mono mt-3.5 text-center leading-relaxed">
              * Group cohort visualization representing the collective professional strength of Philippine maritime trainers.
            </p>
          </div>

          {/* Deep Symbolic Backstory Block */}
          <div className="glass-panel p-5 rounded-xl border-l-4 border-l-indigo-500 border-r border-t border-b border-marine-800 bg-marine-900/25 space-y-3.5">
            <div className="flex items-center gap-2">
              <Heart className="w-4.5 h-4.5 text-indigo-400 animate-pulse" />
              <h3 className="font-display font-medium text-xs text-white uppercase tracking-wider">
                The Heritage of Batch "Aerith"
              </h3>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              The proponents would like to express their sincere gratitude to <strong className="text-indigo-300">Batch "Aerith"</strong> for their collaboration, dedication, and commitment throughout the course.
            </p>
            <p className="text-xs text-slate-300 leading-relaxed">
              The name <strong className="text-white">"Aerith"</strong> was chosen in recognition of the daughter of our fellow instructors,{' '}
              <strong className="text-cyan-300 font-semibold text-[11px]">4th Engineer Princess Lee Rendon Paba</strong> and{' '}
              <strong className="text-cyan-300 font-semibold text-[11px]">Able Bodied Seaman Carl Vincent Terencio Reyes</strong>.
            </p>
            <div className="p-3 bg-slate-950/70 border border-marine-850 rounded-lg">
              <p className="text-xs text-indigo-200 leading-relaxed italic">
                "Symbolically, Aerith is associated with Earth, representing growth, stability, and the strong foundation upon which effective learning and professional development are built."
              </p>
            </div>
          </div>

          {/* Slogan conclusion */}
          <div className="p-4 bg-emerald-950/15 border border-emerald-900/40 rounded-xl">
            <p className="text-xs text-slate-300 leading-relaxed">
              The success of this project reflects the collective effort, shared expertise, and professional commitment of every member of Batch Aerith. Their support, cooperation, and dedication have been instrumental in the completion of this undertaking.
            </p>
          </div>

        </div>

        {/* RIGHT COLUMN: Interactive Grid List of Batch Members (span 5) */}
        <div className="lg:col-span-5 space-y-4">
          
          {/* Card Header */}
          <div className="glass-panel p-4 rounded-xl border border-marine-800 bg-marine-900/65 flex items-center justify-between">
            <span className="text-[11px] font-mono uppercase font-black tracking-widest text-[#22d3ee] flex items-center gap-1">
              <Users className="w-4 h-4 text-cyan-400" />
              Class Register ({BATCH_MEMBERS.length} Specialists)
            </span>
            <span className="text-[10px] font-mono text-slate-500">BATCH "AERITH"</span>
          </div>

          {/* Scrollable list of Proponents with custom rank coloring */}
          <div className="space-y-2.5 max-h-[720px] overflow-y-auto pr-1.5 scrollbar-thin scrollbar-thumb-marine-800">
            {BATCH_MEMBERS.map((member, i) => {
              // Custom rank tags styling
              let badgeStyle = '';
              let nameColor = 'text-white';
              
              if (member.category === 'management') {
                badgeStyle = 'bg-amber-950/65 border-amber-900/60 text-amber-300';
              } else if (member.category === 'medical-it') {
                badgeStyle = 'bg-emerald-950/65 border-emerald-900/50 text-emerald-300';
              } else {
                badgeStyle = 'bg-cyan-950/65 border-cyan-900/50 text-cyan-300';
              }

              // Highlight programmer/user email owner in special aesthetic
              const isEdDev = member.name.includes("Edgardo Jr. Barba Rojas");

              return (
                <div 
                  key={i}
                  className={`p-3.5 rounded-lg border transition-all duration-300 flex items-start gap-3 relative overflow-hidden group ${
                    isEdDev 
                      ? 'bg-cyan-950/30 border-cyan-500 shadow-[0_0_15px_rgba(6,182,212,0.15)]' 
                      : 'bg-marine-900/45 border-marine-800/80 hover:bg-marine-900/80 hover:border-slate-700'
                  }`}
                >
                  {/* EdDev design elements */}
                  {isEdDev && (
                    <div className="absolute right-0 top-0 bg-cyan-500 text-slate-950 text-[8px] font-mono font-bold tracking-widest px-2 py-0.5 rounded-bl uppercase">
                      Developer
                    </div>
                  )}

                  {/* Icon placement based on category */}
                  <div className="mt-0.5 shrink-0">
                    <div className={`w-7 h-7 rounded-md flex items-center justify-center border text-xs ${
                      member.category === 'management' ? 'bg-amber-950/30 border-amber-900/35 text-amber-400' :
                      member.category === 'medical-it' ? 'bg-emerald-950/30 border-emerald-900/35 text-emerald-400' :
                      'bg-cyan-950/30 border-cyan-900/35 text-cyan-400'
                    }`}>
                      {member.category === 'management' ? <Shield className="w-3.5 h-3.5" /> : 
                       isEdDev ? <Star className="w-3.5 h-3.5 animate-pulse text-cyan-400" /> : <Compass className="w-3.5 h-3.5" />}
                    </div>
                  </div>

                  {/* Name and description details */}
                  <div className="space-y-1 text-left">
                    <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
                      <span className={`text-[12.5px] font-bold tracking-wide font-sans ${isEdDev ? 'text-cyan-300' : nameColor}`}>
                        {member.name}
                      </span>
                      <span className={`text-[9.5px] font-mono font-medium px-1.5 py-0.5 rounded border uppercase shrink-0 ${badgeStyle}`}>
                        {member.role}
                      </span>
                    </div>
                    {member.desc && (
                      <p className="text-[10.5px] text-slate-400 font-mono">
                        {member.desc}
                      </p>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </motion.div>
  );
}
