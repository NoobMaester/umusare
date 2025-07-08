import { FaShieldAlt, FaUserCheck, FaClock } from 'react-icons/fa';

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="py-16 md:py-24 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">Why Choose Us</h2>
        <div className="flex flex-col md:flex-row justify-center items-center gap-10">
          <div className="flex flex-col items-center text-center max-w-xs">
            <div className="bg-yellow-100 dark:bg-yellow-700 p-5 rounded-full mb-4">
              <FaShieldAlt className="text-4xl text-yellow-600 dark:text-yellow-300" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-100">Safety-first Approach</h3>
            <p className="text-gray-600 dark:text-gray-300">Your safety is our top priority. Every ride is monitored and drivers are trained for responsible service.</p>
          </div>
          <div className="flex flex-col items-center text-center max-w-xs">
            <div className="bg-yellow-100 dark:bg-yellow-700 p-5 rounded-full mb-4">
              <FaUserCheck className="text-4xl text-yellow-600 dark:text-yellow-300" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-100">Vetted Freelance Drivers</h3>
            <p className="text-gray-600 dark:text-gray-300">All drivers are background-checked and vetted for professionalism and reliability.</p>
          </div>
          <div className="flex flex-col items-center text-center max-w-xs">
            <div className="bg-yellow-100 dark:bg-yellow-700 p-5 rounded-full mb-4">
              <FaClock className="text-4xl text-yellow-600 dark:text-yellow-300" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-100">Available 24/7</h3>
            <p className="text-gray-600 dark:text-gray-300">We're here for you any time, day or night—whenever you need a safe ride home.</p>
          </div>
        </div>
      </div>
    </section>
  );
} 