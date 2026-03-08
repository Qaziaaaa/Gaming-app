import { motion } from 'framer-motion';
import { Target, Users, Zap, Heart, Globe, Award, ArrowRight, Quote } from 'lucide-react';

const stats = [
  { value: '10M+', label: 'Active Players' },
  { value: '500+', label: 'Games Available' },
  { value: '50+', label: 'Countries' },
  { value: '150+', label: 'Team Members' },
];

const values = [
  {
    icon: Target,
    title: 'Innovation First',
    description: 'We constantly push the boundaries of what gaming technology can achieve.',
  },
  {
    icon: Users,
    title: 'Community Driven',
    description: 'Every decision we make starts with our community needs and feedback.',
  },
  {
    icon: Heart,
    title: 'Passion for Gaming',
    description: 'We are gamers at heart, building the platform we always wanted.',
  },
  {
    icon: Globe,
    title: 'Global Reach',
    description: 'Connecting players from every corner of the world.',
  },
  {
    icon: Award,
    title: 'Quality Matters',
    description: 'We never compromise on the quality of our platform or games.',
  },
  {
    icon: Zap,
    title: 'Speed & Performance',
    description: 'Lightning-fast servers and optimized performance everywhere.',
  },
];

const team = [
  {
    name: 'Alex Chen',
    role: 'CEO & Founder',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&q=60&auto=format',
    quote: 'Gaming is not just entertainment, it is the future of human connection.',
  },
  {
    name: 'Sarah Miller',
    role: 'CTO',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop&q=60&auto=format',
    quote: 'Technology should disappear and let the magic of gaming shine through.',
  },
  {
    name: 'Marcus Johnson',
    role: 'Head of Design',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&q=60&auto=format',
    quote: 'Every pixel, every interaction, crafted with purpose and passion.',
  },
  {
    name: 'Emily Wong',
    role: 'Community Lead',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&q=60&auto=format',
    quote: 'Our community is not just our users, they are our family.',
  },
];

const milestones = [
  { year: '2020', event: 'BOARD founded with a vision' },
  { year: '2021', event: 'Launched first 100 games' },
  { year: '2022', event: 'Reached 1 million players' },
  { year: '2023', event: 'Introduced VR support' },
  { year: '2024', event: '10 million players milestone' },
];

export default function About() {
  return (
    <div className="relative min-h-screen pt-24 pb-20">
      {/* Background */}
      <div className="absolute inset-0 bg-gaming-black" />
      <div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-b from-gaming-red/10 to-transparent" />

      <div className="relative z-10">
        {/* Hero Section */}
        <div className="max-w-7xl mx-auto px-6 mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <span className="inline-block text-gaming-red font-medium uppercase tracking-wider text-sm mb-4">
              Our Story
            </span>
            <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl text-white mb-6">
              We Are <span className="text-gaming-red">BOARD</span>
            </h1>
            <p className="text-gaming-gray-light text-lg max-w-3xl mx-auto">
              Founded in 2020, we set out to revolutionize the gaming industry by creating
              a platform that truly puts players first. Today, we are proud to serve millions
              of gamers worldwide.
            </p>
          </motion.div>
        </div>

        {/* Stats */}
        <div className="max-w-7xl mx-auto px-6 mb-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="glass rounded-2xl p-6 text-center"
              >
                <div className="font-display text-4xl text-gaming-red mb-2">{stat.value}</div>
                <div className="text-gaming-gray-light text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Mission Section */}
        <div className="max-w-7xl mx-auto px-6 mb-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass rounded-3xl p-8 sm:p-12 lg:p-16 relative overflow-hidden"
          >
            {/* Background Decoration */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-gaming-red/10 rounded-full blur-3xl" />

            <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="font-display text-4xl text-white mb-6">
                  Our <span className="text-gaming-red">Mission</span>
                </h2>
                <p className="text-gaming-gray-light text-lg leading-relaxed mb-6">
                  To bridge the gap between imagination and reality through gaming. We believe
                  that games are more than entertainment—they are a medium for connection,
                  creativity, and human expression.
                </p>
                <p className="text-gaming-gray-light leading-relaxed">
                  Our platform is built on the principles of accessibility, innovation, and
                  community. We are committed to creating a space where every gamer feels welcome,
                  regardless of their background or experience level.
                </p>
              </div>
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800&h=600&fit=crop&q=60&auto=format"
                  alt="Gaming Community"
                  className="rounded-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gaming-black/50 to-transparent rounded-2xl" />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Values */}
        <div className="max-w-7xl mx-auto px-6 mb-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="font-display text-4xl text-white mb-4">
              Our <span className="text-gaming-red">Values</span>
            </h2>
            <p className="text-gaming-gray-light">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.05 * index }}
                whileHover={{ y: -5 }}
                className="glass rounded-2xl p-6 group hover:border-gaming-red/50 transition-colors"
              >
                <div className="w-12 h-12 rounded-xl bg-gaming-red/10 flex items-center justify-center mb-4 group-hover:bg-gaming-red/20 transition-colors">
                  <value.icon className="w-6 h-6 text-gaming-red" />
                </div>
                <h3 className="font-display text-lg text-white mb-2">{value.title}</h3>
                <p className="text-gaming-gray-light text-sm">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Team */}
        <div className="max-w-7xl mx-auto px-6 mb-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="font-display text-4xl text-white mb-4">
              Meet the <span className="text-gaming-red">Team</span>
            </h2>
            <p className="text-gaming-gray-light">
              The passionate people behind BOARD
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="glass rounded-2xl overflow-hidden group"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gaming-black to-transparent" />
                </div>
                <div className="p-5">
                  <h3 className="font-display text-lg text-white">{member.name}</h3>
                  <p className="text-gaming-red text-sm mb-3">{member.role}</p>
                  <div className="flex items-start gap-2">
                    <Quote className="w-4 h-4 text-gaming-gray-light flex-shrink-0 mt-0.5" />
                    <p className="text-gaming-gray-light text-xs italic">{member.quote}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto px-6 mb-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="font-display text-4xl text-white mb-4">
              Our <span className="text-gaming-red">Journey</span>
            </h2>
            <p className="text-gaming-gray-light">
              Key milestones in our story
            </p>
          </motion.div>

          <div className="relative">
            {/* Line */}
            <div className="absolute left-4 lg:left-1/2 top-0 bottom-0 w-px bg-gaming-gray-dark lg:-translate-x-1/2" />

            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.year}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className={`relative flex items-center gap-8 mb-8 ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  }`}
              >
                <div className={`flex-1 ${index % 2 === 0 ? 'lg:text-right' : 'lg:text-left'}`}>
                  <div className="glass rounded-xl p-4 inline-block">
                    <span className="text-gaming-red font-display text-xl">{milestone.year}</span>
                    <p className="text-gaming-gray-light text-sm">{milestone.event}</p>
                  </div>
                </div>
                <div className="w-8 h-8 rounded-full bg-gaming-red flex items-center justify-center relative z-10 flex-shrink-0">
                  <div className="w-3 h-3 rounded-full bg-white" />
                </div>
                <div className="flex-1 hidden lg:block" />
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass rounded-3xl p-12 text-center"
          >
            <h2 className="font-display text-4xl text-white mb-4">
              Join Our Team
            </h2>
            <p className="text-gaming-gray-light mb-8 max-w-xl mx-auto">
              We are always looking for talented individuals who share our passion for gaming.
              Check out our open positions.
            </p>
            <a
              href="#"
              className="btn-cyber inline-flex items-center gap-2 px-8 py-4 rounded-full"
            >
              View Careers
              <ArrowRight className="w-5 h-5" />
            </a>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
