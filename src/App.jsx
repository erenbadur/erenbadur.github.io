import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import About from './pages/About';
import Works from './pages/Works';
import CV from './pages/CV';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col max-w-4xl mx-auto px-6">
        <Header />
        <main className="flex-grow py-8">
          <Routes>
            <Route path="/" element={<About />} />
            <Route path="/works" element={<Works />} />
            <Route path="/cv" element={<CV />} />
          </Routes>
        </main>
        <footer className="py-6 text-center text-sm text-gray-500 dark:text-gray-400">
          © {new Date().getFullYear()} Eren Badur
        </footer>
      </div>
    </Router>
  );
}