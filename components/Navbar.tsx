'use client';

import { useState, useEffect } from 'react';
import { 
  Menu, 
  X, 
  Sparkles, 
  ChevronRight, 
  Download, 
  Home, 
  User, 
  Code, 
  Briefcase, 
  Mail,
  FileText,
  ExternalLink,
  Award
} from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState('');
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      // Update active link based on scroll position
      const sections = ['home', 'about', 'projects', 'certificates', 'skills', 'contact'];
      const scrollPosition = window.scrollY + 150;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveLink(section);
            break;
          }
        }
      }
    };

    // Smooth scroll for anchor links
    const handleLinkClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const link = target.closest('a');
      
      if (link && link.hash && link.hash.startsWith('#')) {
        e.preventDefault();
        const element = document.querySelector(link.hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
          setIsOpen(false);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    document.addEventListener('click', handleLinkClick);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('click', handleLinkClick);
    };
  }, []);

  const handleResumeClick = () => {
    window.open('/atulfullstackresume.pdf', '_blank');
  };

  const navLinks = [
    { href: '#home', label: 'Home', icon: Home, gradient: 'from-blue-400 to-purple-400' },
    { href: '#about', label: 'About', icon: User, gradient: 'from-purple-400 to-pink-400' },
    { href: '#projects', label: 'Projects', icon: Briefcase, gradient: 'from-pink-400 to-blue-400' },
    { href: '#certificates', label: 'Certificates', icon: Award, gradient: 'from-blue-400 to-purple-400' },
    { href: '#skills', label: 'Skills', icon: Code, gradient: 'from-purple-400 to-pink-400' },
    { href: '#contact', label: 'Contact', icon: Mail, gradient: 'from-pink-400 to-blue-400' },
  ];

  // Fixed particles for navbar background
  const particles = mounted && scrolled ? [...Array(5)].map((_, i) => {
    const top = (i * 23 + 7) % 90 + 5;
    const left = (i * 17 + 13) % 90 + 5;
    const duration = 5 + i * 2;
    return { top, left, duration, key: i };
  }) : [];

  return (
    <>
      <nav className={`
        fixed top-0 left-0 right-0 z-50 transition-all duration-700
        ${scrolled 
          ? 'py-3 md:py-3 backdrop-blur-xl bg-[#0A0F1C]/80 shadow-2xl shadow-black/30 border-b border-slate-800/50' 
          : 'py-5 md:py-5 bg-transparent'
        }
      `}>
        {/* Animated gradient background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className={`
            absolute inset-0 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-pink-500/5
            transition-opacity duration-1000
            ${scrolled ? 'opacity-100' : 'opacity-0'}
          `} />
          
          {/* Floating particles - only when scrolled */}
          {particles.map((p) => (
            <div
              key={p.key}
              className="absolute w-0.5 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"
              style={{
                top: `${p.top}%`,
                left: `${p.left}%`,
                animation: `float ${p.duration}s ease-in-out infinite`,
                opacity: 0.15
              }}
            />
          ))}
        </div>

        {/* Bottom border gradient */}
        <div className={`
          absolute bottom-0 left-0 right-0 h-px 
          bg-gradient-to-r from-transparent via-blue-500/50 via-purple-500/50 to-transparent
          transition-opacity duration-700
          ${scrolled ? 'opacity-100' : 'opacity-0'}
        `} />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="flex justify-between items-center">
            {/* Clean Signature Logo - No subtitle, no green tick */}
            <a 
              href="#home"
              className="group relative block"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              {/* Hover glow effect */}
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-full opacity-0 group-hover:opacity-100 blur-xl transition-all duration-500" />
              
              <div className="relative">
                <span className={`
                  text-2xl md:text-3xl font-bold transition-all duration-300
                  ${scrolled ? 'tracking-normal' : 'tracking-wide'}
                `} style={{ 
                  fontFamily: "'Dancing Script', 'cursive', 'sans-serif'",
                }}>
                  <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 text-transparent bg-clip-text bg-[length:200%_100%] animate-gradient">
                    Atul Jha
                  </span>
                </span>
              </div>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="relative group/menu">
                {/* Background blur card */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 rounded-2xl blur-xl opacity-0 group-hover/menu:opacity-100 transition-opacity duration-500" />
                
                <div className="relative backdrop-blur-xl bg-[#0D1424]/40 rounded-2xl border border-slate-800/50 p-1.5">
                  <div className="flex items-center gap-1">
                    {navLinks.map((link) => (
                      <a
                        key={link.href}
                        href={link.href}
                        onMouseEnter={() => setHoveredLink(link.label)}
                        onMouseLeave={() => setHoveredLink(null)}
                        className="relative group/link"
                      >
                        {/* Active/Highlight background */}
                        <div className={`
                          absolute inset-0 rounded-xl transition-all duration-300
                          ${activeLink === link.label.toLowerCase() 
                            ? `bg-gradient-to-r ${link.gradient} opacity-20` 
                            : 'opacity-0 group-hover/link:opacity-10'
                          }
                        `} />
                        
                        <div className="relative px-3 py-2 rounded-xl flex items-center gap-1.5">
                          {/* Icon */}
                          <div className={`
                            w-4 h-4 transition-all duration-300
                            ${activeLink === link.label.toLowerCase() 
                              ? 'text-white' 
                              : 'text-slate-400 group-hover/link:text-white'
                            }
                          `}>
                            <link.icon className="w-full h-full" />
                          </div>
                          
                          {/* Label */}
                          <span className={`
                            text-sm font-medium transition-all duration-300
                            ${activeLink === link.label.toLowerCase() 
                              ? 'text-white' 
                              : 'text-slate-400 group-hover/link:text-white'
                            }
                          `}>
                            {link.label}
                          </span>

                          {/* Active indicator */}
                          {activeLink === link.label.toLowerCase() && (
                            <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-gradient-to-r from-blue-400 to-purple-400" />
                          )}
                        </div>
                      </a>
                    ))}

                    {/* Resume Button */}
                    <button 
                      onClick={handleResumeClick}
                      className="ml-2 relative group/btn"
                    >
                      <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-xl opacity-0 group-hover/btn:opacity-100 transition-opacity duration-500 blur" />
                      <div className="relative px-4 py-2 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 overflow-hidden">
                        <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700" />
                        <span className="text-sm font-medium text-white flex items-center gap-2">
                          <FileText className="w-3.5 h-3.5" />
                          Resume
                        </span>
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden relative w-11 h-11 rounded-xl bg-[#0D1424]/50 backdrop-blur-xl border border-slate-800 hover:border-purple-500/50 transition-all duration-300 group"
              aria-label="Toggle menu"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity" />
              {isOpen ? (
                <X className="w-5 h-5 text-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
              ) : (
                <Menu className="w-5 h-5 text-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
              )}
            </button>
          </div>

          {/* Mobile Menu */}
          <div className={`
            md:hidden fixed inset-x-4 top-20
            transition-all duration-500 transform
            ${isOpen 
              ? 'opacity-100 translate-y-0 scale-100' 
              : 'opacity-0 -translate-y-10 scale-95 pointer-events-none'
            }
          `}>
            <div className="relative">
              {/* Background */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-3xl blur-xl" />
              <div className="absolute inset-0 backdrop-blur-xl bg-[#0A0F1C]/95 rounded-3xl border border-slate-800/50" />
              
              {/* Animated border */}
              <div className="absolute inset-0 rounded-3xl p-[1px] bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-20" />
              
              <div className="relative p-5 space-y-2">
                {navLinks.map((link, index) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className={`
                      group flex items-center gap-3 px-4 py-3 rounded-xl
                      transition-all duration-300
                      ${activeLink === link.label.toLowerCase() 
                        ? 'bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 text-white' 
                        : 'text-slate-400 hover:bg-slate-800/50'
                      }
                    `}
                    style={{
                      animation: isOpen ? `slideIn 0.4s ease-out ${index * 0.1}s forwards` : 'none',
                      opacity: 0,
                      transform: 'translateX(-10px)'
                    }}
                  >
                    <div className={`
                      w-9 h-9 rounded-lg bg-gradient-to-r ${link.gradient} 
                      flex items-center justify-center
                    `}>
                      <link.icon className="w-4 h-4 text-white" />
                    </div>

                    <div className="flex-1">
                      <div className="text-sm font-medium">{link.label}</div>
                    </div>

                    <ChevronRight className={`
                      w-4 h-4 transition-all duration-300
                      ${activeLink === link.label.toLowerCase() 
                        ? 'opacity-100 translate-x-0 text-white' 
                        : 'opacity-0 -translate-x-2'
                      }
                      group-hover:opacity-100 group-hover:translate-x-0
                    `} />
                  </a>
                ))}

                {/* Mobile Resume Button */}
                <button 
                  onClick={handleResumeClick}
                  className="w-full mt-4 group/btn relative overflow-hidden rounded-xl"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-500" />
                  <div className="relative px-5 py-3 bg-[#0D1424] rounded-xl border border-slate-800 group-hover/btn:border-transparent transition-all duration-300">
                    <span className="text-white text-sm font-medium flex items-center justify-center gap-2">
                      <FileText className="w-4 h-4" />
                      Resume
                    </span>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Spacer */}
      <div id="home" className="h-0" />

      {/* Add Google Font for signature style */}
      <link href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400;700&display=swap" rel="stylesheet" />

      <style jsx>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(-10px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0) translateX(0); }
          50% { transform: translateY(-8px) translateX(4px); }
        }
        
        .animate-gradient {
          animation: gradient 3s ease infinite;
        }
      `}</style>
    </>
  );
}