import { motion } from 'framer-motion';
import ThemeToggle from './ThemeToggle';

export default function Hero() {
  return (
    <section
      className="min-h-screen flex flex-col justify-center items-center text-center px-6 relative mb-0 it"
    >
      <div className="absolute top-4 right-4">
        <ThemeToggle />
      </div>

      <motion.h1
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="text-5xl sm:text-6xl font-extrabold mb-4  drop-shadow-glow"
      >
        Turn Unused Licenses Into Cash
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="text-lg md:text-xl text-slate-300 mb-6 max-w-xl backdrop-blur-sm bg-black/30 p-4 rounded-lg"
      >
        SoftSell helps you resell unused software licenses.
        <br />
        <span className="text-blue-300 font-medium">Quick. Legal. Hassle-free.</span>
      </motion.p>

      <motion.button
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        className="bg-blue-600 text-white px-8 py-3 rounded-full shadow-md hover:bg-blue-700 transition font-semibold glow-button"
      >
        Get a Quote
      </motion.button>
    </section>
  );
}
