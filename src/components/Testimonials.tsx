const testimonials = [
  {
    name: 'Alex M.',
    quote: 'I got home safe after a night out—my driver was friendly and professional!',
    image: '/user1.jpg',
  },
  {
    name: 'Priya S.',
    quote: 'The service was fast and I loved that I did not have to leave my car behind.',
    image: '/user2.jpg',
  },
  {
    name: 'James L.',
    quote: 'Highly recommend for anyone who needs a safe ride home. 10/10!',
    image: '/user3.jpg',
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-16 md:py-24 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">What Our Users Say</h2>
        <div className="flex flex-col md:flex-row justify-center items-stretch gap-10">
          {testimonials.map((t, i) => (
            <div key={i} className="flex flex-col items-center bg-gray-50 dark:bg-gray-800 rounded-lg shadow-lg p-8 max-w-xs mx-auto">
              <img
                src={t.image}
                alt={t.name}
                className="w-16 h-16 rounded-full mb-4 object-cover border-2 border-yellow-400"
                loading="lazy"
              />
              <blockquote className="italic text-gray-700 dark:text-gray-200 mb-4">"{t.quote}"</blockquote>
              <div className="font-semibold text-blue-700 dark:text-yellow-300">{t.name}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 