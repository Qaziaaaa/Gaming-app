import { ArrowUpRight, Search, Target, Share2, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

const services = [
  {
    id: 1,
    title: 'Search engine optimization',
    description: 'Improve your website visibility on search engines and drive organic traffic.',
    icon: Search,
    bgColor: 'bg-neutral-100',
    textColor: 'text-black',
    hasLearnMore: true,
  },
  {
    id: 2,
    title: 'Pay-per-click advertising',
    description: 'Drive targeted traffic to your website with strategic PPC campaigns.',
    icon: Target,
    bgColor: 'bg-lime',
    textColor: 'text-black',
    hasLearnMore: true,
  },
  {
    id: 3,
    title: 'Social Media Marketing',
    description: 'Build your brand presence and engage with your audience on social platforms.',
    icon: Share2,
    bgColor: 'bg-black',
    textColor: 'text-white',
    hasLearnMore: true,
  },
  {
    id: 4,
    title: 'Email Marketing',
    description: 'Nurture leads and drive conversions with personalized email campaigns.',
    icon: Mail,
    bgColor: 'bg-neutral-100',
    textColor: 'text-black',
    hasLearnMore: true,
  },
  {
    id: 5,
    title: 'Content Creation',
    description: 'Create compelling content that resonates with your target audience.',
    icon: Search,
    bgColor: 'bg-lime',
    textColor: 'text-black',
    hasLearnMore: true,
  },
  {
    id: 6,
    title: 'Analytics and Tracking',
    description: 'Measure and optimize your marketing performance with data-driven insights.',
    icon: Target,
    bgColor: 'bg-black',
    textColor: 'text-white',
    hasLearnMore: true,
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 lg:py-32">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-16">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col lg:flex-row lg:items-center gap-6 lg:gap-12 mb-16 lg:mb-24"
        >
          <h2 className="inline-flex">
            <span className="bg-lime px-6 py-3 rounded-xl text-3xl lg:text-5xl font-bold border-2 border-black">
              Services
            </span>
          </h2>
          <p className="text-lg lg:text-xl text-gray-600 max-w-2xl leading-relaxed">
            At our digital marketing agency, we offer a range of services to help
            businesses grow and succeed online. These services include:
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 mt-16">
          {services.map((service, index) => (
            <div
              key={service.id}
              className={`${service.bgColor} card-premium card-premium-hover relative group overflow-hidden animate-fade-in-up`}
              style={{ animationDelay: `${index * 150}ms`, opacity: 0, animationFillMode: 'forwards' }}
            >
              <div className="flex flex-col h-full relative z-10 transition-transform duration-500 group-hover:scale-[1.02]">
                <div className="flex items-start justify-between mb-8">
                  <div className="flex-1">
                    <h3 className={`text-2xl lg:text-3xl font-bold ${service.textColor} max-w-[200px] leading-tight`}>
                      {service.title.split(' ').map((word, i) => (
                        <span key={i} className="block">{word}</span>
                      ))}
                    </h3>
                  </div>
                  <div className="w-20 h-20 lg:w-24 lg:h-24 relative">
                    <div className="absolute inset-0 bg-white rounded-full border-2 border-black rotate-12 group-hover:rotate-0 transition-transform duration-500" />
                    <service.icon className="w-10 h-10 lg:w-12 lg:h-12 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-black" />
                  </div>
                </div>

                <div className="mt-auto flex items-center gap-4 group/link">
                  <div className={`flex items-center justify-center w-12 h-12 rounded-full border-2 border-black transition-transform duration-300 group-hover/link:rotate-45 ${service.bgColor === 'bg-black' ? 'bg-white' : 'bg-black'}`}>
                    <ArrowUpRight className={`w-6 h-6 ${service.bgColor === 'bg-black' ? 'text-black' : 'text-lime'}`} />
                  </div>
                  <span className={`text-lg font-medium underline underline-offset-4 decoration-2 ${service.textColor}`}>
                    Learn more
                  </span>
                </div>
              </div>

              {/* Animated background shape */}
              <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-lime/20 rounded-full blur-3xl group-hover:bg-lime/40 transition-colors duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
