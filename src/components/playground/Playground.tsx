'use client';

import { useState, useRef, useEffect } from 'react';
import {
  SandpackProvider,
  SandpackLayout,
  SandpackCodeEditor,
  SandpackPreview,
  useSandpack,
  SandpackConsole,
  SandpackStack,
  SandpackFile,
  useActiveCode,
  SandpackFileExplorer
} from '@codesandbox/sandpack-react';
import { atomDark } from '@codesandbox/sandpack-themes';
import { Play, Check, Copy, TerminalSquare, FileCode, Layers } from 'lucide-react';

// Default code for the App.js file
const APP_CODE = `import { Graph } from 'diagrammatic-ui';

export default function App() {
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
}`;

// Copy button component
const CopyButton = () => {
  const { code } = useActiveCode();
  const [copied, setCopied] = useState(false);
  
  const copyToClipboard = () => {
    try {
      navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Error copying code:", err);
    }
  };
  
  return (
    <button 
      className="p-1.5 rounded-md hover:bg-gray-700 transition-colors"
      onClick={copyToClipboard}
      title="Copy code"
    >
      {copied ? (
        <Check className="w-4 h-4 text-green-500" />
      ) : (
        <Copy className="w-4 h-4 text-gray-400" />
      )}
    </button>
  );
};

// Run button component
const RunButton = () => {
  const { sandpack } = useSandpack();
  const [isRunning, setIsRunning] = useState(false);
  
  const handleRun = () => {
    setIsRunning(true);
    
    try {
      // Simplest approach: Add a timestamp comment to force a recompile
      // without losing user edits
      const currentCode = sandpack.files["/App.js"].code;
      
      // Remove any previous timestamp comments
      const cleanCode = currentCode.replace(/\/\/ Refresh timestamp: \d+\n/, '');
      
      // Add a new timestamp comment at the top
      const timestamp = Date.now();
      const commentedCode = `// Refresh timestamp: ${timestamp}\n${cleanCode}`;
      
      // Update the file with the timestamp, which triggers a recompile
      sandpack.updateFile("/App.js", commentedCode);
    } catch (err) {
      console.error("Error refreshing Sandpack:", err);
    }
    
    setTimeout(() => setIsRunning(false), 500);
  };
  
  return (
    <button
      onClick={handleRun}
      className="flex items-center px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-md transition-colors"
      disabled={isRunning}
    >
      <Play className="w-4 h-4 mr-2" />
      {isRunning ? 'Running...' : 'Run'}
    </button>
  );
};

// Mode switcher for editor/console views
interface ViewToggleProps {
  view: 'code' | 'console';
  setView: (view: 'code' | 'console') => void;
}

const ViewToggle = ({ view, setView }: ViewToggleProps) => {
  return (
    <div className="flex rounded-md border border-gray-700 overflow-hidden">
      <button
        className={`flex items-center px-3 py-1 ${view === 'code' ? 'bg-blue-600 text-white' : 'bg-gray-800 text-gray-400'}`}
        onClick={() => setView('code')}
      >
        <FileCode className="w-4 h-4 mr-1" />
        Code
      </button>
      <button
        className={`flex items-center px-3 py-1 ${view === 'console' ? 'bg-blue-600 text-white' : 'bg-gray-800 text-gray-400'}`}
        onClick={() => setView('console')}
      >
        <TerminalSquare className="w-4 h-4 mr-1" />
        Console
      </button>
    </div>
  );
};

// AutoRunListener component to handle code changes
const AutoRunListener = ({ autoRun }: { autoRun: boolean }) => {
  const { sandpack } = useSandpack();
  const { code } = useActiveCode();
  
  // Store the latest code to detect changes
  const prevCodeRef = useRef(code);
  
  // This effect will run whenever the code changes
  useEffect(() => {
    // Skip if auto-run is disabled
    if (!autoRun) return;
    
    // Only update if the code actually changed
    if (prevCodeRef.current !== code) {
      // Update the reference to the latest code
      prevCodeRef.current = code;
      
      // Delay the update slightly to avoid too many refreshes
      const timer = setTimeout(() => {
        // When auto-run is enabled, add a hidden comment at the end of the file
        // This forces a recompile without changing the visible code
        const timestamp = Date.now();
        const hiddenComment = `\n/* AutoRun: ${timestamp} */`;
        const codeWithoutComment = code.replace(/\n\/\* AutoRun: \d+ \*\/$/, '');
        
        // Update the file with the hidden comment
        sandpack.updateFile("/App.js", codeWithoutComment + hiddenComment);
      }, 800);
      
      return () => clearTimeout(timer);
    }
  }, [code, autoRun, sandpack]);
  
  return null;
};

interface PlaygroundProps {
  height?: string;
}

const Playground = ({ height = '700px' }: PlaygroundProps) => {
  const [view, setView] = useState<'code' | 'console'>('code');
  const [autoRun, setAutoRun] = useState(true);

  return (
    <div style={{ height }}>
      <SandpackProvider
        theme={atomDark}
        template="react"
        customSetup={{
          dependencies: {
            "react": "^19.0.0",
            "react-dom": "^19.0.0",
            "diagrammatic-ui": "0.1.1" 
          },
        }}
        files={{
          "/App.js": {
            code: APP_CODE,
            active: true
          },
          "/ErrorBoundary.js": {
            code: `import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ padding: '20px', color: 'red', backgroundColor: '#fff' }}>
          <h2>Something went wrong rendering the component</h2>
          <p>{this.state.error?.message || 'Unknown error'}</p>
          <button 
            onClick={() => this.setState({ hasError: false })}
            style={{ padding: '8px 16px', marginTop: '10px', cursor: 'pointer' }}
          >
            Try Again
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;`,
            hidden: false
          },
          "/index.js": {
            code: `import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import ErrorBoundary from "./ErrorBoundary";

// Apply any needed polyfills or patches here
if (typeof React.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE === 'undefined') {
  // This is a patch for the missing property - not guaranteed to work but worth trying
  React.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = {};
}

const root = createRoot(document.getElementById("root"));
root.render(
  <ErrorBoundary>
    <App />
  </ErrorBoundary>
);`,
            hidden: true
          }
        }}
        options={{
          autorun: true,
          recompileMode: "delayed",
          recompileDelay: 1000,
          externalResources: [
            "https://cdn.jsdelivr.net/npm/diagrammatic-ui@0.1.1/dist/index.umd.js"
          ],
          classes: {
            "sp-wrapper": "h-full",
            "sp-layout": "h-full",
            "sp-stack": "h-full"
          }
        }}
      >
        <AutoRunListener autoRun={autoRun} />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 h-full">
          {/* Editor Panel */}
          <div className="rounded-lg overflow-hidden border border-gray-700 bg-[#151515] shadow-lg flex flex-col">
            <div className="flex items-center justify-between bg-gray-800 px-4 py-2 border-b border-gray-700">
              <div className="flex items-center space-x-2">
                <h2 className="font-medium text-gray-200">Editor</h2>
                <ViewToggle view={view} setView={setView} />
              </div>
              <div className="flex space-x-2">
                <CopyButton />
              </div>
            </div>
            
            <div className="flex-1 min-h-0 overflow-hidden">
              <SandpackStack style={{ height: '100%' }}>
                {view === 'code' && (
                  <SandpackCodeEditor
                    showLineNumbers={true}
                    showInlineErrors={true}
                    wrapContent={true}
                    readOnly={false}
                    style={{ height: '100%' }}
                  />
                )}
                
                {view === 'console' && (
                  <SandpackConsole
                    showHeader={false}
                    style={{ height: '100%' }}
                  />
                )}
              </SandpackStack>
            </div>
            
            <div className="px-4 py-3 bg-gray-800 border-t border-gray-700 flex justify-between items-center">
              <div className="flex items-center">
                <label className="flex items-center text-gray-300 text-sm cursor-pointer">
                  <input 
                    type="checkbox" 
                    checked={autoRun}
                    onChange={(e) => setAutoRun(e.target.checked)}
                    className="mr-2 h-4 w-4"
                  />
                  Auto-run
                </label>
              </div>
              {!autoRun && <RunButton />}
            </div>
          </div>
          
          {/* Preview Panel */}
          <div className="rounded-lg overflow-hidden border border-gray-700 bg-white shadow-lg flex flex-col">
            <div className="bg-gray-800 px-4 py-2 border-b border-gray-700 flex items-center justify-between">
              <h2 className="font-medium text-gray-200">Preview</h2>
              <div className="text-xs text-gray-400">
                Using Diagrammatic-UI
              </div>
            </div>
            <div className="flex-1 bg-white overflow-hidden">
              <SandpackPreview
                showRefreshButton={true}
                showOpenInCodeSandbox={false}
                showNavigator={true}
                style={{ height: '100%' }}
              />
            </div>
          </div>
        </div>
      </SandpackProvider>
    </div>
  );
};

export default Playground; 