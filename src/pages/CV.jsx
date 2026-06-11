export default function CV() {
  return (
    <section className="animate-fade-in">
      <h1 className="text-4xl font-bold mb-6">Curriculum Vitae</h1>
      <div className="prose dark:prose-invert max-w-none">
        
        <p className="text-lg leading-relaxed text-gray-600 dark:text-gray-300">
          Feel free to view or download my CV from the buttons below.
        </p>
        
        {/* Flex container for side-by-side buttons */}
        <div className="mt-10 flex flex-wrap gap-4">
          
          {/* View Button (Primary Solid) */}
          <a 
            href="/Eren_Badur_CV.pdf" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-6 py-3 bg-gray-900 text-white dark:bg-gray-100 dark:text-gray-900 font-medium rounded-lg hover:opacity-90 transition-opacity"
          >
            View PDF
          </a>

          {/* Download Button (Secondary Outline) */}
          <a 
            href="/Eren_Badur_CV.pdf" 
            download 
            className="inline-flex items-center justify-center px-6 py-3 border-2 border-gray-900 text-gray-900 dark:border-gray-100 dark:text-gray-100 font-medium rounded-lg hover:bg-gray-50 dark:hover:bg-slate-800 transition-colors"
          >
            Download PDF
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
              <polyline points="7 10 12 15 17 10"/>
              <line x1="12" y1="15" x2="12" y2="3"/>
            </svg>
          </a>

        </div>
      </div>
    </section>
  );
}