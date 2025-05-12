import { useState } from 'react';
import { motion } from 'framer-motion';

export default function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', company: '', license: '', message: '' });

  const handleChange = (e:any) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e:any) => {
    e.preventDefault();
    alert('Form submitted!');
  };

  return (
    <section
      className="min-h-screen flex flex-col items-center text-center px-6 py-20 "
      style={{ backgroundColor: 'var(--bg-color)', color: 'var(--text-color)' }}
    >
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-4xl sm:text-5xl font-extrabold mb-14 text-white "
        style={{ color: 'var(--text-color)' }}
      >
        Get in Touch With Us
      </motion.h2>

      <form onSubmit={handleSubmit} className="w-full max-w-4xl">
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <input
            name="name"
            placeholder="Your Name"
            required
            onChange={handleChange}
            className="p-4 w-full rounded-md bg-transparent border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            style={{ color: 'var(--txt-p-color1)' }}
          />
          <input
            name="email"
            type="email"
            placeholder="Email Address"
            required
            onChange={handleChange}
            className="p-4 w-full rounded-md bg-transparent border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          style={{ color: 'var(--txt-p-color2)' }}
          />
          <input
            name="company"
            placeholder="Company Name"
            onChange={handleChange}
            className="p-4 w-full rounded-md bg-transparent border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          style={{ color: 'var(--txt-p-color3)' }}
          />
          <select
            name="license"
            required
            onChange={handleChange}
          style={{ color: 'var(--txt-p-color1)' }}
            className="p-4 w-full rounded-md bg-transparent border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          >
            <option style={{ color: 'var(--txt-p-color4)' }}value="">Select License Type</option>
            <option style={{ color: 'var(--txt-p-color4)' }}value="Office 365">Office 365</option>
            <option style={{ color: 'var(--txt-p-color4)' }}value="Adobe Suite">Adobe Suite</option>
            <option style={{ color: 'var(--txt-p-color4)' }}value="Other">Other</option>
          </select>
        </div>

        <textarea
          name="message"
          rows={5}
          placeholder="Your Message"
          required
          onChange={handleChange}
          className="w-full p-4 rounded-md bg-transparent border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition mb-6"
        style={{ color: 'var(--txt-p-color1)' }}
        />

        <div className="flex justify-center">
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-full shadow-md transition duration-300"
          
          >
            Send Message
          </button>
        </div>
      </form>
    </section>
  );
}
