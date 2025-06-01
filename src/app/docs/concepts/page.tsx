'use client'

import { MainNav } from '@/components/navigation/main-nav'
import { Footer } from '@/components/footer'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, Code, BarChart2, Zap, Layout, Layers, Settings } from 'lucide-react'
import Image from 'next/image'

const ConceptCard = ({ title, description, icon: Icon, className = '' }: {
  title: string;
  description: string;
  icon: any;
  className?: string;
}) => (
  <div className={`rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-6 shadow-sm ${className}`}>
    <div className="mb-4 w-12 h-12 rounded-lg bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center shadow-sm">
      <Icon className="w-6 h-6 text-white" />
    </div>
    <h3 className="text-xl font-bold mb-2 text-black dark:text-white">
      {title}
    </h3>
    <p className="text-gray-600 dark:text-gray-400">
      {description}
    </p>
  </div>
)

export default function ConceptsPage() {
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
            <span className="text-gray-900 dark:text-gray-100 font-medium">Basic Concepts</span>
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl font-bold mb-6 text-black dark:text-white">
              Basic Concepts
            </h1>
            
            <div className="prose dark:prose-invert max-w-none">
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
                Understanding the core concepts of Diagrammatic-UI will help you create effective graph visualizations. 
                This guide covers the fundamental building blocks and principles behind the library.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-12">
                <ConceptCard
                  title="Graphs"
                  description="The main container component that renders nodes and edges. It manages the layout, interactions, and visual appearance of the visualization."
                  icon={BarChart2}
                />
                <ConceptCard
                  title="Nodes"
                  description="Represent entities in your data. Nodes can have different types, styles, and behaviors based on your configuration."
                  icon={Layers}
                />
                <ConceptCard
                  title="Edges"
                  description="Connect nodes to represent relationships. Edges can be styled, labeled, and can have different types (straight, curved, etc.)."
                  icon={Layout}
                />
                <ConceptCard
                  title="Layouts"
                  description="Algorithms that determine how nodes are positioned. Diagrammatic-UI supports various layouts like force, circular, tree, and more."
                  icon={Settings}
                />
              </div>
              
              <h2 className="text-2xl font-bold mt-12 mb-4 text-black dark:text-white">
                Graph Data Structure
              </h2>
              
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                The core of Diagrammatic-UI is the graph data structure, which consists of nodes and edges. 
                Here's how you define a basic graph:
              </p>
              
              <div className="bg-gray-900 text-gray-100 rounded-lg p-4 my-6 overflow-x-auto">
                <pre><code>{`const graphData = {
  nodes: [
    { id: 'node1', name: 'Node 1', type: 'component' },
    { id: 'node2', name: 'Node 2', type: 'service' },
    // More nodes...
  ],
  edges: [
    { id: 'edge1', source: 'node1', target: 'node2' },
    // More edges...
  ],
  // Optional metadata
  name: 'My Graph',
  category: 'example'
};`}</code></pre>
              </div>
              
              <h3 className="text-xl font-bold mt-8 mb-4 text-black dark:text-white">
                Node Properties
              </h3>
              
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Nodes represent entities in your graph and have the following key properties:
              </p>
              
              <ul className="list-disc pl-6 space-y-2 text-gray-600 dark:text-gray-400 mb-8">
                <li><strong className="text-black dark:text-white">id</strong>: Unique identifier for the node</li>
                <li><strong className="text-black dark:text-white">name</strong>: Display name for the node</li>
                <li><strong className="text-black dark:text-white">type</strong>: Category of the node (e.g., 'component', 'service')</li>
                <li><strong className="text-black dark:text-white">description</strong> (optional): Additional information about the node</li>
                <li><strong className="text-black dark:text-white">sections</strong> (optional): Structured data for document-style nodes</li>
              </ul>
              
              <h3 className="text-xl font-bold mt-8 mb-4 text-black dark:text-white">
                Edge Properties
              </h3>
              
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Edges represent relationships between nodes and have these key properties:
              </p>
              
              <ul className="list-disc pl-6 space-y-2 text-gray-600 dark:text-gray-400 mb-8">
                <li><strong className="text-black dark:text-white">id</strong>: Unique identifier for the edge</li>
                <li><strong className="text-black dark:text-white">source</strong>: ID of the source node</li>
                <li><strong className="text-black dark:text-white">target</strong>: ID of the target node</li>
                <li><strong className="text-black dark:text-white">label</strong> (optional): Text to display on the edge</li>
                <li><strong className="text-black dark:text-white">type</strong> (optional): Style of the edge (e.g., 'solid', 'dashed')</li>
              </ul>
              
              <h2 className="text-2xl font-bold mt-12 mb-4 text-black dark:text-white">
                Node Types
              </h2>
              
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Diagrammatic-UI supports various node types to represent different kinds of entities:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
                <div className="bg-white dark:bg-gray-900 rounded-lg p-4 border border-gray-200 dark:border-gray-800">
                  <h4 className="font-bold mb-2 text-black dark:text-white">Standard Nodes</h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">Basic nodes with customizable shapes and colors</p>
                </div>
                <div className="bg-white dark:bg-gray-900 rounded-lg p-4 border border-gray-200 dark:border-gray-800">
                  <h4 className="font-bold mb-2 text-black dark:text-white">Document Nodes</h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">Rich nodes with collapsible sections and detailed content</p>
                </div>
                <div className="bg-white dark:bg-gray-900 rounded-lg p-4 border border-gray-200 dark:border-gray-800">
                  <h4 className="font-bold mb-2 text-black dark:text-white">Interface Nodes</h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">Specialized for representing programming interfaces</p>
                </div>
                <div className="bg-white dark:bg-gray-900 rounded-lg p-4 border border-gray-200 dark:border-gray-800">
                  <h4 className="font-bold mb-2 text-black dark:text-white">Custom Nodes</h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">Create your own node types with custom rendering</p>
                </div>
              </div>
              
              <h3 className="text-xl font-bold mt-8 mb-4 text-black dark:text-white">
                Document-Style Nodes
              </h3>
              
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Document nodes are particularly useful for displaying structured information:
              </p>
              
              <div className="bg-gray-900 text-gray-100 rounded-lg p-4 my-6 overflow-x-auto">
                <pre><code>{`const documentNode = {
  id: 'doc1', 
  name: 'RowingBoat', 
  type: 'interface',
  path: 'RowingBoat.java',
  description: 'Java interface for rowing boats',
  sections: [
    {
      id: 'methods',
      name: 'Methods',
      items: [
        { id: 'method1', value: 'public abstract void row(int speed, Direction direction)' }
      ]
    },
    {
      id: 'imports',
      name: 'Imports',
      items: [
        { id: 'import1', value: 'java.lang' }
      ]
    }
  ]
};`}</code></pre>
              </div>
              
              <div className="my-8 bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                <p className="text-gray-700 dark:text-gray-300 text-center italic">
                  Document nodes can display code, methods, properties, and other structured information
                </p>
                <Image src="/docs/document-node.webp" alt="Document Node" width={400} height={400}  className="mx-auto py-2"/>
              </div>
              
              <h2 className="text-2xl font-bold mt-12 mb-4 text-black dark:text-white">
                Layouts
              </h2>
              
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Diagrammatic-UI offers multiple layout algorithms to arrange your nodes:
              </p>
              
              <ul className="list-disc pl-6 space-y-2 text-gray-600 dark:text-gray-400 mb-8">
                <li><strong className="text-black dark:text-white">Force</strong>: Physics-based layout where nodes repel each other</li>
                <li><strong className="text-black dark:text-white">Circular</strong>: Nodes arranged in a circle</li>
                <li><strong className="text-black dark:text-white">Tree</strong>: Hierarchical layout for parent-child relationships</li>
                <li><strong className="text-black dark:text-white">Spiral</strong>: Nodes arranged in a spiral pattern</li>
                <li><strong className="text-black dark:text-white">Donut</strong>: Circular layout with a hole in the center</li>
                <li><strong className="text-black dark:text-white">Grid</strong>: Nodes arranged in a grid pattern</li>
              </ul>
              
              <div className="bg-gray-900 text-gray-100 rounded-lg p-4 my-6 overflow-x-auto">
                <pre><code>{`<Graph 
  data={graphData}
  autoLayout="circular" // or "force", "tree", "spiral", "donut", "grid"
/>`}</code></pre>
              </div>
              
              <h2 className="text-2xl font-bold mt-12 mb-4 text-black dark:text-white">
                Themes
              </h2>
              
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Diagrammatic-UI supports both light and dark themes out of the box:
              </p>
              
              <div className="bg-gray-900 text-gray-100 rounded-lg p-4 my-6 overflow-x-auto">
                <pre><code>{`<Graph 
  data={graphData}
  theme="dark" // or "light"
/>`}</code></pre>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
                <div className="bg-white rounded-lg p-4 border border-gray-200">
                  <h4 className="font-bold mb-2 text-black">Light Theme</h4>
                  <div className="bg-gray-100 rounded flex items-center justify-center">
                    <span className="text-gray-400">
                      <Image src="/docs/light-theme.webp" alt="Light Theme" width={400} height={300} className="mx-auto py-2"/>
                    </span>
                  </div>
                </div>
                <div className="bg-gray-900 rounded-lg p-4 border border-gray-800">
                  <h4 className="font-bold mb-2 text-white">Dark Theme</h4>
                  <div className="bg-gray-800 rounded flex items-center justify-center">
                    <span className="text-gray-400">
                      <Image src="/docs/dark-theme.webp" alt="Dark Theme" width={400} height={400} className="mx-auto "/>
                    </span>
                  </div>
                </div>
              </div>
              
              <h2 className="text-2xl font-bold mt-12 mb-4 text-black dark:text-white">
                Interactivity
              </h2>
              
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Diagrammatic-UI provides rich interaction options:
              </p>
              
              <div className="bg-gray-900 text-gray-100 rounded-lg p-4 my-6 overflow-x-auto">
                <pre><code>{`<Graph 
  data={graphData}
  interactionOptions={{
    selectionEnabled: true,
    draggingEnabled: true,
    zoomEnabled: true,
    panningEnabled: true
  }}
  onNodeClick={(nodeId) => console.log('Node clicked:', nodeId)}
  onNodeHover={(nodeId) => console.log('Node hovered:', nodeId)}
/>`}</code></pre>
              </div>
            </div>
            
            <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800 flex justify-between items-center">
              <Link
                href="/docs/installation"
                className="inline-flex items-center px-4 py-2 rounded-lg text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-colors"
              >
                <ArrowRight className="h-4 w-4 mr-2 rotate-180" />
                Previous: Installation
              </Link>
              <Link
                href="/docs/examples"
                className="inline-flex items-center px-6 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 text-white font-medium shadow-sm hover:shadow-md transition-all"
              >
                <span>Next: Examples</span>
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