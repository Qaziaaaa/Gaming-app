import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Gamepad2, ArrowRight } from 'lucide-react';

const categories = ['All', 'Action', 'RPG', 'Racing', 'Strategy', 'MOBA', 'VR'];

const games = [
  {
    id: 1,
    title: 'Neon Racer',
    genre: 'Racing',
    rating: 4.8,
    players: '2.5M',
    image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=600&h=400&fit=crop&q=60&auto=format',
    description: 'High-speed cyberpunk racing through neon-lit cityscapes.',
    tags: ['VR', 'Multiplayer'],
    releaseDate: '2023',
    playtime: '50+ hours',
  },
  {
    id: 2,
    title: 'Cyber Quest',
    genre: 'RPG',
    rating: 4.9,
    players: '5M',
    image: 'https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=600&h=400&fit=crop&q=60&auto=format',
    description: 'Epic open-world adventure in a dystopian future.',
    tags: ['Open World', 'Story'],
    releaseDate: '2022',
    playtime: '100+ hours',
  },
  {
    id: 3,
    title: 'Void Walker',
    genre: 'Action',
    rating: 4.7,
    players: '1.8M',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop&q=60&auto=format',
    description: 'Master the art of dimensional combat.',
    tags: ['PvP', 'Competitive'],
    releaseDate: '2023',
    playtime: '30+ hours',
  },
  {
    id: 4,
    title: 'Stellar Command',
    genre: 'Strategy',
    rating: 4.6,
    players: '900K',
    image: 'https://images.unsplash.com/photo-1602673221577-0b56d7ce446b?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    description: 'Build and command your own space fleet.',
    tags: ['Space', 'MMO'],
    releaseDate: '2021',
    playtime: '200+ hours',
  },
  {
    id: 5,
    title: 'Shadow Legends',
    genre: 'MOBA',
    rating: 4.8,
    players: '3.2M',
    image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=600&h=400&fit=crop&q=60&auto=format',
    description: 'Team-based tactical combat in dark fantasy realms.',
    tags: ['Team', 'Esports'],
    releaseDate: '2020',
    playtime: 'Unlimited',
  },
  {
    id: 6,
    title: 'Apex Hunters',
    genre: 'Action',
    rating: 4.5,
    players: '1.2M',
    image: 'https://images.unsplash.com/photo-1593305841991-05c297ba4575?q=80&w=1057&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    description: 'Hunt or be hunted in this intense survival game.',
    tags: ['Survival', 'PvP'],
    releaseDate: '2023',
    playtime: '40+ hours',
  },
  {
    id: 7,
    title: 'Mystic Realms',
    genre: 'RPG',
    rating: 4.7,
    players: '2.1M',
    image: 'https://images.unsplash.com/photo-1542751110-97427bbecf20?w=600&h=400&fit=crop&q=60&auto=format',
    description: 'Explore magical worlds and uncover ancient secrets.',
    tags: ['Fantasy', 'Co-op'],
    releaseDate: '2022',
    playtime: '80+ hours',
  },
  {
    id: 8,
    title: 'Turbo Drift',
    genre: 'Racing',
    rating: 4.4,
    players: '800K',
    image: 'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=600&h=400&fit=crop&q=60&auto=format',
    description: 'Master the art of drifting in high-performance vehicles.',
    tags: ['Arcade', 'Multiplayer'],
    releaseDate: '2023',
    playtime: '25+ hours',
  },
  {
    id: 9,
    title: 'Galaxy Wars',
    genre: 'Strategy',
    rating: 4.6,
    players: '1.5M',
    image: 'https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=600&h=400&fit=crop&q=60&auto=format',
    description: 'Conquer the galaxy in epic space battles.',
    tags: ['RTS', 'Multiplayer'],
    releaseDate: '2021',
    playtime: '150+ hours',
  },
];

export default function Games() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredGames = games.filter((game) => {
    const matchesCategory = selectedCategory === 'All' || game.genre === selectedCategory;
    const matchesSearch = game.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      game.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="relative min-h-screen pt-24 pb-20">
      <div className="absolute inset-0 bg-gaming-black/90" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block text-gaming-red font-medium uppercase tracking-wider text-sm mb-4">
            Game Library
          </span>
          <h1 className="font-display text-5xl sm:text-6xl text-white mb-4">
            Explore Our <span className="text-gaming-red">Games</span>
          </h1>
          <p className="text-gaming-gray-light text-lg max-w-2xl mx-auto">
            Discover hundreds of games across every genre. From VR experiences to competitive esports.
          </p>
        </motion.div>

        {/* Search and Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col lg:flex-row gap-4 mb-12"
        >
          {/* Search */}
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gaming-gray-light" />
            <input
              type="text"
              placeholder="Search games..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full glass rounded-full py-3 pl-12 pr-4 text-white placeholder:text-gaming-gray-light focus:outline-none focus:ring-2 focus:ring-gaming-red/50"
            />
          </div>

          {/* Category Filter */}
          <div className="flex gap-2 overflow-x-auto pb-2 lg:pb-0 hide-scrollbar">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all ${selectedCategory === category
                  ? 'bg-gaming-red text-white'
                  : 'glass text-white hover:bg-white/10'
                  }`}
              >
                {category}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Games Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedCategory + searchQuery}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredGames.map((game, index) => (
              <GameCard key={game.id} game={game} index={index} />
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Empty State */}
        {filteredGames.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <Gamepad2 className="w-16 h-16 text-gaming-gray-light mx-auto mb-4" />
            <h3 className="font-display text-2xl text-white mb-2">No games found</h3>
            <p className="text-gaming-gray-light">Try adjusting your search or filters</p>
          </motion.div>
        )}

        {/* Load More */}
        {filteredGames.length > 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <button className="glass px-8 py-4 rounded-full text-white hover:bg-white/10 transition-colors inline-flex items-center gap-2 group">
              Load More Games
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>
        )}
      </div>
    </div>
  );
}

interface GameCardProps {
  game: typeof games[0];
  index: number;
}

function GameCard({ game, index }: GameCardProps) {
  return (
    <div
      className="group bg-gaming-black border border-white/5 overflow-hidden transition-all duration-300 hover:border-gaming-red/50 hover:shadow-glow-red/20 flex flex-col h-full animate-fade-in-up"
      style={{ animationDelay: `${index * 50}ms`, opacity: 0, animationFillMode: 'forwards' }}
    >
      {/* Image Container with Scanline on hover */}
      <div className="relative h-48 sm:h-56 overflow-hidden">
        <div className="absolute inset-0 bg-gaming-black/20 group-hover:bg-transparent transition-colors z-10" />
        <img
          src={game.image}
          alt={game.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 filter grayscale-[0.5] group-hover:grayscale-0"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gaming-black to-transparent z-10" />

        {/* Hover Scanline */}
        <div className="absolute inset-0 z-20 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gaming-red/20 to-transparent h-1/4 animate-scanline" />
        </div>

        {/* Top Badges */}
        <div className="absolute top-4 left-4 z-20 flex gap-2">
          <span className="bg-gaming-red text-white text-[10px] font-bold uppercase py-1 px-2 tracking-wider">
            {game.genre}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 relative flex-grow flex flex-col">
        {/* Technical Corner Accents */}
        <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-white/20 group-hover:border-gaming-red transition-colors" />
        <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-white/20 group-hover:border-gaming-red transition-colors" />

        <div className="flex justify-between items-start mb-2">
          <h3 className="font-display text-2xl text-white group-hover:text-gaming-red transition-colors">
            {game.title}
          </h3>
          <span className="text-gaming-red font-mono text-sm leading-none pt-1">v{game.id}.0</span>
        </div>

        <p className="text-gaming-gray-light text-sm mb-6 line-clamp-2">
          {game.description}
        </p>

        <div className="mt-auto space-y-4">
          <div className="flex items-center justify-between text-xs font-mono text-gaming-gray-light border-y border-white/5 py-3 mb-2">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
              <span>ACTIVE: {game.players}</span>
            </div>
            <div>{game.playtime}</div>
          </div>

          <button className="w-full bg-gaming-black-light border-2 border-white/10 text-white font-bold uppercase tracking-widest py-3 text-sm group-hover:border-gaming-red group-hover:bg-gaming-red/10 transition-all">
            Access Node
          </button>
        </div>
      </div>
    </div>
  );
}
