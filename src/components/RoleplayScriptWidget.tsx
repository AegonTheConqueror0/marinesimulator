import React, { useState } from 'react';
import { 
  BookOpen, 
  X, 
  Send, 
  Volume2, 
  ChevronLeft, 
  ChevronRight,
  Headphones
} from 'lucide-react';

interface ScriptLine {
  id: string;
  speaker: string;
  roleType: 'bridge' | 'engine' | 'admin' | 'remote';
  targetReceiver: 'bridge' | 'engine' | 'admin' | 'remote' | 'all';
  action?: string;
  text: string;
  channel: string;
}

interface Scenario {
  id: string;
  numLabel: string;
  title: string;
  description: string;
  system: 'bridge' | 'engine' | 'admin' | 'all';
  lines: ScriptLine[];
}

interface RoleplayScriptWidgetProps {
  onTransmitMessage: (sender: 'bridge' | 'engine' | 'admin' | 'remote', receiver: 'bridge' | 'engine' | 'admin' | 'remote' | 'all', content: string) => void;
  activeStation: 'overview' | 'bridge' | 'engine' | 'admin' | 'remote';
}

const SCENARIOS: Scenario[] = [
  {
    id: 'scen-1',
    numLabel: 'Scene 1',
    title: '🖥️ Outage on the Bridge',
    description: 'Setting: The vessel is underway. Suddenly, an alarm sounds throughout the bridge. The ECDIS screen freezes.',
    system: 'bridge',
    lines: [
      {
        id: 'line-1-1',
        speaker: 'Third Officer (Jarlen Pejera)',
        roleType: 'bridge',
        targetReceiver: 'all',
        action: 'Observe primary ECDIS screen freeze.',
        text: 'Captain, the primary ECDIS has frozen. I\'m receiving a "Network Connection Lost" warning.',
        channel: 'Bridge Intercom'
      },
      {
        id: 'line-1-2',
        speaker: 'Second Officer (Armando Cemine)',
        roleType: 'bridge',
        targetReceiver: 'all',
        action: 'Verify backup ECDIS failure report.',
        text: 'The backup ECDIS is also showing a data communication failure. Radar overlay integration has been lost.',
        channel: 'Bridge Intercom'
      },
      {
        id: 'line-1-3',
        speaker: 'Third Officer (Paul Salvador)',
        roleType: 'bridge',
        targetReceiver: 'all',
        action: 'Observe target overlay workstation updates.',
        text: 'Captain, AIS and GPS targets are no longer updating on the workstation.',
        channel: 'Bridge Intercom'
      },
      {
        id: 'line-1-4',
        speaker: 'Chief Officer (Herbert Macal)',
        roleType: 'bridge',
        targetReceiver: 'all',
        action: 'Trace navigation network switch lines.',
        text: 'I\'m verifying the navigation network. Both ECDIS units appear disconnected from the ship\'s data backbone.',
        channel: 'Bridge Intercom'
      },
      {
        id: 'line-1-5',
        speaker: 'Master (Jerry Losdoc)',
        roleType: 'bridge',
        targetReceiver: 'all',
        action: 'Order contingency paper navigation and manual lookouts.',
        text: 'Understood. Maintain calm. Second Officer, switch immediately to manual navigation using paper charts and standalone GPS. Third Officer Salvador, monitor VHF communications and radar contacts.',
        channel: 'Bridge Command'
      },
      {
        id: 'line-1-6',
        speaker: 'Able Seaman (Carl Reyes)',
        roleType: 'bridge',
        targetReceiver: 'all',
        action: 'Maintain visual lookout from side wings.',
        text: 'Visual lookout established, Captain. No immediate traffic hazards observed.',
        channel: 'Bridge Intercom'
      },
      {
        id: 'line-1-7',
        speaker: 'Deck Cadet (Arthur Racosalem)',
        roleType: 'bridge',
        targetReceiver: 'all',
        action: 'Prepare paper chart plot.',
        text: 'Paper chart prepared, Captain. I\'ll begin plotting positions manually.',
        channel: 'Bridge Intercom'
      },
      {
        id: 'line-1-8',
        speaker: 'Captain (Jaysie Tan)',
        roleType: 'bridge',
        targetReceiver: 'engine',
        action: 'Command intercom communication to Engine room.',
        text: 'Chief Officer, contact the Engine Room immediately. Determine whether this is a bridge issue or a vessel-wide network failure.',
        channel: 'Bridge Command'
      }
    ]
  },
  {
    id: 'scen-2',
    numLabel: 'Scene 2',
    title: '⚙️ Engine Room Response',
    description: 'Setting: Simultaneously in the Engine Control Room. Alarm monitoring systems begin losing data.',
    system: 'engine',
    lines: [
      {
        id: 'line-2-1',
        speaker: 'Fourth Engineer (Princess Paba)',
        roleType: 'engine',
        targetReceiver: 'all',
        action: 'Examine diagnostic alarm consoles.',
        text: 'Second Engineer, we\'ve lost communication with the Alarm Monitoring System. Cylinder temperatures and fuel pressure readings are unavailable.',
        channel: 'Engine Control Rm'
      },
      {
        id: 'line-2-2',
        speaker: 'Third Engineer (Christian Basalo)',
        roleType: 'engine',
        targetReceiver: 'all',
        action: 'Inspect terminal link settings.',
        text: 'The machinery monitoring terminal is displaying "LAN Gateway Unreachable."',
        channel: 'Engine Control Rm'
      },
      {
        id: 'line-2-3',
        speaker: 'Third Engineer (Aga Dominic Caalaman)',
        roleType: 'engine',
        targetReceiver: 'all',
        action: 'Verify secondary machine control centers.',
        text: 'Auxiliary machinery monitoring stations have also lost communication.',
        channel: 'Engine Control Rm'
      },
      {
        id: 'line-2-4',
        speaker: 'Second Engineer (Joperth Guardaquivil)',
        roleType: 'engine',
        targetReceiver: 'all',
        action: 'Dispatch personnel to local manual gauges.',
        text: 'Switch monitoring to local gauges immediately. We need continuous machinery supervision.',
        channel: 'Engine Control Rm'
      },
      {
        id: 'line-2-5',
        speaker: 'Second Engineer (Kenley Deniega)',
        roleType: 'engine',
        targetReceiver: 'all',
        action: 'Check automation storage cabinets.',
        text: 'I\'ll inspect the automation control network and communication cabinet.',
        channel: 'Engine Control Rm'
      },
      {
        id: 'line-2-6',
        speaker: 'Engine Cadet (Darwin Intia)',
        roleType: 'engine',
        targetReceiver: 'all',
        action: 'Examine backbone rack connection power.',
        text: 'I\'ll assist with the inspection of the network rack and power supplies.',
        channel: 'Engine Control Rm'
      },
      {
        id: 'line-2-7',
        speaker: 'Chief Engineer (John Carlo Bacalso)',
        roleType: 'engine',
        targetReceiver: 'all',
        action: 'Direct network status checklist.',
        text: 'Good. Verify all network switches and communication links. Report any abnormalities immediately.',
        channel: 'Engine Control Rm'
      },
      {
        id: 'line-2-8',
        speaker: 'Chief Officer (Herbert Macal)',
        roleType: 'bridge',
        targetReceiver: 'engine',
        action: 'Initiate call to Engine Room on sound-powered phone.',
        text: 'Engine Room, this is the bridge. We have lost ECDIS connectivity and navigation network services. Are you experiencing similar failures?',
        channel: 'Engine Intercom'
      },
      {
        id: 'line-2-9',
        speaker: 'Chief Engineer (John Carlo Bacalso)',
        roleType: 'engine',
        targetReceiver: 'bridge',
        action: 'Confirm network power loss on backbone switches.',
        text: 'Affirmative. The Engine Room monitoring systems are also affected. This appears to be a ship-wide network infrastructure failure.',
        channel: 'Engine Intercom'
      }
    ]
  },
  {
    id: 'scen-3',
    numLabel: 'Scene 3',
    title: '🔧 Diagnostics & Troubleshooting',
    description: 'Setting: Teams trace the signal path to find the primary network switch has overheated.',
    system: 'all',
    lines: [
      {
        id: 'line-3-1',
        speaker: 'Master (Jerry Losdoc)',
        roleType: 'bridge',
        targetReceiver: 'all',
        action: 'Ensure steady hand on steering and visual observations.',
        text: 'Bridge team, continue manual navigation. Maintain situational awareness and report all contacts.',
        channel: 'Bridge Command'
      },
      {
        id: 'line-3-2',
        speaker: 'Third Officer (Paul Salvador)',
        roleType: 'bridge',
        targetReceiver: 'all',
        action: 'Track visual Echo targets on manual ARPA scope.',
        text: 'Radar remains operational in standalone mode. One vessel detected five nautical miles on the port bow.',
        channel: 'Bridge Command'
      },
      {
        id: 'line-3-3',
        speaker: 'Able Seaman (Carl Reyes)',
        roleType: 'bridge',
        targetReceiver: 'all',
        action: 'Verify coordinates with lookouts.',
        text: 'Visual confirmation of target vessel received.',
        channel: 'Bridge Command'
      },
      {
        id: 'line-3-4',
        speaker: 'Deck Cadet (Arthur Racosalem)',
        roleType: 'bridge',
        targetReceiver: 'all',
        action: 'Log positions in logbook manually.',
        text: 'Current position plotted and bridge log updated.',
        channel: 'Bridge Command'
      },
      {
        id: 'line-3-5',
        speaker: 'Captain (Jaysie Tan)',
        roleType: 'bridge',
        targetReceiver: 'all',
        action: 'Instruct watch team on steering course safety.',
        text: 'Very well. Maintain safe navigation procedures.',
        channel: 'Bridge Command'
      },
      {
        id: 'line-3-6',
        speaker: 'Second Engineer (Kenley Deniega)',
        roleType: 'engine',
        targetReceiver: 'all',
        action: 'Inspect router port backplanes.',
        text: 'Chief Engineer, the automation network is operational, but data traffic is not passing through the main backbone switch.',
        channel: 'Engine Control Rm'
      },
      {
        id: 'line-3-7',
        speaker: 'Engine Cadet (Darwin Intia)',
        roleType: 'engine',
        targetReceiver: 'all',
        action: 'Verify error indicators on local chassis rack lights.',
        text: 'I found a fault indicator on Network Switch No. 1. The cooling fan is not operating.',
        channel: 'Engine Control Rm'
      },
      {
        id: 'line-3-8',
        speaker: 'Fourth Engineer (Princess Paba)',
        roleType: 'engine',
        targetReceiver: 'all',
        action: 'Touch outer cabinet frame carefully.',
        text: 'The switch housing is extremely hot.',
        channel: 'Engine Control Rm'
      },
      {
        id: 'line-3-9',
        speaker: 'Third Engineer (Christian Basalo)',
        roleType: 'engine',
        targetReceiver: 'all',
        action: 'Analyze switch gateway configuration maps.',
        text: 'It appears the primary network switch has overheated and stopped processing network traffic.',
        channel: 'Engine Control Rm'
      },
      {
        id: 'line-3-10',
        speaker: 'Third Engineer (Aga Dominic Caalaman)',
        roleType: 'engine',
        targetReceiver: 'all',
        action: 'Verify network loop connections.',
        text: 'All affected systems trace back to this switch.',
        channel: 'Engine Control Rm'
      },
      {
        id: 'line-3-11',
        speaker: 'Chief Engineer (John Carlo Bacalso)',
        roleType: 'engine',
        targetReceiver: 'all',
        action: 'Direct redundant switch layout standby preparation.',
        text: 'Good diagnosis. Isolate the faulty switch. Prepare the redundant backup switch for service.',
        channel: 'Engine Command'
      },
      {
        id: 'line-3-12',
        speaker: 'Second Engineer (Joperth Guardaquivil)',
        roleType: 'engine',
        targetReceiver: 'all',
        action: 'Direct physical power down of circuit breaker module.',
        text: 'Fourth Engineer, secure power to the failed switch. Third Engineers, transfer network connections to the backup unit.',
        channel: 'Engine Command'
      },
      {
        id: 'line-3-13',
        speaker: 'Engine Cadet (Darwin Intia)',
        roleType: 'engine',
        targetReceiver: 'all',
        action: 'Move RJ45 Ethernet patch cables from primary to backup slots.',
        text: 'Backup switch connections completed and ready for energizing.',
        channel: 'Engine Control Rm'
      },
      {
        id: 'line-3-14',
        speaker: 'Second Engineer (Kenley Deniega)',
        roleType: 'engine',
        targetReceiver: 'all',
        action: 'Track connection routing handshake confirmation LEDs.',
        text: 'Communication links verified. Ready to restore network services.',
        channel: 'Engine Control Rm'
      },
      {
        id: 'line-3-15',
        speaker: 'Chief Engineer (John Carlo Bacalso)',
        roleType: 'engine',
        targetReceiver: 'all',
        action: 'Give permission to power on standby router equipment.',
        text: 'Proceed.',
        channel: 'Engine Command'
      },
      {
        id: 'line-3-16',
        speaker: 'Fourth Engineer (Princess Paba)',
        roleType: 'engine',
        targetReceiver: 'all',
        action: 'Flip backup power supply toggle switches.',
        text: 'Backup switch powered on. Link indicators are active.',
        channel: 'Engine Control Rm'
      }
    ]
  },
  {
    id: 'scen-4',
    numLabel: 'Scene 4',
    title: '✅ Restoration of Operations',
    description: 'Setting: Bridge systems suddenly refresh. Re-establishing secure synchronization.',
    system: 'all',
    lines: [
      {
        id: 'line-4-1',
        speaker: 'Third Officer (Jarlen Pejera)',
        roleType: 'bridge',
        targetReceiver: 'all',
        action: 'Observe online status indicators on main ECDIS terminal.',
        text: 'Captain, the ECDIS is responding again.',
        channel: 'Bridge Intercom'
      },
      {
        id: 'line-4-2',
        speaker: 'Second Officer (Armando Cemine)',
        roleType: 'bridge',
        targetReceiver: 'all',
        action: 'Check AIS targets list synchronicity.',
        text: 'GPS, AIS, and radar overlay services have been restored.',
        channel: 'Bridge Intercom'
      },
      {
        id: 'line-4-3',
        speaker: 'Chief Officer (Herbert Macal)',
        roleType: 'bridge',
        targetReceiver: 'all',
        action: 'Verify safety network telemetry channels.',
        text: 'All navigation data streams appear stable.',
        channel: 'Bridge Intercom'
      },
      {
        id: 'line-4-4',
        speaker: 'Captain (Jaysie Tan)',
        roleType: 'bridge',
        targetReceiver: 'all',
        action: 'Instruct squad to cross check status with machine hall.',
        text: 'Contact the Engine Room and verify restoration.',
        channel: 'Bridge Command'
      },
      {
        id: 'line-4-5',
        speaker: 'Chief Officer (Herbert Macal)',
        roleType: 'bridge',
        targetReceiver: 'engine',
        action: 'Initiate formal status check call via intercom.',
        text: 'Engine Room, this is the bridge. We have regained full navigation functionality.',
        channel: 'Engine Intercom'
      },
      {
        id: 'line-4-6',
        speaker: 'Chief Engineer (John Carlo Bacalso)',
        roleType: 'engine',
        targetReceiver: 'bridge',
        action: 'Explain component fault event review summary.',
        text: 'Confirmed. The primary network switch failed due to overheating. Services have been successfully transferred to the redundant backup switch.',
        channel: 'Engine Intercom'
      },
      {
        id: 'line-4-7',
        speaker: 'Second Engineer (Joperth Guardaquivil)',
        roleType: 'engine',
        targetReceiver: 'all',
        action: 'Confirm AMS terminal values are updateable.',
        text: 'All machinery monitoring systems are functioning normally.',
        channel: 'Engine Control Rm'
      },
      {
        id: 'line-4-8',
        speaker: 'Master (Jerry Losdoc)',
        roleType: 'bridge',
        targetReceiver: 'all',
        action: 'Direct watch team to monitor network link performance logs.',
        text: 'Excellent work. Continue monitoring system performance and maintain heightened awareness for any recurring faults.',
        channel: 'Bridge Command'
      },
      {
        id: 'line-4-9',
        speaker: 'Deck Cadet (Arthur Racosalem)',
        roleType: 'bridge',
        targetReceiver: 'all',
        action: 'Sign the chronometer and paper charts journal list entries.',
        text: 'Bridge log updated with incident details and corrective actions.',
        channel: 'Bridge Command'
      },
      {
        id: 'line-4-10',
        speaker: 'Able Seaman (Carl Reyes)',
        roleType: 'bridge',
        targetReceiver: 'all',
        action: 'Maintain watch stand over forward horizon bounds.',
        text: 'Visual watch maintained, Captain.',
        channel: 'Bridge Command'
      },
      {
        id: 'line-4-11',
        speaker: 'Captain (Jaysie Tan)',
        roleType: 'bridge',
        targetReceiver: 'all',
        action: 'Call end to manual drift watch protocol.',
        text: 'Good teamwork by both departments. Resume normal operations while maintaining system monitoring.',
        channel: 'Bridge Command'
      }
    ]
  }
];

export default function RoleplayScriptWidget({ onTransmitMessage, activeStation }: RoleplayScriptWidgetProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedScenarioId, setSelectedScenarioId] = useState<string>('scen-1');
  const [currentLineIndex, setCurrentLineIndex] = useState<number>(0);
  const [txConfirmed, setTxConfirmed] = useState<boolean>(false);

  // Pick current scenario
  const currentScenario = SCENARIOS.find(s => s.id === selectedScenarioId) || SCENARIOS[0];
  const currentLine = currentScenario.lines[currentLineIndex] || currentScenario.lines[0];

  // Safely change scenario
  const handleScenarioChange = (id: string) => {
    setSelectedScenarioId(id);
    setCurrentLineIndex(0);
  };

  // Turn off speech on close
  const togglePanel = () => {
    setIsOpen(!isOpen);
  };

  // Nav lines
  const handleNext = () => {
    if (currentLineIndex < currentScenario.lines.length - 1) {
      setCurrentLineIndex(prev => prev + 1);
    }
  };

  const handleBack = () => {
    if (currentLineIndex > 0) {
      setCurrentLineIndex(prev => prev - 1);
    }
  };

  // Play synthesized walkie-talkie Radio Squelch & beeps when transmitting
  const playRadioSound = () => {
    try {
      const AudioContextClass = window.AudioContext || (window as any).webkitAudioContext;
      if (!AudioContextClass) return;
      
      const ctx = new AudioContextClass();
      
      // 1. Walkie-talkie key down static noise squelch
      const bufferSize = ctx.sampleRate * 0.12; 
      const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
      const data = buffer.getChannelData(0);
      for (let i = 0; i < bufferSize; i++) {
        data[i] = Math.random() * 2 - 1;
      }
      
      const noise = ctx.createBufferSource();
      noise.buffer = buffer;
      
      // Filter sound like a band-limited marine VHF channel (highpass/lowpass)
      const bandpass = ctx.createBiquadFilter();
      bandpass.type = 'bandpass';
      bandpass.frequency.value = 1400; 
      bandpass.Q.value = 1.2;
      
      const gainNode = ctx.createGain();
      gainNode.gain.setValueAtTime(0.06, ctx.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.12);
      
      noise.connect(bandpass);
      bandpass.connect(gainNode);
      gainNode.connect(ctx.destination);
      
      // 2. Clear radio chirp alert beep
      const osc = ctx.createOscillator();
      const oscGain = ctx.createGain();
      
      osc.type = 'sine';
      osc.frequency.setValueAtTime(950, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(500, ctx.currentTime + 0.08);
      
      oscGain.gain.setValueAtTime(0.12, ctx.currentTime);
      oscGain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.08);
      
      osc.connect(oscGain);
      oscGain.connect(ctx.destination);
      
      noise.start();
      osc.start();
      
      osc.stop(ctx.currentTime + 0.15);
    } catch (e) {
      console.warn("Audio Context blocked or failed", e);
    }
  };

  // Transmit command directly to global UHF communication grid
  const handleTransmit = () => {
    playRadioSound();
    onTransmitMessage(currentLine.roleType, currentLine.targetReceiver, currentLine.text);
    setTxConfirmed(true);
    setTimeout(() => {
      setTxConfirmed(false);
    }, 1800);
  };

  return (
    <div className="fixed bottom-5 right-5 z-[10000]" id="roleplay-script-widget">
      
      {/* Compact support-like button */}
      <button
        type="button"
        onClick={togglePanel}
        className={`w-12 h-12 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 active:scale-95 focus:outline-none cursor-pointer border flex items-center justify-center relative ${
          isOpen 
            ? 'bg-slate-800 text-rose-400 border-slate-700' 
            : 'bg-cyan-600 hover:bg-cyan-500 text-white border-cyan-500'
        }`}
        title={isOpen ? 'Close Roleplay Script' : 'Open Cadet Roleplay Script'}
      >
        <BookOpen className="w-5 h-5 text-white" />
        <span className="absolute -top-0.5 -right-0.5 flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
        </span>
      </button>

      {/* simplified, highly-compact dialogue companion window */}
      {isOpen && (
        <div 
          className="absolute bottom-14 right-0 w-[350px] sm:w-[380px] bg-slate-900 border border-slate-700 rounded-xl shadow-2xl flex flex-col overflow-hidden"
          id="script-compact-window"
        >
          {/* Header */}
          <div className="bg-slate-950 px-3.5 py-3 border-b border-slate-800 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Headphones className="w-4 h-4 text-cyan-400" />
              <div className="text-left">
                <h4 className="text-xs font-bold text-white uppercase tracking-wider">Roleplay Assistant</h4>
                <p className="text-[10px] text-slate-400 leading-none">Practice VHF Radio calls & Checklists</p>
              </div>
            </div>
            <button 
              type="button"
              onClick={togglePanel}
              className="text-slate-400 hover:text-white p-1 rounded-md hover:bg-slate-800 transition-colors cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Selector dropdown for Scenes */}
          <div className="p-3 bg-slate-900 border-b border-slate-800 flex flex-col gap-1.5 text-left">
            <span className="text-[10px] font-mono font-black text-slate-400 uppercase tracking-widest">Select Scenario</span>
            <select
              value={selectedScenarioId}
              onChange={(e) => handleScenarioChange(e.target.value)}
              className="w-full bg-slate-950 border border-slate-750 rounded-lg px-2.5 py-1.5 text-xs text-white focus:outline-none focus:ring-1 focus:ring-cyan-500 font-sans font-bold cursor-pointer"
            >
              {SCENARIOS.map(s => (
                <option key={s.id} value={s.id} className="bg-slate-950">
                  {s.numLabel} - {s.title}
                </option>
              ))}
            </select>
          </div>

          {/* Current Line Segment viewer with 100% Legibility and high contrast */}
          <div className="p-4 bg-slate-950 flex-1 space-y-3">
            
            {/* Conversation index progress */}
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-semibold text-slate-400 tracking-wide">Active Script Dialogue:</span>
              <span className="text-[10px] font-mono text-cyan-400 font-bold bg-cyan-950 border border-cyan-800/60 px-2 py-0.5 rounded">
                Dialogue {currentLineIndex + 1} of {currentScenario.lines.length}
              </span>
            </div>

            {/* Speaker & Action Information Banner */}
            <div className="bg-slate-900 border border-slate-800 rounded-lg p-3 text-left space-y-1.5">
              <div className="flex items-center justify-between gap-2 flex-wrap">
                <span className="text-xs font-black text-cyan-400 tracking-wide">
                  {currentLine.speaker}
                </span>
                {currentLine.channel && (
                  <span className="text-[9px] font-mono text-slate-400 font-bold bg-slate-800 border border-slate-750 px-1.5 py-0.5 rounded uppercase shrink-0">
                    {currentLine.channel}
                  </span>
                )}
              </div>
              {currentLine.action && (
                <p className="text-[11px] text-orange-300/90 italic font-medium leading-normal">
                  Action: {currentLine.action}
                </p>
              )}
            </div>

            {/* Spoken sentence bubble (Huge text, slate background, extremely readable) */}
            <div className="p-4 bg-slate-900 border border-slate-800 rounded-lg shadow-inner relative min-h-[90px] flex items-center">
              <p className="text-white text-[13px] leading-relaxed font-sans font-medium select-all text-left w-full">
                "{currentLine.text}"
              </p>

              {txConfirmed && (
                <p className="absolute inset-0 flex items-center justify-center bg-slate-950/95 text-emerald-400 text-xs font-mono font-bold rounded-lg animate-fade-in">
                  📡 Transmitted to VHF!
                </p>
              )}
            </div>

          </div>

          {/* Bottom navigation buttons (Next/Back step workflow) */}
          <div className="bg-slate-950 px-4 py-4 border-t border-slate-800 flex flex-col gap-3">
            
            {/* Navigation back / next */}
            <div className="grid grid-cols-2 gap-3 w-full">
              <button
                type="button"
                onClick={handleBack}
                disabled={currentLineIndex === 0}
                className="flex items-center justify-center gap-2 py-3 rounded-xl bg-slate-900 border border-slate-750 text-white font-bold text-xs uppercase hover:bg-slate-800 disabled:opacity-30 disabled:hover:bg-slate-900 shadow transition cursor-pointer select-none active:scale-95"
                title="Go to previous dialogue line"
              >
                <ChevronLeft className="w-4 h-4 text-cyan-400" />
                <span>BACK</span>
              </button>
              
              <button
                type="button"
                onClick={handleNext}
                disabled={currentLineIndex === currentScenario.lines.length - 1}
                className="flex items-center justify-center gap-2 py-3 rounded-xl bg-slate-900 border border-slate-750 text-white font-bold text-xs uppercase hover:bg-slate-800 disabled:opacity-30 disabled:hover:bg-slate-900 shadow transition cursor-pointer select-none active:scale-95"
                title="Go to next dialogue line"
              >
                <span>NEXT</span>
                <ChevronRight className="w-4 h-4 text-cyan-400" />
              </button>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}
