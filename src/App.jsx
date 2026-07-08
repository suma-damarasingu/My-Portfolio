import { useEffect, useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import { AnimatePresence, motion, useScroll, useSpring } from "framer-motion";
import {
  ArrowUp,
  BookOpen,
  CheckCircle2,
  Download,
  ExternalLink,
  Eye,
  Filter,
  Github,
  Mail,
  MapPin,
  Menu,
  Moon,
  Phone,
  Search,
  Send,
  Sun,
  X
} from "lucide-react";
import {
  achievements,
  certifications,
  education,
  profiles,
  projects,
  skills,
  socials,
  student,
  timeline
} from "./data/portfolio.js";

const navItems = ["home", "about", "skills", "projects", "experience", "education", "contact"];
const typingWords = ["Full Stack Developer", "Gen AI Explorer", "React Builder", "Problem Solver"];

function Section({ id, eyebrow, title, children }) {
  return (
    <section id={id} className="section-shell section-shell--accent scroll-mt-24">
      <motion.div
        initial={{ opacity: 0, y: 34 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.68, ease: [0.22, 1, 0.36, 1] }}
        className="section-content"
      >
        <p className="section-eyebrow">{eyebrow}</p>
        <h2 className="section-title">{title}</h2>
        {children}
      </motion.div>
    </section>
  );
}

function useActiveSection() {
  const [active, setActive] = useState("home");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((entry) => entry.isIntersecting);
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: "-35% 0px -55% 0px", threshold: 0.01 }
    );

    navItems.forEach((item) => {
      const node = document.getElementById(item);
      if (node) observer.observe(node);
    });

    return () => observer.disconnect();
  }, []);

  return active;
}

function Navbar({ theme, setTheme }) {
  const [open, setOpen] = useState(false);
  const active = useActiveSection();

  const linkClass = (item) =>
    `nav-link ${active === item ? "nav-link-active text-white" : "text-slate-300 hover:text-white"}`;

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-ink/70 backdrop-blur-2xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3.5 sm:px-6 lg:px-8">
        <a href="#home" className="flex items-center gap-3" aria-label="Portfolio home">
          <span className="brand-mark grid size-10 place-items-center rounded-lg bg-premium-gradient font-bold text-white shadow-glow">SD</span>
          <span className="hidden text-sm font-semibold tracking-wide text-white sm:block">{student.name}</span>
        </a>
        <div className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <a className={linkClass(item)} href={`#${item}`} key={item}>
              {item}
            </a>
          ))}
        </div>
        <div className="flex items-center gap-2">
          <button className="icon-btn" onClick={() => setTheme(theme === "dark" ? "light" : "dark")} aria-label="Toggle theme">
            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button className="icon-btn lg:hidden" onClick={() => setOpen((value) => !value)} aria-label="Open menu">
            {open ? <X size={19} /> : <Menu size={19} />}
          </button>
        </div>
      </nav>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="mobile-menu border-t border-white/10 bg-ink/95 px-4 pb-4 lg:hidden"
          >
            <div className="grid gap-2 pt-3">
              {navItems.map((item) => (
                <a className={linkClass(item)} href={`#${item}`} key={item} onClick={() => setOpen(false)}>
                  {item}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

function TypingText() {
  const [wordIndex, setWordIndex] = useState(0);
  const [length, setLength] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = typingWords[wordIndex];
    const doneTyping = !deleting && length === word.length;
    const doneDeleting = deleting && length === 0;
    const delay = doneTyping ? 1100 : 85;

    const timer = setTimeout(() => {
      if (doneTyping) setDeleting(true);
      else if (doneDeleting) {
        setDeleting(false);
        setWordIndex((wordIndex + 1) % typingWords.length);
      } else setLength((value) => value + (deleting ? -1 : 1));
    }, delay);

    return () => clearTimeout(timer);
  }, [wordIndex, length, deleting]);

  return <span>{typingWords[wordIndex].slice(0, length)}<span className="text-cyanGlow">|</span></span>;
}

function Hero() {
  return (
    <section id="home" className="relative min-h-screen overflow-hidden px-4 pt-28 sm:px-6 lg:px-8">
      <div className="hero-bg" />
      <div className="hero-grid" />
      <div className="pointer-events-none absolute inset-0">
        {Array.from({ length: 22 }).map((_, index) => (
          <span
            key={index}
            className="particle"
            style={{
              left: `${(index * 43) % 100}%`,
              top: `${14 + ((index * 29) % 68)}%`,
              animationDelay: `${index * 0.27}s`
            }}
          />
        ))}
      </div>
      <div className="relative mx-auto grid min-h-[calc(100vh-7rem)] max-w-7xl items-center gap-14 py-14 lg:grid-cols-[1.1fr_0.9fr] lg:py-20">
        <motion.div initial={{ opacity: 0, y: 32 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.78, ease: [0.22, 1, 0.36, 1] }}>
          <div className="pill mb-6">Available for internships and Web Development projects</div>
          <h1 className="max-w-4xl text-5xl font-black tracking-normal text-white sm:text-6xl lg:text-7xl xl:text-8xl">
            Hi, I'm <span className="gradient-text">{student.name}</span>
          </h1>
          <p className="mt-5 text-xl font-semibold text-slate-200 sm:text-2xl">{student.role}</p>
          {/* <p className="mt-5 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">{student.bio}</p> */}
          <p className="mt-5 text-lg font-semibold text-white">
            Aspiring <TypingText />
          </p>
          <div className="mt-7 flex flex-wrap gap-2">
            <span className="pill">MERN Stack</span>
            <span className="pill">Gen AI</span>
            <span className="pill">Programming</span>
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <a className="btn-primary" href={student.resume} download target="_blank" rel="noopener noreferrer" aria-label="Download resume">
              <Download size={18} /> Download Resume
            </a>
            <a className="btn-secondary" href="#projects">
              <Eye size={18} /> View Projects
            </a>
            <a className="btn-secondary" href="#contact">
              <Mail size={18} /> Contact Me
            </a>
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            {socials.map(({ label, href, icon: Icon }) => (
              <a className="social-link" href={href} key={label} target="_blank" rel="noreferrer" aria-label={label}>
                <Icon size={19} />
              </a>
            ))}
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.75, delay: 0.1 }}
          className="relative mx-auto w-full max-w-md lg:max-w-lg"
        >
          <div className="absolute -inset-8 rounded-[2rem] bg-premium-gradient opacity-25 blur-3xl" />
          <div className="hero-orbit absolute -right-6 top-8 hidden h-24 w-24 rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-xl sm:block" />
          <div className="glass-panel hero-card relative overflow-hidden p-4 shadow-premium">
            <img
              src={student.profileImage}
              alt={`${student.name} profile`}
              className="h-[430px] w-full rounded-xl object-cover sm:h-[480px]"
              loading="eager"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function About() {
  const quickFacts = [
    ["Career Objective", student.objective],
    ["Interests", student.interests.join(", ")],
    ["Strengths", student.strengths.join(", ")],
    ["Languages", student.languages.join(", ")]
  ];

  return (
    <Section id="about" eyebrow="About Me" title="Passionate About Technology">
      <div className="grid gap-5 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="glass-panel p-6 sm:p-8">
          <div className="inline-flex rounded-full border border-cyanGlow/30 bg-cyanGlow/10 px-3 py-1 text-sm font-semibold text-cyanGlow">About the builder</div>
          <p className="mt-5 leading-8 text-slate-300">{student.bio}</p>
          <div className="mt-6 rounded-2xl border border-white/10 bg-white/[0.04] p-5 shadow-inner">
            <p className="text-sm uppercase tracking-[0.18em] text-cyanGlow">Education</p>
            <h3 className="mt-3 text-xl font-bold text-white">{education[0].degree}</h3>
            <p className="mt-2 text-slate-300">{education[0].university} · CGPA {education[0].cgpa}</p>
          </div>
          <a className="btn-primary mt-6 w-fit" href={student.resume} download>
            <Download size={18} /> Download Resume
          </a>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {quickFacts.map(([title, text]) => (
            <motion.div className="glass-panel interactive-card p-5 sm:p-6" key={title} whileHover={{ y: -5 }}>
              <CheckCircle2 className="text-cyanGlow" size={24} />
              <h3 className="mt-4 font-bold text-white">{title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-300">{text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}

function Skills() {
  const skillGroups = Array.isArray(skills) ? skills : [];

  return (
    <Section id="skills" eyebrow="Skills" title="My Development Stack">
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {skillGroups.map(({ category, icon: Icon, items }, skillIndex) => {
          const safeItems = Array.isArray(items) ? items : [];

          return (
            <motion.article className="glass-panel interactive-card p-5 sm:p-6" key={`${category}-${skillIndex}`} whileHover={{ y: -6, scale: 1.01 }}>
              <div className="flex items-center gap-3">
                <span className="grid size-11 place-items-center rounded-lg bg-cyanGlow/10 text-cyanGlow">
                  {Icon ? <Icon size={22} /> : null}
                </span>
                <h3 className="text-lg font-bold text-white">{category}</h3>
              </div>
              <div className="mt-5 space-y-4">
                {safeItems.map((item, itemIndex) => {
                  const [name, value] = Array.isArray(item) ? item : [];
                  const safeValue = Number.isFinite(value) ? value : 0;

                  return (
                    <div key={`${category}-${name || "item"}-${itemIndex}`}>
                      <div className="mb-2 flex justify-between text-sm">
                        <span className="font-medium text-slate-200">{name || "Skill"}</span>
                        <span className="text-slate-400">{safeValue}%</span>
                      </div>
                      <div className="h-2 rounded-full bg-white/10">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${safeValue}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.9 }}
                          className="h-full rounded-full bg-premium-gradient"
                          aria-label={`${name || "Skill"}: ${safeValue}% proficiency`}
                          title={`${name || "Skill"}: ${safeValue}% proficiency`}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </motion.article>
          );
        })}
      </div>
    </Section>
  );
}

function Projects() {
  const categories = ["All", ...new Set(projects.map((project) => project.category))];
  const [category, setCategory] = useState("All");
  const [query, setQuery] = useState("");

  const filtered = useMemo(
    () =>
      projects.filter((project) => {
        const matchesCategory = category === "All" || project.category === category;
        const matchesQuery = `${project.title} ${project.description} ${project.stack.join(" ")}`
          .toLowerCase()
          .includes(query.toLowerCase());
        return matchesCategory && matchesQuery;
      }),
    [category, query]
  );

  return (
    <Section id="projects" eyebrow="Featured Projects" title="Projects That Showcase My Skills">
      <div className="mb-8 flex flex-col gap-3 rounded-2xl border border-white/10 bg-white/[0.03] p-4 md:flex-row md:items-center md:justify-between">
        <div className="flex flex-wrap gap-2">
          {categories.map((item) => (
            <button className={`chip ${category === item ? "chip-active" : ""}`} onClick={() => setCategory(item)} key={item}>
              <Filter size={15} /> {item}
            </button>
          ))}
        </div>
        <label className="search-box">
          <Search size={17} />
          <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search projects" />
        </label>
      </div>
      <div className="grid gap-5 lg:grid-cols-2">
        {filtered.map((project) => (
          <motion.article className="glass-panel project-card overflow-hidden" key={project.title} layout whileHover={{ y: -6, scale: 1.01 }}>
            <div className="project-image-wrap">
              <img src={project.image} alt="" className="h-56 w-full object-cover" loading="lazy" />
            </div>
            <div className="p-5 sm:p-6">
              <p className="text-sm font-semibold text-cyanGlow">{project.category}</p>
              <h3 className="mt-2 text-xl font-bold text-white">{project.title}</h3>
              <p className="mt-3 leading-7 text-slate-300">{project.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <span className="tag" key={tech}>{tech}</span>
                ))}
                {project.status ? <span className="tag">{project.status}</span> : null}
              </div>
              <ul className="mt-4 grid gap-2 text-sm text-slate-300 sm:grid-cols-2">
                {project.features.map((feature) => (
                  <li className="flex items-center gap-2" key={feature}>
                    <CheckCircle2 size={15} className="text-cyanGlow" /> {feature}
                  </li>
                ))}
              </ul>
              <div className="mt-5 flex flex-wrap gap-3">
                {project.github ? (
                  <a className="btn-secondary" href={project.github} target="_blank" rel="noopener noreferrer" aria-label={`View GitHub project for ${project.title}`}>
                    <Github size={17} /> GitHub
                  </a>
                ) : null}
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </Section>
  );
}

function Experience() {
  return (
    <Section id="experience" eyebrow="Experience & Proof" title="Internships, certifications,and workshops">
      <div className="grid gap-8 xl:grid-cols-[0.95fr_1.05fr]">
        <div className="relative space-y-4 before:absolute before:left-6 before:top-3 before:h-[calc(100%-1.5rem)] before:w-px before:bg-white/15">
          {timeline.map(({ title, meta, date, icon: Icon, text }) => (
            <motion.div className="relative flex gap-4" key={title} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} whileHover={{ y: -3, scale: 1.005 }} transition={{ duration: 0.2 }}>
              <span className="z-10 grid size-12 shrink-0 place-items-center rounded-lg border border-cyanGlow/30 bg-cyanGlow/10 text-cyanGlow">
                <Icon size={21} />
              </span>
              <div className="glass-panel interactive-card flex-1 p-5">
                <div className="flex flex-wrap justify-between gap-2">
                  <h3 className="font-bold text-white">{title}</h3>
                  <span className="text-sm text-cyanGlow">{date}</span>
                </div>
                <p className="mt-1 text-sm text-slate-400">{meta}</p>
                <p className="mt-3 text-slate-300">{text}</p>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="grid gap-5 sm:grid-cols-2">
          {(Array.isArray(certifications) ? certifications : []).map(([org, title, date, Icon, link], index) => (
            <motion.article className="glass-panel interactive-card p-5" key={`${org || "certificate"}-${title || index}-${index}`} whileHover={{ y: -5 }}>
              <div className="certificate-art mb-5 grid h-28 place-items-center rounded-xl bg-premium-gradient/20">
                {Icon ? <Icon className="text-cyanGlow" size={34} /> : null}
              </div>
              <h3 className="font-bold text-white">{title}</h3>
              <p className="mt-2 text-sm text-slate-300">{org} · {date}</p>
              {link ? (
                <a className="btn-secondary mt-4 flex w-full items-center justify-center gap-2" href={link} target="_blank" rel="noopener noreferrer" aria-label={`Verify certificate for ${title}`}>
                  <ExternalLink size={16} /> Verify Certificate
                </a>
              ) : (
                <button className="btn-secondary mt-4 w-full" type="button">
                  <ExternalLink size={16} /> Verify Certificate
                </button>
              )}
            </motion.article>
          ))}
        </div>
      </div>
      <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {achievements.map(([title, value, Icon]) => (
          <div className="glass-panel interactive-card flex items-center gap-4 p-5" key={title}>
            <Icon className="text-violetGlow" size={25} />
            <div>
              <p className="font-bold text-white">{title}</p>
              <p className="text-sm text-slate-300">{value}</p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

function EducationAndProfiles() {
  return (
    <Section id="education" eyebrow="Education & Coding Profiles" title="Academic Journey">
      <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="glass-panel p-6 sm:p-8">
          <BookOpen className="text-cyanGlow" size={28} />
          <div className="mt-4 space-y-4">
            {education.map((item) => (
              <div key={`${item.university}-${item.graduation}`}>
                <h3 className="text-xl font-bold text-white">{item.university}</h3>
                <p className="mt-1 text-slate-300">{item.degree}</p>
                <div className="mt-3 grid gap-3 sm:grid-cols-2">
                  <div className="stat-box"><span>{item.metricLabel || "CGPA"}</span><strong>{item.cgpa}</strong></div>
                  <div className="stat-box"><span>{item.graduationLabel || "Graduation"}</span><strong>{item.graduation}</strong></div>
                </div>
                {item.coursework ? (
                  <div className="mt-4 flex flex-wrap gap-2">
                    {item.coursework.map((course) => (
                      <span className="tag" key={course}>{course}</span>
                    ))}
                  </div>
                ) : null}
              </div>
            ))}
          </div>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {profiles.map(([name, primary, secondary, Icon, link]) => (
            <motion.a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-panel interactive-card p-5"
              key={name}
              whileHover={{ y: -5 }}
            >
              <Icon className="text-cyanGlow" size={26} />
              <h3 className="mt-4 font-bold text-white">{name}</h3>
              <p className="mt-2 text-sm text-slate-300">{primary}</p>
              <p className="text-sm text-slate-400">{secondary}</p>
              {name === "GitHub" && <div className="mt-4 grid grid-cols-12 gap-1">{Array.from({ length: 48 }).map((_, i) => <span className={`h-3 rounded-sm ${i % 5 === 0 ? "bg-cyanGlow" : i % 3 === 0 ? "bg-blueGlow/70" : "bg-white/10"}`} key={i} />)}</div>}
            </motion.a>
          ))}
        </div>
      </div>
    </Section>
  );
}

function Contact() {
  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm();
  const [status, setStatus] = useState("");
  const [copiedEmail, setCopiedEmail] = useState(false);

  useEffect(() => {
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
    if (publicKey) {
      emailjs.init({ publicKey });
    }
  }, []);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(student.email);
      setCopiedEmail(true);
      setStatus("Email copied to clipboard.");
      window.setTimeout(() => setCopiedEmail(false), 1800);
    } catch {
      setStatus("Unable to copy email automatically.");
    }
  };

  const onSubmit = async (data) => {
    setStatus("");
    try {
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      if (serviceId && templateId && publicKey) {
        const templateParams = {
          from_name: data.name,
          from_email: data.email,
          subject: data.subject,
          message: data.message,
          to_email: student.email
        };

        await emailjs.send(serviceId, templateId, templateParams, { publicKey });
        setStatus("Message sent successfully. Thanks for reaching out.");
        reset();
      } else {
        const mailtoLink = `mailto:${student.email}?subject=${encodeURIComponent(`Portfolio Contact: ${data.subject}`)}&body=${encodeURIComponent(`Name: ${data.name}\nEmail: ${data.email}\n\nMessage:\n${data.message}`)}`;
        window.location.href = mailtoLink;
        setStatus("Your email client has been opened with your message ready to send.");
      }
    } catch {
      const fallbackLink = `mailto:${student.email}?subject=${encodeURIComponent("Portfolio Contact")}&body=${encodeURIComponent(`Hello,\n\nI tried reaching out through the website form but it could not be sent automatically.\n\nPlease contact me directly.`)}`;
      window.location.href = fallbackLink;
      setStatus("The form could not be sent automatically. Your email client has been opened instead.");
    }
  };

  return (
    <Section id="contact" eyebrow="Contact" title="Let’s build something meaningful">
      <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
        <div className="space-y-4">
          {[
            [Mail, student.email, `mailto:${student.email}`, true],
            [Phone, student.phone, `tel:${student.phone}`, false],
            [MapPin, student.location, "#contact", false],
            [Github, "https://github.com/suma-damarasingu", "https://github.com/suma-damarasingu", true]
          ].map(([Icon, text, hrefValue, isExternal]) => {
            const content = (
              <div className="glass-panel interactive-card flex items-center gap-4 p-5" key={text}>
                <span className="grid size-11 place-items-center rounded-lg bg-cyanGlow/10 text-cyanGlow"><Icon size={21} /></span>
                <span className="text-slate-200">{text}</span>
              </div>
            );

            if (isExternal && hrefValue) {
              return (
                <a href={hrefValue} target="_blank" rel="noopener noreferrer" key={text}>
                  {content}
                </a>
              );
            }

            if (text === student.email) {
              return (
                <button type="button" className="w-full text-left" onClick={copyEmail} key={text} aria-label="Copy email address">
                  {content}
                </button>
              );
            }

            return content;
          })}
        </div>
        <form className="glass-panel grid gap-4 p-6 sm:p-8" onSubmit={handleSubmit(onSubmit)}>
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="field">Name<input {...register("name", { required: true })} /></label>
            <label className="field">Email<input type="email" {...register("email", { required: true })} /></label>
          </div>
          <label className="field">Subject<input {...register("subject", { required: true })} /></label>
          <label className="field">Message<textarea rows="5" {...register("message", { required: true })} /></label>
          {Object.keys(errors).length > 0 && <p className="text-sm text-rose-300">Please complete all fields before sending.</p>}
          {status && <p className="text-sm text-cyanGlow" aria-live="polite">{status}</p>}
          <button className="btn-primary w-fit" disabled={isSubmitting}>
            <Send size={18} /> {isSubmitting ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </Section>
  );
}

function ResumeModal({ open, onClose }) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div className="fixed inset-0 z-[60] grid place-items-center bg-black/70 p-4 backdrop-blur-sm" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
          <motion.div className="glass-panel h-[82vh] w-full max-w-4xl overflow-hidden p-4" initial={{ y: 28, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: 28, opacity: 0 }}>
            <div className="mb-3 flex items-center justify-between">
              <h3 className="font-bold text-white">Resume Preview</h3>
              <button className="icon-btn" onClick={onClose} aria-label="Close resume preview"><X size={18} /></button>
            </div>
            <iframe src={student.resume} title="Resume preview" className="h-[calc(100%-3rem)] w-full rounded-lg bg-white" />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function FloatingControls({ onResume }) {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 500);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col gap-3">
      <button className="icon-btn shadow-glow" onClick={onResume} aria-label="Preview resume"><Eye size={18} /></button>
      {showTop && <button className="icon-btn shadow-glow" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} aria-label="Scroll to top"><ArrowUp size={18} /></button>}
    </div>
  );
}

function LoadingScreen() {
  return (
    <motion.div className="fixed inset-0 z-[80] grid place-items-center bg-ink" exit={{ opacity: 0 }} transition={{ duration: 0.45 }}>
      <div className="text-center">
        <div className="mx-auto mb-5 size-14 rounded-xl bg-premium-gradient animate-float" />
        <p className="font-semibold text-white">Loading portfolio</p>
      </div>
    </motion.div>
  );
}

function App() {
  const [loading, setLoading] = useState(true);
  const [theme, setTheme] = useState("dark");
  const [resumeOpen, setResumeOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 24 });

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 850);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    document.documentElement.classList.toggle("light", theme === "light");
  }, [theme]);

  return (
    <div className="site-shell min-h-screen bg-ink text-slate-100 selection:bg-cyanGlow/30">
      <AnimatePresence>{loading && <LoadingScreen />}</AnimatePresence>
      <motion.div className="fixed left-0 right-0 top-0 z-[70] h-1 origin-left bg-premium-gradient" style={{ scaleX }} />
      <Navbar theme={theme} setTheme={setTheme} />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <EducationAndProfiles />
        <Contact />
      </main>
      <footer className="footer-shell border-t border-white/10 px-4 py-12 text-center text-sm text-slate-400">
        <div className="mb-4 flex flex-wrap justify-center gap-4">
          {navItems.map((item) => <a className="hover:text-white" href={`#${item}`} key={item}>{item}</a>)}
        </div>
        <p>Designed & Developed by {student.name}</p>
        <p className="mt-1">Copyright © 2026. All rights reserved.</p>
      </footer>
      <FloatingControls onResume={() => setResumeOpen(true)} />
      <ResumeModal open={resumeOpen} onClose={() => setResumeOpen(false)} />
    </div>
  );
}

export default App;
