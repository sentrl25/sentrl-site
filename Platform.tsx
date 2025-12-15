import React from 'react';
import { Section } from '../components/Section';
import { Button } from '../components/Button';
import { Layers, GitMerge, Server, Cpu, Network, Shield } from 'lucide-react';

export const Platform: React.FC = () => {
  return (
    <>
      <Section className="pt-32 md:pt-40 pb-16 relative overflow-hidden bg-brand-base">
        {/* Background Schematic Overlay */}
        <div className="absolute inset-0 bg-hex-mesh opacity-20" />
        
        {/* Blueprint Measurement Grid */}
        <div className="absolute inset-0 pointer-events-none opacity-20">
             {/* Corner brackets - Magenta Accent */}
             <div className="absolute top-24 left-6 w-16 h-16 border-l border-t border-brand-magenta/40"></div>
             <div className="absolute top-24 right-6 w-16 h-16 border-r border-t border-brand-cyan/30"></div>
             <div className="absolute bottom-6 left-6 w-16 h-16 border-l border-b border-brand-cyan/30"></div>
             
             {/* Measurement Lines */}
             <div className="absolute top-32 left-0 w-full h-px bg-brand-steel/10"></div>
             <div className="absolute bottom-32 left-0 w-full h-px bg-brand-steel/10"></div>
             <div className="absolute top-0 left-12 h-full w-px bg-brand-steel/10"></div>
             <div className="absolute top-0 right-12 h-full w-px bg-brand-steel/10"></div>
        </div>
        
        {/* Off-center Schematic Ring */}
        <div className="absolute -top-[20%] -right-[10%] w-[70vw] h-[70vw] opacity-10 pointer-events-none">
            <div className="absolute inset-0 rounded-full border border-brand-cyan/20 border-dashed animate-spin-slower"></div>
            <div className="absolute inset-[20%] rounded-full border border-brand-steel/30 animate-spin-reverse-slower"></div>
        </div>
        
        <div className="max-w-4xl relative z-10">
          <div className="flex items-center gap-3 mb-6">
             <div className="h-px w-8 bg-brand-magenta"></div>
             <span className="font-mono text-xs text-brand-magenta uppercase tracking-widest">System Architecture</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-brand-silver mb-8">
            The SENTRL <span className="text-brand-cyan text-glow-cyan">Platform</span>
          </h1>
          <p className="text-xl text-brand-muted leading-relaxed border-l-2 border-brand-cyan pl-6 bg-gradient-to-r from-brand-cyan/5 to-transparent py-4">
            SENTRL is a systems-engineering and automation platform designed to orchestrate complex digital and physical infrastructure.
          </p>
        </div>
      </Section>

      <Section dark className="relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 relative z-10">
          <div>
            <h2 className="text-3xl font-bold text-brand-silver mb-8 flex items-center gap-3">
              <span className="w-2 h-8 bg-brand-cyan"></span>
              Engineered for Reality
            </h2>
            <div className="prose prose-invert text-brand-muted text-lg">
              <p className="mb-6">
                Rather than replacing existing tools, SENTRL connects them — structuring data, workflows, and decisions into a disciplined, resilient operating framework.
              </p>
              <p className="mb-6">
                Our development team builds SENTRL for environments where uptime, accuracy, and accountability are non-negotiable.
              </p>
            </div>
            
            <div className="mt-12 space-y-6">
                <div className="flex gap-6 items-start group">
                    <div className="p-4 bg-brand-base border border-brand-steel/20 h-fit group-hover:border-brand-magenta group-hover:shadow-magenta-glow transition-all">
                        <Layers className="w-8 h-8 text-brand-cyan group-hover:text-brand-magenta transition-colors" />
                    </div>
                    <div>
                        <h4 className="text-brand-silver font-bold mb-2 text-xl group-hover:text-brand-magenta transition-colors">Unified Layer</h4>
                        <p className="text-sm text-brand-muted leading-relaxed">Single operational view across disparate systems. Aggregating telemetry from IoT, Legacy SCADA, and Modern Cloud APIs.</p>
                    </div>
                </div>
                <div className="flex gap-6 items-start group">
                    <div className="p-4 bg-brand-base border border-brand-steel/20 h-fit group-hover:border-brand-cyan group-hover:shadow-cyan-glow transition-all">
                        <GitMerge className="w-8 h-8 text-brand-cyan" />
                    </div>
                    <div>
                        <h4 className="text-brand-silver font-bold mb-2 text-xl group-hover:text-brand-cyan transition-colors">Workflow Architecture</h4>
                        <p className="text-sm text-brand-muted leading-relaxed">Structured decision making pathways that reduce human error and enforce compliance automatically.</p>
                    </div>
                </div>
            </div>
          </div>
          
          <div className="bg-brand-base border border-brand-steel/20 p-8 md:p-12 relative overflow-hidden group hover:border-brand-cyan/30 transition-colors">
             {/* Tech Background Graphic */}
             <div className="absolute inset-0 bg-grid-tech opacity-20"></div>
             <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity duration-500">
                <Server className="w-64 h-64 text-brand-techBlue animate-pulse-slow" />
             </div>
             
             <h3 className="text-2xl font-bold text-brand-silver mb-8 relative z-10 border-b border-brand-steel/20 pb-4">
               Core Differentials
             </h3>
             <ul className="space-y-6 relative z-10">
                {[
                    {text: "Systems-first architecture", icon: Network},
                    {text: "Designed for scale, load, and failure modes", icon: Cpu},
                    {text: "Built for real-world operational constraints", icon: Layers},
                    {text: "Sovereign, Australia-based data handling", icon: Shield},
                ].map((item, i) => (
                    <li key={i} className="flex items-center gap-4 text-brand-muted group/li">
                        <div className="p-2 bg-brand-surface rounded border border-brand-steel/10 group-hover/li:border-brand-magenta/50 transition-colors">
                           <item.icon className="w-4 h-4 text-brand-cyan" />
                        </div>
                        <span className="group-hover/li:text-brand-silver transition-colors">{item.text}</span>
                    </li>
                ))}
             </ul>
             <div className="mt-12 pt-8 border-t border-brand-steel/10 relative z-10">
                 <p className="text-brand-silver font-mono text-sm bg-brand-surface/50 p-4 border-l-2 border-brand-magenta/30">
                     "Reliability, clarity, and long-term operability take precedence over short-term polish."
                 </p>
             </div>
          </div>
        </div>
      </Section>

      <Section className="bg-gradient-to-b from-brand-base to-brand-surface">
        <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-brand-silver mb-8">Ready to structure your operations?</h2>
            <a href="mailto:gday@sentrl.com.au">
                <Button withArrow className="text-lg px-10">Contact Engineering</Button>
            </a>
        </div>
      </Section>
    </>
  );
};