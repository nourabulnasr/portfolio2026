import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ExternalLink } from "lucide-react";
import project1 from "@/assets/Screenshot 2026-03-14 200126.png";
import project2 from "@/assets/Screenshot 2026-03-14 200106.png";
import project3 from "@/assets/Screenshot 2026-03-14 200540.png";
import project4 from "@/assets/Screenshot 2026-03-14 200615.png";
import project5 from "@/assets/Screenshot 2026-03-14 200812.png";

const projects = [
  { title: "Royal Falcon OM", description: "Premium real estate website with luxury design.", url: "https://royalfalconom.com", image: project1 },
  { title: "El Serafy", description: "Professional corporate website with modern aesthetics.", url: "https://elserafy.com", image: project2 },
  { title: "The Outcast EG", description: "Streetwear e-commerce store with edgy brand identity.", url: "https://theoutcasteg.myshopify.com", image: project3 },
  { title: "Power of Sea Moss", description: "Health & wellness e-commerce platform.", url: "https://powerofseamoss.com", image: project4 },
  { title: "El Gabaly Architects", description: "Architecture portfolio showcasing premium projects.", url: "https://elgabalyarchitects.com", image: project5 },
];

const ProjectCard = ({ project, index }: { project: typeof projects[0]; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 10;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * -10;
    setTilt({ x: y, y: x });
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.1 }}
      className="group"
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setTilt({ x: 0, y: 0 })}
    >
      <motion.a
        href={project.url}
        target="_blank"
        rel="noopener noreferrer"
        className="card-shine block overflow-hidden rounded-2xl glass"
        style={{ transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)` }}
      >
        <div className="relative overflow-hidden">
          <motion.img
            src={project.image}
            alt={project.title}
            className="aspect-video w-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
          <div className="absolute bottom-4 right-4 flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground opacity-0 transition-all group-hover:opacity-100">
            <ExternalLink className="h-4 w-4" />
          </div>
        </div>
        <div className="p-6">
          <h3 className="mb-2 text-lg font-semibold text-foreground">{project.title}</h3>
          <p className="text-sm text-muted-foreground">{project.description}</p>
        </div>
      </motion.a>
    </motion.div>
  );
};

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="work" className="relative py-32" ref={ref}>
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <span className="mb-4 block text-sm font-medium tracking-wider text-primary uppercase">Selected Work</span>
          <h2 className="mb-16 text-3xl font-bold text-foreground sm:text-5xl">
            Featured <span className="text-gradient">Projects</span>
          </h2>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
