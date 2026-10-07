import { motion } from 'framer-motion';
import { Code2, BrainCircuit, Terminal, Sparkles } from 'lucide-react';

const About = () => {
  const stats = [
    { label: 'BCA 3rd Year', icon: <Terminal size={20} />, value: 'Student' },
    { label: 'Hackathon Builder', icon: <Code2 size={20} />, value: 'Creator' },
    { label: 'AI Projects', icon: <BrainCircuit size={20} />, value: 'Builder' },
    { label: 'Open to Opportunities', icon: <Sparkles size={20} />, value: 'Ready' },
  ];

  return (
    <section id="about" className="py-24 relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto"
      >
        <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center">
          More than just a <span className="text-gradient">developer.</span>
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
            <p>
              Hey, I'm Devika. I'm a BCA 3rd Year student based in India with a serious passion for breaking things, fixing them, and learning how they actually work under the hood.
            </p>
            <p>
              I don't just write code to pass exams—I build things because I love the process. Whether it's integrating LLMs into a web app, structuring a solid backend, or staying up late hacking together a project for a competition, I'm always chasing that "aha!" moment when the code finally clicks.
            </p>
            <p>
              Right now, my focus is heavily leaning towards AI/ML and full-stack development. I believe the best way to learn is by building real-world stuff that people can actually use.
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.05, rotate: [0, -1, 1, 0] }}
                className="glass-card p-6 rounded-2xl flex flex-col items-center justify-center text-center gap-3 border border-white/10 hover:border-primary/50 transition-colors"
              >
                <div className="p-3 bg-white/5 rounded-xl text-primary">
                  {stat.icon}
                </div>
                <div>
                  <h4 className="font-semibold text-white">{stat.label}</h4>
                  <p className="text-sm text-gray-400">{stat.value}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
