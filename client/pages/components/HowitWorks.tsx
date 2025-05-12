import { FaUpload, FaDollarSign, FaMoneyBillWave } from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function HowItWorks() {
  const steps = [
    {
      icon: <FaUpload size={40} />,
      title: 'Upload License',
      description: 'Submit your unused software license securely through our platform.',
      detail: 'We support all major license types and ensure confidentiality.'
    },
    {
      icon: <FaDollarSign size={40} />,
      title: 'Get Valuation',
      description: 'We evaluate and give a fair market price instantly.',
      detail: 'Our pricing engine uses current market data to give you top value.'
    },
    {
      icon: <FaMoneyBillWave size={40} />,
      title: 'Get Paid',
      description: 'Receive your payout quickly through your preferred method.',
      detail: 'No delays, no hidden charges—just fast, guaranteed payments.'
    }
  ];

  return (
    <section
      className="min-h-screen flex flex-col justify-center items-center text-center px-6 mb-0 py-16"
      style={{ backgroundColor: 'var(--bg-color)', color: 'var(--text-color)' }}
    >
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl sm:text-5xl font-extrabold mb-6  "
      >
        Simple. Fast. Transparent.
      </motion.h2>
      <p className="text-lg md:text-xl text-gray-500 dark:text-gray-300 max-w-2xl mb-12" style={{ color: 'var(--txt-p-color)' }}>
        Here’s how SoftSell transforms your unused software licenses into cash in just 3 easy steps.
      </p>

      <div className="grid md:grid-cols-3 gap-10">
        {steps.map((step, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col items-center bg-[var(--card-bg)] p-6 rounded-xl shadow-md border border-[var(--border-color)] hover:shadow-lg transition"
          >
            <div className="text-blue-600 mb-4 ic glow-icon">{step.icon}</div>
            <h3 className="text-xl font-semibold mb-2" style={{ color: 'var(--txt-p-color1)' }}>{step.title}</h3>
            <p className="mb-2 text-sm text-gray-600 dark:text-gray-300" style={{ color: 'var(--txt-p-color2)' }}>{step.description}</p>
            <p className="text-sm text-gray-500 dark:text-gray-400" style={{ color: 'var(--txt-p-color3)' }}>{step.detail}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
