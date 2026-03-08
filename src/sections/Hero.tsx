import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Scene from '../3d/Scene';

export default function Hero() {

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* 3D Background */}
      <Scene variant="hero" />

      {/* Diagonal Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-gaming-black via-gaming-black/95 to-transparent" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 lg:py-0 w-full">
        <div className="flex flex-col items-center text-center space-y-8">

          {/* Headline */}
          <div className="max-w-4xl space-y-6">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.8 }}
              className="font-display text-4xl sm:text-5xl lg:text-6xl text-white leading-tight tracking-tight perspective-1000"
            >
              The Next <span className="text-gaming-red drop-shadow-glow-red">Evolution</span> of Digital Combat
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 1.0 }}
              className="text-base sm:text-lg text-gaming-gray-light max-w-2xl mx-auto leading-relaxed border-l-2 border-gaming-red/30 pl-6 italic"
            >
              Sync your neural interface. Join millions in the world's most advanced
              social gaming ecosystem. High-fidelity. Zero latency.
            </motion.p>
          </div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 1.2 }}
            className="flex flex-wrap justify-center gap-6"
          >
            <Link
              to="/games"
              className="px-10 py-4 bg-gaming-red text-white font-bold uppercase tracking-widest rounded-sm hover:bg-white hover:text-gaming-black transition-all duration-300 shadow-glow-red hover:shadow-none"
            >
              Initialize Node
            </Link>
          </motion.div>

          {/* Minimal Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 1.4 }}
            className="flex gap-12 pt-8"
          >
            {[
              { value: '10M+', label: 'Nodes' },
              { value: '500+', label: 'Sectors' },
            ].map((stat, index) => (
              <div key={index} className="text-left group cursor-crosshair">
                <div className="font-display text-2xl text-white group-hover:text-gaming-red transition-colors">{stat.value}</div>
                <div className="text-[10px] uppercase tracking-widest text-gaming-gray-light">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2"
        >
          <motion.div
            animate={{ opacity: [1, 0], y: [0, 12] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-1.5 bg-gaming-red rounded-full"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
