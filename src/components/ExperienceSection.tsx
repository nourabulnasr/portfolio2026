import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase } from "lucide-react";

const experiences = [
  { role: "ML Engineer / UI-UX Designer", company: "CipherGenix" },
  { role: "Data Scientist Intern", company: "Corelia (Meapal)" },
  { role: "IT Intern", company: "PepsiCo" },
  { role: "Tech Solutions Engineer", company: "Fadasco LLC" },
];

const ExperienceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="relative py-32" ref={ref}>
      <div className="mx-auto max-w-4xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <span className="mb-4 block text-sm font-medium tracking-wider text-primary uppercase">Experience</span>
          <h2 className="mb-16 text-3xl font-bold text-foreground sm:text-5xl">
            Where I've <span className="text-gradient">worked</span>
          </h2>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-[19px] top-0 h-full w-px bg-border md:left-1/2 md:-translate-x-px" />

          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              className={`relative mb-12 flex items-start gap-6 md:w-1/2 ${i % 2 === 0 ? "md:pr-12" : "md:ml-auto md:pl-12"}`}
              initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.15 }}
            >
              {/* Dot */}
              <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-primary/30 bg-background md:absolute md:left-auto md:right-auto md:-translate-x-1/2 md:top-0"
                style={i % 2 === 0 ? { right: "-20px" } : { left: "-20px" }}
              >
                <Briefcase className="h-4 w-4 text-primary" />
              </div>

              <div className="glass rounded-xl p-6 transition-all hover:glow-border">
                <h3 className="mb-1 text-lg font-semibold text-foreground">{exp.role}</h3>
                <p className="text-sm text-primary">{exp.company}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
