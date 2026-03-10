/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, Github, Instagram, Linkedin, Twitter, LayoutGrid, ShieldCheck, Zap, Menu, X, Mail, Phone, MapPin, Send } from 'lucide-react';
import proyectosData from './proyectos.json';

interface Proyecto {
  id: string;
  titulo: string;
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
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => scrollToSection('home')}>
          <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center font-bold text-white">N</div>
          <span className="font-display font-bold text-xl tracking-tight">NEXATECH</span>
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
        className="w-full h-full object-cover rounded-2xl shadow-lg transition-transform duration-700 group-hover:scale-105"
        referrerPolicy="no-referrer"
      />
    </div>
    <div className="p-8 bg-white text-zinc-900">
      <div className="flex items-center justify-between mb-2">
        <span className="text-[10px] font-bold uppercase tracking-widest text-accent">Diseño de Plataforma</span>
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
                src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&h=1000&q=80"
                alt="Tecnología e Innovación"
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
                src="https://picsum.photos/seed/nexa-about/800/1000"
                alt="Nosotros"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-accent rounded-full flex items-center justify-center animate-pulse">
              <div className="w-24 h-24 border-2 border-dashed border-white/30 rounded-full" />
            </div>
          </div>

          <div>
            <span className="text-accent text-xs font-bold uppercase tracking-widest mb-4 block">Sobre Nosotros</span>
            <h2 className="text-4xl md:text-5xl font-bold font-display mb-8 leading-tight">
              ESTAMOS DISPONIBLES PARA <span className="text-accent">PROYECTOS DE DISEÑO UI/UX</span>
            </h2>
            <p className="text-zinc-400 mb-10 leading-relaxed">
              Especialistas en el desarrollo de plataformas robustas y escalables. Nuestro enfoque combina la precisión técnica con una estética moderna y funcional.
            </p>

            <div className="grid grid-cols-3 gap-8 mb-12">
              {[
                { label: 'Reseñas en Google', value: '280+' },
                { label: 'Años de Experiencia', value: '15+' },
                { label: 'Premios Ganados', value: '49+' },
              ].map((stat, i) => (
                <div key={i} className="glass-panel p-6 text-center">
                  <div className="text-2xl font-bold font-display mb-1">{stat.value}</div>
                  <div className="text-[10px] text-zinc-500 uppercase tracking-wider">{stat.label}</div>
                </div>
              ))}
            </div>

            <button className="btn-primary px-10 py-4">Contáctanos</button>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <span className="text-accent text-xs font-bold uppercase tracking-widest mb-4 block">Mi Trabajo</span>
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

      {/* Services Section (Placeholder for functionality) */}
      <section id="services" className="py-32 px-6 bg-white/[0.01]">
        <div className="max-w-7xl mx-auto text-center">
          <span className="text-accent text-xs font-bold uppercase tracking-widest mb-4 block">Nuestros Servicios</span>
          <h2 className="text-4xl md:text-5xl font-bold font-display mb-12">SOLUCIONES INTEGRALES</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'Desarrollo Web', desc: 'Plataformas modernas y escalables.', icon: LayoutGrid },
              { title: 'Seguridad Digital', desc: 'Protección avanzada de datos.', icon: ShieldCheck },
              { title: 'Optimización', desc: 'Rendimiento de alto impacto.', icon: Zap },
            ].map((service, i) => (
              <div key={i} className="glass-panel p-10 hover:border-accent/50 transition-colors group">
                <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center text-accent mb-6 mx-auto group-hover:scale-110 transition-transform">
                  <service.icon size={32} />
                </div>
                <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                <p className="text-zinc-400 text-sm leading-relaxed">{service.desc}</p>
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
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center font-bold text-white">N</div>
            <span className="font-display font-bold text-xl tracking-tight">NEXATECH</span>
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
