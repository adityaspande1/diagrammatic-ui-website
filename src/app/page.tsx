'use client'

import { MainNav } from '@/components/navigation/main-nav'
import { Footer } from '@/components/footer'
import { motion, useScroll, useTransform } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, Code, Zap, Layers, Star, Users, Download, Play, Github, BarChart2 } from 'lucide-react'
import { useRef } from 'react'

const HeroBackground = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    {/* Main background gradients */}
    <div className="absolute -top-1/3 left-0 w-full h-full transform -translate-x-1/4">
      <motion.div
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 50,
          repeat: Infinity,
          ease: "linear",
        }}
        className="w-[800px] h-[800px] rounded-full bg-gradient-to-r from-purple-500/20 to-blue-500/20 dark:from-purple-500/30 dark:to-blue-500/30 blur-[100px]"
      />
    </div>
    <div className="absolute -bottom-1/3 right-0 w-full h-full transform translate-x-1/4">
      <motion.div
        animate={{
          rotate: -360,
        }}
        transition={{
          duration: 60,
          repeat: Infinity,
          ease: "linear",
        }}
        className="w-[600px] h-[600px] rounded-full bg-gradient-to-l from-blue-500/20 to-purple-500/20 dark:from-blue-500/30 dark:to-purple-500/30 blur-[100px]"
      />
    </div>
    
    {/* Animated grid */}
    <div className="absolute inset-0 bg-grid-white/[0.05] dark:bg-grid-white/[0.1] bg-[length:50px_50px] opacity-20 dark:opacity-30" />
    
    {/* Noise texture */}
    <div className="absolute inset-0 bg-noise opacity-25" />
    
    {/* Animated particles */}
    <div className="absolute inset-0 overflow-hidden">
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 md:w-2 md:h-2 rounded-full bg-primary-400 dark:bg-primary-300"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [
              Math.random() * -100, 
              Math.random() * 100,
              Math.random() * -100
            ],
            x: [
              Math.random() * -100, 
              Math.random() * 100,
              Math.random() * -100
            ],
            opacity: [0.2, 0.8, 0.2],
            scale: [0.8, 1.2, 0.8],
          }}
          transition={{
            duration: 10 + i * 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
    
    {/* Animated graph nodes and edges */}
    <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
      <g className="opacity-30 dark:opacity-40">
        {/* Lines/edges */}
        <motion.line 
          x1="20%" y1="20%" x2="40%" y2="25%" 
          stroke="url(#line-gradient)" 
          strokeWidth="2"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.5 }}
        />
        <motion.line 
          x1="40%" y1="25%" x2="65%" y2="15%" 
          stroke="url(#line-gradient)" 
          strokeWidth="2"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.8 }}
        />
        <motion.line 
          x1="40%" y1="25%" x2="50%" y2="50%" 
          stroke="url(#line-gradient)" 
          strokeWidth="2"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 1.5, delay: 1.1 }}
        />
        <motion.line 
          x1="50%" y1="50%" x2="70%" y2="65%" 
          stroke="url(#line-gradient)" 
          strokeWidth="2"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 1.5, delay: 1.4 }}
        />
        <motion.line 
          x1="50%" y1="50%" x2="30%" y2="70%" 
          stroke="url(#line-gradient)" 
          strokeWidth="2"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 1.5, delay: 1.7 }}
        />
        <motion.line 
          x1="30%" y1="70%" x2="15%" y2="60%" 
          stroke="url(#line-gradient)" 
          strokeWidth="2"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 1.5, delay: 2.0 }}
        />
        <motion.line 
          x1="70%" y1="65%" x2="85%" y2="70%" 
          stroke="url(#line-gradient)" 
          strokeWidth="2"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 1.5, delay: 2.3 }}
        />
        
        {/* Gradient definitions */}
        <defs>
          <linearGradient id="line-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(139, 92, 246, 0.5)" /> {/* purple-500 */}
            <stop offset="100%" stopColor="rgba(14, 165, 233, 0.5)" /> {/* sky-500 */}
          </linearGradient>
        </defs>
      </g>
    </svg>
  </div>
)

const FloatingNodes = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    {/* Floating nodes */}
    <motion.div 
      className="absolute w-12 h-12 rounded-xl bg-white dark:bg-gray-800 shadow-xl flex items-center justify-center"
      style={{ left: '19%', top: '20%' }}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.2 }}
    >
      <BarChart2 className="w-6 h-6 text-primary-500" />
    </motion.div>
    
    <motion.div 
      className="absolute w-14 h-14 rounded-xl bg-white dark:bg-gray-800 shadow-xl flex items-center justify-center"
      style={{ left: '40%', top: '22%' }}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.4 }}
    >
      <div className="w-8 h-8 rounded-lg bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center">
        <Layers className="w-5 h-5 text-primary-600 dark:text-primary-400" />
      </div>
    </motion.div>
    
    <motion.div 
      className="absolute w-12 h-12 rounded-xl bg-white dark:bg-gray-800 shadow-xl flex items-center justify-center"
      style={{ left: '65%', top: '15%' }}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.6 }}
    >
      <div className="w-7 h-7 rounded-lg bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
        <Zap className="w-4 h-4 text-blue-600 dark:text-blue-400" />
      </div>
    </motion.div>
    
    <motion.div 
      className="absolute w-16 h-16 rounded-xl bg-white dark:bg-gray-800 shadow-xl flex items-center justify-center"
      style={{ left: '50%', top: '50%' }}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.8 }}
    >
      <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center">
        <Code className="w-6 h-6 text-white" />
      </div>
    </motion.div>
    
    <motion.div 
      className="absolute w-12 h-12 rounded-xl bg-white dark:bg-gray-800 shadow-xl flex items-center justify-center"
      style={{ left: '70%', top: '65%' }}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.6, delay: 1.0 }}
    >
      <div className="w-7 h-7 rounded-lg bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center">
        <Users className="w-4 h-4 text-purple-600 dark:text-purple-400" />
      </div>
    </motion.div>
    
    <motion.div 
      className="absolute w-10 h-10 rounded-xl bg-white dark:bg-gray-800 shadow-xl flex items-center justify-center"
      style={{ left: '30%', top: '70%' }}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.6, delay: 1.2 }}
    >
      <div className="w-6 h-6 rounded-lg bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center">
        <Star className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400" />
      </div>
    </motion.div>
  </div>
)

const FeatureTag = ({ children, highlighted = false }: { children: React.ReactNode, highlighted?: boolean }) => (
  <div className={`inline-flex items-center px-4 py-1.5 rounded-full ${
    highlighted 
      ? 'bg-gradient-to-r from-purple-500/20 to-blue-500/20 dark:from-purple-500/30 dark:to-blue-500/30 backdrop-blur-sm border border-purple-200 dark:border-purple-900/50' 
      : 'bg-primary-50 dark:bg-primary-900/20'
  } text-primary-600 dark:text-primary-400 text-sm font-medium`}>
    {children}
  </div>
)

const GlassCard = ({ children, className = '', delay = 0 }: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay }}
    whileHover={{ scale: 1.03, y: -5 }}
    className={`relative backdrop-blur-xl bg-white/90 dark:bg-gray-900/80 border border-gray-200 dark:border-gray-800 rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 ${className}`}
  >
    <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent dark:from-gray-800/5 rounded-2xl" />
    <div className="relative z-10">{children}</div>
  </motion.div>
)

export default function Home() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  })
  
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  return (
    <main className="relative overflow-hidden bg-gray-50 dark:bg-gray-950" ref={containerRef}>
      <MainNav />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden">
        <HeroBackground />
        <FloatingNodes />
        
        <div className="max-w-7xl mx-auto text-center relative z-10 py-20 md:py-32">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <FeatureTag highlighted={true}>
              <div className="flex items-center">
                <span className="mr-2 text-xl">✨</span>
                <span className="font-semibold">Introducing Diagrammatic-UI</span>
                <span className="mx-2">•</span>
                <span className="bg-purple-100 dark:bg-purple-900/40 text-purple-700 dark:text-purple-300 px-2 py-0.5 rounded-md font-medium">
                  Just shipped v1.0
                </span>
              </div>
            </FeatureTag>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-8"
          >
            <h1 className="text-5xl sm:text-7xl font-bold mb-6 text-black dark:text-white leading-tight">
              <span className="block">Create Stunning</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600 dark:from-purple-500 dark:to-blue-400">
                Graph Visualizations
              </span>
              <span className="block">with Zero Effort</span>
            </h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="text-xl text-gray-600 dark:text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed"
            >
              Generate beautiful, customizable graph components for your web application.
              Choose your design preferences.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            >
              <Link
                href="/docs"
                className="group relative inline-flex items-center px-8 py-4 rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold text-lg shadow-md hover:shadow-xl transition-all duration-300"
              >
                <span className="relative z-10">Start Building</span>
                <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-purple-700 to-blue-700 opacity-0 group-hover:opacity-100 transition-opacity" />
              </Link>
              
              <div className="flex gap-4">
                <Link
                  href="/playground"
                  className="inline-flex items-center px-6 py-4 rounded-xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-300 font-semibold text-gray-700 dark:text-gray-200"
                >
                  <Play className="mr-3 w-5 h-5" />
                  Live Demo
                </Link>
                
                <a
                  href="https://github.com/yourusername/digrammatic-ui"
            target="_blank"
            rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-300 text-gray-700 dark:text-gray-200"
                >
                  <Github className="w-5 h-5" />
                </a>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

       {/* Stats Section */}
     

      {/* Features Section */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-950 overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-0 w-[800px] h-[800px] bg-gradient-to-br from-purple-500/5 to-blue-500/5 dark:from-purple-500/10 dark:to-blue-500/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-gradient-to-tl from-blue-500/5 to-purple-500/5 dark:from-blue-500/10 dark:to-purple-500/10 rounded-full blur-3xl translate-x-1/3 translate-y-1/3" />
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10 ">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="sm:text-center mb-16"
          >
            <div className='flex justify-center'>
            <FeatureTag highlighted={true}>
              <span className="mr-2 text-lg">⚡</span>
              <span className="font-semibold">Advanced Features</span>
            </FeatureTag>
            </div>
            
            <h2 className="text-3xl sm:text-5xl font-bold mt-6 mb-6 text-black dark:text-white">
              Why Choose
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600 dark:from-purple-500 dark:to-blue-400 ml-2">
                Diagrammatic-UI?
              </span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Experience the future of graph visualization with cutting-edge features and unparalleled performance.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Code,
                title: 'Developer First',
                description: 'Built with TypeScript and React. Comprehensive API documentation and excellent developer experience.',
                gradient: 'from-blue-500 to-cyan-500'
              },
              {
                icon: Zap,
                title: 'Lightning Fast',
                description: 'Optimized rendering engine handles thousands of nodes with smooth 60fps animations.',
                gradient: 'from-amber-500 to-pink-500'
              },
              {
                icon: Layers,
                title: 'Infinitely Customizable',
                description: 'Every element is customizable. Create unique visualizations that match your brand perfectly.',
                gradient: 'from-purple-500 to-indigo-500'
              },
            ].map((feature, index) => (
              <GlassCard key={index} delay={index * 0.2} className="group hover:border-white/40 dark:hover:border-gray-700/40 border-white/40 dark:border-gray-800/40">
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-6 shadow-md group-hover:shadow-lg group-hover:scale-110 transition-all duration-300`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-black dark:text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-blue-600 dark:group-hover:from-purple-500 dark:group-hover:to-blue-400 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  {feature.description}
                </p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* Code Example Section */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900 overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-24 -left-24 w-96 h-96 bg-gradient-to-br from-purple-500/5 to-blue-500/5 dark:from-purple-500/10 dark:to-blue-500/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-gradient-to-tl from-blue-500/5 to-purple-500/5 dark:from-blue-500/10 dark:to-purple-500/10 rounded-full blur-3xl" />
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <FeatureTag highlighted={true}>
                <span className="mr-2 text-lg">🧩</span>
                <span className="font-semibold">Simple API</span>
              </FeatureTag>
              <h3 className="text-3xl sm:text-4xl font-bold mt-6 mb-6 text-black dark:text-white">
                Powerful Results with
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600 dark:from-purple-500 dark:to-blue-400 block mt-1">
                  Minimal Code
                </span>
              </h3>
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
                Get started in minutes with our intuitive API. No complex setup, no boilerplate code. Just simple, declarative components for beautiful graph visualizations.
              </p>
              <Link
                href="/docs"
                className="inline-flex items-center px-6 py-3 rounded-xl bg-gradient-to-r from-purple-500/10 to-blue-500/10 dark:from-purple-500/20 dark:to-blue-500/20 text-purple-700 dark:text-purple-300 hover:from-purple-500/20 hover:to-blue-500/20 dark:hover:from-purple-500/30 dark:hover:to-blue-500/30 transition-all font-medium"
              >
                View Documentation
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <GlassCard className="border-white/40 dark:border-gray-800/40 overflow-hidden">
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-purple-500/20 to-blue-500/20 dark:from-purple-500/30 dark:to-blue-500/30 rounded-full blur-xl transform translate-x-5 -translate-y-5" />
                <div className="absolute bottom-0 left-0 w-20 h-20 bg-gradient-to-tr from-blue-500/20 to-purple-500/20 dark:from-blue-500/30 dark:to-purple-500/30 rounded-full blur-xl transform -translate-x-5 translate-y-5" />
                <div className="bg-gray-900 dark:bg-gray-950 rounded-xl p-6 font-mono text-sm overflow-x-auto relative">
                  <pre className="text-gray-100">
                    <code dangerouslySetInnerHTML={{ __html: 
`<span class="text-blue-400">import</span> <span class="text-yellow-300">{ Graph }</span> <span class="text-blue-400">from</span> <span class="text-green-400">'diagrammatic-ui'</span>

<span class="text-blue-400">function</span> <span class="text-yellow-300">MyDiagram</span><span class="text-gray-300">()</span> <span class="text-gray-300">{</span>
  <span class="text-gray-500">// Define your graph data</span>
  <span class="text-blue-400">const</span> <span class="text-yellow-300">graphData</span> <span class="text-gray-300">=</span> <span class="text-gray-300">{</span>
    <span class="text-yellow-300">nodes</span><span class="text-gray-300">:</span> <span class="text-gray-300">[</span>
      <span class="text-gray-300">{</span> <span class="text-yellow-300">id</span><span class="text-gray-300">:</span> <span class="text-green-400">'node1'</span><span class="text-gray-300">,</span> <span class="text-yellow-300">name</span><span class="text-gray-300">:</span> <span class="text-green-400">'Node 1'</span><span class="text-gray-300">,</span> <span class="text-yellow-300">type</span><span class="text-gray-300">:</span> <span class="text-green-400">'component'</span> <span class="text-gray-300">},</span>
      <span class="text-gray-300">{</span> <span class="text-yellow-300">id</span><span class="text-gray-300">:</span> <span class="text-green-400">'node2'</span><span class="text-gray-300">,</span> <span class="text-yellow-300">name</span><span class="text-gray-300">:</span> <span class="text-green-400">'Node 2'</span><span class="text-gray-300">,</span> <span class="text-yellow-300">type</span><span class="text-gray-300">:</span> <span class="text-green-400">'service'</span> <span class="text-gray-300">},</span>
      <span class="text-gray-300">{</span> <span class="text-yellow-300">id</span><span class="text-gray-300">:</span> <span class="text-green-400">'node3'</span><span class="text-gray-300">,</span> <span class="text-yellow-300">name</span><span class="text-gray-300">:</span> <span class="text-green-400">'Node 3'</span><span class="text-gray-300">,</span> <span class="text-yellow-300">type</span><span class="text-gray-300">:</span> <span class="text-green-400">'model'</span> <span class="text-gray-300">},</span>
      <span class="text-gray-300">{</span> <span class="text-yellow-300">id</span><span class="text-gray-300">:</span> <span class="text-green-400">'node4'</span><span class="text-gray-300">,</span> <span class="text-yellow-300">name</span><span class="text-gray-300">:</span> <span class="text-green-400">'Node 4'</span><span class="text-gray-300">,</span> <span class="text-yellow-300">type</span><span class="text-gray-300">:</span> <span class="text-green-400">'component'</span> <span class="text-gray-300">},</span>
      <span class="text-gray-300">{</span> <span class="text-yellow-300">id</span><span class="text-gray-300">:</span> <span class="text-green-400">'node5'</span><span class="text-gray-300">,</span> <span class="text-yellow-300">name</span><span class="text-gray-300">:</span> <span class="text-green-400">'Node 5'</span><span class="text-gray-300">,</span> <span class="text-yellow-300">type</span><span class="text-gray-300">:</span> <span class="text-green-400">'context'</span> <span class="text-gray-300">},</span>
    <span class="text-gray-300">],</span>
    <span class="text-yellow-300">edges</span><span class="text-gray-300">:</span> <span class="text-gray-300">[</span>
      <span class="text-gray-300">{</span> <span class="text-yellow-300">id</span><span class="text-gray-300">:</span> <span class="text-green-400">'edge1'</span><span class="text-gray-300">,</span> <span class="text-yellow-300">source</span><span class="text-gray-300">:</span> <span class="text-green-400">'node1'</span><span class="text-gray-300">,</span> <span class="text-yellow-300">target</span><span class="text-gray-300">:</span> <span class="text-green-400">'node2'</span> <span class="text-gray-300">},</span>
      <span class="text-gray-300">{</span> <span class="text-yellow-300">id</span><span class="text-gray-300">:</span> <span class="text-green-400">'edge2'</span><span class="text-gray-300">,</span> <span class="text-yellow-300">source</span><span class="text-gray-300">:</span> <span class="text-green-400">'node2'</span><span class="text-gray-300">,</span> <span class="text-yellow-300">target</span><span class="text-gray-300">:</span> <span class="text-green-400">'node3'</span> <span class="text-gray-300">},</span>
      <span class="text-gray-300">{</span> <span class="text-yellow-300">id</span><span class="text-gray-300">:</span> <span class="text-green-400">'edge3'</span><span class="text-gray-300">,</span> <span class="text-yellow-300">source</span><span class="text-gray-300">:</span> <span class="text-green-400">'node3'</span><span class="text-gray-300">,</span> <span class="text-yellow-300">target</span><span class="text-gray-300">:</span> <span class="text-green-400">'node4'</span> <span class="text-gray-300">},</span>
      <span class="text-gray-300">{</span> <span class="text-yellow-300">id</span><span class="text-gray-300">:</span> <span class="text-green-400">'edge4'</span><span class="text-gray-300">,</span> <span class="text-yellow-300">source</span><span class="text-gray-300">:</span> <span class="text-green-400">'node4'</span><span class="text-gray-300">,</span> <span class="text-yellow-300">target</span><span class="text-gray-300">:</span> <span class="text-green-400">'node5'</span> <span class="text-gray-300">},</span>
      <span class="text-gray-300">{</span> <span class="text-yellow-300">id</span><span class="text-gray-300">:</span> <span class="text-green-400">'edge5'</span><span class="text-gray-300">,</span> <span class="text-yellow-300">source</span><span class="text-gray-300">:</span> <span class="text-green-400">'node5'</span><span class="text-gray-300">,</span> <span class="text-yellow-300">target</span><span class="text-gray-300">:</span> <span class="text-green-400">'node1'</span> <span class="text-gray-300">},</span>
    <span class="text-gray-300">]</span>
  <span class="text-gray-300">};</span>

  <span class="text-blue-400">return</span> <span class="text-gray-300">(</span>
    <span class="text-red-400">&lt;Graph</span>
      <span class="text-yellow-300">data</span><span class="text-gray-300">=</span><span class="text-gray-300">{graphData}</span>
      <span class="text-yellow-300">height</span><span class="text-gray-300">=</span><span class="text-gray-300">{500}</span>
      <span class="text-yellow-300">theme</span><span class="text-gray-300">=</span><span class="text-green-400">"light"</span>
      <span class="text-yellow-300">onNodeClick</span><span class="text-gray-300">=</span><span class="text-gray-300">{(</span><span class="text-yellow-300">nodeId</span><span class="text-gray-300">) =></span> <span class="text-yellow-300">console</span><span class="text-gray-300">.</span><span class="text-yellow-300">log</span><span class="text-gray-300">(</span><span class="text-green-400">'Clicked:'</span><span class="text-gray-300">,</span> <span class="text-yellow-300">nodeId</span><span class="text-gray-300">)}</span>
    <span class="text-red-400">/&gt;</span>
  <span class="text-gray-300">);</span>
<span class="text-gray-300">}</span>`
                    }} />
                  </pre>
                </div>
              </GlassCard>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-32 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-950 overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-blue-500/5 to-purple-500/5 dark:from-blue-500/10 dark:to-purple-500/10 rounded-full blur-3xl transform translate-x-1/3 -translate-y-1/3" />
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-purple-500/5 to-blue-500/5 dark:from-purple-500/10 dark:to-blue-500/10 rounded-full blur-3xl transform -translate-x-1/3 translate-y-1/3" />
          
          {/* Subtle animated particle */}
          <motion.div
            className="absolute w-3 h-3 rounded-full bg-purple-500/30 dark:bg-purple-400/40 blur-sm"
            style={{ top: '30%', left: '70%' }}
            animate={{
              y: [0, 50, 0],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute w-2 h-2 rounded-full bg-blue-500/30 dark:bg-blue-400/40 blur-sm"
            style={{ top: '60%', left: '25%' }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.3, 0.7, 0.3],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <FeatureTag highlighted={true}>
              <span className="mr-2 text-lg">🚀</span>
              <span className="font-semibold">Get Started Today</span>
            </FeatureTag>
            <h2 className="text-4xl sm:text-5xl font-bold mt-6 mb-3 text-black dark:text-white">
              Ready to Build
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600 dark:from-purple-500 dark:to-blue-400 block pb-2">
                Something Amazing?
              </span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
              Join thousands of developers who trust Diagrammatic-UI for their visualization needs.
            </p>
            <motion.div
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="inline-block"
            >
              <Link
                href="/docs"
                className="inline-flex items-center px-8 py-4 rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold text-lg shadow-md hover:shadow-xl transform transition-all duration-300"
              >
                <span className="relative z-10">Start Building Now</span>
                <ArrowRight className="ml-3 w-5 h-5" />
                <span className="absolute inset-0 rounded-xl bg-gradient-to-r from-purple-700 to-blue-700 opacity-0 hover:opacity-100 transition-opacity" />
              </Link>
            </motion.div>
          </motion.div>
    </div>
      </section>
      
      {/* Footer */}
      <Footer />
    </main>
  )
}
