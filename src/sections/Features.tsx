import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Cpu, Globe, MessageSquare, Shield, Trophy, Zap } from 'lucide-react';

const features = [
  {
    icon: Cpu,
    title: 'Immersive Experience',
    description: 'State-of-the-art VR and AR technology that transports you directly into the game world.',
    image: 'https://images.unsplash.com/photo-1592478411213-61535fdd861d?w=800&h=600&fit=crop',
    color: '#ff0000',
  },
  {
    icon: Globe,
    title: 'Cross-Platform',
    description: 'Play seamlessly across PC, console, and mobile devices with unified progress.',
    image: 'https://images.unsplash.com/photo-1552820728-8b83bb6b2b0a?w=800&h=600&fit=crop',
    color: '#ff3333',
  },
  {
    icon: MessageSquare,
    title: 'Community Driven',
    description: 'Connect with millions of players, form teams, and build lasting friendships.',
    image: 'https://images.unsplash.com/photo-1542751110-97427bbecf20?w=800&h=600&fit=crop',
    color: '#cc0000',
  },
  {
    icon: Trophy,
    title: 'Competitive Play',
    description: 'Join tournaments, climb leaderboards, and prove your skills on the global stage.',
    image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800&h=600&fit=crop',
    color: '#ff0000',
  },
  {
    icon: Shield,
    title: 'Secure Gaming',
    description: 'Advanced anti-cheat systems and secure servers for fair play.',
    image: 'https://images.unsplash.com/photo-1563089145-599997674d42?w=800&h=600&fit=crop',
    color: '#ff3333',
  },
  {
    icon: Zap,
    title: 'Low Latency',
    description: 'Global server network ensuring smooth gameplay with minimal lag.',
    image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&h=600&fit=crop',
    color: '#cc0000',
  },
];

export default function Features() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 50]);

  return (
    <section ref={containerRef} className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gaming-black-light" />

      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gaming-red/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gaming-red/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="inline-block text-gaming-red font-medium uppercase tracking-wider text-sm mb-4">
            What We Offer
          </span>
          <h2 className="font-display text-5xl sm:text-6xl text-white mb-6">
            Powerful <span className="text-gaming-red">Features</span>
          </h2>
          <p className="text-gaming-gray-light text-lg max-w-2xl mx-auto">
            Everything you need for the ultimate gaming experience, all in one platform.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Column 1 */}
          <motion.div style={{ y: y1 }} className="space-y-8">
            {features.slice(0, 3).map((feature, index) => (
              <FeatureCard key={feature.title} feature={feature} index={index} />
            ))}
          </motion.div>

          {/* Column 2 */}
          <motion.div style={{ y: y2 }} className="space-y-8 lg:mt-16">
            {features.slice(3, 6).map((feature, index) => (
              <FeatureCard key={feature.title} feature={feature} index={index + 3} />
            ))}
          </motion.div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-16"
        >
          <Link
            to="/features"
            className="btn-cyber inline-flex items-center gap-2 px-8 py-4 rounded-full"
          >
            Explore All Features
            <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

interface FeatureCardProps {
  feature: typeof features[0];
  index: number;
}

function FeatureCard({ feature, index }: FeatureCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.1 * index }}
      className="group relative bg-gaming-black border border-white/5 overflow-hidden"
    >
      {/* Background Grid Decoration */}
      <div className="absolute inset-0 opacity-[0.03] group-hover:opacity-[0.07] transition-opacity"
        style={{
          backgroundImage: `radial-gradient(${feature.color} 1px, transparent 1px)`,
          backgroundSize: '20px 20px'
        }}
      />

      {/* Content */}
      <div className="relative p-8 flex flex-col sm:flex-row gap-6 items-start">
        {/* Icon Container */}
        <div className="relative flex-shrink-0">
          <div className="w-14 h-14 bg-gaming-black-light border border-white/10 flex items-center justify-center group-hover:border-gaming-red/50 transition-colors duration-500">
            <feature.icon className="w-6 h-6 text-gaming-gray-light group-hover:text-gaming-red transition-colors" />
            {/* Corner Accents */}
            <div className="absolute -top-1 -left-1 w-2 h-2 border-t border-l border-gaming-red/0 group-hover:border-gaming-red transition-all" />
            <div className="absolute -bottom-1 -right-1 w-2 h-2 border-b border-r border-gaming-red/0 group-hover:border-gaming-red transition-all" />
          </div>
        </div>

        <div>
          <div className="flex items-center gap-3 mb-3">
            <div className="h-[1px] w-8 bg-gaming-red/30" />
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-gaming-red/60">
              Feature.sys_0{index + 1}
            </span>
          </div>
          <h3 className="font-display text-2xl text-white mb-3 group-hover:translate-x-1 transition-transform">
            {feature.title}
          </h3>
          <p className="text-gaming-gray-light text-sm leading-relaxed max-w-md">
            {feature.description}
          </p>
        </div>
      </div>

      {/* Technical Progress Bar Decoration */}
      <div className="absolute bottom-0 left-0 w-full h-[2px] bg-white/5">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: '100%' }}
          transition={{ duration: 1.5, delay: 0.5 }}
          className="h-full bg-gaming-red/20 group-hover:bg-gaming-red/60 transition-colors"
        />
      </div>
    </motion.div>
  );
}
