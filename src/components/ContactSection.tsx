import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Mail, Github, Linkedin, MessageCircle, Download } from "lucide-react";
import { toast } from "sonner";

const socials = [
  { icon: Mail, label: "Email", href: "mailto:nourabulnasr@Gmail.com" },
  { icon: Github, label: "GitHub", href: "https://github.com/nourabulnasr" },
  { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/nour-abulnasr-a9026b214" },
  { icon: MessageCircle, label: "WhatsApp", href: "https://wa.me/201069046666" },
];

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const to = "nourabulnasr@Gmail.com";
    const subject = encodeURIComponent(`Portfolio contact from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    // Open Gmail compose in a new tab so the user can send from their mail provider
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(to)}&su=${subject}&body=${body}`;
    window.open(gmailUrl, "_blank", "noopener,noreferrer");
    toast.success("Gmail opened", {
      description: "Complete and send the email in the new tab.",
    });
  };

  return (
    <section id="contact" className="relative py-32" ref={ref}>
      <div className="mx-auto max-w-4xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <span className="mb-4 block text-sm font-medium tracking-wider text-primary uppercase">Contact</span>
          <h2 className="mb-6 text-3xl font-bold text-foreground sm:text-5xl">
            Let's <span className="text-gradient">connect</span>
          </h2>
          <p className="mb-16 text-lg text-muted-foreground">Have a project in mind? Let's build something great together.</p>
        </motion.div>

        <div className="grid gap-12 md:grid-cols-2">
          <motion.form
            onSubmit={handleSubmit}
            className="space-y-6"
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div>
              <input
                type="text"
                placeholder="Name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full rounded-xl border border-border bg-secondary/50 px-5 py-3.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="Email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full rounded-xl border border-border bg-secondary/50 px-5 py-3.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
              />
            </div>
            <div>
              <textarea
                placeholder="Message"
                rows={5}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full resize-none rounded-xl border border-border bg-secondary/50 px-5 py-3.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
              />
            </div>
            <button
              type="submit"
              className="w-full rounded-xl bg-primary px-8 py-3.5 text-sm font-semibold text-primary-foreground transition-all hover:shadow-[0_0_30px_hsl(142_71%_45%/0.3)]"
            >
              Send Message
            </button>
          </motion.form>

          <motion.div
            className="flex flex-col justify-between"
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="space-y-4">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 rounded-xl glass px-5 py-4 transition-all hover:glow-border"
                >
                  <social.icon className="h-5 w-5 text-primary" />
                  <span className="text-sm font-medium text-foreground">{social.label}</span>
                </a>
              ))}
            </div>

            <a
              href="/Final-Oct-CV.pdf"
              download="Nour-Abulnasr-CV.pdf"
              className="mt-8 flex items-center justify-center gap-2 rounded-xl border border-border px-8 py-3.5 text-sm font-semibold text-foreground transition-all hover:border-primary/50 hover:text-primary"
            >
              <Download className="h-4 w-4" />
              Download CV
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
