import { NavLink } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';

export default function Header() {
  const linkClass = ({ isActive }) => 
    `font-medium transition-colors hover:text-blue-600 dark:hover:text-blue-400 ${
      isActive ? 'text-blue-600 dark:text-blue-400' : 'text-gray-600 dark:text-gray-300'
    }`;

  return (
    <header className="flex justify-between items-center py-6 border-b border-gray-200 dark:border-slate-800 mb-8">
      <div className="text-xl font-bold tracking-tight">
        Eren Badur
      </div>
      <nav className="flex items-center gap-6">
        <NavLink to="/" className={linkClass}>About Me</NavLink>
        <NavLink to="/works" className={linkClass}>Works</NavLink>
        <NavLink to="/cv" className={linkClass}>CV</NavLink>
        <div className="pl-4 border-l border-gray-200 dark:border-slate-700">
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}