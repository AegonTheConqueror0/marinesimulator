import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Terminal, Code2, Cpu } from 'lucide-react';

interface LoadingScreenProps {
  onComplete: () => void;
}

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [phase, setPhase] = useState<'gemini' | 'eddev'>('gemini');
  const [progress, setProgress] = useState(0);

  // Keep a stable ref of onComplete so the main effect doesn't rerun on closures changes
  const onCompleteRef = React.useRef(onComplete);
  useEffect(() => {
    onCompleteRef.current = onComplete;
  }, [onComplete]);

  useEffect(() => {
    // Phase 1 lasts for 2 seconds, then switches to Phase 2
    const phaseTimer = setTimeout(() => {
      setPhase('eddev');
    }, 2000);

    // Total loading lasts for 6 seconds (2s Gemini + 4s EdDev), then signals complete
    const finishTimer = setTimeout(() => {
      onCompleteRef.current();
    }, 6000);

    // Continuous smooth progress indicator
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) return 100;
        return prev + (100 / 60); // 6 seconds (60 updates of 100ms)
      });
    }, 100);

    return () => {
      clearTimeout(phaseTimer);
      clearTimeout(finishTimer);
      clearInterval(interval);
    };
  }, []); // Empty array to guarantee it only runs on mount

  return (
    <div className="fixed inset-0 bg-slate-950 z-50 flex flex-col items-center justify-center overflow-hidden font-sans select-none">
      {/* Decorative Sci-Fi Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-35" />
      
      {/* Cyberpunk circular radar background */}
      <div className="absolute w-[500px] h-[500px] rounded-full border border-cyan-500/10 animate-spin-slow pointer-events-none opacity-20" />
      <div className="absolute w-[300px] h-[300px] rounded-full border border-dashed border-purple-500/15 animate-spin pointer-events-none opacity-20" />

      {/* Main Content Area */}
      <div className="relative z-10 w-full max-w-md px-6 text-center">
        <AnimatePresence mode="wait">
          {phase === 'gemini' ? (
            <motion.div
              key="gemini-phase"
              initial={{ opacity: 0, scale: 0.92, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 1.05, y: -20 }}
              transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col items-center gap-6"
            >
              {/* Google Gemini AI Spark Custom SVG */}
              <div className="relative">
                {/* Glowing Aura behind spark */}
                <div className="absolute -inset-4 bg-gradient-to-tr from-cyan-500 via-indigo-500 to-amber-500 rounded-full blur-2xl opacity-45 animate-pulse" />
                
                <motion.div
                  animate={{ 
                    rotate: [0, 8, -8, 0],
                    scale: [1, 1.05, 0.98, 1] 
                  }}
                  transition={{ 
                    duration: 4, 
                    repeat: Infinity, 
                    ease: "easeInOut" 
                  }}
                  className="relative w-28 h-28 flex items-center justify-center bg-slate-900/65 border border-slate-800 rounded-3xl backdrop-blur-sm shadow-[0_12px_30px_rgba(0,0,0,0.5)]"
                >
                  <svg viewBox="0 0 24 24" className="w-16 h-16" fill="url(#geminiGrad)">
                    <defs>
                      <linearGradient id="geminiGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#22d3ee" /> {/* Cyan */}
                        <stop offset="45%" stopColor="#4f46e5" /> {/* Indigo */}
                        <stop offset="100%" stopColor="#f59e0b" /> {/* Amber */}
                      </linearGradient>
                    </defs>
                    {/* The iconic Gemini Spark astroid shape */}
                    <path d="M12 2C12 7.523 7.523 12 2 12C7.523 12 12 16.477 12 22C12 16.477 16.477 12 22 12C16.477 12 12 7.523 12 2z" />
                  </svg>
                </motion.div>
                
                {/* Micro mini spark elements */}
                <span className="absolute -top-1 -right-1 text-cyan-400 animate-bounce">
                  <Sparkles className="w-4 h-4" />
                </span>
              </div>

              {/* Sophisticated Google Gemini Branding */}
              <div className="space-y-2 mt-2">
                <span className="text-[10px] font-mono tracking-[0.25em] text-cyan-400 font-bold uppercase">POWERING SHIP SMART INTELLIGENCE</span>
                <h2 className="text-3xl font-display font-extrabold text-white tracking-widest flex items-center justify-center gap-2">
                  Google <span className="bg-gradient-to-r from-cyan-400 via-indigo-400 to-amber-400 bg-clip-text text-transparent">Gemini</span>
                </h2>
                <p className="text-xs text-slate-400 font-mono">
                  Initializing Cloud Model Synapses...
                </p>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="eddev-phase"
              initial={{ opacity: 0, scale: 0.92, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 1.05, y: -20 }}
              transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col items-center gap-6"
            >
              {/* EdDev Tech Shield Monogram Logo */}
              <div className="relative">
                {/* Glowing neon shadow ring */}
                <div className="absolute -inset-4 bg-cyan-500/20 rounded-full blur-xl opacity-60 animate-pulse" />
                
                <motion.div
                  initial={{ rotateY: 180 }}
                  animate={{ rotateY: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="relative w-28 h-28 flex flex-col items-center justify-center bg-slate-900/80 border-2 border-cyan-500 rounded-3xl shadow-[0_0_30px_rgba(6,182,212,0.3)]"
                >
                  <Code2 className="w-10 h-10 text-cyan-400 drop-shadow-[0_0_8px_rgba(6,182,212,0.6)]" />
                  <span className="text-[10px] font-mono text-cyan-500 font-bold mt-1 tracking-widest">ED_DEV</span>
                  
                  {/* Digital interface framing */}
                  <div className="absolute inset-1.5 border border-dashed border-cyan-500/30 rounded-2xl pointer-events-none" />
                </motion.div>
                
                {/* Cyber indicators */}
                <div className="absolute -bottom-1 -right-1 bg-slate-950 border border-cyan-500 rounded px-1.5 py-0.5 text-[8px] font-mono text-cyan-400 font-bold tracking-widest uppercase">
                  v3.5
                </div>
              </div>

              {/* Elegant EdDev branding typography */}
              <div className="space-y-2 mt-2">
                <span className="text-[10px] font-mono tracking-[0.3em] text-slate-400 uppercase">ACADEMIC MULTI-TERMINAL SYSTEM</span>
                <h2 className="text-3xl font-display font-black text-white tracking-widest">
                  ED<span className="text-cyan-400">DEV</span> <span className="text-slate-500 font-normal">STUDIO</span>
                </h2>
                <p className="text-xs text-emerald-400 font-mono flex items-center justify-center gap-1.5">
                  <Terminal className="w-3.5 h-3.5" /> Synchronizing room terminals...
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Global loading status and tracking bars */}
        <div className="mt-12 space-y-3.5">
          {/* Cyber progress bar container */}
          <div className="relative h-2 w-full bg-slate-900 rounded-full overflow-hidden border border-slate-800">
            {/* Pulsating background accent */}
            <div className="absolute inset-0 bg-cyan-950/20" />
            
            {/* Loaded Bar with neat scrolling stripes */}
            <motion.div
              layout
              className="absolute left-0 top-0 bottom-0 bg-gradient-to-r from-indigo-500 via-cyan-500 to-emerald-400 rounded-full"
              style={{ width: `${progress}%` }}
              transition={{ duration: 0.1 }}
            />
          </div>

          <div className="flex items-center justify-between text-[10px] font-mono text-slate-500 tracking-wider">
            <span className="flex items-center gap-1">
              <Cpu className="w-3 h-3 text-cyan-500 animate-spin-slow" /> COMPILER STATUS: PROD
            </span>
            <span className="font-bold text-slate-300">
              {Math.min(100, Math.round(progress))}%
            </span>
          </div>
        </div>
      </div>

      {/* Footer system markers */}
      <div className="absolute bottom-6 flex items-center justify-between w-full max-w-7xl px-8 text-[9px] font-mono text-slate-600 tracking-widest uppercase pointer-events-none">
        <span>ESTABLISHED CONSOLE LINK</span>
        <span>Edgardo, Jr. B. Rojas</span>
      </div>
    </div>
  );
}
