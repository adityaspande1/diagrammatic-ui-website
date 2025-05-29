import Link from 'next/link'
import { Github, Twitter, Mail } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-gray-50 dark:bg-gray-950 border-t border-gray-200 dark:border-gray-800 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-purple-500/5 to-blue-500/5 dark:from-purple-500/10 dark:to-blue-500/10 rounded-full blur-3xl transform translate-y-1/2 -translate-x-1/2" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-blue-500/5 to-purple-500/5 dark:from-blue-500/10 dark:to-purple-500/10 rounded-full blur-3xl transform -translate-y-1/2 translate-x-1/2" />
      </div>
      
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-5">
              <span className="text-xl font-[var(--font-syne-mono)] text-gray-900 dark:text-gray-100">Diagrammatic-UI</span>
            </div>
            <p className="text-gray-600 dark:text-gray-400 max-w-md mb-8">
              A powerful and intuitive graph visualization library for React. 
              Build interactive, responsive diagrams that captivate your users.
            </p>
            <div className="flex space-x-3">
              <a 
                href="https://github.com/Optivance/digrammatic-ui" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2.5 rounded-full bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-purple-50 dark:hover:bg-purple-900/30 hover:text-purple-600 dark:hover:text-purple-400 shadow-sm hover:shadow transition-all"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a 
                href="https://twitter.com/yourhandle" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2.5 rounded-full bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-blue-900/30 hover:text-blue-600 dark:hover:text-blue-400 shadow-sm hover:shadow transition-all"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a 
                href="mailto:contact@digrammatic-ui.com" 
                className="p-2.5 rounded-full bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-purple-50 dark:hover:bg-purple-900/30 hover:text-purple-600 dark:hover:text-purple-400 shadow-sm hover:shadow transition-all"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-5">Product</h3>
            <ul className="space-y-3">
              {[
                { text: 'Documentation', href: '/docs' },
                { text: 'Playground', href: '/playground' },
    
                // { text: 'Releases', href: '/releases' },
              ].map((item) => (
                <li key={item.text}>
                  <Link 
                    href={item.href}
                    className="text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                  >
                    {item.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-5">Resources</h3>
            <ul className="space-y-3">
              {[
                { text: 'Getting Started', href: '/docs/installation' },
                { text: 'API Reference', href: '/docs/api' },
                

              ].map((item) => (
                <li key={item.text}>
                  <Link 
                    href={item.href}
                    className="text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                  >
                    {item.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 dark:text-gray-400 text-sm">
              &copy; {new Date().getFullYear()} Diagrammatic-UI. All rights reserved.
            </p>
            <div className="mt-4 md:mt-0">
              <span className="text-sm text-gray-500 dark:text-gray-400 flex items-center">
                <span>Proudly developed by</span>
                <a 
                  href="https://dependency-analysis-website.vercel.app/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center ml-2 bg-gradient-to-r from-purple-500/10 to-blue-500/10 dark:from-purple-500/20 dark:to-blue-500/20 px-3 py-1 rounded-full text-purple-600 dark:text-purple-400 font-medium hover:from-purple-500/20 hover:to-blue-500/20 dark:hover:from-purple-500/30 dark:hover:to-blue-500/30 transition-all"
                >
                  Optivance
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
} 