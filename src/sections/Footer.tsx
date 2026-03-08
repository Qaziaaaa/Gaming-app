import { useState } from 'react';
import { Linkedin, Twitter, Facebook, Instagram } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const navLinks = [
  { name: 'About us', href: '/about' },
  { name: 'Pricing', href: '/pricing' },
  { name: 'Blog', href: '/blog' },
];

const socialLinks = [
  { name: 'LinkedIn', icon: Linkedin, href: '#' },
  { name: 'Twitter', icon: Twitter, href: '#' },
  { name: 'Facebook', icon: Facebook, href: '#' },
  { name: 'Instagram', icon: Instagram, href: '#' },
];

export default function Footer() {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Thank you for subscribing with: ${email}`);
    setEmail('');
  };

  return (
    <footer className="bg-dark text-white pt-12 lg:pt-16 pb-6">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-16">
        {/* Top Section */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-10 lg:gap-16 mb-12 lg:mb-16">
          {/* Logo & Navigation */}
          <div className="space-y-6">
            {/* Logo */}
            <Link to="/#hero" className="flex items-center gap-2 group">
              <svg
                width="36"
                height="36"
                viewBox="0 0 36 36"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-white group-hover:rotate-12 transition-transform duration-300"
              >
                <path
                  d="M18 0L22.5 13.5L36 18L22.5 22.5L18 36L13.5 22.5L0 18L13.5 13.5L18 0Z"
                  fill="currentColor"
                />
              </svg>
              <span className="text-xl lg:text-2xl font-bold tracking-tight">Positivus</span>
            </Link>

            {/* Navigation */}
            <nav className="flex flex-wrap gap-4 lg:gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href.startsWith('#') ? `/${link.href}` : link.href}
                  className="text-sm lg:text-base text-white/80 hover:text-white transition-colors underline underline-offset-4"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-base font-medium text-lime">Contact us:</h4>
            <div className="space-y-2 text-sm lg:text-base text-white/80">
              <p>Email: info@positivus.com</p>
              <p>Phone: +1 (123) 456-789</p>
              <p>Address: 123 Main Street</p>
              <p>Moonstone, Stardust State 12345</p>
            </div>
          </div>

          {/* Newsletter */}
          <div className="w-full lg:w-auto">
            <form
              onSubmit={handleSubscribe}
              className="flex flex-col sm:flex-row gap-3"
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                className="px-4 py-3 rounded-lg bg-white/10 border border-white/30 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-lime transition-shadow min-w-[200px] lg:min-w-[250px]"
              />
              <Button
                type="submit"
                className="bg-lime text-black hover:bg-lime/90 rounded-lg px-6 py-3 h-12 text-sm font-normal transition-all duration-300"
              >
                Subscribe to news
              </Button>
            </form>
          </div>
        </div>

        {/* Social Links */}
        <div className="flex justify-center lg:justify-start gap-4 mb-10 lg:mb-12">
          {socialLinks.map((social) => (
            <a
              key={social.name}
              href={social.href}
              className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-lime hover:text-black transition-colors"
              aria-label={social.name}
            >
              <social.icon className="w-5 h-5" />
            </a>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/20 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-white/60">
            © 2023 Positivus. All rights reserved.
          </p>
          <a
            href="#"
            className="text-sm text-white/60 hover:text-white transition-colors underline underline-offset-4"
          >
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  );
}
