import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Gamepad2 } from 'lucide-react';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Games', path: '/games' },
  { name: 'Features', path: '/features' },
  { name: 'About', path: '/about' },
  { name: 'Product', path: '/product' },
  { name: 'Support', path: '/support' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
          ? 'py-3'
          : 'py-5'
          }`}
      >
        <div
          className={`mx-auto transition-all duration-300 ${isScrolled
            ? 'max-w-4xl px-6 py-3 glass rounded-full mx-4 sm:mx-auto'
            : 'max-w-7xl px-6'
            }`}
        >
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2 group">
              <div className="relative transition-transform duration-500 hover:rotate-180">
                <Gamepad2 className="w-8 h-8 text-gaming-red" />
                <div className="absolute inset-0 bg-gaming-red/30 blur-lg rounded-full" />
              </div>
              <span className="font-display text-2xl text-white group-hover:text-gaming-red transition-colors">
                BOARD
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8 animate-fade-in-up">
              {navLinks.map((link) => (
                <div key={link.name}>
                  <Link
                    to={link.path}
                    className={`relative text-sm font-medium uppercase tracking-wider transition-colors group ${location.pathname === link.path
                      ? 'text-gaming-red'
                      : 'text-white/80 hover:text-white'
                      }`}
                  >
                    {link.name}
                    <span
                      className={`absolute -bottom-1 left-0 h-0.5 bg-gaming-red transition-all duration-300 ${location.pathname === link.path
                        ? 'w-full'
                        : 'w-0 group-hover:w-full'
                        }`}
                    />
                    {/* Target bracket effect */}
                    <span className="absolute -left-2 top-1/2 -translate-y-1/2 w-1 h-1 bg-gaming-red opacity-0 group-hover:opacity-100 transition-opacity" />
                    <span className="absolute -right-2 top-1/2 -translate-y-1/2 w-1 h-1 bg-gaming-red opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden lg:block animate-fade-in-up">
              <Link
                to="/games"
                className="btn-cyber px-6 py-2.5 rounded-full text-sm"
              >
                Join Now
              </Link>
            </div>

            {/* Mobile Menu Button - unchanged for now as it's purely interactive, not load blocking */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden relative w-10 h-10 flex items-center justify-center transition-transform active:scale-95"
            >
              <AnimatePresence mode="wait">
                {isMobileMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X className="w-6 h-6 text-white" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu className="w-6 h-6 text-white" />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/95"
              onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* Menu Content */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="absolute right-0 top-0 bottom-0 w-80 bg-gaming-black-light border-l border-gaming-gray-dark"
            >
              <div className="flex flex-col pt-24 px-8">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 * index, duration: 0.3 }}
                  >
                    <Link
                      to={link.path}
                      className={`block py-4 text-2xl font-display uppercase tracking-wider transition-colors ${location.pathname === link.path
                        ? 'text-gaming-red'
                        : 'text-white/80 hover:text-white'
                        }`}
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                ))}

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 0.3 }}
                  className="mt-8"
                >
                  <Link
                    to="/games"
                    className="btn-cyber block text-center px-8 py-4 rounded-full text-lg"
                  >
                    Join Now
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
