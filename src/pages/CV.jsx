export default function CV() {
  return (
    <section className="animate-fade-in">
      <h1 className="text-4xl font-bold mb-6">Curriculum Vitae</h1>
      <div className="prose dark:prose-invert max-w-none">
        <ul className="list-disc pl-5 space-y-2 text-gray-600 dark:text-gray-300">
          Feel free to download my CV from the button below.
        </ul>
        
        <div className="mt-10">
          {/* Resume */}
          <a href="/resume.pdf" download className="inline-block px-6 py-3 bg-gray-900 text-white dark:bg-gray-100 dark:text-gray-900 font-medium rounded-lg hover:opacity-90 transition-opacity">
            Download PDF
          </a>
        </div>
      </div>
    </section>
  );
}