import profileImage from '../assets/profile.jpg';

export default function About() {
  return (
    <section className="animate-fade-in flex flex-col md:flex-row items-center gap-8 md:gap-12 mt-4">
      
      {/* Image Container */}
      <div className="w-48 h-48 md:w-64 md:h-64 shrink-0">
        <img 
          src={profileImage} 
          alt="Profile Portrait" 
          className="w-full h-full object-cover rounded-full shadow-lg border-4 border-gray-100 dark:border-slate-800"
        />
      </div>

      {/* Text Container */}
      <div className="text-center md:text-left flex flex-col items-center md:items-start">
        <h1 className="text-4xl font-bold mb-6">Eren Badur</h1>
        
        {/* First Paragraph */}
        <p className="text-lg leading-relaxed text-gray-600 dark:text-gray-300 mb-4">
          Ranked 1st in the 2016 Turkish National High School Placement Exam (TEOG) with full marks. Studied in Robert College. Completed BSc in Computer Science and Engineering at Sabancı University.
        </p>

        {/* Second Paragraph */}
        <p className="text-lg leading-relaxed text-gray-600 dark:text-gray-300 mb-4">
          Interested in algorithmic trading with C++ & machine learning, and full-stack software development.
        </p>
        
        {/* Third Paragraph */}
        <p className="text-lg leading-relaxed text-gray-600 dark:text-gray-300">
          Previously worked as a Machine Learning Engineer at{' '}
          <a 
            href="https://www.qnb.com.tr/en/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="font-medium text-blue-600 dark:text-blue-400 hover:underline transition-colors"
          >
            QNB
          </a>{' '}
          and a Financial Engineer at{' '}
          <a 
            href="https://www.riskoptima.io/index.html" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="font-medium text-blue-600 dark:text-blue-400 hover:underline transition-colors"
          >
            Riskoptima Wealth Tech
          </a>.
        </p>

        {/* Social Links Container */}
        <div className="flex gap-4 mt-8">
          {/* Email Icon */}
          <a 
            href="mailto:my_email@gmail.com"
            className="p-2 text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors bg-gray-100 hover:bg-gray-200 dark:bg-slate-800 dark:hover:bg-slate-700 rounded-full"
            aria-label="Send Email"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect width="20" height="16" x="2" y="4" rx="2"/>
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
            </svg>
          </a>

          {/* LinkedIn Icon */}
          <a 
            href="https://www.linkedin.com/in/erenbadur/"
            target="_blank" 
            rel="noopener noreferrer"
            className="p-2 text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors bg-gray-100 hover:bg-blue-50 dark:bg-slate-800 dark:hover:bg-slate-700 rounded-full"
            aria-label="LinkedIn Profile"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
              <rect width="4" height="12" x="2" y="9"/>
              <circle cx="4" cy="4" r="2"/>
            </svg>
          </a>
        </div>

      </div>
    </section>
  );
}