import { FaCarSide, FaUserCheck, FaHome } from 'react-icons/fa';

export default function FeaturesSection() {
  return (
    <section id="how-it-works" className="py-16 md:py-24 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">How It Works</h2>
        <div className="flex flex-col md:flex-row justify-center items-center gap-10">
          <div className="flex flex-col items-center text-center max-w-xs">
            <div className="bg-blue-100 dark:bg-blue-900 p-5 rounded-full mb-4">
              <FaCarSide className="text-4xl text-blue-600 dark:text-blue-300" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-100">Request Driver</h3>
            <p className="text-gray-600 dark:text-gray-300">Open the app and request a freelance driver near you, anytime you need a safe ride.</p>
          </div>
          <div className="flex flex-col items-center text-center max-w-xs">
            <div className="bg-blue-100 dark:bg-blue-900 p-5 rounded-full mb-4">
              <FaUserCheck className="text-4xl text-blue-600 dark:text-blue-300" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-100">Get Picked Up</h3>
            <p className="text-gray-600 dark:text-gray-300">A vetted driver arrives at your location, ready to drive you and your car home safely.</p>
          </div>
          <div className="flex flex-col items-center text-center max-w-xs">
            <div className="bg-blue-100 dark:bg-blue-900 p-5 rounded-full mb-4">
              <FaHome className="text-4xl text-blue-600 dark:text-blue-300" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-100">Arrive Safely</h3>
            <p className="text-gray-600 dark:text-gray-300">Relax as you're driven home in your own car—safely, securely, and conveniently.</p>
          </div>
        </div>
      </div>
    </section>
  );
}