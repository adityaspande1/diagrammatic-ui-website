'use client'

import { MainNav } from '@/components/navigation/main-nav'
import { Footer } from '@/components/footer'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, Code, Copy, Check } from 'lucide-react'
import { useState } from 'react'

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

export default function AdvancedPage() {
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
            <span className="text-gray-900 dark:text-gray-100 font-medium">Advanced Usage</span>
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl font-bold mb-6 text-black dark:text-white">
              Advanced Usage
            </h1>
            
            <div className="prose dark:prose-invert max-w-none">
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
                This guide covers advanced usage patterns and techniques for Diagrammatic-UI, focusing on data adapters and integrations with other libraries.
              </p>
              
              <h2 className="text-2xl font-bold mt-12 mb-4 text-black dark:text-white">
                Data Adapters
              </h2>
              
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Diagrammatic-UI includes adapters for converting between different graph data formats. These adapters help you integrate with various data sources.
              </p>
              
              <div className="overflow-x-auto my-6">
                <table className="min-w-full border border-gray-200 dark:border-gray-800 rounded-lg">
                  <thead>
                    <tr className="bg-gray-50 dark:bg-gray-900">
                      <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900 dark:text-gray-100 border-b border-gray-200 dark:border-gray-800">Adapter</th>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900 dark:text-gray-100 border-b border-gray-200 dark:border-gray-800">Purpose</th>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900 dark:text-gray-100 border-b border-gray-200 dark:border-gray-800">Input Format</th>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900 dark:text-gray-100 border-b border-gray-200 dark:border-gray-800">Output Format</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 dark:divide-gray-800">
                    <tr className="bg-white dark:bg-gray-950">
                      <td className="px-4 py-3 text-sm text-gray-900 dark:text-gray-100">D3ForceAdapter</td>
                      <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-400">D3.js force layout compatibility</td>
                      <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-400">D3 force simulation data</td>
                      <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-400">Digrammatic UI format</td>
                    </tr>
                    <tr className="bg-white dark:bg-gray-950">
                      <td className="px-4 py-3 text-sm text-gray-900 dark:text-gray-100">CytoscapeAdapter</td>
                      <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-400">Cytoscape.js compatibility</td>
                      <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-400">Cytoscape.js elements</td>
                      <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-400">Digrammatic UI format</td>
                    </tr>
                    <tr className="bg-white dark:bg-gray-950">
                      <td className="px-4 py-3 text-sm text-gray-900 dark:text-gray-100">AdjacencyMatrixAdapter</td>
                      <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-400">Matrix representation</td>
                      <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-400">Adjacency matrix</td>
                      <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-400">Digrammatic UI format</td>
                    </tr>
                    <tr className="bg-white dark:bg-gray-950">
                      <td className="px-4 py-3 text-sm text-gray-900 dark:text-gray-100">DependencyTreeAdapter</td>
                      <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-400">Hierarchical tree structures</td>
                      <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-400">Dependency tree</td>
                      <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-400">Digrammatic UI format</td>
                    </tr>
                    <tr className="bg-white dark:bg-gray-950">
                      <td className="px-4 py-3 text-sm text-gray-900 dark:text-gray-100">JSONGraphAdapter</td>
                      <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-400">Standard JSON graph formats</td>
                      <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-400">JSON Graph Format</td>
                      <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-400">Digrammatic UI format</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              <h3 className="text-xl font-bold mt-8 mb-4 text-black dark:text-white">
                Using Adapters
              </h3>
              
              <h4 className="text-lg font-semibold mt-6 mb-2 text-black dark:text-white">
                Direct Import
              </h4>
              
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                You can import adapters directly:
              </p>
              
              <CodeBlock 
                code={`import { D3ForceAdapter, CytoscapeAdapter } from 'diagrammatic-ui';

// Create an adapter instance
const d3Adapter = new D3ForceAdapter();

// Convert from D3 format to Digrammatic UI format
const d3Data = {
  nodes: [
    { id: "1", name: "Node 1" },
    { id: "2", name: "Node 2" }
  ],
  links: [
    { source: "1", target: "2" }
  ]
};

const graphData = d3Adapter.toGraph(d3Data);

// Use the converted data
<Graph data={graphData} />

// Convert back to D3 format
const convertedD3Data = d3Adapter.fromGraph(graphData);`} 
              />
              
              <h4 className="text-lg font-semibold mt-6 mb-2 text-black dark:text-white">
                Using Helper Functions
              </h4>
              
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                For convenience, the library provides helper functions:
              </p>
              
              <CodeBlock 
                code={`import { 
  convertFromD3, 
  convertToD3,
  convertFromCytoscape,
  convertToCytoscape 
} from 'diagrammatic-ui';

// Convert from D3 format
const graphData = convertFromD3(d3Data);

// Convert to Cytoscape format
const cytoscapeData = convertToCytoscape(graphData);`} 
              />
              
              <h4 className="text-lg font-semibold mt-6 mb-2 text-black dark:text-white">
                Using the Adapter Factory
              </h4>
              
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                For dynamic adapter selection:
              </p>
              
              <CodeBlock 
                code={`import { AdapterFactory, DataFormatType } from 'diagrammatic-ui';

function convertData(data: any, format: DataFormatType) {
  return AdapterFactory.toGraph(data, format);
}

// Usage
const graphData = convertData(sourceData, 'cytoscape');`} 
              />
              
              <h2 className="text-2xl font-bold mt-12 mb-4 text-black dark:text-white">
                Adapter Details
              </h2>
              
              <h3 className="text-xl font-bold mt-8 mb-4 text-black dark:text-white">
                D3ForceAdapter
              </h3>
              
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Converts between D3.js force simulation data and Digrammatic UI format.
              </p>
              
              <h4 className="text-lg font-semibold mt-6 mb-2 text-black dark:text-white">
                D3 Format
              </h4>
              
              <CodeBlock 
                language="typescript"
                code={`interface D3ForceData {
  nodes: Array<{
    id: string;
    name?: string;
    [key: string]: any;
  }>;
  links: Array<{
    source: string;
    target: string;
    [key: string]: any;
  }>;
}`} 
              />
              
              <h4 className="text-lg font-semibold mt-6 mb-2 text-black dark:text-white">
                Example
              </h4>
              
              <CodeBlock 
                code={`import { D3ForceAdapter } from 'diagrammatic-ui';

const d3Data = {
  nodes: [
    { id: "1", name: "Node 1", group: 1 },
    { id: "2", name: "Node 2", group: 2 }
  ],
  links: [
    { source: "1", target: "2", value: 1 }
  ]
};

const adapter = new D3ForceAdapter();
const graphData = adapter.toGraph(d3Data);`} 
              />
              
              <h3 className="text-xl font-bold mt-8 mb-4 text-black dark:text-white">
                CytoscapeAdapter
              </h3>
              
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Converts between Cytoscape.js elements and Digrammatic UI format.
              </p>
              
              <h4 className="text-lg font-semibold mt-6 mb-2 text-black dark:text-white">
                Cytoscape Format
              </h4>
              
              <CodeBlock 
                language="typescript"
                code={`interface CytoscapeData {
  elements: {
    nodes: Array<{
      data: {
        id: string;
        label?: string;
        [key: string]: any;
      };
      position?: { x: number; y: number };
      [key: string]: any;
    }>;
    edges: Array<{
      data: {
        id: string;
        source: string;
        target: string;
        [key: string]: any;
      };
      [key: string]: any;
    }>;
  };
}`} 
              />
              
              <h4 className="text-lg font-semibold mt-6 mb-2 text-black dark:text-white">
                Example
              </h4>
              
              <CodeBlock 
                code={`import { CytoscapeAdapter } from 'diagrammatic-ui';

const cytoscapeData = {
  elements: {
    nodes: [
      { data: { id: '1', label: 'Node 1' }, position: { x: 100, y: 100 } },
      { data: { id: '2', label: 'Node 2' }, position: { x: 200, y: 200 } }
    ],
    edges: [
      { data: { id: 'e1', source: '1', target: '2', label: 'connects to' } }
    ]
  }
};

const adapter = new CytoscapeAdapter();
const graphData = adapter.toGraph(cytoscapeData);`} 
              />
              
              <h3 className="text-xl font-bold mt-8 mb-4 text-black dark:text-white">
                Dynamic Graph Updates
              </h3>
              
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Handle dynamic updates to the graph data:
              </p>
              
              <CodeBlock 
                code={`import React, { useState, useEffect } from 'react';
import { Graph, GraphData } from 'diagrammatic-ui';

const DynamicGraph = () => {
  const [graphData, setGraphData] = useState<GraphData>({
    nodes: [],
    edges: []
  });
  
  // Simulate data loading or real-time updates
  useEffect(() => {
    // Initial data load
    fetchGraphData().then(data => {
      setGraphData(data);
    });
    
    // Set up subscription for real-time updates
    const subscription = subscribeToUpdates(update => {
      setGraphData(prevData => {
        // Handle different update types
        switch (update.type) {
          case 'ADD_NODE':
            return {
              ...prevData,
              nodes: [...prevData.nodes, update.node]
            };
            
          case 'REMOVE_NODE':
            return {
              ...prevData,
              nodes: prevData.nodes.filter(n => n.id !== update.nodeId),
              // Also remove any edges connected to this node
              edges: prevData.edges.filter(
                e => e.source !== update.nodeId && e.target !== update.nodeId
              )
            };
            
          case 'ADD_EDGE':
            return {
              ...prevData,
              edges: [...prevData.edges, update.edge]
            };
            
          case 'UPDATE_NODE':
            return {
              ...prevData,
              nodes: prevData.nodes.map(n => 
                n.id === update.nodeId ? { ...n, ...update.changes } : n
              )
            };
            
          default:
            return prevData;
        }
      });
    });
    
    // Clean up subscription
    return () => {
      subscription.unsubscribe();
    };
  }, []);
  
  return (
    <Graph
      data={graphData}
      autoLayout="force"
      layoutOptions={{
        // Use incremental layout for better performance with dynamic updates
        incremental: true,
        // Reduce animation time for quicker updates
        animationDuration: 300
      }}
    />
  );
};`} 
              />
              
              <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800 flex justify-between items-center">
                <Link
                  href="/docs/customization"
                  className="inline-flex items-center px-4 py-2 rounded-lg text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-colors"
                >
                  <ArrowRight className="h-4 w-4 mr-2 rotate-180" />
                  Previous: Customization
                </Link>
            
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      
      <Footer />
    </main>
  )
} 