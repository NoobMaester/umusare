import Link from 'next/link';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer id="footer" className="bg-gray-900 text-white py-8 mt-12">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex flex-col md:flex-row items-center gap-4">
          <Link href="/" className="hover:underline">Home</Link>
          <Link href="#about" className="hover:underline">About</Link>
          <Link href="#contact" className="hover:underline">Contact</Link>
        </div>
        <div className="flex items-center gap-4">
          <a href="#" aria-label="Facebook" className="hover:text-blue-400"><FaFacebook /></a>
          <a href="#" aria-label="Twitter" className="hover:text-blue-400"><FaTwitter /></a>
          <a href="#" aria-label="Instagram" className="hover:text-pink-400"><FaInstagram /></a>
        </div>
        <div className="text-sm text-gray-400">&copy; {new Date().getFullYear()} Umusare. All rights reserved.</div>
      </div>
    </footer>
  );
}