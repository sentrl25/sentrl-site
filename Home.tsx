import React from 'react';
import { Section } from '../components/Section';
import { Button } from '../components/Button';
import { NavLink } from 'react-router-dom';
import { Terminal, ShieldCheck, Activity, Cpu, Zap, Database, BarChart3, Lock } from 'lucide-react';

const MetricCard: React.FC<{ label: string; value: string; detail: string; accent?: 'cyan' | 'magenta' }> = ({ label, value, detail, accent = 'cyan' }) => (
  <div className={`relative p-6 bg-brand-surface/50 border border-brand-steel/20 group hover:border-brand-${accent}/50 hover:bg-brand-surface/80 transition-all duration-300`}>
    <div className="absolute top-0 right-0 p-2 opacity-50">
      <div className={`w-1.5 h-1.5 bg-brand-${accent} rounded-full animate-pulse`}></div>
    </div>
    <div className="tech-bracket tech-bracket-tl"></div>
    <div className="tech-bracket tech-bracket-br"></div>
    
    <div className="font-mono text-xs text-brand-techBlue uppercase tracking-widest mb-2">{label}</div>
    <div className={`text-3xl md:text-4xl font-bold text-brand-silver mb-2 group-hover:text-brand-${accent} group-hover:text-glow-${accent} transition-colors`}>{value}</div>
    <div className="text-xs text-brand-muted border-t border-brand-steel/10 pt-2 mt-2">{detail}</div>
  </div>
);

export const Home: React.FC = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden bg-brand-base">
        {/* Layer 0: Deep Background Gradient */}
        <div className="absolute inset-0 bg-radial-gradient from-brand-deepBlue to-brand-base opacity-80" />

        {/* Layer 1: Hex Pattern Mesh */}
        <div className="absolute inset-0 bg-hex-mesh opacity-30" />
        
        {/* Layer 2: Rotating Cyber-Rings (New Futuristic Element) */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140vmax] h-[140vmax] pointer-events-none opacity-20">
            {/* Outer Ring */}
            <div className="absolute inset-0 rounded-full border border-brand-steel/20 border-dashed animate-spin-slower" />
            {/* Middle Ring */}
            <div className="absolute inset-[15%] rounded-full border border-brand-cyan/10 animate-spin-reverse-slower" />
            {/* Magenta Accent Ring */}
            <div className="absolute inset-[28%] rounded-full border border-brand-magenta/5 border-dotted animate-spin-slow" />
            {/* Inner Hex-Glow */}
            <div className="absolute inset-[30%] bg-gradient-radial from-brand-cyan/5 to-transparent blur-3xl" />
        </div>

        {/* Layer 3: Tech Grid Overlay with Mask */}
        <div className="absolute inset-0 pointer-events-none bg-grid-tech opacity-40 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]"></div>

        {/* Layer 4: Perspective Grid Floor (New Depth Element) */}
        <div className="absolute bottom-0 left-0 right-0 h-[45vh] overflow-hidden pointer-events-none opacity-20">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#1E7FBF_1px,transparent_1px),linear-gradient(to_bottom,#1E7FBF_1px,transparent_1px)] bg-[size:40px_40px] [transform:perspective(1000px)_rotateX(60deg)] origin-bottom" />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-base via-brand-base/50 to-transparent" />
        </div>

        {/* Layer 5: Floating Telemetry Particles */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <div className="absolute top-[20%] left-[10%] w-2 h-2 border border-brand-cyan/30 opacity-50 animate-pulse-slow"></div>
            <div className="absolute top-[15%] right-[20%] text-[10px] font-mono text-brand-cyan/20 writing-vertical-rl tracking-widest uppercase">sys_opt_09</div>
            
            {/* Magenta Accent Data */}
            <div className="absolute bottom-[40%] right-[15%] text-[10px] font-mono text-brand-magenta/30 uppercase tracking-widest">crit_load_stable</div>
            
            <div className="absolute bottom-[30%] left-[5%] text-[10px] font-mono text-brand-steel/20 uppercase tracking-widest">grid_lock_active</div>
            <div className="absolute top-1/3 right-[10%] w-1 h-1 bg-brand-cyan rounded-full animate-ping opacity-20" style={{ animationDuration: '4s' }}></div>
            
            {/* Magenta Ping */}
            <div className="absolute bottom-1/4 left-1/4 w-1.5 h-1.5 bg-brand-magenta rounded-full animate-ping opacity-20" style={{ animationDuration: '5s', animationDelay: '1.5s' }}></div>
        </div>
        
        {/* Layer 6: Top/Bottom Fade */}
        <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-brand-base to-transparent pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-brand-base to-transparent pointer-events-none"></div>

        {/* Ambient Hero Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-cyan/5 rounded-full blur-[120px] pointer-events-none animate-pulse-slow" />
        
        <div className="max-w-6xl mx-auto text-center relative z-10 pt-20">
          {/* Status HUD */}
          <div className="flex justify-center mb-10">
            <div className="inline-flex items-center gap-4 border border-brand-cyan/20 bg-brand-deepBlue/80 backdrop-blur-sm px-6 py-2 rounded-sm shadow-cyan-glow">
               <div className="flex items-center gap-2 border-r border-brand-steel/30 pr-4">
                  <span className="w-2 h-2 bg-brand-cyan rounded-full animate-pulse shadow-[0_0_8px_#3FE6FF]" />
                  <span className="text-xs font-mono text-brand-cyan tracking-widest uppercase">System Operational</span>
               </div>
               <div className="text-xs font-mono text-brand-muted">
                  V.3.0.1 <span className="text-brand-steel mx-2">|</span> <span className="text-brand-magenta/80">SECURE LAYER</span>
               </div>
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-brand-silver mb-8 leading-[0.9]">
            Automate. <br/>
            Operate. <br/>
            <span className="relative inline-block">
              {/* Updated Gradient to include Magenta */}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan via-brand-techBlue to-brand-magenta text-glow-cyan">Dominate.</span>
              {/* Decorative underline */}
              <svg className="absolute -bottom-2 left-0 w-full h-2" viewBox="0 0 100 10" preserveAspectRatio="none">
                <path d="M0 5 H100" stroke="#FF2F92" strokeWidth="1" strokeDasharray="4 4" className="opacity-50" />
              </svg>
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-brand-muted max-w-2xl mx-auto mb-12 leading-relaxed border-l-2 border-brand-cyan/30 pl-6 text-left md:text-center md:border-l-0 md:pl-0">
            SENTRL engineers intelligent infrastructure that allows complex operations to run faster, cleaner, and with absolute control.
          </p>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <a href="mailto:gday@sentrl.com.au">
                <Button withArrow variant="primary" className="w-full md:w-auto">Initiate Operational Assessment</Button>
            </a>
            <NavLink to="/platform">
                <Button variant="secondary" className="w-full md:w-auto">Explore Platform</Button>
            </NavLink>
          </div>

          {/* Scrolling Ticker (Visual flair) */}
          <div className="mt-20 border-t border-brand-steel/20 pt-6 flex justify-between text-xs font-mono text-brand-steel uppercase tracking-widest opacity-60 overflow-hidden">
            <div className="flex gap-12 animate-scan whitespace-nowrap">
              <span>System Integrity: 100%</span>
              <span>Encryption: AES-256</span>
              <span className="text-brand-magenta">Threat Level: 0</span>
              <span>Latency: &lt;5ms</span>
              <span>Nodes Active: 40,392</span>
              <span>Region: AP-SOUTHEAST-2</span>
            </div>
          </div>
        </div>
      </section>

      {/* Efficiency Metrics Section (New) */}
      <Section dark className="relative border-y border-brand-steel/10 bg-brand-surface">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-brand-cyan/50 to-transparent"></div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative z-10 -mt-32 md:mt-0">
           <MetricCard 
             label="Admin Reduction" 
             value="34%" 
             detail="Average decrease in manual overhead." 
           />
           <MetricCard 
             label="System Uptime" 
             value="99.99%" 
             detail="Engineered for critical continuity." 
           />
           <MetricCard 
             label="Decision Latency" 
             value="< 10ms" 
             detail="Real-time data processing speeds." 
             accent="magenta"
           />
           <MetricCard 
             label="Cost Efficiency" 
             value="3.5x" 
             detail="ROI multiplier within 18 months." 
           />
        </div>

        <div className="mt-24 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
             <div className="flex items-center gap-4 mb-6">
               <span className="h-px w-12 bg-brand-cyan"></span>
               <span className="font-mono text-brand-cyan uppercase tracking-widest text-sm">Engineered, Not Assembled</span>
             </div>
             
             <h2 className="text-3xl md:text-5xl font-bold text-brand-silver mb-8 leading-tight">
               Structure your chaos into <span className="text-brand-silver border-b-2 border-brand-magenta/50">capability.</span>
             </h2>
             
             <p className="text-brand-muted text-lg leading-relaxed mb-6">
               Our platform unifies systems engineering, AI automation, and workflow architecture into a single operational layer — built for real-world environments, not demos.
             </p>
             <p className="text-brand-muted text-lg leading-relaxed">
               Most organisations don’t suffer from a lack of software — they suffer from a lack of structure.
             </p>
             
             <div className="mt-8">
               <NavLink to="/approach">
                 <Button variant="outline">View Our Approach</Button>
               </NavLink>
             </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
             {[
               { icon: Terminal, title: "Systems-First", desc: "Architecture designed for scale." },
               { icon: ShieldCheck, title: "Sovereign", desc: "Australian data handling." },
               { icon: Activity, title: "Reliable", desc: "Operability over polish." },
               { icon: Cpu, title: "Orchestration", desc: "Structured data workflows." }
             ].map((item, i) => (
               <div key={i} className="group p-6 border border-brand-steel/20 bg-brand-base hover:border-brand-cyan hover:bg-brand-deepBlue/50 transition-all duration-300 relative overflow-hidden">
                  <div className="absolute top-0 right-0 p-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Zap className="w-4 h-4 text-brand-cyan" />
                  </div>
                  <item.icon className="w-10 h-10 text-brand-steel group-hover:text-brand-cyan group-hover:drop-shadow-[0_0_8px_rgba(63,230,255,0.5)] transition-all mb-4" />
                  <h3 className="text-brand-silver font-bold mb-2">{item.title}</h3>
                  <p className="text-sm text-brand-muted group-hover:text-brand-silver/80">{item.desc}</p>
               </div>
             ))}
          </div>
        </div>
      </Section>

      {/* Target Audience */}
      <Section className="bg-brand-base relative">
        <div className="absolute right-0 top-1/4 w-1/3 h-full bg-gradient-to-l from-brand-techBlue/5 to-transparent pointer-events-none"></div>
        
        <div className="max-w-4xl mx-auto text-center mb-16 relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-silver mb-6">Who SENTRL Is For</h2>
          <p className="text-brand-muted text-lg">Organisations operating complex systems at scale.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
           {[
             { title: "Infrastructure Operators", desc: "Manage assets with precision and real-time oversight.", icon: Database },
             { title: "Energy & Utilities", desc: "Ensure uptime and accuracy in critical delivery systems.", icon: Zap },
             { title: "Government", desc: "Sovereign, secure, and accountable operational layers.", icon: Lock }
           ].map((item, idx) => (
             <div key={idx} className="group p-8 border border-brand-steel/10 bg-brand-surface hover:border-brand-cyan hover:shadow-cyan-glow transition-all duration-300 relative hover:-translate-y-1">
               <div className="absolute inset-0 bg-gradient-to-b from-brand-cyan/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
               <item.icon className="w-8 h-8 text-brand-techBlue mb-6 group-hover:text-brand-cyan transition-colors" />
               <h3 className="text-xl font-bold text-brand-silver mb-4 group-hover:text-brand-cyan group-hover:text-glow-cyan transition-colors">{item.title}</h3>
               <p className="text-brand-muted relative z-10">{item.desc}</p>
             </div>
           ))}
        </div>
        
        <div className="mt-20 text-center">
          <div className="inline-block p-6 border-x border-brand-cyan/30 bg-brand-cyan/5 backdrop-blur-sm">
             <p className="text-xl md:text-2xl font-mono text-brand-silver">
               "If failure carries real cost, SENTRL is designed for you."
             </p>
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section dark className="relative overflow-hidden border-t border-brand-steel/20">
        <div className="absolute inset-0 bg-hex-pattern opacity-20 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-brand-cyan/10 to-transparent pointer-events-none" />
        
        <div className="relative z-10 flex flex-col items-center text-center max-w-4xl mx-auto">
           <div className="mb-8 p-3 rounded-full border border-brand-magenta/30 bg-brand-magenta/10 shadow-magenta-glow">
             <Cpu className="w-8 h-8 text-brand-magenta animate-pulse" />
           </div>
           
           <h2 className="text-4xl md:text-6xl font-bold text-brand-silver mb-8">SENTRLise your operations.</h2>
           
           <p className="text-lg md:text-xl text-brand-muted max-w-2xl mb-12">
             Provide an overview of your environment and SENTRL will identify where immediate operational impact can be delivered. <br/>
             <span className="text-brand-silver font-medium mt-2 block">No hype. No disruption. Just engineered improvement.</span>
           </p>
           
           <a href="mailto:gday@sentrl.com.au">
             <Button className="w-full md:w-auto text-lg px-12 py-5" variant="primary" withArrow>Contact Engineering Team</Button>
           </a>
        </div>
      </Section>
    </>
  );
};