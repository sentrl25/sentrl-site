import React from 'react';
import { Section } from '../components/Section';
import { AlertTriangle, TrendingDown, Clock, ArrowRight, ShieldCheck, Activity, Database } from 'lucide-react';

const DiagnosticCard: React.FC<{ 
  title: string; 
  problem: string; 
  solution: string; 
  icon: any 
}> = ({ title, problem, solution, icon: Icon }) => (
  <div className="relative group overflow-hidden border border-brand-steel/20 bg-brand-base transition-all duration-300 hover:border-brand-cyan/50">
    <div className="absolute top-0 left-0 w-1 h-full bg-brand-steel/20 group-hover:bg-brand-cyan transition-colors"></div>
    <div className="p-8">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
            <div className="p-2 bg-brand-surface border border-brand-steel/20 group-hover:border-brand-cyan/50">
                <Icon className="w-6 h-6 text-brand-muted group-hover:text-brand-cyan transition-colors" />
            </div>
            <h3 className="font-bold text-brand-silver text-lg tracking-wide">{title}</h3>
        </div>
        <div className="text-xs font-mono text-brand-muted uppercase tracking-widest opacity-50 group-hover:opacity-100 group-hover:text-brand-cyan">
            Diagnostic
        </div>
      </div>

      <div className="space-y-6">
        {/* Magenta for Problem/Inefficiency */}
        <div className="relative pl-6 border-l border-brand-magenta/30">
            <div className="absolute -left-[5px] top-0 w-2.5 h-2.5 rounded-full bg-brand-magenta/20 border border-brand-magenta/50"></div>
            <h4 className="text-xs font-mono text-brand-magenta uppercase mb-1">Detected Inefficiency</h4>
            <p className="text-sm text-brand-muted leading-relaxed">{problem}</p>
        </div>

        <div className="relative pl-6 border-l border-brand-cyan/30">
             <div className="absolute -left-[5px] top-0 w-2.5 h-2.5 rounded-full bg-brand-cyan/20 border border-brand-cyan/50 shadow-[0_0_10px_rgba(63,230,255,0.3)]"></div>
            <h4 className="text-xs font-mono text-brand-cyan uppercase mb-1">SENTRL Optimization</h4>
            <p className="text-sm text-brand-silver leading-relaxed">{solution}</p>
        </div>
      </div>
    </div>
  </div>
);

const ImpactBar: React.FC<{ label: string; current: number; target: number; unit: string }> = ({ label, current, target, unit }) => (
    <div className="mb-8">
        <div className="flex justify-between text-xs font-mono uppercase tracking-wider mb-2">
            <span className="text-brand-silver">{label}</span>
            <span className="text-brand-cyan">{target}{unit} (Projected)</span>
        </div>
        <div className="h-2 w-full bg-brand-surface border border-brand-steel/20 rounded-full overflow-hidden relative">
            {/* Legacy marker in Magenta to signify load/heat/inefficiency */}
            <div 
                className="absolute top-0 left-0 h-full bg-brand-magenta/60" 
                style={{ width: `${current}%` }} 
            ></div>
            {/* Target marker in Cyan */}
             <div 
                className="absolute top-0 left-0 h-full bg-brand-cyan shadow-[0_0_10px_#3FE6FF]" 
                style={{ width: `${target}%` }} 
            ></div>
        </div>
        <div className="flex justify-between text-[10px] text-brand-muted mt-1 font-mono">
            <span>Legacy System Load: <span className="text-brand-magenta">{current}{unit}</span></span>
            <span className="text-brand-cyan">Optimization Delta: {Math.abs(current - target)}{unit}</span>
        </div>
    </div>
);

export const Solutions: React.FC = () => {
  return (
    <>
      <Section className="pt-32 md:pt-40 pb-16 bg-hex-mesh">
         <div className="inline-block px-3 py-1 mb-6 border border-brand-techBlue/30 text-xs font-mono text-brand-techBlue uppercase tracking-widest bg-brand-techBlue/5 backdrop-blur-sm">
            <span className="w-2 h-2 bg-brand-techBlue inline-block mr-2 rounded-full animate-pulse"></span>
            Operational Analysis
         </div>
         <h1 className="text-5xl md:text-6xl font-bold text-brand-silver mb-8">
            Solving <span className="text-brand-magenta text-glow-magenta">Fragmentation</span>
         </h1>
         <p className="text-xl text-brand-muted max-w-2xl leading-relaxed">
            Most organisations don’t suffer from a lack of software — they suffer from a lack of structure.
         </p>
      </Section>

      {/* Visual Diagnostic Grid */}
      <Section dark className="border-t border-brand-steel/10 relative">
        <div className="absolute top-0 right-0 p-4 text-xs font-mono text-brand-steel/40 uppercase tracking-widest">
            System Diagnostics: Active
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <DiagnosticCard 
                title="Siloed Systems"
                icon={Database}
                problem="Critical systems operate in isolation, creating data blind spots and version conflicts."
                solution="Unified operational layer aggregating disparate data sources into a single source of truth."
            />
            <DiagnosticCard 
                title="Manual Friction"
                icon={TrendingDown}
                problem="Manual processes slow execution and introduce human error at critical transfer points."
                solution="Automated workflow architecture enforcing consistent logic and removing manual drag."
            />
            <DiagnosticCard 
                title="Data Latency"
                icon={Clock}
                problem="Decisions are delayed by incomplete or slow-moving data, increasing risk exposure."
                solution="Real-time telemetry and edge-computed decision support for <10ms response times."
            />
        </div>
      </Section>

      {/* Impact Dashboard */}
      <Section className="bg-brand-deepBlue/50 border-y border-brand-steel/10 relative overflow-hidden">
        {/* Decorative Grid */}
        <div className="absolute inset-0 bg-grid-tech opacity-10 pointer-events-none"></div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
            <div>
                <h2 className="text-3xl font-bold text-brand-silver mb-6">Impact Analysis</h2>
                <p className="text-brand-muted mb-8 leading-relaxed">
                    Inefficiency quietly erodes margins. SENTRL converts operational efficiency into tangible cost reduction without sacrificing control.
                </p>
                
                <div className="bg-brand-base border border-brand-steel/20 p-8 shadow-2xl">
                    <div className="flex items-center justify-between mb-8 border-b border-brand-steel/10 pb-4">
                        <span className="font-mono text-sm text-brand-silver uppercase tracking-widest">Performance Telemetry</span>
                        <Activity className="w-4 h-4 text-brand-magenta animate-pulse" />
                    </div>
                    
                    <ImpactBar label="Admin Overhead" current={85} target={35} unit="%" />
                    <ImpactBar label="Decision Latency" current={90} target={10} unit="ms" />
                    <ImpactBar label="Operational Risk" current={60} target={15} unit="pts" />
                    
                    <div className="mt-8 pt-6 border-t border-brand-steel/10 flex items-center gap-4">
                        <ShieldCheck className="w-5 h-5 text-brand-cyan" />
                        <span className="text-sm text-brand-silver">Verified Sovereign Data Handling</span>
                    </div>
                </div>
            </div>

            <div className="relative">
                 {/* Decorative HUD Elements */}
                 <div className="absolute -top-10 -right-10 w-32 h-32 border-r border-t border-brand-magenta/20 rounded-tr-3xl"></div>
                 <div className="absolute -bottom-10 -left-10 w-32 h-32 border-l border-b border-brand-cyan/20 rounded-bl-3xl"></div>

                 <div className="space-y-6">
                    <div className="bg-brand-surface border-l-2 border-brand-cyan p-6 hover:bg-brand-surface/80 transition-colors cursor-default">
                        <h3 className="text-brand-silver font-bold text-lg mb-2">Measurable Efficiency</h3>
                        <p className="text-sm text-brand-muted">
                            Reduced administrative labour, fewer errors, and shorter decision cycles translate directly to the bottom line.
                        </p>
                    </div>
                    
                    <div className="bg-brand-surface border-l-2 border-brand-magenta p-6 hover:bg-brand-surface/80 transition-colors cursor-default">
                        <h3 className="text-brand-silver font-bold text-lg mb-2">Resilient Architecture</h3>
                        <p className="text-sm text-brand-muted">
                            Lower operational risk and unpredictable expenditure through engineered reliability.
                        </p>
                    </div>
                 </div>

                 <div className="mt-8 text-center lg:text-left">
                     <p className="font-mono text-xs text-brand-cyan uppercase tracking-[0.2em] mb-4">Ready to optimize?</p>
                     <a href="mailto:gday@sentrl.com.au" className="inline-flex items-center text-brand-silver hover:text-brand-cyan transition-colors group font-bold">
                        Initiate Assessment <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-2 transition-transform" />
                     </a>
                 </div>
            </div>
        </div>
      </Section>
    </>
  );
};