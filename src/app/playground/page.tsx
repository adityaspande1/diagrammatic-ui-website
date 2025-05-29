import dynamic from 'next/dynamic';
import { Code } from 'lucide-react';

// Import the Playground component with SSR disabled
const PlaygroundWithNoSSR = dynamic(
  () => import('@/components/playground/Playground'),
  { ssr: false }
);

export default function PlaygroundPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 ">
      <header className="py-10 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-950 ">
        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-flex items-center px-4 py-1.5 mb-4 rounded-fullark:text-blue-300 text-sm font-medium">
            
          </div>
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-3">
            Diagrammatic-UI Playground
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Write, test, and visualize your Diagrammatic-UI components in real-time
          </p>
        </div>
      </header>
      
      <main className="py-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <PlaygroundWithNoSSR height="700px" />
          
          <div className="mt-20 bg-white dark:bg-gray-900 rounded-xl p-6 border border-gray-200 dark:border-gray-800 shadow">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3">About the Playground</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              This playground allows you to write and test Diagrammatic-UI components directly in your browser using react-live for real-time code evaluation.
            </p>
            <div className="mt-4 border-t border-gray-200 dark:border-gray-800 pt-4">
              <h3 className="font-bold text-gray-800 dark:text-gray-200 mb-2">Tips:</h3>
              <ul className="list-disc pl-5 space-y-1 text-gray-600 dark:text-gray-400">
                <li>The code is evaluated in real-time as you type</li>
                <li>Write your code as a function that returns JSX</li>
                <li>The <code className="bg-gray-100 dark:bg-gray-800 px-1 rounded">Graph</code> component is ready to use without imports</li>
                <li>Configure graph appearance with <code className="bg-gray-100 dark:bg-gray-800 px-1 rounded">theme</code> and <code className="bg-gray-100 dark:bg-gray-800 px-1 rounded">autoLayout</code> props</li>
                <li>Set layout options with <code className="bg-gray-100 dark:bg-gray-800 px-1 rounded">autoLayout: 'circular'</code> (other options: 'tree', 'grid')</li>
              </ul>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
} 