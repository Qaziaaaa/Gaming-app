import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { UserPlus, Download, Gamepad2, Check } from 'lucide-react';

const steps = [
  {
    number: '01',
    icon: UserPlus,
    title: 'Create Account',
    description: 'Sign up for free in seconds. No credit card required. Just enter your email and choose a username.',
    features: ['Free forever', 'No ads', 'Instant access'],
  },
  {
    number: '02',
    icon: Download,
    title: 'Download Launcher',
    description: 'Get our lightweight launcher for your platform. Available for Windows, Mac, and Linux.',
    features: ['Auto-updates', 'Cloud saves', 'Cross-platform'],
  },
  {
    number: '03',
    icon: Gamepad2,
    title: 'Start Playing',
    description: 'Browse our library of 500+ games and start playing immediately. New games added weekly.',
    features: ['500+ games', 'VR support', 'Multiplayer'],
  },
];

export default function HowToJoin() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const pathLength = useTransform(scrollYProgress, [0, 0.8], [0, 1]);

  return (
    <section ref={containerRef} className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gaming-black-light" />

      {/* Decorative Elements */}
      <div className="absolute top-1/4 left-0 w-64 h-64 bg-gaming-red/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-0 w-64 h-64 bg-gaming-red/5 rounded-full blur-3xl" />

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
            Get Started
          </span>
          <h2 className="font-display text-5xl sm:text-6xl text-white mb-6">
            How to <span className="text-gaming-red">Join</span>
          </h2>
          <p className="text-gaming-gray-light text-lg max-w-2xl mx-auto">
            Start your gaming journey in three simple steps. No complicated setup,
            just pure gaming fun.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          {/* SVG Path - Desktop Only */}
          <svg
            className="absolute left-1/2 top-0 h-full w-4 -translate-x-1/2 hidden lg:block"
            viewBox="0 0 4 100"
            preserveAspectRatio="none"
          >
            <motion.path
              d="M 2 0 L 2 100"
              stroke="rgba(255, 0, 0, 0.2)"
              strokeWidth="0.5"
              fill="none"
            />
            <motion.path
              d="M 2 0 Q 2 25, 2 50 Q 2 75, 2 100"
              stroke="#ff0000"
              strokeWidth="0.5"
              fill="none"
              style={{ pathLength }}
              strokeLinecap="round"
            />
          </svg>

          {/* Steps Grid */}
          <div className="space-y-16 lg:space-y-24">
            {steps.map((step, index) => (
              <StepCard
                key={step.number}
                step={step}
                index={index}
                isReversed={index % 2 === 1}
              />
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-20"
        >
          <Link
            to="/games"
            className="btn-cyber inline-flex items-center gap-2 px-10 py-4 rounded-full text-lg"
          >
            Get Started Now
            <Gamepad2 className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

interface StepCardProps {
  step: typeof steps[0];
  index: number;
  isReversed: boolean;
}

function StepCard({ step, index, isReversed }: StepCardProps) {
  return (
    <div
      className={`relative grid lg:grid-cols-2 gap-8 lg:gap-16 items-center animate-fade-in-up ${isReversed ? 'lg:text-right' : ''
        }`}
      style={{ animationDelay: `${index * 150}ms`, opacity: 0, animationFillMode: 'forwards' }}
    >
      {/* Content */}
      <div className={`${isReversed ? 'lg:order-2' : ''}`}>
        <div className={`glass rounded-3xl p-8 ${isReversed ? 'lg:ml-auto' : ''}`}>
          <div className={`flex items-center gap-4 mb-6 ${isReversed ? 'lg:flex-row-reverse' : ''}`}>
            <div className="w-16 h-16 rounded-2xl bg-gaming-red/10 flex items-center justify-center">
              <step.icon className="w-8 h-8 text-gaming-red" />
            </div>
            <div>
              <span className="text-gaming-red font-display text-3xl">{step.number}</span>
              <h3 className="font-display text-2xl text-white">{step.title}</h3>
            </div>
          </div>

          <p className="text-gaming-gray-light mb-6 leading-relaxed">{step.description}</p>

          <ul className={`space-y-2 ${isReversed ? 'lg:text-right' : ''}`}>
            {step.features.map((feature) => (
              <li
                key={feature}
                className={`flex items-center gap-2 text-sm text-gaming-gray-light ${isReversed ? 'lg:flex-row-reverse lg:justify-end' : ''
                  }`}
              >
                <Check className="w-4 h-4 text-gaming-red" />
                {feature}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Visual */}
      <div className={`${isReversed ? 'lg:order-1' : ''}`}>
        <div
          className="relative aspect-video rounded-3xl overflow-hidden glass transition-transform duration-300 hover:scale-[1.02]"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-gaming-red/20 to-gaming-black flex items-center justify-center">
            <div className="text-center">
              <step.icon className="w-20 h-20 text-gaming-red/50 mx-auto mb-4" />
              <span className="font-display text-4xl text-white/20">{step.number}</span>
            </div>
          </div>

          {/* Pulse Effect */}
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.5, 0, 0.5],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="w-32 h-32 rounded-full border-2 border-gaming-red/30"
            />
          </div>
        </div>
      </div>

      {/* Center Dot - Desktop Only */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 hidden lg:block">
        <motion.div
          animate={{
            boxShadow: [
              '0 0 0 0 rgba(255, 0, 0, 0.4)',
              '0 0 0 10px rgba(255, 0, 0, 0)',
            ],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
          }}
          className="w-4 h-4 bg-gaming-red rounded-full"
        />
      </div>
    </div>
  );
}
