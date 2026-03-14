import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import FloatingShapes from "./FloatingShapes";
import heroBg from "@/assets/hero-bg.jpg";
import heroPortrait from "@/assets/hero-portrait.png";

const HeroSection = () => {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
      {/* Parallax background */}
      <motion.div
        className="absolute inset-0 opacity-30"
        style={{ backgroundImage: `url(${heroBg})`, backgroundSize: "cover", backgroundPosition: "center" }}
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />

      <FloatingShapes />

      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col items-center gap-12 px-6 md:flex-row md:items-center md:justify-between md:gap-16">
        {/* Left: name and CTAs (aligned left like 6th screenshot) */}
        <div className="flex flex-1 flex-col items-start text-left">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-6"
          >
            <span className="inline-block rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-medium tracking-wider text-primary uppercase">
              ML Engineer • GenAI Builder • UI/UX Designer
            </span>
          </motion.div>

          <motion.p
            className="mb-2 text-sm font-medium tracking-wider text-muted-foreground"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Hello My Name Is
          </motion.p>

          <motion.h1
            className="mb-6 text-5xl font-black leading-tight tracking-tight text-foreground sm:text-6xl lg:text-7xl"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            Nour{" "}
            <span className="text-gradient neon-glow">Abulnasr</span>
          </motion.h1>

          <motion.p
            className="mb-10 max-w-xl text-lg text-muted-foreground sm:text-xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            I design intelligent systems, AI-driven experiences, and modern digital products.
          </motion.p>

          <motion.div
            className="flex flex-col gap-4 sm:flex-row sm:gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <a
              href="#work"
              className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-primary px-8 py-3.5 text-sm font-semibold text-primary-foreground transition-all hover:shadow-[0_0_30px_hsl(142_71%_45%/0.4)]"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("work")?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              View My Work
              <span className="absolute inset-0 -translate-x-full bg-foreground/10 transition-transform group-hover:translate-x-0" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-border px-8 py-3.5 text-sm font-semibold text-foreground transition-all hover:border-primary/50 hover:text-primary"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Contact Me
            </a>
          </motion.div>
        </div>

        {/* Right: portrait */}
        <motion.div
          className="relative flex shrink-0 items-center justify-center md:w-2/5"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <div className="relative overflow-hidden rounded-2xl border border-border/50 bg-background/20 shadow-2xl">
            <img
              src={heroPortrait}
              alt="Nour Abulnasr"
              className="aspect-[3/4] w-full max-w-sm object-cover object-top md:max-w-md"
            />
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ArrowDown className="h-5 w-5 text-muted-foreground" />
      </motion.div>
    </section>
  );
};

export default HeroSection;
