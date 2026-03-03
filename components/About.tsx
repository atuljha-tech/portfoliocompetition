'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import { 
  Sparkles,
  Award,
  Shield,
  Users,
  ChevronRight,
  Brain,
  Rocket,
  GraduationCap,
  Medal,
  BookOpen,
  Globe,
  Github,
  Linkedin,
  Mail,
  Quote,
  Compass,
  Star
} from 'lucide-react'

export default function About() {
  const sectionRef = useRef(null)
  const [rotatingText, setRotatingText] = useState(0)
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 })
  
  // Rotating text effect
  useEffect(() => {
    const interval = setInterval(() => {
      setRotatingText((prev) => (prev + 1) % 3)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  const achievements = [
    { icon: GraduationCap, value: '8.9 CGPA', label: '1st Year', color: 'blue', emoji: '📚', description: 'Academic Excellence' },
    { icon: Medal, value: '95%', label: '10th Grade', color: 'purple', emoji: '🏆', description: 'School Topper' },
    { icon: Award, value: '91%', label: '12th Grade', color: 'pink', emoji: '🎓', description: 'Science Stream' },
    { icon: Users, value: '2028', label: 'Graduation', color: 'blue', emoji: '🚀', description: 'Batch of 2028' },
  ]

  const education = [
    {
      degree: 'B.Tech Computer Science',
      institution: 'Heritage Institute of Technology',
      year: '2024 - 2028',
      score: '8.9 CGPA',
      icon: GraduationCap,
      color: 'from-blue-400 to-purple-400',
      highlights: ['Blockchain Specialization', 'IoT & Cybersecurity', 'Research Focus']
    },
    {
      degree: 'Class XII (Senior Secondary)',
      institution: 'National Gems High School',
      year: '2023',
      score: '91%',
      icon: BookOpen,
      color: 'from-purple-400 to-pink-400',
      highlights: ['Science Stream', 'Computer Science', 'Mathematics']
    },
    {
      degree: 'Class X (Secondary)',
      institution: 'National Gems High School',
      year: '2021',
      score: '95%',
      icon: BookOpen,
      color: 'from-pink-400 to-blue-400',
      highlights: ['Academic Excellence', 'Merit Scholar', 'Top Performer']
    }
  ]

  const journey = [
    {
      year: '2021',
      title: 'Discovered Coding',
      description: 'Wrote my first line of code in Python',
      icon: '💻',
      color: 'blue'
    },
    {
      year: '2023',
      title: 'Completed School',
      description: 'Graduated with 91% in Class XII',
      icon: '🎓',
      color: 'purple'
    },
    {
      year: '2024',
      title: 'Started B.Tech',
      description: 'Joined Heritage Institute of Technology',
      icon: '🚀',
      color: 'pink'
    },
    {
      year: '2025',
      title: 'Blockchain Explorer',
      description: 'Built first dApp and smart contracts',
      icon: '🔗',
      color: 'blue'
    }
  ]

  const philosophy = [
    {
      quote: "Code is poetry, but purpose is everything.",
      author: "— Atul Jha"
    },
    {
      quote: "Build things that matter, solve problems that exist.",
      author: "— Personal Mantra"
    },
    {
      quote: "The best way to predict the future is to create it.",
      author: "— Peter Drucker"
    }
  ]

  return (
    <section 
      ref={sectionRef}
      id="about"
      className="relative py-20 md:py-24 px-4 sm:px-6 overflow-hidden bg-gradient-to-b from-[#0A0F1C] via-[#0D1424] to-[#0A0F1C]"
    >
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 -left-20 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 -right-20 w-96 h-96 bg-purple-600/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-pink-600/5 rounded-full blur-3xl" />
        
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(139, 92, 246, 0.1) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header with unique animation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={isInView ? { scale: 1, opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-[#0D1424]/50 backdrop-blur-sm border border-slate-800 rounded-full mb-6"
          >
            <Sparkles className="w-3 h-3 md:w-4 md:h-4 text-purple-400" />
            <span className="text-xs font-mono tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
              INTRODUCTION
            </span>
          </motion.div>

          <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-4 tracking-tight">
            About
            <span className="relative inline-block ml-4">
              <span className="relative z-10 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 text-transparent bg-clip-text bg-[length:200%_100%] animate-gradient">
                Me
              </span>
              <motion.span 
                className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 rounded-full"
                initial={{ scaleX: 0 }}
                animate={isInView ? { scaleX: 1 } : {}}
                transition={{ delay: 0.8, duration: 0.8 }}
              />
            </span>
          </h2>
        </motion.div>

        {/* Introduction Card - Without Avatar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="relative group mb-16"
        >
          <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-3xl opacity-30 group-hover:opacity-50 blur-xl transition-opacity duration-700" />
          
          <div className="relative p-8 md:p-10 bg-[#0D1424]/90 backdrop-blur-sm rounded-3xl border border-slate-800/50 overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-40 h-40 bg-gradient-to-tr from-blue-500/10 to-purple-500/10 rounded-full blur-3xl" />
            
            <div className="relative">
              <div className="flex items-center gap-2 mb-3">
                <h3 className="text-2xl md:text-3xl font-bold text-white">Atul Jha</h3>
                <span className="px-3 py-1 bg-blue-500/10 text-blue-400 rounded-full text-xs border border-blue-500/20">
                  2nd Year CSE
                </span>
              </div>

              {/* Rotating text */}
              <div className="h-8 mb-4">
                <motion.p 
                  key={rotatingText}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.5 }}
                  className="text-sm md:text-base text-slate-300"
                >
                  <span className="text-purple-400 mr-2">✦</span>
                  {rotatingText === 0 && "Specializing in Blockchain, IoT & Cybersecurity"}
                  {rotatingText === 1 && "Building the future, one project at a time"}
                  {rotatingText === 2 && "Passionate about solving real-world problems"}
                </motion.p>
              </div>

              <p className="text-base md:text-lg text-slate-400 leading-relaxed mb-6 max-w-3xl">
                Computer Science student at Heritage Institute of Technology with a passion for 
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 font-semibold"> emerging technologies</span>. 
                I thrive on building innovative solutions that combine 
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 font-semibold"> creativity</span> with 
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-blue-400 font-semibold"> technical excellence</span>.
              </p>

              {/* Social links */}
              <div className="flex gap-3">
                <a href="https://github.com/atuljha-tech" target="_blank" rel="noopener noreferrer" className="group">
                  <div className="w-10 h-10 rounded-xl bg-slate-800/50 border border-slate-700 flex items-center justify-center hover:border-purple-500 transition-all duration-300 hover:scale-110 hover:bg-purple-500/10">
                    <Github className="w-4 h-4 text-slate-400 group-hover:text-white" />
                  </div>
                </a>
                <a href="https://linkedin.com/in/atuljha275" target="_blank" rel="noopener noreferrer" className="group">
                  <div className="w-10 h-10 rounded-xl bg-slate-800/50 border border-slate-700 flex items-center justify-center hover:border-pink-500 transition-all duration-300 hover:scale-110 hover:bg-pink-500/10">
                    <Linkedin className="w-4 h-4 text-slate-400 group-hover:text-white" />
                  </div>
                </a>
                <a href="mailto:atuljha275@gmail.com" className="group">
                  <div className="w-10 h-10 rounded-xl bg-slate-800/50 border border-slate-700 flex items-center justify-center hover:border-blue-500 transition-all duration-300 hover:scale-110 hover:bg-blue-500/10">
                    <Mail className="w-4 h-4 text-slate-400 group-hover:text-white" />
                  </div>
                </a>
              </div>

              {/* Quote badge */}
              <div className="hidden md:block absolute bottom-4 right-8 opacity-20">
                <Quote className="w-16 h-16 text-purple-400" />
              </div>
            </div>
          </div>
        </motion.div>

        {/* Achievement Cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16"
        >
          {achievements.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -5 }}
              className="group relative"
            >
              <div className={`absolute inset-0 bg-gradient-to-r ${item.color === 'blue' ? 'from-blue-500/20 to-purple-500/20' : item.color === 'purple' ? 'from-purple-500/20 to-pink-500/20' : 'from-pink-500/20 to-blue-500/20'} rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500`} />
              
              <div className="relative p-5 bg-[#0D1424]/50 backdrop-blur-sm rounded-2xl border border-slate-800/50 group-hover:border-transparent transition-all duration-300">
                <div className="flex items-start justify-between mb-3">
                  <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${item.color === 'blue' ? 'from-blue-500/20 to-purple-500/20' : item.color === 'purple' ? 'from-purple-500/20 to-pink-500/20' : 'from-pink-500/20 to-blue-500/20'} flex items-center justify-center`}>
                    <item.icon className={`w-5 h-5 text-${item.color}-400`} />
                  </div>
                  <span className="text-xl opacity-30 group-hover:opacity-100 transition-opacity">
                    {item.emoji}
                  </span>
                </div>
                
                <div className="text-2xl font-bold text-white mb-1">{item.value}</div>
                <div className="text-xs text-slate-500 mb-2">{item.label}</div>
                <div className="text-[10px] text-slate-600">{item.description}</div>

                {/* Decorative line */}
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Education & Journey Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {/* Education Timeline */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <h3 className="text-xl font-bold text-white flex items-center gap-2 mb-6">
              <GraduationCap className="w-5 h-5 text-purple-400" />
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text">Education</span>
            </h3>

            <div className="space-y-4">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  className="group relative"
                >
                  <div className={`absolute -inset-0.5 bg-gradient-to-r ${edu.color} rounded-2xl opacity-0 group-hover:opacity-20 blur transition-opacity duration-500`} />
                  
                  <div className="relative p-5 bg-[#0D1424]/30 backdrop-blur-sm rounded-2xl border border-slate-800/50 group-hover:border-transparent transition-all duration-300">
                    <div className="flex items-start gap-4">
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${edu.color} bg-opacity-20 flex items-center justify-center flex-shrink-0`}>
                        <edu.icon className="w-6 h-6 text-white" />
                      </div>
                      
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-1">
                          <h4 className="text-white font-semibold">{edu.degree}</h4>
                          <span className="text-xs px-2 py-1 bg-purple-500/10 text-purple-400 rounded-full border border-purple-500/20">
                            {edu.year}
                          </span>
                        </div>
                        <p className="text-sm text-slate-400 mb-2">{edu.institution}</p>
                        
                        <div className="flex items-center gap-2 mb-3">
                          <Star className="w-3 h-3 text-yellow-500" />
                          <span className="text-sm font-medium text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                            {edu.score}
                          </span>
                        </div>

                        <div className="flex flex-wrap gap-2">
                          {edu.highlights.map((highlight, i) => (
                            <span key={i} className="text-[10px] px-2 py-1 bg-slate-800 rounded-full text-slate-400">
                              {highlight}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Journey Timeline */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <h3 className="text-xl font-bold text-white flex items-center gap-2 mb-6">
              <Compass className="w-5 h-5 text-pink-400" />
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 text-transparent bg-clip-text">My Journey</span>
            </h3>

            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-400 via-purple-400 to-pink-400" />

              {journey.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.7 + index * 0.1 }}
                  className="relative flex items-start gap-4 mb-6 last:mb-0"
                >
                  <div className="relative z-10">
                    <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${item.color === 'blue' ? 'from-blue-500 to-purple-500' : item.color === 'purple' ? 'from-purple-500 to-pink-500' : 'from-pink-500 to-blue-500'} flex items-center justify-center`}>
                      <span className="text-xl">{item.icon}</span>
                    </div>
                  </div>

                  <div className="flex-1 pt-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-sm font-mono text-purple-400">{item.year}</span>
                      <ChevronRight className="w-3 h-3 text-slate-600" />
                    </div>
                    <h4 className="text-white font-medium mb-1">{item.title}</h4>
                    <p className="text-xs text-slate-500">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Philosophy Card - Full Width */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="group relative max-w-3xl mx-auto"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur" />
          
          <div className="relative p-6 bg-[#0D1424]/50 backdrop-blur-sm rounded-2xl border border-slate-800/50">
            <div className="flex items-center gap-3 mb-4">
              <Brain className="w-5 h-5 text-purple-400" />
              <h4 className="text-white font-semibold">Guiding Philosophy</h4>
            </div>
            
            <div className="relative">
              <Quote className="absolute -top-2 -left-2 w-6 h-6 text-purple-500/20" />
              <p className="text-sm text-slate-300 italic pl-6">
                {philosophy[rotatingText].quote}
              </p>
              <p className="text-xs text-slate-500 mt-2 text-right">
                {philosophy[rotatingText].author}
              </p>
            </div>
          </div>
        </motion.div>

        {/* Footer quote */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 1 }}
          className="text-center mt-12"
        >
          <p className="text-xs text-slate-700 font-mono tracking-wider">
            • BUILDER • LEARNER • INNOVATOR •
          </p>
        </motion.div>
      </div>

      <style jsx>{`
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient {
          animation: gradient 3s ease infinite;
        }
      `}</style>
    </section>
  )
}