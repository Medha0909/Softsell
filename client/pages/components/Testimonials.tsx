import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import { motion } from 'framer-motion';

export default function Testimonials() {
  const reviews = [
    {
      name: 'Priya Desai',
      role: 'Marketing Strategist',
      company: 'BrightBridge',
      text: `SoftSell helped us tap into a whole new revenue stream effortlessly. Their onboarding was smooth, support was responsive, and the results exceeded our expectations.`,
    },
    {
      name: 'James Carter',
      role: 'Business Analyst',
      company: 'OptimaCore',
      text: `A top-tier experience from start to finish. The platform was intuitive, the integration process was seamless, and we felt supported every step of the way.`,
    },
  ];

  return (
    <section
      className="min-h-screen flex flex-col justify-center items-center text-center px-4 md:px-6 py-20 mb-[0px]"
      style={{ backgroundColor: 'var(--bg-color)', color: 'var(--text-color)' }}
    >
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-10 md:mb-14"
        style={{ color: 'var(--text-color)' }}
      >
        What Our Clients Say
      </motion.h2>

      <Swiper
        spaceBetween={20}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        modules={[Autoplay]}
        className="w-full max-w-[90%] sm:max-w-xl md:max-w-2xl"
      >
        {reviews.map((review, idx) => (
          <SwiperSlide key={idx}>
            <div
              style={{
                backgroundColor: 'var(--card-bg)',
                borderColor: 'var(--border-color)',
              }}
              className="p-6 sm:p-8 md:p-10 rounded-xl shadow-md border transition-all duration-300 hover:shadow-lg flex flex-col items-center"
            >
              <p className="text-base sm:text-lg md:text-xl italic leading-relaxed mb-6 sm:mb-8 max-w-xl" style={{ color: 'var(--txt-p-color1)' }}>
                "{review.text}"
              </p>
              <div className="text-sm sm:text-base md:text-lg text-gray-600 dark:text-gray-300" style={{ color: 'var(--txt-p-color2)' }}>
                <span className="font-semibold text-gray-800 dark:text-white" style={{ color: 'var(--txt-p-color1)' }}>
                  {review.name}
                </span><br />
                {review.role} @ {review.company}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
