import React from 'react';
import { Section } from '../components/Section';
import { Button } from '../components/Button';

export const Approach: React.FC = () => {
  return (
    <>
      <Section className="pt-32 md:pt-40">
        <div className="max-w-4xl">
            <span className="font-mono text-brand-magenta uppercase tracking-widest text-sm mb-4 block">Philosophy</span>
            <h1 className="text-5xl md:text-6xl font-bold text-brand-silver mb-8">
                We do not sell software features. <br />
                We engineer <span className="text-brand-cyan">operating advantage.</span>
            </h1>
        </div>
      </Section>

      <Section dark className="min-h-[60vh] flex flex-col justify-center">
        <div className="max-w-3xl mx-auto space-y-12">
            <div>
                <h2 className="text-2xl font-bold text-brand-silver mb-4">The SENTRL Approach</h2>
                <p className="text-lg text-brand-muted leading-relaxed">
                    SENTRL structures how systems communicate, how decisions are made, and how automation is deployed — enabling safer, faster, and more controllable operations over time.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8 border-t border-brand-steel/10">
                <div className="group">
                    <span className="text-4xl font-mono text-brand-steel/20 group-hover:text-brand-magenta transition-colors font-bold block mb-4">01</span>
                    <h3 className="text-brand-silver font-bold mb-2">Structure</h3>
                    <p className="text-sm text-brand-muted">Defining the data hierarchy and decision trees.</p>
                </div>
                <div className="group">
                    <span className="text-4xl font-mono text-brand-steel/20 group-hover:text-brand-magenta transition-colors font-bold block mb-4">02</span>
                    <h3 className="text-brand-silver font-bold mb-2">Connect</h3>
                    <p className="text-sm text-brand-muted">Linking disparate physical and digital assets.</p>
                </div>
                <div className="group">
                    <span className="text-4xl font-mono text-brand-steel/20 group-hover:text-brand-magenta transition-colors font-bold block mb-4">03</span>
                    <h3 className="text-brand-silver font-bold mb-2">Automate</h3>
                    <p className="text-sm text-brand-muted">Deploying logic for speed and safety.</p>
                </div>
            </div>
        </div>
      </Section>
      
      <Section>
        <div className="bg-brand-surface border border-brand-cyan/20 p-12 text-center relative overflow-hidden">
             {/* Magenta glow backdrop */}
             <div className="absolute -top-[50px] -right-[50px] w-[150px] h-[150px] bg-brand-magenta/10 blur-[80px]"></div>
             
            <h2 className="text-3xl font-bold text-brand-silver mb-6 relative z-10">Initiate an Operational Assessment</h2>
            <p className="text-brand-muted max-w-2xl mx-auto mb-8 relative z-10">
                Provide an overview of your environment and SENTRL will identify where immediate operational impact can be delivered.
            </p>
            <a href="mailto:gday@sentrl.com.au" className="relative z-10">
                <Button>Email our Engineers</Button>
            </a>
        </div>
      </Section>
    </>
  );
};