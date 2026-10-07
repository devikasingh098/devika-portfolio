import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, ArrowUpRight } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-32 relative w-full">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto text-center"
      >
        <h2 className="text-5xl md:text-7xl font-bold tracking-tight mb-8">
          Got an idea? <br />
          <span className="text-gradient">Let's build it.</span>
        </h2>
        
        <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-12">
          Whether it's a project, collaboration, hackathon, or opportunity — I'm always down to build something interesting.
        </p>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
          <a
            href="mailto:devikasingh9d.vhs@gmail.com"
            className="group flex items-center justify-center gap-2 px-8 py-4 bg-white text-black hover:bg-gray-200 rounded-full font-bold text-lg w-full sm:w-auto transition-transform hover:scale-105 active:scale-95"
          >
            <Mail size={20} /> Email Me
          </a>
          
          <a
            href="https://www.linkedin.com/in/devikasingh098/"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-center gap-2 px-8 py-4 glass border border-white/20 hover:bg-white/10 rounded-full font-bold text-lg w-full sm:w-auto transition-transform hover:scale-105 active:scale-95"
          >
            <Linkedin size={20} className="text-[#0077b5]" /> LinkedIn <ArrowUpRight size={18} className="opacity-50 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
          </a>
          
          <a
            href="https://github.com/devikasingh098"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-center gap-2 px-8 py-4 glass border border-white/20 hover:bg-white/10 rounded-full font-bold text-lg w-full sm:w-auto transition-transform hover:scale-105 active:scale-95"
          >
            <Github size={20} /> GitHub <ArrowUpRight size={18} className="opacity-50 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
