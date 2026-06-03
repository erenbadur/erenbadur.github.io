export default function Works() {
  return (
    <section className="animate-fade-in">
      <h1 className="text-4xl font-bold mb-6">Selected Works</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Blockchain */}
        <div className="p-6 border border-gray-200 dark:border-slate-800 rounded-lg hover:shadow-md transition-shadow">
          <h2 className="text-xl font-semibold mb-2">Blockchain</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            Built a simple, functioning Blockchain from scratch with C++
          </p>
          <a 
            href="https://github.com/erenbadur/blockchain.git" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-blue-600 dark:text-blue-400 font-medium hover:underline transition-colors"
          >
            View Repository 
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
              <polyline points="15 3 21 3 21 9"/>
              <line x1="10" y1="14" x2="21" y2="3"/>
            </svg>
          </a>
        </div>
        {/* Online Store */}
        <div className="p-6 border border-gray-200 dark:border-slate-800 rounded-lg hover:shadow-md transition-shadow">
          <h2 className="text-xl font-semibold mb-2">Online Store</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            Built an Amazon-like website with MongoDB, Express, React, and Node.js for a university school project.
          </p>
          <a 
            href="https://github.com/erenbadur/OnlineStore.git" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-blue-600 dark:text-blue-400 font-medium hover:underline transition-colors"
          >
            View Repository 
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
              <polyline points="15 3 21 3 21 9"/>
              <line x1="10" y1="14" x2="21" y2="3"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}