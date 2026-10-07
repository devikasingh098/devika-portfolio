import React from 'react';
import { motion } from 'framer-motion';

const skillsData = [
  {
    category: "Frontend",
    items: ["React", "TypeScript", "HTML", "CSS", "Tailwind CSS"],
    color: "from-blue-500/20 to-cyan-500/20",
    border: "border-blue-500/30",
  },
  {
    category: "Backend",
    items: ["Python", "Flask", "Node.js"],
    color: "from-green-500/20 to-emerald-500/20",
    border: "border-green-500/30",
  },
  {
    category: "AI / ML",
    items: ["Gemini", "AI APIs", "Generative AI", "Prompt Engineering"],
    color: "from-purple-500/20 to-fuchsia-500/20",
    border: "border-purple-500/30",
  },
  {
    category: "Database / Tools",
    items: ["Supabase", "Git", "GitHub", "Vite", "VS Code"],
    color: "from-orange-500/20 to-amber-500/20",
    border: "border-orange-500/30",
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 relative">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-6xl mx-auto w-full"
      >
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">My Tech Stack</h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Tools and technologies I use to bring ideas to life.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 w-full">
          {skillsData.map((skillGroup, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className={`glass-card p-8 rounded-3xl border bg-gradient-to-br ${skillGroup.color} ${skillGroup.border} relative overflow-hidden group`}
            >
              <div className="absolute inset-0 bg-black/40 backdrop-blur-sm -z-10 group-hover:bg-black/20 transition-colors duration-500"></div>
              
              <h3 className="text-xl font-bold mb-6 text-white/90">{skillGroup.category}</h3>
              
              <div className="flex flex-wrap gap-3">
                {skillGroup.items.map((skill, idx) => (
                  <motion.span
                    key={idx}
                    whileHover={{ scale: 1.1, backgroundColor: 'rgba(255,255,255,0.15)' }}
                    className="px-4 py-2 rounded-full text-sm font-medium bg-white/5 border border-white/10 text-gray-200 cursor-default transition-colors"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Skills;
