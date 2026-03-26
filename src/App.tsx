/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, Github, Instagram, Linkedin, Twitter, LayoutGrid, ShieldCheck, Zap, Menu, X, Mail, Phone, MapPin, Send, Code, Cpu, BarChart3, Lightbulb, Settings, ChevronRight, CheckCircle2 } from 'lucide-react';
import proyectosData from './proyectos.json';

interface Proyecto {
  id: string;
  titulo: string;
  tipo: string;
  descripcion: string;
  tecnologias: string[];
  url: string;
  imagen: string;
}

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 px-6 py-4 md:py-6 bg-bg/80 backdrop-blur-md border-b border-white/5">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-3 cursor-pointer" onClick={() => scrollToSection('home')}>
          <img src="/logos divididos-3.png" alt="Nexatech Logo" className="h-16 w-auto object-contain" />
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 lg:gap-10">
          <button onClick={() => scrollToSection('home')} className="nav-link">Inicio</button>
          <button onClick={() => scrollToSection('about')} className="nav-link">Nosotros</button>
          <button onClick={() => scrollToSection('projects')} className="nav-link">Proyectos</button>
          <button onClick={() => scrollToSection('services')} className="nav-link">Servicios</button>
          <button onClick={() => scrollToSection('contact')} className="nav-link">Contacto</button>
        </div>

        <div className="flex items-center gap-4">
          <button onClick={() => scrollToSection('contact')} className="hidden sm:block btn-primary">Hablemos</button>
          <button
            className="md:hidden text-white p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-full left-0 w-full bg-bg border-b border-white/10 p-6 flex flex-col gap-4 md:hidden"
        >
          <button onClick={() => scrollToSection('home')} className="nav-link py-2 text-left">Inicio</button>
          <button onClick={() => scrollToSection('about')} className="nav-link py-2 text-left">Nosotros</button>
          <button onClick={() => scrollToSection('projects')} className="nav-link py-2 text-left">Proyectos</button>
          <button onClick={() => scrollToSection('services')} className="nav-link py-2 text-left">Servicios</button>
          <button onClick={() => scrollToSection('contact')} className="nav-link py-2 text-left">Contacto</button>
          <button onClick={() => scrollToSection('contact')} className="btn-primary w-full mt-4">Hablemos</button>
        </motion.div>
      )}
    </nav>
  );
};

const LogoMarquee = () => (
  <div className="py-12 border-y border-white/5 overflow-hidden bg-white/[0.02]">
    <div className="marquee-content">
      {[1, 2, 3, 4, 5, 6].map((i) => (
        <React.Fragment key={i}>
          <div className="flex items-center gap-2 opacity-30 grayscale hover:grayscale-0 hover:opacity-100 transition-all cursor-pointer">
            <div className="w-6 h-6 bg-white rounded-full" />
            <span className="font-display font-bold text-lg tracking-tighter">LOGOIPSUM</span>
          </div>
          <div className="flex items-center gap-2 opacity-30 grayscale hover:grayscale-0 hover:opacity-100 transition-all cursor-pointer">
            <div className="w-6 h-6 bg-white rotate-45" />
            <span className="font-display font-bold text-lg tracking-tighter">LOGOIPSUM</span>
          </div>
        </React.Fragment>
      ))}
    </div>
  </div>
);

const ProjectCard: React.FC<{ proyecto: Proyecto }> = ({ proyecto }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="project-card group"
  >
    <div className="relative aspect-[4/3] overflow-hidden bg-zinc-100 p-4">
      <img
        src={proyecto.imagen}
        alt={proyecto.titulo}
        className="w-full h-full object-contain rounded-2xl shadow-lg transition-transform duration-700 group-hover:scale-105"
        referrerPolicy="no-referrer"
      />
    </div>
    <div className="p-8 bg-white text-zinc-900">
      <div className="flex items-center justify-between mb-2">
        <span className="text-[10px] font-bold uppercase tracking-widest text-accent">{proyecto.tipo}</span>
        <a
          href={proyecto.url}
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 bg-accent rounded-full flex items-center justify-center text-white transition-transform group-hover:rotate-45"
        >
          <ArrowUpRight size={20} />
        </a>
      </div>
      <h3 className="text-2xl font-bold font-display mb-2">{proyecto.titulo}</h3>
      <p className="text-zinc-500 text-sm leading-relaxed">{proyecto.descripcion}</p>
    </div>
  </motion.div>
);

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section id="home" className="relative pt-32 md:pt-48 pb-20 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="z-10 text-center lg:text-left"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-xs font-bold uppercase tracking-widest mb-6">
              Portafolio Nexatech
            </span>
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold font-display leading-[1.1] lg:leading-[0.9] mb-8 uppercase">
              BIENVENIDOS A <br />
              <span className="text-accent">NEXATECH</span>
            </h1>
            <p className="text-zinc-400 text-base md:text-lg max-w-md mx-auto lg:mx-0 mb-10 leading-relaxed">
              Transformamos ideas en experiencias digitales excepcionales. Listado de aplicativos y soluciones técnicas de alto impacto.
            </p>
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6">
              <button className="btn-primary px-10 py-4">Contáctanos</button>
              <div className="flex gap-4">
                {[Twitter, Instagram, Linkedin].map((Icon, i) => (
                  <a key={i} href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-zinc-400 hover:bg-accent hover:text-white hover:border-accent transition-all">
                    <Icon size={18} />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative order-first lg:order-last"
          >
            <div className="relative z-10 rounded-[30px] md:rounded-[40px] overflow-hidden border-4 md:border-8 border-white/5 shadow-2xl max-w-lg mx-auto">
              <img
                src="/Bienvenidos.png"
                alt="Bienvenidos a Nexatech"
                className="w-full h-auto"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-10 -right-10 w-32 md:w-40 h-32 md:h-40 bg-accent/20 blur-[60px] md:blur-[80px] rounded-full" />
            <div className="absolute -bottom-10 -left-10 w-48 md:w-60 h-48 md:h-60 bg-blue-500/10 blur-[80px] md:blur-[100px] rounded-full" />
          </motion.div>
        </div>
      </section>

      <LogoMarquee />

      {/* About Section */}
      <section id="about" className="py-32 px-6 bg-white/[0.01]">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
          <div className="relative">
            <div className="aspect-[4/5] rounded-[40px] overflow-hidden border-8 border-white/5">
              <img
                src="/ingenieria.png"
                alt="Ingeniería Nexatech"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-accent rounded-full flex items-center justify-center animate-pulse">
              <div className="w-24 h-24 border-2 border-dashed border-white/30 rounded-full" />
            </div>
          </div>

          <div>
            <span className="text-accent text-xs font-bold uppercase tracking-widest mb-4 block">Quiénes Somos</span>
            <h2 className="text-4xl md:text-5xl font-bold font-display mb-8 leading-tight uppercase">
              Ingeniería + Tecnología para <span className="text-accent">Empresas que Exigen Control</span>
            </h2>
            <p className="text-zinc-400 mb-10 leading-relaxed text-lg">
              En <span className="text-white font-bold">Nexatech</span> desarrollamos software empresarial a la medida que transforma la manera en que las organizaciones gestionan sus operaciones. Combinamos experiencia en ingeniería y gestión empresarial para crear soluciones digitales.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
              {[
                'Visibilidad en tiempo real',
                'Control operativo y financiero',
                'Trazabilidad completa de la información',
                'Automatización de procesos críticos',
              ].map((feature, i) => (
                <div key={i} className="flex items-center gap-3 bg-white/5 p-4 rounded-2xl border border-white/10 group hover:border-accent/50 transition-colors">
                  <CheckCircle2 size={20} className="text-accent shrink-0" />
                  <span className="text-sm font-medium text-zinc-300">{feature}</span>
                </div>
              ))}
            </div>

            <div className="mb-12">
              <p className="text-zinc-500 italic text-sm border-l-2 border-accent pl-6 py-2">
                "No desarrollamos aplicaciones genéricas. Diseñamos plataformas adaptadas a la realidad de tu empresa."
              </p>
            </div>

            <button onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })} className="btn-primary px-10 py-4">Hablemos ahora</button>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <span className="text-accent text-xs font-bold uppercase tracking-widest mb-4 block">Aplicativos Desarrollados</span>
              <h2 className="text-4xl md:text-5xl font-bold font-display">PROYECTOS RECIENTES</h2>
            </div>
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-accent" />
              <div className="w-3 h-3 rounded-full bg-white/10" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {proyectosData.map((proyecto) => (
              <ProjectCard key={proyecto.id} proyecto={proyecto} />
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-32 px-6 bg-white/[0.01]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-accent text-xs font-bold uppercase tracking-widest mb-4 block">Nuestros Servicios</span>
            <h2 className="text-4xl md:text-5xl font-bold font-display uppercase">Soluciones Integrales</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Desarrollo de Software a la Medida',
                desc: 'Soluciones digitales exclusivas diseñadas para resolver las necesidades específicas de tu arquitectura empresarial.',
                icon: Code
              },
              {
                title: 'Automatización de Procesos',
                desc: 'Optimizamos tu flujo de trabajo eliminando tareas manuales mediante integraciones e inteligencia operativa.',
                icon: Cpu
              },
              {
                title: 'Dashboards y Analítica',
                desc: 'Transformamos datos complejos en paneles visuales estratégicos para decisiones basadas en información real.',
                icon: BarChart3
              },
              {
                title: 'Consultoría en Transformación Digital',
                desc: 'Estrategia y acompañamiento técnico para modernizar tu empresa y adoptar una cultura tecnológica de vanguardia.',
                icon: Lightbulb
              },
              {
                title: 'Soporte y Evolución de Sistemas',
                desc: 'Mantenimiento preventivo, soporte técnico especializado y mejora continua para tus plataformas digitales.',
                icon: Settings
              },
            ].map((service, i) => (
              <div key={i} className="glass-panel p-10 hover:border-accent/50 transition-all group flex flex-col h-full">
                <div className="w-14 h-14 bg-accent/10 rounded-2xl flex items-center justify-center text-accent mb-8 group-hover:scale-110 transition-transform border border-accent/20">
                  <service.icon size={28} />
                </div>
                <h3 className="text-xl font-bold mb-4 font-display leading-tight">{service.title}</h3>
                <p className="text-zinc-400 text-sm leading-relaxed mb-8 flex-grow">{service.desc}</p>
                <div className="flex items-center gap-2 text-accent text-xs font-bold uppercase tracking-widest cursor-pointer group/link">
                  Solicitar Diagnóstico <ChevronRight size={14} className="group-hover/link:translate-x-1 transition-transform" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-accent text-xs font-bold uppercase tracking-widest mb-4 block">Contáctanos</span>
              <h2 className="text-4xl md:text-5xl font-bold font-display mb-8 leading-tight uppercase">
                ¿Listo para Optimizar <br /> tu Empresa?
              </h2>
              <p className="text-zinc-400 text-lg mb-12 max-w-lg leading-relaxed">
                Analizamos tus procesos y diseñamos una solución digital personalizada para tu organización. Solicita tu Diagnóstico Digital sin costo.
              </p>

              <div className="space-y-8">
                {[
                  { icon: Mail, label: 'Email', value: 'proyectos@nexatech.com.co' },
                  { icon: Phone, label: 'Teléfono', value: '+57 3152560715 / +57 300 3719229' },
                  { icon: MapPin, label: 'Oficina', value: 'Manga calle 25 Nº 23-90\nCartagena, Colombia' },
                ].map((item, i) => (
                  <div key={i} className="flex gap-6 items-start">
                    <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center text-accent shrink-0 border border-white/10">
                      <item.icon size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-white text-lg mb-1">{item.label}</h4>
                      <p className="text-zinc-400 whitespace-pre-line leading-relaxed">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Right Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-[40px] p-8 md:p-12 shadow-2xl"
            >
              <h3 className="text-2xl font-bold text-zinc-900 mb-8">Solicita tu diagnóstico</h3>
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-wider text-zinc-500 ml-1">Nombre Completo</label>
                    <input
                      type="text"
                      placeholder="Juan Pérez"
                      className="w-full bg-zinc-100 border-none rounded-2xl px-6 py-4 text-zinc-900 placeholder:text-zinc-400 focus:ring-2 focus:ring-accent outline-none transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-wider text-zinc-500 ml-1">Correo Corporativo</label>
                    <input
                      type="email"
                      placeholder="juan@empresa.com"
                      className="w-full bg-zinc-100 border-none rounded-2xl px-6 py-4 text-zinc-900 placeholder:text-zinc-400 focus:ring-2 focus:ring-accent outline-none transition-all"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-wider text-zinc-500 ml-1">Cuéntanos sobre tu necesidad</label>
                  <textarea
                    rows={4}
                    placeholder="Me interesa un software para..."
                    className="w-full bg-zinc-100 border-none rounded-2xl px-6 py-4 text-zinc-900 placeholder:text-zinc-400 focus:ring-2 focus:ring-accent outline-none transition-all resize-none"
                  ></textarea>
                </div>

                <button type="submit" className="w-full btn-primary py-5 text-base flex items-center justify-center gap-3">
                  Agendar Evaluación <Send size={20} />
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="flex items-center gap-3">
            <img src="/logos divididos-3.png" alt="Nexatech Logo" className="h-12 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity" />
          </div>
          <p className="text-zinc-500 text-sm">
            © {new Date().getFullYear()} Nexatech. Todos los derechos reservados.
          </p>
          <div className="flex gap-8">
            {[Twitter, Github, Linkedin].map((Icon, i) => (
              <a key={i} href="#" className="text-zinc-400 hover:text-white transition-colors">
                <Icon size={20} />
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
