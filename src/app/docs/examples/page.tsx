'use client'

import { MainNav } from '@/components/navigation/main-nav'
import { Footer } from '@/components/footer'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, Code, Copy, Check, Users, GitBranch, Route, Network } from 'lucide-react'
import { useState } from 'react'
import Image from 'next/image'

const CodeBlock = ({ code, language = 'tsx' }: { code: string, language?: string }) => {
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

const ExampleCard = ({ title, description, icon: Icon, href }: {
  title: string;
  description: string;
  icon: any;
  href: string;
}) => (
  <Link href={href} className="block group">
    <div className="rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-6 shadow-sm hover:shadow-md transition-all group-hover:border-purple-200 dark:group-hover:border-purple-900/30">
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
        <span className="font-medium">View example</span>
        <ArrowRight className="ml-1 w-4 h-4" />
      </div>
    </div>
  </Link>
)

export default function ExamplesPage() {
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
            <span className="text-gray-900 dark:text-gray-100 font-medium">Examples</span>
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl font-bold mb-6 text-black dark:text-white">
              Examples & Use Cases
            </h1>
            
            <div className="prose dark:prose-invert max-w-none">
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
                Explore the versatility of Diagrammatic-UI through these examples. Each example demonstrates a different use case and highlights specific features of the library.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-12">
                <ExampleCard
                  title="Organization Charts"
                  description="Visualize company structures and hierarchies with customizable org charts."
                  icon={Users}
                  href="#org-charts"
                />
                <ExampleCard
                  title="Process Flows"
                  description="Create workflow diagrams and decision trees with connected processes."
                  icon={GitBranch}
                  href="#process-flows"
                />
                <ExampleCard
                  title="Customer Journey Maps"
                  description="Map out customer experiences with detailed journey visualizations."
                  icon={Route}
                  href="#customer-journeys"
                />
                <ExampleCard
                  title="Network Topology"
                  description="Represent network infrastructure and connections between components."
                  icon={Network}
                  href="#network-topology"
                />
              </div>
              
              <h2 id="org-charts" className="text-2xl font-bold mt-16 mb-4 text-black dark:text-white scroll-mt-24">
                Organization Charts
              </h2>
              
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Organization charts are perfect for visualizing company structures, team hierarchies, and reporting relationships.
              </p>
              
              <div className="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 overflow-hidden my-8">
                <div className="p-4 bg-gray-50 dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
                  <h3 className="font-medium text-black dark:text-white">Organization Chart Example</h3>
                </div>
                <div className="p-6">
                  <div className="bg-gray-100 dark:bg-gray-800 rounded-lg h-64 flex items-center justify-center mb-4">
                    <p className="text-gray-500 dark:text-gray-400 text-center">
                      [Organization Chart Visualization]<br/>
                      <span className="text-sm">Interactive visualization would appear here</span>
                    </p>
                  </div>
                  
                  <CodeBlock 
                    code={`const orgChartData = {
 nodes: [
    { 
      id: 'ceo', 
      name: 'Jane Smith', 
      type: 'primary',
      description: 'Chief Executive Officer',
      sections: [
        {
          id: 'responsibilities',
          name: 'Responsibilities',
          items: [
            { id: 'resp1', value: 'Company Strategy' },
            { id: 'resp2', value: 'Investor Relations' },
            { id: 'resp3', value: 'Executive Leadership' }
          ]
        },
        {
          id: 'contact',
          name: 'Contact',
          items: [
            { id: 'cont1', value: 'jane@example.com' },
            { id: 'cont2', value: '+1 (555) 123-4567' }
          ]
        }
      ]
    },
    { 
      id: 'cto', 
      name: 'Bob Johnson', 
      type: 'secondary',
      description: 'Chief Technology Officer' 
    },
    { 
      id: 'cfo', 
      name: 'Alice Williams', 
      type: 'secondary',
      description: 'Chief Financial Officer' 
    },
    { 
      id: 'vpe', 
      name: 'Tom Davis', 
      type: 'tertiary',
      description: 'VP of Engineering' 
    },
    { 
      id: 'vps', 
      name: 'Sarah Brown', 
      type: 'tertiary',
      description: 'VP of Sales' 
    },
  ],
  edges: [
    { id: 'e1', source: 'ceo', target: 'cto' },
    { id: 'e2', source: 'ceo', target: 'cfo' },
    { id: 'e3', source: 'cto', target: 'vpe' },
    { id: 'e4', source: 'cfo', target: 'vps' },
  ],
  name: 'Company Org Chart',
  category: 'organization'
};

<Graph 
  data={orgChartData}
  theme="light"
  autoLayout="tree"
/>`} 
                  />
                </div>
              </div>
              
              <h2 id="process-flows" className="text-2xl font-bold mt-16 mb-4 text-black dark:text-white scroll-mt-24">
                Process Flows
              </h2>
              
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Process flows help visualize workflows, decision trees, and sequential operations. They're ideal for documenting business processes, software flows, and decision-making paths.
              </p>
              
              <div className="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 overflow-hidden my-8">
                <div className="p-4 bg-gray-50 dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
                  <h3 className="font-medium text-black dark:text-white">Process Flow Example</h3>
                </div>
                <div className="p-6">
                  <div className="bg-gray-100 dark:bg-gray-800 rounded-lg h-64 flex items-center justify-center mb-4">
                    <p className="text-gray-500 dark:text-gray-400 text-center">
                      [Process Flow Visualization]<br/>
                      <span className="text-sm">Interactive visualization would appear here</span>
                    </p>
                  </div>
                  
                  <CodeBlock 
                    code={`const processFlowData = {
 nodes: [
    { id: 'start', name: 'Start', type: 'input' },
    { id: 'processA', name: 'Process A', type: 'process', description: 'First step in our workflow' },
    { id: 'decision', name: 'Decision Point', type: 'process' },
    { id: 'processB', name: 'Process B', type: 'process' },
    { id: 'processC', name: 'Process C', type: 'process' },
    { id: 'end', name: 'End', type: 'output' },
  ],
  edges: [
    { id: 'e1', source: 'start', target: 'processA', label: 'Begin' },
    { id: 'e2', source: 'processA', target: 'decision', label: 'Evaluate' },
    { id: 'e3', source: 'decision', target: 'processB', label: 'If True' },
    { id: 'e4', source: 'decision', target: 'processC', label: 'If False' },
    { id: 'e5', source: 'processB', target: 'end' },
    { id: 'e6', source: 'processC', target: 'end' },
  ],
  name: 'Workflow Process',
  category: 'process'
};

<Graph 
  data={processFlowData}
  autoLayout="tree"
  direction="horizontal"
  nodeStyleConfig={{
    typeStyles: {
      input: { fill: '#d8f3dc', stroke: '#2d6a4f' },
      output: { fill: '#ffccd5', stroke: '#9d0208' },
      process: { fill: '#f1faee', stroke: '#1d3557' }
    }
  }}
/>`} 
                  />
                </div>
              </div>
              
              <h2 id="customer-journeys" className="text-2xl font-bold mt-16 mb-4 text-black dark:text-white scroll-mt-24">
                Customer Journey Maps
              </h2>
              
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Customer journey maps help visualize the entire customer experience, from awareness to advocacy. They're useful for marketing teams, UX designers, and customer experience professionals.
              </p>
              
              <div className="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 overflow-hidden my-8">
                <div className="p-4 bg-gray-50 dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
                  <h3 className="font-medium text-black dark:text-white">Customer Journey Map Example</h3>
                </div>
                <div className="p-6">
                  <div className="bg-gray-100 dark:bg-gray-800 rounded-lg h-64 flex items-center justify-center mb-4">
                    <p className="text-gray-500 dark:text-gray-400 text-center">
                      [Customer Journey Map Visualization]<br/>
                      <span className="text-sm">Interactive visualization would appear here</span>
                    </p>
                  </div>
                  
                  <CodeBlock 
                    code={`const customerJourneyData = {
  nodes: [
    { 
      id: 'awareness', 
      name: 'Awareness', 
      type: 'data',
      description: 'Customer becomes aware of the product/service',
      sections: [
        {
          id: 'channels',
          name: 'Channels',
          items: [
            { id: 'ch1', value: 'Social Media' },
            { id: 'ch2', value: 'Search Engines' },
            { id: 'ch3', value: 'Word of Mouth' }
          ]
        },
        {
          id: 'metrics',
          name: 'Metrics',
          items: [
            { id: 'm1', value: 'New Visitors' },
            { id: 'm2', value: 'Ad Impressions' },
            { id: 'm3', value: 'Brand Recognition' }
          ]
        }
      ]
    },
    { 
      id: 'consideration', 
      name: 'Consideration', 
      type: 'data',
      description: 'Customer evaluates options'
    },
    { 
      id: 'purchase', 
      name: 'Purchase', 
      type: 'data',
      description: 'Transaction occurs'
    },
    { 
      id: 'retention', 
      name: 'Retention', 
      type: 'data',
      description: 'Ongoing relationship'
    },
    { 
      id: 'advocacy', 
      name: 'Advocacy', 
      type: 'data',
      description: 'Customer promotes the brand'
    }
  ],
  edges: [
    { id: 'e1', source: 'awareness', target: 'consideration', label: 'Research' },
    { id: 'e2', source: 'consideration', target: 'purchase', label: 'Decision' },
    { id: 'e3', source: 'purchase', target: 'retention', label: 'Experience' },
    { id: 'e4', source: 'retention', target: 'advocacy', label: 'Satisfaction' },
    { id: 'e5', source: 'advocacy', target: 'awareness', type: 'dashed', label: 'Referral' }
  ],
  name: 'Customer Journey Map',
  category: 'journey'
};

<Graph 
  data={customerJourneyData}
  autoLayout="circular"
  nodeStyleConfig={{
    type: 'document',
    typeStyles: {
      data: { header: '#e0f2fe', border: '#0ea5e9' }
    }
  }}
/>`} 
                  />
                </div>
              </div>
              
              <h2 id="network-topology" className="text-2xl font-bold mt-16 mb-4 text-black dark:text-white scroll-mt-24">
                Network Topology
              </h2>
              
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Network topology diagrams help visualize the arrangement of elements in a computer network or other communications system. They're useful for IT professionals, network engineers, and system architects.
              </p>
              
              <div className="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 overflow-hidden my-8">
                <div className="p-4 bg-gray-50 dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
                  <h3 className="font-medium text-black dark:text-white">Network Topology Example</h3>
                </div>
                <div className="p-6">
                  <div className="bg-gray-100 dark:bg-gray-800 rounded-lg h-64 flex items-center justify-center mb-4">
                    <p className="text-gray-500 dark:text-gray-400 text-center">
                      [Network Topology Visualization]<br/>
                      <span className="text-sm">Interactive visualization would appear here</span>
                    </p>
                  </div>
                  
                  <CodeBlock 
                    code={`const networkData = {
  nodes: [
    { id: 'router', name: 'Main Router', type: 'root' },
    { id: 'switch1', name: 'Switch 1', type: 'branch' },
    { id: 'switch2', name: 'Switch 2', type: 'branch' },
    { id: 'server1', name: 'Web Server', type: 'leaf' },
    { id: 'server2', name: 'Database Server', type: 'leaf' },
    { id: 'server3', name: 'Application Server', type: 'leaf' },
    { id: 'client1', name: 'Client 1', type: 'client' },
    { id: 'client2', name: 'Client 2', type: 'client' },
  ],
  edges: [
    { id: 'e1', source: 'router', target: 'switch1' },
    { id: 'e2', source: 'router', target: 'switch2' },
    { id: 'e3', source: 'switch1', target: 'server1' },
    { id: 'e4', source: 'switch1', target: 'server2' },
    { id: 'e5', source: 'switch2', target: 'server3' },
    { id: 'e6', source: 'switch2', target: 'client1' },
    { id: 'e7', source: 'switch2', target: 'client2' },
  ]
};

<Graph 
  data={networkData}
  autoLayout="tree"
  nodeStyleConfig={{
    typeStyles: {
      root: { fill: '#fef3c7', stroke: '#d97706' },
      branch: { fill: '#e0f2fe', stroke: '#0ea5e9' },
      leaf: { fill: '#dcfce7', stroke: '#16a34a' },
      client: { fill: '#f3e8ff', stroke: '#9333ea' }
    }
  }}
/>`} 
                  />
                </div>
              </div>
              
              <h2 className="text-2xl font-bold mt-16 mb-4 text-black dark:text-white">
                Document-Style Nodes Example
              </h2>
              
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Document-style nodes are particularly useful for displaying structured information like code, methods, properties, and other technical details.
              </p>
              
              <div className="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 overflow-hidden my-8">
                <div className="p-4 bg-gray-50 dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
                  <h3 className="font-medium text-black dark:text-white">Document Nodes Example</h3>
                </div>
                <div className="p-6">
                  <div className="bg-gray-100 dark:bg-gray-800 rounded-lg h-64 flex items-center justify-center mb-4">
                    <p className="text-gray-500 dark:text-gray-400 text-center">
                      [Document Nodes Visualization]<br/>
                      <span className="text-sm">Interactive visualization would appear here</span>
                    </p>
                  </div>
                  
                  <CodeBlock 
                    code={`const documentData = {
  nodes: [
    {
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
    },
    {
      id: 'doc2',
      name: 'FishingBoat',
      type: 'class',
      path: 'FishingBoat.java',
      description: 'Implementation of a fishing boat',
      sections: [
        {
          id: 'methods',
          name: 'Methods',
          items: [
            { id: 'method1', value: 'public void row(int speed, Direction direction)' },
            { id: 'method2', value: 'public void fish(FishingNet net)' }
          ]
        }
      ]
    }
  ],
  edges: [
    { id: 'e1', source: 'doc2', target: 'doc1', label: 'implements' }
  ]
};

<Graph 
  data={documentData}
  nodeStyleConfig={{ 
    type: 'document',
    typeStyles: {
      interface: { 
        header: '#e0e7ff',
        border: '#6366f1'
      },
      class: { 
        header: '#dcfce7',
        border: '#22c55e' 
      }
    }
  }}
/>`} 
                  />
                </div>
              </div>
              
              <h2 className="text-2xl font-bold mt-16 mb-4 text-black dark:text-white">
                Try It Yourself
              </h2>
              
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Ready to experiment with these examples? Head over to our interactive playground to try them out and create your own visualizations.
              </p>
              
              <Link
                href="/playground"
                className="inline-flex items-center px-6 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 text-white font-medium shadow-sm hover:shadow-md transition-all"
              >
                <span>Open Playground</span>
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>
            
            <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800 flex justify-between items-center">
              <Link
                href="/docs/concepts"
                className="inline-flex items-center px-4 py-2 rounded-lg text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-colors"
              >
                <ArrowRight className="h-4 w-4 mr-2 rotate-180" />
                Previous: Basic Concepts
              </Link>
              <Link
                href="/docs/customization"
                className="inline-flex items-center px-6 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 text-white font-medium shadow-sm hover:shadow-md transition-all"
              >
                <span>Next: Customization</span>
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