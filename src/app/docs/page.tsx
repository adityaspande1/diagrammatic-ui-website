'use client'

import { MainNav } from '@/components/navigation/main-nav'
import { Footer } from '@/components/footer'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, Search, Book, Code, FileText, BarChart2, Download, ChevronRight, Hash, Key } from 'lucide-react'
import { useState } from 'react'

const DocHero = () => (
  <section className="relative py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900 overflow-hidden border-b border-gray-200 dark:border-gray-800">
    {/* Background elements */}
    <div className="absolute inset-0 pointer-events-none">
      <div className="absolute top-0 left-0 w-[800px] h-[800px] bg-gradient-to-br from-purple-500/5 to-blue-500/5 dark:from-purple-500/10 dark:to-blue-500/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-gradient-to-tl from-blue-500/5 to-purple-500/5 dark:from-blue-500/10 dark:to-purple-500/10 rounded-full blur-3xl translate-x-1/3 translate-y-1/3" />
    </div>
    
    <div className="max-w-5xl mx-auto relative z-10">
      <div className="text-center">
        <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-gradient-to-r from-purple-500/10 to-blue-500/10 dark:from-purple-500/20 dark:to-blue-500/20 backdrop-blur-sm border border-purple-200 dark:border-purple-900/50 text-purple-700 dark:text-purple-300 text-sm font-medium mb-6">
          <Book className="w-4 h-4 mr-2" />
          <span className="font-semibold">Documentation</span>
          <span className="mx-2">•</span>
          <span>v1.0</span>
        </div>
        
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-black dark:text-white">
          Getting Started with 
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600 dark:from-purple-500 dark:to-blue-400 ml-2">
            Diagrammatic-UI
          </span>
        </h1>
        
        <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-3xl mx-auto">
          Learn how to use Diagrammatic-UI to create stunning graph visualizations for your React applications.
        </p>
        
        <div className="relative max-w-2xl mx-auto mb-8">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <Search className="w-5 h-5 text-gray-400" />
          </div>
          <input
            type="text"
            placeholder="Search documentation..."
            className="block w-full pl-12 pr-6 py-3 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 focus:border-purple-400 dark:focus:border-purple-500 focus:ring-2 focus:ring-purple-200 dark:focus:ring-purple-800 text-black dark:text-white shadow-sm"
          />
        </div>
        
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href="/docs/getting-started"
            className="inline-flex items-center px-6 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 text-white font-medium shadow-sm hover:shadow-md transition-all"
          >
            <span>Quick Start Guide</span>
            <ArrowRight className="ml-2 w-4 h-4" />
          </Link>
          <Link
            href="/docs/examples"
            className="inline-flex items-center px-6 py-3 rounded-xl bg-gradient-to-r from-purple-500/10 to-blue-500/10 dark:from-purple-500/20 dark:to-blue-500/20 text-purple-700 dark:text-purple-300 font-medium hover:from-purple-500/20 hover:to-blue-500/20 dark:hover:from-purple-500/30 dark:hover:to-blue-500/30 transition-all"
          >
            <Code className="mr-2 w-4 h-4" />
            <span>Examples</span>
          </Link>
          <Link
            href="/docs/api"
            className="inline-flex items-center px-6 py-3 rounded-xl bg-gradient-to-r from-purple-500/10 to-blue-500/10 dark:from-purple-500/20 dark:to-blue-500/20 text-purple-700 dark:text-purple-300 font-medium hover:from-purple-500/20 hover:to-blue-500/20 dark:hover:from-purple-500/30 dark:hover:to-blue-500/30 transition-all"
          >
            <Key className="mr-2 w-4 h-4" />
            <span>API Reference</span>
          </Link>
        </div>
      </div>
    </div>
  </section>
)

const DocCard = ({ title, description, icon: Icon, href, delay = 0 }: {
  title: string;
  description: string;
  icon: any;
  href: string;
  delay?: number;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
    className="group"
  >
    <Link href={href} className="block h-full">
      <div className="h-full rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-6 shadow-sm hover:shadow-md transition-all group-hover:border-purple-200 dark:group-hover:border-purple-900/30">
        <div className="mb-4 w-12 h-12 rounded-lg bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center shadow-sm">
          <Icon className="w-6 h-6 text-white" />
        </div>
        <h3 className="text-xl font-bold mb-2 text-black dark:text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-blue-600 dark:group-hover:from-purple-500 dark:group-hover:to-blue-400 transition-colors">
          {title}
        </h3>
        <p className="text-gray-600 dark:text-gray-400">
          {description}
        </p>
        <div className="mt-4 inline-flex items-center text-purple-600 dark:text-purple-400 group-hover:translate-x-1 transition-transform">
          <span className="font-medium">Learn more</span>
          <ChevronRight className="ml-1 w-4 h-4" />
        </div>
      </div>
    </Link>
  </motion.div>
)

export default function Documentation() {
  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-950">
      <MainNav />
      
      <DocHero />
      
      {/* Main Documentation Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-12 text-black dark:text-white text-center">
            Browse Documentation
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'Installation',
                description: 'Step by step guide to install and setup Diagrammatic-UI in your project.',
                icon: Download,
                href: '/docs/installation'
              },
              {
                title: 'Basic Concepts',
                description: 'Learn the core concepts and principles behind Diagrammatic-UI.',
                icon: Book,
                href: '/docs/concepts'
              },
              {
                title: 'Examples',
                description: 'Explore different use cases and implementation examples.',
                icon: BarChart2,
                href: '/docs/examples'
              },
              {
                title: 'API Reference',
                description: 'Complete API documentation for all components and utilities.',
                icon: Code,
                href: '/docs/api'
              },
              {
                title: 'Customization',
                description: 'Learn how to customize and style your graph visualizations.',
                icon: FileText,
                href: '/docs/customization'
              },
              {
                title: 'Advanced Usage',
                description: 'Advanced techniques and patterns for complex visualizations.',
                icon: Hash,
                href: '/docs/advanced'
              }
            ].map((doc, index) => (
              <DocCard
                key={doc.title}
                title={doc.title}
                description={doc.description}
                icon={doc.icon}
                href={doc.href}
                delay={index * 0.1}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* Tutorial Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-purple-500/5 to-blue-500/5 dark:from-purple-500/10 dark:to-blue-500/10 rounded-full blur-3xl transform translate-y-1/2 -translate-x-1/2" />
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-black dark:text-white">
              Step-by-Step Tutorials
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Follow our detailed tutorials to master Diagrammatic-UI
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: 'Create Your First Graph',
                description: 'Learn how to create a basic graph visualization with nodes and edges.',
                href: '/docs/examples#basic-graph'
              },
              {
                title: 'Organization Charts',
                description: 'Build hierarchical organization charts for company structures.',
                href: '/docs/examples#org-charts'
              },
              {
                title: 'Process Flows',
                description: 'Create workflow diagrams and decision trees with connected processes.',
                href: '/docs/examples#process-flows'
              },
              {
                title: 'Document-Style Nodes',
                description: 'Use rich document nodes to display structured information.',
                href: '/docs/examples#document-nodes'
              }
            ].map((tutorial, index) => (
              <motion.div
                key={tutorial.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                className="group"
              >
                <Link href={tutorial.href} className="block">
                  <div className="rounded-xl p-6 border border-gray-200 dark:border-gray-800 hover:border-purple-200 dark:hover:border-purple-900/30 bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-950 shadow-sm hover:shadow-md transition-all">
                    <h3 className="text-xl font-bold mb-2 text-black dark:text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-blue-600 dark:group-hover:from-purple-500 dark:group-hover:to-blue-400">
                      {tutorial.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                      {tutorial.description}
                    </p>
                    <div className="inline-flex items-center text-purple-600 dark:text-purple-400 group-hover:translate-x-1 transition-transform">
                      <span className="font-medium">View tutorial</span>
                      <ChevronRight className="ml-1 w-4 h-4" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link
              href="/docs/examples"
              className="inline-flex items-center px-6 py-3 rounded-xl bg-gradient-to-r from-purple-500/10 to-blue-500/10 dark:from-purple-500/20 dark:to-blue-500/20 text-purple-700 dark:text-purple-300 font-medium hover:from-purple-500/20 hover:to-blue-500/20 dark:hover:from-purple-500/30 dark:hover:to-blue-500/30 transition-all"
            >
              <span>View all examples</span>
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
      
      {/* Quick Reference Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-black dark:text-white">
              Quick Reference
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Key information at your fingertips
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 p-6 shadow-sm">
              <h3 className="text-xl font-bold mb-4 text-black dark:text-white">
                Basic Graph Setup
              </h3>
              <div className="bg-gray-900 text-gray-100 rounded-lg p-4 my-4 overflow-x-auto text-sm">
                <pre><code>{`import { Graph } from 'diagrammatic-ui';

function MyGraph() {
  const graphData = {
    nodes: [
      { id: 'node1', name: 'Node 1' },
      { id: 'node2', name: 'Node 2' }
    ],
    edges: [
      { id: 'edge1', source: 'node1', target: 'node2' }
    ]
  };

  return (
    <Graph 
      data={graphData}
      height={500}
      theme="light"
    />
  );
}`}</code></pre>
              </div>
              <Link
                href="/docs/installation"
                className="inline-flex items-center text-purple-600 dark:text-purple-400 font-medium hover:underline"
              >
                <span>Installation guide</span>
                <ArrowRight className="ml-1 w-4 h-4" />
              </Link>
            </div>
            
            <div className="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 p-6 shadow-sm">
              <h3 className="text-xl font-bold mb-4 text-black dark:text-white">
                Available Layouts
              </h3>
              <ul className="space-y-2 mb-4">
                <li className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-purple-500 mr-2"></div>
                  <span className="text-gray-600 dark:text-gray-400"><code className="text-purple-600 dark:text-purple-400">force</code> - Physics-based layout</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-purple-500 mr-2"></div>
                  <span className="text-gray-600 dark:text-gray-400"><code className="text-purple-600 dark:text-purple-400">circular</code> - Nodes in a circle</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-purple-500 mr-2"></div>
                  <span className="text-gray-600 dark:text-gray-400"><code className="text-purple-600 dark:text-purple-400">tree</code> - Hierarchical layout</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-purple-500 mr-2"></div>
                  <span className="text-gray-600 dark:text-gray-400"><code className="text-purple-600 dark:text-purple-400">spiral</code> - Nodes in a spiral</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-purple-500 mr-2"></div>
                  <span className="text-gray-600 dark:text-gray-400"><code className="text-purple-600 dark:text-purple-400">donut</code> - Circular with hole</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-purple-500 mr-2"></div>
                  <span className="text-gray-600 dark:text-gray-400"><code className="text-purple-600 dark:text-purple-400">grid</code> - Nodes in a grid</span>
                </li>
              </ul>
              <Link
                href="/docs/concepts#layouts"
                className="inline-flex items-center text-purple-600 dark:text-purple-400 font-medium hover:underline"
              >
                <span>Learn about layouts</span>
                <ArrowRight className="ml-1 w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 border-t border-gray-200 dark:border-gray-800">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-black dark:text-white">
            Ready to build your graph visualization?
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
            Get started with Diagrammatic-UI today and create stunning visualizations for your data.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/docs/installation"
              className="inline-flex items-center px-6 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 text-white font-medium shadow-sm hover:shadow-md transition-all"
            >
              <span>Start Building</span>
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
            <Link
              href="/playground"
              className="inline-flex items-center px-6 py-3 rounded-xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-800 transition-all font-medium text-gray-700 dark:text-gray-200"
            >
              <span>Try Playground</span>
            </Link>
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  )
} 