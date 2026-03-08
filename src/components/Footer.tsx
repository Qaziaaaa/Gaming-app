import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Gamepad2, Twitter, Youtube, Twitch, Instagram, MessageCircle } from 'lucide-react';

const footerLinks = {
  company: [
    { name: 'About Us', path: '/about' },
    { name: 'Careers', path: '#' },
    { name: 'Press', path: '#' },
    { name: 'Contact', path: '/support' },
  ],
  product: [
    { name: 'Features', path: '/features' },
    { name: 'Games', path: '/games' },
    { name: 'Pricing', path: '/product' },
    { name: 'Download', path: '#' },
  ],
  support: [
    { name: 'Help Center', path: '/support' },
    { name: 'Community', path: '#' },
    { name: 'Status', path: '#' },
    { name: 'Feedback', path: '#' },
  ],
  legal: [
    { name: 'Privacy', path: '#' },
    { name: 'Terms', path: '#' },
    { name: 'Cookies', path: '#' },
    { name: 'Licenses', path: '#' },
  ],
};

const socialLinks = [
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Youtube, href: '#', label: 'YouTube' },
  { icon: Twitch, href: '#', label: 'Twitch' },
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: MessageCircle, href: '#', label: 'Discord' },
];

export default function Footer() {
  return (
    <footer className="relative bg-gaming-black border-t border-gaming-gray-dark overflow-hidden">
      {/* Matrix Rain Background */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0 animate-matrix"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255, 0, 0, 0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255, 0, 0, 0.3) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 py-16">
        {/* Main Footer Content */}
        <div
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 lg:gap-12 animate-fade-in-up"
        >
          {/* Brand Column */}
          <div className="col-span-2 md:col-span-3 lg:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-6">
              <Gamepad2 className="w-10 h-10 text-gaming-red" />
              <span className="font-display text-3xl text-white">BOARD</span>
            </Link>
            <p className="text-gaming-gray-light text-sm leading-relaxed mb-6 max-w-sm">
              Bridging the gap between imagination and reality through gaming.
              Join millions of players in the next generation of social gaming.
            </p>

            {/* Social Links */}
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 rounded-full bg-gaming-gray-dark flex items-center justify-center text-white/60 hover:text-gaming-red hover:bg-gaming-red/10 transition-all group"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5 group-hover:animate-glitch" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-display text-lg text-white mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-gaming-gray-light text-sm hover:text-gaming-red transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Product Links */}
          <div>
            <h4 className="font-display text-lg text-white mb-4">Product</h4>
            <ul className="space-y-3">
              {footerLinks.product.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-gaming-gray-light text-sm hover:text-gaming-red transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h4 className="font-display text-lg text-white mb-4">Support</h4>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-gaming-gray-light text-sm hover:text-gaming-red transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="font-display text-lg text-white mb-4">Legal</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-gaming-gray-light text-sm hover:text-gaming-red transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          className="mt-16 pt-8 border-t border-gaming-gray-dark flex flex-col md:flex-row justify-between items-center gap-4 animate-fade-in-up"
          style={{ animationDelay: '300ms', opacity: 0, animationFillMode: 'forwards' }}
        >
          <p className="text-gaming-gray-light text-sm">
            © {new Date().getFullYear()} BOARD Gaming. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link
              to="#"
              className="text-gaming-gray-light text-sm hover:text-gaming-red transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              to="#"
              className="text-gaming-gray-light text-sm hover:text-gaming-red transition-colors"
            >
              Terms of Service
            </Link>
            <Link
              to="#"
              className="text-gaming-gray-light text-sm hover:text-gaming-red transition-colors"
            >
              Cookie Settings
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
