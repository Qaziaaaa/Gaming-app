import { useState } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const testimonials = [
  {
    id: 1,
    name: 'John Doe',
    role: 'Marketing Director at XYZ Corp',
    quote:
      'We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence.',
  },
  {
    id: 2,
    name: 'Sarah Johnson',
    role: 'CEO at TechStart Inc',
    quote:
      'Positivus transformed our digital marketing strategy completely. Their data-driven approach and creative solutions helped us achieve a 200% increase in qualified leads within just six months. They are true partners in our growth.',
  },
  {
    id: 3,
    name: 'Michael Chen',
    role: 'Founder at GrowthLabs',
    quote:
      'Working with Positivus has been a game-changer for our business. Their expertise in SEO and PPC has helped us dominate search results in our industry. The ROI we have seen from their campaigns has exceeded all expectations.',
  },
  {
    id: 4,
    name: 'Emily Rodriguez',
    role: 'CMO at RetailPlus',
    quote:
      'The team at Positivus understands the nuances of digital marketing like no other agency we have worked with. Their strategic approach to social media marketing helped us build a community of engaged followers and drive real business results.',
  },
  {
    id: 5,
    name: 'David Kim',
    role: 'Director at FinanceHub',
    quote:
      'Positivus delivered exceptional results for our financial services company. Their content marketing strategy positioned us as thought leaders in our industry and generated high-quality leads consistently. Highly recommended!',
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-16 lg:py-24">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-16">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex flex-col lg:flex-row lg:items-center gap-6 lg:gap-12 mb-16 lg:mb-24"
        >
          <h2 className="inline-flex">
            <span className="bg-lime px-6 py-3 rounded-xl text-3xl lg:text-5xl font-bold border-2 border-black">
              Testimonials
            </span>
          </h2>
          <p className="text-lg lg:text-xl text-gray-600 max-w-2xl leading-relaxed">
            Hear from Our Satisfied Clients: Read Our Testimonials to Learn More about
            Our Digital Marketing Services
          </p>
        </motion.div>

        {/* Testimonials Carousel */}
        <div className="relative">
          <div className="bg-black rounded-[2.5rem] p-8 lg:p-16 border-2 border-black relative overflow-hidden shadow-2xl">
            {/* Quote Icon */}
            <div className="mb-10">
              <Quote className="w-12 h-12 lg:w-16 lg:h-16 text-lime fill-lime" />
            </div>

            {/* Testimonial Content */}
            <div className="min-h-[300px] relative">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="grid lg:grid-cols-2 gap-12 lg:gap-20"
                >
                  {/* Testimonial Panel */}
                  <div className="space-y-8">
                    <div className="relative">
                      <p className="text-white text-xl lg:text-3xl font-medium leading-tight">
                        "{testimonials[currentIndex].quote}"
                      </p>
                    </div>
                    <div>
                      <h4 className="text-lime text-xl font-bold">{testimonials[currentIndex].name}</h4>
                      <p className="text-gray-400 text-lg">{testimonials[currentIndex].role}</p>
                    </div>
                  </div>

                  {/* Next Testimonial Preview (Desktop) */}
                  <div className="hidden lg:block space-y-8 opacity-40 blur-[1px]">
                    <div className="relative">
                      <p className="text-white text-xl lg:text-3xl font-medium leading-tight line-clamp-4">
                        "{testimonials[(currentIndex + 1) % testimonials.length].quote}"
                      </p>
                    </div>
                    <div>
                      <h4 className="text-lime text-xl font-bold">
                        {testimonials[(currentIndex + 1) % testimonials.length].name}
                      </h4>
                      <p className="text-gray-400 text-lg">
                        {testimonials[(currentIndex + 1) % testimonials.length].role}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Navigation & Dots */}
            <div className="flex flex-col sm:flex-row items-center justify-between mt-12 lg:mt-20 gap-8">
              <div className="flex gap-3">
                {testimonials.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentIndex(idx)}
                    className={`h-3 rounded-full transition-all duration-300 ${idx === currentIndex ? 'w-10 bg-lime' : 'w-3 bg-neutral-700'
                      }`}
                    aria-label={`Go to testimonial ${idx + 1}`}
                  />
                ))}
              </div>

              <div className="flex gap-4">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={prevTestimonial}
                  className="w-14 h-14 rounded-full border-2 border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-black transition-colors"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft className="w-6 h-6" />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={nextTestimonial}
                  className="w-14 h-14 rounded-full border-2 border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-black transition-colors"
                  aria-label="Next testimonial"
                >
                  <ChevronRight className="w-6 h-6" />
                </motion.button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
