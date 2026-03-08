import { useState } from 'react';
import { Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion, AnimatePresence } from 'framer-motion';

const teamMembers = [
  {
    id: 1,
    name: 'John Smith',
    role: 'CEO and Founder',
    description: '10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop&crop=face&q=60&auto=format',
    bgColor: 'bg-lime',
  },
  {
    id: 2,
    name: 'Jane Doe',
    role: 'Director of Operations',
    description: '7+ years of experience in project management and team leadership. Strong organizational and communication skills',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop&crop=face&q=60&auto=format',
    bgColor: 'bg-lime',
  },
  {
    id: 3,
    name: 'Michael Brown',
    role: 'Senior SEO Specialist',
    description: '5+ years of experience in SEO and content creation. Proficient in keyword research and on-page optimization',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face&q=60&auto=format',
    bgColor: 'bg-lime',
  },
  {
    id: 4,
    name: 'Emily Davis',
    role: 'PPC Manager',
    description: '3+ years of experience in paid search advertising. Skilled in campaign management and performance analysis',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&crop=face&q=60&auto=format',
    bgColor: 'bg-lime',
  },
  {
    id: 5,
    name: 'Brian White',
    role: 'Social Media Specialist',
    description: '4+ years of experience in social media marketing. Proficient in creating and scheduling content, analyzing metrics, and building engagement',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop&crop=face&q=60&auto=format',
    bgColor: 'bg-lime',
  },
  {
    id: 6,
    name: 'Sarah Green',
    role: 'Content Creator',
    description: '2+ years of experience in writing and editing. Skilled in creating compelling, SEO-optimized content for various industries',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face&q=60&auto=format',
    bgColor: 'bg-lime',
  },
];

export default function Team() {
  const [showAll, setShowAll] = useState(false);
  const displayedMembers = showAll ? teamMembers : teamMembers.slice(0, 3);

  return (
    <section className="py-16 lg:py-24">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-16">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex flex-col lg:flex-row lg:items-center gap-6 lg:gap-12 mb-16 lg:mb-24"
        >
          <h2 className="inline-flex">
            <span className="bg-lime px-6 py-3 rounded-xl text-3xl lg:text-5xl font-bold border-2 border-black">
              Team
            </span>
          </h2>
          <p className="text-lg lg:text-xl text-gray-600 max-w-2xl leading-relaxed">
            Meet the skilled team behind our successful digital marketing strategies
          </p>
        </motion.div>

        {/* Team Grid */}
        <motion.div
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          <AnimatePresence mode="popLayout">
            {displayedMembers.map((member) => (
              <motion.div
                key={member.id}
                layout
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="bg-lime rounded-3xl p-6 lg:p-8 border border-black shadow-card hover:shadow-card-hover transition-shadow duration-300 h-full"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-20 h-20 lg:w-24 lg:h-24 rounded-full overflow-hidden border-2 border-black flex-shrink-0">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg lg:text-xl font-medium truncate">{member.name}</h3>
                    <p className="text-sm text-gray-600">{member.role}</p>
                  </div>
                  <a
                    href="#"
                    className="w-8 h-8 rounded-full bg-white border border-black flex items-center justify-center flex-shrink-0 hover:bg-black hover:text-white transition-colors"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                </div>
                <p className="text-sm lg:text-base text-gray-700 leading-relaxed">
                  {member.description}
                </p>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* See All Button */}
        <div className="mt-8 lg:mt-12 text-center">
          <Button
            onClick={() => setShowAll(!showAll)}
            variant="outline"
            className="rounded-full px-8 py-3 h-12 border-black hover:bg-black hover:text-white transition-all duration-300"
          >
            {showAll ? 'Show less' : 'See all team'}
          </Button>
        </div>
      </div>
    </section>
  );
}
