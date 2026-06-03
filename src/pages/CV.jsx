export default function CV() {
  return (
    <section className="animate-fade-in">
      <h1 className="text-4xl font-bold mb-6">Curriculum Vitae</h1>
      <div className="prose dark:prose-invert max-w-none">
        
        {/* Corrected structural HTML tag */}
        <p className="text-lg leading-relaxed text-gray-600 dark:text-gray-300">
          Feel free to view my CV from the button below.
        </p>
        
        <div className="mt-10">
          {/* Modified Anchor Tag */}
          <a 
            href="/resume.pdf" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 bg-gray-900 text-white dark:bg-gray-100 dark:text-gray-900 font-medium rounded-lg hover:opacity-90 transition-opacity"
          >
            View PDF
          </a>
        </div>
      </div>
    </section>
  );
}