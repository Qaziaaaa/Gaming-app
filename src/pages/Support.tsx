import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Search, MessageCircle, Mail, Phone,
  ChevronDown, ExternalLink, ArrowRight, HelpCircle,
  User, Gamepad2, Shield, CreditCard
} from 'lucide-react';

const supportCategories = [
  {
    icon: User,
    title: 'Account',
    description: 'Manage your account settings and preferences',
    articles: 24,
  },
  {
    icon: Gamepad2,
    title: 'Games',
    description: 'Game installation, troubleshooting, and gameplay',
    articles: 56,
  },
  {
    icon: CreditCard,
    title: 'Billing',
    description: 'Payments, subscriptions, and refunds',
    articles: 18,
  },
  {
    icon: Shield,
    title: 'Security',
    description: 'Account security and privacy settings',
    articles: 15,
  },
];

const faqs = [
  {
    category: 'Getting Started',
    questions: [
      {
        q: 'How do I create an account?',
        a: 'Click the "Join Now" button on our homepage and follow the simple registration process. You will need a valid email address and to create a password.',
      },
      {
        q: 'How do I download the launcher?',
        a: 'After creating your account, go to the Download page and select your platform (Windows, Mac, or Linux). The installer will download automatically.',
      },
      {
        q: 'Can I play on multiple devices?',
        a: 'Yes! Your progress syncs across all devices. Simply log in with the same account on any supported device.',
      },
    ],
  },
  {
    category: 'Games & Gameplay',
    questions: [
      {
        q: 'How do I install a game?',
        a: 'Browse the game library, click on a game you want to play, and click the "Install" button. The game will download and install automatically.',
      },
      {
        q: 'Why is my game not launching?',
        a: 'Try restarting the launcher first. If that does not work, check that your system meets the game requirements and that your drivers are up to date.',
      },
      {
        q: 'Can I play offline?',
        a: 'Some games support offline play after initial download. Look for the "Offline Play" tag on the game page.',
      },
    ],
  },
  {
    category: 'Billing & Subscriptions',
    questions: [
      {
        q: 'How do I upgrade my plan?',
        a: 'Go to Account Settings > Subscription and click "Upgrade". Choose your new plan and complete the payment process.',
      },
      {
        q: 'How do I cancel my subscription?',
        a: 'You can cancel anytime from Account Settings > Subscription. You will keep access until the end of your billing period.',
      },
      {
        q: 'What payment methods do you accept?',
        a: 'We accept all major credit cards, PayPal, and select regional payment methods.',
      },
    ],
  },
  {
    category: 'Technical Issues',
    questions: [
      {
        q: 'The launcher is running slow',
        a: 'Try clearing the cache from Settings > Advanced > Clear Cache. If issues persist, reinstall the launcher.',
      },
      {
        q: 'I am experiencing lag in games',
        a: 'Check your internet connection, close background applications, and try connecting to a closer server region.',
      },
      {
        q: 'How do I update my graphics drivers?',
        a: 'Visit your GPU manufacturer website (NVIDIA, AMD, or Intel) to download the latest drivers for your card.',
      },
    ],
  },
];

const contactMethods = [
  {
    icon: MessageCircle,
    title: 'Live Chat',
    description: 'Get instant help from our support team',
    availability: 'Available 24/7 for Pro & Elite',
    action: 'Start Chat',
  },
  {
    icon: Mail,
    title: 'Email Support',
    description: 'Send us a message and we will respond within 24 hours',
    availability: 'Response in 24 hours',
    action: 'Send Email',
  },
  {
    icon: Phone,
    title: 'Phone Support',
    description: 'Speak directly with a support specialist',
    availability: 'Mon-Fri, 9AM-6PM EST',
    action: 'Call Us',
  },
];

export default function Support() {
  const [searchQuery, setSearchQuery] = useState('');
  const [openCategory, setOpenCategory] = useState<string | null>('Getting Started');
  const [openQuestion, setOpenQuestion] = useState<string | null>(null);

  const filteredFaqs = faqs.map(category => ({
    ...category,
    questions: category.questions.filter(
      q => q.q.toLowerCase().includes(searchQuery.toLowerCase()) ||
        q.a.toLowerCase().includes(searchQuery.toLowerCase())
    ),
  })).filter(category => category.questions.length > 0);

  return (
    <div className="relative min-h-screen pt-24 pb-20">
      {/* Background */}
      <div className="absolute inset-0 bg-gaming-black" />
      <div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-b from-gaming-red/10 to-transparent" />

      <div className="relative z-10">
        {/* Hero Section */}
        <div className="max-w-4xl mx-auto px-6 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <span className="inline-block text-gaming-red font-medium uppercase tracking-wider text-sm mb-4">
              Help Center
            </span>
            <h1 className="font-display text-5xl sm:text-6xl text-white mb-6">
              How Can We <span className="text-gaming-red">Help?</span>
            </h1>
            <p className="text-gaming-gray-light text-lg mb-8">
              Search our knowledge base or browse categories below
            </p>

            {/* Search */}
            <div className="relative max-w-2xl mx-auto">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gaming-gray-light" />
              <input
                type="text"
                placeholder="Search for answers..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full glass rounded-full py-4 pl-12 pr-4 text-white placeholder:text-gaming-gray-light focus:outline-none focus:ring-2 focus:ring-gaming-red/50"
              />
            </div>
          </motion.div>
        </div>

        {/* Support Categories */}
        {!searchQuery && (
          <div className="max-w-7xl mx-auto px-6 mb-20">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {supportCategories.map((category, index) => (
                <div
                  key={category.title}
                  className="bg-gaming-black-light border border-white/5 p-6 group cursor-pointer hover:border-gaming-red/50 hover:bg-gaming-black transition-all relative overflow-hidden animate-fade-in-up"
                  style={{ animationDelay: `${index * 100}ms`, opacity: 0, animationFillMode: 'forwards' }}
                >
                  {/* Accent Corner */}
                  <div className="absolute top-0 right-0 w-8 h-8 bg-gaming-red/10 group-hover:bg-gaming-red/20 transition-colors" style={{ clipPath: 'polygon(100% 0, 0 0, 100% 100%)' }} />

                  <div className="w-12 h-12 border border-white/10 flex items-center justify-center mb-6 group-hover:border-gaming-red transition-colors bg-gaming-black">
                    <category.icon className="w-6 h-6 text-gaming-gray-light group-hover:text-gaming-red transition-colors" />
                  </div>
                  <h3 className="font-display text-xl text-white mb-2 group-hover:text-gaming-red transition-colors">{category.title}</h3>
                  <p className="text-gaming-gray-light text-xs uppercase tracking-wider mb-6 opacity-60 group-hover:opacity-100 transition-opacity">{category.description}</p>
                  <div className="flex items-center justify-between border-t border-white/5 pt-4">
                    <span className="text-gaming-red text-xs font-mono">{category.articles} docs</span>
                    <ArrowRight className="w-4 h-4 text-gaming-gray-light group-hover:text-gaming-red transition-colors group-hover:translate-x-1" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Quick Links */}
        {!searchQuery && (
          <div className="max-w-7xl mx-auto px-6 mb-20">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="glass rounded-2xl p-6"
            >
              <h3 className="font-display text-xl text-white mb-4">Quick Links</h3>
              <div className="flex flex-wrap gap-3">
                {[
                  'Reset Password',
                  'Download Launcher',
                  'System Requirements',
                  'Refund Policy',
                  'Contact Support',
                  'Report a Bug',
                ].map((link) => (
                  <a
                    key={link}
                    href="#"
                    className="glass px-4 py-2 rounded-full text-sm text-gaming-gray-light hover:text-white hover:bg-white/10 transition-colors flex items-center gap-2"
                  >
                    {link}
                    <ExternalLink className="w-3 h-3" />
                  </a>
                ))}
              </div>
            </motion.div>
          </div>
        )}

        {/* FAQ Section */}
        <div className="max-w-4xl mx-auto px-6 mb-20">
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
            {(searchQuery ? filteredFaqs : faqs).map((category) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="glass rounded-xl overflow-hidden"
              >
                <button
                  onClick={() => setOpenCategory(openCategory === category.category ? null : category.category)}
                  className="w-full flex items-center justify-between p-5 text-left"
                >
                  <span className="text-white font-display text-lg">{category.category}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-gaming-gray-light transition-transform ${openCategory === category.category ? 'rotate-180' : ''
                      }`}
                  />
                </button>

                {openCategory === category.category && (
                  <div className="border-t border-gaming-gray-dark/50">
                    {category.questions.map((item, idx) => (
                      <div key={idx} className="border-b border-gaming-gray-dark/30 last:border-b-0">
                        <button
                          onClick={() => setOpenQuestion(openQuestion === item.q ? null : item.q)}
                          className="w-full flex items-center justify-between p-4 text-left hover:bg-white/5 transition-colors"
                        >
                          <span className="text-gaming-gray-light text-sm">{item.q}</span>
                          <HelpCircle className="w-4 h-4 text-gaming-gray-light flex-shrink-0" />
                        </button>
                        {openQuestion === item.q && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            className="px-4 pb-4"
                          >
                            <p className="text-gaming-gray-light text-sm leading-relaxed">
                              {item.a}
                            </p>
                          </motion.div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </motion.div>
            ))}
          </div>

          {searchQuery && filteredFaqs.length === 0 && (
            <div className="text-center py-12">
              <HelpCircle className="w-12 h-12 text-gaming-gray-light mx-auto mb-4" />
              <p className="text-gaming-gray-light">No results found for &quot;{searchQuery}&quot;</p>
              <button
                onClick={() => setSearchQuery('')}
                className="text-gaming-red mt-2 hover:underline"
              >
                Clear search
              </button>
            </div>
          )}
        </div>

        {/* Contact Section */}
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="font-display text-4xl text-white mb-4">
              Still Need <span className="text-gaming-red">Help?</span>
            </h2>
            <p className="text-gaming-gray-light">
              Our support team is here to assist you
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {contactMethods.map((method, index) => (
              <motion.div
                key={method.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="group relative bg-gaming-black-light border-y lg:border-y-0 lg:border-x border-gaming-gray/30 p-8 hover:border-gaming-red/50 transition-colors"
                style={{
                  clipPath: 'polygon(15px 0, 100% 0, 100% calc(100% - 15px), calc(100% - 15px) 100%, 0 100%, 0 15px)'
                }}
              >
                {/* Accent Corner Line */}
                <div className="absolute top-0 left-0 w-15px h-1 bg-gaming-red transform -rotate-45 origin-top-left -translate-x-[6px] translate-y-[6px]" />

                <div className="w-14 h-14 bg-gaming-red/10 border border-gaming-red/30 flex items-center justify-center mb-6 group-hover:bg-gaming-red/20 group-hover:scale-110 transition-all duration-300" style={{ clipPath: 'polygon(10px 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%, 0 10px)' }}>
                  <method.icon className="w-7 h-7 text-gaming-red" />
                </div>
                <h3 className="font-display text-2xl text-white mb-3">{method.title}</h3>
                <p className="text-gaming-gray-light text-base mb-3 leading-relaxed">{method.description}</p>
                <div className="flex items-center space-x-2 mb-6">
                  <div className="w-2 h-2 rounded-full bg-gaming-red animate-pulse" />
                  <span className="text-gaming-red text-sm font-medium tracking-wide uppercase">{method.availability}</span>
                </div>

                <button className="w-full relative px-6 py-3 bg-gaming-red/10 text-gaming-red border border-gaming-red/50 hover:bg-gaming-red hover:text-white transition-all duration-300 uppercase tracking-widest text-sm font-bold flex items-center justify-center space-x-2 group/btn" style={{ clipPath: 'polygon(10px 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%, 0 10px)' }}>
                  <span>{method.action}</span>
                  <ArrowRight className="w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
