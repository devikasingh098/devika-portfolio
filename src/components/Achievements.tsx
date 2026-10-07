import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Code, Rocket, Star } from 'lucide-react';

const achievements = [
  {
    title: "CUBE 2026 — FINAL ROUND",
    subtitle: "Ticket to the Final.",
    type: "hackathon",
    icon: <Trophy className="text-yellow-400" size={24} />,
    color: "from-yellow-500/20 to-orange-500/20",
    border: "border-yellow-500/30"
  },
  {
    title: "AssemblyAI Voice Agent Hackathon",
    subtitle: "Built an AI mock interview coach",
    type: "hackathon",
    icon: <Rocket className="text-purple-400" size={24} />,
    color: "from-purple-500/20 to-indigo-500/20",
    border: "border-purple-500/30"
  },
  {
    title: "AI/ML & Full-Stack Projects",
    subtitle: "Consistently shipping personal projects",
    type: "project",
    icon: <Code className="text-cyan-400" size={24} />,
    color: "from-cyan-500/20 to-blue-500/20",
    border: "border-cyan-500/30"
  },
  {
    title: "Technical Lead",
    subtitle: "College Technical & Disciplinary Committee",
    type: "leadership",
    icon: <Star className="text-pink-400" size={24} />,
    color: "from-pink-500/20 to-rose-500/20",
    border: "border-pink-500/30"
  }
];

const Achievements = () => {
  return (
    <section id="achievements" className="py-24 relative w-full">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto w-full"
      >
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Milestones & Achievements</h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            A timeline of my journey as a developer and builder.
          </p>
        </div>

        <div className="relative border-l-2 border-white/10 ml-4 md:ml-0 md:pl-0 pl-8 space-y-12">
          {achievements.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="relative md:flex items-center gap-8 group"
            >
              {/* Timeline dot */}
              <div className="absolute -left-[41px] md:left-1/2 md:-ml-[17px] top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-[#08090D] border-2 border-primary/50 flex items-center justify-center z-10 group-hover:scale-125 group-hover:border-primary transition-all duration-300 shadow-[0_0_15px_rgba(138,43,226,0.5)]">
                <div className="w-2 h-2 rounded-full bg-primary" />
              </div>

              {/* Content Card */}
              <div className={`md:w-1/2 ${idx % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12 md:ml-auto'}`}>
                <div className={`glass-card p-6 rounded-2xl bg-gradient-to-br ${item.color} ${item.border} hover:-translate-y-1 transition-transform duration-300 relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-black/40 -z-10 group-hover:bg-black/20 transition-colors duration-500"></div>
                  
                  <div className={`flex items-center gap-4 mb-3 ${idx % 2 === 0 ? 'md:justify-end' : ''}`}>
                    {idx % 2 !== 0 && <div className="p-2 bg-white/10 rounded-lg shrink-0">{item.icon}</div>}
                    <h3 className="text-xl font-bold text-white">{item.title}</h3>
                    {idx % 2 === 0 && <div className="p-2 bg-white/10 rounded-lg shrink-0 hidden md:block">{item.icon}</div>}
                  </div>
                  
                  <p className="text-gray-400 font-medium">{item.subtitle}</p>
                  
                  {item.type === 'hackathon' && (
                    <div className={`mt-4 flex ${idx % 2 === 0 ? 'md:justify-end' : ''}`}>
                      <span className="inline-flex animate-pulse items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-white/10 text-white border border-white/20">
                        <Sparkles size={12} className="text-yellow-400" /> Hackathon Highlight
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
          
          {/* Central line for desktop */}
          <div className="hidden md:block absolute top-0 bottom-0 left-1/2 w-0.5 bg-gradient-to-b from-primary/50 via-white/10 to-transparent -translate-x-1/2 -z-10"></div>
        </div>
      </motion.div>
    </section>
  );
};

// Extracted from lucide since it wasn't imported in the file above
import { Sparkles } from 'lucide-react';

export default Achievements;
