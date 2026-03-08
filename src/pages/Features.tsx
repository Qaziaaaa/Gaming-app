import { motion } from 'framer-motion';
import {
  Cpu, Globe, MessageSquare, Shield, Trophy, Zap,
  Headphones, Smartphone, Cloud, Lock, Sparkles, ArrowRight
} from 'lucide-react';

const mainFeatures = [
  {
    icon: Cpu,
    title: 'Immersive VR/AR',
    description: 'Experience gaming like never before with cutting-edge virtual and augmented reality technology. Full body tracking, haptic feedback, and 360-degree immersion.',
    image: 'https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?w=800&h=500&fit=crop&q=60&auto=format',
    stats: { label: 'VR Games', value: '150+' },
  },
  {
    icon: Globe,
    title: 'Cross-Platform Play',
    description: 'Play seamlessly across PC, console, and mobile devices. Your progress syncs automatically, so you can pick up where you left off on any device.',
    image: 'https://images.unsplash.com/photo-1623934199716-dc28818a6ec7?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    stats: { label: 'Platforms', value: '5+' },
  },
  {
    icon: MessageSquare,
    title: 'Social Gaming',
    description: 'Connect with millions of players worldwide. Form teams, join guilds, voice chat, and build lasting friendships in our vibrant community.',
    image: 'https://images.unsplash.com/photo-1542751110-97427bbecf20?w=800&h=500&fit=crop&q=60&auto=format',
    stats: { label: 'Active Players', value: '10M+' },
  },
];

const additionalFeatures = [
  {
    icon: Trophy,
    title: 'Esports Ready',
    description: 'Competitive tournaments, leaderboards, and ranked play for serious gamers.',
  },
  {
    icon: Shield,
    title: 'Anti-Cheat',
    description: 'Advanced systems ensure fair play and ban cheaters automatically.',
  },
  {
    icon: Zap,
    title: 'Low Latency',
    description: 'Global server network with sub-20ms ping in major regions.',
  },
  {
    icon: Headphones,
    title: 'Spatial Audio',
    description: '3D positional audio for complete immersion in every game.',
  },
  {
    icon: Smartphone,
    title: 'Mobile Companion',
    description: 'Manage your account, chat with friends, and track stats on the go.',
  },
  {
    icon: Cloud,
    title: 'Cloud Saves',
    description: 'Never lose progress with automatic cloud backup for all games.',
  },
  {
    icon: Lock,
    title: 'Secure Accounts',
    description: 'Two-factor authentication and advanced security features.',
  },
  {
    icon: Sparkles,
    title: 'Regular Updates',
    description: 'New features and improvements added every month.',
  },
];

export default function Features() {
  return (
    <div className="relative min-h-screen pt-24 pb-20">
      <div className="absolute inset-0 bg-gaming-black/90" />

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
              Platform Features
            </span>
            <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl text-white mb-6">
              Built for <span className="text-gaming-red">Gamers</span>
            </h1>
            <p className="text-gaming-gray-light text-lg max-w-3xl mx-auto">
              Every feature designed with one goal in mind: to deliver the best gaming
              experience possible. From cutting-edge VR to seamless cross-platform play.
            </p>
          </motion.div>
        </div>

        {/* Main Features */}
        <div className="max-w-7xl mx-auto px-6 mb-32">
          <div className="space-y-24">
            {mainFeatures.map((feature, index) => (
              <MainFeature key={feature.title} feature={feature} index={index} />
            ))}
          </div>
        </div>

        {/* Feature Grid */}
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="font-display text-4xl text-white mb-4">
              More <span className="text-gaming-red">Features</span>
            </h2>
            <p className="text-gaming-gray-light">
              Everything you need for the ultimate gaming experience
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalFeatures.map((feature) => (
              <div
                key={feature.title}
                className="bg-gaming-black-light p-6 group hover:border-gaming-red/50 transition-all duration-300 border border-white/5"
              >
                <div className="w-12 h-12 rounded-xl bg-gaming-red/10 flex items-center justify-center mb-4 group-hover:bg-gaming-red/20 transition-colors">
                  <feature.icon className="w-6 h-6 text-gaming-red" />
                </div>
                <h3 className="font-display text-lg text-white mb-2">{feature.title}</h3>
                <p className="text-gaming-gray-light text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="max-w-7xl mx-auto px-6 mt-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass rounded-3xl p-12 text-center relative overflow-hidden"
          >
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gaming-red/20 rounded-full blur-3xl" />

            <div className="relative z-10">
              <h2 className="font-display text-4xl text-white mb-4">
                Ready to Experience It All?
              </h2>
              <p className="text-gaming-gray-light mb-8 max-w-xl mx-auto">
                Join millions of players and start your gaming journey today.
                Free to start, upgrade anytime.
              </p>
              <a
                href="/games"
                className="btn-cyber inline-flex items-center gap-2 px-8 py-4 rounded-full"
              >
                Start Playing Now
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

interface MainFeatureProps {
  feature: typeof mainFeatures[0];
  index: number;
}

function MainFeature({ feature, index }: MainFeatureProps) {
  const isReversed = index % 2 === 1;

  return (
    <div
      className={`grid lg:grid-cols-2 gap-12 items-center ${isReversed ? 'lg:flex-row-reverse' : ''
        } animate-fade-in-up`}
      style={{ animationDelay: `${index * 150}ms`, opacity: 0, animationFillMode: 'forwards' }}
    >
      {/* Content */}
      <div className={`${isReversed ? 'lg:order-2' : ''} bg-gaming-black/90 border-l-4 border-gaming-red p-8 lg:p-12 relative overflow-hidden shadow-2xl`}>
        {/* Grid Underlay */}
        <div className="absolute inset-0 opacity-[0.05] pointer-events-none bg-[linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[length:40px_40px]" />

        <div className="relative z-10">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-14 h-14 border border-white/10 bg-gaming-black-light flex items-center justify-center">
              <feature.icon className="w-7 h-7 text-gaming-red" />
            </div>
            <div>
              <span className="text-gaming-red text-[10px] uppercase font-mono tracking-widest">Protocol.0{index + 1}</span>
              <h3 className="font-display text-3xl text-white">{feature.title}</h3>
            </div>
          </div>

          <p className="text-gaming-gray-light text-sm leading-relaxed mb-8 border-y border-white/5 py-6">
            {feature.description}
          </p>

          <div className="flex items-center gap-12">
            <div>
              <div className="font-display text-4xl text-white">{feature.stats.value}</div>
              <div className="text-gaming-red text-[10px] uppercase tracking-widest mt-1">{feature.stats.label}</div>
            </div>

            <button className="bg-transparent border border-white/10 px-6 py-3 text-white text-xs uppercase tracking-widest hover:border-gaming-red hover:bg-gaming-red/5 transition-all group inline-flex items-center gap-3">
              Access Data
              <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform text-gaming-red" />
            </button>
          </div>
        </div>
      </div>

      {/* Image */}
      <div className={`${isReversed ? 'lg:order-1' : ''} h-full`}>
        <div
          className="relative h-full min-h-[400px] border border-white/5 overflow-hidden group"
        >
          <img
            src={feature.image}
            alt={feature.title}
            className="absolute inset-0 w-full h-full object-cover filter grayscale-[0.8] group-hover:grayscale-0 transition-all duration-700"
          />
          <div className="absolute inset-0 bg-gaming-black/40 group-hover:bg-transparent transition-colors duration-700" />

          {/* Technical Frame */}
          <div className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-gaming-red/50 rounded-tl-lg" />
          <div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-gaming-red/50 rounded-br-lg" />
        </div>
      </div>
    </div>
  );
}
