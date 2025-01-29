// Code for Navbar component
'use client';

import Link from 'next/link';

import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();


  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, id: string): void => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="navbar">
      <div className="container">
        <Link href="/" className="logo">
          Umusaare
        </Link>
        <ul className="nav-links">
          <li>
            <Link href="#features" onClick={(e) => handleScroll(e, 'features')}>
              Features
            </Link>
          </li>
          <li>
            <Link href="/login" className={pathname === '/login' ? 'active' : ''}>Login</Link>
          </li>
          <li>
            <Link href="/register" className={pathname === '/register' ? 'active' : ''}>
              Register
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}