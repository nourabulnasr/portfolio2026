import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="relative py-32" ref={ref}>
      <div className="mx-auto max-w-4xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <span className="mb-4 block text-sm font-medium tracking-wider text-primary uppercase">About Me</span>
          <h2 className="mb-10 text-3xl font-bold text-foreground sm:text-5xl">
            Building the future with <span className="text-gradient">AI & Design</span>
          </h2>
        </motion.div>

        <div className="space-y-6">
          {[
            "I am a Senior Computer Science student and machine learning engineer with hands-on experience in ML pipelines, LLMs, NLP systems, and AI-powered products.",
            "I combine technical expertise in artificial intelligence with strong UI/UX design and modern web development.",
            "I work focuses on building intelligent systems, generative AI tools, and modern digital experiences.",
            "I've been working as a freelancer for the past 2 years, and I've worked with a lot of clients from different countries, I also tutor students in computer science courses",
          ].map((text, i) => (
            <motion.p
              key={i}
              className="text-lg leading-relaxed text-muted-foreground"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + i * 0.15 }}
            >
              {text}
            </motion.p>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
