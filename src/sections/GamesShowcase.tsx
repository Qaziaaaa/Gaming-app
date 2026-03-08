import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const games = [
  {
    id: 1,
    title: 'Neon Racer',
    genre: 'Racing',
    rating: 4.8,
    players: '2.5M',
    image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=600&h=400&fit=crop&q=60&auto=format',
    description: 'High-speed cyberpunk racing through neon-lit cityscapes.',
    tags: ['VR', 'Multiplayer', 'Racing'],
  },
  {
    id: 2,
    title: 'Cyber Quest',
    genre: 'RPG',
    rating: 4.9,
    players: '5M',
    image: 'https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=600&h=400&fit=crop&q=60&auto=format',
    description: 'Epic open-world adventure in a dystopian future.',
    tags: ['Open World', 'RPG', 'Story'],
  },
  {
    id: 3,
    title: 'Void Walker',
    genre: 'Action',
    rating: 4.7,
    players: '1.8M',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop&q=60&auto=format',
    description: 'Master the art of dimensional combat.',
    tags: ['Action', 'PvP', 'Competitive'],
  },
  {
    id: 4,
    title: 'Stellar Command',
    genre: 'Strategy',
    rating: 4.6,
    players: '900K',
    image: 'https://images.unsplash.com/photo-1556537570-231ead2a4009?q=80&w=1072&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    description: 'Build and command your own space fleet.',
    tags: ['Strategy', 'Space', 'MMO'],
  },
  {
    id: 5,
    title: 'Shadow Legends',
    genre: 'MOBA',
    rating: 4.8,
    players: '3.2M',
    image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=600&h=400&fit=crop&q=60&auto=format',
    description: 'Team-based tactical combat in dark fantasy realms.',
    tags: ['MOBA', 'Team', 'Esports'],
  },
];

export default function GamesShowcase() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const x = useTransform(scrollYProgress, [0, 1], ['0%', '-50%']);

  return (
    <section ref={containerRef} className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gaming-black" />

      {/* Decorative Grid */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255, 0, 0, 0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 0, 0, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
        }}
      />

      <div className="relative z-10">
        {/* Section Header */}
        <div className="max-w-7xl mx-auto px-6 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6"
          >
            <div>
              <span className="inline-block text-gaming-red font-medium uppercase tracking-wider text-sm mb-4">
                Featured Games
              </span>
              <h2 className="font-display text-5xl sm:text-6xl text-white">
                Explore <span className="text-gaming-red">Worlds</span>
              </h2>
            </div>
            <Link
              to="/games"
              className="inline-flex items-center gap-2 text-gaming-red font-medium hover:gap-4 transition-all group"
            >
              View All Games
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>

        {/* Horizontal Scroll Container */}
        <div className="relative">
          <motion.div
            style={{ x }}
            className="flex gap-6 px-6"
          >
            {[...games, ...games].map((game, index) => (
              <GameCard key={`${game.id}-${index}`} game={game} index={index} />
            ))}
          </motion.div>
        </div>

        {/* Featured Game Banner */}
        <div className="max-w-7xl mx-auto px-6 mt-20">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative rounded-3xl overflow-hidden"
          >
            <div className="absolute inset-0">
              <img
                src="https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=1920&h=600&fit=crop&q=60&auto=format"
                alt="Featured Game"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-gaming-black via-gaming-black/80 to-transparent" />
            </div>

            <div className="relative z-10 p-8 sm:p-12 lg:p-16">
              <div className="max-w-xl">
                <span className="inline-block bg-gaming-red text-white px-4 py-1 text-[10px] font-bold uppercase tracking-widest mb-4">
                  Top Tier Selection
                </span>
                <h3 className="font-display text-4xl sm:text-5xl text-white mb-4">
                  Cyber Quest: <span className="text-gaming-red whitespace-nowrap">RED VOLT</span>
                </h3>
                <p className="text-gaming-gray-light mb-8 max-w-sm border-l border-white/20 pl-4 italic">
                  Experience the award-winning RPG like never before.
                  Synchronized updates now active across all sectors.
                </p>
                <Link
                  to="/games"
                  className="inline-block px-12 py-4 bg-white text-gaming-black font-bold uppercase tracking-widest hover:bg-gaming-red hover:text-white transition-all duration-300"
                >
                  Enter Nexus
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

interface GameCardProps {
  game: typeof games[0];
  index: number;
}

function GameCard({ game, index }: GameCardProps) {
  return (
    <div
      className="relative flex-shrink-0 w-80 group animate-fade-in-up transition-transform duration-300 hover:-translate-y-2"
      style={{ animationDelay: `${index * 50}ms`, opacity: 0, animationFillMode: 'forwards' }}
    >
      {/* Background with unique clip-path or sharp corners */}
      <div className="relative bg-gaming-black-light border-l-4 border-gaming-red overflow-hidden transition-all duration-300 group-hover:bg-gaming-black-lighter shadow-[4px_0_20px_rgba(255,0,0,0.1)] group-hover:shadow-[8px_0_30px_rgba(255,0,0,0.3)]">

        {/* Scanline Overlay on Hover */}
        <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-10 opacity-[0.03] z-20 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_2px,3px_100%]" />

        {/* Image */}
        <div className="relative h-44 overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-500">
          <img
            src={game.image}
            alt={game.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gaming-black-light via-transparent to-transparent" />

          <div className="absolute top-0 right-0 p-3">
            <div className="text-[10px] font-bold tracking-tighter text-gaming-red uppercase bg-black/80 px-2 py-1 flex items-center gap-1">
              <div className="w-1 h-1 bg-gaming-red rounded-full animate-pulse" />
              Live Now
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 relative">
          <div className="flex justify-between items-start mb-2">
            <div>
              <span className="text-[10px] uppercase tracking-widest text-gaming-gray-light block mb-1">
                {game.genre} // Sector 0{game.id}
              </span>
              <h3 className="font-display text-2xl text-white group-hover:text-gaming-red transition-colors duration-300">
                {game.title}
              </h3>
            </div>
          </div>

          <div className="flex items-center gap-4 mt-6 pt-4 border-t border-white/5">
            <div className="flex -space-x-2">
              {[1, 2, 3].map(i => (
                <div key={i} className="w-6 h-6 rounded-full border border-gaming-black bg-gaming-gray-dark flex items-center justify-center text-[8px] text-white">
                  J{i}
                </div>
              ))}
            </div>
            <span className="text-[10px] text-gaming-gray-light uppercase tracking-widest">{game.players} ACTIVE</span>
          </div>

          {/* Action Decoration */}
          <div className="absolute bottom-0 right-0 p-2 opacity-0 group-hover:opacity-100 transition-opacity">
            <div className="w-8 h-8 border-r-2 border-b-2 border-gaming-red" />
          </div>
        </div>
      </div>
    </div>
  );
}
