import { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, Sparkles, Zap, Crown, ArrowRight, Shield, HelpCircle } from 'lucide-react';

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
      'Ad-supported experience',
    ],
    notIncluded: [
      'VR games',
      'Priority servers',
      'Exclusive content',
    ],
    cta: 'Get Started Free',
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
      'Everything in Free, plus:',
      'Access to 500+ games',
      'Premium multiplayer',
      'Full VR support',
      'Priority servers',
      'Exclusive content',
      '24/7 priority support',
      'No ads',
      'Early access to new games',
    ],
    notIncluded: [
      'Custom game servers',
      'Dedicated account manager',
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
      'Everything in Pro, plus:',
      'Custom game servers',
      'Beta testing privileges',
      'Dedicated account manager',
      'Exclusive merchandise',
      'Invites to special events',
      'Developer direct line',
      'Lifetime achievements',
    ],
    notIncluded: [],
    cta: 'Go Elite',
    popular: false,
    color: '#ffd700',
  },
];

const faqs = [
  {
    question: 'Can I switch plans anytime?',
    answer: 'Yes! You can upgrade or downgrade your plan at any time. Changes take effect immediately, and you will be billed prorated.',
  },
  {
    question: 'Is there a free trial for Pro and Elite?',
    answer: 'Absolutely! Both Pro and Elite plans come with a 7-day free trial. You can cancel anytime during the trial and will not be charged.',
  },
  {
    question: 'What payment methods do you accept?',
    answer: 'We accept all major credit cards, PayPal, and select regional payment methods. All payments are secure and encrypted.',
  },
  {
    question: 'Can I share my account with family?',
    answer: 'Pro plans support up to 2 simultaneous users, while Elite supports up to 5. Family sharing is available on both plans.',
  },
  {
    question: 'What happens if I cancel?',
    answer: 'You will keep access until the end of your billing period. After that, your account reverts to the Free plan with no data loss.',
  },
];

const comparisons = [
  { feature: 'Game Library', free: '50+', pro: '500+', elite: '500+' },
  { feature: 'Multiplayer', free: 'Basic', pro: 'Premium', elite: 'Premium' },
  { feature: 'VR Support', free: '—', pro: 'Full', elite: 'Full' },
  { feature: 'Cloud Saves', free: '5 GB', pro: '100 GB', elite: 'Unlimited' },
  { feature: 'Support', free: 'Community', pro: '24/7 Priority', elite: 'Dedicated Manager' },
  { feature: 'Ads', free: 'Yes', pro: 'No', elite: 'No' },
  { feature: 'Custom Servers', free: '—', pro: '—', elite: 'Yes' },
  { feature: 'Family Sharing', free: '—', pro: '2 users', elite: '5 users' },
];

export default function Product() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');

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
              Pricing Plans
            </span>
            <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl text-white mb-6">
              Choose Your <span className="text-gaming-red">Plan</span>
            </h1>
            <p className="text-gaming-gray-light text-lg max-w-3xl mx-auto mb-8">
              Flexible pricing for every type of gamer. Start free and upgrade anytime
              as your gaming needs grow.
            </p>

            {/* Billing Toggle */}
            <div className="inline-flex items-center gap-4 glass rounded-full p-1">
              <button
                onClick={() => setBillingCycle('monthly')}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${billingCycle === 'monthly'
                    ? 'bg-gaming-red text-white'
                    : 'text-gaming-gray-light hover:text-white'
                  }`}
              >
                Monthly
              </button>
              <button
                onClick={() => setBillingCycle('yearly')}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all flex items-center gap-2 ${billingCycle === 'yearly'
                    ? 'bg-gaming-red text-white'
                    : 'text-gaming-gray-light hover:text-white'
                  }`}
              >
                Yearly
                <span className="text-xs bg-gaming-red/20 text-gaming-red px-2 py-0.5 rounded-full">
                  Save 20%
                </span>
              </button>
            </div>
          </motion.div>
        </div>

        {/* Pricing Cards */}
        <div className="max-w-7xl mx-auto px-6 mb-32">
          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className={`relative ${plan.popular ? 'md:-mt-4 md:mb-4' : ''}`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gaming-red text-white text-sm font-medium px-4 py-1 rounded-full z-10">
                    Most Popular
                  </div>
                )}

                <div
                  className={`h-full bg-gaming-black-light border-2 p-8 transition-all group ${plan.popular ? 'border-gaming-red shadow-glow-red/20 scale-105 z-10' : 'border-white/5 hover:border-gaming-red/50 hover:bg-gaming-black'
                    }`}
                >
                  {/* Header */}
                  <div className="flex items-center gap-4 mb-6">
                    <div
                      className={`w-12 h-12 flex items-center justify-center border ${plan.popular ? 'border-gaming-red bg-gaming-red/10' : 'border-white/10 bg-gaming-black group-hover:border-gaming-red group-hover:bg-gaming-red/10'} transition-all`}
                    >
                      <plan.icon className={`w-6 h-6 ${plan.popular ? 'text-gaming-red' : 'text-gaming-gray-light group-hover:text-gaming-red'}`} />
                    </div>
                    <div>
                      <h3 className="font-display text-2xl text-white">{plan.name}</h3>
                      <p className="text-gaming-gray-light text-[10px] uppercase tracking-widest">{plan.description}</p>
                    </div>
                  </div>

                  {/* Price */}
                  <div className="mb-8 border-b border-white/5 pb-8">
                    <span className="font-display text-5xl text-white">
                      {billingCycle === 'yearly' && plan.price !== '$0'
                        ? `$${(parseFloat(plan.price.slice(1)) * 0.8).toFixed(2)}`
                        : plan.price}
                    </span>
                    <span className="text-gaming-gray-light text-sm font-mono tracking-widest uppercase ml-2">/{plan.period}</span>
                    {billingCycle === 'yearly' && plan.price !== '$0' && (
                      <p className="text-gaming-red text-[10px] uppercase tracking-widest mt-2 border border-gaming-red/20 inline-block px-2 py-1">
                        Billed annually (save 20%)
                      </p>
                    )}
                  </div>

                  {/* Features */}
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3 text-sm">
                        <Check className="w-5 h-5 text-gaming-red flex-shrink-0" />
                        <span className="text-white font-mono text-xs">{feature}</span>
                      </li>
                    ))}
                    {plan.notIncluded.map((feature) => (
                      <li key={feature} className="flex items-start gap-3 text-sm opacity-40">
                        <span className="w-5 h-5 flex items-center justify-center flex-shrink-0 font-mono text-gaming-gray-light">
                          -
                        </span>
                        <span className="text-gaming-gray-light font-mono text-xs line-through">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <button
                    className={`w-full py-4 font-bold tracking-widest uppercase transition-all border-2 ${plan.popular
                        ? 'bg-gaming-red border-gaming-red text-white hover:bg-transparent hover:text-gaming-red'
                        : 'bg-transparent border-white/10 text-white hover:border-gaming-red hover:bg-gaming-red/10 focus:ring-none'
                      }`}
                  >
                    {plan.cta}
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Comparison Table */}
        <div className="max-w-5xl mx-auto px-6 mb-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="font-display text-4xl text-white mb-4">
              Plan <span className="text-gaming-red">Comparison</span>
            </h2>
            <p className="text-gaming-gray-light">
              See exactly what you get with each plan
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass rounded-2xl overflow-hidden"
          >
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gaming-gray-dark">
                    <th className="text-left p-4 text-white font-display">Feature</th>
                    <th className="text-center p-4 text-gaming-gray-light">Free</th>
                    <th className="text-center p-4 text-gaming-red">Pro</th>
                    <th className="text-center p-4 text-yellow-400">Elite</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisons.map((row) => (
                    <tr key={row.feature} className="border-b border-gaming-gray-dark/50">
                      <td className="p-4 text-gaming-gray-light">{row.feature}</td>
                      <td className="p-4 text-center text-white">{row.free}</td>
                      <td className="p-4 text-center text-white bg-gaming-red/5">{row.pro}</td>
                      <td className="p-4 text-center text-white">{row.elite}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        </div>

        {/* FAQ */}
        <div className="max-w-3xl mx-auto px-6 mb-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="font-display text-4xl text-white mb-4">
              Frequently Asked <span className="text-gaming-red">Questions</span>
            </h2>
          </motion.div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.05 * idx }}
                className="glass rounded-xl overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full flex items-center justify-between p-5 text-left"
                >
                  <span className="text-white font-medium">{faq.question}</span>
                  <HelpCircle
                    className={`w-5 h-5 text-gaming-gray-light transition-transform ${openFaq === idx ? 'rotate-180' : ''
                      }`}
                  />
                </button>
                {openFaq === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="px-5 pb-5"
                  >
                    <p className="text-gaming-gray-light">{faq.answer}</p>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Trust & CTA */}
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass rounded-3xl p-12 text-center"
          >
            <div className="flex justify-center gap-8 mb-8">
              <div className="flex items-center gap-2 text-gaming-gray-light">
                <Shield className="w-5 h-5 text-gaming-red" />
                <span className="text-sm">Secure Payment</span>
              </div>
              <div className="flex items-center gap-2 text-gaming-gray-light">
                <Check className="w-5 h-5 text-gaming-red" />
                <span className="text-sm">Cancel Anytime</span>
              </div>
              <div className="flex items-center gap-2 text-gaming-gray-light">
                <Check className="w-5 h-5 text-gaming-red" />
                <span className="text-sm">7-Day Free Trial</span>
              </div>
            </div>

            <h2 className="font-display text-3xl text-white mb-4">
              Still Have Questions?
            </h2>
            <p className="text-gaming-gray-light mb-8">
              Our team is here to help you choose the right plan
            </p>
            <a
              href="/support"
              className="btn-cyber inline-flex items-center gap-2 px-8 py-4 rounded-full"
            >
              Contact Support
              <ArrowRight className="w-5 h-5" />
            </a>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
