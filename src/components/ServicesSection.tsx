import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Globe, Sparkles, GraduationCap } from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Website Design & Development",
    description: "Building modern websites using modern frameworks and premium UI.",
  },
  {
    icon: Sparkles,
    title: "AI Visuals for Marketing",
    description: "Creating AI-generated visuals and marketing content using generative AI tools.",
  },
  {
    icon: GraduationCap,
    title: "CS / AI Tutoring",
    description: "Mentoring students in computer science, machine learning, and AI topics.",
  },
];

const ServiceCard = ({ service, index }: { service: typeof services[0]; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 8;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * -8;
    setTilt({ x: y, y: x });
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="group"
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setTilt({ x: 0, y: 0 })}
    >
      <motion.div
        className="glass card-shine rounded-2xl p-8 transition-all hover:glow-border"
        style={{ transform: `perspective(800px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)` }}
      >
        <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
          <service.icon className="h-6 w-6" />
        </div>
        <h3 className="mb-3 text-xl font-semibold text-foreground">{service.title}</h3>
        <p className="text-sm leading-relaxed text-muted-foreground">{service.description}</p>
      </motion.div>
    </motion.div>
  );
};

const ServicesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="relative py-32" ref={ref}>
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <span className="mb-4 block text-sm font-medium tracking-wider text-primary uppercase">Services</span>
          <h2 className="mb-16 text-3xl font-bold text-foreground sm:text-5xl">
            What I <span className="text-gradient">offer</span>
          </h2>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-3">
          {services.map((service, i) => (
            <ServiceCard key={service.title} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
