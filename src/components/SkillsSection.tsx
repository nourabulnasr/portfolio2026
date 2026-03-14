import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const skillGroups = [
  {
    category: "Languages",
    skills: [
      { name: "Python", level: 95 },
      { name: "C++", level: 80 },
      { name: "JavaScript", level: 88 },
      { name: "SQL", level: 82 },
    ],
  },
  {
    category: "AI Frameworks",
    skills: [
      { name: "PyTorch", level: 90 },
      { name: "TensorFlow", level: 85 },
      { name: "Transformers", level: 88 },
      { name: "LangChain", level: 88 },
      { name: "OpenCV", level: 88 },
      { name: "Scikit-learn", level: 85 },
    ],
  },
  {
    category: "Web Tools",
    skills: [
      { name: "React", level: 90 },
      { name: "Framer Motion", level: 90 },
      { name: "Next.js", level: 85 },
      { name: "Git", level: 88 },
      { name: "Figma", level: 82 },
      { name: "Shadcn/UI", level: 88 },
      
    ],
  },
  {
    category: "Concepts",
    skills: [
      { name: "LLMs", level: 97 },
      { name: "Generative AI", level: 94 },
      { name: "LLM Fine-tuning", level: 90 },
      { name: "LLM Prompt Engineering", level: 90 },
      { name: "RAG Systems", level: 88 },
      { name: "NLP", level: 87 },
      { name: "Computer Vision", level: 82 },
    ],
  },
];

const SkillBar = ({ name, level, delay }: { name: string; level: number; delay: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-30px" });

  return (
    <div ref={ref} className="mb-4">
      <div className="mb-1.5 flex items-center justify-between">
        <span className="text-sm font-medium text-foreground">{name}</span>
        <span className="text-xs text-muted-foreground">{level}%</span>
      </div>
      <div className="h-1.5 overflow-hidden rounded-full bg-secondary">
        <motion.div
          className="h-full rounded-full bg-gradient-to-r from-primary to-primary/60"
          initial={{ width: 0 }}
          animate={isInView ? { width: `${level}%` } : { width: 0 }}
          transition={{ duration: 1, delay, ease: "easeOut" }}
        />
      </div>
    </div>
  );
};

const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="relative py-32" ref={ref}>
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <span className="mb-4 block text-sm font-medium tracking-wider text-primary uppercase">Skills</span>
          <h2 className="mb-16 text-3xl font-bold text-foreground sm:text-5xl">
            Technical <span className="text-gradient">expertise</span>
          </h2>
        </motion.div>

        <div className="grid gap-10 md:grid-cols-2">
          {skillGroups.map((group, gi) => (
            <motion.div
              key={group.category}
              className="glass rounded-2xl p-8"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: gi * 0.1 }}
            >
              <h3 className="mb-6 text-lg font-semibold text-primary">{group.category}</h3>
              {group.skills.map((skill, si) => (
                <SkillBar key={skill.name} name={skill.name} level={skill.level} delay={0.2 + si * 0.1} />
              ))}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
