import { ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';

const caseStudies = [
  {
    id: 1,
    description:
      'For a local restaurant, we implemented a targeted PPC campaign that resulted in a 50% increase in website traffic and a 25% increase in sales.',
    textColor: 'text-white',
  },
  {
    id: 2,
    description:
      'For a B2B software company, we developed an SEO strategy that resulted in a 200% increase in organic traffic and a 150% increase in qualified leads.',
    textColor: 'text-white',
    isSpecial: true
  },
  {
    id: 3,
    description:
      'For a national retail chain, we created a social media marketing campaign that increased followers by 300% and drove a 40% increase in online sales.',
    textColor: 'text-white',
  },
];

export default function CaseStudies() {
  return (
    <section id="cases" className="py-20 lg:py-32">
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
              Case Studies
            </span>
          </h2>
          <p className="text-lg lg:text-xl text-gray-600 max-w-2xl leading-relaxed">
            Explore Real-Life Examples of Our Proven Digital Marketing Success through
            Our Case Studies
          </p>
        </motion.div>

        {/* Case Studies Container */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-black rounded-[2.5rem] p-4 lg:p-12 border-2 border-black overflow-hidden shadow-2xl"
        >
          <div className="grid md:grid-cols-3 gap-0">
            {caseStudies.map((study, index) => (
              <motion.div
                key={study.id}
                whileHover={{ backgroundColor: 'rgba(185, 255, 102, 0.1)', y: -5 }}
                className={`relative p-8 lg:p-12 transition-all duration-300 ${index !== caseStudies.length - 1 ? 'md:border-r border-neutral-800' : ''
                  } ${index !== 0 ? 'border-t md:border-t-0 border-neutral-800' : ''} ${study.isSpecial ? 'bg-neutral-900/50' : ''}`}
              >
                <div className="flex flex-col h-full">
                  <p className={`text-lg lg:text-xl text-white leading-relaxed mb-10`}>
                    {study.description}
                  </p>
                  <motion.a
                    href="#"
                    whileHover={{ x: 5 }}
                    className="inline-flex items-center gap-3 text-lg font-bold text-lime group"
                  >
                    Learn more
                    <ArrowUpRight className="w-5 h-5 group-hover:rotate-45 transition-transform" />
                  </motion.a>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
