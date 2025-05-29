'use client'

import { MainNav } from '@/components/navigation/main-nav'
import { Footer } from '@/components/footer'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, Code, ChevronDown, ChevronRight, Search } from 'lucide-react'
import { useState } from 'react'

const APISection = ({ title, children, defaultOpen = false }: { 
  title: string; 
  children: React.ReactNode;
  defaultOpen?: boolean;
}) => {
  const [isOpen, setIsOpen] = useState(defaultOpen)
  
  return (
    <div className="border border-gray-200 dark:border-gray-800 rounded-lg mb-6 overflow-hidden">
      <button 
        className="w-full flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-900 text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className="text-lg font-semibold text-black dark:text-white">{title}</h3>
        {isOpen ? (
          <ChevronDown className="h-5 w-5 text-gray-500 dark:text-gray-400" />
        ) : (
          <ChevronRight className="h-5 w-5 text-gray-500 dark:text-gray-400" />
        )}
      </button>
      {isOpen && (
        <div className="p-4 bg-white dark:bg-gray-950">
          {children}
        </div>
      )}
    </div>
  )
}

const PropItem = ({ name, type, description, defaultValue, required = false }: {
  name: string;
  type: string;
  description: string;
  defaultValue?: string;
  required?: boolean;
}) => (
  <div className="mb-4 pb-4 border-b border-gray-100 dark:border-gray-800 last:border-0 last:mb-0 last:pb-0">
    <div className="flex flex-wrap items-start mb-1">
      <code className="font-mono text-sm bg-gray-100 dark:bg-gray-800 px-1.5 py-0.5 rounded text-purple-600 dark:text-purple-400 mr-2">
        {name}
      </code>
      <code className="font-mono text-xs bg-blue-50 dark:bg-blue-900/30 px-1.5 py-0.5 rounded text-blue-600 dark:text-blue-400 mr-2">
        {type}
      </code>
      {required && (
        <span className="text-xs bg-red-50 dark:bg-red-900/30 px-1.5 py-0.5 rounded text-red-600 dark:text-red-400">
          Required
        </span>
      )}
      {defaultValue && (
        <span className="text-xs text-gray-500 dark:text-gray-400 ml-auto">
          Default: <code className="font-mono bg-gray-100 dark:bg-gray-800 px-1 rounded">{defaultValue}</code>
        </span>
      )}
    </div>
    <p className="text-gray-600 dark:text-gray-400 text-sm">{description}</p>
  </div>
)

export default function APIPage() {
  const [searchQuery, setSearchQuery] = useState('')
  
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
            <span className="text-gray-900 dark:text-gray-100 font-medium">API Reference</span>
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl font-bold mb-6 text-black dark:text-white">
              API Reference
            </h1>
            
            <div className="prose dark:prose-invert max-w-none">
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
                This reference documents all components, props, and options available in Diagrammatic-UI.
              </p>
              
              <div className="relative mb-8">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  placeholder="Search API..."
                  className="block w-full pl-10 pr-4 py-2 border border-gray-200 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              
              <div className="mb-12">
                <h2 className="text-2xl font-bold mb-6 text-black dark:text-white">Components</h2>
                
                <APISection title="Graph" defaultOpen={true}>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    The main container component for rendering graph visualizations.
                  </p>
                  
                  <h4 className="text-lg font-semibold mb-3 text-black dark:text-white">Props</h4>
                  
                  <PropItem
                    name="data"
                    type="GraphData"
                    description="The graph data containing nodes and edges to visualize."
                    required={true}
                  />
                  
                  <PropItem
                    name="width"
                    type="number"
                    description="Width of the graph canvas in pixels."
                    defaultValue="800"
                  />
                  
                  <PropItem
                    name="height"
                    type="number"
                    description="Height of the graph canvas in pixels."
                    defaultValue="600"
                  />
                  
                  <PropItem
                    name="theme"
                    type="'light' | 'dark'"
                    description="Color theme for the graph visualization."
                    defaultValue="'light'"
                  />
                  
                  <PropItem
                    name="autoLayout"
                    type="'force' | 'circular' | 'tree' | 'spiral' | 'donut' | 'grid'"
                    description="Algorithm to use for automatically positioning nodes."
                    defaultValue="'force'"
                  />
                  
                  <PropItem
                    name="direction"
                    type="'horizontal' | 'vertical'"
                    description="Direction for hierarchical layouts like 'tree'."
                    defaultValue="'vertical'"
                  />
                  
                  <PropItem
                    name="nodeStyleConfig"
                    type="NodeStyleConfig"
                    description="Configuration object for styling nodes."
                  />
                  
                  <PropItem
                    name="edgeStyleConfig"
                    type="EdgeStyleConfig"
                    description="Configuration object for styling edges."
                  />
                  
                  <PropItem
                    name="interactionOptions"
                    type="InteractionOptions"
                    description="Options for controlling user interactions with the graph."
                  />
                  
                  <h4 className="text-lg font-semibold mb-3 mt-6 text-black dark:text-white">Event Handlers</h4>
                  
                  <PropItem
                    name="onNodeClick"
                    type="(nodeId: string) => void"
                    description="Callback fired when a node is clicked."
                  />
                  
                  <PropItem
                    name="onNodeHover"
                    type="(nodeId: string | null) => void"
                    description="Callback fired when a node is hovered or hover ends (null)."
                  />
                  
                  <PropItem
                    name="onEdgeClick"
                    type="(edgeId: string) => void"
                    description="Callback fired when an edge is clicked."
                  />
                  
                  <PropItem
                    name="onSelectionChange"
                    type="(selection: { nodes: string[], edges: string[] }) => void"
                    description="Callback fired when the selection changes."
                  />
                  
                  <PropItem
                    name="onLayoutComplete"
                    type="() => void"
                    description="Callback fired when the layout calculation completes."
                  />
                </APISection>
                
                <APISection title="Node">
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    Component for rendering individual nodes. Typically used as children of the Graph component.
                  </p>
                  
                  <h4 className="text-lg font-semibold mb-3 text-black dark:text-white">Props</h4>
                  
                  <PropItem
                    name="id"
                    type="string"
                    description="Unique identifier for the node."
                    required={true}
                  />
                  
                  <PropItem
                    name="label"
                    type="string"
                    description="Text label to display on the node."
                  />
                  
                  <PropItem
                    name="x"
                    type="number"
                    description="X-coordinate position of the node."
                  />
                  
                  <PropItem
                    name="y"
                    type="number"
                    description="Y-coordinate position of the node."
                  />
                  
                  <PropItem
                    name="type"
                    type="string"
                    description="Type of the node, used for styling and behavior."
                    defaultValue="'default'"
                  />
                  
                  <PropItem
                    name="data"
                    type="any"
                    description="Custom data to associate with the node."
                  />
                  
                  <PropItem
                    name="style"
                    type="React.CSSProperties"
                    description="Custom inline styles for the node."
                  />
                  
                  <PropItem
                    name="className"
                    type="string"
                    description="CSS class names to apply to the node."
                  />
                </APISection>
                
                <APISection title="Edge">
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    Component for rendering connections between nodes. Typically used as children of the Graph component.
                  </p>
                  
                  <h4 className="text-lg font-semibold mb-3 text-black dark:text-white">Props</h4>
                  
                  <PropItem
                    name="id"
                    type="string"
                    description="Unique identifier for the edge."
                  />
                  
                  <PropItem
                    name="source"
                    type="string"
                    description="ID of the source node."
                    required={true}
                  />
                  
                  <PropItem
                    name="target"
                    type="string"
                    description="ID of the target node."
                    required={true}
                  />
                  
                  <PropItem
                    name="label"
                    type="string"
                    description="Text label to display on the edge."
                  />
                  
                  <PropItem
                    name="type"
                    type="'default' | 'straight' | 'curved' | 'dashed'"
                    description="Type of the edge, affects rendering style."
                    defaultValue="'default'"
                  />
                  
                  <PropItem
                    name="data"
                    type="any"
                    description="Custom data to associate with the edge."
                  />
                  
                  <PropItem
                    name="style"
                    type="React.CSSProperties"
                    description="Custom inline styles for the edge."
                  />
                  
                  <PropItem
                    name="className"
                    type="string"
                    description="CSS class names to apply to the edge."
                  />
                </APISection>
              </div>
              
              <div className="mb-12">
                <h2 className="text-2xl font-bold mb-6 text-black dark:text-white">Type Definitions</h2>
                
                <APISection title="GraphData">
                  <div className="bg-gray-900 text-gray-100 rounded-lg p-4 my-4 overflow-x-auto">
                    <pre><code>{`interface GraphData {
  nodes: Node[];
  edges: Edge[];
  name?: string;
  category?: string;
  [key: string]: any;
}`}</code></pre>
                  </div>
                  
                  <PropItem
                    name="nodes"
                    type="Node[]"
                    description="Array of node objects."
                    required={true}
                  />
                  
                  <PropItem
                    name="edges"
                    type="Edge[]"
                    description="Array of edge objects."
                    required={true}
                  />
                  
                  <PropItem
                    name="name"
                    type="string"
                    description="Optional name for the graph."
                  />
                  
                  <PropItem
                    name="category"
                    type="string"
                    description="Optional category for the graph."
                  />
                </APISection>
                
                <APISection title="Node">
                  <div className="bg-gray-900 text-gray-100 rounded-lg p-4 my-4 overflow-x-auto">
                    <pre><code>{`interface Node {
  id: string;
  name?: string;
  type?: string;
  description?: string;
  sections?: Section[];
  path?: string;
  [key: string]: any;
}`}</code></pre>
                  </div>
                  
                  <PropItem
                    name="id"
                    type="string"
                    description="Unique identifier for the node."
                    required={true}
                  />
                  
                  <PropItem
                    name="name"
                    type="string"
                    description="Display name for the node."
                  />
                  
                  <PropItem
                    name="type"
                    type="string"
                    description="Type of the node, used for styling and behavior."
                  />
                  
                  <PropItem
                    name="description"
                    type="string"
                    description="Description text for the node."
                  />
                  
                  <PropItem
                    name="sections"
                    type="Section[]"
                    description="Array of sections for document-style nodes."
                  />
                  
                  <PropItem
                    name="path"
                    type="string"
                    description="Path information (e.g., file path for code nodes)."
                  />
                </APISection>
                
                <APISection title="Edge">
                  <div className="bg-gray-900 text-gray-100 rounded-lg p-4 my-4 overflow-x-auto">
                    <pre><code>{`interface Edge {
  id: string;
  source: string;
  target: string;
  label?: string;
  type?: string;
  [key: string]: any;
}`}</code></pre>
                  </div>
                  
                  <PropItem
                    name="id"
                    type="string"
                    description="Unique identifier for the edge."
                    required={true}
                  />
                  
                  <PropItem
                    name="source"
                    type="string"
                    description="ID of the source node."
                    required={true}
                  />
                  
                  <PropItem
                    name="target"
                    type="string"
                    description="ID of the target node."
                    required={true}
                  />
                  
                  <PropItem
                    name="label"
                    type="string"
                    description="Text label to display on the edge."
                  />
                  
                  <PropItem
                    name="type"
                    type="string"
                    description="Type of the edge, affects rendering style."
                  />
                </APISection>
                
                <APISection title="Section">
                  <div className="bg-gray-900 text-gray-100 rounded-lg p-4 my-4 overflow-x-auto">
                    <pre><code>{`interface Section {
  id: string;
  name: string;
  items: SectionItem[];
}`}</code></pre>
                  </div>
                  
                  <PropItem
                    name="id"
                    type="string"
                    description="Unique identifier for the section."
                    required={true}
                  />
                  
                  <PropItem
                    name="name"
                    type="string"
                    description="Display name for the section."
                    required={true}
                  />
                  
                  <PropItem
                    name="items"
                    type="SectionItem[]"
                    description="Array of items in the section."
                    required={true}
                  />
                </APISection>
                
                <APISection title="SectionItem">
                  <div className="bg-gray-900 text-gray-100 rounded-lg p-4 my-4 overflow-x-auto">
                    <pre><code>{`interface SectionItem {
  id: string;
  value: string;
  [key: string]: any;
}`}</code></pre>
                  </div>
                  
                  <PropItem
                    name="id"
                    type="string"
                    description="Unique identifier for the item."
                    required={true}
                  />
                  
                  <PropItem
                    name="value"
                    type="string"
                    description="Content of the item."
                    required={true}
                  />
                </APISection>
                
                <APISection title="NodeStyleConfig">
                  <div className="bg-gray-900 text-gray-100 rounded-lg p-4 my-4 overflow-x-auto">
                    <pre><code>{`interface NodeStyleConfig {
  type?: 'default' | 'document';
  typeStyles?: {
    [key: string]: {
      fill?: string;
      stroke?: string;
      header?: string;
      border?: string;
    }
  };
  defaultStyle?: {
    fill?: string;
    stroke?: string;
    header?: string;
    border?: string;
  };
}`}</code></pre>
                  </div>
                  
                  <PropItem
                    name="type"
                    type="'default' | 'document'"
                    description="The node rendering type."
                    defaultValue="'default'"
                  />
                  
                  <PropItem
                    name="typeStyles"
                    type="object"
                    description="Style configurations for different node types."
                  />
                  
                  <PropItem
                    name="defaultStyle"
                    type="object"
                    description="Default style for nodes without a specific type style."
                  />
                </APISection>
                
                <APISection title="InteractionOptions">
                  <div className="bg-gray-900 text-gray-100 rounded-lg p-4 my-4 overflow-x-auto">
                    <pre><code>{`interface InteractionOptions {
  selectionEnabled?: boolean;
  draggingEnabled?: boolean;
  zoomEnabled?: boolean;
  panningEnabled?: boolean;
  multiSelectionEnabled?: boolean;
  contextMenuEnabled?: boolean;
}`}</code></pre>
                  </div>
                  
                  <PropItem
                    name="selectionEnabled"
                    type="boolean"
                    description="Whether nodes and edges can be selected."
                    defaultValue="true"
                  />
                  
                  <PropItem
                    name="draggingEnabled"
                    type="boolean"
                    description="Whether nodes can be dragged."
                    defaultValue="true"
                  />
                  
                  <PropItem
                    name="zoomEnabled"
                    type="boolean"
                    description="Whether zooming is enabled."
                    defaultValue="true"
                  />
                  
                  <PropItem
                    name="panningEnabled"
                    type="boolean"
                    description="Whether panning is enabled."
                    defaultValue="true"
                  />
                  
                  <PropItem
                    name="multiSelectionEnabled"
                    type="boolean"
                    description="Whether multiple nodes/edges can be selected."
                    defaultValue="true"
                  />
                  
                  <PropItem
                    name="contextMenuEnabled"
                    type="boolean"
                    description="Whether context menu is enabled."
                    defaultValue="true"
                  />
                </APISection>
              </div>
            </div>
            
            <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800 flex justify-between items-center">
              <Link
                href="/docs/advanced"
                className="inline-flex items-center px-4 py-2 rounded-lg text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-colors"
              >
                <ArrowRight className="h-4 w-4 mr-2 rotate-180" />
                Previous: Advanced Usage
              </Link>
              <Link
                href="/docs/components"
                className="inline-flex items-center px-6 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 text-white font-medium shadow-sm hover:shadow-md transition-all"
              >
                <span>Next: Components</span>
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