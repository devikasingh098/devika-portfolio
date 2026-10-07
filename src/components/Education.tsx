import { motion } from 'framer-motion';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';

const Education = () => {
  return (
    <section id="education" className="py-24 relative w-full flex justify-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl w-full"
      >
        <div className="glass-card p-10 rounded-3xl relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-[80px] -z-10 group-hover:bg-primary/20 transition-colors duration-700"></div>
          
          <div className="flex items-center gap-4 mb-8">
            <div className="p-4 bg-primary/20 rounded-2xl text-primary">
              <GraduationCap size={32} />
            </div>
            <div>
              <h2 className="text-3xl font-bold">Education</h2>
              <p className="text-gray-400">Academic Background</p>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-white">Bachelor of Computer Applications (BCA)</h3>
            
            <div className="flex flex-wrap gap-4 text-sm font-medium text-gray-300">
              <span className="flex items-center gap-1.5 bg-white/5 px-3 py-1.5 rounded-lg border border-white/10">
                <Calendar size={16} className="text-primary" /> Currently in 3rd Year
              </span>
              <span className="flex items-center gap-1.5 bg-white/5 px-3 py-1.5 rounded-lg border border-white/10">
                <MapPin size={16} className="text-primary" /> India
              </span>
            </div>
            
            <p className="text-gray-400 mt-4 leading-relaxed">
              Focusing on software engineering principles, algorithms, and practical application development. Consistently applying academic concepts to real-world projects and hackathons to bridge the gap between theory and practice.
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Education;
