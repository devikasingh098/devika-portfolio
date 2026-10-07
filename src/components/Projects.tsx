import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Trophy } from 'lucide-react';

const projects = [
  {
    title: "InterviewAI",
    description: "An AI-powered voice interview coach that conducts realistic mock interviews, provides live transcription, and generates structured performance feedback.",
    tech: ["React", "TypeScript", "Vite", "Tailwind CSS", "AssemblyAI", "Gemini", "Supabase"],
    highlight: "AssemblyAI Voice Agent Hackathon",
    github: "#",
    live: "#",
    gradient: "from-indigo-500/20 to-purple-500/20"
  },
  {
    title: "Pack Manager",
    description: "An AI-powered packaging verification system that analyzes outbound boxes against expected orders and identifies missing, incorrect, extra, or uncertain items.",
    tech: ["Python", "Flask", "Gemini", "AI Agents"],
    highlight: "CUBE 2026 Final Round",
    github: "#",
    live: "#",
    gradient: "from-emerald-500/20 to-teal-500/20"
  },
  {
    title: "AI College Chatbot",
    description: "An AI chatbot designed to help college students access information and interact with a college-focused assistant.",
    tech: ["Python", "Gemini", "Flask"],
    github: "#",
    live: "#",
    gradient: "from-blue-500/20 to-cyan-500/20"
  },
  {
    title: "Clothing Store",
    description: "A responsive e-commerce style clothing website built as a frontend web project with modern UI principles.",
    tech: ["HTML", "CSS", "Tailwind CSS"],
    github: "#",
    live: "#",
    gradient: "from-orange-500/20 to-red-500/20"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 relative w-full">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="w-full"
      >
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Featured Work</h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Projects built from scratch during hackathons, late nights, and weekend sprints.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 w-full">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={`glass-card rounded-3xl overflow-hidden group flex flex-col h-full bg-gradient-to-br ${project.gradient}`}
            >
              <div className="p-8 flex-grow flex flex-col relative z-10 bg-black/40 backdrop-blur-sm h-full group-hover:bg-black/20 transition-colors duration-500">
                
                {project.highlight && (
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 rounded-full text-xs font-semibold text-yellow-400 mb-6 w-fit border border-yellow-400/20">
                    <Trophy size={12} /> {project.highlight}
                  </div>
                )}
                
                <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-primary transition-colors">{project.title}</h3>
                <p className="text-gray-400 mb-6 flex-grow leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="text-xs font-medium px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-gray-300">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-4 mt-auto">
                  <a href={project.live} className="flex items-center gap-2 px-4 py-2 bg-primary hover:bg-primary/80 text-white text-sm font-medium rounded-lg transition-colors">
                    <ExternalLink size={16} /> Live Demo
                  </a>
                  <a href={project.github} className="flex items-center gap-2 px-4 py-2 glass hover:bg-white/10 text-white text-sm font-medium rounded-lg transition-colors">
                    <Github size={16} /> GitHub
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;
