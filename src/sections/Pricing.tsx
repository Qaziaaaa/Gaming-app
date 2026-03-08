import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Check, Sparkles, Zap, Crown } from 'lucide-react';

const plans = [
  {
    name: 'Free',
    price: '$0',
    period: 'forever',
    description: 'Perfect for casual gamers',
    icon: Sparkles,
    features: [
      'Access to 50+ free games',
      'Basic multiplayer',
      'Community access',
      'Cloud saves',
      'Standard support',
    ],
    cta: 'Get Started',
    popular: false,
    color: '#999999',
  },
  {
    name: 'Pro',
    price: '$9.99',
    period: 'per month',
    description: 'For serious gamers',
    icon: Zap,
    features: [
      'Access to 500+ games',
      'Premium multiplayer',
      'VR support',
      'Priority servers',
      'Exclusive content',
      '24/7 support',
    ],
    cta: 'Start Free Trial',
    popular: true,
    color: '#ff0000',
  },
  {
    name: 'Elite',
    price: '$19.99',
    period: 'per month',
    description: 'The ultimate experience',
    icon: Crown,
    features: [
      'All Pro features',
      'Early access to new games',
      'Beta testing privileges',
      'Custom game servers',
      'Dedicated account manager',
      'Exclusive merchandise',
    ],
    cta: 'Go Elite',
    popular: false,
    color: '#ffd700',
  },
];

export default function Pricing() {
  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gaming-black" />

      {/* Decorative Elements */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-gaming-red/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-gaming-red/5 rounded-full blur-3xl" />

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
            Pricing Plans
          </span>
          <h2 className="font-display text-5xl sm:text-6xl text-white mb-6">
            Choose Your <span className="text-gaming-red">Plan</span>
          </h2>
          <p className="text-gaming-gray-light text-lg max-w-2xl mx-auto">
            Flexible pricing for every type of gamer. Upgrade or downgrade anytime.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 perspective-1000">
          {plans.map((plan, index) => (
            <PricingCard key={plan.name} plan={plan} index={index} />
          ))}
        </div>

        {/* Trust Badges */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <p className="text-gaming-gray-light text-sm mb-4">
            Trusted by 10M+ gamers worldwide
          </p>
          <div className="flex justify-center gap-8">
            {['Secure Payment', 'Cancel Anytime', '24/7 Support'].map((badge) => (
              <div key={badge} className="flex items-center gap-2 text-gaming-gray-light text-sm">
                <Check className="w-4 h-4 text-gaming-red" />
                {badge}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

interface PricingCardProps {
  plan: typeof plans[0];
  index: number;
}

function PricingCard({ plan, index }: PricingCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      ref={cardRef}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`relative rounded-3xl overflow-hidden animate-fade-in-up ${plan.popular ? 'lg:-mt-4 lg:mb-4' : ''
        }`}
      style={{ animationDelay: `${index * 150}ms`, opacity: 0, animationFillMode: 'forwards' }}
    >
      {/* Popular Badge */}
      {plan.popular && (
        <div className="absolute top-0 left-0 right-0 bg-gaming-red text-white text-center py-2 text-sm font-medium z-10">
          Most Popular
        </div>
      )}

      <div
        className={`relative h-full glass rounded-3xl p-8 ${plan.popular ? 'pt-14 border-gaming-red/50' : ''
          } transition-all duration-300`}
        style={{
          boxShadow: isHovered ? `0 25px 50px -12px ${plan.color}40` : undefined,
        }}
      >
        {/* Glare Effect */}
        <motion.div
          className="absolute inset-0 rounded-3xl pointer-events-none"
          style={{
            background: isHovered
              ? `linear-gradient(105deg, transparent 40%, rgba(255, 255, 255, 0.1) 50%, transparent 60%)`
              : 'none',
            opacity: isHovered ? 1 : 0,
          }}
        />

        {/* Icon */}
        <div
          className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6"
          style={{ backgroundColor: `${plan.color}20` }}
        >
          <plan.icon className="w-7 h-7" style={{ color: plan.color }} />
        </div>

        {/* Plan Name */}
        <h3 className="font-display text-2xl text-white mb-2">{plan.name}</h3>
        <p className="text-gaming-gray-light text-sm mb-6">{plan.description}</p>

        {/* Price */}
        <div className="mb-8">
          <span className="font-display text-5xl text-white">{plan.price}</span>
          <span className="text-gaming-gray-light text-sm">/{plan.period}</span>
        </div>

        {/* Features */}
        <ul className="space-y-3 mb-8">
          {plan.features.map((feature) => (
            <li key={feature} className="flex items-center gap-3 text-sm">
              <Check className="w-5 h-5 text-gaming-red flex-shrink-0" />
              <span className="text-gaming-gray-light">{feature}</span>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <Link
          to="/product"
          className={`block w-full text-center py-4 rounded-full font-medium transition-all ${plan.popular
            ? 'btn-cyber'
            : 'glass text-white hover:bg-white/10'
            }`}
        >
          {plan.cta}
        </Link>
      </div>
    </div>
  );
}
