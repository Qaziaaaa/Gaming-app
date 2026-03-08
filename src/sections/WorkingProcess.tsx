import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const steps = [
  {
    id: 1,
    number: '01',
    title: 'Consultation',
    description:
      'During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.',
    bgColor: 'bg-lime',
  },
  {
    id: 2,
    number: '02',
    title: 'Research and Strategy Development',
    description:
      'We conduct thorough market research and competitor analysis to develop a comprehensive digital marketing strategy that aligns with your business objectives and targets your ideal audience effectively.',
    bgColor: 'bg-lime',
  },
  {
    id: 3,
    number: '03',
    title: 'Implementation',
    description:
      'Our team executes the agreed-upon strategy, implementing various marketing tactics across different channels to maximize your online presence and drive meaningful results.',
    bgColor: 'bg-lime',
  },
  {
    id: 4,
    number: '04',
    title: 'Monitoring and Optimization',
    description:
      'We continuously monitor campaign performance, analyzing key metrics and making data-driven adjustments to optimize results and ensure maximum return on investment.',
    bgColor: 'bg-lime',
  },
  {
    id: 5,
    number: '05',
    title: 'Reporting and Communication',
    description:
      'Regular reports and open communication keep you informed about progress, results, and any strategic adjustments. We believe in transparency and keeping our clients in the loop.',
    bgColor: 'bg-lime',
  },
  {
    id: 6,
    number: '06',
    title: 'Continual Improvement',
    description:
      'Digital marketing is an ongoing process. We continually refine and improve our strategies based on performance data and evolving market trends to ensure sustained success.',
    bgColor: 'bg-lime',
  },
];

export default function WorkingProcess() {
  const [openStep, setOpenStep] = useState<number | null>(1);

  const toggleStep = (id: number) => {
    setOpenStep(openStep === id ? null : id);
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
              Our Working Process
            </span>
          </h2>
          <p className="text-lg lg:text-xl text-gray-600 max-w-2xl leading-relaxed">
            Step-by-Step Guide to Achieving Your Business Goals
          </p>
        </motion.div>

        {/* Accordion Steps */}
        <div className="space-y-4">
          {steps.map((step) => (
            <motion.div
              key={step.id}
              initial={false}
              className={`rounded-[2.5rem] border-2 border-black overflow-hidden transition-colors duration-500 shadow-premium ${openStep === step.id ? step.bgColor : 'bg-neutral-100 hover:bg-neutral-200'
                }`}
            >
              <button
                onClick={() => toggleStep(step.id)}
                className="w-full px-8 lg:px-12 py-8 lg:py-10 flex items-center justify-between text-left group"
              >
                <div className="flex items-center gap-6 lg:gap-8">
                  <span className="text-4xl lg:text-6xl font-bold opacity-100">{step.number}</span>
                  <span className="text-xl lg:text-3xl font-bold">{step.title}</span>
                </div>
                <motion.div
                  animate={{ rotate: openStep === step.id ? 180 : 0 }}
                  className="w-12 h-12 lg:w-16 lg:h-16 rounded-full border-2 border-black flex items-center justify-center bg-neutral-100 group-hover:bg-white transition-colors flex-shrink-0"
                >
                  {openStep === step.id ? (
                    <Minus className="w-6 h-6 lg:w-8 lg:h-8" />
                  ) : (
                    <Plus className="w-6 h-6 lg:w-8 lg:h-8" />
                  )}
                </motion.div>
              </button>

              <AnimatePresence>
                {openStep === step.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                  >
                    <div className="px-8 lg:px-12 pb-8 lg:pb-12 pt-0">
                      <div className="border-t-2 border-black pt-8 lg:pt-10">
                        <p className="text-lg lg:text-xl leading-relaxed max-w-4xl text-black">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
