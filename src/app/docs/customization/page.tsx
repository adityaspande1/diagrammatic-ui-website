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

export default function CustomizationPage() {
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
            <span className="text-gray-900 dark:text-gray-100 font-medium">Customization</span>
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl font-bold mb-6 text-black dark:text-white">
              Customization
            </h1>
            
            <div className="prose dark:prose-invert max-w-none">
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
                Diagrammatic-UI provides powerful customization options to create tailored graph visualizations. This guide covers custom renderers, styling, and advanced customization patterns.
              </p>
              
              <h2 className="text-2xl font-bold mt-12 mb-4 text-black dark:text-white">
                Custom Node Renderers
              </h2>
              
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                For complete control over node appearance, you can create custom node renderers:
              </p>
              
              <CodeBlock 
                code={`import React from 'react';
import { Graph, GraphNodeProps } from 'diagrammatic-ui';

// Custom node renderer component
const CustomNodeRenderer: React.FC<GraphNodeProps> = (props) => {
  const { 
    node, 
    position, 
    isHighlighted, 
    isPathHighlighted,
    onNodeClick, 
    zoomScale = 1 
  } = props;
  
  // Scale node size based on zoom level
  const baseSize = 60;
  const size = baseSize / zoomScale;
  
  // Determine color based on node state
  let fillColor = '#e6f7ff';
  if (isHighlighted) fillColor = '#1890ff';
  if (isPathHighlighted) fillColor = '#91d5ff';
  
  return (
    <g 
      transform={\`translate(\${position.x}, \${position.y})\`}
      onClick={() => onNodeClick?.(node)}
      style={{ cursor: 'pointer' }}
    >
      {/* Node shape */}
      <rect 
        x={-size/2} 
        y={-size/2} 
        width={size} 
        height={size} 
        rx={8}
        fill={fillColor}
        stroke="#1890ff"
        strokeWidth={2}
      />
      
      {/* Node label */}
      <text 
        textAnchor="middle" 
        dominantBaseline="middle"
        fill="#000000"
        fontSize={14 / zoomScale}
        fontWeight={isHighlighted ? 'bold' : 'normal'}
      >
        {node.label || node.id}
      </text>
      
      {/* Custom badge if node has a specific type */}
      {node.type === 'important' && (
        <circle 
          cx={size/2 - 5} 
          cy={-size/2 + 5} 
          r={8 / zoomScale} 
          fill="#f5222d" 
        />
      )}
    </g>
  );
};

// Use the custom renderer
const CustomNodesGraph = () => {
  return (
    <Graph
      data={graphData}
      nodeStyleConfig={{
        type: 'custom',
        renderer: CustomNodeRenderer
      }}
    />
  );
};`} 
              />
              
              <h2 className="text-2xl font-bold mt-12 mb-4 text-black dark:text-white">
                Custom Edge Rendering
              </h2>
              
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Customize edge appearance with SVG paths:
              </p>
              
              <CodeBlock 
                code={`import React from 'react';
import { Graph } from 'diagrammatic-ui';

const CustomEdgesGraph = () => {
  // Define custom edge renderer
  const renderEdge = ({ edge, sourcePosition, targetPosition, isHighlighted }) => {
    // Calculate control points for a curved edge
    const dx = targetPosition.x - sourcePosition.x;
    const dy = targetPosition.y - sourcePosition.y;
    const controlX = sourcePosition.x + dx / 2;
    const controlY = sourcePosition.y + dy / 2 - 50;
    
    // Create SVG path
    const path = \`M \${sourcePosition.x} \${sourcePosition.y} Q \${controlX} \${controlY}, \${targetPosition.x} \${targetPosition.y}\`;
    
    return (
      <g>
        <path
          d={path}
          stroke={isHighlighted ? '#1890ff' : '#bfbfbf'}
          strokeWidth={isHighlighted ? 2 : 1}
          fill="none"
          strokeDasharray={edge.type === 'dashed' ? '5,5' : ''}
        />
        {edge.label && (
          <text
            x={controlX}
            y={controlY - 10}
            textAnchor="middle"
            fill="#000000"
            fontSize={12}
            fontWeight={isHighlighted ? 'bold' : 'normal'}
          >
            {edge.label}
          </text>
        )}
      </g>
    );
  };
  
  return (
    <Graph
      data={graphData}
      edgeRenderer={renderEdge}
    />
  );
};`} 
              />
              
              <h2 className="text-2xl font-bold mt-12 mb-4 text-black dark:text-white">
                Controlled Graph State
              </h2>
              
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                For more control over the graph state, you can create a controlled component:
              </p>
              
              <CodeBlock 
                code={`import React, { useState, useCallback } from 'react';
import { Graph, GraphData, Node, Edge, Position } from 'diagrammatic-ui';

const ControlledGraph = () => {
  // Maintain graph data in state
  const [graphData, setGraphData] = useState<GraphData>({
    nodes: [
      { id: '1', label: 'Node 1' },
      { id: '2', label: 'Node 2' }
    ],
    edges: [
      { id: 'e1', source: '1', target: '2' }
    ]
  });
  
  // Track node positions
  const [nodePositions, setNodePositions] = useState<Record<string, Position>>({});
  
  // Track selected nodes
  const [selectedNodes, setSelectedNodes] = useState<string[]>([]);
  
  // Handle node position changes (dragging)
  const handleNodePositionChange = useCallback((nodeId: string, position: Position) => {
    setNodePositions(prev => ({
      ...prev,
      [nodeId]: position
    }));
  }, []);
  
  // Handle node selection
  const handleSelectionChange = useCallback((event) => {
    setSelectedNodes(event.selectedNodes.map((node: Node) => node.id));
  }, []);
  
  // Add a new node
  const addNode = useCallback(() => {
    const newNodeId = \`node-\${graphData.nodes.length + 1}\`;
    setGraphData(prev => ({
      ...prev,
      nodes: [
        ...prev.nodes,
        { id: newNodeId, label: \`Node \${prev.nodes.length + 1}\` }
      ]
    }));
  }, [graphData.nodes.length]);
  
  // Connect selected nodes
  const connectNodes = useCallback(() => {
    if (selectedNodes.length === 2) {
      const [source, target] = selectedNodes;
      const newEdgeId = \`edge-\${graphData.edges.length + 1}\`;
      
      setGraphData(prev => ({
        ...prev,
        edges: [
          ...prev.edges,
          { id: newEdgeId, source, target }
        ]
      }));
    }
  }, [selectedNodes, graphData.edges.length]);
  
  return (
    <div>
      <div className="controls">
        <button onClick={addNode}>Add Node</button>
        <button 
          onClick={connectNodes} 
          disabled={selectedNodes.length !== 2}
        >
          Connect Selected Nodes
        </button>
      </div>
      
      <Graph
        data={graphData}
        interactionOptions={{
          selectionEnabled: true,
          multiSelectionEnabled: true,
          draggingEnabled: true
        }}
        onSelectionChange={handleSelectionChange}
        onNodePositionChange={handleNodePositionChange}
      />
    </div>
  );
};`} 
              />
              
              <h2 className="text-2xl font-bold mt-12 mb-4 text-black dark:text-white">
                Integration with External Libraries
              </h2>
              
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Integrate with D3.js for advanced visualizations:
              </p>
              
              <CodeBlock 
                code={`import React, { useRef, useEffect } from 'react';
import { Graph, GraphData, Node } from 'diagrammatic-ui';
import * as d3 from 'd3';

const D3EnhancedGraph = () => {
  const svgRef = useRef(null);
  
  // Custom node renderer that includes a D3 pie chart
  const renderNode = (props) => {
    const { node, position, isHighlighted } = props;
    
    // Create a unique ID for this node's chart
    const chartId = \`pie-chart-\${node.id}\`;
    
    return (
      <g transform={\`translate(\${position.x}, \${position.y})\`}>
        <rect
          x={-50}
          y={-50}
          width={100}
          height={100}
          rx={8}
          fill={isHighlighted ? '#e6f7ff' : '#ffffff'}
          stroke="#1890ff"
          strokeWidth={2}
        />
        <text
          y={-30}
          textAnchor="middle"
          fill="#000000"
          fontSize={14}
        >
          {node.label}
        </text>
        {/* Container for D3 to render into */}
        <g id={chartId} transform="translate(0, 10)" />
      </g>
    );
  };
  
  // Use D3 to create pie charts inside the nodes
  useEffect(() => {
    if (!svgRef.current) return;
    
    // For each node with data
    graphData.nodes.forEach(node => {
      if (!node.data?.chartData) return;
      
      const chartContainer = d3.select(\`#pie-chart-\${node.id}\`);
      if (chartContainer.empty()) return;
      
      // Clear previous chart
      chartContainer.selectAll('*').remove();
      
      // Create pie chart
      const width = 80;
      const height = 80;
      const radius = Math.min(width, height) / 2;
      
      const pie = d3.pie().value(d => d.value);
      const arc = d3.arc().innerRadius(0).outerRadius(radius);
      
      const arcs = chartContainer.selectAll('.arc')
        .data(pie(node.data.chartData))
        .enter()
        .append('g')
        .attr('class', 'arc');
      
      arcs.append('path')
        .attr('d', arc)
        .attr('fill', d => d.data.color);
    });
  }, [graphData, svgRef.current]);
  
  return (
    <div ref={svgRef}>
      <Graph
        data={graphData}
        nodeStyleConfig={{
          type: 'custom',
          renderer: renderNode
        }}
      />
    </div>
  );
};`} 
              />
              
              <h2 className="text-2xl font-bold mt-12 mb-4 text-black dark:text-white">
                Performance Optimization
              </h2>
              
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                For large graphs, consider these performance optimizations:
              </p>
              
              <CodeBlock 
                code={`import React, { useMemo } from 'react';
import { Graph, GraphData } from 'diagrammatic-ui';

const LargeGraphOptimized = ({ rawData }) => {
  // Filter and process data to reduce complexity
  const optimizedData = useMemo(() => {
    // Only show important nodes if there are too many
    const shouldFilter = rawData.nodes.length > 500;
    
    if (shouldFilter) {
      // Filter to only important nodes
      const importantNodes = rawData.nodes.filter(
        node => node.type === 'important' || node.data?.weight > 10
      );
      
      const importantNodeIds = new Set(importantNodes.map(n => n.id));
      
      // Keep only edges between important nodes
      const relevantEdges = rawData.edges.filter(
        edge => importantNodeIds.has(edge.source) && importantNodeIds.has(edge.target)
      );
      
      return {
        nodes: importantNodes,
        edges: relevantEdges
      };
    }
    
    return rawData;
  }, [rawData]);
  
  return (
    <Graph
      data={optimizedData}
      // Use a simpler layout for large graphs
      autoLayout={optimizedData.nodes.length > 200 ? 'grid' : 'force'}
      // Disable expensive features for large graphs
      interactionOptions={{
        draggingEnabled: optimizedData.nodes.length < 300,
        zoomEnabled: true,
        panningEnabled: true,
        // Disable multi-selection for better performance
        multiSelectionEnabled: false
      }}
      // Use simplified node rendering for large graphs
      nodeStyleConfig={{
        type: optimizedData.nodes.length > 200 ? 'compact' : 'default'
      }}
    />
  );
};`} 
              />
              
              <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800 flex justify-between items-center">
                <Link
                  href="/docs/examples"
                  className="inline-flex items-center px-4 py-2 rounded-lg text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-colors"
                >
                  <ArrowRight className="h-4 w-4 mr-2 rotate-180" />
                  Previous: Examples
                </Link>
                <Link
                  href="/docs/advanced"
                  className="inline-flex items-center px-6 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 text-white font-medium shadow-sm hover:shadow-md transition-all"
                >
                  <span>Next: Advanced Usage</span>
                  <ArrowRight className="ml-2 w-4 h-4" />
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