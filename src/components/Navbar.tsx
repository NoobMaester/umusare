// Code for Navbar component
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';

export default function Navbar() {
  const pathname = usePathname();
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem('theme');
      if (stored) setTheme(stored);
      document.documentElement.classList.toggle('dark', stored === 'dark');
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    if (typeof window !== 'undefined') {
      localStorage.setItem('theme', newTheme);
      document.documentElement.classList.toggle('dark', newTheme === 'dark');
    }
  };

  // const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, id: string): void => {
  //   e.preventDefault();
  //   const element = document.getElementById(id);
  //   if (element) {
  //     element.scrollIntoView({ behavior: 'smooth' });
  //   }
  // };

  return (
    <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
      <Link href="/" className="logo text-2xl font-bold text-blue-700 dark:text-yellow-300">Umusare</Link>
      <ul className="flex items-center gap-6">
        <li><Link href="/" className={pathname === '/' ? 'font-semibold underline' : ''}>Home</Link></li>
        <li><Link href="#how-it-works" className="hover:underline">How It Works</Link></li>
        <li><Link href="#why-us" className="hover:underline">Why Us</Link></li>
        <li><Link href="#testimonials" className="hover:underline">Testimonials</Link></li>
        <li><Link href="/login" className={pathname === '/login' ? 'font-semibold underline' : ''}>Login</Link></li>
        <li><Link href="/register" className={pathname === '/register' ? 'font-semibold underline' : ''}>Register</Link></li>
        <li>
          <button onClick={toggleTheme} aria-label="Toggle dark mode" className="ml-2 p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-yellow-300 transition-colors">
            {theme === 'dark' ? <FaSun /> : <FaMoon />}
          </button>
        </li>
      </ul>
    </nav>
  );
}