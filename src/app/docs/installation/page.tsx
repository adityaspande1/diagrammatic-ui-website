'use client'

import { MainNav } from '@/components/navigation/main-nav'
import { Footer } from '@/components/footer'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, Copy, Check } from 'lucide-react'
import { useState } from 'react'

const CodeBlock = ({ code, language = 'bash' }: { code: string, language?: string }) => {
  const [copied, setCopied] = useState(false)

  const copyToClipboard = () => {
    navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="relative mt-4 mb-6 rounded-lg overflow-hidden">
      <div className="absolute top-0 right-0 p-2 z-10">
        <button
          onClick={copyToClipboard}
          className="p-2 rounded-lg bg-gray-800/50 hover:bg-gray-700/50 text-gray-300 hover:text-white transition-colors"
          aria-label="Copy code"
        >
          {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
        </button>
      </div>
      <pre className="p-4 bg-gray-900 text-gray-100 overflow-x-auto rounded-lg">
        <code>{code}</code>
      </pre>
    </div>
  )
}

export default function InstallationPage() {
  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-950">
      <MainNav />
      
      <div className="pt-16 lg:pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-1 text-sm text-gray-500 dark:text-gray-400 mb-6">
            <Link href="/docs" className="hover:text-purple-600 dark:hover:text-purple-400">
              Documentation
            </Link>
            <span>/</span>
            <span className="text-gray-900 dark:text-gray-100 font-medium">Installation</span>
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl font-bold mb-6 text-black dark:text-white">
              Installation
            </h1>
            
            <div className="prose dark:prose-invert max-w-none">
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
                Get started with Diagrammatic-UI by installing it in your React project. Follow the steps below to set up the library.
              </p>
              
              <h2 className="text-2xl font-bold mt-12 mb-4 text-black dark:text-white">
                Requirements
              </h2>
              
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Diagrammatic-UI is designed to work with React applications. Make sure you have the following prerequisites:
              </p>
              
              <ul className="list-disc pl-6 space-y-2 text-gray-600 dark:text-gray-400 mb-8">
                <li>React 19+ (Hooks support required)</li>
                <li>Node.js 20+ and npm</li>
              </ul>
              
              <h2 className="text-2xl font-bold mt-12 mb-4 text-black dark:text-white">
                Installation
              </h2>
              
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                You can install Diagrammatic-UI using npm or yarn:
              </p>
              
              <h3 className="text-xl font-medium mb-2 text-black dark:text-white">
                Using npm
              </h3>
              
              <CodeBlock code="npm install diagrammatic-ui" />
              
              <h3 className="text-xl font-medium mb-2 text-black dark:text-white">
                Using yarn
              </h3>
              
              <CodeBlock code="yarn add diagrammatic-ui" />
              
              <h2 className="text-2xl font-bold mt-12 mb-4 text-black dark:text-white">
                Quick Start
              </h2>
              
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                After installing the package, you can import and use the components in your React application:
              </p>
              
              <CodeBlock 
                language="tsx" 
                code={`import { Graph } from 'diagrammatic-ui';

function MyDiagram() {
  // Define your graph data
  const graphData = {
    nodes: [
      { id: 'node1', name: 'Node 1', type: 'component' },
      { id: 'node2', name: 'Node 2', type: 'service' },
      { id: 'node3', name: 'Node 3', type: 'model' },
      { id: 'node4', name: 'Node 4', type: 'component' },
      { id: 'node5', name: 'Node 5', type: 'context' },
    ],
    edges: [
      { id: 'edge1', source: 'node1', target: 'node2' },
      { id: 'edge2', source: 'node2', target: 'node3' },
      { id: 'edge3', source: 'node3', target: 'node4' },
      { id: 'edge4', source: 'node4', target: 'node5' },
      { id: 'edge5', source: 'node5', target: 'node1' },
    ]
  };

  return (
    <Graph 
      data={graphData}
      height={500}
      theme="light"
      onNodeClick={(nodeId) => console.log('Clicked:', nodeId)}
    />
  );
}`} 
              />
              
              <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4 my-8">
                <h3 className="text-lg font-medium text-blue-800 dark:text-blue-300 mb-2">
                  Tip
                </h3>
                <p className="text-blue-700 dark:text-blue-300">
                  Check out the <Link href="/playground" className="text-blue-600 dark:text-blue-400 underline">interactive playground</Link> to experiment with Diagrammatic-UI components without setting up a project.
                </p>
              </div>
              
              <h2 className="text-2xl font-bold mt-12 mb-4 text-black dark:text-white">
                Next Steps
              </h2>
              
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Now that you've installed Diagrammatic-UI, you can:
              </p>
              
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <div className="mr-2 mt-1 bg-purple-100 dark:bg-purple-900/30 p-1 rounded-full">
                    <ArrowRight className="h-3 w-3 text-purple-600 dark:text-purple-400" />
                  </div>
                  <span className="text-gray-600 dark:text-gray-400">
                    Learn about <Link href="/docs/concepts" className="text-purple-600 dark:text-purple-400 hover:underline">basic concepts</Link> of graph visualization
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="mr-2 mt-1 bg-purple-100 dark:bg-purple-900/30 p-1 rounded-full">
                    <ArrowRight className="h-3 w-3 text-purple-600 dark:text-purple-400" />
                  </div>
                  <span className="text-gray-600 dark:text-gray-400">
                    Explore the <Link href="/docs/components" className="text-purple-600 dark:text-purple-400 hover:underline">component API</Link> to understand available options
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="mr-2 mt-1 bg-purple-100 dark:bg-purple-900/30 p-1 rounded-full">
                    <ArrowRight className="h-3 w-3 text-purple-600 dark:text-purple-400" />
                  </div>
                  <span className="text-gray-600 dark:text-gray-400">
                    Check out <Link href="/docs/examples" className="text-purple-600 dark:text-purple-400 hover:underline">examples</Link> for inspiration
                  </span>
                </li>
              </ul>
            </div>
            
            <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800 flex justify-between items-center">
              <Link
                href="/docs"
                className="inline-flex items-center px-4 py-2 rounded-lg text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-colors"
              >
                <ArrowRight className="h-4 w-4 mr-2 rotate-180" />
                Back to Documentation
              </Link>
              <Link
                href="/docs/concepts"
                className="inline-flex items-center px-6 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 text-white font-medium shadow-sm hover:shadow-md transition-all"
              >
                <span>Next: Basic Concepts</span>
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
      
      <Footer />
    </main>
  )
} 